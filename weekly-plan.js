/* Premium Crest weekly planner helpers, v1.5.0. No external dependencies. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.PCWeekly = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const MEALS = ['breakfast', 'lunch'];
  const slotKey = (day, meal) => day + ':' + meal;
  const slots = () => DAYS.flatMap(day => MEALS.map(meal => ({day, meal, key:slotKey(day,meal)})));
  function parseLocalDate(iso) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(iso))) throw new Error('Invalid ISO date');
    const [year, month, day] = iso.split('-').map(Number);
    const result = new Date(year, month-1, day, 12);
    if (result.getFullYear() !== year || result.getMonth() !== month-1 || result.getDate() !== day) throw new Error('Invalid date');
    return result;
  }
  function isoDate(date) {
    const d = new Date(date);
    return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');
  }
  function nextMonday(now = new Date()) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
    const daysAhead = (8 - d.getDay()) % 7 || 7;
    d.setDate(d.getDate() + daysAhead);
    return isoDate(d);
  }
  function isMonday(iso){return parseLocalDate(iso).getDay()===1;}
  function dateFor(monday,day){
    const idx=DAYS.indexOf(day);
    if (idx<0||!isMonday(monday))throw new Error('Invalid weekly day or start date');
    const d=parseLocalDate(monday);d.setDate(d.getDate()+idx);return isoDate(d);
  }
  function emptyDraft(enabled=true){
    const result={};for(const {key} of slots())result[key]={enabled,selected:[]};return result;
  }
  const menuForDay=(menu,day)=>typeof menu==='function'?menu(day):menu;
  function normalizeDraft(raw, menu){
    const result=emptyDraft(true);
    for(const {key,day,meal} of slots()){
      const old=(raw||{})[key];if(!old)continue;
      const available=new Set(menuForDay(menu,day).days[day][meal].map(x=>x.id));
      result[key]={enabled:!!old.enabled, selected:Array.isArray(old.selected)?[...new Set(old.selected.filter(id=>available.has(id)))]:[]};
    }
    return result;
  }
  function buildMeal({week,monday,day,meal,draft,menu,calculate,planId}){
    const items=menuForDay(menu,day).days[day][meal].filter(x=>(draft.selected||[]).includes(x.id));
    const calc=calculate(items);
    if(!draft.enabled||!calc.valid)return null;
    const actualWeek=typeof week==='function'?week(day):week;
    const weeklyPlanId=planId||`W${actualWeek}@${monday}`;
    return {kind:'meal',week:actualWeek,day,meal,items,calc,price:calc.total,serviceDate:dateFor(monday,day),weeklyPlanId,weeklySlot:slotKey(day,meal)};
  }
  function status({drafts,menu,calculate}){
    let active=0,complete=0,total=0;const missing=[];
    for(const {key,day,meal} of slots()){
      const draft=drafts[key];if(!draft||!draft.enabled)continue;
      active++;
      const chosen=menuForDay(menu,day).days[day][meal].filter(item=>draft.selected.includes(item.id));
      const calc=calculate(chosen);
      if(calc.valid){complete++;total+=calc.total;}else missing.push({key,day,meal});
    }
    return {active,complete,total:Math.round(total*100)/100,missing,ready:active>0&&active===complete};
  }
  function upsert(cart,meal){
    const result=cart.filter(x=>!(x.weeklyPlanId===meal.weeklyPlanId&&x.weeklySlot===meal.weeklySlot));
    result.push(meal);return result;
  }
  return {DAYS,MEALS,slots,slotKey,emptyDraft,normalizeDraft,nextMonday,dateFor,isMonday,status,buildMeal,upsert};
});
