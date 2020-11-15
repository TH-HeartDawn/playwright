(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{130:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),c=(r(0),r(211)),o={id:"class-websocket",title:"class: WebSocket"},i={unversionedId:"api/class-websocket",id:"api/class-websocket",isDocsHomePage:!1,title:"class: WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/docs/api/class-websocket.md",slug:"/api/class-websocket",permalink:"/playwright/docs/next/api/class-websocket",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api/class-websocket.md",version:"current",sidebar:"api",previous:{title:"class: Route",permalink:"/playwright/docs/next/api/class-route"},next:{title:"class: TimeoutError",permalink:"/playwright/docs/next/api/class-timeouterror"}},l=[{value:"event: &#39;close&#39;",id:"event-close",children:[]},{value:"event: &#39;framereceived&#39;",id:"event-framereceived",children:[]},{value:"event: &#39;framesent&#39;",id:"event-framesent",children:[]},{value:"event: &#39;socketerror&#39;",id:"event-socketerror",children:[]},{value:"webSocket.isClosed()",id:"websocketisclosed",children:[]},{value:"webSocket.url()",id:"websocketurl",children:[]},{value:"webSocket.waitForEvent(event, optionsOrPredicate)",id:"websocketwaitforeventevent-optionsorpredicate",children:[]}],b={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ","[WebSocket]"," class represents websocket connections in the page."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#event-close-2"}),"event: 'close'")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#event-framereceived"}),"event: 'framereceived'")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#event-framesent"}),"event: 'framesent'")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#event-socketerror"}),"event: 'socketerror'")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#websocketisclosed"}),"webSocket.isClosed()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#websocketurl"}),"webSocket.url()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#websocketwaitforeventevent-optionsorpredicate"}),"webSocket.waitForEvent(event[, optionsOrPredicate])"))),Object(c.b)("h2",{id:"event-close"},"event: 'close'"),Object(c.b)("p",null,"Fired when the websocket closes."),Object(c.b)("h2",{id:"event-framereceived"},"event: 'framereceived'"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"<","[Object]","> web socket frame data",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"payload")," <","[string]","|","[Buffer]","> frame payload")))),Object(c.b)("p",null,"Fired when the websocket recieves a frame."),Object(c.b)("h2",{id:"event-framesent"},"event: 'framesent'"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"<","[Object]","> web socket frame data",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"payload")," <","[string]","|","[Buffer]","> frame payload")))),Object(c.b)("p",null,"Fired when the websocket sends a frame."),Object(c.b)("h2",{id:"event-socketerror"},"event: 'socketerror'"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"<","[String]","> the error message")),Object(c.b)("p",null,"Fired when the websocket has an error."),Object(c.b)("h2",{id:"websocketisclosed"},"webSocket.isClosed()"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"returns: <","[boolean]",">")),Object(c.b)("p",null,"Indicates that the web socket has been closed."),Object(c.b)("h2",{id:"websocketurl"},"webSocket.url()"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"returns: <","[string]",">")),Object(c.b)("p",null,"Contains the URL of the WebSocket."),Object(c.b)("h2",{id:"websocketwaitforeventevent-optionsorpredicate"},"webSocket.waitForEvent(event","[, optionsOrPredicate]",")"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"event")," <","[string]","> Event name, same one would pass into ",Object(c.b)("inlineCode",{parentName:"li"},"webSocket.on(event)"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"optionsOrPredicate")," <","[Function]","|","[Object]","> Either a predicate that receives an event or an options object.",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"predicate")," <","[Function]","> receives the event data and resolves to truthy value when the waiting should resolve."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"timeout")," <","[number]","> maximum time to wait for in milliseconds. Defaults to ",Object(c.b)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",Object(c.b)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextsetdefaulttimeouttimeout"}),"browserContext.setDefaultTimeout(timeout)")," or ",Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#pagesetdefaulttimeouttimeout"}),"page.setDefaultTimeout(timeout)")," methods."))),Object(c.b)("li",{parentName:"ul"},"returns: <","[Promise]","<","[Object]",">> Promise which resolves to the event data value.")),Object(c.b)("p",null,"Waits for event to fire and passes its value into the predicate function. Resolves when the predicate returns truthy value. Will throw an error if the webSocket is closed before the event\nis fired."))}s.isMDXComponent=!0},211:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||p[d]||c;return r?a.a.createElement(m,i(i({ref:t},b),{},{components:r})):a.a.createElement(m,i({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);