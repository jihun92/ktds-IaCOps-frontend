import{j as b,o as s,b as n,w as e,p as t,A as i,z as h,q as u,aN as g,c as V,F as x,a as v,s as A,m,x as p}from"./index.543004f0.js";import{V as C}from"./VMenu.a8d7036b.js";import{V as w,a as S,b as y}from"./VCard.fda5326d.js";import{V as d}from"./VBtn.666062ff.js";import{V as z}from"./VDivider.e6866a5a.js";import{V as k,a as B}from"./VRow.617d555f.js";import{V as I}from"./VAvatar.1ad0097d.js";import"./scopeId.8fffb193.js";import"./router.1d5a8278.js";import"./lazy.ab86eb70.js";import"./VImg.23ca7e25.js";import"./position.2a174945.js";const N={class:"text-base font-weight-medium mt-2 mb-0"},D={class:"text-sm"},q={__name:"Shortcuts",props:{togglerIcon:{type:String,required:!1,default:"mdi-view-grid-plus-outline"},shortcuts:{type:Array,required:!0}},setup(r){const o=r,l=b();return(f,c)=>(s(),n(d,{variant:"text",color:"default",size:"small",icon:""},{default:e(()=>[t(i,{size:"24",icon:o.togglerIcon},null,8,["icon"]),t(C,{activator:"parent",offset:"14px",location:"bottom end"},{default:e(()=>[t(w,{width:"340","max-height":"560",class:"d-flex flex-column"},{default:e(()=>[t(S,{class:"py-4"},{append:e(()=>[t(d,{size:"x-small",variant:"text",color:"default",icon:""},{default:e(()=>[t(i,{size:"22",icon:"mdi-view-grid-plus-outline"})]),_:1})]),default:e(()=>[t(y,null,{default:e(()=>[h("Shortcuts")]),_:1})]),_:1}),t(z),t(u(g),{options:{wheelPropagation:!1}},{default:e(()=>[t(k,{class:"ma-0 mt-n1"},{default:e(()=>[(s(!0),V(x,null,v(o.shortcuts,(a,_)=>(s(),n(B,{key:a.title,cols:"6",class:A(["text-center border-t cursor-pointer pa-4",(_+1)%2?"border-e":""]),onClick:F=>u(l).push(a.to)},{default:e(()=>[t(I,{variant:"tonal",size:"48"},{default:e(()=>[t(i,{icon:a.icon},null,8,["icon"])]),_:2},1024),m("h6",N,p(a.title),1),m("span",D,p(a.subtitle),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},J={__name:"NavbarShortcuts",setup(r){const o=[{icon:"mdi-calendar",title:"Calendar",subtitle:"Appointments",to:{name:"apps-calendar"}},{icon:"mdi-file-document-outline",title:"Invoice App",subtitle:"Manage Accounts",to:{name:"apps-invoice-list"}},{icon:"mdi-account-outline",title:"Users",subtitle:"Manage Users",to:{name:"apps-user-list"}},{icon:"mdi-view-dashboard-outline",title:"Dashboard",subtitle:"Dashboard Analytics",to:{name:"dashboards-analytics"}},{icon:"mdi-cog-outline",title:"Settings",subtitle:"Account Settings",to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{icon:"mdi-help-circle-outline",title:"Help Center",subtitle:"FAQs & Articles",to:{name:"pages-help-center"}}];return(l,f)=>{const c=q;return s(),n(c,{shortcuts:o})}}};export{J as default};
