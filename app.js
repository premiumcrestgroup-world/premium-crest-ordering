/* Premium Crest Security V2 bootstrap. Keeps the original app core untouched for rollback. */
(function(){
  'use strict';
  const core=document.createElement('script');
  core.src='app-core.js?v=3.7.0';
  core.onload=()=>{
    const overlay=document.createElement('script');
    overlay.src='security-v2-overlay.js?v=3.7.1';
    overlay.onerror=()=>console.error('Security V2 overlay failed to load');
    document.head.appendChild(overlay);
  };
  core.onerror=()=>console.error('Premium Crest app core failed to load');
  document.head.appendChild(core);
})();