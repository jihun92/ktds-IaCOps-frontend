import{ad as i,E as S,G as b,U as C,h as v}from"./index.fee045eb.js";const c=["sm","md","lg","xl","xxl"],N=(()=>c.reduce((t,n)=>(t[n]={type:[Boolean,String,Number],default:!1},t),{}))(),j=(()=>c.reduce((t,n)=>(t["offset"+i(n)]={type:[String,Number],default:null},t),{}))(),$=(()=>c.reduce((t,n)=>(t["order"+i(n)]={type:[String,Number],default:null},t),{}))(),y={col:Object.keys(N),offset:Object.keys(j),order:Object.keys($)};function P(t,n,l){let s=t;if(!(l==null||l===!1)){if(n){const e=n.replace(t,"");s+=`-${e}`}return t==="col"&&(s="v-"+s),t==="col"&&(l===""||l===!0)||(s+=`-${l}`),s.toLowerCase()}}const G=["auto","start","end","center","baseline","stretch"],M=S({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...N,offset:{type:[String,Number],default:null},...j,order:{type:[String,Number],default:null},...$,alignSelf:{type:String,default:null,validator:t=>G.includes(t)},...b()},setup(t,n){let{slots:l}=n;const s=C(()=>{const e=[];let a;for(a in y)y[a].forEach(o=>{const u=t[o],g=P(a,o,u);g&&e.push(g)});const r=e.some(o=>o.startsWith("v-col-"));return e.push({"v-col":!r||!t.cols,[`v-col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),e});return()=>{var e;return v(t.tag,{class:s.value},(e=l.default)==null?void 0:e.call(l))}}}),_=["sm","md","lg","xl","xxl"],f=["start","end","center"],k=["space-between","space-around","space-evenly"];function d(t,n){return _.reduce((l,s)=>(l[t+i(s)]=n(),l),{})}const x=[...f,"baseline","stretch"],L=t=>x.includes(t),V=d("align",()=>({type:String,default:null,validator:L})),O=[...f,...k],h=t=>O.includes(t),E=d("justify",()=>({type:String,default:null,validator:h})),U=[...f,...k,"stretch"],w=t=>U.includes(t),A=d("alignContent",()=>({type:String,default:null,validator:w})),m={align:Object.keys(V),justify:Object.keys(E),alignContent:Object.keys(A)},I={align:"align",justify:"justify",alignContent:"align-content"};function T(t,n,l){let s=I[t];if(l!=null){if(n){const e=n.replace(t,"");s+=`-${e}`}return s+=`-${l}`,s.toLowerCase()}}const R=S({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:L},...V,justify:{type:String,default:null,validator:h},...E,alignContent:{type:String,default:null,validator:w},...A,...b()},setup(t,n){let{slots:l}=n;const s=C(()=>{const e=[];let a;for(a in m)m[a].forEach(r=>{const o=t[r],u=T(a,r,o);u&&e.push(u)});return e.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),e});return()=>{var e;return v(t.tag,{class:["v-row",s.value]},(e=l.default)==null?void 0:e.call(l))}}});export{R as V,M as a};
