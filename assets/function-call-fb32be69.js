import{m as l,u as d}from"./mount-component-b555bf78.js";import{P as f,p as m}from"./index-ddec6e01.js";import{A as p,e as r,B as g}from"./vue-libs-19c20d28.js";import{c as k,e as i,d as w,f as y}from"./use-translate-71d4880c.js";import{m as a,n as S,u as h}from"./with-install-560d59bf.js";const[P,N]=k("notify"),b=i({},m,{type:a("danger"),color:String,message:S,position:a("top"),className:h,background:String,lockScroll:Boolean}),O=p({name:P,props:b,emits:["update:show"],setup(e,{emit:n,slots:t}){const c=u=>n("update:show",u);return()=>r(f,{show:e.show,class:[N([e.type]),e.className],style:{color:e.color,background:e.background},overlay:!1,zIndex:e.zIndex,position:e.position,duration:.2,lockScroll:e.lockScroll,"onUpdate:show":c},{default:()=>[t.default?t.default():e.message]})}});let s,o;const x=e=>y(e)?e:{message:e};function C(){({instance:o}=l({setup(){const{state:e,toggle:n}=d();return()=>r(O,g(e,{"onUpdate:show":n}),null)}}))}const B=()=>({type:"danger",color:void 0,message:"",onClose:void 0,onClick:void 0,onOpened:void 0,duration:3e3,position:void 0,className:"",lockScroll:!1,background:void 0});let I=B();const z=()=>{o&&o.toggle(!1)};function A(e){if(w)return o||C(),e=i({},I,x(e)),o.open(e),clearTimeout(s),e.duration>0&&(s=setTimeout(z,e.duration)),o}export{O as _,A as s};
