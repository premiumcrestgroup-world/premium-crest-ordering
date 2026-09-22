/* Premium Crest v1.4.0 delivery planner: one destination, choice per order. */
(function(root,factory){
  const api=factory();
  if(typeof module !== 'undefined' && module.exports)module.exports=api;
  root.PCDelivery=api;
})(typeof globalThis !== 'undefined' ? globalThis : this,function(){
  'use strict';
  const weekdays=['Monday','Tuesday','Wednesday','Thursday','Friday'];
  const meals=['breakfast','lunch'];
  function plan(items,mode='separate'){
    if(!['separate','together'].includes(mode))throw new Error('Invalid mode');
    const group=new Map();
    for(const x of (items||[])){
      if(x.kind !== 'meal')continue;
      const week=Number(x.week), day=String(x.day), meal=String(x.meal).toLowerCase();
      if(!Number.isInteger(week)||week<1||week>5||!weekdays.includes(day)||!meals.includes(meal))
        throw new Error('Invalid meal schedule');
      const key=`${week}:${day}`;
      if(!group.has(key))group.set(key,{week,day,meals:new Set()});
      group.get(key).meals.add(meal);
    }
    const days=[...group.values()].sort((x,y)=>x.week-y.week||weekdays.indexOf(x.day)-weekdays.indexOf(y.day)).map(x=>{
      const types=meals.filter(m=>x.meals.has(m));
      return {week:x.week,day:x.day,meals:types,combined:mode==='together'&&types.length===2,trips:mode==='together'?1:types.length};
    });
    const signature=days.map(x=>`${x.week}:${x.day}:${x.meals.join('+')}`).join('|')||'addons-only';
    return {mode,days,signature,trips:days.length?days.reduce((n,x)=>n+x.trips,0):1,eligible:days.some(x=>x.meals.length===2)};
  }
  return {plan};
});
