import{V as D,b as at}from"./index-399c4e52.js";import{O as lt,b as dt,m as j,c as Q,i as ut,P as ft,M as L,q as O,A as ht,z as Z,l as mt,u as pt,e as xt,t as gt,a as vt}from"./use-translate-71d4880c.js";import{u as yt}from"./use-touch-4e22f945.js";import{u as G}from"./use-expose-80cfd2b2.js";import{A as V,y as k,D as R,M as Tt,u as H,e as c,S as It,Q as St,q as bt,H as Ct,o as _,c as kt,w as I,C as o,a as F,F as U,b as q,d as X,g as At,t as _t}from"./vue-libs-19c20d28.js";import{t as wt,n as J,a as Lt,w as W}from"./with-install-560d59bf.js";import{f as Ot}from"./constant-ee6e27d7.js";import{V as S}from"./index-122de2bc.js";import"./use-id-09c3f4cb.js";import"./use-route-751feeeb.js";import"./index-8bc2514f.js";import"./index-c7590142.js";import"./on-popup-reopen-6f4c2d78.js";import"./use-refs-c698ebdb.js";import"./index-7f2a8246.js";import"./interceptor-5424332a.js";import"./index-1ef61aa2.js";function Rt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!St(e)}function Vt(){const e="A".charCodeAt(0);return Array(26).fill("").map((s,u)=>String.fromCharCode(e+u))}const[tt,w]=Q("index-bar"),Bt={sticky:wt,zIndex:J,teleport:[String,Object],highlightColor:String,stickyOffsetTop:Lt(0),indexList:{type:Array,default:Vt}},et=Symbol(tt),Pt=V({name:tt,props:Bt,emits:["select","change"],setup(e,{emit:r,slots:s}){const u=k(),p=k(),g=k(""),h=yt(),f=lt(u),{children:n,linkChildren:b}=dt(et);let m;b({props:e});const nt=R(()=>{if(ut(e.zIndex))return{zIndex:+e.zIndex+1}}),ot=R(()=>{if(e.highlightColor)return{color:e.highlightColor}}),B=(t,i)=>{for(let a=n.length-1;a>=0;a--){const d=a>0?i[a-1].height:0,l=e.sticky?d+e.stickyOffsetTop:0;if(t+l>=i[a].top)return a}return-1},P=t=>n.find(i=>String(i.index)===t),A=()=>{if(ft(u))return;const{sticky:t,indexList:i}=e,a=L(f.value),d=O(f),l=n.map(T=>T.getRect(f.value,d));let v=-1;if(m){const T=P(m);if(T){const y=T.getRect(f.value,d);v=B(y.top,l)}}else v=B(a,l);g.value=i[v],t&&n.forEach((T,y)=>{const{state:x,$el:rt}=T;if(y===v||y===v-1){const C=rt.getBoundingClientRect();x.left=C.left,x.width=C.width}else x.left=null,x.width=null;if(y===v)x.active=!0,x.top=Math.max(e.stickyOffsetTop,l[y].top-a)+d.top;else if(y===v-1&&m===""){const C=l[v].top-a;x.active=C>0,x.top=C+d.top-l[y].height}else x.active=!1}),m=""},E=()=>{bt(A)};j("scroll",A,{target:f,passive:!0}),Tt(E),H(()=>e.indexList,E),H(g,t=>{t&&r("change",t)});const st=()=>e.indexList.map(t=>{const i=t===g.value;return c("span",{class:w("index",{active:i}),style:i?ot.value:void 0,"data-index":t},[t])}),N=t=>{m=String(t);const i=P(m);if(i){const a=L(f.value),d=O(f),{offsetHeight:l}=document.documentElement;if(i.$el.scrollIntoView(),a===l-d.height){A();return}e.sticky&&e.stickyOffsetTop&&ht(Z()-e.stickyOffsetTop),r("select",i.index)}},$=t=>{const{index:i}=t.dataset;i&&N(i)},it=t=>{$(t.target)};let z;const ct=t=>{if(h.move(t),h.isVertical()){mt(t);const{clientX:i,clientY:a}=t.touches[0],d=document.elementFromPoint(i,a);if(d){const{index:l}=d.dataset;l&&z!==l&&(z=l,$(d))}}},M=()=>c("div",{ref:p,class:w("sidebar"),style:nt.value,onClick:it,onTouchstartPassive:h.start},[st()]);return G({scrollTo:N}),j("touchmove",ct,{target:p}),()=>{var i;let t;return c("div",{ref:u,class:w()},[e.teleport?c(It,{to:e.teleport},Rt(t=M())?t:{default:()=>[t]}):M(),(i=s.default)==null?void 0:i.call(s)])}}}),Et=W(Pt),Y=Et,[Nt,$t]=Q("index-anchor"),zt={index:J},Mt=V({name:Nt,props:zt,setup(e,{slots:r}){const s=Ct({top:0,left:null,rect:{top:0,height:0},width:null,active:!1}),u=k(),{parent:p}=pt(et);if(!p)return;const g=()=>s.active&&p.props.sticky,h=R(()=>{const{zIndex:n,highlightColor:b}=p.props;if(g())return xt(gt(n),{left:s.left?`${s.left}px`:void 0,width:s.width?`${s.width}px`:void 0,transform:s.top?`translate3d(0, ${s.top}px, 0)`:void 0,color:b})});return G({state:s,getRect:(n,b)=>{const m=O(u);return s.rect.height=m.height,n===window||n===document.body?s.rect.top=m.top+Z():s.rect.top=m.top+L(n)-b.top,s.rect}}),()=>{const n=g();return c("div",{ref:u,style:{height:n?`${s.rect.height}px`:void 0}},[c("div",{style:h.value,class:[$t({sticky:n}),{[Ot]:n}]},[r.default?r.default():e.index])])}}}),Dt=W(Mt),K=Dt,se=V({__name:"index",setup(e){const r=vt({"zh-CN":{text:"文本",customIndexList:"自定义索引列表"},"en-US":{text:"Text",customIndexList:"Custom Index List"}}),s=k(0),u=[],p=[1,2,3,4,5,6,8,9,10],g="A".charCodeAt(0);for(let h=0;h<26;h++)u.push(String.fromCharCode(g+h));return(h,f)=>(_(),kt(o(at),{active:s.value,"onUpdate:active":f[0]||(f[0]=n=>s.value=n)},{default:I(()=>[c(o(D),{title:o(r)("basicUsage")},{default:I(()=>[c(o(Y),null,{default:I(()=>[(_(),F(U,null,q(u,n=>X("div",{key:n},[c(o(K),{index:n},null,8,["index"]),c(o(S),{title:o(r)("text")},null,8,["title"]),c(o(S),{title:o(r)("text")},null,8,["title"]),c(o(S),{title:o(r)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"]),c(o(D),{title:o(r)("customIndexList")},{default:I(()=>[c(o(Y),{"index-list":p},{default:I(()=>[(_(),F(U,null,q(p,n=>X("div",{key:n},[c(o(K),{index:n},{default:I(()=>[At(_t(o(r)("title")+n),1)]),_:2},1032,["index"]),c(o(S),{title:o(r)("text")},null,8,["title"]),c(o(S),{title:o(r)("text")},null,8,["title"]),c(o(S),{title:o(r)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"])]),_:1},8,["active"]))}});export{se as default};
