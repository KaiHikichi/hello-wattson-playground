"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["4343"],{89311:function(e,n,r){r.r(n),r.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>t,assets:()=>h,colorGeneratorParams:()=>u,toc:()=>p,contentTitle:()=>c});var t=JSON.parse('{"id":"tutorials/building-your-first-app","title":"Building Your First App","description":".container {","source":"@site/docs/tutorials/building-your-first-app.mdx","sourceDirName":"tutorials","slug":"/tutorials/building-your-first-app","permalink":"/docs/tutorials/building-your-first-app","draft":false,"unlisted":false,"editUrl":"https://github.com/live-codes/livecodes/tree/develop/docs/docs/tutorials/building-your-first-app.mdx","tags":[],"version":"current","frontMatter":{"title":"Building Your First App"},"sidebar":"docsSidebar","previous":{"title":"Getting Started Guide","permalink":"/docs/tutorials/getting-started-guide"},"next":{"title":"Embedding Playgrounds","permalink":"/docs/tutorials/embedding-playgrounds"}}'),i=r("85893"),l=r("50065"),o=r("31705"),s=r("11802"),a=r("58500");let d={title:"Building Your First App"},c="Building Your First App",h={},u={html:`<div class="container">
  <h1>Color Generator</h1>
  <div class="color-display" id="colorDisplay">
    <span id="colorCode">#3498db</span>
  </div>
  <button id="generateBtn">Generate Color</button>
  <p class="hint">Click the button to generate a random color!</p>
</div>
`,css:`body {
  margin: 0;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #3498db;
  transition: background 0.5s ease;
}

.container {
  text-align: center;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

h1 {
  margin: 0 0 30px 0;
  color: #333;
}

.color-display {
  background: #f0f0f0;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 30px;
}

#colorCode {
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  color: #333;
}

#generateBtn {
  background: #333;
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 1.1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s;
}

#generateBtn:hover {
  transform: scale(1.05);
}

#generateBtn:active {
  transform: scale(0.95);
}

.hint {
  margin-top: 20px;
  color: #666;
  font-size: 0.9rem;
}
`,js:`const colorDisplay = document.getElementById('colorDisplay');
const colorCode = document.getElementById('colorCode');
const generateBtn = document.getElementById('generateBtn');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateColor() {
  const newColor = getRandomColor();
  document.body.style.background = newColor;
  colorCode.textContent = newColor;
}

generateBtn.addEventListener('click', updateColor);

// Generate a color on page load
updateColor();
`},p=[{value:"What We&#39;ll Build",id:"what-well-build",level:2},{value:"Project Setup",id:"project-setup",level:2},{value:"Implementation",id:"implementation",level:2},{value:"HTML Structure",id:"html-structure",level:3},{value:"Styling",id:"styling",level:3},{value:"JavaScript Logic",id:"javascript-logic",level:3},{value:"How It Works",id:"how-it-works",level:2},{value:"Testing Your App",id:"testing-your-app",level:2},{value:"Challenge: Enhance Your App",id:"challenge-enhance-your-app",level:2},{value:"Congratulations!",id:"congratulations",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Complete Code Summary",id:"complete-code-summary",level:2}];function g(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"building-your-first-app",children:"Building Your First App"})}),"\n",(0,i.jsx)(n.p,{children:"Learn how to build a simple color generator app using LiveCodes. This app will let users click a button to generate random background colors."}),"\n",(0,i.jsx)(n.p,{children:"Try the completed project below:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(a.Z,{linkText:"open it in a new tab",params:u}),"."]}),"\n",(0,i.jsx)(s.Z,{params:u}),"\n",(0,i.jsx)(n.h2,{id:"what-well-build",children:"What We'll Build"}),"\n",(0,i.jsx)(n.p,{children:"A fun color generator with:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Random color generation"}),"\n",(0,i.jsx)(n.li,{children:"Display the color code"}),"\n",(0,i.jsx)(n.li,{children:"Simple, clean interface"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"project-setup",children:"Project Setup"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Open ",(0,i.jsx)(n.a,{href:"https://livecodes.io",children:"LiveCodes"})]}),"\n",(0,i.jsx)(n.li,{children:"We'll use HTML, CSS, and JavaScript"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.h3,{id:"html-structure",children:"HTML Structure"}),"\n",(0,i.jsx)(o.Z,{language:"html",children:u.html}),"\n",(0,i.jsx)(n.h3,{id:"styling",children:"Styling"}),"\n",(0,i.jsx)(o.Z,{language:"css",children:u.css}),"\n",(0,i.jsx)(n.h3,{id:"javascript-logic",children:"JavaScript Logic"}),"\n",(0,i.jsx)(o.Z,{language:"js",children:u.js}),"\n",(0,i.jsx)(n.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"HTML"}),": Creates a simple layout with a color display and button"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CSS"}),": Styles the interface and adds smooth transitions"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JavaScript"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getRandomColor()"}),": Generates a random hex color"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"updateColor()"}),": Changes the background and displays the color code"]}),"\n",(0,i.jsx)(n.li,{children:"Event listener: Triggers color change on button click"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"testing-your-app",children:"Testing Your App"}),"\n",(0,i.jsx)(n.p,{children:"Try these features:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Click "Generate Color" multiple times'}),"\n",(0,i.jsx)(n.li,{children:"Watch the smooth color transitions"}),"\n",(0,i.jsx)(n.li,{children:"See the color code update"}),"\n",(0,i.jsx)(n.li,{children:"Notice the button hover and click effects"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"challenge-enhance-your-app",children:"Challenge: Enhance Your App"}),"\n",(0,i.jsx)(n.p,{children:"Try adding these features:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Copy color code to clipboard when clicked"}),"\n",(0,i.jsx)(n.li,{children:"Add a history of recent colors"}),"\n",(0,i.jsx)(n.li,{children:"Let users save their favorite colors"}),"\n",(0,i.jsx)(n.li,{children:"Add different color format options (RGB, HSL)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"congratulations",children:"Congratulations!"}),"\n",(0,i.jsx)(n.p,{children:"You've just built your color generator app with LiveCodes!"}),"\n",(0,i.jsx)(n.p,{children:"Compare your version with the completed project above. Did you add any personal touches?"}),"\n",(0,i.jsx)(a.Z,{linkText:"View the completed project",params:u}),"\n",(0,i.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/features/external-resources",children:"External Resources"})," - Add libraries like color manipulation tools"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/docs/tutorials/getting-started-guide",children:"Getting Started Guide"})," - Review the basics"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"complete-code-summary",children:"Complete Code Summary"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Concepts Covered"}),": DOM manipulation, events, random generation, CSS transitions"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Time to Build"}),": 10-15 minutes"]})]})}function x(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},58500:function(e,n,r){r.d(n,{Z:()=>d});var t=r("85893");r("67294");var i=r("6735");function l(e){let{children:n,fallback:r}=e;return(0,i.Z)()?(0,t.jsx)(t.Fragment,{children:n?.()}):r??null}var o=r("31705"),s=r("88711"),a=r("21858");function d(e){let{params:n,config:r,code:i,language:d="js",codeTitle:c="",showLineNumbers:h=!1,formatCode:u=!0,linkText:p="Run in LiveCodes",style:g={},className:x=""}=e,m=(0,s.rP)({appUrl:a.G,params:n,config:r});return(0,t.jsxs)("div",{style:{marginBottom:"30px",...g},className:x,children:[i&&(0,t.jsx)(l,{children:()=>(0,t.jsx)(o.Z,{language:d,title:c,showLineNumbers:h,children:u?function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"js";return window.prettier?.format(e,{parser:"html"===n?"html":"babel",plugins:window.prettierPlugins})}(i,d):i})}),(0,t.jsxs)("a",{href:m,target:"_blank",rel:"noreferrer",children:[p,(0,t.jsx)("svg",{width:"12",height:"12","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module",style:{marginLeft:"4px"},children:(0,t.jsx)("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})})]})]})}}}]);