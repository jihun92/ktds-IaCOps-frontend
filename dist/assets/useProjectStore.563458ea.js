import{bz as a}from"./index.f6415b6e.js";import{a as r}from"./axios.fab994a0.js";const c=a("ProjectStore",{state:()=>({planResults:[],applyResults:[]}),actions:{getTerraformStatusFile(){return r.get("/terraform/terraform-tfstatus").then(t=>t.data).catch(t=>{console.error("API \uC694\uCCAD \uC5D0\uB7EC:",t),s})},getAnsibleFile(t){return r.get(`/sw-config-management/${t}.yaml`).then(e=>e.data).catch(e=>{console.error("API \uC694\uCCAD \uC5D0\uB7EC:",e)})}}});export{c as u};