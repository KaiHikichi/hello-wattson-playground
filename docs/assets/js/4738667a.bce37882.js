"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([["9826"],{76183:function(e,i,a){a.r(i),a.d(i,{default:()=>u,frontMatter:()=>l,javaConfig:()=>h,assets:()=>o,metadata:()=>r,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"languages/java","title":"Java","description":"Java is a high-level, general-purpose, memory-safe, object-oriented programming language.","source":"@site/docs/languages/java.mdx","sourceDirName":"languages","slug":"/languages/java","permalink":"/docs/languages/java","draft":false,"unlisted":false,"editUrl":"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/java.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"docsSidebar","previous":{"title":"Imba","permalink":"/docs/languages/imba"},"next":{"title":"JavaScript","permalink":"/docs/languages/javascript"}}'),t=a("85893"),n=a("50065"),s=a("11802");let l={},d="Java",o={},h={activeEditor:"script",script:{language:"java",content:`public class BinarySearchSnippet {
  /**
   * Search an item with binarySearch algorithm.
   *
   * @param arr sorted array to search
   * @param item an item to search
   * @return if item is found, return the index position of the array item otherwise return -1
   */

  public static int binarySearch(int[] arr, int left, int right, int item) {
    if (right >= left) {
      int mid = left + (right - left) / 2;
      if (arr[mid] == item) {
        return mid;
      }

      if (arr[mid] > item) {
        return binarySearch(arr, left, mid - 1, item);
      }

      return binarySearch(arr, mid + 1, right, item);
    }
    return -1;
  }

  public static void main(String[] args) {
    int[] sortedArray = {1, 3, 5, 7, 9, 11, 13, 15};
    int itemToSearch = 7;

    int result = binarySearch(sortedArray, 0, sortedArray.length - 1, itemToSearch);

    if (result == -1) {
      System.out.println("Result: Item not found in the array.");
    } else {
      System.out.println("Result: Item found at index -> " + result);
    }
  }
}
`},mode:"simple",editor:"auto",tools:{status:"full"}},c=[{value:"Usage",id:"usage",level:2},{value:"Communication with JavaScript",id:"communication-with-javascript",level:3},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Extension",id:"extension",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Live Reload",id:"live-reload",level:2},{value:"Starter Template",id:"starter-template",level:2},{value:"Links",id:"links",level:2}];function p(e){let i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"java",children:"Java"})}),"\n",(0,t.jsx)(i.p,{children:"Java is a high-level, general-purpose, memory-safe, object-oriented programming language."}),"\n",(0,t.jsxs)(i.p,{children:["In LiveCodes, Java runs in the browser using ",(0,t.jsx)(i.a,{href:"https://github.com/plasma-umass/doppio",children:"DoppioJVM"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(i.p,{children:"Demo:"}),"\n","\n","\n",(0,t.jsx)(s.Z,{config:h}),"\n",(0,t.jsx)(i.h3,{id:"communication-with-javascript",children:"Communication with JavaScript"}),"\n",(0,t.jsxs)(i.p,{children:["The Java code runs in the context of the ",(0,t.jsx)(i.a,{href:"/docs/features/result",children:"result page"}),".\nA few helper properties and methods are available in the browser global ",(0,t.jsx)(i.code,{children:"livecodes.java"})," object:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"livecodes.java.input"}),": the initial standard input that is passed to the Java code."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"livecodes.java.loaded"}),": A promise that resolves when the Java environment is loaded. Any other helpers should be used after this promise resolves."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"livecodes.java.output"}),": the standard output."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"livecodes.java.error"}),": the standard error."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"livecodes.java.exitCode"}),": the exit code."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"livecodes.java.run"}),": a function that runs the Java code with new input. This function takes a string as input and returns a promise that resolves when the Java code is done running. The promise resolves with an object containing the ",(0,t.jsx)(i.code,{children:"input"}),", ",(0,t.jsx)(i.code,{children:"output"}),", ",(0,t.jsx)(i.code,{children:"error"}),", and ",(0,t.jsx)(i.code,{children:"exitCode"})," properties."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Example:"}),"\n",(0,t.jsx)(s.Z,{template:"java",params:{activeEditor:"markup"},height:"80vh"}),"\n",(0,t.jsx)(i.h2,{id:"language-info",children:"Language Info"}),"\n",(0,t.jsx)(i.h3,{id:"name",children:"Name"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"java"})}),"\n",(0,t.jsx)(i.h3,{id:"extension",children:"Extension"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:".java"})}),"\n",(0,t.jsx)(i.h3,{id:"editor",children:"Editor"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"script"})}),"\n",(0,t.jsx)(i.h2,{id:"compiler",children:"Compiler"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/plasma-umass/doppio",children:"DoppioJVM"})}),"\n",(0,t.jsx)(i.h3,{id:"version",children:"Version"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"DoppioJVM"}),": v0.5.0, which runs Java 8 JDK."]}),"\n",(0,t.jsx)(i.h2,{id:"code-formatting",children:"Code Formatting"}),"\n",(0,t.jsxs)(i.p,{children:["Using ",(0,t.jsx)(i.a,{href:"https://prettier.io",children:"Prettier"})," with the ",(0,t.jsx)(i.a,{href:"https://github.com/jhipster/prettier-java",children:"Prettier Java plugin"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"live-reload",children:"Live Reload"}),"\n",(0,t.jsx)(i.p,{children:"By default, new code changes are sent to the result page for re-evaluation without a full page reload, to avoid the need to reload the Java environment."}),"\n",(0,t.jsxs)(i.p,{children:["This behavior can be disabled by adding the code comment ",(0,t.jsx)(i.code,{children:"// __livecodes_reload__"})," to the code, which will force a full page reload.\nThis comment can be added in the ",(0,t.jsxs)(i.a,{href:"/docs/configuration/configuration-object#markup",children:[(0,t.jsx)(i.code,{children:"hiddenContent"})," property of the editor"]})," for embedded playgrounds."]}),"\n",(0,t.jsx)(i.h2,{id:"starter-template",children:"Starter Template"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://livecodes.io/?template=java",children:"https://livecodes.io/?template=java"})}),"\n",(0,t.jsx)(i.h2,{id:"links",children:"Links"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://www.java.com/",children:"Java"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"https://github.com/plasma-umass/doppio",children:"DoppioJVM"})}),"\n"]})]})}function u(e={}){let{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);