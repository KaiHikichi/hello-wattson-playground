"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["2706"],{28725:function(e,s,i){i.r(s),i.d(s,{default:()=>p,frontMatter:()=>o,metadata:()=>n,assets:()=>a,stylisConfig:()=>c,toc:()=>h,contentTitle:()=>d});var n=JSON.parse('{"id":"languages/stylis","title":"Stylis","description":"Stylis is a lightweight CSS preprocessor and parser. It supports CSS-like syntax with nesting, auto-prefixing, and other transformations.","source":"@site/docs/languages/stylis.mdx","sourceDirName":"languages","slug":"/languages/stylis","permalink":"/docs/languages/stylis","draft":false,"unlisted":false,"editUrl":"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/stylis.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Stencil","permalink":"/docs/languages/stencil"},"next":{"title":"Stylus","permalink":"/docs/languages/stylus"}}'),t=i("85893"),l=i("50065"),r=i("11802");let o={},d="Stylis",a={},c={activeEditor:"style",markup:{language:"html",content:`<div class="container">
  <h1>Hello, Stylis!</h1>
  <p>A lightweight CSS preprocessor.</p>
  <div class="box">
    <p>Nested styles with auto-prefixing</p>
  </div>
</div>
`},style:{language:"stylis",content:`.container {
  font-family: sans-serif;
  max-width: 600px;
  margin: 2em auto;
  padding: 1.5em;

  h1 {
    color: #2d3748;
  }

  p {
    color: #4a5568;
  }
}

.box {
  background: #4a90d9;
  color: white;
  padding: 1em;
  border-radius: 8px;
  user-select: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}`}},h=[{value:"Demo",id:"demo",level:2},{value:"Usage",id:"usage",level:2},{value:"Loading External Styles",id:"loading-external-styles",level:3},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Links",id:"links",level:2}];function u(e){let s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"stylis",children:"Stylis"})}),"\n","\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://stylis.js.org/",children:"Stylis"})," is a lightweight CSS preprocessor and parser. It supports CSS-like syntax with nesting, auto-prefixing, and other transformations."]}),"\n",(0,t.jsx)(s.h2,{id:"demo",children:"Demo"}),"\n","\n",(0,t.jsx)(r.Z,{config:c,height:"80vh"}),"\n",(0,t.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(s.p,{children:["Stylis code added to the ",(0,t.jsx)(s.a,{href:"/docs/features/projects#style-editor",children:"style editor"})," is compiled to CSS before being added to the ",(0,t.jsx)(s.a,{href:"/docs/features/result",children:"result page"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["For more details about CSS support in LiveCodes, including CSS processors, style imports, CSS modules, and CSS frameworks, see the ",(0,t.jsx)(s.a,{href:"/docs/features/css",children:"CSS feature documentation"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"loading-external-styles",children:"Loading External Styles"}),"\n",(0,t.jsxs)(s.p,{children:["Stylis supports importing external stylesheets using the ",(0,t.jsx)(s.code,{children:"@import"})," rule. ",(0,t.jsx)(s.a,{href:"/docs/features/module-resolution#bare-module-imports",children:"Bare module"})," specifiers are resolved to full CDN URLs."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-stylis",children:'@import "normalize.css";\n'})}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["For more information about loading and importing styles, see the ",(0,t.jsx)(s.a,{href:"/docs/features/css#style-imports",children:"Style Imports"})," documentation."]})}),"\n",(0,t.jsx)(s.h2,{id:"language-info",children:"Language Info"}),"\n",(0,t.jsx)(s.h3,{id:"name",children:"Name"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"stylis"})}),"\n",(0,t.jsx)(s.h3,{id:"extensions",children:"Extensions"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:".stylis"})}),"\n",(0,t.jsx)(s.h3,{id:"editor",children:"Editor"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"style"})}),"\n",(0,t.jsx)(s.h2,{id:"compiler",children:"Compiler"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://stylis.js.org/",children:"Stylis"})}),"\n",(0,t.jsx)(s.h3,{id:"version",children:"Version"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"stylis"}),": v4.3.6"]}),"\n",(0,t.jsx)(s.h2,{id:"code-formatting",children:"Code Formatting"}),"\n",(0,t.jsx)(s.p,{children:"Not supported."}),"\n",(0,t.jsx)(s.h2,{id:"links",children:"Links"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://stylis.js.org/",children:"Stylis Official Website"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://github.com/thysultan/stylis",children:"Stylis on GitHub"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/features/css",children:"CSS feature documentation in LiveCodes"})}),"\n"]})]})}function p(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}}}]);