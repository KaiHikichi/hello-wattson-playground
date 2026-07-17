"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["1850"],{59889:function(e,s,r){r.r(s),r.d(s,{default:()=>p,frontMatter:()=>c,metadata:()=>n,assets:()=>l,purgecssConfig:()=>a,toc:()=>u,contentTitle:()=>d});var n=JSON.parse('{"id":"languages/purgecss","title":"PurgeCSS","description":"PurgeCSS is a tool to remove unused CSS from your stylesheets. It analyzes your content and CSS files to determine which selectors are actually used, then removes the unused ones to reduce file size.","source":"@site/docs/languages/purgecss.mdx","sourceDirName":"languages","slug":"/languages/purgecss","permalink":"/livecodes/docs/languages/purgecss","draft":false,"unlisted":false,"editUrl":"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/purgecss.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Pug","permalink":"/livecodes/docs/languages/pug"},"next":{"title":"Python (Wasm)","permalink":"/livecodes/docs/languages/python-wasm"}}'),o=r("85893"),t=r("50065"),i=r("11802");let c={},d="PurgeCSS",l={},a={activeEditor:"style",markup:{language:"html",content:`<div class="container">
  <h1>PurgeCSS Demo</h1>
  <p>Only the <strong>used</strong> styles are kept. Check the <strong>Compiled</strong> tab to see the purged output.</p>
  <button>Primary Button</button>
</div>
`},style:{language:"css",content:`/* used in HTML */
.container {
  font-family: sans-serif;
  max-width: 600px;
  margin: 2em auto;
}

/* used in JS */
.btn-primary {
  background: #4a90d9;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
}

/* not used */
.btn-secondary {
  background: #6c757d;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
}
.unused-class {
  color: red;
  font-size: 2em;
}
`},script:{language:"js",content:`const btn = document.querySelector('button');
btn.classList.add('btn-primary');
`},processors:["purgecss"],tools:{active:"compiled",status:"open"}},u=[{value:"Usage",id:"usage",level:2},{value:"Demo",id:"demo",level:3},{value:"Processor Info",id:"processor-info",level:2},{value:"Name",id:"name",level:3},{value:"Editor",id:"editor",level:3},{value:"Processor",id:"processor",level:2},{value:"Version",id:"version",level:3},{value:"Custom Settings",id:"custom-settings",level:2},{value:"Links",id:"links",level:2}];function h(e){let s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"purgecss",children:"PurgeCSS"})}),"\n","\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"https://purgecss.com/",children:"PurgeCSS"})," is a tool to remove unused CSS from your stylesheets. It analyzes your content and CSS files to determine which selectors are actually used, then removes the unused ones to reduce file size."]}),"\n",(0,o.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(s.p,{children:["PurgeCSS is a ",(0,o.jsx)(s.a,{href:"/livecodes/docs/features/css#css-processors",children:"CSS processor"})," that can be enabled from the style editor menu, or configured via the ",(0,o.jsx)(s.a,{href:"/livecodes/docs/configuration/configuration-object#processors",children:(0,o.jsx)(s.code,{children:"processors"})})," property of the ",(0,o.jsx)(s.a,{href:"/livecodes/docs/configuration/configuration-object",children:"configuration object"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["When enabled, PurgeCSS analyzes the ",(0,o.jsx)(s.em,{children:"compiled"})," HTML and JavaScript code in your project to identify used CSS selectors, then removes any unused styles from the CSS output."]}),"\n",(0,o.jsx)(s.p,{children:"PurgeCSS can be used alongside other processors. Multiple processors are applied in the order they appear in the style editor menu."}),"\n",(0,o.jsx)(s.h3,{id:"demo",children:"Demo"}),"\n","\n",(0,o.jsx)(i.Z,{config:a,height:"80vh"}),"\n",(0,o.jsx)(s.h2,{id:"processor-info",children:"Processor Info"}),"\n",(0,o.jsx)(s.h3,{id:"name",children:"Name"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.code,{children:"purgecss"})}),"\n",(0,o.jsx)(s.h3,{id:"editor",children:"Editor"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.code,{children:"style"})}),"\n",(0,o.jsx)(s.h2,{id:"processor",children:"Processor"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"https://purgecss.com/",children:"PurgeCSS"})}),"\n",(0,o.jsx)(s.h3,{id:"version",children:"Version"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"@fullhuman/postcss-purgecss"}),": v7.0.2"]}),"\n",(0,o.jsx)(s.h2,{id:"custom-settings",children:"Custom Settings"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/livecodes/docs/advanced/custom-settings",children:"Custom settings"})," added to the property ",(0,o.jsx)(s.code,{children:"purgecss"})," are passed as options to PurgeCSS. Please check the ",(0,o.jsx)(s.a,{href:"https://purgecss.com/configuration.html",children:"documentation"})," for full reference."]}),"\n",(0,o.jsx)(s.p,{children:"Please note that custom settings should be valid JSON (i.e. functions are not allowed)."}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Example:"})}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-json",metastring:'title="Custom Settings"',children:'{\n  "purgecss": {\n    "safelist": ["unused-class"]\n  }\n}\n'})}),"\n",(0,o.jsx)(s.h2,{id:"links",children:"Links"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://purgecss.com/",children:"PurgeCSS"})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"https://github.com/FullHuman/purgecss",children:"PurgeCSS on GitHub"})}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"/livecodes/docs/features/css#css-processors",children:"CSS Processors"})," in LiveCodes"]}),"\n"]})]})}function p(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}}}]);