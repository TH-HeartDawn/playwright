(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{138:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(211)),c={id:"class-chromiumbrowsercontext",title:"class: ChromiumBrowserContext"},i={unversionedId:"api/class-chromiumbrowsercontext",id:"version-1.6.1/api/class-chromiumbrowsercontext",isDocsHomePage:!1,title:"class: ChromiumBrowserContext",description:"* extends: [BrowserContext]",source:"@site/versioned_docs/version-1.6.1/api/class-chromiumbrowsercontext.md",slug:"/api/class-chromiumbrowsercontext",permalink:"/playwright/docs/api/class-chromiumbrowsercontext",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/versioned_docs/version-1.6.1/api/class-chromiumbrowsercontext.md",version:"1.6.1",sidebar:"version-1.6.1/api",previous:{title:"class: ChromiumBrowser",permalink:"/playwright/docs/api/class-chromiumbrowser"},next:{title:"class: ChromiumCoverage",permalink:"/playwright/docs/api/class-chromiumcoverage"}},b=[{value:"event: &#39;backgroundpage&#39;",id:"event-backgroundpage",children:[]},{value:"event: &#39;serviceworker&#39;",id:"event-serviceworker",children:[]},{value:"chromiumBrowserContext.backgroundPages()",id:"chromiumbrowsercontextbackgroundpages",children:[]},{value:"chromiumBrowserContext.newCDPSession(page)",id:"chromiumbrowsercontextnewcdpsessionpage",children:[]},{value:"chromiumBrowserContext.serviceWorkers()",id:"chromiumbrowsercontextserviceworkers",children:[]}],s={rightToc:b};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"extends: ","[BrowserContext]")),Object(a.b)("p",null,"Chromium-specific features including background pages, service worker support, etc."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const backgroundPage = await context.waitForEvent('backgroundpage');\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#event-backgroundpage"}),"event: 'backgroundpage'")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#event-serviceworker"}),"event: 'serviceworker'")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#chromiumbrowsercontextbackgroundpages"}),"chromiumBrowserContext.backgroundPages()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#chromiumbrowsercontextnewcdpsessionpage"}),"chromiumBrowserContext.newCDPSession(page)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#chromiumbrowsercontextserviceworkers"}),"chromiumBrowserContext.serviceWorkers()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#event-close"}),"event: 'close'")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#event-page"}),"event: 'page'")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextaddcookiescookies"}),"browserContext.addCookies(cookies)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextaddinitscriptscript-arg"}),"browserContext.addInitScript(script[, arg])")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextbrowser"}),"browserContext.browser()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextclearcookies"}),"browserContext.clearCookies()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextclearpermissions"}),"browserContext.clearPermissions()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextclose"}),"browserContext.close()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextcookiesurls"}),"browserContext.cookies([urls])")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextexposebindingname-playwrightbinding-options"}),"browserContext.exposeBinding(name, playwrightBinding[, options])")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextexposefunctionname-playwrightfunction"}),"browserContext.exposeFunction(name, playwrightFunction)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextgrantpermissionspermissions-options"}),"browserContext.grantPermissions(permissions[][, options])")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextnewpage"}),"browserContext.newPage()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextpages"}),"browserContext.pages()")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextrouteurl-handler"}),"browserContext.route(url, handler)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextsetdefaultnavigationtimeouttimeout"}),"browserContext.setDefaultNavigationTimeout(timeout)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextsetdefaulttimeouttimeout"}),"browserContext.setDefaultTimeout(timeout)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextsetextrahttpheadersheaders"}),"browserContext.setExtraHTTPHeaders(headers)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextsetgeolocationgeolocation"}),"browserContext.setGeolocation(geolocation)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextsethttpcredentialshttpcredentials"}),"browserContext.setHTTPCredentials(httpCredentials)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextsetofflineoffline"}),"browserContext.setOffline(offline)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextunrouteurl-handler"}),"browserContext.unroute(url[, handler])")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#browsercontextwaitforeventevent-optionsorpredicate"}),"browserContext.waitForEvent(event[, optionsOrPredicate])"))),Object(a.b)("h2",{id:"event-backgroundpage"},"event: 'backgroundpage'"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"<","[Page]",">")),Object(a.b)("p",null,"Emitted when new background page is created in the context."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"NOTE")," Only works with persistent context.")),Object(a.b)("h2",{id:"event-serviceworker"},"event: 'serviceworker'"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"<","[Worker]",">")),Object(a.b)("p",null,"Emitted when new service worker is created in the context."),Object(a.b)("h2",{id:"chromiumbrowsercontextbackgroundpages"},"chromiumBrowserContext.backgroundPages()"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"returns: <","[Array]","<","[Page]",">> All existing background pages in the context.")),Object(a.b)("h2",{id:"chromiumbrowsercontextnewcdpsessionpage"},"chromiumBrowserContext.newCDPSession(page)"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"page")," <","[Page]","> Page to create new session for."),Object(a.b)("li",{parentName:"ul"},"returns: <","[Promise]","<","[CDPSession]",">> Promise that resolves to the newly created session.")),Object(a.b)("h2",{id:"chromiumbrowsercontextserviceworkers"},"chromiumBrowserContext.serviceWorkers()"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"returns: <","[Array]","<","[Worker]",">> All existing service workers in the context.")))}l.isMDXComponent=!0},211:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,O=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return r?o.a.createElement(O,i(i({ref:t},s),{},{components:r})):o.a.createElement(O,i({ref:t},s))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);