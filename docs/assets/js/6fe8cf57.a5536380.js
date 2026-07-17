"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["3428"],{85006:function(e,t,n){n.r(t),n.d(t,{default:()=>x,frontMatter:()=>d,gettingStartedParams:()=>h,assets:()=>u,metadata:()=>r,toc:()=>p,contentTitle:()=>c});var r=JSON.parse('{"id":"tutorials/getting-started-guide","title":"Getting Started Guide","description":"h1 {","source":"@site/docs/tutorials/getting-started-guide.mdx","sourceDirName":"tutorials","slug":"/tutorials/getting-started-guide","permalink":"/playground/docs/tutorials/getting-started-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/live-codes/livecodes/tree/develop/docs/docs/tutorials/getting-started-guide.mdx","tags":[],"version":"current","frontMatter":{"title":"Getting Started Guide"},"sidebar":"docsSidebar","previous":{"title":"Guides & Tutorials","permalink":"/playground/docs/tutorials/"},"next":{"title":"Building Your First App","permalink":"/playground/docs/tutorials/building-your-first-app"}}'),i=n("85893"),s=n("50065"),l=n("31705"),a=n("11802"),o=n("58500");let d={title:"Getting Started Guide"},c="Getting Started Guide",u={},h={html:`<div class="container">
  <h1 id="greeting">Hello, World!</h1>
  <input type="text" id="nameInput" placeholder="Enter your name">
  <button id="greetBtn">Greet Me!</button>
</div>
`,css:`.container {
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  color: #007bff;
  font-size: 2.5rem;
}

input {
  padding: 10px;
  font-size: 1rem;
  margin: 10px;
  border: 2px solid #007bff;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
`,js:`const greeting = document.getElementById('greeting');
const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');

greetBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name) {
    greeting.textContent = \`Hello, \${name}!\`;
  } else {
    greeting.textContent = 'Hello, World!';
  }
});
`},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Open LiveCodes",id:"step-1-open-livecodes",level:2},{value:"Step 2: Create a Simple Page",id:"step-2-create-a-simple-page",level:2},{value:"HTML Panel",id:"html-panel",level:3},{value:"CSS Panel",id:"css-panel",level:3},{value:"JavaScript Panel",id:"javascript-panel",level:3},{value:"Step 3: See Your Results",id:"step-3-see-your-results",level:2},{value:"Step 4: Save Your Project",id:"step-4-save-your-project",level:2},{value:"Congratulations!",id:"congratulations",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Tips",id:"tips",level:2}];function g(e){let t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"getting-started-guide",children:"Getting Started Guide"})}),"\n",(0,i.jsx)(t.p,{children:"This guide will walk you through creating your first project in LiveCodes."}),"\n",(0,i.jsx)(t.p,{children:"Try the completed project below:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(o.Z,{linkText:"open it in a new tab",params:h}),"."]}),"\n",(0,i.jsx)(a.Z,{params:h}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"A web browser (Chrome, Firefox, Safari, or Edge)"}),"\n",(0,i.jsx)(t.li,{children:"Basic knowledge of HTML, CSS, and JavaScript"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-1-open-livecodes",children:"Step 1: Open LiveCodes"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Navigate to ",(0,i.jsx)(t.a,{href:"https://livecodes.io",children:"livecodes.io"})]}),"\n",(0,i.jsxs)(t.li,{children:["You'll see the editor interface with three panels:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"HTML"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"CSS"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"JavaScript"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-2-create-a-simple-page",children:"Step 2: Create a Simple Page"}),"\n",(0,i.jsx)(t.p,{children:"Let's create a simple interactive greeting card."}),"\n",(0,i.jsx)(t.h3,{id:"html-panel",children:"HTML Panel"}),"\n",(0,i.jsx)(l.Z,{language:"html",children:h.html}),"\n",(0,i.jsx)(t.h3,{id:"css-panel",children:"CSS Panel"}),"\n",(0,i.jsx)(l.Z,{language:"css",children:h.css}),"\n",(0,i.jsx)(t.h3,{id:"javascript-panel",children:"JavaScript Panel"}),"\n",(0,i.jsx)(l.Z,{language:"js",children:h.js}),"\n",(0,i.jsx)(t.h2,{id:"step-3-see-your-results",children:"Step 3: See Your Results"}),"\n",(0,i.jsx)(t.p,{children:"The result panel automatically updates as you type. Try:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Entering your name in the input field"}),"\n",(0,i.jsx)(t.li,{children:'Clicking the "Greet Me!" button'}),"\n",(0,i.jsx)(t.li,{children:"Modifying the colors in the CSS"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"step-4-save-your-project",children:"Step 4: Save Your Project"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:['Click on the "',(0,i.jsx)(t.strong,{children:"Project"}),'" menu button in the toolbar']}),"\n",(0,i.jsxs)(t.li,{children:['Click "',(0,i.jsx)(t.strong,{children:"Save"}),'" to save the project (on this device)']}),"\n",(0,i.jsxs)(t.li,{children:['You can open it later from "',(0,i.jsx)(t.strong,{children:"Project menu > Open"}),'"']}),"\n",(0,i.jsxs)(t.li,{children:['Use "',(0,i.jsx)(t.strong,{children:"Project menu > Share"}),'" to get a permanent URL to your project that you can share']}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"congratulations",children:"Congratulations!"}),"\n",(0,i.jsx)(t.p,{children:"You've just built your first interactive app with LiveCodes!"}),"\n",(0,i.jsx)(t.p,{children:"Compare your version with the completed project above. Did you add any personal touches?"}),"\n",(0,i.jsx)(o.Z,{linkText:"View the completed project",params:h}),"\n",(0,i.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsx)(t.p,{children:"Now that you've created your first project, explore:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"building-your-first-app",children:"Building Your First App"})," - Create more complex applications"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/playground/docs/features/",children:"Features"})," - Learn about all LiveCodes features"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/playground/docs/features/templates",children:"Templates"})," - Use pre-built templates"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/playground/docs/features/external-resources",children:"External Resources"})," - Add libraries to your projects"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"tips",children:"Tips"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Use ",(0,i.jsx)(t.strong,{children:"Ctrl/Cmd + S"})," to manually save"]}),"\n",(0,i.jsxs)(t.li,{children:["Press ",(0,i.jsx)(t.strong,{children:"Ctrl/Cmd + Alt + S"})," to open share panel"]}),"\n",(0,i.jsxs)(t.li,{children:["Press ",(0,i.jsx)(t.strong,{children:"Ctrl/Cmd + K"})," to open the command menu"]}),"\n",(0,i.jsxs)(t.li,{children:["Enable ",(0,i.jsx)(t.strong,{children:"Auto-save"})," in user settings for automatic saving"]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},58500:function(e,t,n){n.d(t,{Z:()=>d});var r=n("85893");n("67294");var i=n("6735");function s(e){let{children:t,fallback:n}=e;return(0,i.Z)()?(0,r.jsx)(r.Fragment,{children:t?.()}):n??null}var l=n("31705"),a=n("88711"),o=n("21858");function d(e){let{params:t,config:n,code:i,language:d="js",codeTitle:c="",showLineNumbers:u=!1,formatCode:h=!0,linkText:p="Run in LiveCodes",style:g={},className:x=""}=e,j=(0,a.rP)({appUrl:o.G,params:t,config:n});return(0,r.jsxs)("div",{style:{marginBottom:"30px",...g},className:x,children:[i&&(0,r.jsx)(s,{children:()=>(0,r.jsx)(l.Z,{language:d,title:c,showLineNumbers:u,children:h?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"js";return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}(i,d):i})}),(0,r.jsxs)("a",{href:j,target:"_blank",rel:"noreferrer",children:[p,(0,r.jsx)("svg",{width:"12",height:"12","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module",style:{marginLeft:"4px"},children:(0,r.jsx)("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})})]})]})}}}]);