import{u as e}from"./index.9613fab0.js";import{d as t,C as a,f as s,e as l,p as o,h as n,A as r,o as i,j as f,s as c,F as p,k as u,t as m,I as d,q as h,u as y}from"./element-plus.d6b83795.js";var F=t({name:"FontSelector",props:{showRefresh:{type:Boolean,default:!1}},setup(){const t=e();a((()=>{t.state.fontFamilyList&&0!==t.state.fontFamilyList.length||t.commit("updateFontFamilyList")}));const o=s((()=>t.state.fontFamilyList)),n=l(!1);return{fontList:o,rotate:n,refresh:()=>{t.commit("updateFontFamilyList"),n.value=!0,setTimeout((()=>{n.value=!1}),500)}}}});const b=y();o("data-v-3b480058");const v={class:"wrapper"},L={style:{float:"left","font-weight":"bold"}},g={style:{float:"right",color:"#8492a6","font-size":"13px","margin-left":"36px"}};n();const k=b(((e,t,a,s,l,o)=>{const n=r("el-option"),y=r("el-select");return i(),f("div",v,[c(y,d({placeholder:"请选择相关字体库",clearable:""},e.$attrs),{default:b((()=>[(i(!0),f(p,null,u(e.fontList,(e=>(i(),f(n,{key:e.cn,value:e.en,label:e.cn,style:{fontFamily:e.en}},{default:b((()=>[c("span",L,m(e.cn),1),c("span",g,m(e.en),1)])),_:2},1032,["value","label","style"])))),128))])),_:1},16),e.showRefresh?(i(),f("i",{key:0,class:["el-icon-refresh",{rotate:e.rotate}],onClick:t[1]||(t[1]=(...t)=>e.refresh&&e.refresh(...t))},null,2)):h("",!0)])}));F.render=k,F.__scopeId="data-v-3b480058";export default F;