import{bq as p,j as f,k as r,r as v,o as i,c,p as t,w as d,F as x,a as V,B as _,A as k,x as I}from"./index.ee0bb086.js";import{b as u}from"./route-block.2f1a6263.js";import{V as S,a as T}from"./VTabs.48ace95b.js";const g={name:"[tab]",setup(y){const b=p();f();const s=r(b.params.tab),n=[{id:1,title:"1. sample",icon:"mdi-account-outline",tab:"parameter"},{id:2,title:"2. sample ",icon:"mdi-lock-open-outline",tab:"dry"},{id:3,title:"3. sample",icon:"mdi-bell-outline",tab:"run"}];r({settingSW:[{selectedSwMain:"",selectedSwSub:"",selectedVersion:"",selectedState:"",selectedInstall:""}],settingOS:[{keyMain:""}]});function m(o){const a=n.findIndex(e=>e.tab===s.value);return n.findIndex(e=>e.tab===o)>a}return(o,a)=>{const l=v("UserProfileHeader");return i(),c("div",null,[t(l,{class:"mb-6"}),t(T,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=e=>s.value=e),class:"v-tabs-pill"},{default:d(()=>[(i(),c(x,null,V(n,e=>t(S,{key:e.icon,value:e.tab,to:{name:"infrachange-terraform-tab",params:{tab:e.tab}},disabled:m(e.tab)},{default:d(()=>[t(_,{size:"20",start:"",icon:e.icon},null,8,["icon"]),k(" "+I(e.title),1)]),_:2},1032,["value","to","disabled"])),64))]),_:1},8,["modelValue"])])}}};typeof u=="function"&&u(g);export{g as default};