(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(6),i=(n(0),n(211)),r={id:"class-mouse",title:"class: Mouse"},l={unversionedId:"api/class-mouse",id:"api/class-mouse",isDocsHomePage:!1,title:"class: Mouse",description:"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.",source:"@site/docs/api/class-mouse.md",slug:"/api/class-mouse",permalink:"/playwright/docs/next/api/class-mouse",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/class-mouse.md",version:"current",sidebar:"api",previous:{title:"class: Keyboard",permalink:"/playwright/docs/next/api/class-keyboard"},next:{title:"class: Touchscreen",permalink:"/playwright/docs/next/api/class-touchscreen"}},b=[{value:"mouse.click(x, y, options)",id:"mouseclickx-y-options",children:[]},{value:"mouse.dblclick(x, y, options)",id:"mousedblclickx-y-options",children:[]},{value:"mouse.down(options)",id:"mousedownoptions",children:[]},{value:"mouse.move(x, y, options)",id:"mousemovex-y-options",children:[]},{value:"mouse.up(options)",id:"mouseupoptions",children:[]}],c={rightToc:b};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport."),Object(i.b)("p",null,"Every ",Object(i.b)("inlineCode",{parentName:"p"},"page")," object has its own Mouse, accessible with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#pagemouse"}),Object(i.b)("inlineCode",{parentName:"a"},"page.mouse")),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// Using \u2018page.mouse\u2019 to trace a 100x100 square.\nawait page.mouse.move(0, 0);\nawait page.mouse.down();\nawait page.mouse.move(0, 100);\nawait page.mouse.move(100, 100);\nawait page.mouse.move(100, 0);\nawait page.mouse.move(0, 0);\nawait page.mouse.up();\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#mouseclickx-y-options"}),"mouse.click(x, y[, options])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#mousedblclickx-y-options"}),"mouse.dblclick(x, y[, options])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#mousedownoptions"}),"mouse.down([options])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#mousemovex-y-options"}),"mouse.move(x, y[, options])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#mouseupoptions"}),"mouse.up([options])"))),Object(i.b)("h2",{id:"mouseclickx-y-options"},"mouse.click(x, y","[, options]",")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"x")," <","[number]",">"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"y")," <","[number]",">"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',Object(i.b)("inlineCode",{parentName:"li"},"left"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"clickCount")," <","[number]","> defaults to 1. See ","[UIEvent.detail]","."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"delay")," <","[number]","> Time to wait between ",Object(i.b)("inlineCode",{parentName:"li"},"mousedown")," and ",Object(i.b)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0."))),Object(i.b)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(i.b)("p",null,"Shortcut for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#mousemovex-y-options"}),Object(i.b)("inlineCode",{parentName:"a"},"mouse.move")),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#mousedownoptions"}),Object(i.b)("inlineCode",{parentName:"a"},"mouse.down"))," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#mouseupoptions"}),Object(i.b)("inlineCode",{parentName:"a"},"mouse.up")),"."),Object(i.b)("h2",{id:"mousedblclickx-y-options"},"mouse.dblclick(x, y","[, options]",")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"x")," <","[number]",">"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"y")," <","[number]",">"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',Object(i.b)("inlineCode",{parentName:"li"},"left"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"delay")," <","[number]","> Time to wait between ",Object(i.b)("inlineCode",{parentName:"li"},"mousedown")," and ",Object(i.b)("inlineCode",{parentName:"li"},"mouseup")," in milliseconds. Defaults to 0."))),Object(i.b)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(i.b)("p",null,"Shortcut for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#mousemovex-y-options"}),Object(i.b)("inlineCode",{parentName:"a"},"mouse.move")),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#mousedownoptions"}),Object(i.b)("inlineCode",{parentName:"a"},"mouse.down")),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#mouseupoptions"}),Object(i.b)("inlineCode",{parentName:"a"},"mouse.up")),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#mousedownoptions"}),Object(i.b)("inlineCode",{parentName:"a"},"mouse.down"))," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#mouseupoptions"}),Object(i.b)("inlineCode",{parentName:"a"},"mouse.up")),"."),Object(i.b)("h2",{id:"mousedownoptions"},"mouse.down(","[options]",")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',Object(i.b)("inlineCode",{parentName:"li"},"left"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"clickCount")," <","[number]","> defaults to 1. See ","[UIEvent.detail]","."))),Object(i.b)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(i.b)("p",null,"Dispatches a ",Object(i.b)("inlineCode",{parentName:"p"},"mousedown")," event."),Object(i.b)("h2",{id:"mousemovex-y-options"},"mouse.move(x, y","[, options]",")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"x")," <","[number]",">"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"y")," <","[number]",">"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"steps")," <","[number]","> defaults to 1. Sends intermediate ",Object(i.b)("inlineCode",{parentName:"li"},"mousemove")," events."))),Object(i.b)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(i.b)("p",null,"Dispatches a ",Object(i.b)("inlineCode",{parentName:"p"},"mousemove")," event."),Object(i.b)("h2",{id:"mouseupoptions"},"mouse.up(","[options]",")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options")," <","[Object]",">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"button"),' <"left"|"right"|"middle"> Defaults to ',Object(i.b)("inlineCode",{parentName:"li"},"left"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"clickCount")," <","[number]","> defaults to 1. See ","[UIEvent.detail]","."))),Object(i.b)("li",{parentName:"ul"},"returns: <","[Promise]",">")),Object(i.b)("p",null,"Dispatches a ",Object(i.b)("inlineCode",{parentName:"p"},"mouseup")," event."))}p.isMDXComponent=!0},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,O=u["".concat(r,".").concat(s)]||u[s]||m[s]||i;return n?o.a.createElement(O,l(l({ref:t},c),{},{components:n})):o.a.createElement(O,l({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);