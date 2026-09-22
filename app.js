const CONFIG = {
  // 部署 Google Apps Script 后，把 Web App URL 填在这里。
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbypZeSwTKE4Br6wCu3d-CHtmyjo0mrwMSh-YV_ASYZ287TP7ksdBe9LjKTgc7fjdj4I/exec",
  currency: "RM"
};

const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
const DAY_ZH = {Monday:"星期一",Tuesday:"星期二",Wednesday:"星期三",Thursday:"星期四",Friday:"星期五"};
let data, state = {week:1, day:"Monday", meal:"breakfast", selected:new Set(), addons:{}};
let cart = JSON.parse(localStorage.getItem("pc_cart") || "[]");
let isSubmitting = false;

const $ = s => document.querySelector(s);
const money = n => `${CONFIG.currency}${Number(n).toFixed(2)}`;

async function init(){
  data = await fetch("data/menu.json").then(r=>r.json());
  fillSelectors(); renderMeal(); renderAddons(); updateCart();
  document.querySelectorAll(".meal-tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".meal-tab").forEach(x=>x.classList.remove("active"));b.classList.add("active");state.meal=b.dataset.meal;state.selected.clear();renderMeal();});
  $("#weekSelect").onchange=e=>{state.week=+e.target.value;state.selected.clear();renderMeal()};
  $("#daySelect").onchange=e=>{state.day=e.target.value;state.selected.clear();renderMeal()};
  $("#clearMeal").onclick=()=>{state.selected.clear();renderMeal()};
  $("#addMealBtn").onclick=addCurrentMeal;
  $("#cartBtn").onclick=showCart; $("#closeCart").onclick=()=>$("#cartSection").classList.add("hidden");
  $("#checkoutForm").onsubmit=placeOrder;
}

function fillSelectors(){
  $("#weekSelect").innerHTML=data.weeks.map(w=>`<option value="${w.week}">第${w.week}周 / Week ${w.week}</option>`).join("");
  $("#daySelect").innerHTML=DAYS.map(d=>`<option value="${d}">${DAY_ZH[d]} / ${d}</option>`).join("");
}
function currentItems(){return data.weeks.find(w=>w.week===state.week).days[state.day][state.meal]}
function renderMeal(){
  $("#mealContext").textContent=`WEEK ${state.week} · ${state.day.toUpperCase()} · ${state.meal.toUpperCase()}`;
  $("#menuGrid").innerHTML=currentItems().map(item=>{
    const on=state.selected.has(item.id); const icon=item.type==="meat"?"🍗":"🥬";
    return `<article class="food-card ${item.type==='veg'?'veg':''} ${on?'selected':''}" data-id="${item.id}">
      <div class="food-photo">${item.image?`<img src="${item.image}" alt="${item.en}">`:icon}</div>
      <div><span class="food-no">#${item.no}</span><div class="food-name">${item.zh}</div><div class="food-en">${item.en}</div><span class="type-tag">${item.type==='meat'?'肉类 Meat':'菜类 Vegetable'}</span></div>
      <div class="check">✓</div></article>`}).join("");
  document.querySelectorAll(".food-card").forEach(c=>c.onclick=()=>{state.selected.has(c.dataset.id)?state.selected.delete(c.dataset.id):state.selected.add(c.dataset.id);renderMeal()});
  renderSummary();
}
function calculateMeal(items){
  const p=data.pricing, m=items.filter(i=>i.type==='meat').length, v=items.filter(i=>i.type==='veg').length;
  if(m>=2 && v>=1){return {valid:true,label:"2肉1菜 / 2 Meats + 1 Vegetable",base:p.twoMeatOneVeg,extraMeat:Math.max(0,m-2),extraVeg:Math.max(0,v-1),total:p.twoMeatOneVeg+Math.max(0,m-2)*p.extraMeat+Math.max(0,v-1)*p.extraVeg,m,v}}
  if(m>=1 && v>=2){return {valid:true,label:"1肉2菜 / 1 Meat + 2 Vegetables",base:p.oneMeatTwoVeg,extraMeat:Math.max(0,m-1),extraVeg:Math.max(0,v-2),total:p.oneMeatTwoVeg+Math.max(0,m-1)*p.extraMeat+Math.max(0,v-2)*p.extraVeg,m,v}}
  return {valid:false,total:0,m,v,label:"请选择至少 1肉2菜 或 2肉1菜"};
}
function renderSummary(){
  const chosen=currentItems().filter(i=>state.selected.has(i.id));
  const list=$("#selectedList");
  list.classList.toggle("empty",!chosen.length);
  list.innerHTML=chosen.length?chosen.map(i=>`<div class="selected-row"><span>#${i.no} ${i.zh}</span><span>${i.type==='meat'?'肉':'菜'}</span></div>`).join(""):"还没有选择食物";
  const calc=calculateMeal(chosen); let html="";
  if(calc.valid){
    html+=`<div class="price-line"><span>${calc.label}</span><strong>${money(calc.base)}</strong></div>`;
    if(calc.extraMeat)html+=`<div class="price-line"><span>加肉 × ${calc.extraMeat}</span><strong>${money(calc.extraMeat*data.pricing.extraMeat)}</strong></div>`;
    if(calc.extraVeg)html+=`<div class="price-line"><span>加菜 × ${calc.extraVeg}</span><strong>${money(calc.extraVeg*data.pricing.extraVeg)}</strong></div>`;
    html+=`<div class="price-line total"><span>本餐合计</span><strong>${money(calc.total)}</strong></div>`;
  } else html=`<div class="muted">已选 ${calc.m} 肉 + ${calc.v} 菜<br>${calc.label}</div>`;
  $("#priceBreakdown").innerHTML=html; $("#addMealBtn").disabled=!calc.valid;
}
function addCurrentMeal(){
  const items=currentItems().filter(i=>state.selected.has(i.id)), calc=calculateMeal(items); if(!calc.valid)return;
  resetSubmitButton();
  cart.push({kind:"meal",week:state.week,day:state.day,meal:state.meal,items,calc,price:calc.total});
  state.selected.clear(); persistCart(); renderMeal(); showCart();
}
function renderAddons(){
  $("#addonGrid").innerHTML=data.addons.map(a=>`<div class="addon-card"><strong>${a.name}</strong><span class="price">${money(a.price)}</span><div class="qty-row"><button data-a="${a.id}" data-d="-1">−</button><span id="q-${a.id}">0</span><button data-a="${a.id}" data-d="1">＋</button></div></div>`).join("");
  document.querySelectorAll(".qty-row button").forEach(b=>b.onclick=()=>{const id=b.dataset.a,d=+b.dataset.d,q=Math.max(0,(state.addons[id]||0)+d);state.addons[id]=q;$("#q-"+id).textContent=q;if(d>0){resetSubmitButton();const a=data.addons.find(x=>x.id===id);cart.push({kind:"addon",id:a.id,name:a.name,qty:1,price:a.price});persistCart()}else if(d<0){const idx=cart.findIndex(x=>x.kind==='addon'&&x.id===id);if(idx>=0){cart.splice(idx,1);persistCart()}}});
}
function persistCart(){localStorage.setItem("pc_cart",JSON.stringify(cart));updateCart()}
function updateCart(){
  $("#cartCount").textContent=cart.length;
  const box=$("#cartItems"); if(!box)return;
  box.innerHTML=cart.length?cart.map((x,i)=>x.kind==='meal'?`<div class="cart-item"><div><h4>Week ${x.week} · ${DAY_ZH[x.day]} ${x.meal==='breakfast'?'早餐':'午餐'}</h4><p>${x.items.map(a=>`#${a.no} ${a.zh}`).join(' · ')}</p><p>${x.calc.label}</p></div><div><strong>${money(x.price)}</strong><br><button class="text-btn" onclick="removeCart(${i})">删除</button></div></div>`:`<div class="cart-item"><div><h4>单点加购</h4><p>${x.name}</p></div><div><strong>${money(x.price)}</strong><br><button class="text-btn" onclick="removeCart(${i})">删除</button></div></div>`).join(""):"<p class='muted'>购物车目前是空的。</p>";
  $("#cartTotal").textContent=money(cart.reduce((s,x)=>s+x.price,0));
}
window.removeCart=i=>{cart.splice(i,1);persistCart()};
function showCart(){updateCart();$("#cartSection").classList.remove("hidden");$("#cartSection").scrollIntoView({behavior:"smooth"})}
async function placeOrder(e){
  e.preventDefault();
  if(isSubmitting) return;
  if(!cart.length){alert("购物车是空的");return}

  const submitBtn=e.target.querySelector('button[type="submit"]');
  const originalText=submitBtn.textContent;
  isSubmitting=true;
  submitBtn.disabled=true;
  submitBtn.textContent="提交中… / Submitting…";

  const form=Object.fromEntries(new FormData(e.target).entries());
  const order={orderId:createOrderId(),createdAt:new Date().toISOString(),customer:form,items:cart,total:cart.reduce((s,x)=>s+x.price,0)};
  try{
    if(CONFIG.appsScriptUrl && !CONFIG.appsScriptUrl.includes("PASTE_GOOGLE_APPS_SCRIPT")){
      // Google Apps Script Web Apps are cross-origin. no-cors reliably sends the order from GitHub Pages.
      await fetch(CONFIG.appsScriptUrl,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(order)});
    }
    else{const demo=JSON.parse(localStorage.getItem("pc_demo_orders")||"[]");demo.push(order);localStorage.setItem("pc_demo_orders",JSON.stringify(demo));}

    $("#orderResult").classList.remove("hidden");
    $("#orderResult").innerHTML=`<strong>✅ 下单成功 / Order Confirmed</strong><br>Order No.: <b>${order.orderId}</b><br>Total: <b>${money(order.total)}</b><br><small>请勿重复点击提交。如需再下单，请重新加入餐点。</small>${(CONFIG.appsScriptUrl && !CONFIG.appsScriptUrl.includes('PASTE_GOOGLE_APPS_SCRIPT'))?'':'<br><small>目前是 Demo 模式：订单已存放在此浏览器。接上 Google Apps Script 后会自动写入 Google Sheets。</small>'}`;
    cart=[];persistCart();e.target.reset();
    submitBtn.textContent="✅ 已提交 / Order Submitted";
  }catch(err){
    isSubmitting=false;
    submitBtn.disabled=false;
    submitBtn.textContent=originalText;
    alert("订单提交失败，请检查 Apps Script URL 或网络连接。");
  }
}

function resetSubmitButton(){
  isSubmitting=false;
  const submitBtn=document.querySelector('#checkoutForm button[type="submit"]');
  if(submitBtn){
    submitBtn.disabled=false;
    submitBtn.textContent="确认下单 / Place Order";
  }
  const result=$("#orderResult");
  if(result){result.classList.add("hidden");result.innerHTML="";}
}
function createOrderId(){const d=new Date();return `PC-${String(d.getFullYear()).slice(2)}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}-${Math.floor(1000+Math.random()*9000)}`}
init();
