(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1512:(e,t,s)=>{Promise.resolve().then(s.bind(s,7692))},7692:(e,t,s)=>{"use strict";s.d(t,{default:()=>p});var a=s(5155),r=s(2115),n=s(3271),i=s(5015),o=s(1190),l=s(7078),c=s(8283),d=s(5565),u=s(1290),h=s(1027),f=s(3463),x=s(9795);let g=(0,h.F)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),m=r.forwardRef((e,t)=>{let{className:s,variant:r,size:n,asChild:i=!1,...o}=e,l=i?u.DX:"button";return(0,a.jsx)(l,{className:function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,x.QP)((0,f.$)(t))}(g({variant:r,size:n,className:s})),ref:t,...o})});m.displayName="Button";let b=s(2818).env.NEXT_PUBLIC_API_URL||"https://web.cari1412.online",p=()=>{let[e,t]=(0,r.useState)(!1),[s,u]=(0,r.useState)(""),[h,f]=(0,r.useState)(null),{messages:x,input:g,handleInputChange:p,handleSubmit:v,isLoading:y}=(0,n.Y_)({api:"".concat(b,"/api/chat")}),j=async()=>{if(g){t(!0);try{let e=await fetch("".concat(b,"/api/generate-image"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:g})});if(!e.ok)throw Error("Failed to generate image");let t=await e.json();u(t.imageUrl)}catch(e){f(e.message||"An error occurred")}finally{t(!1)}}};return(0,a.jsxs)("div",{className:"h-full flex flex-col bg-white",children:[(0,a.jsx)("div",{className:"flex-1 overflow-y-auto",children:0===x.length?(0,a.jsx)("div",{className:"h-full flex items-center justify-center text-gray-500",children:"Начните диалог или сгенерируйте изображение"}):(0,a.jsxs)("div",{className:"p-4 space-y-4",children:[x.map(e=>(0,a.jsx)("div",{className:"flex ".concat("assistant"===e.role?"justify-start":"justify-end"),children:(0,a.jsx)("div",{className:"max-w-[80%] p-3 rounded-lg ".concat("assistant"===e.role?"bg-gray-100":"bg-blue-500 text-white"),children:(0,a.jsx)("p",{children:e.content})})},e.id)),s&&(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(d.default,{src:s,alt:"Generated",width:400,height:400,className:"rounded-lg"})})]})}),(0,a.jsx)("div",{className:"flex-none border-t bg-white p-3",children:(0,a.jsxs)("form",{onSubmit:v,className:"flex items-center gap-2",children:[(0,a.jsx)(m,{type:"button",variant:"ghost",size:"icon",className:"flex-none",children:(0,a.jsx)(i.A,{className:"w-5 h-5 text-gray-400"})}),(0,a.jsx)("input",{value:g,onChange:p,placeholder:"Введите сообщение...",className:"flex-1 h-10 px-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500",disabled:y||e}),(0,a.jsx)(m,{type:"button",onClick:j,disabled:!g||y||e,variant:"ghost",size:"icon",children:e?(0,a.jsx)(o.A,{className:"w-5 h-5 animate-spin text-gray-400"}):(0,a.jsx)(l.A,{className:"w-5 h-5 text-gray-400"})}),(0,a.jsx)(m,{type:"submit",disabled:!g||y,variant:"ghost",size:"icon",children:(0,a.jsx)(c.A,{className:"w-5 h-5 text-blue-500"})})]})})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[12,441,517,358],()=>t(1512)),_N_E=e.O()}]);