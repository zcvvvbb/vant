import{A as d,e as a,r as _,o as u,a as f,w as i,C as t,g as o,t as l,d as h,F as m}from"./vue-libs-19c20d28.js";import{c as x,a as v}from"./use-translate-71d4880c.js";import{t as p,m as y,w as C}from"./with-install-560d59bf.js";const[P,g]=x("divider"),w={dashed:Boolean,hairline:p,vertical:Boolean,contentPosition:y("center")},S=d({name:P,props:w,setup(r,{slots:e}){return()=>{var c;return a("div",{role:"separator",class:g({dashed:r.dashed,hairline:r.hairline,vertical:r.vertical,[`content-${r.contentPosition}`]:!!e.default&&!r.vertical})},[!r.vertical&&((c=e.default)==null?void 0:c.call(e))])}}}),T=C(S),n=T,b={class:"content"},V=d({__name:"index",setup(r){const e=v({"zh-CN":{text:"文本",dashed:"虚线",withText:"展示文本",contentPosition:"内容位置",customStyle:"自定义样式",vertical:"垂直"},"en-US":{text:"Text",dashed:"Dashed",withText:"With Text",contentPosition:"Content Position",customStyle:"Custom Style",vertical:"Vertical"}});return(c,k)=>{const s=_("demo-block");return u(),f(m,null,[a(s,{title:t(e)("basicUsage")},{default:i(()=>[a(t(n))]),_:1},8,["title"]),a(s,{title:t(e)("withText")},{default:i(()=>[a(t(n),null,{default:i(()=>[o(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"]),a(s,{title:t(e)("contentPosition")},{default:i(()=>[a(t(n),{"content-position":"left"},{default:i(()=>[o(l(t(e)("text")),1)]),_:1}),a(t(n),{"content-position":"right"},{default:i(()=>[o(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"]),a(s,{title:t(e)("dashed")},{default:i(()=>[a(t(n),{dashed:"",hairline:!1},{default:i(()=>[o(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"]),a(s,{title:t(e)("customStyle")},{default:i(()=>[a(t(n),{style:{borderColor:"#1989fa",color:"#1989fa",padding:"0 16px"}},{default:i(()=>[o(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"]),a(s,{title:t(e)("vertical")},{default:i(()=>[h("div",b,[a(t(n),{vertical:""}),o(" "+l(t(e)("text"))+" ",1),a(t(n),{vertical:"",dashed:""}),o(" "+l(t(e)("text"))+" ",1),a(t(n),{vertical:"",hairline:!1}),o(" "+l(t(e)("text"))+" ",1),a(t(n),{vertical:"",style:{borderColor:"#1989fa"}})])]),_:1},8,["title"])],64)}}});export{V as default};
