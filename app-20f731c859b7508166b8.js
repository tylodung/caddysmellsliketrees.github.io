webpackJsonp([0xd2a57dc1d883],{39:function(n,e,o){"use strict";function t(n,e,o){var t=a.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function r(n,e,o){return a.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=r;var a=[{plugin:o(232),options:{plugins:[]}},{plugin:o(231),options:{plugins:[]}}]},99:function(n,e,o){"use strict";var t;e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":o(201),"component---src-templates-lyrics-template-js":o(207),"component---src-pages-404-js":o(203),"component---src-pages-about-js":o(204),"component---src-pages-index-js":o(205),"component---src-pages-lyrics-js":o(206)},e.json=(t={"layout-index.json":o(4),"offline-plugin-app-shell-fallback.json":o(229)},t["layout-index.json"]=o(4),t["lyrics-bez-imeni.json"]=o(213),t["layout-index.json"]=o(4),t["lyrics-chernoknizhnica.json"]=o(214),t["layout-index.json"]=o(4),t["lyrics-gerbarij.json"]=o(215),t["layout-index.json"]=o(4),t["lyrics-igrushki.json"]=o(216),t["layout-index.json"]=o(4),t["lyrics-kluviki-not.json"]=o(217),t["layout-index.json"]=o(4),t["lyrics-krasnaya-pesnya.json"]=o(218),t["layout-index.json"]=o(4),t["lyrics-les.json"]=o(219),t["layout-index.json"]=o(4),t["lyrics-malchik-batiskaf.json"]=o(220),t["layout-index.json"]=o(4),t["lyrics-malo.json"]=o(221),t["layout-index.json"]=o(4),t["lyrics-podrasti.json"]=o(222),t["layout-index.json"]=o(4),t["lyrics-saga-o-ronine.json"]=o(223),t["layout-index.json"]=o(4),t["lyrics-teplo-bezdonnoe.json"]=o(224),t["layout-index.json"]=o(4),t["lyrics-terem.json"]=o(225),t["layout-index.json"]=o(4),t["lyrics-to-li.json"]=o(226),t["layout-index.json"]=o(4),t["lyrics-v-kluvikah.json"]=o(227),t["layout-index.json"]=o(4),t["lyrics-vnutri-gerbariya.json"]=o(228),t["layout-index.json"]=o(4),t["404.json"]=o(208),t["layout-index.json"]=o(4),t["about.json"]=o(210),t["layout-index.json"]=o(4),t["index.json"]=o(211),t["layout-index.json"]=o(4),t["lyrics.json"]=o(212),t["layout-index.json"]=o(4),t["404-html.json"]=o(209),t),e.layouts={"layout---index":o(202)}},100:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},s=o(1),c=t(s),l=o(3),p=t(l),f=o(64),d=t(f),m=o(27),y=t(m),h=o(39),g=function(n){var e=n.children;return c.default.createElement("div",null,e())},j=function(n){function e(o){r(this,e);var t=a(this,n.call(this)),u=o.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),t.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},t}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=d.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;d.default.getPage(t.pathname)||(t=i({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;y.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:g,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);j.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=j,n.exports=e.default},27:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(263),a=t(r),u=(0,a.default)();n.exports=u},101:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(38),a=o(65),u=t(a),i={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),a=(0,u.default)(t,e);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(a,{path:n.path})||(0,r.matchPath)(a,{path:n.matchPath}))return s=n,i[a]=n,!0}else{if((0,r.matchPath)(a,{path:n.path,exact:!0}))return s=n,i[a]=n,!0;if((0,r.matchPath)(a,{path:n.path+"index.html"}))return s=n,i[a]=n,!0}return!1}),s}}},102:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(57),a=t(r),u=o(39),i=(0,u.apiRunner)("replaceHistory"),s=i[0],c=s||(0,a.default)();n.exports=c},209:function(n,e,o){o(2),n.exports=function(n){return o.e(0xa2868bfb69fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(239)})})}},208:function(n,e,o){o(2),n.exports=function(n){return o.e(0xe70826b53c04,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(240)})})}},210:function(n,e,o){o(2),n.exports=function(n){return o.e(0xf927f8900006,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(241)})})}},211:function(n,e,o){o(2),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(242)})})}},4:function(n,e,o){o(2),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(60)})})}},213:function(n,e,o){o(2),n.exports=function(n){return o.e(43474852642065,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(243)})})}},214:function(n,e,o){o(2),n.exports=function(n){return o.e(67331065354807,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(244)})})}},215:function(n,e,o){o(2),n.exports=function(n){return o.e(56721775322790,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(245)})})}},216:function(n,e,o){o(2),n.exports=function(n){return o.e(99633747556859,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(246)})})}},217:function(n,e,o){o(2),n.exports=function(n){return o.e(0x92cab186e2d9,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(247)})})}},218:function(n,e,o){o(2),n.exports=function(n){return o.e(0xfc2991e778bd,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(248)})})}},219:function(n,e,o){o(2),n.exports=function(n){return o.e(0xb1df5898ea2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(249)})})}},220:function(n,e,o){o(2),n.exports=function(n){return o.e(0x9406883a1fff,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(250)})})}},221:function(n,e,o){o(2),n.exports=function(n){return o.e(0xa7ca08ce9655,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(251)})})}},222:function(n,e,o){o(2),n.exports=function(n){return o.e(68064403111057,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(252)})})}},223:function(n,e,o){o(2),n.exports=function(n){return o.e(0xaa056edfad8e,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(253)})})}},224:function(n,e,o){o(2),n.exports=function(n){return o.e(256148043140,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(254)})})}},225:function(n,e,o){o(2),n.exports=function(n){return o.e(0x8839b82067ca,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(255)})})}},226:function(n,e,o){o(2),n.exports=function(n){return o.e(55229760752883,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(256)})})}},227:function(n,e,o){o(2),n.exports=function(n){return o.e(0x6be5cde988db,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(257)})})}},228:function(n,e,o){o(2),n.exports=function(n){return o.e(96807092128977,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(258)})})}},212:function(n,e,o){o(2),n.exports=function(n){return o.e(20711023925468,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(259)})})}},229:function(n,e,o){o(2),n.exports=function(n){return o.e(0xbf4c176e203a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(260)})})}},202:function(n,e,o){o(2),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(103)})})}},64:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=o(1),a=(t(r),o(101)),u=t(a),i=o(27),s=t(i),c=o(65),l=t(c),p=void 0,f={},d={},m={},y={},h={},g=[],j=[],x={},v="",k=[],R={},b=function(n){return n&&n.default||n},C=void 0,N=!0,P=[],_={},w={},E=5;C=o(104)({getNextQueuedResources:function(){return k.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){k=k.filter(function(e){return e!==n}),C.onResourcedFinished(n)})}}),s.default.on("onPreLoadPageResources",function(n){C.onPreLoadPageResources(n)}),s.default.on("onPostLoadPageResources",function(n){C.onPostLoadPageResources(n)});var O=function(n,e){return R[n]>R[e]?1:R[n]<R[e]?-1:0},S=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},L=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(y[e])n.nextTick(function(){o(null,y[e])});else{var t=void 0;t="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],t(function(n,t){y[e]=t,P.push({resource:e,succeeded:!n}),w[e]||(w[e]=n),P=P.slice(-E),o(n,t)})}},D=function(e,o){h[e]?n.nextTick(function(){o(null,h[e])}):w[e]?n.nextTick(function(){o(w[e])}):L(e,function(n,t){if(n)o(n);else{var r=b(t());h[e]=r,o(n,r)}})},T=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=P.find(function(n){return n.succeeded});return!!e},A=function(n,e){console.log(e),_[n]||(_[n]=e),T()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},U=1,M={empty:function(){j=[],x={},R={},k=[],g=[],v=""},addPagesArray:function(n){g=n,p=(0,u.default)(n,v)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!g.some(function(n){return n.path===e}))return!1;var o=1/U;U+=1,x[e]?x[e]+=1:x[e]=1,M.has(e)||j.unshift(e),j.sort(S);var t=p(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+o:R[t.jsonName]=1+o,k.indexOf(t.jsonName)!==-1||y[t.jsonName]||k.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+o:R[t.componentChunkName]=1+o,k.indexOf(t.componentChunkName)!==-1||y[t.jsonName]||k.unshift(t.componentChunkName)),k.sort(O),C.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:k,resourcesCount:R}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(n){return p(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};N&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var r;if(o){if(t>=e.length)break;r=e[t++]}else{if(t=e.next(),t.done)break;r=t.value}var a=r;a.unregister()}window.location.reload()}})),N=!1;if(_[e])return A(e,'Previously detected load failure for "'+e+'"'),o();var t=p(e);if(!t)return A(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),s.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];s.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!t.layoutComponentChunkName||u)){m[e]={component:r,json:a,layout:u,page:t};var n={component:r,json:a,layout:u,page:t};o(n),s.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return D(t.componentChunkName,function(n,e){n&&A(t.path,"Loading the component for "+t.path+" failed"),r=e,i()}),D(t.jsonName,function(n,e){n&&A(t.path,"Loading the JSON for "+t.path+" failed"),a=e,i()}),void(t.layoutComponentChunkName&&D(t.layout,function(n,e){n&&A(t.path,"Loading the Layout for "+t.path+" failed"),u=e,i()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,o(93))},261:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-lyrics-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lyrics-bez-imeni.json",path:"/lyrics/bezImeni"},{componentChunkName:"component---src-templates-lyrics-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lyrics-chernoknizhnica.json",path:"/lyrics/chernoknizhnica"},{componentChunkName:"component---src-templates-lyrics-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lyrics-gerbarij.json",path:"/lyrics/gerbarij"},{componentChunkName:"component---src-templates-lyrics-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lyrics-igrushki.json",path:"/lyrics/igrushki"},{componentChunkName:"component---src-templates-lyrics-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lyrics-kluviki-not.json",path:"/lyrics/kluvikiNot"},{componentChunkName:"component---src-templates-lyrics-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lyrics-krasnaya-pesnya.json",path:"/lyrics/krasnayaPesnya"},{componentChunkName:"component---src-templates-lyrics-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lyrics-les.json",path:"/lyrics/les"},{componentChunkName:"component---src-templates-lyrics-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lyrics-malchik-batiskaf.json",path:"/lyrics/malchikBatiskaf"},{componentChunkName:"component---src-templates-lyrics-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lyrics-malo.json",path:"/lyrics/malo"},{componentChunkName:"component---src-templates-lyrics-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lyrics-podrasti.json",path:"/lyrics/podrasti"},{componentChunkName:"component---src-templates-lyrics-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lyrics-saga-o-ronine.json",path:"/lyrics/sagaORonine"},{componentChunkName:"component---src-templates-lyrics-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lyrics-teplo-bezdonnoe.json",path:"/lyrics/teploBezdonnoe"},{componentChunkName:"component---src-templates-lyrics-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lyrics-terem.json",path:"/lyrics/terem"},{componentChunkName:"component---src-templates-lyrics-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lyrics-to-li.json",path:"/lyrics/toLi"},{componentChunkName:"component---src-templates-lyrics-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lyrics-v-kluvikah.json",path:"/lyrics/vKluvikah"},{componentChunkName:"component---src-templates-lyrics-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lyrics-vnutri-gerbariya.json",path:"/lyrics/vnutriGerbariya"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-lyrics-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"lyrics.json",path:"/lyrics/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},104:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],r=[],a=function(){var n=e();n&&(r.push(n),o(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:r}},empty:function(){t=[],r=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},a=o(39),u=o(1),i=t(u),s=o(1),c=t(s),l=o(38),p=o(236),f=o(191),d=t(f),m=o(102),y=t(m),h=o(27),g=t(h),j=o(261),x=t(j),v=o(262),k=t(v),R=o(100),b=t(R),C=o(99),N=t(C),P=o(64),_=t(P);o(182),window.___history=y.default,window.___emitter=g.default,_.default.addPagesArray(x.default),_.default.addProdRequires(N.default),window.asyncRequires=N.default,window.___loader=_.default,window.matchPath=l.matchPath;var w=k.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),E=function(n){var e=w[n];return null!=e&&(y.default.replace(e.toPath),!0)};E(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&s!==!1||(window.___history=n,s=!0,n.listen(function(n,e){E(n.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})}))}function e(n,e){var o=e.location.pathname,t=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var r=n.location.pathname;if(r===o)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&o(105);var t=function(n){function e(o){o.page.path===_.default.getPage(n).path&&(g.default.off("onPostLoadPageResources",e),clearTimeout(t),window.___history.push(n))}var o=w[n];if(o&&(n=o.toPath),window.location.pathname!==n){var t=setTimeout(function(){g.default.off("onPostLoadPageResources",e),g.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);_.default.getResourcesForPathname(n)?(clearTimeout(t),window.___history.push(n)):g.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,a.apiRunner)("onRouteUpdate",{location:y.default.location,action:y.default.action});var s=!1,f=(0,a.apiRunner)("replaceRouterComponent",{history:y.default})[0],m=function(n){var e=n.children;return i.default.createElement(l.Router,{history:y.default},e)},h=(0,l.withRouter)(b.default);_.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,u.createElement)(f?f:m,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(h,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return _.default.getPage(t.location.pathname)?(0,u.createElement)(b.default,r({page:!0},t)):(0,u.createElement)(b.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,a.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,d.default)(function(){return c.default.render(i.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},262:function(n,e){n.exports=[]},105:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(27),a=t(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},65:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},191:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,r="DOMContentLoaded",a=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return a||o.addEventListener(r,n=function(){for(o.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},2:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),r=o.e,a=o.s;o.e=function(t,u){var i=!1,s=!0,c=function(n){u&&(u(o,n),u=null)};return!a&&e&&e[t]?void c(!0):(r(t,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,n(function(){i||(i=!0,a?a[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},201:function(n,e,o){o(2),n.exports=function(n){return o.e(99219681209289,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(230)})})}},231:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},232:function(n,e,o){"use strict";e.onClientEntry=function(){}},92:function(n,e){"use strict";var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,c=s&&s(Object);n.exports=function n(e,l,p){if("string"!=typeof l){if(c){var f=s(l);f&&f!==c&&n(e,f,p)}var d=a(l);u&&(d=d.concat(u(l)));for(var m=0;m<d.length;++m){var y=d[m];if(!(o[y]||t[y]||p&&p[y])){var h=i(l,y);try{r(e,y,h)}catch(n){}}}return e}return e}},263:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},203:function(n,e,o){o(2),n.exports=function(n){return o.e(0x9427c64ab85d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(109)})})}},204:function(n,e,o){o(2),n.exports=function(n){return o.e(0xefeaa6d1881d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(110)})})}},205:function(n,e,o){o(2),n.exports=function(n){return o.e(35783957827783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(111)})})}},206:function(n,e,o){o(2),n.exports=function(n){return o.e(99427205851500,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(112)})})}},207:function(n,e,o){o(2),n.exports=function(n){return o.e(22320329301387,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(113)})})}}});
//# sourceMappingURL=app-20f731c859b7508166b8.js.map