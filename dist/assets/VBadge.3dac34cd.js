import{E as B,I as N,G as V,H as $,J as y,K as r,L as _,M as h,N as P,O as T,P as R,p as l,Q as L,R as w,S as d,A}from"./index.543004f0.js";import{m as I,a as M,u as X,b as Y}from"./router.1d5a8278.js";import{m as D,M as E}from"./VImg.23ca7e25.js";const K=B({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:N,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...I({location:"top end"}),...M(),...V(),...$(),...D({transition:"scale-rotate-transition"})},setup(e,n){const{backgroundColorClasses:u,backgroundColorStyles:c}=y(r(e,"color")),{roundedClasses:g}=X(e),{t:m}=_(),{textColorClasses:b,textColorStyles:f}=h(r(e,"textColor")),{themeClasses:v}=P(),{locationStyles:C}=Y(e,!0,a=>{var t,o;return(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(a)?+((t=e.offsetY)!=null?t:0):["left","right"].includes(a)?+((o=e.offsetX)!=null?o:0):0)});return T(()=>{var a,i,t,o;const s=Number(e.content),S=!e.max||isNaN(s)?e.content:s<=e.max?s:`${e.max}+`,[x,k]=R(n.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return l(e.tag,d({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline}]},k),{default:()=>[l("div",{class:"v-badge__wrapper"},[(a=(i=n.slots).default)==null?void 0:a.call(i),l(E,{transition:e.transition},{default:()=>[L(l("span",d({class:["v-badge__badge",v.value,u.value,g.value,b.value],style:[c.value,f.value,e.inline?{}:C.value],"aria-atomic":"true","aria-label":m(e.label,s),"aria-live":"polite",role:"status"},x),[e.dot?void 0:n.slots.badge?(t=(o=n.slots).badge)==null?void 0:t.call(o):e.icon?l(A,{icon:e.icon},null):S]),[[w,e.modelValue]])]})])]})}),{}}});export{K as V};