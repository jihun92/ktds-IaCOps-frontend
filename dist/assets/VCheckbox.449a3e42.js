import{m as V,u as C,f as P,d as v}from"./VTextField.816a13ba.js";import{m as A,f as B,V as I}from"./VCheckboxBtn.29de3785.js";import{E as F,a4 as g,U as y,O as R,aS as S,p as t,S as o}from"./index.543004f0.js";const N=F({name:"VCheckbox",inheritAttrs:!1,props:{...V(),...A()},emits:{"update:focused":e=>!0},setup(e,a){let{attrs:r,slots:s}=a;const{isFocused:u,focus:c,blur:n}=C(e),i=g(),d=y(()=>e.id||`checkbox-${i}`);return R(()=>{const[l,p]=S(r),[f,U]=P(e),[m,_]=B(e);return t(v,o({class:"v-checkbox"},l,f,{id:d.value,focused:u.value}),{...s,default:b=>{let{id:k,isDisabled:h,isReadonly:x}=b;return t(I,o(m,{id:k.value,disabled:h.value,readonly:x.value},p,{onFocus:c,onBlur:n}),s)}})}),{}}});export{N as V};
