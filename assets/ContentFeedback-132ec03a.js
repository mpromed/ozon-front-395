import{r as v,o as s,c as a,a as c,F as k,i as f,b as d,w as x,v as h}from"./index-7acba956.js";const u="/ozon-front-395/assets/filled_star-53aadc91.svg",y="/ozon-front-395/assets/empty_star-ca858063.svg";const D={class:"feedback-wrapper"},g={key:0,class:"stars-section"},T=["innerHTML"],b={class:"rating"},M=["onMouseover","onClick"],C={key:0,src:u,class:"star"},H={key:1,src:u,class:"star"},L={key:2,src:y,class:"star"},w={key:1,class:"text-section"},F=["innerHTML"],V={__name:"ContentFeedback",props:["componentData","testStyle"],setup(p){const e=p,o=v(0),l=v(0),n=v(!1);e.componentData.feedbackText="";const m=i=>{n.value=!1,i==o.value?o.value=0:o.value=i,e.componentData.rating=o.value};return(i,r)=>(s(),a("div",D,[e.componentData.showStars?(s(),a("div",g,[c("div",{innerHTML:e.componentData.starsDescription,class:"stars-text"},null,8,T),c("div",b,[(s(),a(k,null,f(5,t=>c("span",{key:t,class:"star-container",onMouseover:_=>(l.value=t,n.value=!0),onMouseleave:r[0]||(r[0]=_=>(l.value=o.value,n.value=!1)),onClick:_=>m(t)},[t<=o.value&&!n.value?(s(),a("img",C)):t<=l.value&&n.value?(s(),a("img",H)):(s(),a("img",L))],40,M)),64))])])):d("",!0),e.componentData.showText?(s(),a("div",w,[c("div",{innerHTML:e.componentData.text,class:"stars-text"},null,8,F),x(c("textarea",{"onUpdate:modelValue":r[1]||(r[1]=t=>e.componentData.feedbackText=t),type:"text",class:"feedback-input"},null,512),[[h,e.componentData.feedbackText]])])):d("",!0)]))}};export{V as default};
