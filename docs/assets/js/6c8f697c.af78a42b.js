"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["2289"],{97088:function(e,s,n){n.r(s),n.d(s,{default:()=>p,frontMatter:()=>a,metadata:()=>i,assets:()=>d,stylusConfig:()=>c,toc:()=>u,contentTitle:()=>o});var i=JSON.parse('{"id":"languages/stylus","title":"Stylus","description":"Stylus is an expressive, dynamic CSS preprocessor. It supports both an indented, minimal syntax (optional braces, colons and semicolons) and regular CSS-like syntax, and adds variables, nesting, mixins and functions to CSS.","source":"@site/docs/languages/stylus.mdx","sourceDirName":"languages","slug":"/languages/stylus","permalink":"/docs/languages/stylus","draft":false,"unlisted":false,"editUrl":"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/stylus.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Stylis","permalink":"/docs/languages/stylis"},"next":{"title":"Sucrase","permalink":"/docs/languages/sucrase"}}'),l=n("85893"),t=n("50065"),r=n("11802");let a={},o="Stylus",d={},c={activeEditor:"style",markup:{language:"html",content:`<div class="container">
  <h1>Hello, Stylus!</h1>
  <p>This is styled with <strong>Stylus</strong>.</p>
  <ul class="features">
    <li>Variables</li>
    <li>Nesting</li>
    <li>Mixins</li>
  </ul>
</div>
`},style:{language:"stylus",content:`primary = #3182ce
bg = #f0f4f8
radius = 8px

flex-center()
  display flex
  gap 1em

.container
  font-family sans-serif
  max-width 600px
  margin 2em auto
  padding 1.5em
  border-radius radius
  background bg
  box-shadow 0 2px 8px rgba(0, 0, 0, 0.1)

  h1
    color #2d3748

  p
    color #4a5568
    line-height 1.6

.features
  flex-center()
  list-style none
  padding 0

  li
    background primary
    color white
    padding 0.5em 1em
    border-radius radius
`}},u=[{value:"Demo",id:"demo",level:2},{value:"Usage",id:"usage",level:2},{value:"Loading External Styles",id:"loading-external-styles",level:2},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Links",id:"links",level:2}];function h(e){let s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.header,{children:(0,l.jsx)(s.h1,{id:"stylus",children:"Stylus"})}),"\n","\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.a,{href:"https://stylus-lang.com/",children:"Stylus"})," is an expressive, dynamic CSS preprocessor. It supports both an indented, minimal syntax (optional braces, colons and semicolons) and regular CSS-like syntax, and adds variables, nesting, mixins and functions to CSS."]}),"\n",(0,l.jsx)(s.h2,{id:"demo",children:"Demo"}),"\n","\n",(0,l.jsx)(r.Z,{config:c}),"\n",(0,l.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(s.p,{children:["Stylus code added to the ",(0,l.jsx)(s.a,{href:"/docs/features/projects#style-editor",children:"style editor"})," is compiled to CSS before being added to the ",(0,l.jsx)(s.a,{href:"/docs/features/result",children:"result page"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Stylus has a very flexible syntax. Braces, colons and semicolons are optional, so you can write terse, indentation-based styles or use a more CSS-like style. Variables are defined by simple assignment (e.g. ",(0,l.jsx)(s.code,{children:"primary = #3182ce"}),")."]}),"\n",(0,l.jsxs)(s.p,{children:["For more details about CSS support in LiveCodes, including CSS processors, style imports, CSS modules, and CSS frameworks, see the ",(0,l.jsx)(s.a,{href:"/docs/features/css",children:"CSS feature documentation"}),"."]}),"\n",(0,l.jsx)(s.h2,{id:"loading-external-styles",children:"Loading External Styles"}),"\n",(0,l.jsxs)(s.p,{children:["Stylus supports importing external stylesheets using the ",(0,l.jsx)(s.code,{children:"@import"})," rule. ",(0,l.jsx)(s.a,{href:"/docs/features/module-resolution#bare-module-imports",children:"Bare module"})," specifiers are resolved to full CDN URLs."]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-stylus",children:"@import 'normalize.css'\n"})}),"\n",(0,l.jsx)(s.admonition,{type:"tip",children:(0,l.jsxs)(s.p,{children:["For more information about loading and importing styles, see the ",(0,l.jsx)(s.a,{href:"/docs/features/css#style-imports",children:"Style Imports"})," documentation."]})}),"\n",(0,l.jsx)(s.h2,{id:"language-info",children:"Language Info"}),"\n",(0,l.jsx)(s.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.code,{children:"stylus"})}),"\n",(0,l.jsx)(s.h3,{id:"extensions",children:"Extensions"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.code,{children:".styl"})}),"\n",(0,l.jsx)(s.h3,{id:"editor",children:"Editor"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.code,{children:"style"})}),"\n",(0,l.jsx)(s.h2,{id:"compiler",children:"Compiler"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.a,{href:"https://stylus-lang.com/",children:"Stylus"})," is compiled using the official ",(0,l.jsx)(s.a,{href:"https://www.npmjs.com/package/stylus",children:"Stylus"})," compiler (running in the browser)."]}),"\n",(0,l.jsx)(s.h3,{id:"version",children:"Version"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.code,{children:"stylus"}),": v0.54.5"]}),"\n",(0,l.jsx)(s.h2,{id:"code-formatting",children:"Code Formatting"}),"\n",(0,l.jsx)(s.p,{children:"Code formatting is not supported for Stylus."}),"\n",(0,l.jsx)(s.h2,{id:"links",children:"Links"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://stylus-lang.com/",children:"Stylus Official Website"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://stylus-lang.com/docs/",children:"Stylus Documentation"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://github.com/stylus/stylus",children:"Stylus on GitHub"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"/docs/features/css",children:"CSS feature documentation in LiveCodes"})}),"\n"]})]})}function p(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}}}]);