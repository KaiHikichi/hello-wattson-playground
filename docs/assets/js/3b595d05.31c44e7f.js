"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["2255"],{37201:function(e,o,t){t.r(o),t.d(o,{mdxDemo:()=>h,pyDemo:()=>p,default:()=>g,frontMatter:()=>i,mdDemo:()=>l,metadata:()=>n,assets:()=>c,toc:()=>u,contentTitle:()=>a});var n=JSON.parse('{"id":"sdk/headless","title":"Headless Mode","description":"The LiveCodes SDK can be used to create playgrounds in headless mode. In this mode, no visible output is displayed in the embedding web page. However, all SDK methods are accessible (e.g. for updating code, getting compiled code, console output, result HTML, shareable URLs, formatting code, running tests, etc).","source":"@site/docs/sdk/headless.mdx","sourceDirName":"sdk","slug":"/sdk/headless","permalink":"/docs/sdk/headless","draft":false,"unlisted":false,"editUrl":"https://github.com/live-codes/livecodes/tree/develop/docs/docs/sdk/headless.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Web Components SDK","permalink":"/docs/sdk/web-components"},"next":{"title":"Advanced Topics","permalink":"/docs/advanced/"}}'),s=t("85893"),d=t("50065"),r=t("11802");let i={},a="Headless Mode",c={},l={markup:{language:"html",content:`<textarea id="editor" style="display: none;"></textarea>
<div id="output">Loading...</div>

<script type="module">
  import { createPlayground } from "https://cdn.jsdelivr.net/npm/livecodes";
  import debounce from "https://esm.sh/debounce";

  const initialCode = "# Hello, LiveCodes!\\n\\n";

  // the code editor
  const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    lineNumbers: true,
    mode: "markdown",
  });
  editor.setSize("100%", 200);
  editor.setValue(initialCode);

  // the playground
  const options = {
    headless: true,
  };

  const livecodes = await createPlayground(options);

  const compile = async () => {
    await livecodes.setConfig({
      autoupdate: false,
      markup: {
        language: "markdown",
        content: editor.doc.getValue(),
      },
    });
  };

  // watch for changes
  editor.on("change", debounce(compile, 1000));
  livecodes.watch("code", ({ code, config }) => {
    createSandbox(document.querySelector("#output"), code.markup.compiled);
  });

  await compile();

  // create a sandbox for safe execution of compiled code
  function createSandbox (container, html) {
    const iframe = document.createElement("iframe");
    iframe.src = "https://livecodes-sandbox.pages.dev/v9/";
    iframe.sandbox =
      "allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts";
    iframe.onload = () => {
      iframe.contentWindow.postMessage({ html }, "*");
    };
    container.innerHTML = "";
    container.appendChild(iframe);
    return iframe;
  };
</script>

<link rel="stylesheet" href="https://unpkg.com/codemirror@5.65.15/lib/codemirror.css" />
<script src="https://unpkg.com/codemirror@5.65.15/lib/codemirror.js"></script>
<script src="https://unpkg.com/codemirror@5.65.15/mode/markdown/markdown.js"></script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }
  #output {
    flex: 1;
  }
  #output iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
`}},h={markup:{language:"html",content:`<textarea id="editor" style="display: none;"></textarea>
<div id="output">Loading...</div>

<script type="module">
  import { createPlayground } from "https://cdn.jsdelivr.net/npm/livecodes";
  import debounce from "https://esm.sh/debounce";

  const initialCode = \`import { useState, useEffect } from 'react';

export const Hello = ({name}) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello, {name}!</h1>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
};

<Hello name="LiveCodes"></Hello>

## MDX in short

- \u{2764}\u{FE0F} Powerful
- \u{1F4BB} Everything is a component
- \u{1F527} Customizable
- \u{1F4DA} Markdown-based
- \u{1F525} Blazingly blazing fast

> from [mdxjs.com](https://mdxjs.com/)
\`;

  // the code editor
  const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    lineNumbers: true,
    mode: "markdown",
  });
  editor.setSize("100%", 200);
  editor.setValue(initialCode);

  // the playground
  const options = {
    headless: true,
    config: { autoupdate: false },
  };

  const livecodes = await createPlayground(options);

  const compile = async () => {
    await livecodes.setConfig({
      autoupdate: false,
      markup: {
        language: "mdx",
        content: editor.doc.getValue(),
      },
    });
  };

  // watch for changes
  editor.on("change", debounce(compile, 1000));
  livecodes.watch("code", ({ code, config }) => {
    createSandbox(document.querySelector("#output"), code.result);
  });

  await compile();

  // create a sandbox for safe execution of compiled code
  function createSandbox (container, html) {
    const iframe = document.createElement("iframe");
    iframe.src = "https://livecodes-sandbox.pages.dev/v7/";
    iframe.sandbox =
      "allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts";
    iframe.onload = () => {
      iframe.contentWindow.postMessage({ html }, "*");
    };
    container.innerHTML = "";
    container.appendChild(iframe);
    return iframe;
  };
</script>

<link rel="stylesheet" href="https://unpkg.com/codemirror@5.65.15/lib/codemirror.css" />
<script src="https://unpkg.com/codemirror@5.65.15/lib/codemirror.js"></script>
<script src="https://unpkg.com/codemirror@5.65.15/mode/markdown/markdown.js"></script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }
  #output {
    flex: 1;
  }
  #output iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
`}},p={markup:{language:"html",content:`<textarea id="editor" style="display: none"></textarea>
<div id="output">Loading...</div>

<script type="module">
  import { createPlayground } from "https://cdn.jsdelivr.net/npm/livecodes";
  import debounce from "https://esm.sh/debounce";

  const initialCode = \`def say_hello(name):
  return f"Hello, {name}!"

print(say_hello("LiveCodes"))
\`;

  // the code editor
  const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    lineNumbers: true,
    mode: "python",
  });
  editor.setSize("100%", 250);
  editor.setValue(initialCode);

  // the playground
  const options = {
    headless: true,
  };

  const livecodes = await createPlayground(options);

  const run = async () => {
    await livecodes.setConfig({
      autoupdate: true,
      script: {
        language: "python",
        content: editor.doc.getValue(),
      },
    });
  };

  // watch for changes
  editor.on("change", debounce(run, 1000));
  livecodes.watch("console", ({ method, args }) => {
    const output = document.querySelector("#output");
    output.innerHTML = args.join("\\n");
    if (method === "error") {
      output.style.color = "red";
    } else {
      output.style.color = "unset";
    }
  });

  await run();
</script>

<link rel="stylesheet" href="https://unpkg.com/codemirror@5.65.15/lib/codemirror.css" />
<script src="https://unpkg.com/codemirror@5.65.15/lib/codemirror.js"></script>
<script src="https://unpkg.com/codemirror@5.65.15/mode/python/python.js"></script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }
  #output {
    flex: 1;
    margin: 1em;
    white-space: pre;
    font-family: monospace;
  }
  #output iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
`}},u=[{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Markdown Editor",id:"markdown-editor",level:3},{value:"MDX Editor",id:"mdx-editor",level:3},{value:"Python Interpreter",id:"python-interpreter",level:3}];function m(e){let o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"headless-mode",children:"Headless Mode"})}),"\n","\n",(0,s.jsxs)(o.p,{children:["The LiveCodes ",(0,s.jsx)(o.a,{href:"/docs/sdk/",children:"SDK"})," can be used to create playgrounds in headless mode. In this mode, no visible output is displayed in the embedding web page. However, all ",(0,s.jsx)(o.a,{href:"/docs/sdk/js-ts#sdk-methods",children:"SDK methods"})," are accessible (e.g. for ",(0,s.jsx)(o.a,{href:"/docs/sdk/js-ts#setconfig",children:"updating code"}),", ",(0,s.jsx)(o.a,{href:"/docs/sdk/js-ts#getcode",children:"getting compiled code"}),", console output, ",(0,s.jsx)(o.a,{href:"/docs/sdk/js-ts#getcode",children:"result HTML"}),", ",(0,s.jsx)(o.a,{href:"/docs/sdk/js-ts#getshareurl",children:"shareable URLs"}),", ",(0,s.jsx)(o.a,{href:"/docs/sdk/js-ts#format",children:"formatting code"}),", ",(0,s.jsx)(o.a,{href:"/docs/sdk/js-ts#runtests",children:"running tests"}),", etc)."]}),"\n",(0,s.jsx)(o.p,{children:"This provides the power of leveraging the wide range of features and language support offered by LiveCodes, while retaining full control over the UI."}),"\n",(0,s.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(o.p,{children:["To create a headless playground, set the ",(0,s.jsx)(o.a,{href:"/docs/sdk/js-ts#embed-options",children:"embed option"})," ",(0,s.jsx)(o.a,{href:"/docs/sdk/js-ts#headless",children:(0,s.jsx)(o.code,{children:"headless"})})," to ",(0,s.jsx)(o.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Please note that in headless mode, the first parameter (",(0,s.jsx)(o.code,{children:"container"}),") of the function ",(0,s.jsx)(o.a,{href:"/docs/sdk/js-ts#createplayground",children:(0,s.jsx)(o.code,{children:"createPlayground"})})," is optional and can be omitted."]}),"\n",(0,s.jsx)("div",{style:{clear:"both"}}),"\n",(0,s.jsx)(o.p,{children:"Example:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-js",metastring:"{4}",children:"import { createPlayground } from 'livecodes';\n\ncreatePlayground({\n  headless: true,\n  config: {\n    markup: {\n      language: 'markdown',\n      content: '# Hello World!',\n    },\n  },\n}).then(async (playground) => {\n  const code = await playground.getCode();\n  console.log(code.markup.compiled); // \"<h1>Hello World!</h1>\"\n  console.log(code.result); // (result page HTML)\n});\n"})}),"\n",(0,s.jsx)(o.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(o.p,{children:"The following examples show how to use the headless mode to make a Markdown editor, an MDX editor and a Python interpreter."}),"\n",(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsx)(o.p,{children:"You may want to view the following playgrounds in full screen (using the full screen button in the top right of each playground)."})}),"\n",(0,s.jsx)(o.h3,{id:"markdown-editor",children:"Markdown Editor"}),"\n",(0,s.jsxs)(o.p,{children:["In this demo, code changes are watched using the SDK method ",(0,s.jsx)(o.a,{href:"/docs/sdk/js-ts#watch",children:(0,s.jsx)(o.code,{children:"watch('code', callback)"})}),". The callback function accepts an argument which is an object with the properties ",(0,s.jsx)(o.code,{children:"code"})," and ",(0,s.jsx)(o.code,{children:"config"})," (see ",(0,s.jsx)(o.a,{href:"/docs/sdk/js-ts#getcode",children:(0,s.jsx)(o.code,{children:"getCode"})})," and ",(0,s.jsx)(o.a,{href:"/docs/sdk/js-ts#getconfig",children:(0,s.jsx)(o.code,{children:"getConfig"})}),"). The compiled code is obtained as ",(0,s.jsx)(o.code,{children:"code.markup.compiled"}),"."]}),"\n","\n",(0,s.jsx)(r.Z,{config:l,height:"80vh"}),"\n",(0,s.jsx)(o.h3,{id:"mdx-editor",children:"MDX Editor"}),"\n",(0,s.jsxs)(o.p,{children:["In this demo, code changes are watched using the SDK method ",(0,s.jsx)(o.a,{href:"/docs/sdk/js-ts#watch",children:(0,s.jsx)(o.code,{children:"watch('code', callback)"})}),". The callback function accepts an argument which is an object with the properties ",(0,s.jsx)(o.code,{children:"code"})," and ",(0,s.jsx)(o.code,{children:"config"})," (see ",(0,s.jsx)(o.a,{href:"/docs/sdk/js-ts#getcode",children:(0,s.jsx)(o.code,{children:"getCode"})})," and ",(0,s.jsx)(o.a,{href:"/docs/sdk/js-ts#getconfig",children:(0,s.jsx)(o.code,{children:"getConfig"})}),"). The result HTML is obtained as ",(0,s.jsx)(o.code,{children:"code.result"}),"."]}),"\n",(0,s.jsx)(o.admonition,{type:"tip",children:(0,s.jsxs)(o.p,{children:["If you do not want to run the result page in the headless playground and only want to get the generated result HTML, you can set the configuration option [",(0,s.jsx)(o.code,{children:"autoupdate](../configuration/configuration-object.mdx#autoupdate) to "}),"false`."]})}),"\n","\n",(0,s.jsx)(r.Z,{config:h,height:"80vh"}),"\n",(0,s.jsx)(o.h3,{id:"python-interpreter",children:"Python Interpreter"}),"\n",(0,s.jsxs)(o.p,{children:["In this demo, console output is obtained using the SDK method ",(0,s.jsx)(o.a,{href:"/docs/sdk/js-ts#watch",children:(0,s.jsx)(o.code,{children:"watch('code', callback)"})}),". The callback function accepts an argument which is an object with the properties ",(0,s.jsx)(o.code,{children:"method"})," and ",(0,s.jsx)(o.code,{children:"args"})," indicating the console method and the arguments that were passed (as an array)."]}),"\n","\n",(0,s.jsx)(r.Z,{config:p,height:"80vh"})]})}function g(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}}}]);