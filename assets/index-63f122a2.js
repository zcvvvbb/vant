import{b as c,V as r}from"./index-399c4e52.js";import{V as M}from"./index-1ef61aa2.js";import{a as A}from"./use-translate-71d4880c.js";import{A as D,y as f,r as E,o as v,c as P,w as i,e as l,C as t,a as d,F as p,b as m,g as u,t as n}from"./vue-libs-19c20d28.js";import{s as $}from"./function-call-2c179f35.js";import"./use-id-09c3f4cb.js";import"./use-expose-80cfd2b2.js";import"./use-route-751feeeb.js";import"./index-8bc2514f.js";import"./with-install-560d59bf.js";import"./index-c7590142.js";import"./use-touch-4e22f945.js";import"./constant-ee6e27d7.js";import"./on-popup-reopen-6f4c2d78.js";import"./use-refs-c698ebdb.js";import"./index-7f2a8246.js";import"./interceptor-5424332a.js";import"./mount-component-b555bf78.js";import"./index-ddec6e01.js";import"./use-lock-scroll-01f1fb06.js";import"./use-lazy-render-e63df66f.js";import"./index-cd342d67.js";import"./index-2b75ebd8.js";const j=D({__name:"Shrink",setup(F){const a=A({"zh-CN":{tab:"标签 ",shrink:"收缩布局"},"en-US":{tab:"Tab ",shrink:"Shrink"}}),k=[1,2,3,4],y=f(0),U=f(0);return(T,_)=>{const g=E("demo-block");return v(),P(g,{title:t(a)("shrink")},{default:i(()=>[l(t(c),{active:y.value,"onUpdate:active":_[0]||(_[0]=s=>y.value=s),shrink:""},{default:i(()=>[(v(),d(p,null,m(k,s=>l(t(r),{title:t(a)("tab")+s,key:s},{default:i(()=>[u(n(t(a)("content"))+" "+n(s),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"]),l(t(c),{active:U.value,"onUpdate:active":_[1]||(_[1]=s=>U.value=s),type:"card",shrink:"",style:{"margin-top":"var(--van-padding-lg)"}},{default:i(()=>[(v(),d(p,null,m(k,s=>l(t(r),{title:t(a)("tab")+s,key:s},{default:i(()=>[u(n(t(a)("content"))+" "+n(s),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"])}}}),vt=D({__name:"index",setup(F){const a=A({"zh-CN":{tab:"标签 ",title2:"标签栏滚动",title3:"禁用标签",title4:"样式风格",title5:"点击事件",title6:"粘性布局",title7:"自定义标签",title8:"切换动画",title9:"滑动切换",title10:"滚动导航",disabled:" 已被禁用",matchByName:"通过名称匹配",beforeChange:"异步切换"},"en-US":{tab:"Tab ",content:"content of tab",title2:"Swipe Tabs",title3:"Disabled Tab",title4:"Card Style",title5:"Click Event",title6:"Sticky",title7:"Custom Tab",title8:"Switch Animation",title9:"Swipeable",title10:"Scrollspy",disabled:" is disabled",matchByName:"Match By Name",beforeChange:"Before Change"}}),k=f(0),y=f(0),U=f(0),T=f(0),_=f(0),g=f(0),s=f(0),N=f(0),w=f(0),B=f(0),V=f(0),z=f("b"),S=[1,2,3,4],I=({title:C})=>{$(C)},L=C=>C===1?!1:new Promise(o=>{o(C!==3)});return(C,o)=>{const b=E("demo-block");return v(),d(p,null,[l(b,{title:t(a)("basicUsage")},{default:i(()=>[l(t(c),{active:k.value,"onUpdate:active":o[0]||(o[0]=e=>k.value=e)},{default:i(()=>[(v(),d(p,null,m(S,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[u(n(t(a)("content"))+" "+n(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("matchByName")},{default:i(()=>[l(t(c),{active:z.value,"onUpdate:active":o[1]||(o[1]=e=>z.value=e)},{default:i(()=>[l(t(r),{name:"a",title:t(a)("tab")+1},{default:i(()=>[u(n(t(a)("content"))+" 1 ",1)]),_:1},8,["title"]),l(t(r),{name:"b",title:t(a)("tab")+2},{default:i(()=>[u(n(t(a)("content"))+" 2 ",1)]),_:1},8,["title"]),l(t(r),{name:"c",title:t(a)("tab")+3},{default:i(()=>[u(n(t(a)("content"))+" 3 ",1)]),_:1},8,["title"])]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title2")},{default:i(()=>[l(t(c),{active:y.value,"onUpdate:active":o[2]||(o[2]=e=>y.value=e)},{default:i(()=>[(v(),d(p,null,m(8,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[u(n(t(a)("content"))+" "+n(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title3")},{default:i(()=>[l(t(c),{active:U.value,"onUpdate:active":o[3]||(o[3]=e=>U.value=e)},{default:i(()=>[(v(),d(p,null,m(3,e=>l(t(r),{title:t(a)("tab")+e,disabled:e===2,key:e},{default:i(()=>[u(n(t(a)("content"))+" "+n(e),1)]),_:2},1032,["title","disabled"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title4")},{default:i(()=>[l(t(c),{active:T.value,"onUpdate:active":o[4]||(o[4]=e=>T.value=e),type:"card"},{default:i(()=>[(v(),d(p,null,m(3,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[u(n(t(a)("content"))+" "+n(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title5")},{default:i(()=>[l(t(c),{active:_.value,"onUpdate:active":o[5]||(o[5]=e=>_.value=e),onClickTab:I},{default:i(()=>[(v(),d(p,null,m(2,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[u(n(t(a)("content"))+" "+n(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title6")},{default:i(()=>[l(t(c),{active:g.value,"onUpdate:active":o[6]||(o[6]=e=>g.value=e),sticky:""},{default:i(()=>[(v(),d(p,null,m(S,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[u(n(t(a)("content"))+" "+n(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(j),l(b,{title:t(a)("title7")},{default:i(()=>[l(t(c),{active:s.value,"onUpdate:active":o[7]||(o[7]=e=>s.value=e)},{default:i(()=>[(v(),d(p,null,m(2,e=>l(t(r),{key:e},{title:i(()=>[l(t(M),{name:"more-o"}),u(n(t(a)("tab")),1)]),default:i(()=>[u(" "+n(t(a)("content"))+" "+n(e),1)]),_:2},1024)),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title8")},{default:i(()=>[l(t(c),{active:N.value,"onUpdate:active":o[8]||(o[8]=e=>N.value=e),animated:""},{default:i(()=>[(v(),d(p,null,m(S,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[u(n(t(a)("content"))+" "+n(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title9")},{default:i(()=>[l(t(c),{active:w.value,"onUpdate:active":o[9]||(o[9]=e=>w.value=e),swipeable:""},{default:i(()=>[(v(),d(p,null,m(S,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[u(n(t(a)("content"))+" "+n(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("title10")},{default:i(()=>[l(t(c),{active:B.value,"onUpdate:active":o[10]||(o[10]=e=>B.value=e),scrollspy:"",sticky:""},{default:i(()=>[(v(),d(p,null,m(8,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[u(n(t(a)("content"))+" "+n(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"]),l(b,{title:t(a)("beforeChange")},{default:i(()=>[l(t(c),{active:V.value,"onUpdate:active":o[11]||(o[11]=e=>V.value=e),"before-change":L},{default:i(()=>[(v(),d(p,null,m(4,e=>l(t(r),{title:t(a)("tab")+e,key:e},{default:i(()=>[u(n(t(a)("content"))+" "+n(e),1)]),_:2},1032,["title"])),64))]),_:1},8,["active"])]),_:1},8,["title"])],64)}}});export{vt as default};
