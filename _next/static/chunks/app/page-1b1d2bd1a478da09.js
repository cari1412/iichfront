(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1512:(e,a,t)=>{Promise.resolve().then(t.bind(t,7692))},7692:(e,a,t)=>{"use strict";t.d(a,{default:()=>f});var r=t(5155),s=t(2115),n=t(3271),i=t(1190),o=t(7078),d=t(8283),l=t(5565),c=t(1290),u=t(1027),h=t(3463),m=t(9795);let g=(0,u.F)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),b=s.forwardRef((e,a)=>{let{className:t,variant:s,size:n,asChild:i=!1,...o}=e,d=i?c.DX:"button";return(0,r.jsx)(d,{className:function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];return(0,m.QP)((0,h.$)(a))}(g({variant:s,size:n,className:t})),ref:a,...o})});b.displayName="Button";let p=t(2818).env.NEXT_PUBLIC_API_URL||"https://web.cari1412.online",f=()=>{let[e,a]=(0,s.useState)(!1),[t,c]=(0,s.useState)(""),[u,h]=(0,s.useState)(null),{messages:m,input:g,handleInputChange:f,handleSubmit:x,isLoading:v}=(0,n.Y_)({api:"".concat(p,"/api/chat")}),y=async()=>{if(g){a(!0);try{let e=await fetch("".concat(p,"/api/generate-image"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:g})});if(!e.ok)throw Error("Failed to generate image");let a=await e.json();c(a.imageUrl)}catch(e){h(e.message||"An error occurred")}finally{a(!1)}}};return(0,r.jsxs)("div",{className:"w-full max-w-3xl mx-auto bg-white rounded-lg shadow",children:[(0,r.jsxs)("div",{className:"h-[600px] overflow-y-auto p-6 bg-gray-50",children:[0===m.length?(0,r.jsx)("div",{className:"flex items-center justify-center h-full text-gray-500",children:"Start a conversation or generate an image"}):m.map(e=>(0,r.jsxs)("div",{className:"mb-4 p-4 rounded-lg ".concat("assistant"===e.role?"bg-white":"bg-blue-50"),children:[(0,r.jsx)("p",{className:"font-medium mb-1",children:"assistant"===e.role?"AI":"You"}),(0,r.jsx)("p",{children:e.content})]},e.id)),t&&(0,r.jsx)("div",{className:"mb-4 p-4 bg-white rounded-lg",children:(0,r.jsx)(l.default,{src:t,alt:"Generated",width:400,height:400,className:"rounded mx-auto"})}),u&&(0,r.jsx)("div",{className:"mb-4 p-4 bg-red-50 text-red-600 rounded-lg",children:u})]}),(0,r.jsx)("div",{className:"p-4 border-t",children:(0,r.jsxs)("form",{onSubmit:x,className:"flex gap-2",children:[(0,r.jsx)("input",{value:g,onChange:f,placeholder:"Type a message or describe an image...",className:"flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",disabled:v||e}),(0,r.jsx)(b,{type:"button",onClick:y,disabled:!g||v||e,className:"p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors",children:e?(0,r.jsx)(i.A,{className:"w-5 h-5 animate-spin"}):(0,r.jsx)(o.A,{className:"w-5 h-5"})}),(0,r.jsx)(b,{type:"submit",disabled:!g||v,className:"p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors",children:v?(0,r.jsx)(d.A,{className:"w-5 h-5 animate-spin"}):(0,r.jsx)(d.A,{className:"w-5 h-5"})})]})})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[6,441,517,358],()=>a(1512)),_N_E=e.O()}]);