import{m as p,I as m,E as r,o as u,c as z,N as f,O as w}from"./DEtnIR93.js";const _=p({__name:"IconTw",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(c){const n=m(),a=c,l=r(()=>{var s;let e=a.name;return(s=n.iconTw)!=null&&s.aliases&&n.iconTw.aliases[a.name]&&(e=n.iconTw.aliases[a.name]),e}),i=r(()=>{var s,o,t;if(!a.size&&typeof((s=n.iconTw)==null?void 0:s.size)=="boolean"&&!((o=n.iconTw)!=null&&o.size))return;const e=a.size||((t=n.iconTw)==null?void 0:t.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,s)=>(u(),z("span",{class:f(l.value),style:w({width:i.value,height:i.value})},null,6))}});export{_};
