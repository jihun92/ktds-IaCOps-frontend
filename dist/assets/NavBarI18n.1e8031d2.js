import{k as p,o as r,b as i,w as t,p as o,A as f,q as g,am as d,c as _,F as L,a as V,z as h,x as v,t as b}from"./index.543004f0.js";import{V as x}from"./VMenu.a8d7036b.js";import{V as k,a as C,b as y}from"./VList.aa7b51df.js";import{V as I}from"./VBtn.666062ff.js";import"./VDivider.e6866a5a.js";import"./scopeId.8fffb193.js";import"./VAvatar.1ad0097d.js";import"./router.1d5a8278.js";import"./VImg.23ca7e25.js";import"./lazy.ab86eb70.js";import"./index.e08ff1f1.js";import"./position.2a174945.js";const B={__name:"I18n",props:{languages:{type:Array,required:!0},location:{type:null,required:!1,default:"bottom end"}},emits:["change"],setup(l,{emit:c}){const n=l,{locale:s}=useI18n({useScope:"global"}),a=p(["en"]);return(u,m)=>(r(),i(I,{icon:"",variant:"text",color:"default",size:"small"},{default:t(()=>[o(f,{icon:"mdi-translate",size:"24"}),o(x,{activator:"parent",location:n.location,offset:"14px"},{default:t(()=>[o(k,{selected:g(a),"onUpdate:selected":m[0]||(m[0]=e=>d(a)?a.value=e:null),"active-color":"primary","min-width":"175px"},{default:t(()=>[(r(!0),_(L,null,V(n.languages,e=>(r(),i(C,{key:e.i18nLang,value:e.i18nLang,onClick:A=>{s.value=e.i18nLang,u.$emit("change",e.i18nLang)}},{default:t(()=>[o(y,null,{default:t(()=>[h(v(e.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["selected"])]),_:1},8,["location"])]),_:1}))}},U={__name:"NavBarI18n",setup(l){const{isAppRtl:c}=b(),n=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],s=a=>{c.value=a==="ar"};return(a,u)=>(r(),i(B,{languages:n,onChange:s}))}};export{U as default};