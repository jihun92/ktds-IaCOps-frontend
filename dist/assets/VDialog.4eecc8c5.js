import{ab as y,ad as E,k as h,aq as x,E as f,as as P,a5 as S,p as m,ai as D,aa as g,aj as w}from"./index.ee0bb086.js";import{m as A,V as B,u as I,f as O,b as R}from"./scopeId.4ce01635.js";const F=y()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...A({origin:"center center",scrollStrategy:"block",transition:{component:B},zIndex:2400})},emits:{"update:modelValue":r=>!0},setup(r,p){let{slots:i}=p;const n=E(r,"modelValue"),{scopeId:b}=I(),a=h();function c(t){var e,l;const s=t.relatedTarget,o=t.target;if(s!==o&&(e=a.value)!=null&&e.contentEl&&(l=a.value)!=null&&l.globalTop&&![document,a.value.contentEl].includes(o)&&!a.value.contentEl.contains(o)){const u=[...a.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(v=>!v.hasAttribute("disabled")&&!v.matches('[tabindex="-1"]'));if(!u.length)return;const d=u[0],V=u[u.length-1];s===d?V.focus():d.focus()}}return x&&f(()=>n.value&&r.retainFocus,t=>{t?document.addEventListener("focusin",c):document.removeEventListener("focusin",c)},{immediate:!0}),f(n,async t=>{if(await P(),t){var e;(e=a.value.contentEl)==null||e.focus({preventScroll:!0})}else{var l;(l=a.value.activatorEl)==null||l.focus({preventScroll:!0})}}),S(()=>{const[t]=O(r);return m(R,g({ref:a,class:["v-dialog",{"v-dialog--fullscreen":r.fullscreen,"v-dialog--scrollable":r.scrollable}]},t,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-role":"dialog","aria-modal":"true",activatorProps:g({"aria-haspopup":"dialog","aria-expanded":String(n.value)},r.activatorProps)},b),{activator:i.activator,default:function(){for(var e,l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return m(D,{root:!0},{default:()=>[(e=i.default)==null?void 0:e.call(i,...s)]})}})}),w({},a)}});export{F as V};
