"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["5302"],{94458:function(e,s,i){i.r(s),i.d(s,{default:()=>g,frontMatter:()=>o,metadata:()=>n,assets:()=>d,lessConfig:()=>c,toc:()=>h,contentTitle:()=>a});var n=JSON.parse('{"id":"languages/less","title":"Less","description":"Less (Leaner Style Sheets) is a CSS preprocessor that extends CSS with variables, nesting, mixins, functions and operations. It uses a CSS-like syntax with curly braces and semicolons, so every valid CSS stylesheet is also valid Less.","source":"@site/docs/languages/less.mdx","sourceDirName":"languages","slug":"/languages/less","permalink":"/livecodes/docs/languages/less","draft":false,"unlisted":false,"editUrl":"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/less.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Julia","permalink":"/livecodes/docs/languages/julia"},"next":{"title":"Lightning CSS","permalink":"/livecodes/docs/languages/lightningcss"}}'),l=i("85893"),t=i("50065"),r=i("11802");let o={},a="Less",d={},c={activeEditor:"style",markup:{language:"html",content:`<div class="container">
  <h1>Hello, Less!</h1>
  <p>This is styled with <strong>Less</strong>.</p>
  <ul class="features">
    <li>Variables</li>
    <li>Nesting</li>
    <li>Mixins</li>
  </ul>
</div>
`},style:{language:"less",content:`@primary: #3182ce;
@bg: #f0f4f8;
@radius: 8px;

.flex-center() {
  display: flex;
  gap: 1em;
}

.container {
  font-family: sans-serif;
  max-width: 600px;
  margin: 2em auto;
  padding: 1.5em;
  border-radius: @radius;
  background: @bg;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h1 {
    color: #2d3748;
  }

  p {
    color: #4a5568;
    line-height: 1.6;
  }
}

.features {
  .flex-center();
  list-style: none;
  padding: 0;

  li {
    background: @primary;
    color: white;
    padding: 0.5em 1em;
    border-radius: @radius;
  }
}
`}},h=[{value:"Demo",id:"demo",level:2},{value:"Usage",id:"usage",level:2},{value:"Loading External Styles",id:"loading-external-styles",level:2},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Custom Settings",id:"custom-settings",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Links",id:"links",level:2}];function u(e){let s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"less",children:"Less"})}),"\n","\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.a,{href:"https://lesscss.org/",children:"Less"})," (Leaner Style Sheets) is a CSS preprocessor that extends CSS with variables, nesting, mixins, functions and operations. It uses a CSS-like syntax with curly braces and semicolons, so every valid CSS stylesheet is also valid Less."]}),"\n",(0,l.jsx)(s.h2,{id:"demo",children:"Demo"}),"\n","\n",(0,l.jsx)(r.Z,{config:c}),"\n",(0,l.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(s.p,{children:["Less code added to the ",(0,l.jsx)(s.a,{href:"/livecodes/docs/features/projects#style-editor",children:"style editor"})," is compiled to CSS before being added to the ",(0,l.jsx)(s.a,{href:"/livecodes/docs/features/result",children:"result page"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Less uses a CSS-like syntax with curly braces and semicolons. Variables are prefixed with ",(0,l.jsx)(s.code,{children:"@"}),", and mixins let you reuse groups of declarations."]}),"\n",(0,l.jsxs)(s.p,{children:["For more details about CSS support in LiveCodes, including CSS processors, style imports, CSS modules, and CSS frameworks, see the ",(0,l.jsx)(s.a,{href:"/livecodes/docs/features/css",children:"CSS feature documentation"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"loading-external-styles",children:"Loading External Styles"}),"\n",(0,l.jsxs)(s.p,{children:["Less supports importing external stylesheets using the ",(0,l.jsx)(s.code,{children:"@import"})," rule. ",(0,l.jsx)(s.a,{href:"/livecodes/docs/features/module-resolution#bare-module-imports",children:"Bare module"})," specifiers are resolved to full CDN URLs."]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-less",children:"@import 'bootstrap/less/bootstrap';\n"})}),"\n",(0,l.jsx)(s.admonition,{type:"tip",children:(0,l.jsxs)(s.p,{children:["For more information about loading and importing styles, see the ",(0,l.jsx)(s.a,{href:"/livecodes/docs/features/css#style-imports",children:"Style Imports"})," documentation."]})}),"\n",(0,l.jsx)(s.h2,{id:"language-info",children:"Language Info"}),"\n",(0,l.jsx)(s.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.code,{children:"less"})}),"\n",(0,l.jsx)(s.h3,{id:"extensions",children:"Extensions"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.code,{children:".less"})}),"\n",(0,l.jsx)(s.h3,{id:"editor",children:"Editor"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.code,{children:"style"})}),"\n",(0,l.jsx)(s.h2,{id:"compiler",children:"Compiler"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.a,{href:"https://lesscss.org/",children:"Less"})," is compiled using the official ",(0,l.jsx)(s.a,{href:"https://lesscss.org/usage/#using-less-in-the-browser",children:"Less.js"})," compiler (running in the browser)."]}),"\n",(0,l.jsx)(s.h3,{id:"version",children:"Version"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"less"}),": v4.4.2"]}),"\n",(0,l.jsx)(s.h3,{id:"custom-settings",children:"Custom Settings"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.a,{href:"/livecodes/docs/advanced/custom-settings",children:"Custom settings"})," added to the property ",(0,l.jsx)(s.code,{children:"less"})," are passed as a JSON object to the Less compiler during compile. Please check the ",(0,l.jsx)(s.a,{href:"https://lesscss.org/usage/#less-options",children:"Less options documentation"})," for full reference."]}),"\n",(0,l.jsx)(s.p,{children:"Please note that custom settings should be valid JSON (i.e. functions are not allowed)."}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"Example:"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-json",metastring:'title="Custom Settings"',children:'{\n  "less": {\n    "math": "strict"\n  }\n}\n'})}),"\n",(0,l.jsx)(s.h2,{id:"code-formatting",children:"Code Formatting"}),"\n",(0,l.jsxs)(s.p,{children:["Using ",(0,l.jsx)(s.a,{href:"https://prettier.io/",children:"Prettier"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"links",children:"Links"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://lesscss.org/",children:"Less Official Website"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://lesscss.org/features/",children:"Less Documentation"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://github.com/less/less.js",children:"Less on GitHub"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/livecodes/docs/features/css",children:"CSS feature documentation in LiveCodes"})}),"\n"]})]})}function g(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}}}]);