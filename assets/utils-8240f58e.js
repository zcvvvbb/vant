import{p as u}from"./Picker-fc8d4360.js";import{e as l,W as p,H as m}from"./use-translate-71d4880c.js";import{b as f}from"./with-install-560d59bf.js";const x=l({},u,{modelValue:f(),filter:Function,formatter:{type:Function,default:(t,e)=>e}}),k=Object.keys(u);function d(t,e){if(t<0)return[];const r=Array(t);let n=-1;for(;++n<t;)r[n]=e(n);return r}const V=(t,e)=>32-new Date(t,e-1,32).getDate(),D=(t,e,r,n,a,s)=>{const o=d(e-t+1,i=>{const c=p(t+i);return n(r,{text:c,value:c})});return a?a(r,o,s):o},P=(t,e)=>t.map((r,n)=>{const a=e[n];if(a.length){const s=+a[0].value,o=+a[a.length-1].value;return p(m(+r,s,o))}return r});export{D as a,P as f,V as g,k as p,x as s};
