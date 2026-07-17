"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["4120"],{63372:function(e,s,n){n.r(s),n.d(s,{default:()=>g,frontMatter:()=>r,metadata:()=>i,assets:()=>o,scssConfig:()=>c,toc:()=>h,contentTitle:()=>t});var i=JSON.parse('{"id":"languages/scss","title":"SCSS","description":"SCSS (Sassy CSS) is the main syntax of the Sass CSS preprocessor. It uses curly braces and semicolons like CSS, so every valid CSS stylesheet is also valid SCSS. It adds features like variables, nesting, mixins, and functions to CSS.","source":"@site/docs/languages/scss.mdx","sourceDirName":"languages","slug":"/languages/scss","permalink":"/playground/docs/languages/scss","draft":false,"unlisted":false,"editUrl":"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/scss.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Scheme","permalink":"/playground/docs/languages/scheme"},"next":{"title":"Solid","permalink":"/playground/docs/languages/solid"}}'),a=n("85893"),l=n("50065"),d=n("11802");let r={},t="SCSS",o={},c={activeEditor:"style",markup:{language:"html",content:`<div class="container">
  <h1>Hello, SCSS!</h1>
  <p>This is styled with <strong>SCSS</strong> syntax.</p>
  <ul class="features">
    <li>Variables</li>
    <li>Nesting</li>
    <li>Mixins</li>
  </ul>
</div>
`},style:{language:"scss",content:`$primary: #3182ce;
$bg: #f0f4f8;
$radius: 8px;

@mixin flex-center {
  display: flex;
  gap: 1em;
}

.container {
  font-family: sans-serif;
  max-width: 600px;
  margin: 2em auto;
  padding: 1.5em;
  border-radius: $radius;
  background: $bg;
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
  @include flex-center;
  list-style: none;
  padding: 0;

  li {
    background: $primary;
    color: white;
    padding: 0.5em 1em;
    border-radius: $radius;
  }
}
`}},h=[{value:"Demo",id:"demo",level:2},{value:"Usage",id:"usage",level:2},{value:"Loading External Styles",id:"loading-external-styles",level:2},{value:"Using <code>@use</code>",id:"using-use",level:3},{value:"Using <code>@import</code>",id:"using-import",level:3},{value:"Using <code>meta.load-css()</code>",id:"using-metaload-css",level:3},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Custom Settings",id:"custom-settings",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Links",id:"links",level:2}];function u(e){let s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"scss",children:"SCSS"})}),"\n","\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"https://sass-lang.com/",children:"SCSS"})," (Sassy CSS) is the main syntax of the Sass CSS preprocessor. It uses curly braces and semicolons like CSS, so every valid CSS stylesheet is also valid SCSS. It adds features like variables, nesting, mixins, and functions to CSS."]}),"\n",(0,a.jsx)(s.admonition,{type:"info",children:(0,a.jsxs)(s.p,{children:["Sass has two syntaxes. The ",(0,a.jsx)(s.strong,{children:"SCSS syntax"})," (",(0,a.jsx)(s.code,{children:".scss"}),"), which uses curly braces and semicolons like CSS, is documented here. For the ",(0,a.jsx)(s.strong,{children:"indented syntax"})," (",(0,a.jsx)(s.code,{children:".sass"}),"), see ",(0,a.jsx)(s.a,{href:"/playground/docs/languages/sass",children:"Sass"}),"."]})}),"\n",(0,a.jsx)(s.h2,{id:"demo",children:"Demo"}),"\n","\n",(0,a.jsx)(d.Z,{config:c}),"\n",(0,a.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(s.p,{children:["SCSS code added to the ",(0,a.jsx)(s.a,{href:"/playground/docs/features/projects#style-editor",children:"style editor"})," is compiled to CSS before being added to the ",(0,a.jsx)(s.a,{href:"/playground/docs/features/result",children:"result page"}),"."]}),"\n",(0,a.jsx)(s.p,{children:"SCSS uses a CSS-like syntax with curly braces and semicolons. Since it is a superset of CSS, plain CSS works as-is and you can adopt Sass features incrementally."}),"\n",(0,a.jsxs)(s.p,{children:["For more details about CSS support in LiveCodes, including CSS processors, style imports, CSS modules, and CSS frameworks, see the ",(0,a.jsx)(s.a,{href:"/playground/docs/features/css",children:"CSS feature documentation"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"loading-external-styles",children:"Loading External Styles"}),"\n",(0,a.jsxs)(s.p,{children:["SCSS supports loading external stylesheets and modules using ",(0,a.jsx)(s.code,{children:"@use"}),", ",(0,a.jsx)(s.code,{children:"@import"}),", and ",(0,a.jsx)(s.code,{children:"meta.load-css()"}),". ",(0,a.jsx)(s.a,{href:"/playground/docs/features/module-resolution#bare-module-imports",children:"Bare module"})," specifiers are resolved to full CDN URLs."]}),"\n",(0,a.jsxs)(s.h3,{id:"using-use",children:["Using ",(0,a.jsx)(s.code,{children:"@use"})]}),"\n",(0,a.jsxs)(s.p,{children:["You can load npm packages with ",(0,a.jsx)(s.code,{children:"@use"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-scss",children:"@use 'bootstrap/scss/bootstrap' as *;\n"})}),"\n",(0,a.jsxs)(s.h3,{id:"using-import",children:["Using ",(0,a.jsx)(s.code,{children:"@import"})]}),"\n",(0,a.jsx)(s.p,{children:"You can import external modules and use their mixins:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-scss",children:"@import 'sass-utils';\n\n.center {\n  @include block--center;\n  width: fit-content;\n}\n"})}),"\n",(0,a.jsxs)(s.h3,{id:"using-metaload-css",children:["Using ",(0,a.jsx)(s.code,{children:"meta.load-css()"})]}),"\n",(0,a.jsxs)(s.p,{children:["You can dynamically load stylesheets from URLs using the built-in ",(0,a.jsx)(s.code,{children:"sass:meta"})," module:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-scss",children:"@use 'sass:meta';\n\n@include meta.load-css(\n  'https://raw.githubusercontent.com/live-codes/livecodes/refs/heads/develop/src/livecodes/styles/app.scss'\n);\n"})}),"\n",(0,a.jsx)(s.admonition,{type:"tip",children:(0,a.jsxs)(s.p,{children:["For more information about loading and importing styles, see the ",(0,a.jsx)(s.a,{href:"/playground/docs/features/css#style-imports",children:"Style Imports"})," documentation."]})}),"\n",(0,a.jsx)(s.h2,{id:"language-info",children:"Language Info"}),"\n",(0,a.jsx)(s.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.code,{children:"scss"})}),"\n",(0,a.jsx)(s.h3,{id:"extensions",children:"Extensions"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.code,{children:".scss"})}),"\n",(0,a.jsx)(s.h3,{id:"editor",children:"Editor"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.code,{children:"style"})}),"\n",(0,a.jsx)(s.h2,{id:"compiler",children:"Compiler"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"https://sass-lang.com/",children:"SCSS"})," is compiled using the official ",(0,a.jsx)(s.a,{href:"https://sass-lang.com/dart-sass/",children:"Dart Sass"})," compiler (running in the browser)."]}),"\n",(0,a.jsx)(s.h3,{id:"version",children:"Version"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"sass"}),": v1.93.3"]}),"\n",(0,a.jsx)(s.h3,{id:"custom-settings",children:"Custom Settings"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/playground/docs/advanced/custom-settings",children:"Custom settings"})," added to the property ",(0,a.jsx)(s.code,{children:"scss"})," are passed as a JSON object to the Sass compiler during compile. Please check the ",(0,a.jsx)(s.a,{href:"https://sass-lang.com/documentation/js-api/interfaces/stringoptions/",children:"Sass JavaScript API documentation"})," for full reference."]}),"\n",(0,a.jsx)(s.p,{children:"Please note that custom settings should be valid JSON (i.e. functions are not allowed)."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Example:"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",metastring:'title="Custom Settings"',children:'{\n  "scss": {\n    "style": "compressed"\n  }\n}\n'})}),"\n",(0,a.jsx)(s.h2,{id:"code-formatting",children:"Code Formatting"}),"\n",(0,a.jsxs)(s.p,{children:["Using ",(0,a.jsx)(s.a,{href:"https://prettier.io/",children:"Prettier"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"links",children:"Links"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://sass-lang.com/",children:"Sass Official Website"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://sass-lang.com/documentation/",children:"Sass Documentation"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://sass-lang.com/documentation/syntax/",children:"SCSS Syntax"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/playground/docs/languages/sass",children:"Sass (indented syntax) in LiveCodes"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"/playground/docs/features/css",children:"CSS feature documentation in LiveCodes"})}),"\n"]})]})}function g(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}}}]);