/* Premium Crest v1.6 — Malaysia-calendar menu scheduling, no network or paid API. */
(function(root,factory){
  const api=factory();
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  root.PCCalendar=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const TZ='Asia/Kuala_Lumpur';
  const DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  function parseISO(iso){
    if(!/^\d{4}-\d{2}-\d{2}$/.test(String(iso)))throw new Error('Invalid date');
    const [y,m,d]=iso.split('-').map(Number);
    const utc=new Date(Date.UTC(y,m-1,d,12));
    if(utc.getUTCFullYear()!==y||utc.getUTCMonth()!==m-1||utc.getUTCDate()!==d)throw new Error('Invalid calendar date');
    return utc;
  }
  function iso(date){return [date.getUTCFullYear(),String(date.getUTCMonth()+1).padStart(2,'0'),String(date.getUTCDate()).padStart(2,'0')].join('-');}
  function addDays(date,amount){let d=parseISO(date);d.setUTCDate(d.getUTCDate()+amount);return iso(d);}
  function dayOfWeek(date){return parseISO(date).getUTCDay();}
  function weekday(date){return DAYS[dayOfWeek(date)];}
  function mondayOf(date){return addDays(date,-((dayOfWeek(date)+6)%7));}
  function nowInMalaysia(now=new Date()){
    const out={};
    for(const p of new Intl.DateTimeFormat('en-GB',{timeZone:TZ,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(now)){
      if(p.type!=='literal')out[p.type]=Number(p.value);
    }
    return {...out,date:[out.year,String(out.month).padStart(2,'0'),String(out.day).padStart(2,'0')].join('-'),minutes:out.hour*60+out.minute};
  }
  // Menu restarts at each calendar month's first Monday–Sunday row.
  // The first partial week of each new month is Week 1, as in the supplied Sep/Oct calendar.
  // A rare sixth calendar row wraps to Week 1 because there are five menu sets.
  function menuWeek(date){
    const d=parseISO(date), firstWeekday=new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),1,12)).getUTCDay();
    const firstMondayOffset=(firstWeekday+6)%7;
    const row=Math.floor((d.getUTCDate()-1+firstMondayOffset)/7)+1;
    return ((row-1)%5)+1;
  }
  function isBusinessDay(date){const n=dayOfWeek(date);return n>=1&&n<=5;}
  function nextBusinessDate(date,includeToday=false){
    let d=includeToday?date:addDays(date,1);
    while(!isBusinessDay(d))d=addDays(d,1);
    return d;
  }
  const BREAKFAST_CUTOFF=8*60, LUNCH_CUTOFF=10*60+30;
  function mealBookable(date,meal,now=new Date()){
    const local=nowInMalaysia(now);
    if(!isBusinessDay(date)||date<local.date)return false;
    if(date>local.date)return true;
    return local.minutes<(meal==='breakfast'?BREAKFAST_CUTOFF:LUNCH_CUTOFF);
  }
  function initialSingleDate(now=new Date()){
    const local=nowInMalaysia(now);
    return isBusinessDay(local.date)&&local.minutes<LUNCH_CUTOFF?local.date:nextBusinessDate(local.date);
  }
  function initialMeal(date,now=new Date()){
    return mealBookable(date,'breakfast',now)?'breakfast':'lunch';
  }
  function initialWeeklyMonday(now=new Date()){
    const current=mondayOf(nowInMalaysia(now).date);
    for(let i=0;i<5;i++){
      const d=addDays(current,i);
      if(mealBookable(d,'breakfast',now)||mealBookable(d,'lunch',now))return current;
    }
    return addDays(current,7);
  }
  function weeklyDates(monday){
    if(dayOfWeek(monday)!==1)throw new Error('Week must start on Monday');
    return [0,1,2,3,4].map(n=>{const date=addDays(monday,n);return {date,day:weekday(date),week:menuWeek(date)};});
  }
  function summary(monday){
    const weeks=[...new Set(weeklyDates(monday).map(d=>d.week))];
    return weeks;
  }
  return {TZ,DAYS,parseISO,addDays,dayOfWeek,weekday,mondayOf,nowInMalaysia,menuWeek,isBusinessDay,nextBusinessDate,
    mealBookable,initialSingleDate,initialMeal,initialWeeklyMonday,weeklyDates,summary,BREAKFAST_CUTOFF,LUNCH_CUTOFF};
});
