import{o as s,c as p,F as g,a as $,b as f,e as w,_ as k,f as b,g as C,i as N,j as S,k as V,l as z,m as t,n as m,p as o,q as e,s as v,t as L,w as r,V as R,v as h,x,T as I,r as y}from"./index.fee045eb.js";import B from"./Footer.c80d1ef4.js";import E from"./NavbarThemeSwitcher.57bf8524.js";import H from"./UserProfile.21aaf271.js";import{V as T}from"./VSpacer.feaa1126.js";import"./VBtn.2c0afab5.js";import"./router.95681313.js";import"./position.28187aa7.js";import"./avatar-1.611da40a.js";import"./VBadge.1d9daf5e.js";import"./VImg.6e3714cb.js";import"./VMenu.b4032bb8.js";import"./VDivider.ba925130.js";import"./scopeId.d99626d6.js";import"./easing.36b781ab.js";import"./lazy.2e71ca0f.js";import"./VList.4c8d9d72.js";import"./index.733fb259.js";import"./VAvatar.b6ab83c2.js";import"./VListItemAction.e2eda287.js";const W={class:"nav-items"},q={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(u){const i=l=>"children"in l?k:b;return(l,d)=>(s(),p("ul",W,[(s(!0),p(g,null,$(u.navItems,(a,c)=>(s(),f(w(i(a)),{key:c,item:a},null,8,["item"]))),128))]))}},D={class:"layout-navbar"},F={class:"navbar-content-container"},j={class:"layout-horizontal-nav"},P={class:"horizontal-nav-content-container"},Y={class:"layout-page-content"},A={class:"layout-footer"},G={class:"footer-content-container"},J={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(u){const{y:i}=C(),{width:l}=N(),d=S(),a=V(!1);d.beforeEach(()=>{a.value=!0}),d.afterEach(()=>{a.value=!1});const{_layoutClasses:c,isNavbarBlurEnabled:_}=z();return(n,O)=>(s(),p("div",{class:v(["layout-wrapper",e(c)(e(l),e(i))])},[t("div",{class:v(["layout-navbar-and-nav-container",e(_)&&"header-blur"])},[t("div",D,[t("div",F,[m(n.$slots,"navbar")])]),t("div",j,[t("div",P,[o(e(q),{"nav-items":u.navItems},null,8,["nav-items"])])])],2),t("main",Y,[n.$slots["content-loading"]?(s(),p(g,{key:0},[e(a)?m(n.$slots,"content-loading",{key:0}):m(n.$slots,"default",{key:1})],64)):m(n.$slots,"default",{key:1})]),t("footer",A,[t("div",G,[m(n.$slots,"footer")])])],2))}},K=[{title:"Home",to:{name:"index"},icon:{icon:"mdi-home-outline"}},{title:"Second page",to:{name:"second-page"},icon:{icon:"mdi-file-document-outline"}}],M={class:"font-weight-medium leading-normal text-xl text-uppercase"},ve={__name:"DefaultLayoutWithHorizontalNav",setup(u){const{appRouteTransition:i}=L();return(l,d)=>{const a=y("RouterLink"),c=y("RouterView");return s(),f(e(J),{"nav-items":e(K)},{navbar:r(()=>[o(a,{to:"/",class:"d-flex align-center gap-x-3"},{default:r(()=>[o(e(R),{nodes:e(h).app.logo},null,8,["nodes"]),t("h1",M,x(e(h).app.title),1)]),_:1}),o(T),o(E,{class:"me-2"}),o(H)]),footer:r(()=>[o(B)]),default:r(()=>[o(c,null,{default:r(({Component:_,route:n})=>[o(I,{name:e(i),mode:"out-in"},{default:r(()=>[(s(),f(w(_),{key:n.path}))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}};export{ve as default};