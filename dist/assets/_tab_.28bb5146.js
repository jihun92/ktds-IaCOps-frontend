import{cr as y,k as j,ao as T,o as l,b as p,w as t,p as e,c as u,F as x,a as v,q as m,A as P,m as g,x as k,z as w,as as f,aT as C,r as S}from"./index.fee045eb.js";import{a as B}from"./axios.eeb27ab9.js";import{a as _,V as N}from"./VRow.99187062.js";import{V,c as b}from"./VCard.35ed4262.js";import{V as z}from"./VBtn.2c0afab5.js";import{V as L}from"./VAvatar.b6ab83c2.js";import{b as h}from"./route-block.023af118.js";import{V as U,a as I,b as R,c as A}from"./VTabs.4354706b.js";import"./router.95681313.js";import"./position.28187aa7.js";import"./VImg.6e3714cb.js";import"./lazy.2e71ca0f.js";import"./easing.36b781ab.js";import"./index.733fb259.js";const D=y("ProjectListStore",{actions:{fetchProjects(n){return B.get("/pages/projects/list",{params:n})}}}),E=g("h6",{class:"text-h6",style:{color:"white"}},"New Project",-1),F={class:"text-h6"},H={__name:"ProjectSettings",setup(n){const i=D(),o=j([]);return T(()=>{i.fetchProjects({}).then(s=>{o.value=s.data.projects}).catch(s=>{console.error(s)})}),(s,r)=>(l(),p(N,null,{default:t(()=>[e(_,{cols:"12",md:"6",lg:"4"},{default:t(()=>[e(V,null,{default:t(()=>[e(z,{"prepend-icon":"mdi-plus",class:"me-5",style:{width:"56px",height:"185px"},block:""},{default:t(()=>[E]),_:1})]),_:1})]),_:1}),(l(!0),u(x,null,v(m(o),c=>(l(),p(_,{key:c.id,md:"6",lg:"4"},{default:t(()=>[e(V,{class:"text-center",onClick:s.goToNextTab},{default:t(()=>[e(b,{class:"d-flex flex-column justify-center align-center"},{default:t(()=>[e(L,{color:"primary",variant:"tonal",size:"56",class:"mb-4"},{default:t(()=>[e(P,{size:"2rem",icon:"mdi-cloud-check-outline"})]),_:1}),g("h6",F,k(c.projectGroup),1)]),_:2},1024),e(b,null,{default:t(()=>[w(" Demo Project ")]),_:1})]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1}))}},W={__name:"[tab]",setup(n){const i=C(),o=j(i.params.tab),d=[{title:"Projects",icon:"mdi-view-grid-outline",tab:"projects"}];return(s,r)=>{const c=S("UserProfileHeader");return l(),u("div",null,[e(c,{class:"mb-6"}),e(U,{modelValue:m(o),"onUpdate:modelValue":r[0]||(r[0]=a=>f(o)?o.value=a:null),class:"v-tabs-pill"},{default:t(()=>[(l(),u(x,null,v(d,a=>e(A,{key:a.icon,value:a.tab,to:{name:"project-tab",params:{tab:a.tab}}},{default:t(()=>[e(P,{size:"20",start:"",icon:a.icon},null,8,["icon"]),w(" "+k(a.title),1)]),_:2},1032,["value","to"])),64))]),_:1},8,["modelValue"]),e(R,{modelValue:m(o),"onUpdate:modelValue":r[1]||(r[1]=a=>f(o)?o.value=a:null),class:"mt-6 disable-tab-transition",touch:!1},{default:t(()=>[e(I,{value:"projects"},{default:t(()=>[e(H)]),_:1})]),_:1},8,["modelValue"])])}}};typeof h=="function"&&h(W);export{W as default};
