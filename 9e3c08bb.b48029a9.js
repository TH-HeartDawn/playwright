(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(211)),l={id:"class-dialog",title:"class: Dialog"},o={unversionedId:"api/class-dialog",id:"api/class-dialog",isDocsHomePage:!1,title:"class: Dialog",description:"Dialog] objects are dispatched by page via the ['dialog' event.",source:"@site/docs/api/class-dialog.md",slug:"/api/class-dialog",permalink:"/playwright/docs/next/api/class-dialog",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/class-dialog.md",version:"current",sidebar:"api",previous:{title:"class: ConsoleMessage",permalink:"/playwright/docs/next/api/class-consolemessage"},next:{title:"class: Download",permalink:"/playwright/docs/next/api/class-download"}},c=[{value:"dialog.accept(promptText)",id:"dialogacceptprompttext",children:[]},{value:"dialog.defaultValue()",id:"dialogdefaultvalue",children:[]},{value:"dialog.dismiss()",id:"dialogdismiss",children:[]},{value:"dialog.message()",id:"dialogmessage",children:[]},{value:"dialog.type()",id:"dialogtype",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"[Dialog]"," objects are dispatched by page via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#event-dialog"}),"'dialog'")," event."),Object(i.b)("p",null,"An example of using ",Object(i.b)("inlineCode",{parentName:"p"},"Dialog")," class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  page.on('dialog', async dialog => {\n    console.log(dialog.message());\n    await dialog.dismiss();\n    await browser.close();\n  });\n  page.evaluate(() => alert('1'));\n})();\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#dialogacceptprompttext"}),"dialog.accept([promptText])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#dialogdefaultvalue"}),"dialog.defaultValue()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#dialogdismiss"}),"dialog.dismiss()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#dialogmessage"}),"dialog.message()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#dialogtype"}),"dialog.type()"))),Object(i.b)("h2",{id:"dialogacceptprompttext"},"dialog.accept(","[promptText]",")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"promptText")," <","[string]","> A text to enter in prompt. Does not cause any effects if the dialog's ",Object(i.b)("inlineCode",{parentName:"li"},"type")," is not prompt."),Object(i.b)("li",{parentName:"ul"},"returns: <","[Promise]","> Promise which resolves when the dialog has been accepted.")),Object(i.b)("h2",{id:"dialogdefaultvalue"},"dialog.defaultValue()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <","[string]","> If dialog is prompt, returns default prompt value. Otherwise, returns empty string.")),Object(i.b)("h2",{id:"dialogdismiss"},"dialog.dismiss()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <","[Promise]","> Promise which resolves when the dialog has been dismissed.")),Object(i.b)("h2",{id:"dialogmessage"},"dialog.message()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <","[string]","> A message displayed in the dialog.")),Object(i.b)("h2",{id:"dialogtype"},"dialog.type()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <","[string]","> Dialog's type, can be one of ",Object(i.b)("inlineCode",{parentName:"li"},"alert"),", ",Object(i.b)("inlineCode",{parentName:"li"},"beforeunload"),", ",Object(i.b)("inlineCode",{parentName:"li"},"confirm")," or ",Object(i.b)("inlineCode",{parentName:"li"},"prompt"),".")))}p.isMDXComponent=!0},211:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,g=d["".concat(l,".").concat(u)]||d[u]||b[u]||i;return a?r.a.createElement(g,o(o({ref:t},s),{},{components:a})):r.a.createElement(g,o({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);