const CONFIG = {
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbypZeSwTKE4Br6wCu3d-CHtmyjo0mrwMSh-YV_ASYZ287TP7ksdBe9LjKTgc7fjdj4I/exec",
  currency: "RM"
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

let lang = localStorage.getItem("pc_lang") || "zh";
let data, state = {week:1, day:"Monday", meal:"breakfast", selected:new Set(), addons:{}};
let cart = JSON.parse(localStorage.getItem("pc_cart") || "[]");
let isSubmitting = false;

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
}

function setLanguage(newLang){
  lang=newLang;localStorage.setItem("pc_lang",lang);applyLanguage();fillSelectors();renderMeal();renderAddons();updateCart();
}
function applyLanguage(){
  document.documentElement.lang=lang==='zh'?'zh-Hans':lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
  $("#remarksField").placeholder=t("remarksPlaceholder");
  $("#fulfilmentSelect").innerHTML=`<option value="Self Pickup / 自取">${t('selfPickup')}</option><option value="Delivery / 送餐">${t('delivery')}</option>`;
  $("#paymentSelect").innerHTML=`<option value="DuitNow QR">${t('duitnow')}</option><option value="Bank Transfer">${t('bank')}</option><option value="Cash">${t('cash')}</option>`;
  resetSubmitButton(false);
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
function persistCart(){localStorage.setItem("pc_cart",JSON.stringify(cart));updateCart()}
function updateCart(){
  $("#cartCount").textContent=cart.length;const box=$("#cartItems"); if(!box)return;
  box.innerHTML=cart.length?cart.map((x,i)=>x.kind==='meal'?`<div class="cart-item"><div><h4>${t('week',{n:x.week})} · ${dayName(x.day)} ${t(x.meal)}</h4><p>${x.items.map(a=>`#${a.no} ${dishPrimary(a)}`).join(' · ')}</p><p>${calculateMeal(x.items).label}</p></div><div><strong>${money(x.price)}</strong><br><button class="text-btn" onclick="removeCart(${i})">${t('remove')}</button></div></div>`:`<div class="cart-item"><div><h4>${t('addonCart')}</h4><p>${addonNameFromCart(x.name)}</p></div><div><strong>${money(x.price)}</strong><br><button class="text-btn" onclick="removeCart(${i})">${t('remove')}</button></div></div>`).join(""):`<p class='muted'>${t('emptyCart')}</p>`;
  $("#cartTotal").textContent=money(cart.reduce((s,x)=>s+x.price,0));
}
function addonNameFromCart(name){const parts=name.split('/').map(x=>x.trim());return lang==='zh'?name:(parts[1]||name)}
window.removeCart=i=>{cart.splice(i,1);persistCart()};
function showCart(){updateCart();$("#cartSection").classList.remove("hidden");$("#cartSection").scrollIntoView({behavior:"smooth"})}
async function placeOrder(e){
  e.preventDefault();if(isSubmitting)return;if(!cart.length){alert(t('cartEmptyAlert'));return}
  const submitBtn=e.target.querySelector('button[type="submit"]');const originalText=submitBtn.textContent;isSubmitting=true;submitBtn.disabled=true;submitBtn.textContent=t('submitting');
  const form=Object.fromEntries(new FormData(e.target).entries());const order={orderId:createOrderId(),createdAt:new Date().toISOString(),customer:form,items:cart,total:cart.reduce((s,x)=>s+x.price,0)};
  try{
    if(CONFIG.appsScriptUrl && !CONFIG.appsScriptUrl.includes("PASTE_GOOGLE_APPS_SCRIPT")){await fetch(CONFIG.appsScriptUrl,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(order)});}
    else{const demo=JSON.parse(localStorage.getItem("pc_demo_orders")||"[]");demo.push(order);localStorage.setItem("pc_demo_orders",JSON.stringify(demo));}
    $("#orderResult").classList.remove("hidden");$("#orderResult").innerHTML=`<strong>${t('success')}</strong><br>Order No.: <b>${order.orderId}</b><br>${t('total')}: <b>${money(order.total)}</b><br><small>${t('doNotRepeat')}</small>${(CONFIG.appsScriptUrl && !CONFIG.appsScriptUrl.includes('PASTE_GOOGLE_APPS_SCRIPT'))?'':`<br><small>${t('demoNote')}</small>`}`;
    cart=[];persistCart();e.target.reset();applyLanguage();submitBtn.disabled=true;submitBtn.textContent=t('submitted');
  }catch(err){isSubmitting=false;submitBtn.disabled=false;submitBtn.textContent=originalText;alert(t('submitFail'));}
}
function resetSubmitButton(clearResult=true){
  isSubmitting=false;const submitBtn=document.querySelector('#checkoutForm button[type="submit"]');if(submitBtn){submitBtn.disabled=false;submitBtn.textContent=t('placeOrder')}
  const result=$("#orderResult");if(result&&clearResult){result.classList.add("hidden");result.innerHTML="";}
}
function createOrderId(){const d=new Date();return `PC-${String(d.getFullYear()).slice(2)}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}-${Math.floor(1000+Math.random()*9000)}`}
init();
