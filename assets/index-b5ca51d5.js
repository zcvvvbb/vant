import{d as w,c as E,q as D,l as S,a as L}from"./use-translate-71d4880c.js";import{B as _}from"./index-2ad848b9.js";import{A as N,y as k,H as V,M as j,q as z,e as n,r as M,o as y,a as q,w as g,C as s,c as F,f as H,F as I}from"./vue-libs-19c20d28.js";import{m as x,a as X,w as Y}from"./with-install-560d59bf.js";import{V as A}from"./index-1122429d.js";import{s as J}from"./function-call-2c179f35.js";import"./use-route-751feeeb.js";import"./index-1ef61aa2.js";import"./index-8bc2514f.js";import"./index-2b75ebd8.js";import"./constant-ee6e27d7.js";import"./mount-component-b555bf78.js";import"./use-expose-80cfd2b2.js";import"./index-ddec6e01.js";import"./use-lock-scroll-01f1fb06.js";import"./use-touch-4e22f945.js";import"./use-lazy-render-e63df66f.js";import"./on-popup-reopen-6f4c2d78.js";import"./index-cd342d67.js";import"./interceptor-5424332a.js";const[$,b,B]=E("signature"),G={tips:String,type:x("png"),penColor:x("#000"),lineWidth:X(3),clearButtonText:String,backgroundColor:x(""),confirmButtonText:String},K=()=>{var a;const o=document.createElement("canvas");return!!((a=o.getContext)!=null&&a.call(o,"2d"))},O=N({name:$,props:G,emits:["submit","clear","start","end","signing"],setup(o,{emit:a}){const c=k(),l=k(),t=V({width:0,height:0,ctx:null,ratio:w?window.devicePixelRatio:1});let r;const f=w?K():!0,m=()=>{if(!t.ctx)return!1;t.ctx.beginPath(),t.ctx.lineWidth=o.lineWidth*t.ratio,t.ctx.strokeStyle=o.penColor,r=D(c),a("start")},T=e=>{var d,v;if(!t.ctx)return!1;S(e);const i=e.touches[0],u=(i.clientX-((r==null?void 0:r.left)||0))*t.ratio,h=(i.clientY-((r==null?void 0:r.top)||0))*t.ratio;t.ctx.lineCap="round",t.ctx.lineJoin="round",(d=t.ctx)==null||d.lineTo(u,h),(v=t.ctx)==null||v.stroke(),a("signing",e)},R=e=>{S(e),a("end")},P=e=>{const i=document.createElement("canvas");if(i.width=e.width,i.height=e.height,o.backgroundColor){const u=i.getContext("2d");C(u)}return e.toDataURL()===i.toDataURL()},C=e=>{e&&o.backgroundColor&&(e.fillStyle=o.backgroundColor,e.fillRect(0,0,t.width,t.height))},U=()=>{var h,d;const e=c.value;if(!e)return;const u=P(e)?"":((d=(h={jpg:()=>e.toDataURL("image/jpeg",.8),jpeg:()=>e.toDataURL("image/jpeg",.8)})[o.type])==null?void 0:d.call(h))||e.toDataURL(`image/${o.type}`);a("submit",{image:u,canvas:e})},W=()=>{t.ctx&&(t.ctx.clearRect(0,0,t.width,t.height),t.ctx.closePath(),C(t.ctx)),a("clear")};return j(()=>{var e,i,u;f&&(t.ctx=(e=c.value)==null?void 0:e.getContext("2d"),t.width=(((i=l.value)==null?void 0:i.offsetWidth)||0)*t.ratio,t.height=(((u=l.value)==null?void 0:u.offsetHeight)||0)*t.ratio,z(()=>{C(t.ctx)}))}),()=>n("div",{class:b()},[n("div",{class:b("content"),ref:l},[f?n("canvas",{ref:c,width:t.width,height:t.height,onTouchstartPassive:m,onTouchmove:T,onTouchend:R},null):n("p",null,[o.tips])]),n("div",{class:b("footer")},[n(_,{size:"small",onClick:W},{default:()=>[o.clearButtonText||B("clear")]}),n(_,{type:"primary",size:"small",onClick:U},{default:()=>[o.confirmButtonText||B("confirm")]})])])}}),Q=Y(O),p=Q,bt={__name:"index",setup(o){const a=L({"zh-CN":{penColor:"自定义颜色",lineWidth:"自定义线宽",backgroundColor:"自定义背景颜色"},"en-US":{penColor:"Pen Color",lineWidth:"Line Width",backgroundColor:"Background Color"}}),c=k(""),l=r=>{c.value=r.image},t=()=>J("clear");return(r,f)=>{const m=M("demo-block");return y(),q(I,null,[n(m,{title:s(a)("basicUsage")},{default:g(()=>[n(s(p),{onSubmit:l,onClear:t})]),_:1},8,["title"]),c.value?(y(),F(s(A),{key:0,src:c.value},null,8,["src"])):H("",!0),n(m,{title:s(a)("penColor")},{default:g(()=>[n(s(p),{"pen-color":"#ff0000",onClear:t,onSubmit:l})]),_:1},8,["title"]),n(m,{title:s(a)("lineWidth")},{default:g(()=>[n(s(p),{"line-width":6,onClear:t,onSubmit:l})]),_:1},8,["title"]),n(m,{title:s(a)("backgroundColor")},{default:g(()=>[n(s(p),{"background-color":"#eee",onClear:t,onSubmit:l})]),_:1},8,["title"])],64)}}};export{bt as default};
