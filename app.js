const CONFIG = {
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbypZeSwTKE4Br6wCu3d-CHtmyjo0mrwMSh-YV_ASYZ287TP7ksdBe9LjKTgc7fjdj4I/exec",
  currency: "RM",
  kitchenAddress: "1608, Lorong Urat Mata 3, Tabuan Jaya, 93350 Kuching, Sarawak"
};

const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
const DAY_ZH = {Monday:"星期一",Tuesday:"星期二",Wednesday:"星期三",Thursday:"星期四",Friday:"星期五"};
const DAY_MS = {Monday:"Isnin",Tuesday:"Selasa",Wednesday:"Rabu",Thursday:"Khamis",Friday:"Jumaat"};

const I18N = {
  zh:{
    headerTitle:"在线点餐",headerSubtitle:"自由选餐 · 自动算价 · 早餐午餐 · 可订整周",cart:"购物车",heroTitle:"直接点进去就可以下单 🍱",heroText:"选择 Week、星期、早餐/午餐，然后直接点击食物卡片。系统会自动判断套餐与加菜/加肉价格。",set1:"1肉2菜",set2:"2肉1菜",weekLabel:"星期菜单",dayLabel:"日期",mealLabel:"餐别",breakfast:"早餐",lunch:"午餐",chooseFood:"自由选择食物",clear:"清除选择",mealSummary:"本餐选择",addMeal:"加入购物车",minHint:"提示：至少需要 1肉2菜 或 2肉1菜 才能加入购物车。",addons:"单点加购",addonsHint:"可在结账前随时添加",close:"关闭",total:"总计",customerDetails:"顾客资料",name:"姓名",phone:"电话号码",fulfilment:"取餐方式",address:"地址",payment:"付款方式",paymentRef:"付款参考号",remarks:"备注",placeOrder:"确认下单",noFood:"还没有选择食物",meat:"肉类",veg:"菜类",meatShort:"肉",vegShort:"菜",extraMeat:"加肉",extraVeg:"加菜",mealTotal:"本餐合计",selected:"已选",needSet:"请选择至少 1肉2菜 或 2肉1菜",emptyCart:"购物车目前是空的。",remove:"删除",addonCart:"单点加购",selfPickup:"Self Pickup / 自取",delivery:"Delivery / 送餐",duitnow:"DuitNow QR",bank:"Bank Transfer",cash:"Cash",remarksPlaceholder:"少辣 / 不辣 / 少饭 ...",cartEmptyAlert:"购物车是空的",submitting:"提交中…",submitted:"✅ 已提交",success:"✅ 下单成功",doNotRepeat:"请勿重复点击提交。如需再下单，请重新加入餐点。",submitFail:"订单提交失败，请检查 Apps Script URL 或网络连接。",demoNote:"目前是 Demo 模式：订单已存放在此浏览器。接上 Google Apps Script 后会自动写入 Google Sheets。",week:"第{n}周",set2label:"2肉1菜",set1label:"1肉2菜"
  },
  en:{
    headerTitle:"Online Ordering",headerSubtitle:"Choose freely · Auto pricing · Breakfast & lunch · Weekly orders",cart:"Cart",heroTitle:"Order directly online 🍱",heroText:"Choose a week, day and meal, then tap the food cards you want. The system calculates the set and extras automatically.",set1:"1 Meat + 2 Vegetables",set2:"2 Meats + 1 Vegetable",weekLabel:"Menu Week",dayLabel:"Day",mealLabel:"Meal",breakfast:"Breakfast",lunch:"Lunch",chooseFood:"Choose Your Food",clear:"Clear Selection",mealSummary:"Meal Summary",addMeal:"Add Meal to Cart",minHint:"Choose at least 1 meat + 2 vegetables or 2 meats + 1 vegetable before adding to cart.",addons:"À La Carte Add-ons",addonsHint:"You can add these any time before checkout",close:"Close",total:"Total",customerDetails:"Customer Details",name:"Name",phone:"Phone",fulfilment:"Fulfilment",address:"Address",payment:"Payment Method",paymentRef:"Payment Reference",remarks:"Remarks",placeOrder:"Place Order",noFood:"No food selected yet",meat:"Meat",veg:"Vegetable",meatShort:"Meat",vegShort:"Veg",extraMeat:"Extra Meat",extraVeg:"Extra Vegetable",mealTotal:"Meal Total",selected:"Selected",needSet:"Choose at least 1 meat + 2 vegetables or 2 meats + 1 vegetable",emptyCart:"Your cart is empty.",remove:"Remove",addonCart:"Add-on",selfPickup:"Self Pickup",delivery:"Delivery",duitnow:"DuitNow QR",bank:"Bank Transfer",cash:"Cash",remarksPlaceholder:"Less spicy / No chili / Less rice ...",cartEmptyAlert:"Your cart is empty",submitting:"Submitting…",submitted:"✅ Order Submitted",success:"✅ Order Confirmed",doNotRepeat:"Please do not submit the same order twice. Add new items if you want to place another order.",submitFail:"Order submission failed. Please check your connection and try again.",demoNote:"Demo mode: this order is stored in this browser only.",week:"Week {n}",set2label:"2 Meats + 1 Vegetable",set1label:"1 Meat + 2 Vegetables"
  },
  ms:{
    headerTitle:"Pesanan Dalam Talian",headerSubtitle:"Pilih bebas · Harga automatik · Sarapan & makan tengah hari · Tempahan mingguan",cart:"Troli",heroTitle:"Terus buat pesanan di sini 🍱",heroText:"Pilih minggu, hari dan waktu makan, kemudian tekan kad makanan yang anda mahu. Sistem akan mengira set dan tambahan secara automatik.",set1:"1 Daging + 2 Sayur",set2:"2 Daging + 1 Sayur",weekLabel:"Minggu Menu",dayLabel:"Hari",mealLabel:"Waktu Makan",breakfast:"Sarapan",lunch:"Makan Tengah Hari",chooseFood:"Pilih Makanan",clear:"Kosongkan Pilihan",mealSummary:"Ringkasan Hidangan",addMeal:"Tambah ke Troli",minHint:"Pilih sekurang-kurangnya 1 daging + 2 sayur atau 2 daging + 1 sayur sebelum tambah ke troli.",addons:"Tambahan À La Carte",addonsHint:"Boleh ditambah bila-bila masa sebelum pembayaran",close:"Tutup",total:"Jumlah",customerDetails:"Maklumat Pelanggan",name:"Nama",phone:"Nombor Telefon",fulfilment:"Kaedah Ambil",address:"Alamat",payment:"Kaedah Bayaran",paymentRef:"Rujukan Bayaran",remarks:"Catatan",placeOrder:"Sahkan Pesanan",noFood:"Belum pilih makanan",meat:"Daging",veg:"Sayur",meatShort:"Daging",vegShort:"Sayur",extraMeat:"Tambah Daging",extraVeg:"Tambah Sayur",mealTotal:"Jumlah Hidangan",selected:"Dipilih",needSet:"Pilih sekurang-kurangnya 1 daging + 2 sayur atau 2 daging + 1 sayur",emptyCart:"Troli anda masih kosong.",remove:"Buang",addonCart:"Tambahan",selfPickup:"Ambil Sendiri",delivery:"Penghantaran",duitnow:"DuitNow QR",bank:"Pindahan Bank",cash:"Tunai",remarksPlaceholder:"Kurang pedas / Tanpa cili / Kurang nasi ...",cartEmptyAlert:"Troli anda kosong",submitting:"Menghantar…",submitted:"✅ Telah Dihantar",success:"✅ Pesanan Disahkan",doNotRepeat:"Jangan hantar pesanan yang sama dua kali. Tambah item baharu jika mahu membuat pesanan lain.",submitFail:"Pesanan gagal dihantar. Sila semak sambungan dan cuba lagi.",demoNote:"Mod demo: pesanan ini hanya disimpan dalam pelayar ini.",week:"Minggu {n}",set2label:"2 Daging + 1 Sayur",set1label:"1 Daging + 2 Sayur"
  }
};

const DELIVERY_I18N = {
  zh: {origin:'出餐地点',deliveryInfo:'送餐运费（单程行车距离）',distance:'实际行车距离',tripCount:'配送次数',deliveryFee:'送餐费',subtotal:'餐费',grandTotal:'应付总额',calculate:'计算送餐费',calculating:'正在查询行车距离…',needAddress:'请输入完整送餐地址，再计算运费。',confirmAddress:'请确认系统找到的送餐地点正确',tooFar:'超过 10 km：请联系客服报价，暂时不能线上结账。',quoteFail:'无法查询准确行车距离。请检查地址或联系客服；不会自动收取估算运费。',quoteFirst:'请先计算并确认送餐距离，才可以提交订单。',tripInfo:'早餐和午餐分开配送；每餐算一次运费。',pickupFree:'自取免费',addressChanged:'地址或餐点已更改，请重新计算运费。',pending:'正在确认服务器是否收到订单…',unverified:'订单已送出，但暂时无法确认是否成功。请先检查订单表或联系客服，不要重复提交。'},
  en: {origin:'Kitchen',deliveryInfo:'Delivery fee (one-way driving distance)',distance:'Driving distance',tripCount:'Delivery trips',deliveryFee:'Delivery fee',subtotal:'Food subtotal',grandTotal:'Grand total',calculate:'Calculate delivery',calculating:'Calculating route…',needAddress:'Please enter the complete delivery address.',confirmAddress:'Please verify this matched address',tooFar:'Over 10 km: contact us for a quote. Online checkout is unavailable.',quoteFail:'Could not determine a reliable driving distance. Check the address or contact us. No estimated fee will be charged.',quoteFirst:'Calculate and confirm the delivery distance before placing an order.',tripInfo:'Breakfast and lunch are separate trips, each charged individually.',pickupFree:'Free pickup',addressChanged:'Address or meals changed. Please recalculate delivery.',pending:'Checking whether the server received your order…',unverified:'Order sent, but receipt could not be verified. Check the order sheet or contact us before trying again.'},
  ms: {origin:'Dapur',deliveryInfo:'Caj penghantaran (jarak memandu sehala)',distance:'Jarak memandu',tripCount:'Bilangan penghantaran',deliveryFee:'Caj penghantaran',subtotal:'Jumlah makanan',grandTotal:'Jumlah keseluruhan',calculate:'Kira caj penghantaran',calculating:'Mengira laluan…',needAddress:'Masukkan alamat penghantaran yang lengkap.',confirmAddress:'Sila sahkan alamat yang ditemui',tooFar:'Lebih 8 km: hubungi kami untuk sebut harga. Bayaran dalam talian tidak tersedia.',quoteFail:'Jarak memandu tidak dapat ditentukan. Semak alamat atau hubungi kami. Caj anggaran tidak dikenakan.',quoteFirst:'Kira dan sahkan jarak sebelum membuat pesanan.',tripInfo:'Sarapan dan makan tengah hari dihantar berasingan dan dikenakan caj bagi setiap penghantaran.',pickupFree:'Ambil sendiri percuma',addressChanged:'Alamat atau hidangan berubah. Sila kira semula caj penghantaran.',pending:'Menyemak sama ada pelayan menerima pesanan…',unverified:'Pesanan dihantar tetapi pengesahan belum diterima. Semak rekod pesanan atau hubungi kami sebelum mencuba lagi.'}
};
const dt = key => (DELIVERY_I18N[lang] || DELIVERY_I18N.zh)[key] || key;
let lang = localStorage.getItem("pc_lang") || "zh";
let data, state = {week:1, day:"Monday", meal:"breakfast", selected:new Set(), addons:{}};
let cart = JSON.parse(localStorage.getItem("pc_cart") || "[]");
let isSubmitting = false;
let deliveryQuote = null;
let quoteBusy = false;
let quoteEpoch = 0;
const QUOTE_TIMEOUT_MS = 18000;


const $ = s => document.querySelector(s);
const money = n => `${CONFIG.currency}${Number(n).toFixed(2)}`;
const t = (key, vars={}) => {
  let text=(I18N[lang]&&I18N[lang][key])||I18N.zh[key]||key;
  Object.entries(vars).forEach(([k,v])=>text=text.replaceAll(`{${k}}`,v));
  return text;
};

async function init(){
  data = await fetch("data/menu.json").then(r=>r.json());
  $("#languageSelect").value=lang;
  $("#languageSelect").onchange=e=>setLanguage(e.target.value);
  fillSelectors(); renderAddons(); applyLanguage(); renderMeal(); updateCart();
  document.querySelectorAll(".meal-tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".meal-tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.meal=b.dataset.meal;state.selected.clear();renderMeal();});
  $("#weekSelect").onchange=e=>{state.week=+e.target.value;state.selected.clear();renderMeal()};
  $("#daySelect").onchange=e=>{state.day=e.target.value;state.selected.clear();renderMeal()};
  $("#clearMeal").onclick=()=>{state.selected.clear();renderMeal()};
  $("#addMealBtn").onclick=addCurrentMeal;
  $("#cartBtn").onclick=showCart; $("#closeCart").onclick=()=>$("#cartSection").classList.add("hidden");
  $("#checkoutForm").onsubmit=placeOrder;
  $("#fulfilmentSelect").onchange=() => {invalidateDelivery(); renderDeliverySection();};
  const addressField=document.querySelector('[name="address"]');
  addressField.addEventListener('input',invalidateDelivery);
  addressField.addEventListener('blur',()=>{if(isDelivery() && addressField.value.trim().length>=12 && cart.length) calculateDelivery();});
  $("#calculateDelivery").onclick=calculateDelivery;
  renderDeliverySection();
}

function setLanguage(newLang){
  lang=newLang;localStorage.setItem("pc_lang",lang);applyLanguage();fillSelectors();renderMeal();renderAddons();updateCart();
}
function applyLanguage(){
  document.documentElement.lang=lang==='zh'?'zh-Hans':lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
  $("#remarksField").placeholder=t("remarksPlaceholder");
  const oldFulfilment=$("#fulfilmentSelect").value;
  $("#fulfilmentSelect").innerHTML=`<option value="Self Pickup / 自取">${t('selfPickup')}</option><option value="Delivery / 送餐">${t('delivery')}</option>`;
  if(oldFulfilment)$("#fulfilmentSelect").value=oldFulfilment;
  const oldPayment=$("#paymentSelect").value;
  $("#paymentSelect").innerHTML=`<option value="DuitNow QR">${t('duitnow')}</option><option value="Bank Transfer">${t('bank')}</option><option value="Cash">${t('cash')}</option>`;
  if(oldPayment)$("#paymentSelect").value=oldPayment;
  resetSubmitButton(false);
  renderDeliverySection();
}
function fillSelectors(){
  const wv=state.week,dv=state.day;
  $("#weekSelect").innerHTML=data.weeks.map(w=>`<option value="${w.week}">${t('week',{n:w.week})}</option>`).join("");
  $("#daySelect").innerHTML=DAYS.map(d=>`<option value="${d}">${dayName(d)}</option>`).join("");
  $("#weekSelect").value=wv;$("#daySelect").value=dv;
}
function dayName(d){return lang==='zh'?DAY_ZH[d]:lang==='ms'?DAY_MS[d]:d}
function currentItems(){return data.weeks.find(w=>w.week===state.week).days[state.day][state.meal]}
function dishPrimary(item){return lang==='zh'?item.zh:item.en}
function dishSecondary(item){return lang==='zh'?item.en:item.zh}
function renderMeal(){
  $("#mealContext").textContent=`${t('week',{n:state.week})} · ${dayName(state.day).toUpperCase()} · ${t(state.meal)}`;
  $("#menuGrid").innerHTML=currentItems().map(item=>{
    const on=state.selected.has(item.id); const icon=item.type==="meat"?"🍗":"🥬";
    return `<article class="food-card ${item.type==='veg'?'veg':''} ${on?'selected':''}" data-id="${item.id}">
      <div class="food-photo">${item.image?`<img src="${item.image}" alt="${item.en}">`:icon}</div>
      <div><span class="food-no">#${item.no}</span><div class="food-name">${dishPrimary(item)}</div><div class="food-en">${dishSecondary(item)}</div><span class="type-tag">${item.type==='meat'?t('meat'):t('veg')}</span></div>
      <div class="check">✓</div></article>`}).join("");
  document.querySelectorAll(".food-card").forEach(c=>c.onclick=()=>{state.selected.has(c.dataset.id)?state.selected.delete(c.dataset.id):state.selected.add(c.dataset.id);renderMeal()});
  renderSummary();
}
function calculateMeal(items){
  const p=data.pricing, m=items.filter(i=>i.type==='meat').length, v=items.filter(i=>i.type==='veg').length;
  if(m>=2 && v>=1){return {valid:true,label:t('set2label'),base:p.twoMeatOneVeg,extraMeat:Math.max(0,m-2),extraVeg:Math.max(0,v-1),total:p.twoMeatOneVeg+Math.max(0,m-2)*p.extraMeat+Math.max(0,v-1)*p.extraVeg,m,v}}
  if(m>=1 && v>=2){return {valid:true,label:t('set1label'),base:p.oneMeatTwoVeg,extraMeat:Math.max(0,m-1),extraVeg:Math.max(0,v-2),total:p.oneMeatTwoVeg+Math.max(0,m-1)*p.extraMeat+Math.max(0,v-2)*p.extraVeg,m,v}}
  return {valid:false,total:0,m,v,label:t('needSet')};
}
function renderSummary(){
  const chosen=currentItems().filter(i=>state.selected.has(i.id));
  const list=$("#selectedList");list.classList.toggle("empty",!chosen.length);
  list.innerHTML=chosen.length?chosen.map(i=>`<div class="selected-row"><span>#${i.no} ${dishPrimary(i)}</span><span>${i.type==='meat'?t('meatShort'):t('vegShort')}</span></div>`).join(""):t('noFood');
  const calc=calculateMeal(chosen); let html="";
  if(calc.valid){
    html+=`<div class="price-line"><span>${calc.label}</span><strong>${money(calc.base)}</strong></div>`;
    if(calc.extraMeat)html+=`<div class="price-line"><span>${t('extraMeat')} × ${calc.extraMeat}</span><strong>${money(calc.extraMeat*data.pricing.extraMeat)}</strong></div>`;
    if(calc.extraVeg)html+=`<div class="price-line"><span>${t('extraVeg')} × ${calc.extraVeg}</span><strong>${money(calc.extraVeg*data.pricing.extraVeg)}</strong></div>`;
    html+=`<div class="price-line total"><span>${t('mealTotal')}</span><strong>${money(calc.total)}</strong></div>`;
  } else html=`<div class="muted">${t('selected')} ${calc.m} ${t('meatShort')} + ${calc.v} ${t('vegShort')}<br>${calc.label}</div>`;
  $("#priceBreakdown").innerHTML=html; $("#addMealBtn").disabled=!calc.valid;
}
function addCurrentMeal(){
  const items=currentItems().filter(i=>state.selected.has(i.id)), calc=calculateMeal(items); if(!calc.valid)return;
  resetSubmitButton();cart.push({kind:"meal",week:state.week,day:state.day,meal:state.meal,items,calc,price:calc.total});state.selected.clear();persistCart();renderMeal();showCart();
}
function addonDisplayName(a){
  const parts=a.name.split('/').map(x=>x.trim());
  if(lang==='zh')return a.name;
  return parts.length>1?parts[1]:a.name;
}
function renderAddons(){
  $("#addonGrid").innerHTML=data.addons.map(a=>`<div class="addon-card"><strong>${addonDisplayName(a)}</strong><span class="price">${money(a.price)}</span><div class="qty-row"><button data-a="${a.id}" data-d="-1">−</button><span id="q-${a.id}">${state.addons[a.id]||0}</span><button data-a="${a.id}" data-d="1">＋</button></div></div>`).join("");
  document.querySelectorAll(".qty-row button").forEach(b=>b.onclick=()=>{const id=b.dataset.a,d=+b.dataset.d,q=Math.max(0,(state.addons[id]||0)+d);state.addons[id]=q;$("#q-"+id).textContent=q;if(d>0){resetSubmitButton();const a=data.addons.find(x=>x.id===id);cart.push({kind:"addon",id:a.id,name:a.name,qty:1,price:a.price});persistCart()}else if(d<0){const idx=cart.findIndex(x=>x.kind==='addon'&&x.id===id);if(idx>=0){cart.splice(idx,1);persistCart()}}});
}
function persistCart(){invalidateDelivery();localStorage.setItem("pc_cart",JSON.stringify(cart));updateCart()}
function updateCart(){
  $("#cartCount").textContent=cart.length;const box=$("#cartItems"); if(!box)return;
  box.innerHTML=cart.length?cart.map((x,i)=>x.kind==='meal'?`<div class="cart-item"><div><h4>${t('week',{n:x.week})} · ${dayName(x.day)} ${t(x.meal)}</h4><p>${x.items.map(a=>`#${a.no} ${dishPrimary(a)}`).join(' · ')}</p><p>${calculateMeal(x.items).label}</p></div><div><strong>${money(x.price)}</strong><br><button class="text-btn" onclick="removeCart(${i})">${t('remove')}</button></div></div>`:`<div class="cart-item"><div><h4>${t('addonCart')}</h4><p>${addonNameFromCart(x.name)}</p></div><div><strong>${money(x.price)}</strong><br><button class="text-btn" onclick="removeCart(${i})">${t('remove')}</button></div></div>`).join(""):`<p class='muted'>${t('emptyCart')}</p>`;
  const subtotal=foodSubtotal();
  $("#cartTotal").textContent=money(subtotal+(isDelivery() && validQuote()?deliveryQuote.fee:0));
  if($("#foodSubtotal")) $("#foodSubtotal").textContent=money(subtotal);
  renderDeliverySection();
}
function addonNameFromCart(name){const parts=name.split('/').map(x=>x.trim());return lang==='zh'?name:(parts[1]||name)}
window.removeCart=i=>{cart.splice(i,1);persistCart()};
function showCart(){updateCart();$("#cartSection").classList.remove("hidden");$("#cartSection").scrollIntoView({behavior:"smooth"})}
function isDelivery(){return $("#fulfilmentSelect").value === "Delivery / 送餐";}
function foodSubtotal(){return Math.round(cart.reduce((sum,x)=>sum+Number(x.price||0),0)*100)/100;}
function deliveryTrips(){return Math.max(1,cart.filter(x=>x.kind==='meal').length);}
function normalizeAddress(s){return String(s||'').trim().replace(/\s+/g,' ').toLowerCase();}
function validQuote(){return !!(deliveryQuote && deliveryQuote.ok && deliveryQuote.quoteId && deliveryQuote.fee!==null && deliveryQuote.fee!==undefined && deliveryQuote.addressKey===normalizeAddress(document.querySelector('[name="address"]').value) && deliveryQuote.trips===deliveryTrips() && deliveryQuote.expiresAt>Date.now());}
function invalidateDelivery(){deliveryQuote=null;quoteEpoch++;if($("#deliveryMatched"))$("#deliveryMatched").checked=false;renderDeliverySection();}
function renderDeliverySection(){
  const box=$("#deliverySection");if(!box)return;
  box.classList.toggle('hidden',!isDelivery());
  const address=document.querySelector('[name="address"]');address.required=isDelivery();
  $("#deliveryRule").textContent=dt('tripInfo');
  $("#kitchenAddress").textContent=CONFIG.kitchenAddress;
  const status=$("#deliveryStatus"), match=$("#deliveryMatchRow");
  if(!isDelivery()){status.textContent=dt('pickupFree');match.classList.add('hidden');}
  else if(quoteBusy){status.textContent=dt('calculating');match.classList.add('hidden');}
  else if(deliveryQuote && deliveryQuote.ok){
    status.textContent=deliveryQuote.manual?dt('tooFar'):(`${dt('distance')}: ${deliveryQuote.distanceKm.toFixed(2)} km · ${dt('tripCount')}: ${deliveryQuote.trips} · ${dt('deliveryFee')}: ${money(deliveryQuote.fee)}`);
    match.classList.remove('hidden');
    $("#matchedAddress").textContent=deliveryQuote.matchedAddress||address.value;
    $("#confirmMatchedLabel").textContent=dt('confirmAddress');
  }else{status.textContent=dt('deliveryInfo')+': 0–5 km RM5 · >5–10 km RM9 · >10 km '+dt('tooFar').split(':')[0];match.classList.add('hidden');}
  $("#calculateDelivery").textContent=quoteBusy?dt('calculating'):dt('calculate');
  $("#calculateDelivery").disabled=quoteBusy||!cart.length;
  $("#deliveryLine").classList.toggle('hidden',!isDelivery());
  $("#deliveryAmount").textContent=validQuote()?money(deliveryQuote.fee):'—';
  $("#deliveryGrandTotal").textContent=money(foodSubtotal()+(isDelivery()&&validQuote()?deliveryQuote.fee:0));
  $("#foodSubtotal").textContent=money(foodSubtotal());
}
function requestJsonp(action, params={}){
  return new Promise((resolve,reject)=>{
    const callback='pcDeliveryCallback_'+Math.random().toString(36).slice(2);
    const u=new URL(CONFIG.appsScriptUrl);
    u.searchParams.set('action',action);u.searchParams.set('callback',callback);
    Object.entries(params).forEach(([k,v])=>u.searchParams.set(k,String(v)));
    const script=document.createElement('script');
    let timer;
    const cleanup=()=>{clearTimeout(timer);delete window[callback];script.remove();};
    window[callback]=value=>{cleanup();resolve(value);};
    script.onerror=()=>{cleanup();reject(new Error('Network error'));};
    timer=setTimeout(()=>{cleanup();reject(new Error('Quote timed out'));},QUOTE_TIMEOUT_MS);
    script.src=u.href;document.head.appendChild(script);
  });
}
async function calculateDelivery(){
  if(!isDelivery()||quoteBusy||!cart.length)return;
  const address=document.querySelector('[name="address"]').value.trim();
  if(address.length<12){alert(dt('needAddress'));return;}
  const epoch=++quoteEpoch;quoteBusy=true;deliveryQuote=null;renderDeliverySection();
  try{
    const result=await requestJsonp('deliveryQuote',{address,trips:deliveryTrips()});
    if(epoch!==quoteEpoch)return;
    if(!result.ok)throw new Error(result.error||'Quote unavailable');
    result.addressKey=normalizeAddress(address);
    result.expiresAt=Date.now()+Math.min(15*60000,(Number(result.validForSeconds)||900)*1000);
    deliveryQuote=result;
    $("#deliveryMatched").checked=false;
  }catch(err){if(epoch===quoteEpoch){deliveryQuote=null;alert(dt('quoteFail')+'\n'+err.message);}}
  finally{quoteBusy=false;renderDeliverySection();}
}
async function placeOrder(e){
  e.preventDefault();if(isSubmitting)return;if(!cart.length){alert(t('cartEmptyAlert'));return;}
  if(isDelivery() && (!validQuote()||deliveryQuote.manual||!$("#deliveryMatched").checked)){alert(validQuote()&&deliveryQuote.manual?dt('tooFar'):dt('quoteFirst'));return;}
  const submitBtn=e.target.querySelector('button[type="submit"]');const originalText=submitBtn.textContent;isSubmitting=true;submitBtn.disabled=true;submitBtn.textContent=t('submitting');
  const form=Object.fromEntries(new FormData(e.target).entries());
  const fee=isDelivery()?deliveryQuote.fee:0;
  const order={orderId:createOrderId(),createdAt:new Date().toISOString(),customer:form,items:cart,subtotal:foodSubtotal(),deliveryFee:fee,total:foodSubtotal()+fee,deliveryQuoteId:isDelivery()?deliveryQuote.quoteId:null,deliveryTrips:isDelivery()?deliveryTrips():0,deliveryDistanceKm:isDelivery()?deliveryQuote.distanceKm:null};
  try{
    if(!CONFIG.appsScriptUrl)throw new Error('Apps Script URL missing');
    // Apps Script redirects often block CORS for POST. Cross-origin no-cors sends, then JSONP polls the order receipt.
    await fetch(CONFIG.appsScriptUrl,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(order)});
    let receipt;
    for(let i=0;i<5;i++){
      await new Promise(r=>setTimeout(r,1600));
      try{receipt=await requestJsonp('orderStatus',{orderId:order.orderId});if(receipt.ok&&receipt.found)break;}catch(_e){}
    }
    if(!receipt||!receipt.found){
      $("#orderResult").classList.remove('hidden');
      $("#orderResult").textContent=dt('unverified')+' Order ID: '+order.orderId;
      submitBtn.disabled=true;submitBtn.textContent=t('submitted');
      return;
    }
    $("#orderResult").classList.remove('hidden');
    $("#orderResult").textContent=`${t('success')} · ${order.orderId} · ${dt('grandTotal')}: ${money(order.total)}. ${t('doNotRepeat')}`;
    cart=[];persistCart();e.target.reset();applyLanguage();submitBtn.disabled=true;submitBtn.textContent=t('submitted');
  }catch(err){isSubmitting=false;submitBtn.disabled=false;submitBtn.textContent=originalText;alert(t('submitFail')+' '+err.message);}
}

function resetSubmitButton(clearResult=true){
  isSubmitting=false;const submitBtn=document.querySelector('#checkoutForm button[type="submit"]');if(submitBtn){submitBtn.disabled=false;submitBtn.textContent=t('placeOrder')}
  const result=$("#orderResult");if(result&&clearResult){result.classList.add("hidden");result.innerHTML="";}
}
function createOrderId(){const d=new Date();return `PC-${String(d.getFullYear()).slice(2)}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}-${Math.floor(1000+Math.random()*9000)}`}
init();
