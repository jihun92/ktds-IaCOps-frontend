import{ab as oe,R as G,W as Y,bD as se,aQ as ie,bE as ue,bF as re,k,af as S,bG as U,aq as ce,E as ve,a5 as q,p as f,bH as j,B as K,aI as de,Q as Z,bI as fe,bJ as be,X as ge,a2 as me,a6 as he,aa as ee,G as Se,ak as ye,am as xe,bc as pe,ad as ke,bh as ze,Z as Ce,$ as T,bv as Te,aH as we}from"./index.ee0bb086.js";function Q(e){const i=Math.abs(e);return Math.sign(e)*(i/((1/.501-2)*(1-i)+1))}function J(e){let{selectedElement:u,containerSize:i,contentSize:r,isRtl:g,currentScrollOffset:a,isHorizontal:o}=e;const t=o?u.clientWidth:u.clientHeight,s=o?u.offsetLeft:u.offsetTop,v=g&&o?r-s-t:s,c=i+a,h=t+v,y=t*.4;return v<=a?a=Math.max(v-y,0):c<=h&&(a=Math.min(a-(c-h-y),r-i)),a}function Ve(e){let{selectedElement:u,containerSize:i,contentSize:r,isRtl:g,isHorizontal:a}=e;const o=a?u.clientWidth:u.clientHeight,t=a?u.offsetLeft:u.offsetTop,s=g&&a?r-t-o/2-i/2:t+o/2-i/2;return Math.min(r-i,Math.max(0,s))}const Ie=Symbol.for("vuetify:v-slide-group"),Be=oe()({name:"VSlideGroup",props:{centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ie},nextIcon:{type:G,default:"$next"},prevIcon:{type:G,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...Y(),...se({selectedClass:"v-slide-group-item--active"})},emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:i}=u;const{isRtl:r}=ie(),{mobile:g}=ue(),a=re(e,e.symbol),o=k(!1),t=k(0),s=k(0),v=k(0),c=S(()=>e.direction==="horizontal"),{resizeRef:h,contentRect:y}=U(),{resizeRef:d,contentRect:w}=U(),V=S(()=>a.selected.value.length?a.items.value.findIndex(l=>l.id===a.selected.value[0]):-1),M=S(()=>a.selected.value.length?a.items.value.findIndex(l=>l.id===a.selected.value[a.selected.value.length-1]):-1);if(ce){let l=-1;ve(()=>[a.selected.value,y.value,w.value,c.value],()=>{cancelAnimationFrame(l),l=requestAnimationFrame(()=>{if(y.value&&w.value){const n=c.value?"width":"height";s.value=y.value[n],v.value=w.value[n],o.value=s.value+1<v.value}if(V.value>=0&&d.value){const n=d.value.children[M.value];V.value===0||!o.value?t.value=0:e.centerActive?t.value=Ve({selectedElement:n,containerSize:s.value,contentSize:v.value,isRtl:r.value,isHorizontal:c.value}):o.value&&(t.value=J({selectedElement:n,containerSize:s.value,contentSize:v.value,isRtl:r.value,currentScrollOffset:t.value,isHorizontal:c.value}))}})})}const I=k(!1);let x=0,p=0;function B(l){const n=c.value?"clientX":"clientY";p=(r.value&&c.value?-1:1)*t.value,x=l.touches[0][n],I.value=!0}function R(l){if(!o.value)return;const n=c.value?"clientX":"clientY",m=r.value&&c.value?-1:1;t.value=m*(p+x-l.touches[0][n])}function H(l){const n=v.value-s.value;t.value<0||!o.value?t.value=0:t.value>=n&&(t.value=n),I.value=!1}function z(){!h.value||(h.value[c.value?"scrollLeft":"scrollTop"]=0)}const P=k(!1);function $(l){if(P.value=!0,!(!o.value||!d.value)){for(const n of l.composedPath())for(const m of d.value.children)if(m===n){t.value=J({selectedElement:m,containerSize:s.value,contentSize:v.value,isRtl:r.value,currentScrollOffset:t.value,isHorizontal:c.value});return}}}function C(l){P.value=!1}function D(l){var n;!P.value&&!(l.relatedTarget&&(n=d.value)!=null&&n.contains(l.relatedTarget))&&b()}function L(l){!d.value||(c.value?l.key==="ArrowRight"?b(r.value?"prev":"next"):l.key==="ArrowLeft"&&b(r.value?"next":"prev"):l.key==="ArrowDown"?b("next"):l.key==="ArrowUp"&&b("prev"),l.key==="Home"?b("first"):l.key==="End"&&b("last"))}function b(l){if(!!d.value)if(l){if(l==="next"){var m;const A=(m=d.value.querySelector(":focus"))==null?void 0:m.nextElementSibling;A?A.focus():b("first")}else if(l==="prev"){var E;const A=(E=d.value.querySelector(":focus"))==null?void 0:E.previousElementSibling;A?A.focus():b("last")}else if(l==="first"){var _;(_=d.value.firstElementChild)==null||_.focus()}else if(l==="last"){var N;(N=d.value.lastElementChild)==null||N.focus()}}else{var n;(n=[...d.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(ne=>!ne.hasAttribute("disabled"))[0])==null||n.focus()}}function O(l){const n=t.value+(l==="prev"?-1:1)*s.value;t.value=de(n,0,v.value-s.value)}const F=S(()=>{let l=t.value>v.value-s.value?-(v.value-s.value)+Q(v.value-s.value-t.value):-t.value;t.value<=0&&(l=Q(-t.value));const n=r.value&&c.value?-1:1;return{transform:`translate${c.value?"X":"Y"}(${n*l}px)`,transition:I.value?"none":"",willChange:I.value?"transform":""}}),X=S(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),W=S(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!g.value;case!0:return o.value||Math.abs(t.value)>0;case"mobile":return g.value||o.value||Math.abs(t.value)>0;default:return!g.value&&(o.value||Math.abs(t.value)>0)}}),le=S(()=>Math.abs(t.value)>0),ae=S(()=>v.value>Math.abs(t.value)+s.value);return q(()=>{var l,n,m;return f(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!c.value,"v-slide-group--has-affixes":W.value,"v-slide-group--is-overflowing":o.value}],tabindex:P.value||a.selected.value.length?-1:0,onFocus:D},{default:()=>{var E,_;return[W.value&&f("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!le.value}],onClick:()=>O("prev")},[(E=(l=i.prev)==null?void 0:l.call(i,X.value))!=null?E:f(j,null,{default:()=>[f(K,{icon:r.value?e.nextIcon:e.prevIcon},null)]})]),f("div",{key:"container",ref:h,class:"v-slide-group__container",onScroll:z},[f("div",{ref:d,class:"v-slide-group__content",style:F.value,onTouchstartPassive:B,onTouchmovePassive:R,onTouchendPassive:H,onFocusin:$,onFocusout:C,onKeydown:L},[(n=i.default)==null?void 0:n.call(i,X.value)])]),W.value&&f("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ae.value}],onClick:()=>O("next")},[(_=(m=i.next)==null?void 0:m.call(i,X.value))!=null?_:f(j,null,{default:()=>[f(K,{icon:r.value?e.prevIcon:e.nextIcon},null)]})])]}})}),{selected:a.selected,scrollTo:O,scrollOffset:t,focus:b}}});const te=Symbol.for("vuetify:v-tabs"),Re=Z({name:"VTab",props:{fixed:Boolean,icon:[Boolean,String,Function,Object],prependIcon:G,appendIcon:G,stacked:Boolean,title:String,ripple:{type:Boolean,default:!0},color:String,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Y(),...fe(),...be({selectedClass:"v-tab--selected"}),...ge()},setup(e,u){let{slots:i,attrs:r}=u;const{textColorClasses:g,textColorStyles:a}=me(e,"sliderColor"),o=S(()=>e.direction==="horizontal"),t=k(!1),s=k(),v=k();function c(h){let{value:y}=h;if(t.value=y,y){var d,w;const V=(d=s.value)==null||(w=d.$el.parentElement)==null?void 0:w.querySelector(".v-tab--selected .v-tab__slider"),M=v.value;if(!V||!M)return;const I=getComputedStyle(V).color,x=V.getBoundingClientRect(),p=M.getBoundingClientRect(),B=o.value?"x":"y",R=o.value?"X":"Y",H=o.value?"right":"bottom",z=o.value?"width":"height",P=x[B],$=p[B],C=P>$?x[H]-p[H]:x[B]-p[B],D=Math.sign(C)>0?o.value?"right":"bottom":Math.sign(C)<0?o.value?"left":"top":"center",b=(Math.abs(C)+(Math.sign(C)<0?x[z]:p[z]))/Math.max(x[z],p[z]),O=x[z]/p[z],F=1.5;ye(M,{backgroundColor:[I,""],transform:[`translate${R}(${C}px) scale${R}(${O})`,`translate${R}(${C/F}px) scale${R}(${(b-1)/F+1})`,""],transformOrigin:Array(3).fill(D)},{duration:225,easing:xe})}}return q(()=>{const[h]=he(e,["href","to","replace","icon","stacked","prependIcon","appendIcon","ripple","theme","disabled","selectedClass","value","color"]);return f(Se,ee({_as:"VTab",symbol:te,ref:s,class:["v-tab"],tabindex:t.value?0:-1,role:"tab","aria-selected":String(t.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,variant:"text",rounded:0},h,r,{"onGroup:selected":c}),{default:()=>[i.default?i.default():e.title,!e.hideSlider&&f("div",{ref:v,class:["v-tab__slider",g.value],style:a.value},null)]})}),{}}});function Pe(e){return e?e.map(u=>typeof u=="string"?{title:u,value:u}:u):[]}const Me=Z({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,direction:{type:String,default:"horizontal"},fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,modelValue:null,mandatory:{type:[Boolean,String],default:"force"},...pe(),...Y()},emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:i}=u;const r=ke(e,"modelValue"),g=S(()=>Pe(e.items)),{densityClasses:a}=ze(e),{backgroundColorClasses:o,backgroundColorStyles:t}=Ce(T(e,"bgColor"));return Te({VTab:{color:T(e,"color"),direction:T(e,"direction"),stacked:T(e,"stacked"),fixed:T(e,"fixedTabs"),sliderColor:T(e,"sliderColor"),hideSlider:T(e,"hideSlider")}}),q(()=>f(Be,{modelValue:r.value,"onUpdate:modelValue":s=>r.value=s,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},a.value,o.value],style:[{"--v-tabs-height":we(e.height)},t.value],role:"tablist",symbol:te,mandatory:e.mandatory,direction:e.direction},{default:()=>[i.default?i.default():g.value.map(s=>f(Re,ee(s,{key:s.title}),null))]})),{}}});export{Re as V,Me as a};
