if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,o)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let n={};const t=e=>r(e,l),u={module:{uri:l},exports:n,require:t};i[l]=Promise.all(s.map((e=>u[e]||t(e)))).then((e=>(o(...e),n)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"outliers"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/outliers/css/app.1566679f.css",revision:null},{url:"/outliers/favicon.png",revision:"b4f362db22977a59a9832ab03c7f7479"},{url:"/outliers/img/fake-bottom.70b99cab.png",revision:null},{url:"/outliers/img/fake-header.7c7ce186.png",revision:null},{url:"/outliers/img/illustration.d13e497b.png",revision:null},{url:"/outliers/index.html",revision:"728bc0ef7b1c9d02b0057265275fc7cd"},{url:"/outliers/js/app.5365fe4b.js",revision:null},{url:"/outliers/js/chunk-vendors.2254a8fb.js",revision:null},{url:"/outliers/logo.png",revision:"21f6207d497ac4c02f62dae072941ff6"},{url:"/outliers/logo512.png",revision:"6589a2ef6e258382b7b51dd531caf409"},{url:"/outliers/manifest.json",revision:"6caee9c2ce72902f04f619160d3e08b4"},{url:"/outliers/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
