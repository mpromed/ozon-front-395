import{_ as s,o as t,c as a,n as o,a as l,b as n}from"./index-1b5e4a86.js";const c=["innerHTML"],u={key:1},r={__name:"ButtonAnswer",props:{isChecked:{type:Boolean,default:!1},isDisable:{type:Boolean,default:!1},isButtonOnImage:{type:Boolean,default:!1},answerText:{type:String,default:""}},setup(e){return(d,i)=>(t(),a("div",null,[e.isButtonOnImage?n("",!0):(t(),a("li",{key:0,class:o(["answer-button",{"answer-button-selected":e.isChecked,"answer-button-not-selected":!e.isChecked}])},[l("div",{innerHTML:e.answerText,class:"answer-button-text"},null,8,c)],2)),e.isButtonOnImage?(t(),a("div",u)):n("",!0)]))}},B=s(r,[["__scopeId","data-v-85a62aa9"]]);export{B as default};
