"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["4054"],{29827:function(e,n,s){s.r(n),s.d(n,{markdownConfig:()=>c,styledMarkdownParams:()=>h,default:()=>x,frontMatter:()=>t,metadata:()=>d,assets:()=>o,toc:()=>m,contentTitle:()=>l});var d=JSON.parse('{"id":"languages/markdown","title":"Markdown","description":"Markdown is a text-to-HTML conversion tool for web writers.","source":"@site/docs/languages/markdown.mdx","sourceDirName":"languages","slug":"/languages/markdown","permalink":"/docs/languages/markdown","draft":false,"unlisted":false,"editUrl":"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/markdown.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Malina.js","permalink":"/docs/languages/malina"},"next":{"title":"MDX","permalink":"/docs/languages/mdx"}}'),r=s("85893"),i=s("50065"),a=s("11802");let t={},l="Markdown",o={},c={markup:{language:"markdown",content:`## Markdown

_Hello_ **World**

Ordered List:

1. item
2. item
3. item

Unordered list:

- item
- item
- item

Link:

[link](https://livecodes.io)

Image:

![image](https://placehold.co/300x200)

Table:

| header 1 | header 2 |
| -------- | -------- |
| cell 1   | cell 2   |
| cell 3   | cell 4   |

Quote:

> blockquote

Code:

\`\`\`python
print("Hello, World!")
\`\`\`
`}},h={template:"markdown",activeEditor:"style",css:`@import 'github-markdown-css';

.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
`},m=[{value:"Demo",id:"demo",level:2},{value:"Styles",id:"styles",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Mermaid Diagrams",id:"mermaid-diagrams",level:2},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Aliases",id:"aliases",level:3},{value:"Extension",id:"extension",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Custom Settings",id:"custom-settings",level:2},{value:"Starter Template",id:"starter-template",level:2},{value:"Links",id:"links",level:2}];function p(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"markdown",children:"Markdown"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://daringfireball.net/projects/markdown/",children:"Markdown"})," is a text-to-HTML conversion tool for web writers.\nMarkdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid HTML."]}),"\n",(0,r.jsx)(n.p,{children:"Markdown is now one of the world's most popular markup languages."}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"info",children:(0,r.jsxs)(n.p,{children:["Please note that MDX is also supported in LiveCodes and is ",(0,r.jsx)(n.a,{href:"/docs/languages/mdx",children:"documented here"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"demo",children:"Demo"}),"\n","\n","\n",(0,r.jsx)(a.Z,{config:c}),"\n",(0,r.jsx)(n.h2,{id:"styles",children:"Styles"}),"\n",(0,r.jsx)(n.p,{children:"By default, no styes are added. Only HTML output is generated from the Markdown code."}),"\n",(0,r.jsxs)(n.p,{children:["If you want to style the result page similar to GitHub Markdown, you can use ",(0,r.jsx)(n.a,{href:"https://github.com/sindresorhus/github-markdown-css",children:(0,r.jsx)(n.code,{children:"github-markdown-css"})}),".\nNote that the body needs to have a ",(0,r.jsx)(n.code,{children:'class="markdown-body"'})," for the styles to be applied."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="Script Editor (JS)"',children:"document.body.classList.add('markdown-body');\n"})}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n","\n",(0,r.jsx)(a.Z,{params:h,height:"80vh"}),"\n",(0,r.jsx)(n.h2,{id:"code-blocks",children:"Code Blocks"}),"\n",(0,r.jsxs)(n.p,{children:["Syntax highlighting is provided for code blocks using ",(0,r.jsx)(n.a,{href:"https://highlightjs.org/",children:"highlight.js"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"mermaid-diagrams",children:"Mermaid Diagrams"}),"\n",(0,r.jsxs)(n.p,{children:["Mermaid diagrams are also supported. See ",(0,r.jsx)(n.a,{href:"https://mermaid.ai/open-source/",children:"Mermaid documentation"})," for usage."]}),"\n",(0,r.jsx)(n.p,{children:"Example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-md",children:"```mermaid\ngraph TD\n  A--\x3eB\n  A--\x3eC\n  B--\x3eD\n```\n"})}),"\n",(0,r.jsx)(n.h2,{id:"language-info",children:"Language Info"}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"markdown"})}),"\n",(0,r.jsx)(n.h3,{id:"aliases",children:"Aliases"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"md"}),", ",(0,r.jsx)(n.code,{children:"mdown"}),", ",(0,r.jsx)(n.code,{children:"mkdn"})]}),"\n",(0,r.jsx)(n.h3,{id:"extension",children:"Extension"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:".md"})}),"\n",(0,r.jsx)(n.h3,{id:"editor",children:"Editor"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"script"})}),"\n",(0,r.jsx)(n.h2,{id:"compiler",children:"Compiler"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://marked.js.org/",children:"Marked"})}),"\n",(0,r.jsx)(n.h3,{id:"version",children:"Version"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"marked"}),": v17.0.4"]}),"\n",(0,r.jsx)(n.h2,{id:"code-formatting",children:"Code Formatting"}),"\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.a,{href:"https://prettier.io/",children:"Prettier"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"custom-settings",children:"Custom Settings"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/advanced/custom-settings",children:"Custom settings"})," added to the property ",(0,r.jsx)(n.code,{children:"markdown"})," are passed as a JSON object to ",(0,r.jsx)(n.a,{href:"https://marked.js.org/using_advanced",children:(0,r.jsx)(n.code,{children:"marked.parse"})}),". Please check the ",(0,r.jsx)(n.a,{href:"https://marked.js.org/using_advanced#options",children:"documentation"})," for full reference."]}),"\n",(0,r.jsx)(n.p,{children:"Please note that custom settings should be valid JSON (i.e. functions are not allowed)."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="Custom Settings"',children:'{\n  "markdown": {\n    "gfm": true,\n    "breaks": true\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"starter-template",children:"Starter Template"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://livecodes.io/?template=markdown",children:"https://livecodes.io/?template=markdown"})}),"\n",(0,r.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://daringfireball.net/projects/markdown/",children:"Markdown"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://marked.js.org/",children:"Marked"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.markdownguide.org/",children:"The Markdown Guide"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/languages/mdx",children:"MDX support in LiveCodes"})}),"\n"]})]})}function x(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);