var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,a=(e,a)=>{for(var i in a||(a={}))n.call(a,i)&&r(e,i,a[i]);if(t)for(var i of t(a))o.call(a,i)&&r(e,i,a[i]);return e};"undefined"!=typeof require&&require;import{m as i}from"./index.99786fc0.js";import{d as p,b as c,w as s,o as l,c as u,f as d,E as m,u as f,H as S}from"./element-plus.01c37972.js";var w=p({name:"Clock",props:{componentSetting:{type:Object,required:!0}},setup(e){const t=c(n());function n(){const e=(new Date).getHours(),t=(new Date).getMinutes();return`${e}:${t<10?"0"+t:t}`}let o;function r(){var r;o=window.setInterval((()=>{t.value=n()}),(null==(r=e.componentSetting)?void 0:r.duration)||5e3)}r(),s((()=>e.componentSetting.duration),(()=>{window.clearInterval(o),r()})),l((()=>{window.clearInterval(o)}));const a=u((()=>i(e.componentSetting.position)));return{now:t,positionCSS:a}}});w.render=function(e,t,n,o,r,i){return d(),m("div",{class:"wrapper",style:S(a({fontSize:e.componentSetting.textFontSize+"px",color:e.componentSetting.textColor,textShadow:e.componentSetting.textShadow,padding:e.componentSetting.padding+"px",fontFamily:e.componentSetting.fontFamily},e.positionCSS))},f(e.now),5)},w.__scopeId="data-v-76f22e38";export default w;