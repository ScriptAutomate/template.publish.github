(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[989],{52353:function(e){e.exports=function(e){return void 0===e}},16071:function(e,t,n){"use strict";var r=n(53848),o=n(69448);t.default=void 0;var i=o(n(67294)),a=n(11689),c=n(72441),u=n(75749),l={};function f(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",s=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),p=s.href,d=s.as,y=e.children,g=e.replace,b=e.shallow,v=e.scroll,m=e.locale;"string"===typeof y&&(y=i.default.createElement("a",null,y));var h=i.Children.only(y),O=h&&"object"===typeof h&&h.ref,w=(0,u.useIntersection)({rootMargin:"200px"}),j=r(w,2),k=j[0],E=j[1],P=i.default.useCallback((function(e){k(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,k]);(0,i.useEffect)((function(){var e=E&&t&&(0,a.isLocalURL)(p),r="undefined"!==typeof m?m:n&&n.locale,o=l[p+"%"+d+(r?"%"+r:"")];e&&!o&&f(n,p,d,{locale:r})}),[d,p,E,m,t,n]);var S={ref:P,onClick:function(e){h.props&&"function"===typeof h.props.onClick&&h.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:c}))}(e,n,p,d,g,b,v,m)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(h.props&&"function"===typeof h.props.onMouseEnter&&h.props.onMouseEnter(e),f(n,p,d,{priority:!0}))}};if(e.passHref||"a"===h.type&&!("href"in h.props)){var A="undefined"!==typeof m?m:n&&n.locale,C=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(d,A,n&&n.locales,n&&n.domainLocales);S.href=C||(0,a.addBasePath)((0,a.addLocale)(d,A,n&&n.defaultLocale))}return i.default.cloneElement(h,S)};t.default=s},75749:function(e,t,n){"use strict";var r=n(53848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=(0,o.useRef)(),l=(0,o.useState)(!1),f=r(l,2),s=f[0],p=f[1],d=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||s||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,s]);return(0,o.useEffect)((function(){if(!a&&!s){var e=(0,i.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[s]),[d,s]};var o=n(67294),i=n(98391),a="undefined"!==typeof IntersectionObserver;var c=new Map},15791:function(){},41664:function(e,t,n){e.exports=n(16071)},74047:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},52700:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:function(){return o}})},26265:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},38347:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},55105:function(e,t,n){"use strict";n.d(t,{c:function(){return c}});var r,o=n(67294);function i(e){var t={};return e.forEach((function(e){return t[e]=e})),t}!function(e){e.idle="idle",e.loading="loading",e.loaded="loaded"}(r||(r={}));var a=(0,o.createContext)(void 0);function c(e){var t=e.themeMap,n=e.insertionPoint,c=e.defaultTheme,u=e.id,l=void 0===u?"current-theme-style":u,f=e.attr,s=void 0===f?"data-theme":f,p=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["themeMap","insertionPoint","defaultTheme","id","attr"]),d=(0,o.useState)(r.idle),y=d[0],g=d[1],b=(0,o.useState)(),v=b[0],m=b[1],h=(0,o.useCallback)((function(e){if(!n&&null!==n)return document.head.appendChild(e);var t=(r=n,("object"===typeof HTMLElement?r instanceof HTMLElement:r&&"object"===typeof r&&null!==r&&1===r.nodeType&&"string"===typeof r.nodeName)?n:function(e){for(var t=document.head,n=0;n<t.childNodes.length;n++){var r,o=t.childNodes[n];if(8===o.nodeType&&(null==o||null==(r=o.nodeValue)?void 0:r.trim())===e)return o}return null}(n));if(!t)return console.warn("Insertion point '"+n+"' does not exist. Be sure to add comment on head and that it matches the insertionPoint"),document.head.appendChild(e);var r,o=t.parentNode;return o?o.insertBefore(e,t.nextSibling):void 0}),[n]),O=(0,o.useCallback)((function(e){var n=e.theme;if(n!==v){var o=document.getElementById(l);if(o&&o.remove(),!t[n])return console.warn("Could not find specified theme");g(r.loading);var i=function(e){for(var t=document.createElement("link"),n=0,r=Object.entries(e);n<r.length;n++){var o=r[n],i=o[0],a=o[1];"onload"!==i?t[i]=a:t.onload=e.onload}return t}({type:"text/css",rel:"stylesheet",id:l,href:t[n],onload:function(){g(r.loaded)}});h(i),m(n),document.body.setAttribute(s,n)}}),[t,h,s,l,v]);(0,o.useEffect)((function(){c&&O({theme:c})}),[c]),(0,o.useEffect)((function(){Object.keys(t).map((function(e){var n="theme-prefetch-"+e;if(!document.getElementById(n)){var r=document.createElement("link");r.rel="prefetch",r.type="text/css",r.id=n,r.href=t[e],h(r)}return""}))}),[t,h]);var w=(0,o.useMemo)((function(){return{switcher:O,status:y,currentTheme:v,themes:i(Object.keys(t))}}),[O,y,v,t]);return(0,o.createElement)(a.Provider,Object.assign({value:w},p))}},31516:function(e,t,n){"use strict";n.d(t,{j2:function(){return le},LV:function(){return se},t8:function(){return fe}});var r={};n.r(r),n.d(r,{addTrackers:function(){return V},default:function(){return ie},event:function(){return ee},exception:function(){return te},ga:function(){return F},initialize:function(){return G},modalview:function(){return X},outboundLink:function(){return re},pageview:function(){return W},plugin:function(){return ne},send:function(){return Q},set:function(){return $},testModeAPI:function(){return oe},timing:function(){return Y}});var o=n(67294),i=n(45697),a=n.n(i);function c(e){console.warn("[react-ga]",e)}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O="_blank",w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,r,i=g(a);function a(){var e;p(this,a);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return h(v(e=i.call.apply(i,[this].concat(n))),"handleClick",(function(t){var n=e.props,r=n.target,o=n.eventLabel,i=n.to,c=n.onClick,u=n.trackerNames,l={label:o},f=r!==O,s=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button);f&&s?(t.preventDefault(),a.trackLink(l,(function(){window.location.href=i}),u)):a.trackLink(l,(function(){}),u),c&&c(t)})),e}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,r=f(f({},s(e,["to","target"])),{},{target:n,href:t,onClick:this.handleClick});return n===O&&(r.rel="".concat(r.rel?r.rel:""," noopener noreferrer").trim()),delete r.eventLabel,delete r.trackerNames,o.createElement("a",r)}}])&&d(t.prototype,n),r&&d(t,r),a}(o.Component);h(w,"trackLink",(function(){c("ga tracking not enabled")})),w.propTypes={eventLabel:a().string.isRequired,target:a().string,to:a().string,onClick:a().func,trackerNames:a().arrayOf(a().string)},w.defaultProps={target:null,to:null,onClick:null,trackerNames:null};function j(e){return"string"===typeof(t=e)&&-1!==t.indexOf("@")?(c("This arg looks like an email address, redacting."),"REDACTED (Potential Email Address)"):e;var t}function k(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var E=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function P(e){return k(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(E)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))}var S=!1;function A(e){console.info("[react-ga]",e)}var C=[],x={calls:C,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];C.push([].concat(t))},resetCalls:function(){C.length=0}};function L(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){return(D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e){return function(e){if(Array.isArray(e))return q(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M="undefined"===typeof window||"undefined"===typeof document,_=!1,R=!0,B=!1,J=!0,K=!0,z=function(){var e;return B?x.ga.apply(x,arguments):!M&&(window.ga?(e=window).ga.apply(e,arguments):c("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function U(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e||"";return(arguments.length>1?arguments[1]:void 0)&&(n=P(e)),t&&(n=j(n)),n}(e,R,K)}function Z(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];"string"===typeof o?(!J&&Array.isArray(e)||z.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){z.apply(void 0,I(["".concat(e,".").concat(o)].concat(n.slice(1))))}))):c("ga command must be a string")}function H(e,t){e?t&&(t.debug&&!0===t.debug&&(_=!0),!1===t.titleCase&&(R=!1),!1===t.redactEmail&&(K=!1),t.useExistingGa)||(t&&t.gaOptions?z("create",e,t.gaOptions):z("create",e,"auto")):c("gaTrackingID is required in initialize()")}function V(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===D(e)?H(e.trackingId,e):c("All configs must be an object")})):H(e,t),!0}function G(e,t){if(t&&!0===t.testMode)B=!0;else{if(M)return;t&&!0===t.standardImplementation||function(e){if(!S){S=!0;var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var n,r,o,i,a,c,u,l=e&&e.onerror;n=window,r=document,o="script",i=t,a="ga",n.GoogleAnalyticsObject=a,n.ga=n.ga||function(){(n.ga.q=n.ga.q||[]).push(arguments)},n.ga.l=1*new Date,c=r.createElement(o),u=r.getElementsByTagName(o)[0],c.async=1,c.src=i,c.onerror=l,u.parentNode.insertBefore(c,u)}}(t)}J=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,V(e,t)}function F(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(z.apply(void 0,t),_&&(A("called ga('arguments');"),A("with arguments: ".concat(JSON.stringify(t))))),window.ga}function $(e,t){e?"object"===D(e)?(0===Object.keys(e).length&&c("empty `fieldsObject` given to .set()"),Z(t,"set",e),_&&(A("called ga('set', fieldsObject);"),A("with fieldsObject: ".concat(JSON.stringify(e))))):c("Expected `fieldsObject` arg to be an Object"):c("`fieldsObject` is required in .set()")}function Q(e,t){Z(t,"send",e),_&&(A("called ga('send', fieldObject);"),A("with fieldObject: ".concat(JSON.stringify(e))),A("with trackers: ".concat(JSON.stringify(t))))}function W(e,t,n){if(e){var r=k(e);if(""!==r){var o={};if(n&&(o.title=n),Z(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),_){A("called ga('send', 'pageview', path);");var i="";n&&(i=" and title: ".concat(n)),A("with path: ".concat(r).concat(i))}}else c("path cannot be an empty string in .pageview()")}else c("path is required in .pageview()")}function X(e,t){if(e){var n,r="/"===(n=k(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);Z(t,"send","pageview",o),_&&(A("called ga('send', 'pageview', path);"),A("with path: ".concat(o)))}else c("modalName cannot be an empty string or a single / in .modalview()")}else c("modalName is required in .modalview(modalName)")}function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,i=arguments.length>1?arguments[1]:void 0;if(t&&n&&"number"===typeof r){var a={hitType:"timing",timingCategory:U(t),timingVar:U(n),timingValue:r};o&&(a.timingLabel=U(o)),Q(a,i)}else c("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,i=e.nonInteraction,a=e.transport,u=L(e,["category","action","label","value","nonInteraction","transport"]),l=arguments.length>1?arguments[1]:void 0;if(t&&n){var f={hitType:"event",eventCategory:U(t),eventAction:U(n)};r&&(f.eventLabel=U(r)),"undefined"!==typeof o&&("number"!==typeof o?c("Expected `args.value` arg to be a Number."):f.eventValue=o),"undefined"!==typeof i&&("boolean"!==typeof i?c("`args.nonInteraction` must be a boolean."):f.nonInteraction=i),"undefined"!==typeof a&&("string"!==typeof a?c("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(a)&&c("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),f.transport=a)),Object.keys(u).filter((function(e){return"dimension"===e.substr(0,"dimension".length)})).forEach((function(e){f[e]=u[e]})),Object.keys(u).filter((function(e){return"metric"===e.substr(0,"metric".length)})).forEach((function(e){f[e]=u[e]})),Q(f,l)}else c("args.category AND args.action are required in event()")}function te(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=U(n)),"undefined"!==typeof r&&("boolean"!==typeof r?c("`args.fatal` must be a boolean."):o.exFatal=r),Q(o,t)}var ne={require:function(e,t,n){if(e){var r=k(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==D(t))return void c("Expected `options` arg to be an Object");0===Object.keys(t).length&&c("Empty `options` given to .require()"),F(o,r,t),_&&A("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else F(o,r),_&&A("called ga('require', '".concat(r,"');"))}else c("`name` cannot be an empty string in .require()")}else c("`name` is required in .require()")},execute:function(e,t){for(var n,r,o=arguments.length,i=new Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];if(1===i.length?n=i[0]:(r=i[0],n=i[1]),"string"!==typeof e)c("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)c("Expected `action` arg to be a String.");else{var u="".concat(e,":").concat(t);n=n||null,r&&n?(F(u,r,n),_&&(A("called ga('".concat(u,"');")),A('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(F(u,n),_&&(A("called ga('".concat(u,"');")),A("with payload: ".concat(JSON.stringify(n))))):(F(u),_&&A("called ga('".concat(u,"');")))}}};function re(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:U(e.label)},o=!1,i=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(i),o||t()},Q(r,n)}else c("args.label is required in outboundLink()");else c("hitCallback function is required")}var oe=x,ie={initialize:G,ga:F,set:$,send:Q,pageview:W,modalview:X,timing:Y,event:ee,exception:te,plugin:ne,outboundLink:re,testModeAPI:x};function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var le=G,fe=$,se=W;w.origTrackLink=w.trackLink,w.trackLink=re;var pe=w;ce(ce({},r),{},{OutboundLink:pe})}}]);