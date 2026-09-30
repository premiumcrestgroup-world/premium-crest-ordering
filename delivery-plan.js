/* Premium Crest delivery planner v2.0
 * Supports dated add-ons that can ride with a same-day meal or be sent separately.
 * Public API kept compatible: PCDelivery.plan(cart, mealMode)
 */
(function(global){
  'use strict';

  const WEEKDAYS=['Monday','Tuesday','Wednesday','Thursday','Friday'];
  const MEALS=['breakfast','lunch'];

  function validIso(iso){
    return /^\d{4}-\d{2}-\d{2}$/.test(String(iso||''));
  }
  function dayFromIso(iso){
    if(!validIso(iso))return '';
    const d=new Date(String(iso)+'T12:00:00Z');
    if(Number.isNaN(d.getTime())||d.toISOString().slice(0,10)!==iso)return '';
    const n=d.getUTCDay();
    return n>=1&&n<=5?WEEKDAYS[n-1]:'';
  }
  function unique(arr){return Array.from(new Set(arr));}

  function plan(items, mealMode){
    const mode=mealMode==='together'?'together':'separate';
    const days={};

    (Array.isArray(items)?items:[]).forEach(item=>{
      if(!item||!validIso(item.serviceDate))return;
      const serviceDate=String(item.serviceDate);
      const derivedDay=dayFromIso(serviceDate);
      if(!derivedDay)return;
      if(!days[serviceDate]){
        days[serviceDate]={serviceDate,day:derivedDay,week:Number(item.week)||0,meals:{},addonSeparate:false,addonWithMeal:[]};
      }
      const d=days[serviceDate];
      if(item.kind==='meal'){
        const meal=String(item.meal||'').toLowerCase();
        if(MEALS.includes(meal))d.meals[meal]=true;
        if(Number(item.week))d.week=Number(item.week);
      }else if(item.kind==='addon'){
        const delivery=String(item.addonDeliveryMode||item.addonDelivery||'separate');
        const target=String(item.withMeal||'').toLowerCase();
        if(delivery==='with_meal'&&MEALS.includes(target))d.addonWithMeal.push(target);
        else d.addonSeparate=true;
      }
    });

    const ordered=Object.values(days).sort((a,b)=>a.serviceDate.localeCompare(b.serviceDate));
    let totalTrips=0;
    let eligible=false;
    const signatureParts=[];

    const resultDays=ordered.map(d=>{
      const meals=MEALS.filter(m=>d.meals[m]);
      if(meals.length===2)eligible=true;

      // If a cart became stale after a meal was removed, count that add-on as a
      // separate trip rather than undercharging. The frontend normally repairs it.
      const validJoins=unique(d.addonWithMeal.filter(m=>meals.includes(m))).sort();
      const invalidJoin=d.addonWithMeal.some(m=>!meals.includes(m));
      const addonSeparate=!!d.addonSeparate||invalidJoin;
      const mealTrips=meals.length?(mode==='together'?1:meals.length):0;
      const trips=mealTrips+(addonSeparate?1:0);
      totalTrips+=trips;

      signatureParts.push([
        d.serviceDate,
        'M='+meals.join('+'),
        'AM='+validJoins.join('+'),
        'AS='+(addonSeparate?'1':'0'),
        'MM='+mode
      ].join(':'));

      return {
        week:d.week,
        day:d.day,
        serviceDate:d.serviceDate,
        meals,
        addonWithMeal:validJoins,
        addonSeparate,
        trips
      };
    });

    // Legacy safety: an undated add-on-only cart previously counted as one trip.
    if(!resultDays.length && (Array.isArray(items)?items:[]).some(x=>x&&x.kind==='addon')){
      return {trips:1,eligible:false,signature:'legacy-addons-only',days:[]};
    }

    return {
      trips:totalTrips,
      eligible,
      signature:signatureParts.join('|')||'empty',
      days:resultDays
    };
  }

  global.PCDelivery={plan};
})(typeof window!=='undefined'?window:globalThis);
