import{_ as o,u as n,o as t,c as a,a as s,n as c,b as l}from"./index-dde2bc34.js";import{_ as r}from"./answerCheckMark-40dec800.js";const h={class:"answer-checkbox"},d=["src"],b={class:"bottom-caption"},k={class:"answer-checkbox-container"},u={key:0,src:r,alt:"check mark"},m=["innerHTML"],x={__name:"CheckboxImageAnswer",props:{isChecked:{type:Boolean,default:!1},isDisable:{type:Boolean,default:!1},answerText:{type:String,default:""},isRight:{type:Boolean,default:!1},isRightAlt:{type:Boolean,default:!1},checkboxColor:{type:String,default:"#2ea809"},imageURL:{type:String,default:""}},setup(e){return n(i=>({"7eb3b253":e.checkboxColor})),(i,f)=>(t(),a("li",null,[s("div",h,[s("img",{src:e.imageURL,class:"answer-checkbox-image"},null,8,d),s("div",b,[s("div",k,[s("div",{class:c([{"white-checkbox":!e.isChecked,"purple-checkbox":e.isChecked||e.isDisable&&e.isRight,"cursor-pointer":!e.isDisable,"alt-checkbox":e.isDisable&&e.isRightAlt},"answer-checkbox-rectangle"])},[e.isChecked?(t(),a("img",u)):l("",!0)],2)]),s("div",{innerHTML:e.answerText,class:c([{"cursor-pointer":!e.isDisable},"answer-checkbox-text"])},null,10,m)])])]))}},C=o(x,[["__scopeId","data-v-84efeb63"]]);export{C as default};
