import{E as V,O as j,p as r,U as b,W as p,X as D,h as E,S as M,T as q,k as _,D as N,Y as x,Z as A,Q as O,$ as H,F as U,a0 as L,R as Q}from"./index.fee045eb.js";import{c as X,d as Y}from"./router.95681313.js";function Z(e){return{aspectStyles:b(()=>{const s=Number(e.aspectRatio);return s?{paddingBottom:String(1/s*100)+"%"}:void 0})}}const G=V({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...X()},setup(e,s){let{slots:l}=s;const{aspectStyles:t}=Z(e),{dimensionStyles:c}=Y(e);return j(()=>{var i;return r("div",{class:"v-responsive",style:c.value},[r("div",{class:"v-responsive__sizer",style:t.value},null),(i=l.additional)==null?void 0:i.call(l),l.default&&r("div",{class:["v-responsive__content",e.contentClass]},[l.default()])])}),{}}});function J(e,s){if(!p)return;const l=s.modifiers||{},t=s.value,{handler:c,options:i}=typeof t=="object"?t:{handler:t,options:{}},a=new IntersectionObserver(function(){var d;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;const v=(d=e._observe)==null?void 0:d[s.instance.$.uid];if(!v)return;const f=g.some(S=>S.isIntersecting);c&&(!l.quiet||v.init)&&(!l.once||f||v.init)&&c(f,g,o),f&&l.once?W(e,s):v.init=!0},i);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:a},a.observe(e)}function W(e,s){var l;const t=(l=e._observe)==null?void 0:l[s.instance.$.uid];!t||(t.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const K={mounted:J,unmounted:W},ee=K,te=D({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),h=(e,s)=>{let{slots:l}=s;const{transition:t,...c}=e,{component:i=q,...a}=typeof t=="object"?t:{};return E(i,M(typeof t=="string"?{name:t}:a,c),l)},ae=V({name:"VImg",directives:{intersect:ee},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...te()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,s){let{emit:l,slots:t}=s;const c=_(""),i=_(),a=_(e.eager?"loading":"idle"),d=_(),g=_(),o=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),v=b(()=>o.value.aspect||d.value/g.value||0);N(()=>e.src,()=>{f(a.value!=="idle")}),x(()=>f());function f(n){if(!(e.eager&&n)&&!(p&&!n&&!e.eager)){if(a.value="loading",o.value.lazySrc){const u=new Image;u.src=o.value.lazySrc,y(u,null)}!o.value.src||A(()=>{var u,m;if(l("loadstart",((u=i.value)==null?void 0:u.currentSrc)||o.value.src),(m=i.value)!=null&&m.complete){if(i.value.naturalWidth||$(),a.value==="error")return;v.value||y(i.value,null),S()}else v.value||y(i.value),z()})}}function S(){var n;z(),a.value="loaded",l("load",((n=i.value)==null?void 0:n.currentSrc)||o.value.src)}function $(){var n;a.value="error",l("error",((n=i.value)==null?void 0:n.currentSrc)||o.value.src)}function z(){const n=i.value;n&&(c.value=n.currentSrc||n.src)}function y(n){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const m=()=>{const{naturalHeight:T,naturalWidth:w}=n;T||w?(d.value=w,g.value=T):!n.complete&&a.value==="loading"&&u!=null?setTimeout(m,u):(n.currentSrc.endsWith(".svg")||n.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,g.value=1)};m()}const I=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),B=()=>{var n;if(!o.value.src||a.value==="idle")return null;const u=r("img",{class:["v-img__img",I.value],src:o.value.src,srcset:o.value.srcset,alt:"",sizes:e.sizes,ref:i,onLoad:S,onError:$},null),m=(n=t.sources)==null?void 0:n.call(t);return r(h,{transition:e.transition,appear:!0},{default:()=>[O(m?r("picture",{class:"v-img__picture"},[m,u]):u,[[Q,a.value==="loaded"]])]})},F=()=>r(h,{transition:e.transition},{default:()=>[o.value.lazySrc&&a.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",I.value],src:o.value.lazySrc,alt:""},null)]}),P=()=>t.placeholder?r(h,{transition:e.transition,appear:!0},{default:()=>[(a.value==="loading"||a.value==="error"&&!t.error)&&r("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,k=()=>t.error?r(h,{transition:e.transition,appear:!0},{default:()=>[a.value==="error"&&r("div",{class:"v-img__error"},[t.error()])]}):null,C=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,R=_(!1);{const n=N(v,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{R.value=!0})}),n())})}return j(()=>O(r(G,{class:["v-img",{"v-img--booting":!R.value}],style:{width:L(e.width==="auto"?d.value:e.width)},aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>r(U,null,[r(B,null,null),r(F,null,null),r(C,null,null),r(P,null,null),r(k,null,null)]),default:t.default}),[[H("intersect"),{handler:f,options:e.options},null,{once:!0}]])),{currentSrc:c,image:i,state:a,naturalWidth:d,naturalHeight:g}}});export{ee as I,h as M,ae as V,te as m};
