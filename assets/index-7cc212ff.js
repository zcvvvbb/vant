import{V as i}from"./index-122de2bc.js";import{V as b}from"./index-1122429d.js";import{c as d}from"./index-2630be1a.js";import{_ as I,s as m,b as B,d as v,a as k,c as $}from"./function-call-2c179f35.js";import{w as y}from"./with-install-560d59bf.js";import{a as h}from"./use-translate-71d4880c.js";import{A as W,y as F,r as S,o as U,a as V,e as s,w as r,C as t,F as A}from"./vue-libs-19c20d28.js";import"./use-route-751feeeb.js";import"./index-1ef61aa2.js";import"./index-8bc2514f.js";import"./mount-component-b555bf78.js";import"./use-expose-80cfd2b2.js";import"./index-ddec6e01.js";import"./use-lock-scroll-01f1fb06.js";import"./use-touch-4e22f945.js";import"./constant-ee6e27d7.js";import"./use-lazy-render-e63df66f.js";import"./on-popup-reopen-6f4c2d78.js";import"./index-cd342d67.js";import"./interceptor-5424332a.js";import"./index-2b75ebd8.js";const L=y(I),M=L,it=W({__name:"index",setup(P){const o=h({"zh-CN":{fail:"失败提示",text:"提示内容",text2:"成功文案",text3:"失败文案",text4:l=>`倒计时 ${l} 秒`,title1:"文字提示",title2:"加载提示",title3:"成功/失败提示",success:"成功提示",breakAll:"换行时截断单词",breakWord:"换行时不截断单词",wordBreak:"文字换行方式",customIcon:"自定义图标",customImage:"自定义图片",loadingType:"自定义加载图标",positionTop:"顶部展示",useComponent:"使用 Toast 组件",updateMessage:"动态更新提示",positionBottom:"底部展示",customPosition:"自定义位置"},"en-US":{fail:"Fail",text:"Some messages",text2:"Success",text3:"Fail",text4:l=>`${l} seconds`,title1:"Text",title2:"Loading",title3:"Success/Fail",success:"Success",wordBreak:"Word Break",breakAll:"Break All",breakWord:"Break Word",customIcon:"Custom Icon",customImage:"Custom Image",loadingType:"Loading Type",positionTop:"Top",useComponent:"Use Toast Component",updateMessage:"Update Message",positionBottom:"Bottom",customPosition:"Custom Position"}}),u=l=>{k({forbidClick:!0,message:o("loading"),loadingType:l})},g=()=>{m({message:o("positionTop"),position:"top"})},T=()=>{m({message:o("positionBottom"),position:"bottom"})},C=()=>{m({message:o("customIcon"),icon:"like-o"})},w=()=>{m({message:o("customImage"),icon:d("logo.png")})},f=()=>{const l=k({duration:0,forbidClick:!0,message:o("text4",3)});let e=3;const a=setInterval(()=>{e--,e?l.message=o("text4",e):(clearInterval(a),$())},1e3)},c=l=>{m({message:"This message will contain a incomprehensibilities long word.",wordBreak:l})},p=F(!1),x=d("cat.jpeg");return(l,e)=>{const a=S("demo-block");return U(),V(A,null,[s(a,{card:"",title:t(o)("basicUsage")},{default:r(()=>[s(t(i),{"is-link":"",title:t(o)("title1"),onClick:e[0]||(e[0]=n=>t(m)(t(o)("text")))},null,8,["title"]),s(t(i),{"is-link":"",title:t(o)("title2"),onClick:e[1]||(e[1]=n=>u())},null,8,["title"]),s(t(i),{"is-link":"",title:t(o)("success"),onClick:e[2]||(e[2]=n=>t(B)(t(o)("text2")))},null,8,["title"]),s(t(i),{"is-link":"",title:t(o)("fail"),onClick:e[3]||(e[3]=n=>t(v)(t(o)("text3")))},null,8,["title"])]),_:1},8,["title"]),s(a,{card:"",title:t(o)("customIcon")},{default:r(()=>[s(t(i),{"is-link":"",title:t(o)("customIcon"),onClick:C},null,8,["title"]),s(t(i),{"is-link":"",title:t(o)("customImage"),onClick:w},null,8,["title"]),s(t(i),{"is-link":"",title:t(o)("loadingType"),onClick:e[4]||(e[4]=n=>u("spinner"))},null,8,["title"])]),_:1},8,["title"]),s(a,{card:"",title:t(o)("customPosition")},{default:r(()=>[s(t(i),{"is-link":"",title:t(o)("positionTop"),onClick:g},null,8,["title"]),s(t(i),{"is-link":"",title:t(o)("positionBottom"),onClick:T},null,8,["title"])]),_:1},8,["title"]),s(a,{card:"",title:t(o)("wordBreak")},{default:r(()=>[s(t(i),{"is-link":"",title:t(o)("breakAll"),onClick:e[5]||(e[5]=n=>c("break-all"))},null,8,["title"]),s(t(i),{"is-link":"",title:t(o)("breakWord"),onClick:e[6]||(e[6]=n=>c("break-word"))},null,8,["title"])]),_:1},8,["title"]),s(a,{card:"",title:t(o)("updateMessage")},{default:r(()=>[s(t(i),{"is-link":"",title:t(o)("updateMessage"),onClick:f},null,8,["title"])]),_:1},8,["title"]),s(a,{card:"",title:t(o)("useComponent")},{default:r(()=>[s(t(i),{"is-link":"",title:t(o)("useComponent"),onClick:e[7]||(e[7]=n=>p.value=!0)},null,8,["title"]),s(t(M),{show:p.value,"onUpdate:show":e[8]||(e[8]=n=>p.value=n),style:{padding:"0"}},{message:r(()=>[s(t(b),{src:t(x),width:"200",height:"140",style:{display:"block"}},null,8,["src"])]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{it as default};
