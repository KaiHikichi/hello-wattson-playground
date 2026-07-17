"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["4484"],{53114:function(e,s,l){l.r(s),l.d(s,{cssConfig:()=>c,default:()=>p,frontMatter:()=>o,assets:()=>t,metadata:()=>i,toc:()=>h,contentTitle:()=>a});var i=JSON.parse('{"id":"languages/css","title":"CSS","description":"CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. It controls layout, colors, fonts, and the overall visual appearance of web pages.","source":"@site/docs/languages/css.mdx","sourceDirName":"languages","slug":"/languages/css","permalink":"/livecodes/docs/languages/css","draft":false,"unlisted":false,"editUrl":"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/css.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"C# (Wasm)","permalink":"/livecodes/docs/languages/csharp-wasm"},"next":{"title":"CSS Modules","permalink":"/livecodes/docs/languages/cssmodules"}}'),n=l("85893"),d=l("50065"),r=l("11802");let o={},a="CSS",t={},c={activeEditor:"style",markup:{language:"html",content:`<div class="container">
  <h1>Hello, LiveCodes!</h1>
  <p>This is styled with <strong>CSS</strong>.</p>
  <ul>
    <li>Flexible</li>
    <li>Powerful</li>
    <li>Beautiful</li>
  </ul>
</div>
`},style:{language:"css",content:`.container {
  font-family: sans-serif;
  max-width: 600px;
  margin: 2em auto;
  padding: 1.5em;
  border-radius: 8px;
  background: #f0f4f8;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

h1 {
  color: #2d3748;
}

p {
  color: #4a5568;
  line-height: 1.6;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1em;
}

li {
  background: #3182ce;
  color: white;
  padding: 0.5em 1em;
  border-radius: 4px;
}
`}},h=[{value:"Demo",id:"demo",level:2},{value:"Usage",id:"usage",level:2},{value:"CSS Processors",id:"css-processors",level:3},{value:"Auto-update",id:"auto-update",level:3},{value:"Style Imports",id:"style-imports",level:3},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Links",id:"links",level:2}];function u(e){let s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"css",children:"CSS"})}),"\n","\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/docs/Web/CSS",children:"CSS"})," (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. It controls layout, colors, fonts, and the overall visual appearance of web pages."]}),"\n",(0,n.jsx)(s.h2,{id:"demo",children:"Demo"}),"\n","\n",(0,n.jsx)(r.Z,{config:c}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(s.p,{children:["CSS code added to the ",(0,n.jsx)(s.a,{href:"/livecodes/docs/features/css#style-editor",children:"style editor"})," is added as-is without any compilation to the ",(0,n.jsx)(s.a,{href:"/livecodes/docs/features/result",children:"result page"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["There is no need to add a full page structure (e.g. ",(0,n.jsx)(s.code,{children:"<html>"}),", ",(0,n.jsx)(s.code,{children:"<head>"}),", ",(0,n.jsx)(s.code,{children:"<link>"}),", ",(0,n.jsx)(s.code,{children:"<style>"})," tags). LiveCodes handles this automatically."]}),"\n",(0,n.jsxs)(s.p,{children:["For more details about CSS support in LiveCodes, including CSS processors, style imports, CSS modules, and CSS frameworks, see the ",(0,n.jsx)(s.a,{href:"/livecodes/docs/features/css",children:"CSS feature documentation"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"css-processors",children:"CSS Processors"}),"\n",(0,n.jsx)(s.p,{children:"The CSS code can be further processed by one or more CSS processors. These include:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/livecodes/docs/languages/autoprefixer",children:"Autoprefixer"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/livecodes/docs/languages/postcssPresetEnv",children:"postcss-preset-env"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/livecodes/docs/languages/lightningcss",children:"Lightning CSS"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/livecodes/docs/languages/cssmodules",children:"CSS Modules"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/livecodes/docs/languages/cssnano",children:"cssnano"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/livecodes/docs/languages/purgecss",children:"PurgeCSS"})}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["See ",(0,n.jsx)(s.a,{href:"/livecodes/docs/features/css#css-processors",children:"CSS Processors"})," for details."]}),"\n",(0,n.jsx)(s.h3,{id:"auto-update",children:"Auto-update"}),"\n",(0,n.jsxs)(s.p,{children:["When ",(0,n.jsx)(s.a,{href:"/livecodes/docs/configuration/configuration-object#autoupdate",children:(0,n.jsx)(s.code,{children:"autoupdate"})})," is enabled (default), changes in the style editor do NOT trigger a full reload of the ",(0,n.jsx)(s.a,{href:"/livecodes/docs/features/result",children:"result page"}),". The updated CSS is sent to the page and applied without a reload."]}),"\n",(0,n.jsxs)(s.p,{children:["The page can be force-reloaded by clicking the run button or using the keyboard shortcut: ",(0,n.jsx)("kbd",{children:"Shift"}),"\xa0+\xa0",(0,n.jsx)("kbd",{children:"Enter"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"style-imports",children:"Style Imports"}),"\n",(0,n.jsxs)(s.p,{children:["CSS ",(0,n.jsx)(s.code,{children:"@import"})," rules with ",(0,n.jsx)(s.a,{href:"/livecodes/docs/features/module-resolution#bare-module-imports",children:"bare module"})," specifiers are resolved to full CDN URLs. See ",(0,n.jsx)(s.a,{href:"/livecodes/docs/features/css#style-imports",children:"Style Imports"})," for details."]}),"\n",(0,n.jsx)(s.h2,{id:"language-info",children:"Language Info"}),"\n",(0,n.jsx)(s.h3,{id:"name",children:"Name"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"css"})}),"\n",(0,n.jsx)(s.h3,{id:"extensions",children:"Extensions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:".css"})}),"\n",(0,n.jsx)(s.h3,{id:"editor",children:"Editor"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"style"})}),"\n",(0,n.jsx)(s.h2,{id:"compiler",children:"Compiler"}),"\n",(0,n.jsx)(s.p,{children:"None. CSS is added to the result page without compilation."}),"\n",(0,n.jsx)(s.h2,{id:"code-formatting",children:"Code Formatting"}),"\n",(0,n.jsxs)(s.p,{children:["Using ",(0,n.jsx)(s.a,{href:"https://prettier.io/",children:"Prettier"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"links",children:"Links"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS",children:"CSS Reference (MDN)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.w3schools.com/css/",children:"CSS Tutorial (W3Schools)"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/livecodes/docs/features/css",children:"CSS feature documentation in LiveCodes"})}),"\n"]})]})}function p(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}}}]);