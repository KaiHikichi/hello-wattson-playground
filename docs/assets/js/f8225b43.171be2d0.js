"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["318"],{73994:function(e,n,i){i.r(n),i.d(n,{clickToLoadParams:()=>p,lazyLoadParams:()=>u,embedDemoParams:()=>g,default:()=>j,frontMatter:()=>s,fullHtmlExample:()=>m,metadata:()=>d,assets:()=>h,toc:()=>x,contentTitle:()=>c});var d=JSON.parse('{"id":"tutorials/embedding-playgrounds","title":"Embedding Playgrounds","description":"const config = {","source":"@site/docs/tutorials/embedding-playgrounds.mdx","sourceDirName":"tutorials","slug":"/tutorials/embedding-playgrounds","permalink":"/playground/docs/tutorials/embedding-playgrounds","draft":false,"unlisted":false,"editUrl":"https://github.com/live-codes/livecodes/tree/develop/docs/docs/tutorials/embedding-playgrounds.mdx","tags":[],"version":"current","frontMatter":{"title":"Embedding Playgrounds"},"sidebar":"docsSidebar","previous":{"title":"Building Your First App","permalink":"/playground/docs/tutorials/building-your-first-app"},"next":{"title":"Creating Shareable URLs","permalink":"/playground/docs/tutorials/creating-shareable-urls"}}'),l=i("85893"),a=i("50065"),t=i("31705"),r=i("11802"),o=i("58500");let s={title:"Embedding Playgrounds"},c="Embedding a Code Playground",h={},g={html:`<div id="page">
  <header>
    <h1>My Code Playground</h1>
    <p>Edit the code below and see the result instantly!</p>
  </header>
  <div id="playground"></div>
</div>
`,css:`body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  background: #f5f5f5;
}
#page {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}
header {
  text-align: center;
  margin-bottom: 20px;
}
h1 {
  margin: 0 0 8px;
  color: #1a1a1a;
}
p {
  margin: 0;
  color: #666;
}
#playground {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  height: 500px;
}
`,js:`import { createPlayground } from 'livecodes';

const config = {
  markup: {
    language: 'html',
    content: \`<div class="card">
  <h2>Hello LiveCodes!</h2>
  <p>Edit this code and see changes live.</p>
  <button id="actionBtn">Click me</button>
</div>\`,
  },
  style: {
    language: 'css',
    content: \`body {
  font-family: system-ui;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background: #f0f0f0;
}
.card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  text-align: center;
}
h2 {
  margin: 0 0 12px;
  color: #333;
}
button {
  padding: 10px 24px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background: #0056b3;
}\`,
  },
  script: {
    language: 'javascript',
    content: \`const btn = document.getElementById("actionBtn");
btn.addEventListener("click", () => {
  btn.textContent = "Clicked!";
  setTimeout(() => {
    btn.textContent = "Click me";
  }, 1000);
});\`,
  },
};

await createPlayground('#playground', {
  config,
  loading: 'eager',
});
`},u={html:`<div id="page">
  <h1>Lazy Loaded Playground</h1>
  <p>Scroll down to see the playground load automatically.</p>
  <div class="spacer"></div>
  <div id="playground"></div>
</div>
`,css:`body {
  font-family: system-ui, sans-serif;
  margin: 0;
  padding: 20px;
}
.spacer {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
}
#playground {
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
`,js:`import { createPlayground } from 'livecodes';

const config = {
  markup: {
    language: 'html',
    content: '<h2>I loaded lazily!</h2><p>This playground only loads when it enters the viewport.</p>',
  },
};

createPlayground('#playground', {
  config,
  loading: 'lazy',
});
`},p={html:`<div id="page">
  <h1>Click-to-Load Playground</h1>
  <p>The playground below won't load until you click it.</p>
  <div id="playground"></div>
</div>
`,css:`body {
  font-family: system-ui, sans-serif;
  margin: 0;
  padding: 20px;
}
#playground {
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
`,js:`import { createPlayground } from 'livecodes';

const config = {
  markup: {
    language: 'html',
    content: '<h2>You clicked to load me!</h2>',
  },
};

createPlayground('#playground', {
  config,
  loading: 'click',
});
`},m=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Embedded LiveCodes Playground</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      margin: 0;
      background: #f5f5f5;
    }
    #page {
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
    }
    header {
      text-align: center;
      margin-bottom: 20px;
    }
    h1 {
      margin: 0 0 8px;
      color: #1a1a1a;
    }
    p {
      margin: 0;
      color: #666;
    }
    #playground {
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
      height: 500px;
    }
  </style>
</head>
<body>
  <div id="page">
    <header>
      <h1>My Code Playground</h1>
      <p>Edit the code below and see the result instantly!</p>
    </header>
    <div id="playground"></div>
  </div>

  <script type="module">
    import { createPlayground } from 'https://cdn.jsdelivr.net/npm/livecodes';

    const config = {
      markup: {
        language: 'html',
        content: '<div class="card">
  <h2>Hello LiveCodes!</h2>
  <p>Edit this code and see changes live.</p>
  <button id="actionBtn">Click me</button>
</div>',
      },
      style: {
        language: 'css',
        content: 'body {
  font-family: system-ui;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background: #f0f0f0;
}
.card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  text-align: center;
}
h2 {
  margin: 0 0 12px;
  color: #333;
}
button {
  padding: 10px 24px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background: #0056b3;
}',
      },
      script: {
        language: 'javascript',
        content: 'const btn = document.getElementById("actionBtn");
btn.addEventListener("click", () => {
  btn.textContent = "Clicked!";
  setTimeout(() => {
    btn.textContent = "Click me";
  }, 1000);
});',
      },
    };

    await createPlayground('#playground', {
      config,
      loading: 'eager',
    });
  </script>
</body>
</html>`,x=[{value:"What We&#39;ll Build",id:"what-well-build",level:2},{value:"Basic Embedding",id:"basic-embedding",level:2},{value:"Loading Modes",id:"loading-modes",level:2},{value:"Eager Loading (Default)",id:"eager-loading-default",level:3},{value:"Lazy Loading",id:"lazy-loading",level:3},{value:"Click-to-Load",id:"click-to-load",level:3},{value:"Full Example",id:"full-example",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Container Setup",id:"container-setup",level:3},{value:"Configuration",id:"configuration",level:3},{value:"CDN Import",id:"cdn-import",level:3},{value:"Testing Your App",id:"testing-your-app",level:2},{value:"Challenge: Enhance Your Playground",id:"challenge-enhance-your-playground",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Complete Code Summary",id:"complete-code-summary",level:2}];function y(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"embedding-a-code-playground",children:"Embedding a Code Playground"})}),"\n",(0,l.jsx)(n.p,{children:"Learn how to embed a LiveCodes playground into any web page so your users can write, edit, and run code directly on your site."}),"\n",(0,l.jsx)(n.p,{children:"Try the live demo below:"}),"\n",(0,l.jsx)(o.Z,{linkText:"Run the demo in LiveCodes",params:g}),"\n",(0,l.jsx)(r.Z,{params:g,height:"70vh"}),"\n",(0,l.jsx)(n.h2,{id:"what-well-build",children:"What We'll Build"}),"\n",(0,l.jsx)(n.p,{children:"A web page that:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Embeds a LiveCodes playground in a styled container"}),"\n",(0,l.jsx)(n.li,{children:"Pre-fills the playground with starter code"}),"\n",(0,l.jsx)(n.li,{children:"Lets users edit HTML, CSS, and JavaScript directly"}),"\n",(0,l.jsx)(n.li,{children:"Shows live results as they type"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"basic-embedding",children:"Basic Embedding"}),"\n",(0,l.jsxs)(n.p,{children:["The simplest way to embed LiveCodes is with ",(0,l.jsx)(n.code,{children:"createPlayground"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"import { createPlayground } from 'livecodes';\n\nconst config = {\n  markup: { language: 'html', content: '<h1>Hello!</h1>' },\n  style: { language: 'css', content: 'h1 { color: blue; }' },\n  script: { language: 'javascript', content: 'console.log(\"hi\")' },\n};\n\nawait createPlayground('#playground', { config });\n"})}),"\n",(0,l.jsxs)(n.p,{children:["This creates an interactive editor inside the ",(0,l.jsx)(n.code,{children:"#playground"})," element."]}),"\n",(0,l.jsx)(n.h2,{id:"loading-modes",children:"Loading Modes"}),"\n",(0,l.jsx)(n.p,{children:"LiveCodes supports three loading modes:"}),"\n",(0,l.jsx)(n.h3,{id:"eager-loading-default",children:"Eager Loading (Default)"}),"\n",(0,l.jsx)(n.p,{children:"The playground loads immediately:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"createPlayground('#playground', {\n  config,\n  loading: 'eager',\n});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"lazy-loading",children:"Lazy Loading"}),"\n",(0,l.jsx)(n.p,{children:"The playground only loads when it scrolls into view:"}),"\n",(0,l.jsx)(r.Z,{params:u,height:"90vh"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"createPlayground('#playground', {\n  config,\n  loading: 'lazy',\n});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"click-to-load",children:"Click-to-Load"}),"\n",(0,l.jsx)(n.p,{children:'Shows a "Click to load" screen until the user clicks:'}),"\n",(0,l.jsx)(r.Z,{params:p,height:"50vh"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"createPlayground('#playground', {\n  config,\n  loading: 'click',\n});\n"})}),"\n",(0,l.jsx)(n.h2,{id:"full-example",children:"Full Example"}),"\n",(0,l.jsxs)(n.p,{children:["Save this as ",(0,l.jsx)(n.code,{children:"index.html"})," and open it in a browser:"]}),"\n",(0,l.jsx)(t.Z,{language:"html",children:m}),"\n",(0,l.jsx)(n.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,l.jsx)(n.h3,{id:"container-setup",children:"Container Setup"}),"\n",(0,l.jsxs)(n.p,{children:["LiveCodes needs a container element. You can use any ",(0,l.jsx)(n.code,{children:"div"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<div id="playground"></div>\n'})}),"\n",(0,l.jsxs)(n.p,{children:["By default, the playground has a height of ",(0,l.jsx)(n.code,{children:"300px"}),". You can override this with CSS:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:"#playground {\n  height: 500px;\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Or use the ",(0,l.jsx)(n.code,{children:"data-height"})," attribute:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<div id="playground" data-height="500"></div>\n'})}),"\n",(0,l.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,l.jsxs)(n.p,{children:["Pass a ",(0,l.jsx)(n.a,{href:"/playground/docs/configuration/configuration-object",children:"config object"})," to pre-fill the playground:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-js",children:"const config = {\n  markup: {\n    language: 'html',\n    content: '<h1>Hello World</h1>',\n  },\n  style: {\n    language: 'css',\n    content: 'h1 { color: royalblue; }',\n  },\n  script: {\n    language: 'javascript',\n    content: 'console.log(\"Hello!\");',\n  },\n};\n"})}),"\n",(0,l.jsx)(n.h3,{id:"cdn-import",children:"CDN Import"}),"\n",(0,l.jsx)(n.p,{children:"For quick testing without a build step, import from jsDelivr:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:"<script type=\"module\">\n  import { createPlayground } from 'https://cdn.jsdelivr.net/npm/livecodes';\n  // ...\n<\/script>\n"})}),"\n",(0,l.jsx)(n.h2,{id:"testing-your-app",children:"Testing Your App"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Save the HTML example to a file"}),"\n",(0,l.jsx)(n.li,{children:"Open it in your browser"}),"\n",(0,l.jsx)(n.li,{children:"Edit the code in the embedded playground"}),"\n",(0,l.jsx)(n.li,{children:"Watch the result update live"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"challenge-enhance-your-playground",children:"Challenge: Enhance Your Playground"}),"\n",(0,l.jsx)(n.p,{children:"Try adding these features:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/playground/docs/configuration/configuration-object",children:"Configure"})," the playground with a custom theme"]}),"\n",(0,l.jsx)(n.li,{children:'Add a "Reset" button to restore the original config'}),"\n",(0,l.jsx)(n.li,{children:"Add a language selector to switch between different starter templates"}),"\n",(0,l.jsx)(n.li,{children:"Style the playground container to match your site's design"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/playground/docs/tutorials/creating-shareable-urls",children:"Creating Shareable URLs"}),": Let users share their edited code"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/playground/docs/sdk/js-ts",children:"SDK Methods"}),": Learn more about controlling the playground programmatically"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/playground/docs/configuration/configuration-object",children:"Configuration"}),": Explore all configuration options"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"complete-code-summary",children:"Complete Code Summary"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Concepts Covered"}),": Embedding, container setup, loading modes, configuration, CDN import"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Key SDK Functions"}),": ",(0,l.jsx)(n.code,{children:"createPlayground"})]})]})}function j(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(y,{...e})}):y(e)}},58500:function(e,n,i){i.d(n,{Z:()=>s});var d=i("85893");i("67294");var l=i("6735");function a(e){let{children:n,fallback:i}=e;return(0,l.Z)()?(0,d.jsx)(d.Fragment,{children:n?.()}):i??null}var t=i("31705"),r=i("88711"),o=i("21858");function s(e){let{params:n,config:i,code:l,language:s="js",codeTitle:c="",showLineNumbers:h=!1,formatCode:g=!0,linkText:u="Run in LiveCodes",style:p={},className:m=""}=e,x=(0,r.rP)({appUrl:o.G,params:n,config:i});return(0,d.jsxs)("div",{style:{marginBottom:"30px",...p},className:m,children:[l&&(0,d.jsx)(a,{children:()=>(0,d.jsx)(t.Z,{language:s,title:c,showLineNumbers:h,children:g?function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"js";return window.prettier?.format(e,{parser:"html"===n?"html":"babel",plugins:window.prettierPlugins})}(l,s):l})}),(0,d.jsxs)("a",{href:x,target:"_blank",rel:"noreferrer",children:[u,(0,d.jsx)("svg",{width:"12",height:"12","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module",style:{marginLeft:"4px"},children:(0,d.jsx)("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})})]})]})}}}]);