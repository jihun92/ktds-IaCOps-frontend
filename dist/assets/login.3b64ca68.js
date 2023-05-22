import{E as K,I as q,G as $,H as ee,a3 as te,U as O,aa as se,M as ae,K as oe,L as le,p as t,A as ne,d as ie,a5 as re,t as de,o as V,c as L,a as ue,q as a,F as ce,k as D,m as r,v,V as Me,x as Z,w as o,aS as Ge,as as k,z as A,aT as Ie,j as ye,r as xe}from"./index.fee045eb.js";import{V as w}from"./VBtn.2c0afab5.js";import{a as me}from"./axios.eeb27ab9.js";import{u as p,t as Ae}from"./tree.67e5e778.js";import{b as N}from"./route-block.023af118.js";import{a as m,V as z}from"./VRow.99187062.js";import{V as B}from"./VImg.6e3714cb.js";import{V as ge,c as b}from"./VCard.35ed4262.js";import{c as Ye}from"./VAvatar.b6ab83c2.js";import{f as je,c as De,g as he,m as fe,a as Re,i as Oe,l as ve,n as ke,d as Be,o as be,b as we,u as He,p as Ee,V as T}from"./router.95681313.js";import{a as Qe,c as Ze}from"./position.28187aa7.js";import{V as pe}from"./VForm.fe1a1b3e.js";import{V as C}from"./VTextField.71d04b81.js";import{V as Ne}from"./VCheckbox.031c6a9a.js";import{V as S}from"./VDivider.ba925130.js";import"./index.733fb259.js";import"./easing.36b781ab.js";const ze=Ye("v-alert-title"),Te=["success","info","warning","error"],Ce=K({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:q,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Te.includes(e)},...je(),...De(),...he(),...fe(),...Qe(),...Re(),...$(),...ee(),...Oe({variant:"flat"})},emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:s}=l;const M=te(e,"modelValue"),d=O(()=>{var I;if(e.icon!==!1)return e.type?(I=e.icon)!=null?I:`$${e.type}`:e.icon}),i=O(()=>{var I;return{color:(I=e.color)!=null?I:e.type,variant:e.variant}}),{themeClasses:g}=se(e),{colorClasses:y,colorStyles:x,variantClasses:G}=ve(i),{densityClasses:Y}=ke(e),{dimensionStyles:h}=Be(e),{elevationClasses:f}=be(e),{locationStyles:R}=we(e),{positionClasses:c}=Ze(e),{roundedClasses:n}=He(e),{textColorClasses:j,textColorStyles:u}=ae(oe(e,"borderColor")),{t:J}=le(),H=O(()=>({"aria-label":J(e.closeLabel),onClick(I){M.value=!1}}));return()=>{var I,E;const U=!!(s.prepend||d.value),W=!!(s.title||e.title),F=!!(e.text||s.text),X=!!(s.close||e.closable);return M.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},g.value,y.value,Y.value,f.value,c.value,n.value,G.value],style:[x.value,h.value,R.value],role:"alert"},{default:()=>[Ee(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",j.value],style:u.value},null),U&&t(T,{key:"prepend",defaults:{VIcon:{density:e.density,icon:d.value,size:e.prominent?44:28}}},{default:()=>[t("div",{class:"v-alert__prepend"},[s.prepend?s.prepend():d.value&&t(ne,null,null)])]}),t("div",{class:"v-alert__content"},[W&&t(ze,{key:"title"},{default:()=>[s.title?s.title():e.title]}),F&&(s.text?s.text():e.text),(I=s.default)==null?void 0:I.call(s)]),s.append&&t("div",{key:"append",class:"v-alert__append"},[s.append()]),X&&t(T,{key:"close",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var Q;return[t("div",{class:"v-alert__close"},[(Q=(E=s.close)==null?void 0:E.call(s,{props:H.value}))!=null?Q:t(w,H.value,null)])]}})]})}}}),Se=e=>e==null||e===""?!0:!!(Array.isArray(e)&&e.length===0),Pe=e=>e==null,Ve=e=>Array.isArray(e)&&e.length===0;var Le=Symbol("ability");function _(){var e=re(Le);if(!e)throw new Error("Cannot inject Ability instance because it was not provided");return e}function _e(e){return"a"in e?"a":"this"in e?"this":"an"in e?"an":""}ie({name:"Can",props:{I:String,do:String,a:[String,Function],an:[String,Function],this:[String,Function,Object],on:[String,Function,Object],not:Boolean,passThrough:Boolean,field:String},setup:function(l,s){var M=s.slots,d=l,i="do",g="on";if(i in l||(i="I",g=_e(l)),!d[i])throw new Error("Neither `I` nor `do` prop was passed in <Can>");if(!M.default)throw new Error("Expects to receive default slot");var y=_();return function(){var x=y.can(d[i],d[g],d.field),G=l.not?!x:x;return l.passThrough?M.default({allowed:G,ability:y}):G?M.default():null}}});const Je=()=>_(),Ue={__name:"AuthProvider",setup(e){const{theme:l}=de(),s=[{icon:"mdi-facebook",color:"#4267b2",colorInDark:"#4267b2"},{icon:"mdi-twitter",color:"#1da1f2",colorInDark:"#1da1f2"},{icon:"mdi-github",color:"#272727",colorInDark:"#fff"},{icon:"mdi-google",color:"#db4437",colorInDark:"#db4437"}];return(M,d)=>(V(),L(ce,null,ue(s,i=>t(w,{key:i.icon,icon:i.icon,variant:"text",color:a(l)==="dark"?i.colorInDark:i.color},null,8,["icon","color"])),64))}},P=e=>Pe(e)||Ve(e)||e===!1?"This field is required":!!String(e).trim().length||"This field is required",We=e=>{if(Se(e))return!0;const l=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(e)?e.every(s=>l.test(String(s)))||"The Email field must be a valid email":l.test(String(e))||"The Email field must be a valid email"},Fe="/assets/auth-v2-login-illustration-bordered-dark.1621a082.png",Xe="/assets/auth-v2-login-illustration-bordered-light.5efb7928.png",Ke="/assets/auth-v2-login-illustration-dark.c163247b.png",qe="/assets/auth-v2-login-illustration-light.c910569c.png",$e="data:image/png;base64,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",et="data:image/png;base64,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";const tt={class:"auth-logo d-flex align-start gap-x-3"},st={class:"font-weight-medium leading-normal text-2xl text-uppercase"},at={class:"text-h5 mb-1"},ot=r("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),lt=r("p",{class:"text-caption mb-2"},[A(" Admin Email: "),r("strong",null,"admin@demo.com"),A(" / Pass: "),r("strong",null,"admin")],-1),nt=r("p",{class:"text-caption mb-0"},[A(" Client Email: "),r("strong",null,"client@demo.com"),A(" / Pass: "),r("strong",null,"client")],-1),it={class:"d-flex align-center flex-wrap justify-space-between mt-1 mb-4"},rt=r("span",null,"New on our platform?",-1),dt=r("span",{class:"mx-4"},"or",-1),ut={__name:"login",setup(e){const l=D(!1),s=p(qe,Ke,Xe,Fe,!0),M=p(et,$e),d=Ie(),i=ye(),g=Je(),y=D({email:void 0,password:void 0}),x=D(),G=D("admin@demo.com"),Y=D("admin"),h=D(!1),f=()=>{me.post("/auth/login",{email:G.value,password:Y.value}).then(c=>{const{accessToken:n,userData:j,userAbilities:u}=c.data;localStorage.setItem("userAbilities",JSON.stringify(u)),g.update(u),localStorage.setItem("userData",JSON.stringify(j)),localStorage.setItem("accessToken",JSON.stringify(n)),i.replace(d.query.to?String(d.query.to):"/")}).catch(c=>{const{errors:n}=c.response.data;y.value=n,console.error(c.response.data)})},R=()=>{var c;(c=x.value)==null||c.validate().then(({valid:n})=>{n&&f()})};return(c,n)=>{const j=xe("RouterLink");return V(),L("div",null,[r("div",tt,[t(a(Me),{nodes:a(v).app.logo},null,8,["nodes"]),r("h1",st,Z(a(v).app.title),1)]),t(z,{"no-gutters":"",class:"auth-wrapper"},{default:o(()=>[t(m,{lg:"8",class:"d-none d-lg-flex align-center justify-center position-relative"},{default:o(()=>[t(B,{"max-width":"768px",src:a(s),class:"auth-illustration"},null,8,["src"]),t(B,{width:276,src:a(Ae),class:"auth-footer-start-tree"},null,8,["src"]),t(B,{class:"auth-footer-mask",src:a(M)},null,8,["src"])]),_:1}),t(m,{cols:"12",lg:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:o(()=>[t(ge,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:o(()=>[t(b,null,{default:o(()=>[r("h5",at," Welcome to "+Z(a(v).app.title)+"! \u{1F44B}\u{1F3FB} ",1),ot]),_:1}),t(b,null,{default:o(()=>[t(Ce,{color:"primary",variant:"tonal"},{default:o(()=>[lt,nt]),_:1})]),_:1}),t(b,null,{default:o(()=>[t(a(pe),{ref_key:"refVForm",ref:x,onSubmit:Ge(R,["prevent"])},{default:o(()=>[t(z,null,{default:o(()=>[t(m,{cols:"12"},{default:o(()=>[t(C,{modelValue:a(G),"onUpdate:modelValue":n[0]||(n[0]=u=>k(G)?G.value=u:null),label:"Email",type:"email",rules:[a(P),a(We)],"error-messages":a(y).email},null,8,["modelValue","rules","error-messages"])]),_:1}),t(m,{cols:"12"},{default:o(()=>[t(C,{modelValue:a(Y),"onUpdate:modelValue":n[1]||(n[1]=u=>k(Y)?Y.value=u:null),label:"Password",rules:[a(P)],type:a(l)?"text":"password","error-messages":a(y).password,"append-inner-icon":a(l)?"mdi-eye-off-outline":"mdi-eye-outline","onClick:appendInner":n[2]||(n[2]=u=>l.value=!a(l))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),r("div",it,[t(Ne,{modelValue:a(h),"onUpdate:modelValue":n[3]||(n[3]=u=>k(h)?h.value=u:null),label:"Remember me"},null,8,["modelValue"]),t(j,{class:"text-primary ms-2 mb-1",to:{name:"forgot-password"}},{default:o(()=>[A(" Forgot Password? ")]),_:1})]),t(w,{block:"",type:"submit"},{default:o(()=>[A(" Login ")]),_:1})]),_:1}),t(m,{cols:"12",class:"text-center"},{default:o(()=>[rt,t(j,{class:"text-primary ms-2",to:{name:"register"}},{default:o(()=>[A(" Create an account ")]),_:1})]),_:1}),t(m,{cols:"12",class:"d-flex align-center"},{default:o(()=>[t(S),dt,t(S)]),_:1}),t(m,{cols:"12",class:"text-center"},{default:o(()=>[t(Ue)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})])}}};typeof N=="function"&&N(ut);export{ut as default};