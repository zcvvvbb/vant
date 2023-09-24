import{I}from"./index-1ef61aa2.js";import{B as N}from"./index-2ad848b9.js";import{u as P}from"./use-placeholder-e1607af4.js";import{A as v,y as L,e as t,r as w,o as A,a as U,w as u,C as e,g as h,t as k,d as F,F as z}from"./vue-libs-19c20d28.js";import{c as D,a as E}from"./use-translate-71d4880c.js";import{m as C,c as $,t as j,w as q}from"./with-install-560d59bf.js";import{V as G}from"./index-c2cfab0c.js";import{s as y}from"./function-call-2c179f35.js";import"./index-8bc2514f.js";import"./use-route-751feeeb.js";import"./index-2b75ebd8.js";import"./constant-ee6e27d7.js";import"./use-height-e6919207.js";import"./on-popup-reopen-6f4c2d78.js";import"./use-expose-80cfd2b2.js";import"./Checker-566e1a8e.js";import"./mount-component-b555bf78.js";import"./index-ddec6e01.js";import"./use-lock-scroll-01f1fb06.js";import"./use-touch-4e22f945.js";import"./use-lazy-render-e63df66f.js";import"./index-cd342d67.js";import"./interceptor-5424332a.js";const[H,a,J]=D("submit-bar"),K={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,currency:C("¥"),disabled:Boolean,textAlign:String,buttonText:String,buttonType:C("danger"),buttonColor:String,suffixLabel:String,placeholder:Boolean,decimalLength:$(2),safeAreaInsetBottom:j},M=v({name:H,props:K,emits:["submit"],setup(o,{emit:i,slots:n}){const c=L(),b=P(c,a),x=()=>{const{price:r,label:l,currency:p,textAlign:T,suffixLabel:_,decimalLength:B}=o;if(typeof r=="number"){const S=(r/100).toFixed(+B).split("."),V=B?`.${S[1]}`:"";return t("div",{class:a("text"),style:{textAlign:T}},[t("span",null,[l||J("label")]),t("span",{class:a("price")},[p,t("span",{class:a("price-integer")},[S[0]]),V]),_&&t("span",{class:a("suffix-label")},[_])])}},m=()=>{var p;const{tip:r,tipIcon:l}=o;if(n.tip||r)return t("div",{class:a("tip")},[l&&t(I,{class:a("tip-icon"),name:l},null),r&&t("span",{class:a("tip-text")},[r]),(p=n.tip)==null?void 0:p.call(n)])},s=()=>i("submit"),f=()=>n.button?n.button():t(N,{round:!0,type:o.buttonType,text:o.buttonText,class:a("button",o.buttonType),color:o.buttonColor,loading:o.loading,disabled:o.disabled,onClick:s},null),g=()=>{var r,l;return t("div",{ref:c,class:[a(),{"van-safe-area-bottom":o.safeAreaInsetBottom}]},[(r=n.top)==null?void 0:r.call(n),m(),t("div",{class:a("bar")},[(l=n.default)==null?void 0:l.call(n),x(),f()])])};return()=>o.placeholder?b(g):g()}}),O=q(M),d=O,xt=v({__name:"index",setup(o){const i=E({"zh-CN":{tip1:"你的收货地址不支持配送",tip2:"你的收货地址不支持配送, ",tip3:"修改地址",check:"全选",submit:"提交订单",clickLink:"修改地址",clickButton:"点击按钮"},"en-US":{tip1:"Some tips",tip2:"Some tips, ",tip3:"Link",check:"Label",submit:"Submit",clickLink:"Click Link",clickButton:"Submit"}}),n=L(!0),c=()=>y(i("clickButton")),b=()=>y(i("clickLink"));return(x,m)=>{const s=w("demo-block");return A(),U(z,null,[t(s,{title:e(i)("basicUsage")},{default:u(()=>[t(e(d),{price:3050,"button-text":e(i)("submit"),onSubmit:c},null,8,["button-text"])]),_:1},8,["title"]),t(s,{title:e(i)("disabled")},{default:u(()=>[t(e(d),{disabled:"",price:3050,"button-text":e(i)("submit"),tip:e(i)("tip1"),"tip-icon":"info-o",onSubmit:c},null,8,["button-text","tip"])]),_:1},8,["title"]),t(s,{title:e(i)("loadingStatus")},{default:u(()=>[t(e(d),{loading:"",price:3050,"button-text":e(i)("submit"),onSubmit:c},null,8,["button-text"])]),_:1},8,["title"]),t(s,{title:e(i)("advancedUsage")},{default:u(()=>[t(e(d),{price:3050,"button-text":e(i)("submit"),onSubmit:c},{tip:u(()=>[h(k(e(i)("tip2"))+" ",1),F("span",{class:"edit-address",onClick:b},k(e(i)("tip3")),1)]),default:u(()=>[t(e(G),{modelValue:n.value,"onUpdate:modelValue":m[0]||(m[0]=f=>n.value=f)},{default:u(()=>[h(k(e(i)("check")),1)]),_:1},8,["modelValue"])]),_:1},8,["button-text"])]),_:1},8,["title"])],64)}}});export{xt as default};
