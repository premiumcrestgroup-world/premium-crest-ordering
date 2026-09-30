/* Premium Crest v3.6 delivery planner: dated meals + dated add-ons. */
(function(root,factory){
  const api=factory();
  if(typeof module !== 'undefined' && module.exports)module.exports=api;
  root.PCDelivery=api;
})(typeof globalThis !== 'undefined' ? globalThis : this,function(){
  'use strict';
  const weekdays=['Monday','Tuesday','Wednesday','Thursday','Friday'];
  const meals=['breakfast','lunch'];
  const addonTargets=['with_breakfast','with_lunch','separate'];

  function plan(items,mode='separate'){
    if(!['separate','together'].includes(mode))throw new Error('Invalid mode');
    const group=new Map();

    for(const x of (items||[])){
      if(!x || !['meal','addon'].includes(String(x.kind||'')))continue;
      const serviceDate=String(x.serviceDate||'');
      if(!/^\d{4}-\d{2}-\d{2}$/.test(serviceDate))throw new Error('Invalid delivery date');
      const week=Number(x.week || 0);
      const day=String(x.day||'');
      if(!Number.isInteger(week)||week<1||week>5||!weekdays.includes(day))throw new Error('Invalid delivery day');
      const key=`DATE:${serviceDate}`;
      if(!group.has(key))group.set(key,{week,day,serviceDate,meals:new Set(),addonTargets:new Set()});
      const g=group.get(key);
      if(g.week!==week||g.day!==day)throw new Error('Conflicting delivery day');

      if(x.kind==='meal'){
        const meal=String(x.meal||'').toLowerCase();
        if(!meals.includes(meal))throw new Error('Invalid meal schedule');
        g.meals.add(meal);
      }else{
        const target=String(x.addonDelivery||'separate');
        if(!addonTargets.includes(target))throw new Error('Invalid add-on delivery choice');
        g.addonTargets.add(target);
      }
    }

    const days=[...group.values()].sort((a,b)=>a.serviceDate.localeCompare(b.serviceDate)).map(g=>{
      const types=meals.filter(m=>g.meals.has(m));
      const targets=addonTargets.filter(t=>g.addonTargets.has(t));
      if(targets.includes('with_breakfast')&&!types.includes('breakfast'))throw new Error('Add-on is linked to breakfast but no breakfast meal exists');
      if(targets.includes('with_lunch')&&!types.includes('lunch'))throw new Error('Add-on is linked to lunch but no lunch meal exists');
      const mealTrips=types.length?(mode==='together'?1:types.length):0;
      const addonTrips=targets.includes('separate')?1:0;
      const trips=mealTrips+addonTrips;
      return {
        week:g.week,day:g.day,serviceDate:g.serviceDate,meals:types,
        addonTargets:targets,mealTrips,addonTrips,trips,
        combined:mode==='together'&&types.length===2
      };
    });

    const signature=days.map(x=>`${x.serviceDate}:${x.week}:${x.day}:${x.meals.join('+')}:addons=${x.addonTargets.join('+')||'none'}`).join('|')||'empty';
    return {
      mode,days,signature,
      trips:days.reduce((n,x)=>n+x.trips,0),
      eligible:days.some(x=>x.meals.length===2)
    };
  }
  return {plan};
});
