import{o as t,c as n,F as _,i as l,t as u}from"./index-dde2bc34.js";const p={class:"content-buttons"},m=["onClick"],y={__name:"ContentButtons",props:["componentData","testStyle"],emits:["action"],setup(s,{emit:c}){const a=s,i=e=>{c("action",e)};return(e,d)=>(t(),n("div",p,[(t(!0),n(_,null,l(a.componentData.buttonsList,(o,r)=>(t(),n("div",{key:r,onClick:k=>i(o.action),class:"content-buttons-item"},u(o.buttonName),9,m))),128))]))}};export{y as default};
