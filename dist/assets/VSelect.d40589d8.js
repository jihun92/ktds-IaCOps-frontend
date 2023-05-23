import{i as A,j as L,e as j}from"./VTextField.816a13ba.js";import{m as E,u as M,V as z,a as D}from"./VList.aa7b51df.js";import{m as H}from"./VImg.23ca7e25.js";import{f as K}from"./VDivider.e6866a5a.js";import{X,I as q,a1 as G,a2 as J,L as Q,k as I,a3 as x,U as P,O as R,p as s,F as W,S as C,z as Y,aH as Z}from"./index.543004f0.js";import{V as ee}from"./scopeId.8fffb193.js";import{V as le}from"./VMenu.a8d7036b.js";import{V as ae}from"./VCheckboxBtn.29de3785.js";import{V as te}from"./router.1d5a8278.js";import{V as ne}from"./VChip.9c52a28c.js";const oe=X({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:q,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,...E({itemChildren:!1})},"v-select"),Ve=G()({name:"VSelect",props:{...oe(),...J(A({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...H({transition:{component:ee}})},emits:{"update:modelValue":l=>!0,"update:menu":l=>!0},setup(l,T){let{slots:n}=T;const{t:w}=Q(),k=I(),r=x(l,"menu"),{items:p,transformIn:B,transformOut:S}=M(l),u=x(l,"modelValue",[],e=>B(Z(e)),e=>{var t;const a=S(e);return l.multiple?a:(t=a[0])!=null?t:null}),y=P(()=>u.value.map(e=>p.value.find(a=>a.value===e.value)||e)),g=P(()=>y.value.map(e=>e.props.value)),c=I();function F(e){u.value=[],l.openOnClear&&(r.value=!0)}function _(){l.hideNoData&&!p.value.length||l.readonly||(r.value=!r.value)}function O(e){if(!l.readonly){if(["Enter","ArrowDown"," "].includes(e.key)&&(e.preventDefault(),r.value=!0),["Escape","Tab"].includes(e.key)&&(r.value=!1),e.key==="ArrowDown"){var a;(a=c.value)==null||a.focus("next")}else if(e.key==="ArrowUp"){var t;e.preventDefault(),(t=c.value)==null||t.focus("prev")}else if(e.key==="Home"){var d;e.preventDefault(),(d=c.value)==null||d.focus("first")}else if(e.key==="End"){var v;e.preventDefault(),(v=c.value)==null||v.focus("last")}}}function V(e){if(l.multiple){const a=g.value.findIndex(t=>t===e.value);if(a===-1)u.value=[...u.value,e];else{const t=[...u.value];t.splice(a,1),u.value=t}}else u.value=[e],r.value=!1}function b(e){var a;(a=c.value)!=null&&a.$el.contains(e.relatedTarget)||(r.value=!1)}function N(e){if(e.relatedTarget==null){var a;(a=k.value)==null||a.focus()}}return R(()=>{const e=!!(l.chips||n.chip),[a]=L(l);return s(j,C({ref:k},a,{modelValue:u.value.map(t=>t.props.value).join(", "),"onUpdate:modelValue":t=>{t==null&&(u.value=[])},validationValue:u.externalValue,dirty:u.value.length>0,class:["v-select",{"v-select--active-menu":r.value,"v-select--chips":!!l.chips,[`v-select--${l.multiple?"multiple":"single"}`]:!0,"v-select--selected":u.value.length}],appendInnerIcon:l.menuIcon,readonly:!0,"onClick:clear":F,"onClick:control":_,onBlur:b,onKeydown:O}),{...n,default:()=>{var t,d,v;return s(W,null,[s(le,C({modelValue:r.value,"onUpdate:modelValue":o=>r.value=o,activator:"parent",contentClass:"v-select__content",eager:l.eager,openOnClick:!1,closeOnContentClick:!1,transition:l.transition},l.menuProps),{default:()=>[s(z,{ref:c,selected:g.value,selectStrategy:l.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onFocusout:N},{default:()=>{var o;return[!p.value.length&&!l.hideNoData&&((o=(t=n["no-data"])==null?void 0:t.call(n))!=null?o:s(D,{title:w(l.noDataText)},null)),(d=n["prepend-item"])==null?void 0:d.call(n),p.value.map((i,h)=>{var f;var m;return(f=(m=n.item)==null?void 0:m.call(n,{item:i,index:h,props:C(i.props,{onClick:()=>V(i)})}))!=null?f:s(D,C({key:h},i.props,{onClick:()=>V(i)}),{prepend:U=>{let{isSelected:$}=U;return l.multiple&&!l.hideSelected?s(ae,{modelValue:$,ripple:!1},null):void 0}})}),(v=n["append-item"])==null?void 0:v.call(n)]}})]}),y.value.map((o,i)=>{function h(f){f.stopPropagation(),f.preventDefault(),V(o)}const m={"onClick:close":h,modelValue:!0,"onUpdate:modelValue":void 0};return s("div",{key:o.value,class:"v-select__selection"},[e?s(te,{defaults:{VChip:{closable:l.closableChips,size:"small",text:o.title}}},{default:()=>[n.chip?n.chip({item:o,index:i,props:m}):s(ne,m,null)]}):n.selection?n.selection({item:o,index:i}):s("span",{class:"v-select__selection-text"},[o.title,l.multiple&&i<y.value.length-1&&s("span",{class:"v-select__selection-comma"},[Y(",")])])])})])}})}),K({menu:r,select:V},k)}});export{Ve as V};
