/* Premium Crest Security V2 overlay. Load only after app-core.js. */
(function(){
  'use strict';

  function ready(){
    return typeof data !== 'undefined' && data &&
      typeof requestJsonp === 'function' &&
      document.querySelector('#checkoutForm');
  }

  function secureItems(){
    return cart.map(x=>{
      if(x.kind==='meal'){
        return {
          kind:'meal', week:x.week, day:x.day, meal:x.meal,
          serviceDate:x.serviceDate, qty:x.qty,
          items:(x.items||[]).map(i=>({no:i.no}))
        };
      }
      return {
        kind:'addon', id:x.id, week:x.week, day:x.day,
        serviceDate:x.serviceDate, qty:x.qty,
        addonDelivery:x.addonDelivery||'separate'
      };
    });
  }

  async function syncAuthoritativePricing(){
    try{
      const result=await requestJsonp('settings');
      if(!result?.ok||!result.settings)return;
      const s=result.settings;
      const set=(key,target)=>{const n=Number(s[key]);if(Number.isFinite(n)&&n>=0)target(n);};
      set('SET_1M2V',v=>data.pricing.oneMeatTwoVeg=v);
      set('SET_2M1V',v=>data.pricing.twoMeatOneVeg=v);
      set('ADD_MEAT',v=>data.pricing.extraMeat=v);
      set('ADD_VEG',v=>data.pricing.extraVeg=v);
      set('REGULAR_NOODLE_RICE',v=>data.pricing.regularCarb=v);
      set('SEAFOOD_NOODLE_RICE',v=>data.pricing.seafoodCarb=v);
      set('WHOLE_CHICKEN_LEG',v=>data.pricing.wholeChickenLeg=v);
      set('CHICKEN_DRUMSTICK',v=>data.pricing.drumstick=v);

      const addonPrice={
        A01:Number(s.REGULAR_NOODLE_RICE),A02:Number(s.REGULAR_NOODLE_RICE),
        A03:Number(s.REGULAR_NOODLE_RICE),A04:Number(s.REGULAR_NOODLE_RICE),
        A05:Number(s.SEAFOOD_NOODLE_RICE),A06:Number(s.SEAFOOD_NOODLE_RICE),
        A07:Number(s.SEAFOOD_NOODLE_RICE),A08:Number(s.SEAFOOD_NOODLE_RICE),
        A09:Number(s.WHOLE_CHICKEN_LEG),A10:Number(s.CHICKEN_DRUMSTICK)
      };
      (data.addons||[]).forEach(a=>{if(Number.isFinite(addonPrice[a.id]))a.price=addonPrice[a.id];});

      // Reprice any retained local cart using current authoritative public settings.
      cart.forEach(x=>{
        if(x.kind==='meal')x.price=Math.round(calculateMeal(x.items||[]).total*(readQty(x.qty)||0)*100)/100;
        else if(x.kind==='addon'){
          const a=(data.addons||[]).find(v=>v.id===x.id);
          if(a){x.unitPrice=a.price;x.price=Math.round(a.price*(readQty(x.qty)||0)*100)/100;}
        }
      });
      persistCart();
      renderMeal();renderAddons();updateCart();renderWeeklyPlanner();
    }catch(err){
      console.warn('Security V2 price sync failed; server will still recalculate at checkout.',err);
    }
  }

  async function securePlaceOrder(e){
    e.preventDefault();
    if(isSubmitting)return;
    if(weeklyMode&&!checkWeeklyReady())return;
    if(!cart.length){alert(t('cartEmptyAlert'));return;}
    const stale=cart.filter(invalidCartMeal);
    if(stale.length){alert(calendarText('staleCart'));return;}
    const late=cart.find(x=>x.serviceDate&&!bookingValid(x.serviceDate,x.qty||1));
    if(late){alert(bookingText('expired')+'\n'+showDeadline(late.serviceDate,late.qty||1));return;}
    if(cart.some(x=>!readQty(x.qty||1))){alert(qtyLabel());return;}
    if(isDelivery()&&(!validQuote()||deliveryQuote.manual||!$('#deliveryMatched').checked)){
      alert(validQuote()&&deliveryQuote.manual?dt('tooFar'):dt('quoteFirst'));return;
    }
    if(!paymentReady($('#paymentSelect').value)){alert(pt('choose'));return;}

    const submitBtn=e.target.querySelector('button[type="submit"]');
    const originalText=submitBtn.textContent;
    isSubmitting=true;submitBtn.disabled=true;submitBtn.textContent=t('submitting');

    try{
      const form=Object.fromEntries(new FormData(e.target).entries());
      const serviceDates=[...new Set(cart.map(x=>x.serviceDate).filter(Boolean))].sort();
      const mealCount=cart.filter(x=>x.kind==='meal').reduce((n,x)=>n+(x.qty||1),0);
      form.orderType=serviceDates.length>1?'Weekly':mealCount>1?'Full Day':mealCount===1?'Single Meal':'Add-on Only';
      form.serviceDate=serviceDates.length>1?`${serviceDates[0]} – ${serviceDates.at(-1)}`:(serviceDates[0]||'');

      const order={
        orderId:createOrderId(),createdAt:new Date().toISOString(),customer:form,
        items:secureItems(),
        deliveryMode:isDelivery()?chosenMode():'pickup',
        jointTime:isDelivery()&&chosenMode()==='together'?chosenJointTime():'none',
        deliverySignature:isDelivery()?tripSignature():null,
        deliveryQuoteId:isDelivery()?deliveryQuote.quoteId:null,
        deliveryTrips:isDelivery()?deliveryTrips():0,
        deliveryDistanceKm:isDelivery()?deliveryQuote.distanceKm:null
      };

      if(!CONFIG.appsScriptUrl)throw new Error('Apps Script URL missing');
      await fetch(CONFIG.appsScriptUrl,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(order)});

      let receipt;
      for(let i=0;i<5;i++){
        await new Promise(r=>setTimeout(r,1600));
        try{receipt=await requestJsonp('orderStatus',{orderId:order.orderId});if(receipt.ok&&receipt.found)break;}catch(_e){}
      }
      if(!receipt||!receipt.found){
        $('#orderResult').classList.remove('hidden');
        $('#orderResult').textContent=dt('unverified')+' Order ID: '+order.orderId;
        submitBtn.disabled=true;submitBtn.textContent=t('submitted');
        return;
      }

      const serverTotal=Number(receipt.total);
      $('#orderResult').classList.remove('hidden');
      $('#orderResult').textContent=`${t('success')} · ${order.orderId} · ${dt('grandTotal')}: ${money(Number.isFinite(serverTotal)?serverTotal:0)}. ${t('doNotRepeat')}`;
      cart=[];localStorage.removeItem(weeklyStorageKey());weeklyDrafts=PCWeekly.emptyDraft(false);
      persistCart();saveWeeklyDraft();renderWeeklyPlanner();e.target.reset();applyLanguage();
      submitBtn.disabled=true;submitBtn.textContent=t('submitted');
    }catch(err){
      isSubmitting=false;submitBtn.disabled=false;submitBtn.textContent=originalText;
      alert(t('submitFail')+' '+err.message);
    }
  }

  function install(){
    if(!ready()){setTimeout(install,100);return;}
    const form=document.querySelector('#checkoutForm');
    form.onsubmit=securePlaceOrder;
    syncAuthoritativePricing();
    console.info('Premium Crest Security V2 overlay active');
  }

  install();
})();