import{z as y,d as S,t as x,k as o,ar as A,b5 as B,o as u,c as d,m as r,p as c,w as I,G as P,q as m,aX as k,aa as C,F as V,j as D,B as N,b6 as T,b7 as q,b8 as L}from"./index.ee0bb086.js";import{a as R}from"./axios.fab994a0.js";const p=s=>(q("data-v-8348a1ac"),s=s(),L(),s),w={key:0,class:"d-none d-md-flex align-center text-disabled"},z=p(()=>r("span",{class:"me-3"},"Search",-1)),E=p(()=>r("span",{class:"meta-key"},"\u2318K",-1)),U=[z,E],O=S({inheritAttrs:!1}),j=Object.assign(O,{name:"NavSearchBar",setup(s){const{appContentLayoutNav:g}=x(),a=o(!1),h=[{title:"Popular Searches",content:[{icon:"mdi-chart-donut",title:"Analytics",url:{name:"dashboards-analytics"}},{icon:"mdi-chart-bubble",title:"CRM",url:{name:"dashboards-crm"}},{icon:"mdi-file-outline",title:"Invoice List",url:{name:"apps-invoice-list"}},{icon:"mdi-account-group-outline",title:"User List",url:{name:"apps-user-list"}}]},{title:"Apps & Pages",content:[{icon:"mdi-calendar",title:"Calendar",url:{name:"apps-calendar"}},{icon:"mdi-file-plus-outline",title:"Invoice Add",url:{name:"apps-invoice-add"}},{icon:"mdi-currency-usd",title:"Pricing",url:{name:"pages-pricing"}},{icon:"mdi-account-cog-outline",title:"Account Settings",url:{name:"pages-account-settings-tab",params:{tab:"account"}}}]},{title:"User Interface",content:[{icon:"mdi-alpha-a-box-outline",title:"Typography",url:{name:"pages-typography"}},{icon:"mdi-tab",title:"Tabs",url:{name:"components-tabs"}},{icon:"mdi-gesture-tap-button",title:"Buttons",url:{name:"components-button"}},{icon:"mdi-keyboard-settings-outline",title:"Statistics",url:{name:"pages-cards-card-statistics"}}]},{title:"Popular Searches",content:[{icon:"mdi-format-list-checkbox",title:"Select",url:{name:"forms-select"}},{icon:"mdi-lastpass",title:"Combobox",url:{name:"forms-combobox"}},{icon:"mdi-calendar-range-outline",title:"Date & Time Picker",url:{name:"forms-date-time-picker"}},{icon:"mdi-hexagram-outline",title:"Rating",url:{name:"forms-rating"}}]}],b=[{title:"Analytics Dashboard",icon:"mdi-cart-outline",url:{name:"dashboards-analytics"}},{title:"Account Settings",icon:"mdi-account-outline",url:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing Page",icon:"mdi-cash",url:{name:"pages-pricing"}}],n=o(""),l=o([]),_=D();A(()=>{R.get("/app-bar/search",{params:{q:n.value}}).then(t=>{l.value=t.data})});const f=t=>{_.push(t.url),a.value=!1,n.value=""},v=B(()=>T(()=>import("./AppBarSearch.887762b2.js"),["assets/AppBarSearch.887762b2.js","assets/index.ee0bb086.js","assets/index.49a1c3a7.css","assets/VDialog.4eecc8c5.js","assets/scopeId.4ce01635.js","assets/scopeId.a3d451a1.css","assets/VDialog.edd6e4c8.css","assets/AppBarSearch.6a7af5ad.css"]));return(t,e)=>(u(),d(V,null,[r("div",C({class:"d-flex align-center cursor-pointer"},t.$attrs,{onClick:e[0]||(e[0]=i=>a.value=!a.value)}),[c(P,{icon:"",variant:"text",color:"default",size:"small"},{default:I(()=>[c(N,{icon:"mdi-magnify",size:"24"})]),_:1}),m(g)==="vertical"?(u(),d("span",w,U)):k("",!0)],16),c(m(v),{isDialogVisible:a.value,"onUpdate:isDialogVisible":e[1]||(e[1]=i=>a.value=i),"search-query":n.value,"onUpdate:search-query":e[2]||(e[2]=i=>n.value=i),"search-results":l.value,suggestions:h,"no-data-suggestion":b,onItemSelected:f},null,8,["isDialogVisible","search-query","search-results"])],64))}}),$=y(j,[["__scopeId","data-v-8348a1ac"]]);export{$ as default};