import{aZ as ne,a1 as oe,G as L,H as le,aa as ye,aq as ae,L as Se,k as S,U as y,D as se,p as m,O,Q as ie,$ as xe,a6 as Te,aA as Ce,aD as we,E as U,a5 as ke,R as ze,a0 as j,Z as Be,I as Y,a_ as _e,ah as Z,as as Ie,A as J,az as Ve,M as Ee,P as pe,S as ue,a3 as Re,J as $e,K as R,ac as Me}from"./index.543004f0.js";import{u as re,b as ce,g as Ae,m as He}from"./position.2a174945.js";import{m as Pe,u as Oe}from"./lazy.ab86eb70.js";import{M as Xe}from"./VImg.23ca7e25.js";import{V as q}from"./VBtn.666062ff.js";import{h as Ye,f as Le,n as Fe}from"./router.1d5a8278.js";import{a as We,s as Ge}from"./VAvatar.1ad0097d.js";import{b as Q}from"./index.e08ff1f1.js";const De=e=>{const{touchstartX:n,touchendX:o,touchstartY:t,touchendY:r}=e,s=.5,l=16;e.offsetX=o-n,e.offsetY=r-t,Math.abs(e.offsetY)<s*Math.abs(e.offsetX)&&(e.left&&o<n-l&&e.left(e),e.right&&o>n+l&&e.right(e)),Math.abs(e.offsetX)<s*Math.abs(e.offsetY)&&(e.up&&r<t-l&&e.up(e),e.down&&r>t+l&&e.down(e))};function je(e,n){var o;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(o=n.start)==null||o.call(n,{originalEvent:e,...n})}function qe(e,n){var o;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(o=n.end)==null||o.call(n,{originalEvent:e,...n}),De(n)}function Ue(e,n){var o;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(o=n.move)==null||o.call(n,{originalEvent:e,...n})}function Ke(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:o=>je(o,n),touchend:o=>qe(o,n),touchmove:o=>Ue(o,n)}}function Ne(e,n){var i,c;var o;const t=n.value,r=t!=null&&t.parent?e.parentElement:e,s=(i=t==null?void 0:t.options)!=null?i:{passive:!0},l=(o=n.instance)==null?void 0:o.$.uid;if(!r||!l)return;const a=Ke(n.value);r._touchHandlers=(c=r._touchHandlers)!=null?c:Object.create(null),r._touchHandlers[l]=a,ne(a).forEach(v=>{r.addEventListener(v,a[v],s)})}function Ze(e,n){var o,t;const r=(o=n.value)!=null&&o.parent?e.parentElement:e,s=(t=n.instance)==null?void 0:t.$.uid;if(!(r!=null&&r._touchHandlers)||!s)return;const l=r._touchHandlers[s];ne(l).forEach(a=>{r.removeEventListener(a,l[a])}),delete r._touchHandlers[s]}const ve={mounted:Ne,unmounted:Ze},Je=ve,de=Symbol.for("vuetify:v-window"),fe=Symbol.for("vuetify:v-window-group"),ft=oe()({name:"VWindow",directives:{Touch:ve},props:{continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...L(),...le()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:o}=n;const{themeClasses:t}=ye(e),{isRtl:r}=ae(),{t:s}=Se(),l=re(e,fe),a=S(),i=y(()=>r.value?!e.reverse:e.reverse),c=S(!1),v=y(()=>{const f=e.direction==="vertical"?"y":"x",C=(i.value?!c.value:c.value)?"-reverse":"";return`v-window-${f}${C}-transition`}),x=S(0),T=S(void 0),h=y(()=>l.items.value.findIndex(f=>l.selected.value.includes(f.id)));se(h,(f,b)=>{const C=l.items.value.length,B=C-1;C<=2?c.value=f<b:f===B&&b===0?c.value=!0:f===0&&b===B?c.value=!1:c.value=f<b}),Te(de,{transition:v,isReversed:c,transitionCount:x,transitionHeight:T,rootRef:a});const g=y(()=>e.continuous||h.value!==0),I=y(()=>e.continuous||h.value!==l.items.value.length-1);function E(){g.value&&l.prev()}function V(){I.value&&l.next()}const k=y(()=>{const f=[],b={icon:r.value?e.nextIcon:e.prevIcon,class:`v-window__${i.value?"right":"left"}`,onClick:l.prev,ariaLabel:s("$vuetify.carousel.prev")};f.push(g.value?o.prev?o.prev({props:b}):m(q,b,null):m("div",null,null));const C={icon:r.value?e.prevIcon:e.nextIcon,class:`v-window__${i.value?"left":"right"}`,onClick:l.next,ariaLabel:s("$vuetify.carousel.next")};return f.push(I.value?o.next?o.next({props:C}):m(q,C,null):m("div",null,null)),f}),z=y(()=>e.touch===!1?e.touch:{...{left:()=>{i.value?E():V()},right:()=>{i.value?V():E()},start:b=>{let{originalEvent:C}=b;C.stopPropagation()}},...e.touch===!0?{}:e.touch});return O(()=>{var f,b;return ie(m(e.tag,{ref:a,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value]},{default:()=>[m("div",{class:"v-window__container",style:{height:T.value}},[(f=o.default)==null?void 0:f.call(o,{group:l}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[k.value])]),(b=o.additional)==null?void 0:b.call(o,{group:l})]}),[[xe("touch"),z.value]])}),{group:l}}});function Qe(){const e=S(!1);return Ce(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:y(()=>e.value?void 0:{transition:"none !important"}),isBooted:we(e)}}const ht=U({name:"VWindowItem",directives:{Touch:Je},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...ce(),...Pe()},emits:{"group:selected":e=>!0},setup(e,n){let{slots:o}=n;const t=ke(de),r=Ae(e,fe),{isBooted:s}=Qe();if(!t||!r)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const l=S(!1),a=y(()=>t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1);function i(){!l.value||!t||(l.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function c(){if(!(l.value||!t)){if(l.value=!0,t.transitionCount.value===0){var g;t.transitionHeight.value=j((g=t.rootRef.value)==null?void 0:g.clientHeight)}t.transitionCount.value+=1}}function v(){i()}function x(g){!l.value||Be(()=>{!a.value||!l.value||!t||(t.transitionHeight.value=j(g.clientHeight))})}const T=y(()=>{const g=t.isReversed.value?e.reverseTransition:e.transition;return a.value?{name:typeof g!="string"?t.transition.value:g,onBeforeEnter:c,onAfterEnter:i,onEnterCancelled:v,onBeforeLeave:c,onAfterLeave:i,onLeaveCancelled:v,onEnter:x}:!1}),{hasContent:h}=Oe(e,r.isSelected);return O(()=>{var g;return m(Xe,{transition:s.value&&T.value},{default:()=>[ie(m("div",{class:["v-window-item",r.selectedClass.value]},[h.value&&((g=o.default)==null?void 0:g.call(o))]),[[ze,r.isSelected.value]])]})}),{}}});function ee(e){const o=Math.abs(e);return Math.sign(e)*(o/((1/.501-2)*(1-o)+1))}function te(e){let{selectedElement:n,containerSize:o,contentSize:t,isRtl:r,currentScrollOffset:s,isHorizontal:l}=e;const a=l?n.clientWidth:n.clientHeight,i=l?n.offsetLeft:n.offsetTop,c=r&&l?t-i-a:i,v=o+s,x=a+c,T=a*.4;return c<=s?s=Math.max(c-T,0):v<=x&&(s=Math.min(s-(v-x-T),t-o)),s}function et(e){let{selectedElement:n,containerSize:o,contentSize:t,isRtl:r,isHorizontal:s}=e;const l=s?n.clientWidth:n.clientHeight,a=s?n.offsetLeft:n.offsetTop,i=r&&s?t-a-l/2-o/2:a+l/2-o/2;return Math.min(t-o,Math.max(0,i))}const tt=Symbol.for("vuetify:v-slide-group"),nt=oe()({name:"VSlideGroup",props:{centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:tt},nextIcon:{type:Y,default:"$next"},prevIcon:{type:Y,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...L(),...He({selectedClass:"v-slide-group-item--active"})},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:o}=n;const{isRtl:t}=ae(),{mobile:r}=_e(),s=re(e,e.symbol),l=S(!1),a=S(0),i=S(0),c=S(0),v=y(()=>e.direction==="horizontal"),{resizeRef:x,contentRect:T}=Z(),{resizeRef:h,contentRect:g}=Z(),I=y(()=>s.selected.value.length?s.items.value.findIndex(u=>u.id===s.selected.value[0]):-1),E=y(()=>s.selected.value.length?s.items.value.findIndex(u=>u.id===s.selected.value[s.selected.value.length-1]):-1);if(Ie){let u=-1;se(()=>[s.selected.value,T.value,g.value,v.value],()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{if(T.value&&g.value){const d=v.value?"width":"height";i.value=T.value[d],c.value=g.value[d],l.value=i.value+1<c.value}if(I.value>=0&&h.value){const d=h.value.children[E.value];I.value===0||!l.value?a.value=0:e.centerActive?a.value=et({selectedElement:d,containerSize:i.value,contentSize:c.value,isRtl:t.value,isHorizontal:v.value}):l.value&&(a.value=te({selectedElement:d,containerSize:i.value,contentSize:c.value,isRtl:t.value,currentScrollOffset:a.value,isHorizontal:v.value}))}})})}const V=S(!1);let k=0,z=0;function f(u){const d=v.value?"clientX":"clientY";z=(t.value&&v.value?-1:1)*a.value,k=u.touches[0][d],V.value=!0}function b(u){if(!l.value)return;const d=v.value?"clientX":"clientY",_=t.value&&v.value?-1:1;a.value=_*(z+k-u.touches[0][d])}function C(u){const d=c.value-i.value;a.value<0||!l.value?a.value=0:a.value>=d&&(a.value=d),V.value=!1}function B(){!x.value||(x.value[v.value?"scrollLeft":"scrollTop"]=0)}const $=S(!1);function F(u){if($.value=!0,!(!l.value||!h.value)){for(const d of u.composedPath())for(const _ of h.value.children)if(_===d){a.value=te({selectedElement:_,containerSize:i.value,contentSize:c.value,isRtl:t.value,currentScrollOffset:a.value,isHorizontal:v.value});return}}}function p(u){$.value=!1}function W(u){var d;!$.value&&!(u.relatedTarget&&(d=h.value)!=null&&d.contains(u.relatedTarget))&&w()}function K(u){!h.value||(v.value?u.key==="ArrowRight"?w(t.value?"prev":"next"):u.key==="ArrowLeft"&&w(t.value?"next":"prev"):u.key==="ArrowDown"?w("next"):u.key==="ArrowUp"&&w("prev"),u.key==="Home"?w("first"):u.key==="End"&&w("last"))}function w(u){if(!!h.value)if(u){if(u==="next"){var _;const M=(_=h.value.querySelector(":focus"))==null?void 0:_.nextElementSibling;M?M.focus():w("first")}else if(u==="prev"){var H;const M=(H=h.value.querySelector(":focus"))==null?void 0:H.previousElementSibling;M?M.focus():w("last")}else if(u==="first"){var P;(P=h.value.firstElementChild)==null||P.focus()}else if(u==="last"){var N;(N=h.value.lastElementChild)==null||N.focus()}}else{var d;(d=[...h.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(be=>!be.hasAttribute("disabled"))[0])==null||d.focus()}}function A(u){const d=a.value+(u==="prev"?-1:1)*i.value;a.value=Ve(d,0,c.value-i.value)}const X=y(()=>{let u=a.value>c.value-i.value?-(c.value-i.value)+ee(c.value-i.value-a.value):-a.value;a.value<=0&&(u=ee(-a.value));const d=t.value&&v.value?-1:1;return{transform:`translate${v.value?"X":"Y"}(${d*u}px)`,transition:V.value?"none":"",willChange:V.value?"transform":""}}),G=y(()=>({next:s.next,prev:s.prev,select:s.select,isSelected:s.isSelected})),D=y(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return l.value||Math.abs(a.value)>0;case"mobile":return r.value||l.value||Math.abs(a.value)>0;default:return!r.value&&(l.value||Math.abs(a.value)>0)}}),me=y(()=>Math.abs(a.value)>0),ge=y(()=>c.value>Math.abs(a.value)+i.value);return O(()=>{var u,d,_;return m(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!v.value,"v-slide-group--has-affixes":D.value,"v-slide-group--is-overflowing":l.value}],tabindex:$.value||s.selected.value.length?-1:0,onFocus:W},{default:()=>{var H,P;return[D.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!me.value}],onClick:()=>A("prev")},[(H=(u=o.prev)==null?void 0:u.call(o,G.value))!=null?H:m(Q,null,{default:()=>[m(J,{icon:t.value?e.nextIcon:e.prevIcon},null)]})]),m("div",{key:"container",ref:x,class:"v-slide-group__container",onScroll:B},[m("div",{ref:h,class:"v-slide-group__content",style:X.value,onTouchstartPassive:f,onTouchmovePassive:b,onTouchendPassive:C,onFocusin:F,onFocusout:p,onKeydown:K},[(d=o.default)==null?void 0:d.call(o,G.value)])]),D.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ge.value}],onClick:()=>A("next")},[(P=(_=o.next)==null?void 0:_.call(o,G.value))!=null?P:m(Q,null,{default:()=>[m(J,{icon:t.value?e.prevIcon:e.nextIcon},null)]})])]}})}),{selected:s.selected,scrollTo:A,scrollOffset:a,focus:w}}});const he=Symbol.for("vuetify:v-tabs"),ot=U({name:"VTab",props:{fixed:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Y,appendIcon:Y,stacked:Boolean,title:String,ripple:{type:Boolean,default:!0},color:String,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...L(),...Ye(),...ce({selectedClass:"v-tab--selected"}),...le()},setup(e,n){let{slots:o,attrs:t}=n;const{textColorClasses:r,textColorStyles:s}=Ee(e,"sliderColor"),l=y(()=>e.direction==="horizontal"),a=S(!1),i=S(),c=S();function v(x){let{value:T}=x;if(a.value=T,T){var h,g;const I=(h=i.value)==null||(g=h.$el.parentElement)==null?void 0:g.querySelector(".v-tab--selected .v-tab__slider"),E=c.value;if(!I||!E)return;const V=getComputedStyle(I).color,k=I.getBoundingClientRect(),z=E.getBoundingClientRect(),f=l.value?"x":"y",b=l.value?"X":"Y",C=l.value?"right":"bottom",B=l.value?"width":"height",$=k[f],F=z[f],p=$>F?k[C]-z[C]:k[f]-z[f],W=Math.sign(p)>0?l.value?"right":"bottom":Math.sign(p)<0?l.value?"left":"top":"center",w=(Math.abs(p)+(Math.sign(p)<0?k[B]:z[B]))/Math.max(k[B],z[B]),A=k[B]/z[B],X=1.5;We(E,{backgroundColor:[V,""],transform:[`translate${b}(${p}px) scale${b}(${A})`,`translate${b}(${p/X}px) scale${b}(${(w-1)/X+1})`,""],transformOrigin:Array(3).fill(W)},{duration:225,easing:Ge})}}return O(()=>{const[x]=pe(e,["href","to","replace","icon","stacked","prependIcon","appendIcon","ripple","theme","disabled","selectedClass","value","color"]);return m(q,ue({_as:"VTab",symbol:he,ref:i,class:["v-tab"],tabindex:a.value?0:-1,role:"tab","aria-selected":String(a.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,variant:"text",rounded:0},x,t,{"onGroup:selected":v}),{default:()=>[o.default?o.default():e.title,!e.hideSlider&&m("div",{ref:c,class:["v-tab__slider",r.value],style:s.value},null)]})}),{}}});function lt(e){return e?e.map(n=>typeof n=="string"?{title:n,value:n}:n):[]}const mt=U({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,direction:{type:String,default:"horizontal"},fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,modelValue:null,mandatory:{type:[Boolean,String],default:"force"},...Le(),...L()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:o}=n;const t=Re(e,"modelValue"),r=y(()=>lt(e.items)),{densityClasses:s}=Fe(e),{backgroundColorClasses:l,backgroundColorStyles:a}=$e(R(e,"bgColor"));return Me({VTab:{color:R(e,"color"),direction:R(e,"direction"),stacked:R(e,"stacked"),fixed:R(e,"fixedTabs"),sliderColor:R(e,"sliderColor"),hideSlider:R(e,"hideSlider")}}),O(()=>m(nt,{modelValue:t.value,"onUpdate:modelValue":i=>t.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},s.value,l.value],style:[{"--v-tabs-height":j(e.height)},a.value],role:"tablist",symbol:he,mandatory:e.mandatory,direction:e.direction},{default:()=>[o.default?o.default():r.value.map(i=>m(ot,ue(i,{key:i.title}),null))]})),{}}});export{mt as V,ht as a,ft as b,ot as c};
