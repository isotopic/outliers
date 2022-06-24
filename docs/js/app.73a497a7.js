(function(){"use strict";var e={8648:function(e,o,a){var t=a(9242),n=a(3396);function i(e,o,a,t,i,r){const s=(0,n.up)("PhoneFrame");return(0,n.wg)(),(0,n.j4)(s)}var r=a.p+"img/fake-header.7c7ce186.png",s=a.p+"img/fake-bottom.70b99cab.png";const l={class:"phone-frame"},c={key:0},d=(0,n._)("img",{class:"fakes",src:r},null,-1),u={class:"minibox-container"},v=(0,n._)("img",{class:"fakes",src:s},null,-1),m={key:1};function p(e,o,a,i,r,s){const p=(0,n.up)("BalanceBox"),f=(0,n.up)("CalculatorBox"),h=(0,n.up)("CalculatorScreen");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(t.W3,{name:"list",tag:"div"},{default:(0,n.w5)((()=>["home"===r.page?((0,n.wg)(),(0,n.iD)("div",c,[d,(0,n._)("div",u,[(0,n.Wm)(p,{balance:r.balance},null,8,["balance"]),(0,n.Wm)(f,{onGo:o[0]||(o[0]=e=>s.changePage("calculator"))})]),v])):(0,n.kq)("",!0),"calculator"===r.page?((0,n.wg)(),(0,n.iD)("div",m,[(0,n.Wm)(h,{onGo:o[1]||(o[1]=e=>s.changePage("home")),balance:r.balance},null,8,["balance"])])):(0,n.kq)("",!0)])),_:1})])}var f=a(7139);const h=e=>((0,n.dD)("data-v-4b84d322"),e=e(),(0,n.Cn)(),e),b={class:"mini-box"},g=h((()=>(0,n._)("div",{class:"title"},"Saldo",-1))),_={class:"amount"},k=h((()=>(0,n._)("div",{class:"material-symbols-outlined eye-button"},"visibility_off",-1)));function w(e,o,a,t,i,r){return(0,n.wg)(),(0,n.iD)("div",b,[g,(0,n._)("div",_,"R$ "+(0,f.zw)(r.formattedBalance),1),k])}var D={name:"BalanceBox",props:{balance:Number},computed:{formattedBalance(){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(this.balance).split("R$")[1]}}},x=a(89);const y=(0,x.Z)(D,[["render",w],["__scopeId","data-v-4b84d322"]]);var C=y;const B=(0,n.uE)('<div class="title" data-v-36e23e9a>Turbinar saldo</div><div class="amount" data-v-36e23e9a><span class="material-symbols-outlined" data-v-36e23e9a>add_circle</span> R$ 282,69 <span class="time" data-v-36e23e9a>em 6 meses</span></div><div class="material-symbols-outlined next-button" data-v-36e23e9a>arrow_forward_ios</div>',3),I=[B];function A(e,o,a,t,i,r){return(0,n.wg)(),(0,n.iD)("div",{class:"mini-box mini-box-calculator",onClick:o[0]||(o[0]=o=>e.$emit("go"))},I)}var R={name:"CalculatorBox",props:{}};const S=(0,x.Z)(R,[["render",A],["__scopeId","data-v-36e23e9a"]]);var z=S,O=a.p+"img/illustration.d13e497b.png";const P=e=>((0,n.dD)("data-v-22209fd3"),e=e(),(0,n.Cn)(),e),V={class:"calculator"},q=P((()=>(0,n._)("span",{class:"material-symbols-outlined back"},"arrow_back",-1))),j=[q],M={class:"boxes"},T=P((()=>(0,n._)("img",{class:"illustration",src:O},null,-1))),F=P((()=>(0,n._)("div",{class:"explanation"},[(0,n._)("div",{class:"htitle"},"Turbinar saldo"),(0,n.Uk)(" Saiba agora mesmo o quanto seu dinheiro poderia render se aplicado hoje em algumas das nossas opções de investimento. ")],-1))),L={class:"resultbox"},$=(0,n.Uk)(" Seu rendimento seria "),U={class:"profit"},N=P((()=>(0,n._)("span",null,"R$",-1))),W={class:"calcbox"},Z=P((()=>(0,n._)("span",{class:"material-symbols-outlined box-icon"},"monetization_on",-1))),E={class:"labels"},G=(0,n.Uk)("Aplicando "),J={class:"calcbox"},H=P((()=>(0,n._)("span",{class:"material-symbols-outlined box-icon"},"calendar_month",-1))),K={class:"labels"},Y=(0,n.Uk)("Durante "),Q={class:"ativos"},X=["onClick"],ee={class:"material-symbols-outlined check-icon"},oe={class:"ativo-desc"},ae={class:"ativo-desc"},te={class:"ativo-desc"},ne=P((()=>(0,n._)("div",{class:"ativo more-products"}," Conheça as outras opções de investimento ",-1))),ie=P((()=>(0,n._)("div",{class:"bottombox"},[(0,n._)("div",{class:"invest-bt"},"Invista agora"),(0,n._)("div",{class:"more-bt"},"Conheça mais")],-1)));function re(e,o,a,t,i,r){const s=(0,n.up)("vue-slider");return(0,n.wg)(),(0,n.iD)("div",V,[(0,n._)("div",{class:"header",onClick:o[0]||(o[0]=o=>e.$emit("go"))},j),(0,n._)("div",M,[T,F,(0,n._)("div",L,[$,(0,n._)("div",U,[N,(0,n.Uk)((0,f.zw)(r.formattedResultado),1)])]),(0,n._)("div",W,[Z,(0,n._)("div",E,[G,(0,n._)("span",null,"R$"+(0,f.zw)(i.valorAportado)+",00",1)]),(0,n.Wm)(s,{modelValue:i.valorAportado,"onUpdate:modelValue":o[1]||(o[1]=e=>i.valorAportado=e),dotSize:18,min:r.getAtivo().valorMin,max:2*a.balance,tooltip:"none",interval:50},null,8,["modelValue","min","max"])]),(0,n._)("div",J,[H,(0,n._)("div",K,[Y,(0,n._)("span",null,(0,f.zw)(i.tempoInvestido)+" meses",1)]),(0,n.Wm)(s,{modelValue:i.tempoInvestido,"onUpdate:modelValue":o[2]||(o[2]=e=>i.tempoInvestido=e),dotSize:18,min:r.getAtivo().vencimento>0?r.getAtivo().vencimento:1,max:12,tooltip:"none",interval:"1"},null,8,["modelValue","min"])]),(0,n._)("div",Q,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(i.ativos,(e=>((0,n.wg)(),(0,n.iD)("div",{class:(0,f.C_)(["ativo",{checked:i.checked==e._id}]),key:e._id,onClick:o=>r.clickAtivo(e._id)},[(0,n._)("span",ee,(0,f.zw)(i.checked==e._id?"radio_button_checked":"radio_button_unchecked"),1),(0,n.Uk)(" "+(0,f.zw)(e.nome)+" ",1),(0,n._)("div",oe,"Resgate "+(0,f.zw)(e.vencimento<0?"diário":"após "+e.vencimento+" meses"),1),(0,n._)("div",ae,"Rentabilidade "+(0,f.zw)(e.rentabilidadeDoCDI)+"%",1),(0,n._)("div",te,"Valor mínimo R$"+(0,f.zw)(e.valorMin)+",00",1)],10,X)))),128)),ne])]),ie])}var se=a(8303),le=a.n(se),ce={name:"CalculatorScreen",props:{balance:Number},components:{VueSlider:le()},methods:{clickAtivo(e){this.checked=e},toDecimal(e){return e/100},calcTempoAno(e){return e/12},calcTempoDias(e){return 30*e},calcTaxaJuros(e,o){return e*o},taxasImposto(e){return e<=.5?.225:e>.5&&e<=1?.2:e>1&&e<=2?.175:e>2?.15:void 0},calcValorLiquido(e,o,a){return e+(o-e)*(1-this.taxasImposto(a))},rentabilidadeCDB(e,o,a,t){if(e>=t.valorMin){"Vencimento"==t.resgate&&(o<t.vencimento||o>t.vencimento)&&(this.resultado=0);let n=this.toDecimal(t.rentabilidadeDoCDI),i=this.calcTempoAno(this.tempoInvestido),r=this.calcTaxaJuros(a,n),s=(this.valorAportado*(1+r)**i).toFixed(2),l=this.calcValorLiquido(this.valorAportado,s,i).toFixed(2),c={valorBruto:s,valorLiquido:l};return this.resultado=l-e,c}this.resultado=0},melhorInvestimento(e,o,a){let t,n=0;for(let i of e){let e=this.rentabilidadeCDB(o,a,this.CDI,i);e&&e.valorLiquido&&e.valorLiquido>n&&(n=e.valorLiquido,t=i)}return{ativo:t,valorLiquido:n}},getAtivo(){return this.ativos.find((e=>e._id==this.checked))},refresh(){this.rentabilidadeCDB(this.valorAportado,this.tempoInvestido,this.CDI,this.getAtivo()),this.validaAtivos()},validaAtivos(){}},watch:{checked(){this.refresh()},valorAportado(){this.refresh()},tempoInvestido(){this.refresh()}},computed:{formattedResultado(){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(this.resultado).split("R$")[1]}},mounted(){this.refresh(),this.valorAportado=this.balance},data(){return{CDI:.1315,valorAportado:1e3,tempoInvestido:6,checked:3,resultado:0,ativos:[{_id:1,nome:"CDB Liquidez Diária",risco:"Baixo",rentabilidadeDoCDI:"110",valorMin:1,resgate:"Diário",vencimento:-1,tempoInvestido:6},{_id:2,nome:"CDB PagBank",risco:"Baixo",rentabilidadeDoCDI:"120",valorMin:500,resgate:"Vencimento",vencimento:12,tempoInvestido:10},{_id:3,nome:"CDB PagBank",risco:"Baixo",rentabilidadeDoCDI:"115",valorMin:500,resgate:"Vencimento",vencimento:6,tempoInvestido:5},{_id:4,nome:"Poupa Mais CDB",risco:"Baixo",rentabilidadeDoCDI:"100",valorMin:"1000",resgate:"Diário",vencimento:-1,tempoInvestido:120}]}}};const de=(0,x.Z)(ce,[["render",re],["__scopeId","data-v-22209fd3"]]);var ue=de,ve={name:"PhoneFrame",data(){return{page:"home",balance:5e3}},components:{CalculatorBox:z,BalanceBox:C,CalculatorScreen:ue},methods:{changePage(e){this.page=e}}};const me=(0,x.Z)(ve,[["render",p]]);var pe=me,fe={name:"App",components:{PhoneFrame:pe}};const he=(0,x.Z)(fe,[["render",i]]);var be=he,ge=a(5431);(0,ge.z)("/outliers/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,t.ri)(be).mount("#app")}},o={};function a(t){var n=o[t];if(void 0!==n)return n.exports;var i=o[t]={exports:{}};return e[t].call(i.exports,i,i.exports,a),i.exports}a.m=e,function(){var e=[];a.O=function(o,t,n,i){if(!t){var r=1/0;for(d=0;d<e.length;d++){t=e[d][0],n=e[d][1],i=e[d][2];for(var s=!0,l=0;l<t.length;l++)(!1&i||r>=i)&&Object.keys(a.O).every((function(e){return a.O[e](t[l])}))?t.splice(l--,1):(s=!1,i<r&&(r=i));if(s){e.splice(d--,1);var c=n();void 0!==c&&(o=c)}}return o}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[t,n,i]}}(),function(){a.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(o,{a:o}),o}}(),function(){a.d=function(e,o){for(var t in o)a.o(o,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/outliers/"}(),function(){var e={143:0};a.O.j=function(o){return 0===e[o]};var o=function(o,t){var n,i,r=t[0],s=t[1],l=t[2],c=0;if(r.some((function(o){return 0!==e[o]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(l)var d=l(a)}for(o&&o(t);c<r.length;c++)i=r[c],a.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return a.O(d)},t=self["webpackChunkoutliers"]=self["webpackChunkoutliers"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=a.O(void 0,[998],(function(){return a(8648)}));t=a.O(t)})();
//# sourceMappingURL=app.73a497a7.js.map