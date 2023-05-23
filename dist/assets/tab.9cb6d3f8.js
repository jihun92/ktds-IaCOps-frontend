import{E as re,G as he,H as we,aa as Ce,O as ue,p as e,a0 as de,a3 as ke,U as q,k as x,aA as Te,D as z,a7 as Pe,aS as $e,S as Z,F as C,Q as ne,$ as Se,aT as Ie,Z as se,aU as Ae,az as Ne,y as ee,o as V,b as G,w as t,A,z as p,m as o,c as k,s as De,a as B,aV as L,aW as ie,q as ce,am as Fe,x as N,aX as Re,aY as ze}from"./index.543004f0.js";import{a as f,V as T}from"./VRow.617d555f.js";import{V as h,c as v,a as Ue,b as Be}from"./VCard.fda5326d.js";import{V as H}from"./VAvatar.1ad0097d.js";import{m as je,a as Oe,u as Me,f as Ee,b as We,V as qe,c as He,d as Ge,e as I}from"./VTextField.816a13ba.js";import{V as g}from"./VBtn.666062ff.js";import{V as j}from"./VForm.33a81c72.js";import{V as Le}from"./VDialog.0d8c7431.js";import{V as fe}from"./VSelect.d40589d8.js";import{I as Ke,V as Ye}from"./VImg.23ca7e25.js";import{V as Qe}from"./VChip.9c52a28c.js";import{f as Xe,n as Ze}from"./router.1d5a8278.js";import{V as J}from"./VCheckbox.449a3e42.js";import{f as Je,V as et}from"./VDivider.e6866a5a.js";import{V as tt,a as U,b as lt,c as at}from"./VTabs.37621a10.js";import"./position.2a174945.js";import"./index.e08ff1f1.js";import"./scopeId.8fffb193.js";import"./lazy.ab86eb70.js";import"./VList.aa7b51df.js";import"./VMenu.a8d7036b.js";import"./VCheckboxBtn.29de3785.js";const ot=re({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...Xe(),...he(),...we()},setup(l,i){let{slots:a}=i;const{themeClasses:r}=Ce(l),{densityClasses:u}=Ze(l);return ue(()=>{var s,n;return e(l.tag,{class:["v-table",{"v-table--fixed-height":!!l.height,"v-table--fixed-header":l.fixedHeader,"v-table--fixed-footer":l.fixedFooter,"v-table--has-top":!!a.top,"v-table--has-bottom":!!a.bottom,"v-table--hover":l.hover},r.value,u.value]},{default:()=>[(s=a.top)==null?void 0:s.call(a),a.default&&e("div",{class:"v-table__wrapper",style:{height:de(l.height)}},[e("table",null,[a.default()])]),(n=a.bottom)==null?void 0:n.call(a)]})}),{}}});const nt=re({name:"VTextarea",directives:{Intersect:Ke},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:l=>!isNaN(parseFloat(l))},maxRows:{type:[Number,String],validator:l=>!isNaN(parseFloat(l))},suffix:String,...je(),...Oe()},emits:{"click:control":l=>!0,"update:focused":l=>!0,"update:modelValue":l=>!0},setup(l,i){let{attrs:a,emit:r,slots:u}=i;const s=ke(l,"modelValue"),{isFocused:n,focus:b,blur:_}=Me(l),w=q(()=>typeof l.counterValue=="function"?l.counterValue(s.value):(s.value||"").toString().length),y=q(()=>{if(a.maxlength)return a.maxlength;if(!(!l.counter||typeof l.counter!="number"&&typeof l.counter!="string"))return l.counter});function d(m,P){var $,S;!l.autofocus||!m||($=P[0].target)==null||(S=$.focus)==null||S.call($)}const O=x(),c=x(),te=x(""),M=x(),le=q(()=>n.value||l.persistentPlaceholder),me=q(()=>l.messages.length?l.messages:le.value||l.persistentHint?l.hint:"");function K(){if(M.value!==document.activeElement){var m;(m=M.value)==null||m.focus()}n.value||b()}function pe(m){K(),r("click:control",m)}function ve(m){m.stopPropagation(),K(),se(()=>{s.value="",Ae(l["onClick:clear"],m)})}function be(m){s.value=m.target.value}const D=x();function F(){!l.autoGrow||se(()=>{if(!D.value||!c.value)return;const m=getComputedStyle(D.value),P=getComputedStyle(c.value.$el),$=parseFloat(m.getPropertyValue("--v-field-padding-top"))+parseFloat(m.getPropertyValue("--v-input-padding-top"))+parseFloat(m.getPropertyValue("--v-field-padding-bottom")),S=D.value.scrollHeight,Y=parseFloat(m.lineHeight),Q=Math.max(parseFloat(l.rows)*Y+$,parseFloat(P.getPropertyValue("--v-input-control-height"))),X=parseFloat(l.maxRows)*Y+$||1/0;te.value=de(Ne(S!=null?S:0,Q,X))})}Te(F),z(s,F),z(()=>l.rows,F),z(()=>l.maxRows,F),z(()=>l.density,F);let E;return z(D,m=>{if(m)E=new ResizeObserver(F),E.observe(D.value);else{var P;(P=E)==null||P.disconnect()}}),Pe(()=>{var m;(m=E)==null||m.disconnect()}),ue(()=>{const m=!!(u.counter||l.counter||l.counterValue),P=!!(m||u.details),[$,S]=$e(a),[{modelValue:Y,...Q}]=Ee(l),[X]=We(l);return e(Ge,Z({ref:O,modelValue:s.value,"onUpdate:modelValue":R=>s.value=R,class:["v-textarea v-text-field",{"v-textarea--prefixed":l.prefix,"v-textarea--suffixed":l.suffix,"v-text-field--prefixed":l.prefix,"v-text-field--suffixed":l.suffix,"v-textarea--auto-grow":l.autoGrow,"v-textarea--no-resize":l.noResize||l.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(l.variant)}],"onClick:prepend":l["onClick:prepend"],"onClick:append":l["onClick:append"]},$,Q,{focused:n.value,messages:me.value}),{...u,default:R=>{let{isDisabled:W,isDirty:ae,isReadonly:_e,isValid:xe}=R;return e(qe,Z({ref:c,style:{"--v-textarea-control-height":te.value},"onClick:control":pe,"onClick:clear":ve,"onClick:prependInner":l["onClick:prependInner"],"onClick:appendInner":l["onClick:appendInner"],role:"textbox"},X,{active:le.value||ae.value,dirty:ae.value||l.dirty,focused:n.value,error:xe.value===!1}),{...u,default:ye=>{let{props:{class:oe,...Ve}}=ye;return e(C,null,[l.prefix&&e("span",{class:"v-text-field__prefix"},[l.prefix]),ne(e("textarea",Z({ref:M,class:oe,value:s.value,onInput:be,autofocus:l.autofocus,readonly:_e.value,disabled:W.value,placeholder:l.placeholder,rows:l.rows,name:l.name,onFocus:K,onBlur:_},Ve,S),null),[[Se("intersect"),{handler:d},null,{once:!0}]]),l.autoGrow&&ne(e("textarea",{class:[oe,"v-textarea__sizer"],"onUpdate:modelValue":ge=>s.value=ge,ref:D,readonly:!0,"aria-hidden":"true"},null),[[Ie,s.value]]),l.suffix&&e("span",{class:"v-text-field__suffix"},[l.suffix])])}})},details:P?R=>{var W;return e(C,null,[(W=u.details)==null?void 0:W.call(u,R),m&&e(C,null,[e("span",null,null),e(He,{active:l.persistentCounter||n.value,value:w.value,max:y.value},u.counter)])])}:void 0})}),Je({},O,c,M)}}),st={methods:{nextTab(){this.$emit("clickNextTab")}}},it=o("h6",{class:"text-h6"},"\uC778\uD504\uB77C\uBD07 \uD504\uB85C\uC81D\uD2B8",-1),rt=o("h6",{class:"text-h6"},"\uC804\uC0AC \uBCF4\uC548\uD615\uC0C1\uC218\uC9D1 \uD504\uB85C\uC81D\uD2B8",-1);function ut(l,i,a,r,u,s){return V(),G(T,null,{default:t(()=>[e(f,{md:"6",lg:"4"},{default:t(()=>[e(h,{class:"text-center",onClick:s.nextTab},{default:t(()=>[e(v,{class:"d-flex flex-column justify-center align-center"},{default:t(()=>[e(H,{color:"primary",variant:"tonal",size:"56",class:"mb-4"},{default:t(()=>[e(A,{size:"2rem",icon:"mdi-cloud-check-outline"})]),_:1}),p(" Demo Group ")]),_:1}),e(v,null,{default:t(()=>[it]),_:1})]),_:1},8,["onClick"])]),_:1}),e(f,{md:"6",lg:"4"},{default:t(()=>[e(h,{class:"text-center",onClick:s.nextTab},{default:t(()=>[e(v,{class:"d-flex flex-column justify-center align-center"},{default:t(()=>[e(H,{color:"primary",variant:"tonal",size:"56",class:"mb-4"},{default:t(()=>[e(A,{size:"2rem",icon:"mdi-cloud-check-outline"})]),_:1}),p(" Demo Group ")]),_:1}),e(v,null,{default:t(()=>[rt]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1})}const dt=ee(st,[["render",ut]]),ct={methods:{nextTab(){this.$emit("clickNextTab")}}},ft=o("h6",{class:"text-h6"},"3-Tier Monolithic Architecture ",-1),mt=o("h6",{class:"text-h6"},"3-Tier Monolithic Architecture",-1);function pt(l,i,a,r,u,s){return V(),k(C,null,[e(f,{cols:"6",md:"6",lg:"4"},{default:t(()=>[e(h,{class:"text-center",onClick:s.nextTab},{default:t(()=>[e(v,{class:"d-flex flex-column justify-center align-center"},{default:t(()=>[e(H,{color:"primary",variant:"tonal",size:"56",class:"mb-4"},{default:t(()=>[e(A,{size:"2rem",icon:"mdi-account-box-outline"})]),_:1}),p(" Web Service ")]),_:1}),e(v,null,{default:t(()=>[ft]),_:1})]),_:1},8,["onClick"])]),_:1}),e(f,{cols:"6",md:"6",lg:"4"},{default:t(()=>[e(h,{class:"text-center",onClick:s.nextTab},{default:t(()=>[e(v,{class:"d-flex flex-column justify-center align-center"},{default:t(()=>[e(H,{color:"primary",variant:"tonal",size:"56",class:"mb-4"},{default:t(()=>[e(A,{size:"2rem",icon:"mdi-account-box-outline"})]),_:1}),p(" Web Service ")]),_:1}),e(v,null,{default:t(()=>[mt]),_:1})]),_:1},8,["onClick"])]),_:1})],64)}const vt=ee(ct,[["render",pt]]),bt={class:"add-products-header mb-2 d-none d-md-flex"},_t=o("h6",{class:"text-sm font-weight-medium"}," Item ",-1),xt={class:"pa-5 flex-grow-1"},yt={__name:"ParameterWebEdit",props:{id:{type:Number,required:!0},data:{type:Object,required:!0}},emits:["removeProduct"],setup(l,{emit:i}){const a=l,r=()=>{i("removeProduct",a.id)};return(u,s)=>(V(),k(C,null,[o("div",bt,[e(T,{class:"font-weight-medium px-5"},{default:t(()=>[e(f,{cols:"12",md:"6"},{default:t(()=>[_t]),_:1})]),_:1})]),e(h,{flat:"",border:"",class:"d-flex flex-sm-row flex-column-reverse"},{default:t(()=>[o("div",xt,[e(T,null,{default:t(()=>[e(f,{cols:"12",md:"6",sm:"4"},{default:t(()=>[e(I,{modelValue:a.data.name,"onUpdate:modelValue":s[0]||(s[0]=n=>a.data.name=n),type:"text",label:"Name"},null,8,["modelValue"])]),_:1}),e(f,null,{default:t(()=>[e(I,{modelValue:a.data.image,"onUpdate:modelValue":s[1]||(s[1]=n=>a.data.image=n),type:"text",label:"Image"},null,8,["modelValue"])]),_:1}),e(f,null,{default:t(()=>[e(I,{modelValue:a.data.type,"onUpdate:modelValue":s[2]||(s[2]=n=>a.data.type=n),type:"text",label:"Type"},null,8,["modelValue"])]),_:1})]),_:1})]),o("div",{class:De(["d-flex flex-column item-actions pa-1",u.$vuetify.display.smAndUp?"border-s":"border-b"])},[e(g,{icon:"",size:"x-small",color:"default",variant:"text",onClick:r},{default:t(()=>[e(A,{size:20,icon:"mdi-close"})]),_:1})],2)]),_:1})],64))}},Vt={class:"mb-4"},gt={methods:{nextTab(){this.$emit("clickNextTab")}}},ht=Object.assign(gt,{__name:"TerraformSettingsParameter",props:{data:{type:null,required:!0}},setup(l){const i=l,a=()=>{i.data.settingConfig.push({name:"Web Server -1",image:"Webserver-centos7-230518",type:"T2.micro"})},r=u=>{i.data.settingConfig.splice(u,1)};return(u,s)=>(V(),G(j,{onSubmit:s[0]||(s[0]=L(()=>{},["prevent"]))},{default:t(()=>[e(f,{cols:"12"},{default:t(()=>[e(h,{title:"WEB \uC11C\uBC84"},{default:t(()=>[e(v,{class:"add-products-form"},{default:t(()=>[(V(!0),k(C,null,B(i.data.settingConfig,(n,b)=>(V(),k("div",Vt,[e(yt,{id:b,data:n,onRemoveProduct:r},null,8,["id","data"])]))),256)),e(g,{size:"small","prepend-icon":"mdi-plus",onClick:a},{default:t(()=>[p(" Add ")]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{cols:"12"},{default:t(()=>[e(h,{title:"WAS \uC11C\uBC84"},{default:t(()=>[e(v,{class:"add-products-form"},{default:t(()=>[e(g,{size:"small","prepend-icon":"mdi-plus",onClick:a},{default:t(()=>[p(" Add ")]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{cols:"12"},{default:t(()=>[e(h,{title:"DB \uC11C\uBC84"},{default:t(()=>[e(v,{class:"add-products-form"},{default:t(()=>[e(g,{size:"small","prepend-icon":"mdi-plus",onClick:a},{default:t(()=>[p(" Add ")]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:t(()=>[e(g,{onClick:u.nextTab,type:"submit"},{default:t(()=>[p(" Plan ")]),_:1},8,["onClick"]),e(g,{type:"reset",color:"secondary",variant:"tonal"},{default:t(()=>[p(" Reset ")]),_:1})]),_:1})]),_:1}))}}),wt=o("h6",{class:"text-disabled text-base font-weight-medium mb-3"}," Verify Your Mobile Number for SMS ",-1),Ct=o("p",{class:"mb-6"}," Enter your mobile phone number with country code and we will send you a verification code. ",-1),kt={class:"d-flex flex-wrap justify-center gap-4"},Tt={__name:"EnableOneTimePasswordDialog",props:{mobileNumber:{type:String,required:!1},isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible","submit"],setup(l,{emit:i}){const a=l,r=x(structuredClone(ie(a.mobileNumber))),u=()=>{r.value&&(i("submit",r.value),i("update:isDialogVisible",!1))},s=()=>{r.value=structuredClone(ie(a.mobileNumber)),i("update:isDialogVisible",!1)};return(n,b)=>(V(),G(Le,{"max-width":"650","model-value":a.isDialogVisible,"onUpdate:modelValue":b[2]||(b[2]=_=>n.$emit("update:isDialogVisible",_))},{default:t(()=>[e(h,{class:"pa-5 pa-sm-15"},{default:t(()=>[e(Ue,null,{default:t(()=>[e(Be,{class:"text-h5 text-center"},{default:t(()=>[p(" Enable One Time Password ")]),_:1})]),_:1}),e(v,{class:"pt-6"},{default:t(()=>[wt,Ct,e(j,{onSubmit:b[1]||(b[1]=L(()=>{},["prevent"]))},{default:t(()=>[e(I,{modelValue:ce(r),"onUpdate:modelValue":b[0]||(b[0]=_=>Fe(r)?r.value=_:null),dirty:"",name:"mobile",type:"number",prefix:"+1",label:"Phone Number",placeholder:"202 555 0111",class:"mb-4"},null,8,["modelValue"]),o("div",kt,[e(g,{type:"submit",onClick:u},{default:t(()=>[p(" Submit ")]),_:1}),e(g,{color:"secondary",variant:"tonal",onClick:s},{default:t(()=>[p(" Cancel ")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"]))}},Pt="/assets/pose-fs-9.c6abbba4.png",$t=o("p",{class:"text-base mt-2"}," Password Requirements: ",-1),St={class:"d-flex flex-column gap-y-3"},It={class:"text-base"},At=o("p",null," Two factor authentication is not enabled yet. ",-1),Nt=o("p",null,[p(" Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. "),o("a",{href:"javascript:void(0)",class:"text-decoration-none"},"Learn more.")],-1),Dt={class:"d-flex align-center flex-wrap mb-3"},Ft={class:"text-h6 mb-0 me-3"},Rt={class:"text-base font-weight-medium"},zt={class:"me-3"},Ut={class:"text-disabled"},Bt={__name:"TerraformSettingsPlan",setup(l){const i=x(!1),a=x(!1),r=x(!1),u=x(""),s=x(""),n=x(""),b=["Minimum 8 characters long - the more, the better","At least one lowercase character","At least one number, symbol, or whitespace character"],_=[{name:"Server Key 1",key:"23eaf7f0-f4f7-495e-8b86-fad3261282ac",createdOn:"28 Apr 2021, 18:20 GTM+4:10",permission:"Full Access"},{name:"Server Key 2",key:"bb98e571-a2e2-4de8-90a9-2e231b5e99",createdOn:"12 Feb 2021, 10:30 GTM+2:30",permission:"Read Only"},{name:"Server Key 3",key:"2e915e59-3105-47f2-8838-6e46bf83b711",createdOn:"28 Dec 2020, 12:21 GTM+4:10",permission:"Full Access"}],w=x(!1);return(y,d)=>{const O=Tt;return V(),k(C,null,[e(T,null,{default:t(()=>[e(f,{cols:"12"},{default:t(()=>[e(h,{title:"Change Password"},{default:t(()=>[e(j,null,{default:t(()=>[e(v,{class:"pt-0"},{default:t(()=>[e(T,{class:"mb-3"},{default:t(()=>[e(f,{cols:"12",md:"6"},{default:t(()=>[e(I,{modelValue:u.value,"onUpdate:modelValue":d[0]||(d[0]=c=>u.value=c),type:i.value?"text":"password","append-inner-icon":i.value?"mdi-eye-off-outline":"mdi-eye-outline",label:"Current Password","onClick:appendInner":d[1]||(d[1]=c=>i.value=!i.value)},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1}),e(T,null,{default:t(()=>[e(f,{cols:"12",md:"6"},{default:t(()=>[e(I,{modelValue:s.value,"onUpdate:modelValue":d[2]||(d[2]=c=>s.value=c),type:a.value?"text":"password","append-inner-icon":a.value?"mdi-eye-off-outline":"mdi-eye-outline",label:"New Password","onClick:appendInner":d[3]||(d[3]=c=>a.value=!a.value)},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(I,{modelValue:n.value,"onUpdate:modelValue":d[4]||(d[4]=c=>n.value=c),type:r.value?"text":"password","append-inner-icon":r.value?"mdi-eye-off-outline":"mdi-eye-outline",label:"Confirm New Password","onClick:appendInner":d[5]||(d[5]=c=>r.value=!r.value)},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1}),e(v,null,{default:t(()=>[$t,o("ul",St,[(V(),k(C,null,B(b,c=>o("li",{key:c,class:"d-flex"},[o("div",null,[e(A,{size:"7",icon:"mdi-circle",class:"me-3"})]),o("span",It,N(c),1)])),64))])]),_:1}),e(v,{class:"d-flex flex-wrap gap-4"},{default:t(()=>[e(g,null,{default:t(()=>[p("Save changes")]),_:1}),e(g,{type:"reset",color:"secondary",variant:"tonal"},{default:t(()=>[p(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{cols:"12"},{default:t(()=>[e(h,{title:"Two-steps verification"},{default:t(()=>[e(v,{class:"text-base"},{default:t(()=>[At,Nt,e(g,{onClick:d[6]||(d[6]=c=>w.value=!0)},{default:t(()=>[p(" Enable two-FA ")]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{cols:"12"},{default:t(()=>[e(h,{title:"Create an API key"},{default:t(()=>[e(T,null,{default:t(()=>[e(f,{cols:"12",md:"5","order-md":"0",order:"1"},{default:t(()=>[e(v,null,{default:t(()=>[e(j,{onSubmit:d[7]||(d[7]=L(()=>{},["prevent"]))},{default:t(()=>[e(T,null,{default:t(()=>[e(f,{cols:"12"},{default:t(()=>[e(fe,{label:"Choose the API key type you want to create",items:["Full Control","Modify","Read & Execute","List Folder Contents","Read Only","Read & Write"]})]),_:1}),e(f,{cols:"12"},{default:t(()=>[e(I,{label:"Name the API key"})]),_:1}),e(f,{cols:"12"},{default:t(()=>[e(g,{type:"submit",block:""},{default:t(()=>[p(" Create Key ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{cols:"12",md:"7",order:"0","order-md":"1",class:"d-flex flex-column justify-center align-center"},{default:t(()=>[e(Ye,{src:ce(Pt),width:180,style:Re(y.$vuetify.display.smAndDown?"":"position: absolute; bottom: 0;")},null,8,["src","style"])]),_:1})]),_:1})]),_:1})]),_:1}),e(f,{cols:"12"},{default:t(()=>[e(h,{title:"API Key List & Access"},{default:t(()=>[e(v,null,{default:t(()=>[p(" An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing. ")]),_:1}),e(v,{class:"d-flex flex-column gap-y-4"},{default:t(()=>[(V(),k(C,null,B(_,c=>o("div",{key:c.key,class:"bg-var-theme-background pa-4"},[o("div",Dt,[o("h6",Ft,N(c.name),1),e(Qe,{color:"primary",size:"small"},{default:t(()=>[p(N(c.permission),1)]),_:2},1024)]),o("p",Rt,[o("span",zt,N(c.key),1),e(A,{size:18,icon:"mdi-content-copy",class:"cursor-pointer"})]),o("span",Ut,"Created on "+N(c.createdOn),1)])),64))]),_:1})]),_:1})]),_:1})]),_:1}),e(O,{isDialogVisible:w.value,"onUpdate:isDialogVisible":d[8]||(d[8]=c=>w.value=c)},null,8,["isDialogVisible"])],64)}}},jt=x([{type:"New for you",email:!0,browser:!0,app:!0},{type:"Account activity",email:!0,browser:!0,app:!0},{type:"A new browser used to sign in",email:!0,browser:!0,app:!1},{type:"A new device is linked",email:!0,browser:!1,app:!1}]),Ot=x("Only when I'm online"),Mt=x("test\uACB0\uACFC \uCD9C\uB825~~"),Et={setup(){return{recentDevices:jt,selectedNotification:Ot,selectedNote:Mt,TerraformSettingsApply}}},Wt=o("a",{href:"javascript:void(0)"},"Request Permission",-1),qt=o("thead",null,[o("tr",null,[o("th",{scope:"col"}," Type "),o("th",{scope:"col"}," EMAIL "),o("th",{scope:"col"}," BROWSER "),o("th",{scope:"col"}," App ")])],-1),Ht=o("p",{class:"text-base font-weight-medium"}," When should we send you notifications? ",-1),Gt={class:"d-flex flex-wrap gap-4 mt-4"},Lt=o("p",{class:"font-weight-medium mb-2"}," Note: ",-1);function Kt(l,i,a,r,u,s){return V(),G(h,{title:"Recent Devices"},{default:t(()=>[e(v,null,{default:t(()=>[p(" We need permission from your browser to show notifications. "),Wt]),_:1}),e(ot,{class:"text-no-wrap"},{default:t(()=>[qt,o("tbody",null,[(V(!0),k(C,null,B(r.recentDevices,n=>(V(),k("tr",{key:n.type},[o("td",null,N(n.type),1),o("td",null,[e(J,{modelValue:n.email,"onUpdate:modelValue":b=>n.email=b},null,8,["modelValue","onUpdate:modelValue"])]),o("td",null,[e(J,{modelValue:n.browser,"onUpdate:modelValue":b=>n.browser=b},null,8,["modelValue","onUpdate:modelValue"])]),o("td",null,[e(J,{modelValue:n.app,"onUpdate:modelValue":b=>n.app=b},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1}),e(et),e(v,null,{default:t(()=>[e(j,{onSubmit:i[1]||(i[1]=L(()=>{},["prevent"]))},{default:t(()=>[Ht,e(T,null,{default:t(()=>[e(f,{cols:"12",sm:"6"},{default:t(()=>[e(fe,{modelValue:r.selectedNotification,"onUpdate:modelValue":i[0]||(i[0]=n=>r.selectedNotification=n),mandatory:"",items:["Only when I'm online","Anytime"]},null,8,["modelValue"])]),_:1})]),_:1}),o("div",Gt,[e(g,{type:"submit"},{default:t(()=>[p(" Save Changes ")]),_:1}),e(g,{color:"secondary",variant:"tonal",type:"reset"},{default:t(()=>[p(" Reset ")]),_:1})])]),_:1})]),_:1}),e(v,null,{default:t(()=>[Lt,e(nt,{modelValue:r.selectedNote,"onUpdate:modelValue":i[2]||(i[2]=n=>r.selectedNote=n),rows:10},null,8,["modelValue"])]),_:1})]),_:1})}const Yt=ee(Et,[["render",Kt]]),xl={__name:"tab",setup(l){const i=ze(),a=x(i.params.tab);function r(_){(_==="portfolio"&&a.value==="project"||_==="parameter"&&a.value==="portfolio"||_==="plan"&&a.value==="parameter"||_==="apply"&&a.value==="plan")&&(a.value=_)}function u(){a.value==="project"?a.value="portfolio":a.value==="portfolio"?a.value="parameter":a.value==="parameter"?a.value="plan":a.value==="plan"&&(a.value="apply")}function s(_){const w=n.findIndex(d=>d.tab===a.value);return n.findIndex(d=>d.tab===_)>w}const n=[{id:1,title:"1. Project Select",icon:"mdi-account-outline",tab:"project"},{id:2,title:"2. Portfolio Select",icon:"mdi-account-outline",tab:"portfolio"},{id:3,title:"3. Parameter Configuration",icon:"mdi-account-outline",tab:"parameter"},{id:4,title:"4. Plan ",icon:"mdi-lock-open-outline",tab:"plan"},{id:5,title:"5. Apply",icon:"mdi-bell-outline",tab:"apply"}],b=x({settingConfig:[{name:"sample",image:"sample",type:"sample"}]});return(_,w)=>(V(),k(C,null,[o("div",null,[e(tt,{modelValue:a.value,"onUpdate:modelValue":w[0]||(w[0]=y=>a.value=y),class:"v-tabs-pill"},{default:t(()=>[(V(),k(C,null,B(n,y=>e(at,{key:y.id,value:y.tab,to:{name:"terraform-tab",params:{tab:y.tab}},onClick:d=>r(y.tab),disabled:s(y.tab)},{default:t(()=>[e(A,{size:"20",start:"",icon:y.icon},null,8,["icon"]),p(" "+N(y.title),1)]),_:2},1032,["value","to","onClick","disabled"])),64))]),_:1},8,["modelValue"])]),e(lt,{modelValue:a.value,"onUpdate:modelValue":w[1]||(w[1]=y=>a.value=y),class:"mt-4 disable-tab-transition",touch:!1},{default:t(()=>[e(U,{value:"project"},{default:t(()=>[e(dt,{onClickNextTab:u})]),_:1}),e(U,{value:"portfolio"},{default:t(()=>[e(vt,{onClickNextTab:u})]),_:1}),e(U,{value:"parameter"},{default:t(()=>[e(ht,{onClickNextTab:u,data:b.value},null,8,["data"])]),_:1}),e(U,{value:"plan"},{default:t(()=>[e(Bt)]),_:1}),e(U,{value:"apply"},{default:t(()=>[e(Yt)]),_:1})]),_:1},8,["modelValue"])],64))}};export{xl as default};