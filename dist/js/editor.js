/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@editorjs/attaches/dist/bundle.js":
/*!********************************************************!*\
  !*** ./node_modules/@editorjs/attaches/dist/bundle.js ***!
  \********************************************************/
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=6)}([function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var r=n(2),o=setTimeout;function i(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function s(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void l(t.promise,e)}c(t.promise,r)}else(1===e._state?c:l)(t.promise,e._value)}))):e._deferreds.push(t)}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void u(e);if("function"==typeof n)return void d((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,u(e)}catch(t){l(e,t)}var r,o}function l(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&a._immediateFn((function(){e._handled||a._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)s(e,e._deferreds[t]);e._deferreds=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1;try{e((function(e){n||(n=!0,c(t,e))}),(function(e){n||(n=!0,l(t,e))}))}catch(e){if(n)return;n=!0,l(t,e)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(i);return s(this,new f(e,t,n)),n},a.prototype.finally=r.a,a.all=function(e){return new a((function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,(function(t){i(e,t)}),n)}r[e]=a,0==--o&&t(r)}catch(e){n(e)}}for(var a=0;a<r.length;a++)i(a,r[a])}))},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a((function(t){t(e)}))},a.reject=function(e){return new a((function(t,n){n(e)}))},a.race=function(e){return new a((function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)}))},a._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){o(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=a}).call(this,n(5).setImmediate)},function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(4);var o,i,a,s,c,l,u,f=n(8),d=(i=function(e){return new Promise((function(t,n){e=s(e),(e=c(e)).beforeSend&&e.beforeSend();var r=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");r.open(e.method,e.url),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e.headers).forEach((function(t){var n=e.headers[t];r.setRequestHeader(t,n)}));var o=e.ratio;r.upload.addEventListener("progress",(function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*o/100);e.progress(Math.min(r,100))}),!1),r.addEventListener("progress",(function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*(100-o)/100)+o;e.progress(Math.min(r,100))}),!1),r.onreadystatechange=function(){if(4===r.readyState){var e=r.response;try{e=JSON.parse(e)}catch(e){}var o=f.parseHeaders(r.getAllResponseHeaders()),i={body:e,code:r.status,headers:o};u(r.status)?t(i):n(i)}},r.send(e.data)}))},a=function(e){return e.method="POST",i(e)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.url&&"string"!=typeof e.url)throw new Error("Url must be a string");if(e.url=e.url||"",e.method&&"string"!=typeof e.method)throw new Error("`method` must be a string or null");if(e.method=e.method?e.method.toUpperCase():"GET",e.headers&&"object"!==r(e.headers))throw new Error("`headers` must be an object or null");if(e.headers=e.headers||{},e.type&&("string"!=typeof e.type||!Object.values(o).includes(e.type)))throw new Error("`type` must be taken from module's «contentType» library");if(e.progress&&"function"!=typeof e.progress)throw new Error("`progress` must be a function or null");if(e.progress=e.progress||function(e){},e.beforeSend=e.beforeSend||function(e){},e.ratio&&"number"!=typeof e.ratio)throw new Error("`ratio` must be a number");if(e.ratio<0||e.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(e.ratio=e.ratio||90,e.accept&&"string"!=typeof e.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(e.accept=e.accept||"*/*",e.multiple&&"boolean"!=typeof e.multiple)throw new Error("`multiple` must be a true or false");if(e.multiple=e.multiple||!1,e.fieldName&&"string"!=typeof e.fieldName)throw new Error("`fieldName` must be a string");return e.fieldName=e.fieldName||"files",e},c=function(e){switch(e.method){case"GET":var t=l(e.data,o.URLENCODED);delete e.data,e.url=/\?/.test(e.url)?e.url+"&"+t:e.url+"?"+t;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var n=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||o.JSON}(e);(f.isFormData(e.data)||f.isFormElement(e.data))&&(n=o.FORM),e.data=l(e.data,n),n!==d.contentType.FORM&&(e.headers["content-type"]=n)}return e},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case o.URLENCODED:return f.urlEncode(e);case o.JSON:return f.jsonEncode(e);case o.FORM:return f.formEncode(e);default:return e}},u=function(e){return e>=200&&e<300},{contentType:o={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:i,get:function(e){return e.method="GET",i(e)},post:a,transport:function(e){return e=s(e),f.selectFiles(e).then((function(t){for(var n=new FormData,r=0;r<t.length;r++)n.append(e.fieldName,t[r],t[r].name);f.isObject(e.data)&&Object.keys(e.data).forEach((function(t){var r=e.data[t];n.append(t,r)}));var o=e.beforeSend;return e.beforeSend=function(){return o(t)},e.data=n,a(e)}))},selectFiles:function(e){return delete(e=s(e)).beforeSend,f.selectFiles(e)}});e.exports=d},function(e,t,n){"use strict";n.r(t);var r=n(1);window.Promise=window.Promise||r.a},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,a,s,c=1,l={},u=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){h(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&h(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),r=function(t){e.postMessage(a+t,"*")}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){h(e.data)},r=function(e){i.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){h(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(h,0,e)},d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return l[c]=o,r(c),c++},d.clearImmediate=p}function p(e){delete l[e]}function h(e){if(u)setTimeout(h,0,e);else{var t=l[e];if(t){u=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{p(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(7))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,l=[],u=!1,f=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&p())}function p(){if(!u){var e=s(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||u||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(9);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"urlEncode",value:function(e){return o(e)}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(e){if(this.isFormData(e))return e;if(this.isFormElement(e))return new FormData(e);if(this.isObject(e)){var t=new FormData;return Object.keys(e).forEach((function(n){var r=e[n];t.append(n,r)})),t}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isFormData",value:function(e){return e instanceof FormData}},{key:"isFormElement",value:function(e){return e instanceof HTMLFormElement}},{key:"selectFiles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){var r=document.createElement("INPUT");r.type="file",e.multiple&&r.setAttribute("multiple","multiple"),e.accept&&r.setAttribute("accept",e.accept),r.style.display="none",document.body.appendChild(r),r.addEventListener("change",(function(e){var n=e.target.files;t(n),document.body.removeChild(r)}),!1),r.click()}))}},{key:"parseHeaders",value:function(e){var t=e.trim().split(/[\r\n]+/),n={};return t.forEach((function(e){var t=e.split(": "),r=t.shift(),o=t.join(": ");r&&(n[r]=o)})),n}}])&&r(t,n),e}()},function(e,t){var n=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},r=function(e,t,o,i){return t=t||null,o=o||"&",i=i||null,e?function(e){for(var t=new Array,n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}(Object.keys(e).map((function(a){var s,c,l=a;if(i&&(l=i+"["+l+"]"),"object"==typeof e[a]&&null!==e[a])s=r(e[a],null,o,l);else{t&&(c=l,l=!isNaN(parseFloat(c))&&isFinite(c)?t+Number(l):l);var u=e[a];u=(u=0===(u=!1===(u=!0===u?"1":u)?"0":u)?"0":u)||"",s=n(l)+"="+n(u)}return s}))).join(o).replace(/[!'()*]/g,""):""};e.exports=r}])},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".cdx-attaches {\n  --color-line: #EFF0F1;\n  --color-bg: #fff;\n  --color-bg-secondary: #F8F8F8;\n  --color-bg-secondary--hover: #f2f2f2;\n  --color-text-secondary: #707684;\n}\n\n  .cdx-attaches--with-file {\n    display: flex;\n    align-items: center;\n    padding: 10px 12px;\n    border: 1px solid var(--color-line);\n    border-radius: 7px;\n    background: var(--color-bg);\n  }\n\n  .cdx-attaches--with-file .cdx-attaches__file-info {\n      display: grid;\n      grid-gap: 4px;\n      max-width: calc(100% - 80px);\n      margin: auto 0;\n      flex-grow: 2;\n    }\n\n  .cdx-attaches--with-file .cdx-attaches__download-button {\n      display: flex;\n      align-items: center;\n      background: var(--color-bg-secondary);\n      padding: 6px;\n      border-radius: 6px;\n      margin: auto 0 auto auto;\n    }\n\n  .cdx-attaches--with-file .cdx-attaches__download-button:hover {\n        background: var(--color-bg-secondary--hover);\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__download-button svg {\n        width: 20px;\n        height: 20px;\n        fill: none;\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon {\n      position: relative;\n    }\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon-background {\n        background-color: #333;\n\n        width: 27px;\n        height: 30px;\n        margin-right: 12px;\n        border-radius: 8px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n\n  @supports(-webkit-mask-box-image: url('')){\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon-background {\n          border-radius: 0;\n          -webkit-mask-box-image: url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10.3872C0 1.83334 1.83334 0 10.3872 0H13.6128C22.1667 0 24 1.83334 24 10.3872V13.6128C24 22.1667 22.1667 24 13.6128 24H10.3872C1.83334 24 0 22.1667 0 13.6128V10.3872Z' fill='black'/%3E%3C/svg%3E%0A\") 48% 41% 37.9% 53.3%\n      };\n        }\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon-label {\n        position: absolute;\n        left: 3px;\n        top: 11px;\n        background: inherit;\n        text-transform: uppercase;\n        line-height: 1em;\n        color: #fff;\n        padding: 1px 2px;\n        border-radius: 3px;\n        font-size: 10px;\n        font-weight: bold;\n        /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.22); */\n        font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;\n        letter-spacing: 0.02em;\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon svg {\n        width: 20px;\n        height: 20px;\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__file-icon path {\n        stroke: #fff;\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__size {\n      color: var(--color-text-secondary);\n      font-size: 12px;\n      line-height: 1em;\n    }\n\n  .cdx-attaches--with-file .cdx-attaches__size::after {\n        content: attr(data-size);\n        margin-left: 0.2em;\n      }\n\n  .cdx-attaches--with-file .cdx-attaches__title {\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      outline: none;\n      max-width: 90%;\n      font-size: 14px;\n      font-weight: 500;\n      line-height: 1em;\n    }\n\n  .cdx-attaches--with-file .cdx-attaches__title:empty::before {\n      content: attr(data-placeholder);\n      color: #7b7e89;\n    }\n\n  .cdx-attaches--loading .cdx-attaches__title,\n    .cdx-attaches--loading .cdx-attaches__file-icon,\n    .cdx-attaches--loading .cdx-attaches__size,\n    .cdx-attaches--loading .cdx-attaches__download-button,\n    .cdx-attaches--loading .cdx-attaches__button {\n      opacity: 0;\n      font-size: 0;\n    }\n\n  .cdx-attaches__button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #000;\n    border-radius: 7px;\n    font-weight: 500;\n  }\n\n  .cdx-attaches__button svg {\n      margin-top: 0;\n    }\n",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){return document.querySelector(e)},c=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=s.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,u=0,f=[],d=n(5);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function h(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function m(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function y(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),g(t,e.attrs),m(e,t),t}function g(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=l||(l=y(t)),r=_.bind(null,n,a,!1),o=_.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),m(e,t),t}(t),r=E.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),r=S.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}e&&p(h(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete i[s.id]}}}};var w,x=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function _(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function S(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function E(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=d(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));n(1);var r=n(0),o=n.n(r);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){var n=t.config,r=t.onUpload,o=t.onError;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=n,this.onUpload=r,this.onError=o}var t,n,r;return t=e,(n=[{key:"uploadSelectedFile",value:function(e){var t=this,n=e.onPreview;(this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile?o.a.selectFiles({accept:this.config.types}).then((function(e){n();var r,o=t.config.uploader.uploadByFile(e[0]);return(r=o)&&"function"==typeof r.then||console.warn("Custom uploader method uploadByFile should return a Promise"),o})):o.a.transport({url:this.config.endpoint,accept:this.config.types,beforeSend:function(){return n()},fieldName:this.config.field,headers:this.config.additionalRequestHeaders||{}}).then((function(e){return e.body}))).then((function(e){t.onUpload(e)})).catch((function(e){var n=e.body,r=n&&n.message?n.message:t.config.errorMessage;t.onError(r)}))}}])&&i(t.prototype,n),r&&i(t,r),e}();function s(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(e);Array.isArray(n)?(t=o.classList).add.apply(t,s(n)):n&&o.classList.add(n);for(var i in r)o[i]=r[i];return o}function u(e){return 0===Object.keys(e).length}const f='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.3236 8.43554L9.49533 12.1908C9.13119 12.5505 8.93118 13.043 8.9393 13.5598C8.94741 14.0767 9.163 14.5757 9.53862 14.947C9.91424 15.3182 10.4191 15.5314 10.9422 15.5397C11.4653 15.5479 11.9637 15.3504 12.3279 14.9908L16.1562 11.2355C16.8845 10.5161 17.2845 9.53123 17.2682 8.4975C17.252 7.46376 16.8208 6.46583 16.0696 5.72324C15.3184 4.98066 14.3086 4.55425 13.2624 4.53782C12.2162 4.52138 11.2193 4.91627 10.4911 5.63562L6.66277 9.39093C5.57035 10.4699 4.97032 11.9473 4.99467 13.4979C5.01903 15.0485 5.66578 16.5454 6.79264 17.6592C7.9195 18.7731 9.43417 19.4127 11.0034 19.4374C12.5727 19.462 14.068 18.8697 15.1604 17.7907L18.9887 14.0354"/></svg>';function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t){var n=this,r=t.data,o=t.config,i=t.api,s=t.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=i,this.readOnly=s,this.nodes={wrapper:null,button:null,title:null},this._data={file:{},title:""},this.config={endpoint:o.endpoint||"",field:o.field||"file",types:o.types||"*",buttonText:o.buttonText||"Select file to upload",errorMessage:o.errorMessage||"File upload failed",uploader:o.uploader||void 0,additionalRequestHeaders:o.additionalRequestHeaders||{}},void 0===r||u(r)||(this.data=r),this.uploader=new a({config:this.config,onUpload:function(e){return n.onUpload(e)},onError:function(e){return n.uploadingFailed(e)}}),this.enableFileUpload=this.enableFileUpload.bind(this)}var t,n,r;return t=e,r=[{key:"toolbox",get:function(){return{icon:f,title:"Attachment"}}},{key:"isReadOnlySupported",get:function(){return!0}}],(n=[{key:"CSS",get:function(){return{baseClass:this.api.styles.block,apiButton:this.api.styles.button,loader:this.api.styles.loader,wrapper:"cdx-attaches",wrapperWithFile:"cdx-attaches--with-file",wrapperLoading:"cdx-attaches--loading",button:"cdx-attaches__button",title:"cdx-attaches__title",size:"cdx-attaches__size",downloadButton:"cdx-attaches__download-button",fileInfo:"cdx-attaches__file-info",fileIcon:"cdx-attaches__file-icon",fileIconBackground:"cdx-attaches__file-icon-background",fileIconLabel:"cdx-attaches__file-icon-label"}}},{key:"EXTENSIONS",get:function(){return{doc:"#1483E9",docx:"#1483E9",odt:"#1483E9",pdf:"#DB2F2F",rtf:"#744FDC",tex:"#5a5a5b",txt:"#5a5a5b",pptx:"#E35200",ppt:"#E35200",mp3:"#eab456",mp4:"#f676a6",xls:"#11AE3D",html:"#2988f0",htm:"#2988f0",png:"#AA2284",jpg:"#D13359",jpeg:"#D13359",gif:"#f6af76",zip:"#4f566f",rar:"#4f566f",exe:"#e26f6f",svg:"#bf5252",key:"#00B2FF",sketch:"#FFC700",ai:"#FB601D",psd:"#388ae5",dmg:"#e26f6f",json:"#2988f0",csv:"#11AE3D"}}},{key:"validate",value:function(e){return!u(e.file)}},{key:"save",value:function(e){if(this.pluginHasData()){var t=e.querySelector(".".concat(this.CSS.title));t&&Object.assign(this.data,{title:t.innerHTML})}return this.data}},{key:"render",value:function(){var e=l("div",this.CSS.baseClass);return this.nodes.wrapper=l("div",this.CSS.wrapper),this.pluginHasData()?this.showFileData():this.prepareUploadButton(),e.appendChild(this.nodes.wrapper),e}},{key:"prepareUploadButton",value:function(){this.nodes.button=l("div",[this.CSS.apiButton,this.CSS.button]),this.nodes.button.innerHTML="".concat(f," ").concat(this.config.buttonText),this.readOnly||this.nodes.button.addEventListener("click",this.enableFileUpload),this.nodes.wrapper.appendChild(this.nodes.button)}},{key:"appendCallback",value:function(){this.nodes.button.click()}},{key:"pluginHasData",value:function(){return""!==this.data.title||Object.values(this.data.file).some((function(e){return void 0!==e}))}},{key:"enableFileUpload",value:function(){var e=this;this.uploader.uploadSelectedFile({onPreview:function(){e.nodes.wrapper.classList.add(e.CSS.wrapperLoading,e.CSS.loader)}})}},{key:"onUpload",value:function(e){var t,n,r,o=e;try{o.success&&void 0!==o.file&&!u(o.file)?(this.data={file:o.file,title:o.file.title||""},this.nodes.button.remove(),this.showFileData(),t=this.nodes.title,n=document.createRange(),r=window.getSelection(),n.selectNodeContents(t),n.collapse(!1),r.removeAllRanges(),r.addRange(n),this.removeLoader()):this.uploadingFailed(this.config.errorMessage)}catch(e){console.error("Attaches tool error:",e),this.uploadingFailed(this.config.errorMessage)}this.api.blocks.getBlockByIndex(this.api.blocks.getCurrentBlockIndex()).dispatchChange()}},{key:"appendFileIcon",value:function(e){var t,n=e.extension||(void 0===(t=e.name)?"":t.split(".").pop()),r=this.EXTENSIONS[n],o=l("div",this.CSS.fileIcon),i=l("div",this.CSS.fileIconBackground);if(r&&(i.style.backgroundColor=r),o.appendChild(i),n){var a=n;n.length>4&&(a=n.substring(0,4)+"…");var s=l("div",this.CSS.fileIconLabel,{textContent:a,title:n});r&&(s.style.backgroundColor=r),o.appendChild(s)}else i.innerHTML=f;this.nodes.wrapper.appendChild(o)}},{key:"removeLoader",value:function(){var e=this;setTimeout((function(){return e.nodes.wrapper.classList.remove(e.CSS.wrapperLoading,e.CSS.loader)}),500)}},{key:"showFileData",value:function(){this.nodes.wrapper.classList.add(this.CSS.wrapperWithFile);var e=this.data,t=e.file,n=e.title;this.appendFileIcon(t);var r=l("div",this.CSS.fileInfo);if(this.nodes.title=l("div",this.CSS.title,{contentEditable:!1===this.readOnly}),this.nodes.title.dataset.placeholder=this.api.i18n.t("File title"),this.nodes.title.textContent=n||"",r.appendChild(this.nodes.title),t.size){var o,i,a=l("div",this.CSS.size);Math.log10(+t.size)>=6?(o="MiB",i=t.size/Math.pow(2,20)):(o="KiB",i=t.size/Math.pow(2,10)),a.textContent=i.toFixed(1),a.setAttribute("data-size",o),r.appendChild(a)}if(this.nodes.wrapper.appendChild(r),void 0!==t.url){var s=l("a",this.CSS.downloadButton,{innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>',href:t.url,target:"_blank",rel:"nofollow noindex noreferrer"});this.nodes.wrapper.appendChild(s)}}},{key:"uploadingFailed",value:function(e){this.api.notifier.show({message:e,style:"error"}),this.removeLoader()}},{key:"data",get:function(){return this._data},set:function(e){var t=e.file,n=e.title;this._data={file:t,title:n}}}])&&d(t.prototype,n),r&&d(t,r),e}()}]).default}));

/***/ }),

/***/ "./node_modules/@editorjs/underline/dist/bundle.js":
/*!*********************************************************!*\
  !*** ./node_modules/@editorjs/underline/dist/bundle.js ***!
  \*********************************************************/
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(e,t,n){var r=n(1),o=n(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function u(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],c=t.base?i[0]+t.base:i[0],s=n[c]||0,l="".concat(c," ").concat(s);n[c]=s+1;var f=u(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:b(d,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,h=0;function b(e,t){var n,r,o;if(t.singleton){var i=h++;n=v||(v=s(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=s(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=u(n[r]);a[o].references--}for(var i=c(e,t),s=0;s<n.length;s++){var l=u(n[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=i}}}},function(e,t,n){(t=n(3)(!1)).push([e.i,".cdx-underline {\n    text-decoration: underline;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,u=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(c," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,u,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));n(0);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,a=void 0,a=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===r(a)?a:String(a)),o)}var i,a}var i=function(){function e(t){var n=t.api;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=n,this.button=null,this.tag="U",this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive}}var t,n,r;return t=e,r=[{key:"CSS",get:function(){return"cdx-underline"}},{key:"isInline",get:function(){return!0}},{key:"sanitize",get:function(){return{u:{class:e.CSS}}}}],(n=[{key:"render",value:function(){return this.button=document.createElement("button"),this.button.type="button",this.button.classList.add(this.iconClasses.base),this.button.innerHTML=this.toolboxIcon,this.button}},{key:"surround",value:function(t){if(t){var n=this.api.selection.findParentTag(this.tag,e.CSS);n?this.unwrap(n):this.wrap(t)}}},{key:"wrap",value:function(t){var n=document.createElement(this.tag);n.classList.add(e.CSS),n.appendChild(t.extractContents()),t.insertNode(n),this.api.selection.expandToTag(n)}},{key:"unwrap",value:function(e){this.api.selection.expandToTag(e);var t=window.getSelection(),n=t.getRangeAt(0),r=n.extractContents();e.parentNode.removeChild(e),n.insertNode(r),t.removeAllRanges(),t.addRange(n)}},{key:"checkState",value:function(){var t=this.api.selection.findParentTag(this.tag,e.CSS);this.button.classList.toggle(this.iconClasses.active,!!t)}},{key:"toolboxIcon",get:function(){return'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7.5V11.5C9 12.2956 9.31607 13.0587 9.87868 13.6213C10.4413 14.1839 11.2044 14.5 12 14.5C12.7956 14.5 13.5587 14.1839 14.1213 13.6213C14.6839 13.0587 15 12.2956 15 11.5V7.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.71429 18H16.2857"/></svg>'}}])&&o(t.prototype,n),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()}]).default}));

/***/ }),

/***/ "./resources/js/editor.js":
/*!********************************!*\
  !*** ./resources/js/editor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editorjs_attaches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @editorjs/attaches */ "./node_modules/@editorjs/attaches/dist/bundle.js");
/* harmony import */ var _editorjs_attaches__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editorjs_attaches__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editorjs_checklist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @editorjs/checklist */ "./node_modules/@editorjs/checklist/dist/checklist.mjs");
/* harmony import */ var _editorjs_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @editorjs/code */ "./node_modules/@editorjs/code/dist/code.mjs");
/* harmony import */ var _editorjs_delimiter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @editorjs/delimiter */ "./node_modules/@editorjs/delimiter/dist/delimiter.mjs");
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @editorjs/editorjs */ "./node_modules/@editorjs/editorjs/dist/editorjs.mjs");
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @editorjs/header */ "./node_modules/@editorjs/header/dist/header.mjs");
/* harmony import */ var editorjs_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! editorjs-gallery */ "./node_modules/editorjs-gallery/dist/bundle.js");
/* harmony import */ var editorjs_gallery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(editorjs_gallery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @editorjs/image */ "./node_modules/@editorjs/image/dist/image.mjs");
/* harmony import */ var _editorjs_inline_code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @editorjs/inline-code */ "./node_modules/@editorjs/inline-code/dist/inline-code.mjs");
/* harmony import */ var _editorjs_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @editorjs/link */ "./node_modules/@editorjs/link/dist/link.mjs");
/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @editorjs/list */ "./node_modules/@editorjs/list/dist/list.mjs");
/* harmony import */ var _editorjs_marker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @editorjs/marker */ "./node_modules/@editorjs/marker/dist/marker.mjs");
/* harmony import */ var _editorjs_nested_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @editorjs/nested-list */ "./node_modules/@editorjs/nested-list/dist/nested-list.mjs");
/* harmony import */ var _editorjs_paragraph__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @editorjs/paragraph */ "./node_modules/@editorjs/paragraph/dist/paragraph.mjs");
/* harmony import */ var _editorjs_quote__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @editorjs/quote */ "./node_modules/@editorjs/quote/dist/quote.mjs");
/* harmony import */ var _editorjs_raw__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @editorjs/raw */ "./node_modules/@editorjs/raw/dist/raw.mjs");
/* harmony import */ var _editorjs_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @editorjs/table */ "./node_modules/@editorjs/table/dist/table.mjs");
/* harmony import */ var _editorjs_underline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @editorjs/underline */ "./node_modules/@editorjs/underline/dist/bundle.js");
/* harmony import */ var _editorjs_underline__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_editorjs_underline__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _editorjs_warning__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @editorjs/warning */ "./node_modules/@editorjs/warning/dist/warning.mjs");
/* harmony import */ var editorjs_drag_drop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! editorjs-drag-drop */ "./node_modules/editorjs-drag-drop/dist/bundle.js");
/* harmony import */ var editorjs_drag_drop__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(editorjs_drag_drop__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var editorjs_style__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! editorjs-style */ "./node_modules/editorjs-style/dist/index.js");
/* harmony import */ var editorjs_style__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(editorjs_style__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var editorjs_undo__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! editorjs-undo */ "./node_modules/editorjs-undo/dist/bundle.js");
/* harmony import */ var editorjs_undo__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(editorjs_undo__WEBPACK_IMPORTED_MODULE_21__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






















document.addEventListener('alpine:init', function () {
  Alpine.data('editorjs', function (_ref) {
    var state = _ref.state,
      statePath = _ref.statePath,
      placeholder = _ref.placeholder,
      readOnly = _ref.readOnly,
      debugEnabled = _ref.debugEnabled,
      tools = _ref.tools,
      toolsOptions = _ref.toolsOptions,
      minHeight = _ref.minHeight;
    return {
      instance: null,
      state: state,
      tools: tools,
      log: function log() {
        var _console;
        return debugEnabled && (_console = console).log.apply(_console, arguments);
      },
      init: function init() {
        var _this = this;
        var enabledTools = {};
        this.log('EditorJS Alpine component initialized');
        this.log('State path:', statePath);
        this.log('State:', state);
        this.log('Placeholder:', placeholder);
        this.log('Read only:', readOnly);
        this.log('Tools:', tools);
        this.log('Tools options:', toolsOptions);
        this.log('Min height:', minHeight);
        if (this.tools.includes('attaches')) {
          if (!toolsOptions.hasOwnProperty('attaches')) {
            toolsOptions.attaches = {};
            console.warn('You have enabled the attaches tool but have not provided any options. The attaches tool will not work without options.');
          }
          enabledTools.attaches = {
            "class": (_editorjs_attaches__WEBPACK_IMPORTED_MODULE_0___default()),
            config: _objectSpread({}, toolsOptions.attaches)
          };
        }
        if (this.tools.includes('checklist')) {
          enabledTools.checklist = {
            "class": _editorjs_checklist__WEBPACK_IMPORTED_MODULE_1__["default"],
            inlineToolbar: true
          };
        }
        if (this.tools.includes('code')) {
          var codeToolConfig = toolsOptions.hasOwnProperty('code') ? toolsOptions.code : {};
          var codeToolDefaultConfig = {};
          enabledTools.code = {
            "class": _editorjs_code__WEBPACK_IMPORTED_MODULE_2__["default"],
            config: _objectSpread(_objectSpread({}, codeToolDefaultConfig), codeToolConfig)
          };
        }
        if (this.tools.includes('delimiter')) {
          enabledTools.delimiter = _editorjs_delimiter__WEBPACK_IMPORTED_MODULE_3__["default"];
        }
        if (this.tools.includes('header')) {
          var headerToolConfig = toolsOptions.hasOwnProperty('header') ? toolsOptions.header : {};
          var headerToolDefaultConfig = {};
          enabledTools.header = {
            "class": _editorjs_header__WEBPACK_IMPORTED_MODULE_5__["default"],
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+H',
            config: _objectSpread(_objectSpread({}, headerToolDefaultConfig), headerToolConfig)
          };
        }
        if (this.tools.includes('image')) {
          enabledTools.image = {
            "class": _editorjs_image__WEBPACK_IMPORTED_MODULE_7__["default"],
            config: {
              endpoints: {
                byFile: '/upload/file',
                byUrl: '/upload/url'
              }
            }
          };
        }
        if (this.tools.includes('image-gallery')) {
          enabledTools.imageGallery = {
            "class": (editorjs_gallery__WEBPACK_IMPORTED_MODULE_6___default()),
            config: {
              endpoints: {
                byFile: '/upload/file',
                byUrl: '/upload/url'
              }
            }
          };
        }
        if (this.tools.includes('inline-code')) {
          enabledTools.inlineCode = _editorjs_inline_code__WEBPACK_IMPORTED_MODULE_8__["default"];
        }
        if (this.tools.includes('link')) {
          if (!toolsOptions.hasOwnProperty('link')) {
            toolsOptions.link = {};
            console.warn('You have enabled the link tool but have not provided any options. The link tool will not work without options.');
          }
          enabledTools.linkTool = {
            "class": _editorjs_link__WEBPACK_IMPORTED_MODULE_9__["default"],
            config: _objectSpread({}, toolsOptions.link)
          };
        }
        if (this.tools.includes('list')) {
          var listToolConfig = toolsOptions.hasOwnProperty('list') ? toolsOptions.list : {};
          var listToolDefaultConfig = {
            defaultStyle: 'ordered'
          };
          enabledTools.list = {
            "class": _editorjs_list__WEBPACK_IMPORTED_MODULE_10__["default"],
            inlineToolbar: true,
            config: _objectSpread(_objectSpread({}, listToolDefaultConfig), listToolConfig)
          };
        }
        if (this.tools.includes('marker')) {
          enabledTools.Marker = {
            "class": _editorjs_marker__WEBPACK_IMPORTED_MODULE_11__["default"],
            shortcut: 'CMD+SHIFT+M'
          };
        }
        if (this.tools.includes('nested-list')) {
          var nestedListToolConfig = toolsOptions.hasOwnProperty('nested-list') ? toolsOptions['nested-list'] : {};
          var nestedListToolDefaultConfig = {
            defaultStyle: 'unordered'
          };
          enabledTools.list = {
            "class": _editorjs_nested_list__WEBPACK_IMPORTED_MODULE_12__["default"],
            config: _objectSpread(_objectSpread({}, nestedListToolConfig), nestedListToolDefaultConfig)
          };
        }
        if (this.tools.includes('paragraph')) {
          var paragraphToolConfig = toolsOptions.hasOwnProperty('paragraph') ? toolsOptions.paragraph : {};
          var paragraphToolDefaultConfig = {};
          enabledTools.paragraph = {
            "class": _editorjs_paragraph__WEBPACK_IMPORTED_MODULE_13__["default"],
            inlineToolbar: true,
            config: _objectSpread(_objectSpread({}, paragraphToolDefaultConfig), paragraphToolConfig)
          };
        }
        if (this.tools.includes('quote')) {
          var quoteToolConfig = toolsOptions.hasOwnProperty('quote') ? toolsOptions.quote : {};
          var quoteToolDefaultConfig = {};
          enabledTools.quote = {
            "class": _editorjs_quote__WEBPACK_IMPORTED_MODULE_14__["default"],
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: _objectSpread(_objectSpread({}, quoteToolDefaultConfig), quoteToolConfig)
          };
        }
        if (this.tools.includes('raw')) {
          var rawToolConfig = toolsOptions.hasOwnProperty('raw') ? toolsOptions.raw : {};
          var rawToolDefaultConfig = {};
          enabledTools.raw = {
            "class": _editorjs_raw__WEBPACK_IMPORTED_MODULE_15__["default"],
            config: _objectSpread(_objectSpread({}, rawToolDefaultConfig), rawToolConfig)
          };
        }
        if (this.tools.includes('style')) {
          enabledTools.style = editorjs_style__WEBPACK_IMPORTED_MODULE_20__.StyleInlineTool;
        }
        if (this.tools.includes('table')) {
          var tableToolConfig = toolsOptions.hasOwnProperty('table') ? toolsOptions.table : {};
          var tableToolDefaultConfig = {};
          enabledTools.table = {
            "class": _editorjs_table__WEBPACK_IMPORTED_MODULE_16__["default"],
            inlineToolbar: true,
            config: _objectSpread(_objectSpread({}, tableToolDefaultConfig), tableToolConfig)
          };
        }
        if (this.tools.includes('underline')) {
          enabledTools.underline = (_editorjs_underline__WEBPACK_IMPORTED_MODULE_17___default());
        }
        if (this.tools.includes('warning')) {
          var warningToolConfig = toolsOptions.hasOwnProperty('warning') ? toolsOptions.warning : {};
          var warningToolDefaultConfig = {
            titlePlaceholder: 'Title',
            messagePlaceholder: 'Message'
          };
          enabledTools.warning = {
            "class": _editorjs_warning__WEBPACK_IMPORTED_MODULE_18__["default"],
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+W',
            config: _objectSpread(_objectSpread({}, warningToolDefaultConfig), warningToolConfig)
          };
        }
        this.instance = new _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_4__["default"]({
          holder: this.$el,
          minHeight: minHeight,
          data: this.state,
          placeholder: placeholder,
          readOnly: readOnly,
          tools: enabledTools,
          onChange: function onChange() {
            _this.instance.save().then(function (outputData) {
              _this.state = outputData;
            });
          },
          onReady: function onReady() {
            var editor = _this.instance;
            new (editorjs_undo__WEBPACK_IMPORTED_MODULE_21___default())({
              editor: editor
            });
            new (editorjs_drag_drop__WEBPACK_IMPORTED_MODULE_19___default())(editor);
          }
        });
      }
    };
  });
});

/***/ }),

/***/ "./node_modules/editorjs-drag-drop/dist/bundle.js":
/*!********************************************************!*\
  !*** ./node_modules/editorjs-drag-drop/dist/bundle.js ***!
  \********************************************************/
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(self,(()=>(()=>{"use strict";var e={523:(e,t,r)=>{r.d(t,{A:()=>c});var o=r(601),n=r.n(o),a=r(314),i=r.n(a)()(n());i.push([e.id,'.ce-block--drop-target .ce-block__content:before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: -20px;\n  margin-top: -1px;\n  height: 8px;\n  width: 8px;\n  border: solid #a0a0a0;\n  border-width: 1px 1px 0 0;\n  -webkit-transform-origin: right;\n  transform-origin: right;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.ce-block--drop-target .ce-block__content:after {\n  background: none;\n}\n',""]);const c=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",o=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),o&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),o&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,o,n,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),n&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=n):u[4]="".concat(n)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function r(e){for(var r=-1,o=0;o<t.length;o++)if(t[o].identifier===e){r=o;break}return r}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var f=r(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var v=n(p,o);o.byIndex=c,t.splice(c,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function n(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,n){var a=o(e=e||[],n=n||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var s=o(e,n),l=0;l<a.length;l++){var u=r(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=s}}},659:e=>{var t={};e.exports=function(e,r){var o=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var o="";r.supports&&(o+="@supports (".concat(r.supports,") {")),r.media&&(o+="@media ".concat(r.media," {"));var n=void 0!==r.layer;n&&(o+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),o+=r.css,n&&(o+="}"),r.media&&(o+="}"),r.supports&&(o+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0;var o={};return(()=>{r.d(o,{default:()=>g});var e=r(72),t=r.n(e),n=r(825),a=r.n(n),i=r(659),c=r.n(i),s=r(56),l=r.n(s),u=r(540),d=r.n(u),f=r(113),p=r.n(f),v=r(523),y={};function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function b(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,m(o.key),o)}}function m(e){var t=function(e,t){if("object"!=h(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=h(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==h(t)?t:t+""}y.styleTagTransform=p(),y.setAttributes=l(),y.insert=c().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=d(),t()(v.A,y),v.A&&v.A.locals&&v.A.locals;var g=function(){return e=function e(t,r){var o=t.configuration,n=t.blocks,a=t.toolbar,i=t.save;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.toolbar=a,this.borderStyle=r||"1px dashed #aaa",this.api=n,this.holder="string"==typeof o.holder?document.getElementById(o.holder):o.holder,this.readOnly=o.readOnly,this.startBlock=null,this.endBlock=null,this.save=i,this.setDragListener(),this.setDropListener()},r=[{key:"isReadOnlySupported",get:function(){return!0}}],(t=[{key:"setElementCursor",value:function(e){if(e){var t=document.createRange(),r=window.getSelection();t.setStart(e.childNodes[0],0),t.collapse(!0),r.removeAllRanges(),r.addRange(t),e.focus()}}},{key:"setDragListener",value:function(){var e=this;if(!this.readOnly){var t=this.holder.querySelector(".ce-toolbar__settings-btn");t.setAttribute("draggable","true"),t.addEventListener("dragstart",(function(){e.startBlock=e.api.getCurrentBlockIndex()})),t.addEventListener("drag",(function(){if(e.toolbar.close(),!e.isTheOnlyBlock()){var t=e.holder.querySelectorAll(".ce-block"),r=e.holder.querySelector(".ce-block--drop-target");e.setElementCursor(r),e.setBorderBlocks(t,r)}}))}}},{key:"setBorderBlocks",value:function(e,t){var r=this;Object.values(e).forEach((function(o){var n=o.querySelector(".ce-block__content");o!==t?(n.style.removeProperty("border-top"),n.style.removeProperty("border-bottom")):Object.keys(e).find((function(r){return e[r]===t}))>r.startBlock?n.style.borderBottom=r.borderStyle:n.style.borderTop=r.borderStyle}))}},{key:"setDropListener",value:function(){var e=this;document.addEventListener("drop",(function(t){var r=t.target;if(e.holder.contains(r)&&null!==e.startBlock){var o=e.getDropTarget(r);if(o){var n=o.querySelector(".ce-block__content");n.style.removeProperty("border-top"),n.style.removeProperty("border-bottom"),e.endBlock=e.getTargetPosition(o),e.moveBlocks()}}e.startBlock=null}))}},{key:"getDropTarget",value:function(e){return e.classList.contains("ce-block")?e:e.closest(".ce-block")}},{key:"getTargetPosition",value:function(e){return Array.from(e.parentNode.children).indexOf(e)}},{key:"isTheOnlyBlock",value:function(){return 1===this.api.getBlocksCount()}},{key:"moveBlocks",value:function(){this.isTheOnlyBlock()||this.api.move(this.endBlock,this.startBlock)}}])&&b(e.prototype,t),r&&b(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t,r}()})(),o.default})()));

/***/ }),

/***/ "./node_modules/editorjs-gallery/dist/bundle.js":
/*!******************************************************!*\
  !*** ./node_modules/editorjs-gallery/dist/bundle.js ***!
  \******************************************************/
/***/ ((module) => {

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@codexteam/ajax/dist/main.js":
/*!***************************************************!*\
  !*** ./node_modules/@codexteam/ajax/dist/main.js ***!
  \***************************************************/
/***/ ((module) => {

eval("!function(e,t){ true?module.exports=t():0}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=3)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function(\"return this\")()}catch(e){\"object\"==typeof window&&(n=window)}e.exports=n},function(e,t,n){\"use strict\";(function(e){var r=n(2),o=setTimeout;function i(){}function a(e){if(!(this instanceof a))throw new TypeError(\"Promises must be constructed via new\");if(\"function\"!=typeof e)throw new TypeError(\"not a function\");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function u(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void s(t.promise,e)}c(t.promise,r)}else(1===e._state?c:s)(t.promise,e._value)})):e._deferreds.push(t)}function c(e,t){try{if(t===e)throw new TypeError(\"A promise cannot be resolved with itself.\");if(t&&(\"object\"==typeof t||\"function\"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void f(e);if(\"function\"==typeof n)return void d((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,f(e)}catch(t){s(e,t)}var r,o}function s(e,t){e._state=2,e._value=t,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&a._immediateFn(function(){e._handled||a._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)u(e,e._deferreds[t]);e._deferreds=null}function l(e,t,n){this.onFulfilled=\"function\"==typeof e?e:null,this.onRejected=\"function\"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1;try{e(function(e){n||(n=!0,c(t,e))},function(e){n||(n=!0,s(t,e))})}catch(e){if(n)return;n=!0,s(t,e)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(i);return u(this,new l(e,t,n)),n},a.prototype.finally=r.a,a.all=function(e){return new a(function(t,n){if(!e||void 0===e.length)throw new TypeError(\"Promise.all accepts an array\");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,a){try{if(a&&(\"object\"==typeof a||\"function\"==typeof a)){var u=a.then;if(\"function\"==typeof u)return void u.call(a,function(t){i(e,t)},n)}r[e]=a,0==--o&&t(r)}catch(e){n(e)}}for(var a=0;a<r.length;a++)i(a,r[a])})},a.resolve=function(e){return e&&\"object\"==typeof e&&e.constructor===a?e:new a(function(t){t(e)})},a.reject=function(e){return new a(function(t,n){n(e)})},a.race=function(e){return new a(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},a._immediateFn=\"function\"==typeof e&&function(t){e(t)}||function(e){o(e,0)},a._unhandledRejectionFn=function(e){\"undefined\"!=typeof console&&console&&console.warn(\"Possible Unhandled Promise Rejection:\",e)},t.a=a}).call(this,n(5).setImmediate)},function(e,t,n){\"use strict\";t.a=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}},function(e,t,n){\"use strict\";function r(e){return(r=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e})(e)}n(4);var o,i,a,u,c,s,f,l=n(8),d=(i=function(e){return new Promise(function(t,n){e=u(e),(e=c(e)).beforeSend&&e.beforeSend();var r=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject(\"Microsoft.XMLHTTP\");r.open(e.method,e.url),r.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\"),Object.keys(e.headers).forEach(function(t){var n=e.headers[t];r.setRequestHeader(t,n)});var o=e.ratio;r.upload.addEventListener(\"progress\",function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*o/100);e.progress(Math.min(r,100))},!1),r.addEventListener(\"progress\",function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*(100-o)/100)+o;e.progress(Math.min(r,100))},!1),r.onreadystatechange=function(){if(4===r.readyState){var e=r.response;try{e=JSON.parse(e)}catch(e){}var o=l.parseHeaders(r.getAllResponseHeaders()),i={body:e,code:r.status,headers:o};f(r.status)?t(i):n(i)}},r.send(e.data)})},a=function(e){return e.method=\"POST\",i(e)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.url&&\"string\"!=typeof e.url)throw new Error(\"Url must be a string\");if(e.url=e.url||\"\",e.method&&\"string\"!=typeof e.method)throw new Error(\"`method` must be a string or null\");if(e.method=e.method?e.method.toUpperCase():\"GET\",e.headers&&\"object\"!==r(e.headers))throw new Error(\"`headers` must be an object or null\");if(e.headers=e.headers||{},e.type&&(\"string\"!=typeof e.type||!Object.values(o).includes(e.type)))throw new Error(\"`type` must be taken from module's «contentType» library\");if(e.progress&&\"function\"!=typeof e.progress)throw new Error(\"`progress` must be a function or null\");if(e.progress=e.progress||function(e){},e.beforeSend=e.beforeSend||function(e){},e.ratio&&\"number\"!=typeof e.ratio)throw new Error(\"`ratio` must be a number\");if(e.ratio<0||e.ratio>100)throw new Error(\"`ratio` must be in a 0-100 interval\");if(e.ratio=e.ratio||90,e.accept&&\"string\"!=typeof e.accept)throw new Error(\"`accept` must be a string with a list of allowed mime-types\");if(e.accept=e.accept||\"*/*\",e.multiple&&\"boolean\"!=typeof e.multiple)throw new Error(\"`multiple` must be a true or false\");if(e.multiple=e.multiple||!1,e.fieldName&&\"string\"!=typeof e.fieldName)throw new Error(\"`fieldName` must be a string\");return e.fieldName=e.fieldName||\"files\",e},c=function(e){switch(e.method){case\"GET\":var t=s(e.data,o.URLENCODED);delete e.data,e.url=/\\?/.test(e.url)?e.url+\"&\"+t:e.url+\"?\"+t;break;case\"POST\":case\"PUT\":case\"DELETE\":case\"UPDATE\":var n=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||o.JSON}(e);(l.isFormData(e.data)||l.isFormElement(e.data))&&(n=o.FORM),e.data=s(e.data,n),n!==d.contentType.FORM&&(e.headers[\"content-type\"]=n)}return e},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case o.URLENCODED:return l.urlEncode(e);case o.JSON:return l.jsonEncode(e);case o.FORM:return l.formEncode(e);default:return e}},f=function(e){return e>=200&&e<300},{contentType:o={URLENCODED:\"application/x-www-form-urlencoded; charset=utf-8\",FORM:\"multipart/form-data\",JSON:\"application/json; charset=utf-8\"},request:i,get:function(e){return e.method=\"GET\",i(e)},post:a,transport:function(e){return e=u(e),l.selectFiles(e).then(function(t){for(var n=new FormData,r=0;r<t.length;r++)n.append(e.fieldName,t[r],t[r].name);l.isObject(e.data)&&Object.keys(e.data).forEach(function(t){var r=e.data[t];n.append(t,r)});var o=e.beforeSend;return e.beforeSend=function(){return o(t)},e.data=n,a(e)})},selectFiles:function(e){return delete(e=u(e)).beforeSend,l.selectFiles(e)}});e.exports=d},function(e,t,n){\"use strict\";n.r(t);var r=n(1);window.Promise=window.Promise||r.a},function(e,t,n){(function(e){var r=void 0!==e&&e||\"undefined\"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(6),t.setImmediate=\"undefined\"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate=\"undefined\"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){\"use strict\";if(!e.setImmediate){var r,o,i,a,u,c=1,s={},f=!1,l=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,\"[object process]\"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){m(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage(\"\",\"*\"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){m(e.data)},r=function(e){i.port2.postMessage(e)}):l&&\"onreadystatechange\"in l.createElement(\"script\")?(o=l.documentElement,r=function(e){var t=l.createElement(\"script\");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(m,0,e)}:(a=\"setImmediate$\"+Math.random()+\"$\",u=function(t){t.source===e&&\"string\"==typeof t.data&&0===t.data.indexOf(a)&&m(+t.data.slice(a.length))},e.addEventListener?e.addEventListener(\"message\",u,!1):e.attachEvent(\"onmessage\",u),r=function(t){e.postMessage(a+t,\"*\")}),d.setImmediate=function(e){\"function\"!=typeof e&&(e=new Function(\"\"+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return s[c]=o,r(c),c++},d.clearImmediate=p}function p(e){delete s[e]}function m(e){if(f)setTimeout(m,0,e);else{var t=s[e];if(t){f=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{p(e),f=!1}}}}}(\"undefined\"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(7))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error(\"setTimeout has not been defined\")}function a(){throw new Error(\"clearTimeout has not been defined\")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n=\"function\"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r=\"function\"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,s=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?s=c.concat(s):l=-1,s.length&&p())}function p(){if(!f){var e=u(d);f=!0;for(var t=s.length;t;){for(c=s,s=[];++l<t;)c&&c[l].run();l=-1,t=s.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||f||u(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title=\"browser\",o.browser=!0,o.env={},o.argv=[],o.version=\"\",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error(\"process.binding is not supported\")},o.cwd=function(){return\"/\"},o.chdir=function(e){throw new Error(\"process.chdir is not supported\")},o.umask=function(){return 0}},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(9);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e)}var t,n,i;return t=e,i=[{key:\"urlEncode\",value:function(e){return o(e)}},{key:\"jsonEncode\",value:function(e){return JSON.stringify(e)}},{key:\"formEncode\",value:function(e){if(this.isFormData(e))return e;if(this.isFormElement(e))return new FormData(e);if(this.isObject(e)){var t=new FormData;return Object.keys(e).forEach(function(n){var r=e[n];t.append(n,r)}),t}throw new Error(\"`data` must be an instance of Object, FormData or <FORM> HTMLElement\")}},{key:\"isObject\",value:function(e){return\"[object Object]\"===Object.prototype.toString.call(e)}},{key:\"isFormData\",value:function(e){return e instanceof FormData}},{key:\"isFormElement\",value:function(e){return e instanceof HTMLFormElement}},{key:\"selectFiles\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(t,n){var r=document.createElement(\"INPUT\");r.type=\"file\",e.multiple&&r.setAttribute(\"multiple\",\"multiple\"),e.accept&&r.setAttribute(\"accept\",e.accept),r.style.display=\"none\",document.body.appendChild(r),r.addEventListener(\"change\",function(e){var n=e.target.files;t(n),document.body.removeChild(r)},!1),r.click()})}},{key:\"parseHeaders\",value:function(e){var t=e.trim().split(/[\\r\\n]+/),n={};return t.forEach(function(e){var t=e.split(\": \"),r=t.shift(),o=t.join(\": \");r&&(n[r]=o)}),n}}],(n=null)&&r(t.prototype,n),i&&r(t,i),e}()},function(e,t){var n=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,escape).replace(/%20/g,\"+\")},r=function(e,t,o,i){return t=t||null,o=o||\"&\",i=i||null,e?function(e){for(var t=new Array,n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}(Object.keys(e).map(function(a){var u,c,s=a;if(i&&(s=i+\"[\"+s+\"]\"),\"object\"==typeof e[a]&&null!==e[a])u=r(e[a],null,o,s);else{t&&(c=s,s=!isNaN(parseFloat(c))&&isFinite(c)?t+Number(s):s);var f=e[a];f=(f=0===(f=!1===(f=!0===f?\"1\":f)?\"0\":f)?\"0\":f)||\"\",u=n(s)+\"=\"+n(f)}return u})).join(o).replace(/[!'()*]/g,\"\"):\"\"};e.exports=r}])});\n\n//# sourceURL=webpack://ImageGallery/./node_modules/@codexteam/ajax/dist/main.js?");

/***/ }),

/***/ "./src/delete.js":
/*!***********************!*\
  !*** ./src/delete.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Delete)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/**\n * Module for file uploading. Handle 3 scenarios:\n *  1. Select file from device and upload\n *  2. Upload by pasting URL\n *  3. Upload by pasting file from Clipboard or by Drag'n'Drop\n */\nvar Delete = /*#__PURE__*/function () {\n  /**\n   * @param {object} params - uploader module params\n   * @param {ImageConfig} params.config - image tool config\n   */\n  function Delete(_ref) {\n    var config = _ref.config;\n    _classCallCheck(this, Delete);\n    this.config = config;\n  }\n  /**\n   * Handle clicks on the upload file button\n   */\n  /**\n    * @param {File} file\n  */\n  _createClass(Delete, [{\n    key: \"onDelete\",\n    value: function onDelete(file) {\n      return file;\n    }\n  }]);\n  return Delete;\n}();\n\n\n//# sourceURL=webpack://ImageGallery/./src/delete.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageGallery)\n/* harmony export */ });\n/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.pcss */ \"./src/index.pcss\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _tunes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tunes */ \"./src/tunes.js\");\n/* harmony import */ var _svg_toolbox_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg/toolbox.svg */ \"./src/svg/toolbox.svg\");\n/* harmony import */ var _svg_toolbox_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svg_toolbox_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uploader */ \"./src/uploader.js\");\n/* harmony import */ var _delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete */ \"./src/delete.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/**\n * Image Gallery Tool for the Editor.js\n *\n * @author Igor Shuvalov «VolgaIgor»\n * @license MIT\n * @see {@link https://github.com/VolgaIgor/editorjs-gallery}\n *\n * To developers.\n * To simplify Tool structure, we split it to 4 parts:\n *  1) index.js — main Tool's interface, public API and methods for working with data\n *  2) uploader.js — module that has methods for sending files via AJAX: from device, by URL or File pasting\n *  3) ui.js — module for UI manipulations: render, showing preloader, etc\n *  4) tunes.js — working with Block Tunes: render buttons, handle clicks\n *\n * For debug purposes there is a testing server\n * that can save uploaded files and return a Response {@link UploadResponseFormat}\n *\n *       $ node dev/server.js\n *\n * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:\n *\n * gallery: {\n *   class: ImageGallery,\n *   config: {\n *     endpoints: {\n *       byFile: 'http://localhost:8008/uploadFile',\n *     }\n *   },\n * },\n */\n\n/**\n * @typedef {object} ImageGalleryDataFile\n * @description Image Gallery Tool's files data format\n * @property {string} url — image URL\n */\n\n/**\n * @typedef {object} ImageGalleryData\n * @description Image Tool's input and output data format\n * @property {boolean} style - slider or fit\n * @property {string} caption — gallery caption\n * @property {ImageGalleryDataFile[]} files — Image file data returned from backend\n */\n\n// eslint-disable-next-line\n\n\n\n\n\n\n\n/**\n * @typedef {object} ImageConfig\n * @description Config supported by Tool\n * @property {object} endpoints - upload endpoints\n * @property {string} endpoints.byFile - upload by file\n * @property {string} field - field name for uploaded image\n * @property {string} types - available mime-types\n * @property {string} captionPlaceholder - placeholder for Caption field\n * @property {object} additionalRequestData - any data to send with requests\n * @property {object} additionalRequestHeaders - allows to pass custom headers with Request\n * @property {string} buttonContent - overrides for Select File button\n * @property {object} [uploader] - optional custom uploader\n * @property {object} [delete] - optional custom delete\n * @property {function(File): Promise.<UploadResponseFormat>} [uploader.uploadByFile] - method that upload image by File\n * @property {function(Array)} [delete.onDelete] - method that delete image by File\n */\n\n/**\n * @typedef {object} UploadResponseFormat\n * @description This format expected from backend on file uploading\n * @property {number} success - 1 for successful uploading, 0 for failure\n * @property {object} file - Object with file data.\n *                           'url' is required,\n *                           also can contain any additional data that will be saved and passed back\n * @property {string} file.url - [Required] image source URL\n */\nvar ImageGallery = /*#__PURE__*/function () {\n  /**\n   * @param {object} tool - tool properties got from editor.js\n   * @param {ImageGalleryData} tool.data - previously saved data\n   * @param {ImageConfig} tool.config - user config for Tool\n   * @param {object} tool.api - Editor.js API\n   * @param {boolean} tool.readOnly - read-only mode flag\n   */\n  function ImageGallery(_ref) {\n    var _this = this;\n    var data = _ref.data,\n      config = _ref.config,\n      api = _ref.api,\n      readOnly = _ref.readOnly;\n    _classCallCheck(this, ImageGallery);\n    this.api = api;\n    this.readOnly = readOnly;\n\n    /**\n     * Tool's initial config\n     */\n    this.config = {\n      endpoints: config.endpoints || '',\n      additionalRequestData: config.additionalRequestData || {},\n      additionalRequestHeaders: config.additionalRequestHeaders || {},\n      field: config.field || 'image',\n      types: config.types || 'image/*',\n      captionPlaceholder: this.api.i18n.t(config.captionPlaceholder || 'Gallery caption'),\n      buttonContent: config.buttonContent || '',\n      uploader: config.uploader || undefined,\n      actions: config.actions || [],\n      maxElementCount: config.maxElementCount || undefined\n    };\n\n    /**\n     * Module for file uploading\n     */\n    this.uploader = new _uploader__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n      config: this.config\n    });\n\n    /**\n     * Module for working with UI\n     */\n    this.ui = new _ui__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      api: api,\n      config: this.config,\n      onSelectFile: function onSelectFile() {\n        var maxElementCount = _this.config.maxElementCount ? _this.config.maxElementCount - _this._data.files.length : null;\n        _this.uploader.uploadSelectedFiles(maxElementCount, {\n          onPreview: function onPreview(file) {\n            return _this.ui.getPreloader(file);\n          },\n          onUpload: function onUpload(response, previewElem) {\n            _this.onUpload(response, previewElem);\n          },\n          onError: function onError(error, previewElem) {\n            _this.uploadingFailed(error, previewElem);\n          }\n        });\n      },\n      onDeleteFile: function onDeleteFile(id) {\n        if (_this._data.files[id] !== undefined) {\n          var imageDeleted = _this._data.files.splice(id, 1);\n          // send image deleted\n          _this.uploader.deletingFile(imageDeleted);\n        }\n        _this.deleteImage(id);\n        return id;\n      },\n      onMoveFile: function onMoveFile(oldId, newId) {\n        _this.moveImage(oldId, newId);\n      },\n      readOnly: readOnly\n    });\n\n    /**\n     * Module for working with tunes\n     */\n    this.tunes = new _tunes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n      api: api,\n      actions: this.config.actions,\n      onChange: function onChange(styleName) {\n        return _this.styleToggled(styleName);\n      }\n    });\n\n    /**\n     * Set saved state\n     */\n    this._data = {};\n    this.data = data;\n  }\n\n  /**\n   * Renders Block content\n   *\n   * @public\n   *\n   * @returns {HTMLDivElement}\n   */\n  _createClass(ImageGallery, [{\n    key: \"render\",\n    value: function render() {\n      return this.ui.render(this.data);\n    }\n  }, {\n    key: \"rendered\",\n    value: function rendered() {\n      this.checkMaxElemCount();\n      return this.ui.onRendered();\n    }\n\n    /**\n     * Validate data: check if Image exists\n     *\n     * @param {ImageGalleryData} savedData — data received after saving\n     * @returns {boolean} false if saved data is not correct, otherwise true\n     * @public\n     */\n  }, {\n    key: \"validate\",\n    value: function validate(savedData) {\n      if (!savedData.files || !savedData.files.length) {\n        return false;\n      }\n      return true;\n    }\n\n    /**\n     * Return Block data\n     *\n     * @public\n     *\n     * @returns {ImageGalleryData}\n     */\n  }, {\n    key: \"save\",\n    value: function save() {\n      var caption = this.ui.nodes.caption;\n      this._data.caption = caption.innerHTML;\n      return this.data;\n    }\n\n    /**\n     * Makes buttons with tunes: add background, add border, stretch image\n     *\n     * @public\n     *\n     * @returns {Element}\n     */\n  }, {\n    key: \"renderSettings\",\n    value: function renderSettings() {\n      return this.tunes.render(this.data);\n    }\n\n    /**\n     * Set new image file\n     *\n     * @private\n     *\n     * @param {ImageGalleryDataFile} file - uploaded file data\n     */\n  }, {\n    key: \"appendImage\",\n    value: function appendImage(file) {\n      if (file && file.url) {\n        if (this.config.maxElementCount && this._data.files.length >= this.config.maxElementCount) {\n          return;\n        }\n        this._data.files.push(file);\n        this.ui.appendImage(file);\n        this.checkMaxElemCount();\n      }\n    }\n\n    /**\n     * Move image file\n     *\n     * @private\n     *\n     * @param {integer} from - target image old index\n     * @param {integer} to - target image new index\n     */\n  }, {\n    key: \"moveImage\",\n    value: function moveImage(from, to) {\n      if (to >= this._data.files.length) {\n        to = this._data.files.length - 1;\n      }\n      this._data.files.splice(to, 0, this._data.files.splice(from, 1)[0]);\n    }\n\n    /**\n     * Delete image file\n     *\n     * @private\n     *\n     * @param {integer} id - image index\n     */\n  }, {\n    key: \"deleteImage\",\n    value: function deleteImage(id) {\n      if (this._data.files[id] !== undefined) {\n        var imageDeleted = this._data.files.splice(id, 1);\n        // send image deleted\n        this.config[\"delete\"](imageDeleted);\n        this.checkMaxElemCount();\n      }\n      return id;\n    }\n\n    /**\n     * Private methods\n     * ̿̿ ̿̿ ̿̿ ̿'̿'\\̵͇̿̿\\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿\n     */\n\n    /**\n     * Stores all Tool's data\n     *\n     * @private\n     *\n     * @param {ImageGalleryData} data - data in Image Tool format\n     */\n  }, {\n    key: \"data\",\n    get:\n    /**\n     * Return Tool data\n     *\n     * @private\n     *\n     * @returns {ImageGalleryData}\n     */\n    function get() {\n      return this._data;\n    }\n\n    /**\n     * File uploading callback\n     *\n     * @private\n     *\n     * @param {UploadResponseFormat} response - uploading server response\n     * @returns {void}\n     */,\n    set: function set(data) {\n      var _this2 = this;\n      this._data.files = [];\n      if (data.files) {\n        data.files.forEach(function (file) {\n          _this2.appendImage(file);\n        });\n      }\n      this._data.caption = data.caption || '';\n      this.ui.fillCaption(this._data.caption);\n      var style = data.style || '';\n      this.styleToggled(style);\n    }\n  }, {\n    key: \"onUpload\",\n    value: function onUpload(response, previewElem) {\n      this.ui.removePreloader(previewElem);\n      if (response.success && response.file) {\n        this.appendImage(response.file);\n      } else {\n        this.uploadingFailed('incorrect response: ' + JSON.stringify(response));\n      }\n    }\n\n    /**\n     * Handle uploader errors\n     *\n     * @private\n     * @param {string} errorText - uploading error text\n     * @returns {void}\n     */\n  }, {\n    key: \"uploadingFailed\",\n    value: function uploadingFailed(errorText, previewElem) {\n      this.ui.removePreloader(previewElem);\n      console.log('Image Tool: uploading failed because of', errorText);\n      this.api.notifier.show({\n        message: this.api.i18n.t('Couldn’t upload image. Please try another.'),\n        style: 'error'\n      });\n    }\n\n    /**\n     * Callback fired when Block Tune is activated\n     *\n     * @private\n     *\n     * @param {string} tuneName - tune that has been clicked\n     * @returns {void}\n     */\n  }, {\n    key: \"styleToggled\",\n    value: function styleToggled(tuneName) {\n      if (tuneName === 'fit') {\n        this._data.style = 'fit';\n      } else {\n        this._data.style = 'slider';\n      }\n    }\n  }, {\n    key: \"checkMaxElemCount\",\n    value: function checkMaxElemCount() {\n      if (this.config.maxElementCount && this._data.files.length >= this.config.maxElementCount) {\n        this.ui.hideFileButton();\n      } else {\n        this.ui.showFileButton();\n      }\n    }\n  }], [{\n    key: \"isReadOnlySupported\",\n    get:\n    /**\n     * Notify core that read-only mode is supported\n     *\n     * @returns {boolean}\n     */\n    function get() {\n      return true;\n    }\n\n    /**\n     * Get Tool toolbox settings\n     * icon - Tool icon's SVG\n     * title - title to show in toolbox\n     *\n     * @returns {{icon: string, title: string}}\n     */\n  }, {\n    key: \"toolbox\",\n    get: function get() {\n      return {\n        icon: (_svg_toolbox_svg__WEBPACK_IMPORTED_MODULE_3___default()),\n        title: 'Gallery'\n      };\n    }\n  }]);\n  return ImageGallery;\n}();\n\n\n//# sourceURL=webpack://ImageGallery/./src/index.js?");

/***/ }),

/***/ "./src/tunes.js":
/*!**********************!*\
  !*** ./src/tunes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tunes)\n/* harmony export */ });\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/ui.js\");\n/* harmony import */ var _svg_slider_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg/slider.svg */ \"./src/svg/slider.svg\");\n/* harmony import */ var _svg_slider_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_slider_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _svg_fit_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg/fit.svg */ \"./src/svg/fit.svg\");\n/* harmony import */ var _svg_fit_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_fit_svg__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\n/**\n * Working with Block Tunes\n */\nvar Tunes = /*#__PURE__*/function () {\n  /**\n   * @param {object} tune - image tool Tunes managers\n   * @param {object} tune.api - Editor API\n   * @param {object} tune.actions - list of user defined tunes\n   * @param {Function} tune.onChange - tune toggling callback\n   */\n  function Tunes(_ref) {\n    var api = _ref.api,\n      actions = _ref.actions,\n      onChange = _ref.onChange;\n    _classCallCheck(this, Tunes);\n    this.api = api;\n    this.actions = actions;\n    this.onChange = onChange;\n    this.buttons = [];\n  }\n\n  /**\n   * Available Image tunes\n   *\n   * @returns {{name: string, icon: string, title: string}[]}\n   */\n  _createClass(Tunes, [{\n    key: \"CSS\",\n    get:\n    /**\n     * Styles\n     *\n     * @returns {{wrapper: string, buttonBase: *, button: string, buttonActive: *}}\n     */\n    function get() {\n      return {\n        wrapper: 'image-gallery__tune-wrapper',\n        buttonBase: this.api.styles.settingsButton,\n        button: 'image-gallery__tune',\n        buttonActive: this.api.styles.settingsButtonActive\n      };\n    }\n\n    /**\n     * Makes buttons with tunes: add background, add border, stretch image\n     *\n     * @param {ImageGalleryData} toolData - generate Elements of tunes\n     * @returns {Element}\n     */\n  }, {\n    key: \"render\",\n    value: function render(toolData) {\n      var _this = this;\n      var wrapper = (0,_ui__WEBPACK_IMPORTED_MODULE_0__.make)('div', this.CSS.wrapper);\n      this.buttons = [];\n      var tunes = Tunes.tunes.concat(this.actions);\n      tunes.forEach(function (tune) {\n        var title = _this.api.i18n.t(tune.title);\n        var el = (0,_ui__WEBPACK_IMPORTED_MODULE_0__.make)('div', [_this.CSS.buttonBase, _this.CSS.button], {\n          innerHTML: tune.icon,\n          title: title\n        });\n        el.addEventListener('click', function () {\n          _this.tuneClicked(tune.name, tune.action);\n        });\n        el.dataset.tune = tune.name;\n        el.classList.toggle(_this.CSS.buttonActive, toolData.style === tune.name);\n        _this.buttons.push(el);\n        _this.api.tooltip.onHover(el, title, {\n          placement: 'top'\n        });\n        wrapper.appendChild(el);\n      });\n      return wrapper;\n    }\n\n    /**\n     * Clicks to one of the tunes\n     *\n     * @param {string} tuneName - clicked tune name\n     * @param {Function} customFunction - function to execute on click\n     */\n  }, {\n    key: \"tuneClicked\",\n    value: function tuneClicked(tuneName, customFunction) {\n      var _this2 = this;\n      if (typeof customFunction === 'function') {\n        if (!customFunction(tuneName)) {\n          return false;\n        }\n      }\n      this.buttons.forEach(function (button) {\n        button.classList.toggle(_this2.CSS.buttonActive, button.dataset.tune === tuneName);\n      });\n      this.onChange(tuneName);\n    }\n  }], [{\n    key: \"tunes\",\n    get: function get() {\n      return [{\n        name: 'slider',\n        icon: (_svg_slider_svg__WEBPACK_IMPORTED_MODULE_1___default()),\n        title: 'Slider'\n      }, {\n        name: 'fit',\n        icon: (_svg_fit_svg__WEBPACK_IMPORTED_MODULE_2___default()),\n        title: 'Fit'\n      }];\n    }\n  }]);\n  return Tunes;\n}();\n\n\n//# sourceURL=webpack://ImageGallery/./src/tunes.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ui),\n/* harmony export */   \"make\": () => (/* binding */ make)\n/* harmony export */ });\n/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sortablejs */ \"./node_modules/sortablejs/modular/sortable.esm.js\");\n/* harmony import */ var _svg_button_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg/button-icon.svg */ \"./src/svg/button-icon.svg\");\n/* harmony import */ var _svg_button_icon_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_button_icon_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _svg_trash_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg/trash.svg */ \"./src/svg/trash.svg\");\n/* harmony import */ var _svg_trash_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_trash_svg__WEBPACK_IMPORTED_MODULE_2__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\n/**\n * Class for working with UI:\n *  - rendering base structure\n *  - show/hide preview\n *  - apply tune view\n */\nvar Ui = /*#__PURE__*/function () {\n  /**\n   * @param {object} ui - image tool Ui module\n   * @param {object} ui.api - Editor.js API\n   * @param {ImageConfig} ui.config - user config\n   * @param {Function} ui.onSelectFile - callback for clicks on Select file button\n   * @param {boolean} ui.readOnly - read-only mode flag\n   */\n  function Ui(_ref) {\n    var _this = this;\n    var api = _ref.api,\n      config = _ref.config,\n      onSelectFile = _ref.onSelectFile,\n      onDeleteFile = _ref.onDeleteFile,\n      onMoveFile = _ref.onMoveFile,\n      readOnly = _ref.readOnly;\n    _classCallCheck(this, Ui);\n    this.api = api;\n    this.config = config;\n    this.onSelectFile = onSelectFile;\n    this.onDeleteFile = onDeleteFile;\n    this.onMoveFile = onMoveFile;\n    this.readOnly = readOnly;\n    this.nodes = {\n      wrapper: make('div', [this.CSS.baseClass, this.CSS.wrapper]),\n      fileButton: this.createFileButton(),\n      container: make('div', this.CSS.container),\n      itemsContainer: make('div', this.CSS.itemsContainer),\n      controls: make('div', this.CSS.controls),\n      preloaderContainer: make('div', this.CSS.preloaderContainer),\n      caption: make('div', [this.CSS.input, this.CSS.caption], {\n        contentEditable: !this.readOnly\n      })\n    };\n    this.preloadersCount = 0;\n\n    /**\n     * Create base structure\n     *  <wrapper>\n     *    <container>\n     *      <items-container>\n     *        <image-container />\n     *      </items-container>\n     *      <controls>\n     *        <preloader-container />\n     *        <select-file-button />\n     *      </controls>\n     *    </container>\n     *    <caption />\n     *  </wrapper>\n     */\n    this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder;\n    this.nodes.controls.appendChild(this.nodes.preloaderContainer);\n    this.nodes.controls.appendChild(this.nodes.fileButton);\n    this.nodes.container.appendChild(this.nodes.itemsContainer);\n    this.nodes.container.appendChild(this.nodes.controls);\n    this.nodes.wrapper.appendChild(this.nodes.container);\n    this.nodes.wrapper.appendChild(this.nodes.caption);\n    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(function (eventName) {\n      _this.nodes.itemsContainer.addEventListener(eventName, function (e) {\n        e.preventDefault();\n        e.stopPropagation();\n      }, false);\n    });\n  }\n\n  /**\n   * CSS classes\n   *\n   * @returns {object}\n   */\n  _createClass(Ui, [{\n    key: \"CSS\",\n    get: function get() {\n      return {\n        baseClass: this.api.styles.block,\n        loading: this.api.styles.loader,\n        input: this.api.styles.input,\n        button: this.api.styles.button,\n        /**\n         * Tool's classes\n         */\n        wrapper: 'image-gallery',\n        container: 'image-gallery__container',\n        controls: 'image-gallery__controls',\n        itemsContainer: 'image-gallery__items',\n        imageContainer: 'image-gallery__image',\n        preloaderContainer: 'image-gallery__preloaders',\n        imagePreloader: 'image-gallery__preloader',\n        imageEl: 'image-gallery__image-picture',\n        trashButton: 'image-gallery__image-trash',\n        caption: 'image-gallery__caption'\n      };\n    }\n  }, {\n    key: \"render\",\n    value:\n    /**\n     * Renders tool UI\n     *\n     * @param {ImageGalleryData} toolData - saved tool data\n     * @returns {Element}\n     */\n    function render(toolData) {\n      return this.nodes.wrapper;\n    }\n  }, {\n    key: \"onRendered\",\n    value: function onRendered() {\n      var _this2 = this;\n      if (!this.sortable) {\n        this.sortable = new sortablejs__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.nodes.itemsContainer, {\n          handle: \".\".concat(this.CSS.imageContainer),\n          filter: \".\".concat(this.CSS.trashButton),\n          onStart: function onStart() {\n            _this2.nodes.itemsContainer.classList.add(\"\".concat(_this2.CSS.itemsContainer, \"--drag\"));\n          },\n          onEnd: function onEnd(evt) {\n            _this2.nodes.itemsContainer.classList.remove(\"\".concat(_this2.CSS.itemsContainer, \"--drag\"));\n            if (evt.oldIndex !== evt.newIndex) {\n              _this2.onMoveFile(evt.oldIndex, evt.newIndex);\n            }\n          }\n        });\n      }\n    }\n\n    /**\n     * Creates upload-file button\n     *\n     * @returns {Element}\n     */\n  }, {\n    key: \"createFileButton\",\n    value: function createFileButton() {\n      var _this3 = this;\n      var button = make('div', [this.CSS.button]);\n      button.innerHTML = this.config.buttonContent || \"\".concat((_svg_button_icon_svg__WEBPACK_IMPORTED_MODULE_1___default()), \" \").concat(this.api.i18n.t('Select an Image'));\n      button.addEventListener('click', function () {\n        _this3.onSelectFile();\n      });\n      return button;\n    }\n\n    /**\n     * Shows uploading button\n     *\n     * @returns {void}\n     */\n  }, {\n    key: \"showFileButton\",\n    value: function showFileButton() {\n      this.nodes.fileButton.style.display = '';\n    }\n\n    /**\n     * Hide uploading button\n     *\n     * @returns {void}\n     */\n  }, {\n    key: \"hideFileButton\",\n    value: function hideFileButton() {\n      this.nodes.fileButton.style.display = 'none';\n    }\n  }, {\n    key: \"getPreloader\",\n    value: function getPreloader(file) {\n      /**\n       * @type {HTMLElement}\n       */\n      var preloader = make('div', this.CSS.imagePreloader);\n      this.nodes.preloaderContainer.append(preloader);\n      var reader = new FileReader();\n      reader.readAsDataURL(file);\n      reader.onload = function (e) {\n        preloader.style.backgroundImage = \"url(\".concat(e.target.result, \")\");\n      };\n      return preloader;\n    }\n  }, {\n    key: \"removePreloader\",\n    value: function removePreloader(preloader) {\n      preloader.remove();\n    }\n\n    /**\n     * Shows an image\n     *\n     * @param {ImageGalleryDataFile} file - image file object\n     * @returns {void}\n     */\n  }, {\n    key: \"appendImage\",\n    value: function appendImage(file) {\n      var _this4 = this;\n      var url = file.url;\n\n      /**\n       * Check for a source extension to compose element correctly: video tag for mp4, img — for others\n       */\n      var tag = /\\.mp4$/.test(url) ? 'VIDEO' : 'IMG';\n      var attributes = {\n        src: url\n      };\n\n      /**\n       * We use eventName variable because IMG and VIDEO tags have different event to be called on source load\n       * - IMG: load\n       * - VIDEO: loadeddata\n       *\n       * @type {string}\n       */\n      var eventName = 'load';\n\n      /**\n       * Update attributes and eventName if source is a mp4 video\n       */\n      if (tag === 'VIDEO') {\n        /**\n         * Add attributes for playing muted mp4 as a gif\n         *\n         * @type {boolean}\n         */\n        attributes.autoplay = false;\n        attributes.muted = true;\n        attributes.playsinline = true;\n\n        /**\n         * Change event to be listened\n         *\n         * @type {string}\n         */\n        eventName = 'loadeddata';\n      }\n\n      /**\n       * @type {Element}\n       */\n      var imageContainer = make('div', [this.CSS.imageContainer]);\n\n      /**\n       * Compose tag with defined attributes\n       *\n       * @type {Element}\n       */\n      var imageEl = make(tag, this.CSS.imageEl, attributes);\n\n      /**\n       * Add load event listener\n       */\n      imageEl.addEventListener(eventName, function () {\n        _this4.toggleStatus(imageContainer, Ui.status.FILLED);\n      });\n      imageContainer.appendChild(imageEl);\n      var title = this.api.i18n.t('Delete');\n\n      /**\n       * @type {Element}\n       */\n      var imageTrash = make('div', [this.CSS.trashButton], {\n        innerHTML: (_svg_trash_svg__WEBPACK_IMPORTED_MODULE_2___default()),\n        title: title\n      });\n      this.api.tooltip.onHover(imageTrash, title, {\n        placement: 'top'\n      });\n      imageTrash.addEventListener('click', function () {\n        _this4.api.tooltip.hide();\n        var arrayChild = Array.prototype.slice.call(_this4.nodes.itemsContainer.children);\n        var elIndex = arrayChild.indexOf(imageContainer);\n        if (elIndex !== -1) {\n          _this4.nodes.itemsContainer.removeChild(imageContainer);\n          _this4.onDeleteFile(elIndex);\n        }\n      });\n      imageContainer.appendChild(imageTrash);\n      this.nodes.itemsContainer.append(imageContainer);\n    }\n\n    /**\n     * Shows caption input\n     *\n     * @param {string} text - caption text\n     * @returns {void}\n     */\n  }, {\n    key: \"fillCaption\",\n    value: function fillCaption(text) {\n      if (this.nodes.caption) {\n        this.nodes.caption.innerHTML = text;\n      }\n    }\n\n    /**\n     * Changes UI status\n     *\n     * @param {Element} elem\n     * @param {string} status - see {@link Ui.status} constants\n     * @returns {void}\n     */\n  }, {\n    key: \"toggleStatus\",\n    value: function toggleStatus(elem, status) {\n      for (var statusType in Ui.status) {\n        if (Object.prototype.hasOwnProperty.call(Ui.status, statusType)) {\n          elem.classList.toggle(\"\".concat(this.CSS.imageContainer, \"--\").concat(Ui.status[statusType]), status === Ui.status[statusType]);\n        }\n      }\n    }\n  }], [{\n    key: \"status\",\n    get:\n    /**\n     * Ui statuses:\n     * - empty\n     * - uploading\n     * - filled\n     *\n     * @returns {{EMPTY: string, UPLOADING: string, FILLED: string}}\n     */\n    function get() {\n      return {\n        EMPTY: 'empty',\n        UPLOADING: 'loading',\n        FILLED: 'filled'\n      };\n    }\n  }]);\n  return Ui;\n}();\n/**\n * Helper for making Elements with attributes\n *\n * @param  {string} tagName           - new Element tag name\n * @param  {Array|string} classNames  - list or name of CSS class\n * @param  {object} attributes        - any attributes\n * @returns {Element}\n */\n\nvar make = function make(tagName) {\n  var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var el = document.createElement(tagName);\n  if (Array.isArray(classNames)) {\n    var _el$classList;\n    (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));\n  } else if (classNames) {\n    el.classList.add(classNames);\n  }\n  for (var attrName in attributes) {\n    el[attrName] = attributes[attrName];\n  }\n  return el;\n};\n\n//# sourceURL=webpack://ImageGallery/./src/ui.js?");

/***/ }),

/***/ "./src/uploader.js":
/*!*************************!*\
  !*** ./src/uploader.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Uploader)\n/* harmony export */ });\n/* harmony import */ var _codexteam_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @codexteam/ajax */ \"./node_modules/@codexteam/ajax/dist/main.js\");\n/* harmony import */ var _codexteam_ajax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_codexteam_ajax__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n/**\n * Module for file uploading. Handle 3 scenarios:\n *  1. Select file from device and upload\n *  2. Upload by pasting URL\n *  3. Upload by pasting file from Clipboard or by Drag'n'Drop\n */\nvar Uploader = /*#__PURE__*/function () {\n  /**\n   * @param {object} params - uploader module params\n   * @param {ImageConfig} params.config - image tool config\n   */\n  function Uploader(_ref) {\n    var config = _ref.config;\n    _classCallCheck(this, Uploader);\n    this.config = config;\n  }\n  _createClass(Uploader, [{\n    key: \"deletingFile\",\n    value: function deletingFile(file) {\n      return file;\n    }\n\n    /**\n     * Handle clicks on the upload file button\n     */\n  }, {\n    key: \"uploadSelectedFiles\",\n    value: function uploadSelectedFiles(maxElementCount, _ref2) {\n      var _this = this;\n      var onPreview = _ref2.onPreview,\n        onUpload = _ref2.onUpload,\n        onError = _ref2.onError;\n      _codexteam_ajax__WEBPACK_IMPORTED_MODULE_0___default().selectFiles({\n        accept: this.config.types,\n        multiple: true\n      }).then(function (files) {\n        var loadedFiles = 0;\n        var _loop = function _loop() {\n          if (maxElementCount !== null && loadedFiles == maxElementCount) {\n            return \"break\";\n          } else {\n            loadedFiles++;\n          }\n          var file = files[i];\n          var previewElem = onPreview(file);\n          var uploader;\n          if (_this.config.uploader && typeof _this.config.uploader.uploadByFile === 'function') {\n            var customUpload = _this.config.uploader.uploadByFile(file);\n            if (!isPromise(customUpload)) {\n              console.warn('Custom uploader method uploadByFile should return a Promise');\n            }\n            uploader = customUpload;\n          } else {\n            uploader = _this.uploadByFile(file);\n          }\n          uploader.then(function (response) {\n            onUpload(response, previewElem);\n          })[\"catch\"](function (error) {\n            onError(error, previewElem);\n          });\n        };\n        for (var i = 0; i < files.length; i++) {\n          var _ret = _loop();\n          if (_ret === \"break\") break;\n        }\n      });\n    }\n\n    /**\n     * Default file uploader\n     * Fires ajax.post()\n     *\n     * @param {File} file - file pasted by drag-n-drop\n     */\n  }, {\n    key: \"uploadByFile\",\n    value: function uploadByFile(file) {\n      var formData = new FormData();\n      formData.append(this.config.field, file);\n      if (this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length) {\n        Object.entries(this.config.additionalRequestData).forEach(function (_ref3) {\n          var _ref4 = _slicedToArray(_ref3, 2),\n            name = _ref4[0],\n            value = _ref4[1];\n          formData.append(name, value);\n        });\n      }\n      return _codexteam_ajax__WEBPACK_IMPORTED_MODULE_0___default().post({\n        url: this.config.endpoints.byFile,\n        data: formData,\n        type: (_codexteam_ajax__WEBPACK_IMPORTED_MODULE_0___default().contentType.JSON),\n        headers: this.config.additionalRequestHeaders\n      }).then(function (response) {\n        return response.body;\n      });\n    }\n  }]);\n  return Uploader;\n}();\n/**\n * Check if passed object is a Promise\n *\n * @param  {*}  object - object to check\n * @returns {boolean}\n */\n\nfunction isPromise(object) {\n  return object && typeof object.then === \"function\";\n}\n\n//# sourceURL=webpack://ImageGallery/./src/uploader.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/index.pcss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/index.pcss ***!
  \************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".image-gallery {\\n  --bg-color: #cdd1e0;\\n  --front-color: #388ae5;\\n  --border-color: #e8e8eb;\\n}\\n\\n  .image-gallery__container {\\n    background: black;\\n    margin-bottom: 10px;\\n    padding: 5px;\\n  }\\n\\n  .image-gallery__controls {\\n    display: flex;\\n    gap: 10px;\\n    padding: 8px 2px 3px;\\n  }\\n\\n  .image-gallery__items {\\n    display: grid;\\n    gap: 10px;\\n    grid-template-columns: 1fr 1fr 1fr;\\n    padding: 10px;\\n    background-color: #222222;\\n  }\\n\\n  .image-gallery__items:empty {\\n    display: none;\\n  }\\n\\n  .image-gallery__preloaders {\\n    display: flex;\\n    flex-grow: 1;\\n    flex-wrap: nowrap;\\n    padding: 5px;\\n    gap: 8px;\\n    overflow: hidden;\\n  }\\n\\n  .image-gallery__preloader {\\n    min-width: 30px;\\n    height: 30px;\\n    border-radius: 50%;\\n    background-size: cover;\\n    position: relative;\\n    background-color: var(--bg-color);\\n    background-position: center center;\\n  }\\n\\n  .image-gallery__preloader::after {\\n      content: \\\"\\\";\\n      position: absolute;\\n      z-index: 3;\\n      width: 30px;\\n      height: 30px;\\n      border-radius: 50%;\\n      border: 2px solid var(--bg-color);\\n      border-top-color: var(--front-color);\\n      left: 50%;\\n      top: 50%;\\n      margin-top: -15px;\\n      margin-left: -15px;\\n      animation: image-preloader-spin 2s infinite linear;\\n      box-sizing: border-box;\\n    }\\n\\n  .image-gallery__image {\\n    position: relative;\\n    overflow: hidden;\\n    aspect-ratio: 16 / 9;\\n    cursor: move;\\n    user-select: none;\\n    background-color: black;\\n    border-radius: 3px;\\n    padding: 5px;\\n  }\\n\\n  .image-gallery__image.sortable-ghost {\\n      opacity: .75;\\n    }\\n\\n  .image-gallery__image--empty,\\n    .image-gallery__image--loading {\\n      display: none;\\n    }\\n\\n  .image-gallery__image-picture {\\n      border-radius: 3px;\\n      max-width: 100%;\\n      height: 100%;\\n      display: block;\\n      margin: auto;\\n      object-fit: cover;\\n      pointer-events: none;\\n    }\\n\\n  .image-gallery__image-trash {\\n      position: absolute;\\n      top: 3px;\\n      right: 3px;\\n      cursor: pointer;\\n      color: #fff;\\n      font-size: 18px;\\n      background-color: rgba(0, 0, 0, .25);\\n      line-height: 1;\\n      padding: 6px 8px;\\n      border-radius: 3px;\\n      transition: background-color .1s;\\n    }\\n\\n  .image-gallery__image-trash:hover {\\n        background-color: rgba(0, 0, 0, .5);\\n      }\\n\\n  .image-gallery__caption[contentEditable=\\\"true\\\"][data-placeholder]::before {\\n      position: absolute !important;\\n      content: attr(data-placeholder);\\n      color: #707684;\\n      font-weight: normal;\\n      display: none;\\n    }\\n\\n  .image-gallery__caption[contentEditable=\\\"true\\\"][data-placeholder]:empty::before {\\n        display: block;\\n      }\\n\\n  .image-gallery__caption[contentEditable=\\\"true\\\"][data-placeholder]:empty:focus::before {\\n        display: none;\\n      }\\n\\n  .image-gallery__caption {\\n    margin-bottom: 10px;\\n  }\\n\\n  .image-gallery .cdx-button {\\n    height: 40px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    padding: 12px;\\n    gap: 5px;\\n    white-space: nowrap;\\n  }\\n\\n  /**\\n   * Tunes\\n   * ----------------\\n   */\\n\\n  .image-gallery__tune-wrapper {\\n    display: flex;\\n  }\\n\\n  .image-gallery__tune {\\n    width: 50%;\\n    margin-right: 0 !important;\\n  }\\n\\n@keyframes image-preloader-spin {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ImageGallery/./src/index.pcss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://ImageGallery/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ImageGallery/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/sortablejs/modular/sortable.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MultiDrag\": () => (/* binding */ MultiDragPlugin),\n/* harmony export */   \"Sortable\": () => (/* binding */ Sortable),\n/* harmony export */   \"Swap\": () => (/* binding */ SwapPlugin),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**!\n * Sortable 1.15.0\n * @author\tRubaXa   <trash@rubaxa.org>\n * @author\towenm    <owen23355@gmail.com>\n * @license MIT\n */\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n\n    if (enumerableOnly) {\n      symbols = symbols.filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n      });\n    }\n\n    keys.push.apply(keys, symbols);\n  }\n\n  return keys;\n}\n\nfunction _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    if (i % 2) {\n      ownKeys(Object(source), true).forEach(function (key) {\n        _defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(Object(source)).forEach(function (key) {\n        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n      });\n    }\n  }\n\n  return target;\n}\n\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function (obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function (obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n\n  var target = _objectWithoutPropertiesLoose(source, excluded);\n\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nfunction _toConsumableArray(arr) {\n  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\n\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\n\n  return arr2;\n}\n\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nvar version = \"1.15.0\";\n\nfunction userAgent(pattern) {\n  if (typeof window !== 'undefined' && window.navigator) {\n    return !! /*@__PURE__*/navigator.userAgent.match(pattern);\n  }\n}\n\nvar IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\\.|msie|iemobile|Windows Phone)/i);\nvar Edge = userAgent(/Edge/i);\nvar FireFox = userAgent(/firefox/i);\nvar Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);\nvar IOS = userAgent(/iP(ad|od|hone)/i);\nvar ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);\n\nvar captureMode = {\n  capture: false,\n  passive: false\n};\n\nfunction on(el, event, fn) {\n  el.addEventListener(event, fn, !IE11OrLess && captureMode);\n}\n\nfunction off(el, event, fn) {\n  el.removeEventListener(event, fn, !IE11OrLess && captureMode);\n}\n\nfunction matches(\n/**HTMLElement*/\nel,\n/**String*/\nselector) {\n  if (!selector) return;\n  selector[0] === '>' && (selector = selector.substring(1));\n\n  if (el) {\n    try {\n      if (el.matches) {\n        return el.matches(selector);\n      } else if (el.msMatchesSelector) {\n        return el.msMatchesSelector(selector);\n      } else if (el.webkitMatchesSelector) {\n        return el.webkitMatchesSelector(selector);\n      }\n    } catch (_) {\n      return false;\n    }\n  }\n\n  return false;\n}\n\nfunction getParentOrHost(el) {\n  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;\n}\n\nfunction closest(\n/**HTMLElement*/\nel,\n/**String*/\nselector,\n/**HTMLElement*/\nctx, includeCTX) {\n  if (el) {\n    ctx = ctx || document;\n\n    do {\n      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {\n        return el;\n      }\n\n      if (el === ctx) break;\n      /* jshint boss:true */\n    } while (el = getParentOrHost(el));\n  }\n\n  return null;\n}\n\nvar R_SPACE = /\\s+/g;\n\nfunction toggleClass(el, name, state) {\n  if (el && name) {\n    if (el.classList) {\n      el.classList[state ? 'add' : 'remove'](name);\n    } else {\n      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');\n      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');\n    }\n  }\n}\n\nfunction css(el, prop, val) {\n  var style = el && el.style;\n\n  if (style) {\n    if (val === void 0) {\n      if (document.defaultView && document.defaultView.getComputedStyle) {\n        val = document.defaultView.getComputedStyle(el, '');\n      } else if (el.currentStyle) {\n        val = el.currentStyle;\n      }\n\n      return prop === void 0 ? val : val[prop];\n    } else {\n      if (!(prop in style) && prop.indexOf('webkit') === -1) {\n        prop = '-webkit-' + prop;\n      }\n\n      style[prop] = val + (typeof val === 'string' ? '' : 'px');\n    }\n  }\n}\n\nfunction matrix(el, selfOnly) {\n  var appliedTransforms = '';\n\n  if (typeof el === 'string') {\n    appliedTransforms = el;\n  } else {\n    do {\n      var transform = css(el, 'transform');\n\n      if (transform && transform !== 'none') {\n        appliedTransforms = transform + ' ' + appliedTransforms;\n      }\n      /* jshint boss:true */\n\n    } while (!selfOnly && (el = el.parentNode));\n  }\n\n  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;\n  /*jshint -W056 */\n\n  return matrixFn && new matrixFn(appliedTransforms);\n}\n\nfunction find(ctx, tagName, iterator) {\n  if (ctx) {\n    var list = ctx.getElementsByTagName(tagName),\n        i = 0,\n        n = list.length;\n\n    if (iterator) {\n      for (; i < n; i++) {\n        iterator(list[i], i);\n      }\n    }\n\n    return list;\n  }\n\n  return [];\n}\n\nfunction getWindowScrollingElement() {\n  var scrollingElement = document.scrollingElement;\n\n  if (scrollingElement) {\n    return scrollingElement;\n  } else {\n    return document.documentElement;\n  }\n}\n/**\n * Returns the \"bounding client rect\" of given element\n * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted\n * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container\n * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr\n * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone\n * @param  {[HTMLElement]} container              The parent the element will be placed in\n * @return {Object}                               The boundingClientRect of el, with specified adjustments\n */\n\n\nfunction getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {\n  if (!el.getBoundingClientRect && el !== window) return;\n  var elRect, top, left, bottom, right, height, width;\n\n  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {\n    elRect = el.getBoundingClientRect();\n    top = elRect.top;\n    left = elRect.left;\n    bottom = elRect.bottom;\n    right = elRect.right;\n    height = elRect.height;\n    width = elRect.width;\n  } else {\n    top = 0;\n    left = 0;\n    bottom = window.innerHeight;\n    right = window.innerWidth;\n    height = window.innerHeight;\n    width = window.innerWidth;\n  }\n\n  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {\n    // Adjust for translate()\n    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)\n    // Not needed on <= IE11\n\n    if (!IE11OrLess) {\n      do {\n        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {\n          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container\n\n          top -= containerRect.top + parseInt(css(container, 'border-top-width'));\n          left -= containerRect.left + parseInt(css(container, 'border-left-width'));\n          bottom = top + elRect.height;\n          right = left + elRect.width;\n          break;\n        }\n        /* jshint boss:true */\n\n      } while (container = container.parentNode);\n    }\n  }\n\n  if (undoScale && el !== window) {\n    // Adjust for scale()\n    var elMatrix = matrix(container || el),\n        scaleX = elMatrix && elMatrix.a,\n        scaleY = elMatrix && elMatrix.d;\n\n    if (elMatrix) {\n      top /= scaleY;\n      left /= scaleX;\n      width /= scaleX;\n      height /= scaleY;\n      bottom = top + height;\n      right = left + width;\n    }\n  }\n\n  return {\n    top: top,\n    left: left,\n    bottom: bottom,\n    right: right,\n    width: width,\n    height: height\n  };\n}\n/**\n * Checks if a side of an element is scrolled past a side of its parents\n * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question\n * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')\n * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')\n * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element\n */\n\n\nfunction isScrolledPast(el, elSide, parentSide) {\n  var parent = getParentAutoScrollElement(el, true),\n      elSideVal = getRect(el)[elSide];\n  /* jshint boss:true */\n\n  while (parent) {\n    var parentSideVal = getRect(parent)[parentSide],\n        visible = void 0;\n\n    if (parentSide === 'top' || parentSide === 'left') {\n      visible = elSideVal >= parentSideVal;\n    } else {\n      visible = elSideVal <= parentSideVal;\n    }\n\n    if (!visible) return parent;\n    if (parent === getWindowScrollingElement()) break;\n    parent = getParentAutoScrollElement(parent, false);\n  }\n\n  return false;\n}\n/**\n * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)\n * and non-draggable elements\n * @param  {HTMLElement} el       The parent element\n * @param  {Number} childNum      The index of the child\n * @param  {Object} options       Parent Sortable's options\n * @return {HTMLElement}          The child at index childNum, or null if not found\n */\n\n\nfunction getChild(el, childNum, options, includeDragEl) {\n  var currentChild = 0,\n      i = 0,\n      children = el.children;\n\n  while (i < children.length) {\n    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {\n      if (currentChild === childNum) {\n        return children[i];\n      }\n\n      currentChild++;\n    }\n\n    i++;\n  }\n\n  return null;\n}\n/**\n * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)\n * @param  {HTMLElement} el       Parent element\n * @param  {selector} selector    Any other elements that should be ignored\n * @return {HTMLElement}          The last child, ignoring ghostEl\n */\n\n\nfunction lastChild(el, selector) {\n  var last = el.lastElementChild;\n\n  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {\n    last = last.previousElementSibling;\n  }\n\n  return last || null;\n}\n/**\n * Returns the index of an element within its parent for a selected set of\n * elements\n * @param  {HTMLElement} el\n * @param  {selector} selector\n * @return {number}\n */\n\n\nfunction index(el, selector) {\n  var index = 0;\n\n  if (!el || !el.parentNode) {\n    return -1;\n  }\n  /* jshint boss:true */\n\n\n  while (el = el.previousElementSibling) {\n    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {\n      index++;\n    }\n  }\n\n  return index;\n}\n/**\n * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.\n * The value is returned in real pixels.\n * @param  {HTMLElement} el\n * @return {Array}             Offsets in the format of [left, top]\n */\n\n\nfunction getRelativeScrollOffset(el) {\n  var offsetLeft = 0,\n      offsetTop = 0,\n      winScroller = getWindowScrollingElement();\n\n  if (el) {\n    do {\n      var elMatrix = matrix(el),\n          scaleX = elMatrix.a,\n          scaleY = elMatrix.d;\n      offsetLeft += el.scrollLeft * scaleX;\n      offsetTop += el.scrollTop * scaleY;\n    } while (el !== winScroller && (el = el.parentNode));\n  }\n\n  return [offsetLeft, offsetTop];\n}\n/**\n * Returns the index of the object within the given array\n * @param  {Array} arr   Array that may or may not hold the object\n * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find\n * @return {Number}      The index of the object in the array, or -1\n */\n\n\nfunction indexOfObject(arr, obj) {\n  for (var i in arr) {\n    if (!arr.hasOwnProperty(i)) continue;\n\n    for (var key in obj) {\n      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);\n    }\n  }\n\n  return -1;\n}\n\nfunction getParentAutoScrollElement(el, includeSelf) {\n  // skip to window\n  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();\n  var elem = el;\n  var gotSelf = false;\n\n  do {\n    // we don't need to get elem css if it isn't even overflowing in the first place (performance)\n    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {\n      var elemCSS = css(elem);\n\n      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {\n        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();\n        if (gotSelf || includeSelf) return elem;\n        gotSelf = true;\n      }\n    }\n    /* jshint boss:true */\n\n  } while (elem = elem.parentNode);\n\n  return getWindowScrollingElement();\n}\n\nfunction extend(dst, src) {\n  if (dst && src) {\n    for (var key in src) {\n      if (src.hasOwnProperty(key)) {\n        dst[key] = src[key];\n      }\n    }\n  }\n\n  return dst;\n}\n\nfunction isRectEqual(rect1, rect2) {\n  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);\n}\n\nvar _throttleTimeout;\n\nfunction throttle(callback, ms) {\n  return function () {\n    if (!_throttleTimeout) {\n      var args = arguments,\n          _this = this;\n\n      if (args.length === 1) {\n        callback.call(_this, args[0]);\n      } else {\n        callback.apply(_this, args);\n      }\n\n      _throttleTimeout = setTimeout(function () {\n        _throttleTimeout = void 0;\n      }, ms);\n    }\n  };\n}\n\nfunction cancelThrottle() {\n  clearTimeout(_throttleTimeout);\n  _throttleTimeout = void 0;\n}\n\nfunction scrollBy(el, x, y) {\n  el.scrollLeft += x;\n  el.scrollTop += y;\n}\n\nfunction clone(el) {\n  var Polymer = window.Polymer;\n  var $ = window.jQuery || window.Zepto;\n\n  if (Polymer && Polymer.dom) {\n    return Polymer.dom(el).cloneNode(true);\n  } else if ($) {\n    return $(el).clone(true)[0];\n  } else {\n    return el.cloneNode(true);\n  }\n}\n\nfunction setRect(el, rect) {\n  css(el, 'position', 'absolute');\n  css(el, 'top', rect.top);\n  css(el, 'left', rect.left);\n  css(el, 'width', rect.width);\n  css(el, 'height', rect.height);\n}\n\nfunction unsetRect(el) {\n  css(el, 'position', '');\n  css(el, 'top', '');\n  css(el, 'left', '');\n  css(el, 'width', '');\n  css(el, 'height', '');\n}\n\nvar expando = 'Sortable' + new Date().getTime();\n\nfunction AnimationStateManager() {\n  var animationStates = [],\n      animationCallbackId;\n  return {\n    captureAnimationState: function captureAnimationState() {\n      animationStates = [];\n      if (!this.options.animation) return;\n      var children = [].slice.call(this.el.children);\n      children.forEach(function (child) {\n        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;\n        animationStates.push({\n          target: child,\n          rect: getRect(child)\n        });\n\n        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation\n\n\n        if (child.thisAnimationDuration) {\n          var childMatrix = matrix(child, true);\n\n          if (childMatrix) {\n            fromRect.top -= childMatrix.f;\n            fromRect.left -= childMatrix.e;\n          }\n        }\n\n        child.fromRect = fromRect;\n      });\n    },\n    addAnimationState: function addAnimationState(state) {\n      animationStates.push(state);\n    },\n    removeAnimationState: function removeAnimationState(target) {\n      animationStates.splice(indexOfObject(animationStates, {\n        target: target\n      }), 1);\n    },\n    animateAll: function animateAll(callback) {\n      var _this = this;\n\n      if (!this.options.animation) {\n        clearTimeout(animationCallbackId);\n        if (typeof callback === 'function') callback();\n        return;\n      }\n\n      var animating = false,\n          animationTime = 0;\n      animationStates.forEach(function (state) {\n        var time = 0,\n            target = state.target,\n            fromRect = target.fromRect,\n            toRect = getRect(target),\n            prevFromRect = target.prevFromRect,\n            prevToRect = target.prevToRect,\n            animatingRect = state.rect,\n            targetMatrix = matrix(target, true);\n\n        if (targetMatrix) {\n          // Compensate for current animation\n          toRect.top -= targetMatrix.f;\n          toRect.left -= targetMatrix.e;\n        }\n\n        target.toRect = toRect;\n\n        if (target.thisAnimationDuration) {\n          // Could also check if animatingRect is between fromRect and toRect\n          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect\n          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {\n            // If returning to same place as started from animation and on same axis\n            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);\n          }\n        } // if fromRect != toRect: animate\n\n\n        if (!isRectEqual(toRect, fromRect)) {\n          target.prevFromRect = fromRect;\n          target.prevToRect = toRect;\n\n          if (!time) {\n            time = _this.options.animation;\n          }\n\n          _this.animate(target, animatingRect, toRect, time);\n        }\n\n        if (time) {\n          animating = true;\n          animationTime = Math.max(animationTime, time);\n          clearTimeout(target.animationResetTimer);\n          target.animationResetTimer = setTimeout(function () {\n            target.animationTime = 0;\n            target.prevFromRect = null;\n            target.fromRect = null;\n            target.prevToRect = null;\n            target.thisAnimationDuration = null;\n          }, time);\n          target.thisAnimationDuration = time;\n        }\n      });\n      clearTimeout(animationCallbackId);\n\n      if (!animating) {\n        if (typeof callback === 'function') callback();\n      } else {\n        animationCallbackId = setTimeout(function () {\n          if (typeof callback === 'function') callback();\n        }, animationTime);\n      }\n\n      animationStates = [];\n    },\n    animate: function animate(target, currentRect, toRect, duration) {\n      if (duration) {\n        css(target, 'transition', '');\n        css(target, 'transform', '');\n        var elMatrix = matrix(this.el),\n            scaleX = elMatrix && elMatrix.a,\n            scaleY = elMatrix && elMatrix.d,\n            translateX = (currentRect.left - toRect.left) / (scaleX || 1),\n            translateY = (currentRect.top - toRect.top) / (scaleY || 1);\n        target.animatingX = !!translateX;\n        target.animatingY = !!translateY;\n        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');\n        this.forRepaintDummy = repaint(target); // repaint\n\n        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));\n        css(target, 'transform', 'translate3d(0,0,0)');\n        typeof target.animated === 'number' && clearTimeout(target.animated);\n        target.animated = setTimeout(function () {\n          css(target, 'transition', '');\n          css(target, 'transform', '');\n          target.animated = false;\n          target.animatingX = false;\n          target.animatingY = false;\n        }, duration);\n      }\n    }\n  };\n}\n\nfunction repaint(target) {\n  return target.offsetWidth;\n}\n\nfunction calculateRealTime(animatingRect, fromRect, toRect, options) {\n  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;\n}\n\nvar plugins = [];\nvar defaults = {\n  initializeByDefault: true\n};\nvar PluginManager = {\n  mount: function mount(plugin) {\n    // Set default static properties\n    for (var option in defaults) {\n      if (defaults.hasOwnProperty(option) && !(option in plugin)) {\n        plugin[option] = defaults[option];\n      }\n    }\n\n    plugins.forEach(function (p) {\n      if (p.pluginName === plugin.pluginName) {\n        throw \"Sortable: Cannot mount plugin \".concat(plugin.pluginName, \" more than once\");\n      }\n    });\n    plugins.push(plugin);\n  },\n  pluginEvent: function pluginEvent(eventName, sortable, evt) {\n    var _this = this;\n\n    this.eventCanceled = false;\n\n    evt.cancel = function () {\n      _this.eventCanceled = true;\n    };\n\n    var eventNameGlobal = eventName + 'Global';\n    plugins.forEach(function (plugin) {\n      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable\n\n      if (sortable[plugin.pluginName][eventNameGlobal]) {\n        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({\n          sortable: sortable\n        }, evt));\n      } // Only fire plugin event if plugin is enabled in this sortable,\n      // and plugin has event defined\n\n\n      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {\n        sortable[plugin.pluginName][eventName](_objectSpread2({\n          sortable: sortable\n        }, evt));\n      }\n    });\n  },\n  initializePlugins: function initializePlugins(sortable, el, defaults, options) {\n    plugins.forEach(function (plugin) {\n      var pluginName = plugin.pluginName;\n      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;\n      var initialized = new plugin(sortable, el, sortable.options);\n      initialized.sortable = sortable;\n      initialized.options = sortable.options;\n      sortable[pluginName] = initialized; // Add default options from plugin\n\n      _extends(defaults, initialized.defaults);\n    });\n\n    for (var option in sortable.options) {\n      if (!sortable.options.hasOwnProperty(option)) continue;\n      var modified = this.modifyOption(sortable, option, sortable.options[option]);\n\n      if (typeof modified !== 'undefined') {\n        sortable.options[option] = modified;\n      }\n    }\n  },\n  getEventProperties: function getEventProperties(name, sortable) {\n    var eventProperties = {};\n    plugins.forEach(function (plugin) {\n      if (typeof plugin.eventProperties !== 'function') return;\n\n      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));\n    });\n    return eventProperties;\n  },\n  modifyOption: function modifyOption(sortable, name, value) {\n    var modifiedValue;\n    plugins.forEach(function (plugin) {\n      // Plugin must exist on the Sortable\n      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin\n\n      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {\n        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);\n      }\n    });\n    return modifiedValue;\n  }\n};\n\nfunction dispatchEvent(_ref) {\n  var sortable = _ref.sortable,\n      rootEl = _ref.rootEl,\n      name = _ref.name,\n      targetEl = _ref.targetEl,\n      cloneEl = _ref.cloneEl,\n      toEl = _ref.toEl,\n      fromEl = _ref.fromEl,\n      oldIndex = _ref.oldIndex,\n      newIndex = _ref.newIndex,\n      oldDraggableIndex = _ref.oldDraggableIndex,\n      newDraggableIndex = _ref.newDraggableIndex,\n      originalEvent = _ref.originalEvent,\n      putSortable = _ref.putSortable,\n      extraEventProperties = _ref.extraEventProperties;\n  sortable = sortable || rootEl && rootEl[expando];\n  if (!sortable) return;\n  var evt,\n      options = sortable.options,\n      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature\n\n  if (window.CustomEvent && !IE11OrLess && !Edge) {\n    evt = new CustomEvent(name, {\n      bubbles: true,\n      cancelable: true\n    });\n  } else {\n    evt = document.createEvent('Event');\n    evt.initEvent(name, true, true);\n  }\n\n  evt.to = toEl || rootEl;\n  evt.from = fromEl || rootEl;\n  evt.item = targetEl || rootEl;\n  evt.clone = cloneEl;\n  evt.oldIndex = oldIndex;\n  evt.newIndex = newIndex;\n  evt.oldDraggableIndex = oldDraggableIndex;\n  evt.newDraggableIndex = newDraggableIndex;\n  evt.originalEvent = originalEvent;\n  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;\n\n  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));\n\n  for (var option in allEventProperties) {\n    evt[option] = allEventProperties[option];\n  }\n\n  if (rootEl) {\n    rootEl.dispatchEvent(evt);\n  }\n\n  if (options[onName]) {\n    options[onName].call(sortable, evt);\n  }\n}\n\nvar _excluded = [\"evt\"];\n\nvar pluginEvent = function pluginEvent(eventName, sortable) {\n  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},\n      originalEvent = _ref.evt,\n      data = _objectWithoutProperties(_ref, _excluded);\n\n  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({\n    dragEl: dragEl,\n    parentEl: parentEl,\n    ghostEl: ghostEl,\n    rootEl: rootEl,\n    nextEl: nextEl,\n    lastDownEl: lastDownEl,\n    cloneEl: cloneEl,\n    cloneHidden: cloneHidden,\n    dragStarted: moved,\n    putSortable: putSortable,\n    activeSortable: Sortable.active,\n    originalEvent: originalEvent,\n    oldIndex: oldIndex,\n    oldDraggableIndex: oldDraggableIndex,\n    newIndex: newIndex,\n    newDraggableIndex: newDraggableIndex,\n    hideGhostForTarget: _hideGhostForTarget,\n    unhideGhostForTarget: _unhideGhostForTarget,\n    cloneNowHidden: function cloneNowHidden() {\n      cloneHidden = true;\n    },\n    cloneNowShown: function cloneNowShown() {\n      cloneHidden = false;\n    },\n    dispatchSortableEvent: function dispatchSortableEvent(name) {\n      _dispatchEvent({\n        sortable: sortable,\n        name: name,\n        originalEvent: originalEvent\n      });\n    }\n  }, data));\n};\n\nfunction _dispatchEvent(info) {\n  dispatchEvent(_objectSpread2({\n    putSortable: putSortable,\n    cloneEl: cloneEl,\n    targetEl: dragEl,\n    rootEl: rootEl,\n    oldIndex: oldIndex,\n    oldDraggableIndex: oldDraggableIndex,\n    newIndex: newIndex,\n    newDraggableIndex: newDraggableIndex\n  }, info));\n}\n\nvar dragEl,\n    parentEl,\n    ghostEl,\n    rootEl,\n    nextEl,\n    lastDownEl,\n    cloneEl,\n    cloneHidden,\n    oldIndex,\n    newIndex,\n    oldDraggableIndex,\n    newDraggableIndex,\n    activeGroup,\n    putSortable,\n    awaitingDragStarted = false,\n    ignoreNextClick = false,\n    sortables = [],\n    tapEvt,\n    touchEvt,\n    lastDx,\n    lastDy,\n    tapDistanceLeft,\n    tapDistanceTop,\n    moved,\n    lastTarget,\n    lastDirection,\n    pastFirstInvertThresh = false,\n    isCircumstantialInvert = false,\n    targetMoveDistance,\n    // For positioning ghost absolutely\nghostRelativeParent,\n    ghostRelativeParentInitialScroll = [],\n    // (left, top)\n_silent = false,\n    savedInputChecked = [];\n/** @const */\n\nvar documentExists = typeof document !== 'undefined',\n    PositionGhostAbsolutely = IOS,\n    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',\n    // This will not pass for IE9, because IE9 DnD only works on anchors\nsupportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),\n    supportCssPointerEvents = function () {\n  if (!documentExists) return; // false when <= IE11\n\n  if (IE11OrLess) {\n    return false;\n  }\n\n  var el = document.createElement('x');\n  el.style.cssText = 'pointer-events:auto';\n  return el.style.pointerEvents === 'auto';\n}(),\n    _detectDirection = function _detectDirection(el, options) {\n  var elCSS = css(el),\n      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),\n      child1 = getChild(el, 0, options),\n      child2 = getChild(el, 1, options),\n      firstChildCSS = child1 && css(child1),\n      secondChildCSS = child2 && css(child2),\n      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,\n      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;\n\n  if (elCSS.display === 'flex') {\n    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';\n  }\n\n  if (elCSS.display === 'grid') {\n    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';\n  }\n\n  if (child1 && firstChildCSS[\"float\"] && firstChildCSS[\"float\"] !== 'none') {\n    var touchingSideChild2 = firstChildCSS[\"float\"] === 'left' ? 'left' : 'right';\n    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';\n  }\n\n  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';\n},\n    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {\n  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,\n      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,\n      dragElOppLength = vertical ? dragRect.width : dragRect.height,\n      targetS1Opp = vertical ? targetRect.left : targetRect.top,\n      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,\n      targetOppLength = vertical ? targetRect.width : targetRect.height;\n  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;\n},\n\n/**\r\n * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.\r\n * @param  {Number} x      X position\r\n * @param  {Number} y      Y position\r\n * @return {HTMLElement}   Element of the first found nearest Sortable\r\n */\n_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {\n  var ret;\n  sortables.some(function (sortable) {\n    var threshold = sortable[expando].options.emptyInsertThreshold;\n    if (!threshold || lastChild(sortable)) return;\n    var rect = getRect(sortable),\n        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,\n        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;\n\n    if (insideHorizontally && insideVertically) {\n      return ret = sortable;\n    }\n  });\n  return ret;\n},\n    _prepareGroup = function _prepareGroup(options) {\n  function toFn(value, pull) {\n    return function (to, from, dragEl, evt) {\n      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;\n\n      if (value == null && (pull || sameGroup)) {\n        // Default pull value\n        // Default pull and put value if same group\n        return true;\n      } else if (value == null || value === false) {\n        return false;\n      } else if (pull && value === 'clone') {\n        return value;\n      } else if (typeof value === 'function') {\n        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);\n      } else {\n        var otherGroup = (pull ? to : from).options.group.name;\n        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;\n      }\n    };\n  }\n\n  var group = {};\n  var originalGroup = options.group;\n\n  if (!originalGroup || _typeof(originalGroup) != 'object') {\n    originalGroup = {\n      name: originalGroup\n    };\n  }\n\n  group.name = originalGroup.name;\n  group.checkPull = toFn(originalGroup.pull, true);\n  group.checkPut = toFn(originalGroup.put);\n  group.revertClone = originalGroup.revertClone;\n  options.group = group;\n},\n    _hideGhostForTarget = function _hideGhostForTarget() {\n  if (!supportCssPointerEvents && ghostEl) {\n    css(ghostEl, 'display', 'none');\n  }\n},\n    _unhideGhostForTarget = function _unhideGhostForTarget() {\n  if (!supportCssPointerEvents && ghostEl) {\n    css(ghostEl, 'display', '');\n  }\n}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position\n\n\nif (documentExists && !ChromeForAndroid) {\n  document.addEventListener('click', function (evt) {\n    if (ignoreNextClick) {\n      evt.preventDefault();\n      evt.stopPropagation && evt.stopPropagation();\n      evt.stopImmediatePropagation && evt.stopImmediatePropagation();\n      ignoreNextClick = false;\n      return false;\n    }\n  }, true);\n}\n\nvar nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {\n  if (dragEl) {\n    evt = evt.touches ? evt.touches[0] : evt;\n\n    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);\n\n    if (nearest) {\n      // Create imitation event\n      var event = {};\n\n      for (var i in evt) {\n        if (evt.hasOwnProperty(i)) {\n          event[i] = evt[i];\n        }\n      }\n\n      event.target = event.rootEl = nearest;\n      event.preventDefault = void 0;\n      event.stopPropagation = void 0;\n\n      nearest[expando]._onDragOver(event);\n    }\n  }\n};\n\nvar _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {\n  if (dragEl) {\n    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);\n  }\n};\n/**\r\n * @class  Sortable\r\n * @param  {HTMLElement}  el\r\n * @param  {Object}       [options]\r\n */\n\n\nfunction Sortable(el, options) {\n  if (!(el && el.nodeType && el.nodeType === 1)) {\n    throw \"Sortable: `el` must be an HTMLElement, not \".concat({}.toString.call(el));\n  }\n\n  this.el = el; // root element\n\n  this.options = options = _extends({}, options); // Export instance\n\n  el[expando] = this;\n  var defaults = {\n    group: null,\n    sort: true,\n    disabled: false,\n    store: null,\n    handle: null,\n    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',\n    swapThreshold: 1,\n    // percentage; 0 <= x <= 1\n    invertSwap: false,\n    // invert always\n    invertedSwapThreshold: null,\n    // will be set to same as swapThreshold if default\n    removeCloneOnHide: true,\n    direction: function direction() {\n      return _detectDirection(el, this.options);\n    },\n    ghostClass: 'sortable-ghost',\n    chosenClass: 'sortable-chosen',\n    dragClass: 'sortable-drag',\n    ignore: 'a, img',\n    filter: null,\n    preventOnFilter: true,\n    animation: 0,\n    easing: null,\n    setData: function setData(dataTransfer, dragEl) {\n      dataTransfer.setData('Text', dragEl.textContent);\n    },\n    dropBubble: false,\n    dragoverBubble: false,\n    dataIdAttr: 'data-id',\n    delay: 0,\n    delayOnTouchOnly: false,\n    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,\n    forceFallback: false,\n    fallbackClass: 'sortable-fallback',\n    fallbackOnBody: false,\n    fallbackTolerance: 0,\n    fallbackOffset: {\n      x: 0,\n      y: 0\n    },\n    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window && !Safari,\n    emptyInsertThreshold: 5\n  };\n  PluginManager.initializePlugins(this, el, defaults); // Set default options\n\n  for (var name in defaults) {\n    !(name in options) && (options[name] = defaults[name]);\n  }\n\n  _prepareGroup(options); // Bind all private methods\n\n\n  for (var fn in this) {\n    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {\n      this[fn] = this[fn].bind(this);\n    }\n  } // Setup drag mode\n\n\n  this.nativeDraggable = options.forceFallback ? false : supportDraggable;\n\n  if (this.nativeDraggable) {\n    // Touch start threshold cannot be greater than the native dragstart threshold\n    this.options.touchStartThreshold = 1;\n  } // Bind events\n\n\n  if (options.supportPointer) {\n    on(el, 'pointerdown', this._onTapStart);\n  } else {\n    on(el, 'mousedown', this._onTapStart);\n    on(el, 'touchstart', this._onTapStart);\n  }\n\n  if (this.nativeDraggable) {\n    on(el, 'dragover', this);\n    on(el, 'dragenter', this);\n  }\n\n  sortables.push(this.el); // Restore sorting\n\n  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager\n\n  _extends(this, AnimationStateManager());\n}\n\nSortable.prototype =\n/** @lends Sortable.prototype */\n{\n  constructor: Sortable,\n  _isOutsideThisEl: function _isOutsideThisEl(target) {\n    if (!this.el.contains(target) && target !== this.el) {\n      lastTarget = null;\n    }\n  },\n  _getDirection: function _getDirection(evt, target) {\n    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;\n  },\n  _onTapStart: function _onTapStart(\n  /** Event|TouchEvent */\n  evt) {\n    if (!evt.cancelable) return;\n\n    var _this = this,\n        el = this.el,\n        options = this.options,\n        preventOnFilter = options.preventOnFilter,\n        type = evt.type,\n        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,\n        target = (touch || evt).target,\n        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,\n        filter = options.filter;\n\n    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.\n\n\n    if (dragEl) {\n      return;\n    }\n\n    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {\n      return; // only left button and enabled\n    } // cancel dnd if original target is content editable\n\n\n    if (originalTarget.isContentEditable) {\n      return;\n    } // Safari ignores further event handling after mousedown\n\n\n    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === 'SELECT') {\n      return;\n    }\n\n    target = closest(target, options.draggable, el, false);\n\n    if (target && target.animated) {\n      return;\n    }\n\n    if (lastDownEl === target) {\n      // Ignoring duplicate `down`\n      return;\n    } // Get the index of the dragged element within its parent\n\n\n    oldIndex = index(target);\n    oldDraggableIndex = index(target, options.draggable); // Check filter\n\n    if (typeof filter === 'function') {\n      if (filter.call(this, evt, target, this)) {\n        _dispatchEvent({\n          sortable: _this,\n          rootEl: originalTarget,\n          name: 'filter',\n          targetEl: target,\n          toEl: el,\n          fromEl: el\n        });\n\n        pluginEvent('filter', _this, {\n          evt: evt\n        });\n        preventOnFilter && evt.cancelable && evt.preventDefault();\n        return; // cancel dnd\n      }\n    } else if (filter) {\n      filter = filter.split(',').some(function (criteria) {\n        criteria = closest(originalTarget, criteria.trim(), el, false);\n\n        if (criteria) {\n          _dispatchEvent({\n            sortable: _this,\n            rootEl: criteria,\n            name: 'filter',\n            targetEl: target,\n            fromEl: el,\n            toEl: el\n          });\n\n          pluginEvent('filter', _this, {\n            evt: evt\n          });\n          return true;\n        }\n      });\n\n      if (filter) {\n        preventOnFilter && evt.cancelable && evt.preventDefault();\n        return; // cancel dnd\n      }\n    }\n\n    if (options.handle && !closest(originalTarget, options.handle, el, false)) {\n      return;\n    } // Prepare `dragstart`\n\n\n    this._prepareDragStart(evt, touch, target);\n  },\n  _prepareDragStart: function _prepareDragStart(\n  /** Event */\n  evt,\n  /** Touch */\n  touch,\n  /** HTMLElement */\n  target) {\n    var _this = this,\n        el = _this.el,\n        options = _this.options,\n        ownerDocument = el.ownerDocument,\n        dragStartFn;\n\n    if (target && !dragEl && target.parentNode === el) {\n      var dragRect = getRect(target);\n      rootEl = el;\n      dragEl = target;\n      parentEl = dragEl.parentNode;\n      nextEl = dragEl.nextSibling;\n      lastDownEl = target;\n      activeGroup = options.group;\n      Sortable.dragged = dragEl;\n      tapEvt = {\n        target: dragEl,\n        clientX: (touch || evt).clientX,\n        clientY: (touch || evt).clientY\n      };\n      tapDistanceLeft = tapEvt.clientX - dragRect.left;\n      tapDistanceTop = tapEvt.clientY - dragRect.top;\n      this._lastX = (touch || evt).clientX;\n      this._lastY = (touch || evt).clientY;\n      dragEl.style['will-change'] = 'all';\n\n      dragStartFn = function dragStartFn() {\n        pluginEvent('delayEnded', _this, {\n          evt: evt\n        });\n\n        if (Sortable.eventCanceled) {\n          _this._onDrop();\n\n          return;\n        } // Delayed drag has been triggered\n        // we can re-enable the events: touchmove/mousemove\n\n\n        _this._disableDelayedDragEvents();\n\n        if (!FireFox && _this.nativeDraggable) {\n          dragEl.draggable = true;\n        } // Bind the events: dragstart/dragend\n\n\n        _this._triggerDragStart(evt, touch); // Drag start event\n\n\n        _dispatchEvent({\n          sortable: _this,\n          name: 'choose',\n          originalEvent: evt\n        }); // Chosen item\n\n\n        toggleClass(dragEl, options.chosenClass, true);\n      }; // Disable \"draggable\"\n\n\n      options.ignore.split(',').forEach(function (criteria) {\n        find(dragEl, criteria.trim(), _disableDraggable);\n      });\n      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);\n      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);\n      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);\n      on(ownerDocument, 'mouseup', _this._onDrop);\n      on(ownerDocument, 'touchend', _this._onDrop);\n      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)\n\n      if (FireFox && this.nativeDraggable) {\n        this.options.touchStartThreshold = 4;\n        dragEl.draggable = true;\n      }\n\n      pluginEvent('delayStart', this, {\n        evt: evt\n      }); // Delay is impossible for native DnD in Edge or IE\n\n      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {\n        if (Sortable.eventCanceled) {\n          this._onDrop();\n\n          return;\n        } // If the user moves the pointer or let go the click or touch\n        // before the delay has been reached:\n        // disable the delayed drag\n\n\n        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);\n        on(ownerDocument, 'touchend', _this._disableDelayedDrag);\n        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);\n        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);\n        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);\n        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);\n        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);\n      } else {\n        dragStartFn();\n      }\n    }\n  },\n  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(\n  /** TouchEvent|PointerEvent **/\n  e) {\n    var touch = e.touches ? e.touches[0] : e;\n\n    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {\n      this._disableDelayedDrag();\n    }\n  },\n  _disableDelayedDrag: function _disableDelayedDrag() {\n    dragEl && _disableDraggable(dragEl);\n    clearTimeout(this._dragStartTimer);\n\n    this._disableDelayedDragEvents();\n  },\n  _disableDelayedDragEvents: function _disableDelayedDragEvents() {\n    var ownerDocument = this.el.ownerDocument;\n    off(ownerDocument, 'mouseup', this._disableDelayedDrag);\n    off(ownerDocument, 'touchend', this._disableDelayedDrag);\n    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);\n    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);\n    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);\n    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);\n  },\n  _triggerDragStart: function _triggerDragStart(\n  /** Event */\n  evt,\n  /** Touch */\n  touch) {\n    touch = touch || evt.pointerType == 'touch' && evt;\n\n    if (!this.nativeDraggable || touch) {\n      if (this.options.supportPointer) {\n        on(document, 'pointermove', this._onTouchMove);\n      } else if (touch) {\n        on(document, 'touchmove', this._onTouchMove);\n      } else {\n        on(document, 'mousemove', this._onTouchMove);\n      }\n    } else {\n      on(dragEl, 'dragend', this);\n      on(rootEl, 'dragstart', this._onDragStart);\n    }\n\n    try {\n      if (document.selection) {\n        // Timeout neccessary for IE9\n        _nextTick(function () {\n          document.selection.empty();\n        });\n      } else {\n        window.getSelection().removeAllRanges();\n      }\n    } catch (err) {}\n  },\n  _dragStarted: function _dragStarted(fallback, evt) {\n\n    awaitingDragStarted = false;\n\n    if (rootEl && dragEl) {\n      pluginEvent('dragStarted', this, {\n        evt: evt\n      });\n\n      if (this.nativeDraggable) {\n        on(document, 'dragover', _checkOutsideTargetEl);\n      }\n\n      var options = this.options; // Apply effect\n\n      !fallback && toggleClass(dragEl, options.dragClass, false);\n      toggleClass(dragEl, options.ghostClass, true);\n      Sortable.active = this;\n      fallback && this._appendGhost(); // Drag start event\n\n      _dispatchEvent({\n        sortable: this,\n        name: 'start',\n        originalEvent: evt\n      });\n    } else {\n      this._nulling();\n    }\n  },\n  _emulateDragOver: function _emulateDragOver() {\n    if (touchEvt) {\n      this._lastX = touchEvt.clientX;\n      this._lastY = touchEvt.clientY;\n\n      _hideGhostForTarget();\n\n      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);\n      var parent = target;\n\n      while (target && target.shadowRoot) {\n        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);\n        if (target === parent) break;\n        parent = target;\n      }\n\n      dragEl.parentNode[expando]._isOutsideThisEl(target);\n\n      if (parent) {\n        do {\n          if (parent[expando]) {\n            var inserted = void 0;\n            inserted = parent[expando]._onDragOver({\n              clientX: touchEvt.clientX,\n              clientY: touchEvt.clientY,\n              target: target,\n              rootEl: parent\n            });\n\n            if (inserted && !this.options.dragoverBubble) {\n              break;\n            }\n          }\n\n          target = parent; // store last element\n        }\n        /* jshint boss:true */\n        while (parent = parent.parentNode);\n      }\n\n      _unhideGhostForTarget();\n    }\n  },\n  _onTouchMove: function _onTouchMove(\n  /**TouchEvent*/\n  evt) {\n    if (tapEvt) {\n      var options = this.options,\n          fallbackTolerance = options.fallbackTolerance,\n          fallbackOffset = options.fallbackOffset,\n          touch = evt.touches ? evt.touches[0] : evt,\n          ghostMatrix = ghostEl && matrix(ghostEl, true),\n          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,\n          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,\n          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),\n          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),\n          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging\n\n      if (!Sortable.active && !awaitingDragStarted) {\n        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {\n          return;\n        }\n\n        this._onDragStart(evt, true);\n      }\n\n      if (ghostEl) {\n        if (ghostMatrix) {\n          ghostMatrix.e += dx - (lastDx || 0);\n          ghostMatrix.f += dy - (lastDy || 0);\n        } else {\n          ghostMatrix = {\n            a: 1,\n            b: 0,\n            c: 0,\n            d: 1,\n            e: dx,\n            f: dy\n          };\n        }\n\n        var cssMatrix = \"matrix(\".concat(ghostMatrix.a, \",\").concat(ghostMatrix.b, \",\").concat(ghostMatrix.c, \",\").concat(ghostMatrix.d, \",\").concat(ghostMatrix.e, \",\").concat(ghostMatrix.f, \")\");\n        css(ghostEl, 'webkitTransform', cssMatrix);\n        css(ghostEl, 'mozTransform', cssMatrix);\n        css(ghostEl, 'msTransform', cssMatrix);\n        css(ghostEl, 'transform', cssMatrix);\n        lastDx = dx;\n        lastDy = dy;\n        touchEvt = touch;\n      }\n\n      evt.cancelable && evt.preventDefault();\n    }\n  },\n  _appendGhost: function _appendGhost() {\n    // Bug if using scale(): https://stackoverflow.com/questions/2637058\n    // Not being adjusted for\n    if (!ghostEl) {\n      var container = this.options.fallbackOnBody ? document.body : rootEl,\n          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),\n          options = this.options; // Position absolutely\n\n      if (PositionGhostAbsolutely) {\n        // Get relatively positioned parent\n        ghostRelativeParent = container;\n\n        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {\n          ghostRelativeParent = ghostRelativeParent.parentNode;\n        }\n\n        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {\n          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();\n          rect.top += ghostRelativeParent.scrollTop;\n          rect.left += ghostRelativeParent.scrollLeft;\n        } else {\n          ghostRelativeParent = getWindowScrollingElement();\n        }\n\n        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);\n      }\n\n      ghostEl = dragEl.cloneNode(true);\n      toggleClass(ghostEl, options.ghostClass, false);\n      toggleClass(ghostEl, options.fallbackClass, true);\n      toggleClass(ghostEl, options.dragClass, true);\n      css(ghostEl, 'transition', '');\n      css(ghostEl, 'transform', '');\n      css(ghostEl, 'box-sizing', 'border-box');\n      css(ghostEl, 'margin', 0);\n      css(ghostEl, 'top', rect.top);\n      css(ghostEl, 'left', rect.left);\n      css(ghostEl, 'width', rect.width);\n      css(ghostEl, 'height', rect.height);\n      css(ghostEl, 'opacity', '0.8');\n      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');\n      css(ghostEl, 'zIndex', '100000');\n      css(ghostEl, 'pointerEvents', 'none');\n      Sortable.ghost = ghostEl;\n      container.appendChild(ghostEl); // Set transform-origin\n\n      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');\n    }\n  },\n  _onDragStart: function _onDragStart(\n  /**Event*/\n  evt,\n  /**boolean*/\n  fallback) {\n    var _this = this;\n\n    var dataTransfer = evt.dataTransfer;\n    var options = _this.options;\n    pluginEvent('dragStart', this, {\n      evt: evt\n    });\n\n    if (Sortable.eventCanceled) {\n      this._onDrop();\n\n      return;\n    }\n\n    pluginEvent('setupClone', this);\n\n    if (!Sortable.eventCanceled) {\n      cloneEl = clone(dragEl);\n      cloneEl.removeAttribute(\"id\");\n      cloneEl.draggable = false;\n      cloneEl.style['will-change'] = '';\n\n      this._hideClone();\n\n      toggleClass(cloneEl, this.options.chosenClass, false);\n      Sortable.clone = cloneEl;\n    } // #1143: IFrame support workaround\n\n\n    _this.cloneId = _nextTick(function () {\n      pluginEvent('clone', _this);\n      if (Sortable.eventCanceled) return;\n\n      if (!_this.options.removeCloneOnHide) {\n        rootEl.insertBefore(cloneEl, dragEl);\n      }\n\n      _this._hideClone();\n\n      _dispatchEvent({\n        sortable: _this,\n        name: 'clone'\n      });\n    });\n    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events\n\n    if (fallback) {\n      ignoreNextClick = true;\n      _this._loopId = setInterval(_this._emulateDragOver, 50);\n    } else {\n      // Undo what was set in _prepareDragStart before drag started\n      off(document, 'mouseup', _this._onDrop);\n      off(document, 'touchend', _this._onDrop);\n      off(document, 'touchcancel', _this._onDrop);\n\n      if (dataTransfer) {\n        dataTransfer.effectAllowed = 'move';\n        options.setData && options.setData.call(_this, dataTransfer, dragEl);\n      }\n\n      on(document, 'drop', _this); // #1276 fix:\n\n      css(dragEl, 'transform', 'translateZ(0)');\n    }\n\n    awaitingDragStarted = true;\n    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));\n    on(document, 'selectstart', _this);\n    moved = true;\n\n    if (Safari) {\n      css(document.body, 'user-select', 'none');\n    }\n  },\n  // Returns true - if no further action is needed (either inserted or another condition)\n  _onDragOver: function _onDragOver(\n  /**Event*/\n  evt) {\n    var el = this.el,\n        target = evt.target,\n        dragRect,\n        targetRect,\n        revert,\n        options = this.options,\n        group = options.group,\n        activeSortable = Sortable.active,\n        isOwner = activeGroup === group,\n        canSort = options.sort,\n        fromSortable = putSortable || activeSortable,\n        vertical,\n        _this = this,\n        completedFired = false;\n\n    if (_silent) return;\n\n    function dragOverEvent(name, extra) {\n      pluginEvent(name, _this, _objectSpread2({\n        evt: evt,\n        isOwner: isOwner,\n        axis: vertical ? 'vertical' : 'horizontal',\n        revert: revert,\n        dragRect: dragRect,\n        targetRect: targetRect,\n        canSort: canSort,\n        fromSortable: fromSortable,\n        target: target,\n        completed: completed,\n        onMove: function onMove(target, after) {\n          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);\n        },\n        changed: changed\n      }, extra));\n    } // Capture animation state\n\n\n    function capture() {\n      dragOverEvent('dragOverAnimationCapture');\n\n      _this.captureAnimationState();\n\n      if (_this !== fromSortable) {\n        fromSortable.captureAnimationState();\n      }\n    } // Return invocation when dragEl is inserted (or completed)\n\n\n    function completed(insertion) {\n      dragOverEvent('dragOverCompleted', {\n        insertion: insertion\n      });\n\n      if (insertion) {\n        // Clones must be hidden before folding animation to capture dragRectAbsolute properly\n        if (isOwner) {\n          activeSortable._hideClone();\n        } else {\n          activeSortable._showClone(_this);\n        }\n\n        if (_this !== fromSortable) {\n          // Set ghost class to new sortable's ghost class\n          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);\n          toggleClass(dragEl, options.ghostClass, true);\n        }\n\n        if (putSortable !== _this && _this !== Sortable.active) {\n          putSortable = _this;\n        } else if (_this === Sortable.active && putSortable) {\n          putSortable = null;\n        } // Animation\n\n\n        if (fromSortable === _this) {\n          _this._ignoreWhileAnimating = target;\n        }\n\n        _this.animateAll(function () {\n          dragOverEvent('dragOverAnimationComplete');\n          _this._ignoreWhileAnimating = null;\n        });\n\n        if (_this !== fromSortable) {\n          fromSortable.animateAll();\n          fromSortable._ignoreWhileAnimating = null;\n        }\n      } // Null lastTarget if it is not inside a previously swapped element\n\n\n      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {\n        lastTarget = null;\n      } // no bubbling and not fallback\n\n\n      if (!options.dragoverBubble && !evt.rootEl && target !== document) {\n        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted\n\n\n        !insertion && nearestEmptyInsertDetectEvent(evt);\n      }\n\n      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();\n      return completedFired = true;\n    } // Call when dragEl has been inserted\n\n\n    function changed() {\n      newIndex = index(dragEl);\n      newDraggableIndex = index(dragEl, options.draggable);\n\n      _dispatchEvent({\n        sortable: _this,\n        name: 'change',\n        toEl: el,\n        newIndex: newIndex,\n        newDraggableIndex: newDraggableIndex,\n        originalEvent: evt\n      });\n    }\n\n    if (evt.preventDefault !== void 0) {\n      evt.cancelable && evt.preventDefault();\n    }\n\n    target = closest(target, options.draggable, el, true);\n    dragOverEvent('dragOver');\n    if (Sortable.eventCanceled) return completedFired;\n\n    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {\n      return completed(false);\n    }\n\n    ignoreNextClick = false;\n\n    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) // Reverting item into the original list\n    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {\n      vertical = this._getDirection(evt, target) === 'vertical';\n      dragRect = getRect(dragEl);\n      dragOverEvent('dragOverValid');\n      if (Sortable.eventCanceled) return completedFired;\n\n      if (revert) {\n        parentEl = rootEl; // actualization\n\n        capture();\n\n        this._hideClone();\n\n        dragOverEvent('revert');\n\n        if (!Sortable.eventCanceled) {\n          if (nextEl) {\n            rootEl.insertBefore(dragEl, nextEl);\n          } else {\n            rootEl.appendChild(dragEl);\n          }\n        }\n\n        return completed(true);\n      }\n\n      var elLastChild = lastChild(el, options.draggable);\n\n      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {\n        // Insert to end of list\n        // If already at end of list: Do not insert\n        if (elLastChild === dragEl) {\n          return completed(false);\n        } // if there is a last element, it is the target\n\n\n        if (elLastChild && el === evt.target) {\n          target = elLastChild;\n        }\n\n        if (target) {\n          targetRect = getRect(target);\n        }\n\n        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {\n          capture();\n\n          if (elLastChild && elLastChild.nextSibling) {\n            // the last draggable element is not the last node\n            el.insertBefore(dragEl, elLastChild.nextSibling);\n          } else {\n            el.appendChild(dragEl);\n          }\n\n          parentEl = el; // actualization\n\n          changed();\n          return completed(true);\n        }\n      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {\n        // Insert to start of list\n        var firstChild = getChild(el, 0, options, true);\n\n        if (firstChild === dragEl) {\n          return completed(false);\n        }\n\n        target = firstChild;\n        targetRect = getRect(target);\n\n        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {\n          capture();\n          el.insertBefore(dragEl, firstChild);\n          parentEl = el; // actualization\n\n          changed();\n          return completed(true);\n        }\n      } else if (target.parentNode === el) {\n        targetRect = getRect(target);\n        var direction = 0,\n            targetBeforeFirstSwap,\n            differentLevel = dragEl.parentNode !== el,\n            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),\n            side1 = vertical ? 'top' : 'left',\n            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),\n            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;\n\n        if (lastTarget !== target) {\n          targetBeforeFirstSwap = targetRect[side1];\n          pastFirstInvertThresh = false;\n          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;\n        }\n\n        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);\n        var sibling;\n\n        if (direction !== 0) {\n          // Check if target is beside dragEl in respective direction (ignoring hidden elements)\n          var dragIndex = index(dragEl);\n\n          do {\n            dragIndex -= direction;\n            sibling = parentEl.children[dragIndex];\n          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));\n        } // If dragEl is already beside target: Do not insert\n\n\n        if (direction === 0 || sibling === target) {\n          return completed(false);\n        }\n\n        lastTarget = target;\n        lastDirection = direction;\n        var nextSibling = target.nextElementSibling,\n            after = false;\n        after = direction === 1;\n\n        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);\n\n        if (moveVector !== false) {\n          if (moveVector === 1 || moveVector === -1) {\n            after = moveVector === 1;\n          }\n\n          _silent = true;\n          setTimeout(_unsilent, 30);\n          capture();\n\n          if (after && !nextSibling) {\n            el.appendChild(dragEl);\n          } else {\n            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);\n          } // Undo chrome's scroll adjustment (has no effect on other browsers)\n\n\n          if (scrolledPastTop) {\n            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);\n          }\n\n          parentEl = dragEl.parentNode; // actualization\n          // must be done before animation\n\n          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {\n            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);\n          }\n\n          changed();\n          return completed(true);\n        }\n      }\n\n      if (el.contains(dragEl)) {\n        return completed(false);\n      }\n    }\n\n    return false;\n  },\n  _ignoreWhileAnimating: null,\n  _offMoveEvents: function _offMoveEvents() {\n    off(document, 'mousemove', this._onTouchMove);\n    off(document, 'touchmove', this._onTouchMove);\n    off(document, 'pointermove', this._onTouchMove);\n    off(document, 'dragover', nearestEmptyInsertDetectEvent);\n    off(document, 'mousemove', nearestEmptyInsertDetectEvent);\n    off(document, 'touchmove', nearestEmptyInsertDetectEvent);\n  },\n  _offUpEvents: function _offUpEvents() {\n    var ownerDocument = this.el.ownerDocument;\n    off(ownerDocument, 'mouseup', this._onDrop);\n    off(ownerDocument, 'touchend', this._onDrop);\n    off(ownerDocument, 'pointerup', this._onDrop);\n    off(ownerDocument, 'touchcancel', this._onDrop);\n    off(document, 'selectstart', this);\n  },\n  _onDrop: function _onDrop(\n  /**Event*/\n  evt) {\n    var el = this.el,\n        options = this.options; // Get the index of the dragged element within its parent\n\n    newIndex = index(dragEl);\n    newDraggableIndex = index(dragEl, options.draggable);\n    pluginEvent('drop', this, {\n      evt: evt\n    });\n    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event\n\n    newIndex = index(dragEl);\n    newDraggableIndex = index(dragEl, options.draggable);\n\n    if (Sortable.eventCanceled) {\n      this._nulling();\n\n      return;\n    }\n\n    awaitingDragStarted = false;\n    isCircumstantialInvert = false;\n    pastFirstInvertThresh = false;\n    clearInterval(this._loopId);\n    clearTimeout(this._dragStartTimer);\n\n    _cancelNextTick(this.cloneId);\n\n    _cancelNextTick(this._dragStartId); // Unbind events\n\n\n    if (this.nativeDraggable) {\n      off(document, 'drop', this);\n      off(el, 'dragstart', this._onDragStart);\n    }\n\n    this._offMoveEvents();\n\n    this._offUpEvents();\n\n    if (Safari) {\n      css(document.body, 'user-select', '');\n    }\n\n    css(dragEl, 'transform', '');\n\n    if (evt) {\n      if (moved) {\n        evt.cancelable && evt.preventDefault();\n        !options.dropBubble && evt.stopPropagation();\n      }\n\n      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);\n\n      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {\n        // Remove clone(s)\n        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);\n      }\n\n      if (dragEl) {\n        if (this.nativeDraggable) {\n          off(dragEl, 'dragend', this);\n        }\n\n        _disableDraggable(dragEl);\n\n        dragEl.style['will-change'] = ''; // Remove classes\n        // ghostClass is added in dragStarted\n\n        if (moved && !awaitingDragStarted) {\n          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);\n        }\n\n        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event\n\n        _dispatchEvent({\n          sortable: this,\n          name: 'unchoose',\n          toEl: parentEl,\n          newIndex: null,\n          newDraggableIndex: null,\n          originalEvent: evt\n        });\n\n        if (rootEl !== parentEl) {\n          if (newIndex >= 0) {\n            // Add event\n            _dispatchEvent({\n              rootEl: parentEl,\n              name: 'add',\n              toEl: parentEl,\n              fromEl: rootEl,\n              originalEvent: evt\n            }); // Remove event\n\n\n            _dispatchEvent({\n              sortable: this,\n              name: 'remove',\n              toEl: parentEl,\n              originalEvent: evt\n            }); // drag from one list and drop into another\n\n\n            _dispatchEvent({\n              rootEl: parentEl,\n              name: 'sort',\n              toEl: parentEl,\n              fromEl: rootEl,\n              originalEvent: evt\n            });\n\n            _dispatchEvent({\n              sortable: this,\n              name: 'sort',\n              toEl: parentEl,\n              originalEvent: evt\n            });\n          }\n\n          putSortable && putSortable.save();\n        } else {\n          if (newIndex !== oldIndex) {\n            if (newIndex >= 0) {\n              // drag & drop within the same list\n              _dispatchEvent({\n                sortable: this,\n                name: 'update',\n                toEl: parentEl,\n                originalEvent: evt\n              });\n\n              _dispatchEvent({\n                sortable: this,\n                name: 'sort',\n                toEl: parentEl,\n                originalEvent: evt\n              });\n            }\n          }\n        }\n\n        if (Sortable.active) {\n          /* jshint eqnull:true */\n          if (newIndex == null || newIndex === -1) {\n            newIndex = oldIndex;\n            newDraggableIndex = oldDraggableIndex;\n          }\n\n          _dispatchEvent({\n            sortable: this,\n            name: 'end',\n            toEl: parentEl,\n            originalEvent: evt\n          }); // Save sorting\n\n\n          this.save();\n        }\n      }\n    }\n\n    this._nulling();\n  },\n  _nulling: function _nulling() {\n    pluginEvent('nulling', this);\n    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;\n    savedInputChecked.forEach(function (el) {\n      el.checked = true;\n    });\n    savedInputChecked.length = lastDx = lastDy = 0;\n  },\n  handleEvent: function handleEvent(\n  /**Event*/\n  evt) {\n    switch (evt.type) {\n      case 'drop':\n      case 'dragend':\n        this._onDrop(evt);\n\n        break;\n\n      case 'dragenter':\n      case 'dragover':\n        if (dragEl) {\n          this._onDragOver(evt);\n\n          _globalDragOver(evt);\n        }\n\n        break;\n\n      case 'selectstart':\n        evt.preventDefault();\n        break;\n    }\n  },\n\n  /**\r\n   * Serializes the item into an array of string.\r\n   * @returns {String[]}\r\n   */\n  toArray: function toArray() {\n    var order = [],\n        el,\n        children = this.el.children,\n        i = 0,\n        n = children.length,\n        options = this.options;\n\n    for (; i < n; i++) {\n      el = children[i];\n\n      if (closest(el, options.draggable, this.el, false)) {\n        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));\n      }\n    }\n\n    return order;\n  },\n\n  /**\r\n   * Sorts the elements according to the array.\r\n   * @param  {String[]}  order  order of the items\r\n   */\n  sort: function sort(order, useAnimation) {\n    var items = {},\n        rootEl = this.el;\n    this.toArray().forEach(function (id, i) {\n      var el = rootEl.children[i];\n\n      if (closest(el, this.options.draggable, rootEl, false)) {\n        items[id] = el;\n      }\n    }, this);\n    useAnimation && this.captureAnimationState();\n    order.forEach(function (id) {\n      if (items[id]) {\n        rootEl.removeChild(items[id]);\n        rootEl.appendChild(items[id]);\n      }\n    });\n    useAnimation && this.animateAll();\n  },\n\n  /**\r\n   * Save the current sorting\r\n   */\n  save: function save() {\n    var store = this.options.store;\n    store && store.set && store.set(this);\n  },\n\n  /**\r\n   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.\r\n   * @param   {HTMLElement}  el\r\n   * @param   {String}       [selector]  default: `options.draggable`\r\n   * @returns {HTMLElement|null}\r\n   */\n  closest: function closest$1(el, selector) {\n    return closest(el, selector || this.options.draggable, this.el, false);\n  },\n\n  /**\r\n   * Set/get option\r\n   * @param   {string} name\r\n   * @param   {*}      [value]\r\n   * @returns {*}\r\n   */\n  option: function option(name, value) {\n    var options = this.options;\n\n    if (value === void 0) {\n      return options[name];\n    } else {\n      var modifiedValue = PluginManager.modifyOption(this, name, value);\n\n      if (typeof modifiedValue !== 'undefined') {\n        options[name] = modifiedValue;\n      } else {\n        options[name] = value;\n      }\n\n      if (name === 'group') {\n        _prepareGroup(options);\n      }\n    }\n  },\n\n  /**\r\n   * Destroy\r\n   */\n  destroy: function destroy() {\n    pluginEvent('destroy', this);\n    var el = this.el;\n    el[expando] = null;\n    off(el, 'mousedown', this._onTapStart);\n    off(el, 'touchstart', this._onTapStart);\n    off(el, 'pointerdown', this._onTapStart);\n\n    if (this.nativeDraggable) {\n      off(el, 'dragover', this);\n      off(el, 'dragenter', this);\n    } // Remove draggable attributes\n\n\n    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {\n      el.removeAttribute('draggable');\n    });\n\n    this._onDrop();\n\n    this._disableDelayedDragEvents();\n\n    sortables.splice(sortables.indexOf(this.el), 1);\n    this.el = el = null;\n  },\n  _hideClone: function _hideClone() {\n    if (!cloneHidden) {\n      pluginEvent('hideClone', this);\n      if (Sortable.eventCanceled) return;\n      css(cloneEl, 'display', 'none');\n\n      if (this.options.removeCloneOnHide && cloneEl.parentNode) {\n        cloneEl.parentNode.removeChild(cloneEl);\n      }\n\n      cloneHidden = true;\n    }\n  },\n  _showClone: function _showClone(putSortable) {\n    if (putSortable.lastPutMode !== 'clone') {\n      this._hideClone();\n\n      return;\n    }\n\n    if (cloneHidden) {\n      pluginEvent('showClone', this);\n      if (Sortable.eventCanceled) return; // show clone at dragEl or original position\n\n      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {\n        rootEl.insertBefore(cloneEl, dragEl);\n      } else if (nextEl) {\n        rootEl.insertBefore(cloneEl, nextEl);\n      } else {\n        rootEl.appendChild(cloneEl);\n      }\n\n      if (this.options.group.revertClone) {\n        this.animate(dragEl, cloneEl);\n      }\n\n      css(cloneEl, 'display', '');\n      cloneHidden = false;\n    }\n  }\n};\n\nfunction _globalDragOver(\n/**Event*/\nevt) {\n  if (evt.dataTransfer) {\n    evt.dataTransfer.dropEffect = 'move';\n  }\n\n  evt.cancelable && evt.preventDefault();\n}\n\nfunction _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {\n  var evt,\n      sortable = fromEl[expando],\n      onMoveFn = sortable.options.onMove,\n      retVal; // Support for new CustomEvent feature\n\n  if (window.CustomEvent && !IE11OrLess && !Edge) {\n    evt = new CustomEvent('move', {\n      bubbles: true,\n      cancelable: true\n    });\n  } else {\n    evt = document.createEvent('Event');\n    evt.initEvent('move', true, true);\n  }\n\n  evt.to = toEl;\n  evt.from = fromEl;\n  evt.dragged = dragEl;\n  evt.draggedRect = dragRect;\n  evt.related = targetEl || toEl;\n  evt.relatedRect = targetRect || getRect(toEl);\n  evt.willInsertAfter = willInsertAfter;\n  evt.originalEvent = originalEvent;\n  fromEl.dispatchEvent(evt);\n\n  if (onMoveFn) {\n    retVal = onMoveFn.call(sortable, evt, originalEvent);\n  }\n\n  return retVal;\n}\n\nfunction _disableDraggable(el) {\n  el.draggable = false;\n}\n\nfunction _unsilent() {\n  _silent = false;\n}\n\nfunction _ghostIsFirst(evt, vertical, sortable) {\n  var rect = getRect(getChild(sortable.el, 0, sortable.options, true));\n  var spacer = 10;\n  return vertical ? evt.clientX < rect.left - spacer || evt.clientY < rect.top && evt.clientX < rect.right : evt.clientY < rect.top - spacer || evt.clientY < rect.bottom && evt.clientX < rect.left;\n}\n\nfunction _ghostIsLast(evt, vertical, sortable) {\n  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));\n  var spacer = 10;\n  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;\n}\n\nfunction _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {\n  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,\n      targetLength = vertical ? targetRect.height : targetRect.width,\n      targetS1 = vertical ? targetRect.top : targetRect.left,\n      targetS2 = vertical ? targetRect.bottom : targetRect.right,\n      invert = false;\n\n  if (!invertSwap) {\n    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold\n    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {\n      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2\n      // check if past first invert threshold on side opposite of lastDirection\n      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {\n        // past first invert threshold, do not restrict inverted threshold to dragEl shadow\n        pastFirstInvertThresh = true;\n      }\n\n      if (!pastFirstInvertThresh) {\n        // dragEl shadow (target move distance shadow)\n        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow\n        : mouseOnAxis > targetS2 - targetMoveDistance) {\n          return -lastDirection;\n        }\n      } else {\n        invert = true;\n      }\n    } else {\n      // Regular\n      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {\n        return _getInsertDirection(target);\n      }\n    }\n  }\n\n  invert = invert || invertSwap;\n\n  if (invert) {\n    // Invert of regular\n    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {\n      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;\n    }\n  }\n\n  return 0;\n}\n/**\r\n * Gets the direction dragEl must be swapped relative to target in order to make it\r\n * seem that dragEl has been \"inserted\" into that element's position\r\n * @param  {HTMLElement} target       The target whose position dragEl is being inserted at\r\n * @return {Number}                   Direction dragEl must be swapped\r\n */\n\n\nfunction _getInsertDirection(target) {\n  if (index(dragEl) < index(target)) {\n    return 1;\n  } else {\n    return -1;\n  }\n}\n/**\r\n * Generate id\r\n * @param   {HTMLElement} el\r\n * @returns {String}\r\n * @private\r\n */\n\n\nfunction _generateId(el) {\n  var str = el.tagName + el.className + el.src + el.href + el.textContent,\n      i = str.length,\n      sum = 0;\n\n  while (i--) {\n    sum += str.charCodeAt(i);\n  }\n\n  return sum.toString(36);\n}\n\nfunction _saveInputCheckedState(root) {\n  savedInputChecked.length = 0;\n  var inputs = root.getElementsByTagName('input');\n  var idx = inputs.length;\n\n  while (idx--) {\n    var el = inputs[idx];\n    el.checked && savedInputChecked.push(el);\n  }\n}\n\nfunction _nextTick(fn) {\n  return setTimeout(fn, 0);\n}\n\nfunction _cancelNextTick(id) {\n  return clearTimeout(id);\n} // Fixed #973:\n\n\nif (documentExists) {\n  on(document, 'touchmove', function (evt) {\n    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {\n      evt.preventDefault();\n    }\n  });\n} // Export utils\n\n\nSortable.utils = {\n  on: on,\n  off: off,\n  css: css,\n  find: find,\n  is: function is(el, selector) {\n    return !!closest(el, selector, el, false);\n  },\n  extend: extend,\n  throttle: throttle,\n  closest: closest,\n  toggleClass: toggleClass,\n  clone: clone,\n  index: index,\n  nextTick: _nextTick,\n  cancelNextTick: _cancelNextTick,\n  detectDirection: _detectDirection,\n  getChild: getChild\n};\n/**\r\n * Get the Sortable instance of an element\r\n * @param  {HTMLElement} element The element\r\n * @return {Sortable|undefined}         The instance of Sortable\r\n */\n\nSortable.get = function (element) {\n  return element[expando];\n};\n/**\r\n * Mount a plugin to Sortable\r\n * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted\r\n */\n\n\nSortable.mount = function () {\n  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {\n    plugins[_key] = arguments[_key];\n  }\n\n  if (plugins[0].constructor === Array) plugins = plugins[0];\n  plugins.forEach(function (plugin) {\n    if (!plugin.prototype || !plugin.prototype.constructor) {\n      throw \"Sortable: Mounted plugin must be a constructor function, not \".concat({}.toString.call(plugin));\n    }\n\n    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);\n    PluginManager.mount(plugin);\n  });\n};\n/**\r\n * Create sortable instance\r\n * @param {HTMLElement}  el\r\n * @param {Object}      [options]\r\n */\n\n\nSortable.create = function (el, options) {\n  return new Sortable(el, options);\n}; // Export\n\n\nSortable.version = version;\n\nvar autoScrolls = [],\n    scrollEl,\n    scrollRootEl,\n    scrolling = false,\n    lastAutoScrollX,\n    lastAutoScrollY,\n    touchEvt$1,\n    pointerElemChangedInterval;\n\nfunction AutoScrollPlugin() {\n  function AutoScroll() {\n    this.defaults = {\n      scroll: true,\n      forceAutoScrollFallback: false,\n      scrollSensitivity: 30,\n      scrollSpeed: 10,\n      bubbleScroll: true\n    }; // Bind all private methods\n\n    for (var fn in this) {\n      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {\n        this[fn] = this[fn].bind(this);\n      }\n    }\n  }\n\n  AutoScroll.prototype = {\n    dragStarted: function dragStarted(_ref) {\n      var originalEvent = _ref.originalEvent;\n\n      if (this.sortable.nativeDraggable) {\n        on(document, 'dragover', this._handleAutoScroll);\n      } else {\n        if (this.options.supportPointer) {\n          on(document, 'pointermove', this._handleFallbackAutoScroll);\n        } else if (originalEvent.touches) {\n          on(document, 'touchmove', this._handleFallbackAutoScroll);\n        } else {\n          on(document, 'mousemove', this._handleFallbackAutoScroll);\n        }\n      }\n    },\n    dragOverCompleted: function dragOverCompleted(_ref2) {\n      var originalEvent = _ref2.originalEvent;\n\n      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)\n      if (!this.options.dragOverBubble && !originalEvent.rootEl) {\n        this._handleAutoScroll(originalEvent);\n      }\n    },\n    drop: function drop() {\n      if (this.sortable.nativeDraggable) {\n        off(document, 'dragover', this._handleAutoScroll);\n      } else {\n        off(document, 'pointermove', this._handleFallbackAutoScroll);\n        off(document, 'touchmove', this._handleFallbackAutoScroll);\n        off(document, 'mousemove', this._handleFallbackAutoScroll);\n      }\n\n      clearPointerElemChangedInterval();\n      clearAutoScrolls();\n      cancelThrottle();\n    },\n    nulling: function nulling() {\n      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;\n      autoScrolls.length = 0;\n    },\n    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {\n      this._handleAutoScroll(evt, true);\n    },\n    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {\n      var _this = this;\n\n      var x = (evt.touches ? evt.touches[0] : evt).clientX,\n          y = (evt.touches ? evt.touches[0] : evt).clientY,\n          elem = document.elementFromPoint(x, y);\n      touchEvt$1 = evt; // IE does not seem to have native autoscroll,\n      // Edge's autoscroll seems too conditional,\n      // MACOS Safari does not have autoscroll,\n      // Firefox and Chrome are good\n\n      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {\n        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change\n\n        var ogElemScroller = getParentAutoScrollElement(elem, true);\n\n        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {\n          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour\n\n          pointerElemChangedInterval = setInterval(function () {\n            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);\n\n            if (newElem !== ogElemScroller) {\n              ogElemScroller = newElem;\n              clearAutoScrolls();\n            }\n\n            autoScroll(evt, _this.options, newElem, fallback);\n          }, 10);\n          lastAutoScrollX = x;\n          lastAutoScrollY = y;\n        }\n      } else {\n        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll\n        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {\n          clearAutoScrolls();\n          return;\n        }\n\n        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);\n      }\n    }\n  };\n  return _extends(AutoScroll, {\n    pluginName: 'scroll',\n    initializeByDefault: true\n  });\n}\n\nfunction clearAutoScrolls() {\n  autoScrolls.forEach(function (autoScroll) {\n    clearInterval(autoScroll.pid);\n  });\n  autoScrolls = [];\n}\n\nfunction clearPointerElemChangedInterval() {\n  clearInterval(pointerElemChangedInterval);\n}\n\nvar autoScroll = throttle(function (evt, options, rootEl, isFallback) {\n  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521\n  if (!options.scroll) return;\n  var x = (evt.touches ? evt.touches[0] : evt).clientX,\n      y = (evt.touches ? evt.touches[0] : evt).clientY,\n      sens = options.scrollSensitivity,\n      speed = options.scrollSpeed,\n      winScroller = getWindowScrollingElement();\n  var scrollThisInstance = false,\n      scrollCustomFn; // New scroll root, set scrollEl\n\n  if (scrollRootEl !== rootEl) {\n    scrollRootEl = rootEl;\n    clearAutoScrolls();\n    scrollEl = options.scroll;\n    scrollCustomFn = options.scrollFn;\n\n    if (scrollEl === true) {\n      scrollEl = getParentAutoScrollElement(rootEl, true);\n    }\n  }\n\n  var layersOut = 0;\n  var currentParent = scrollEl;\n\n  do {\n    var el = currentParent,\n        rect = getRect(el),\n        top = rect.top,\n        bottom = rect.bottom,\n        left = rect.left,\n        right = rect.right,\n        width = rect.width,\n        height = rect.height,\n        canScrollX = void 0,\n        canScrollY = void 0,\n        scrollWidth = el.scrollWidth,\n        scrollHeight = el.scrollHeight,\n        elCSS = css(el),\n        scrollPosX = el.scrollLeft,\n        scrollPosY = el.scrollTop;\n\n    if (el === winScroller) {\n      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');\n      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');\n    } else {\n      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');\n      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');\n    }\n\n    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);\n    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);\n\n    if (!autoScrolls[layersOut]) {\n      for (var i = 0; i <= layersOut; i++) {\n        if (!autoScrolls[i]) {\n          autoScrolls[i] = {};\n        }\n      }\n    }\n\n    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {\n      autoScrolls[layersOut].el = el;\n      autoScrolls[layersOut].vx = vx;\n      autoScrolls[layersOut].vy = vy;\n      clearInterval(autoScrolls[layersOut].pid);\n\n      if (vx != 0 || vy != 0) {\n        scrollThisInstance = true;\n        /* jshint loopfunc:true */\n\n        autoScrolls[layersOut].pid = setInterval(function () {\n          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour\n          if (isFallback && this.layer === 0) {\n            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely\n\n          }\n\n          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;\n          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;\n\n          if (typeof scrollCustomFn === 'function') {\n            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {\n              return;\n            }\n          }\n\n          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);\n        }.bind({\n          layer: layersOut\n        }), 24);\n      }\n    }\n\n    layersOut++;\n  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));\n\n  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not\n}, 30);\n\nvar drop = function drop(_ref) {\n  var originalEvent = _ref.originalEvent,\n      putSortable = _ref.putSortable,\n      dragEl = _ref.dragEl,\n      activeSortable = _ref.activeSortable,\n      dispatchSortableEvent = _ref.dispatchSortableEvent,\n      hideGhostForTarget = _ref.hideGhostForTarget,\n      unhideGhostForTarget = _ref.unhideGhostForTarget;\n  if (!originalEvent) return;\n  var toSortable = putSortable || activeSortable;\n  hideGhostForTarget();\n  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;\n  var target = document.elementFromPoint(touch.clientX, touch.clientY);\n  unhideGhostForTarget();\n\n  if (toSortable && !toSortable.el.contains(target)) {\n    dispatchSortableEvent('spill');\n    this.onSpill({\n      dragEl: dragEl,\n      putSortable: putSortable\n    });\n  }\n};\n\nfunction Revert() {}\n\nRevert.prototype = {\n  startIndex: null,\n  dragStart: function dragStart(_ref2) {\n    var oldDraggableIndex = _ref2.oldDraggableIndex;\n    this.startIndex = oldDraggableIndex;\n  },\n  onSpill: function onSpill(_ref3) {\n    var dragEl = _ref3.dragEl,\n        putSortable = _ref3.putSortable;\n    this.sortable.captureAnimationState();\n\n    if (putSortable) {\n      putSortable.captureAnimationState();\n    }\n\n    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);\n\n    if (nextSibling) {\n      this.sortable.el.insertBefore(dragEl, nextSibling);\n    } else {\n      this.sortable.el.appendChild(dragEl);\n    }\n\n    this.sortable.animateAll();\n\n    if (putSortable) {\n      putSortable.animateAll();\n    }\n  },\n  drop: drop\n};\n\n_extends(Revert, {\n  pluginName: 'revertOnSpill'\n});\n\nfunction Remove() {}\n\nRemove.prototype = {\n  onSpill: function onSpill(_ref4) {\n    var dragEl = _ref4.dragEl,\n        putSortable = _ref4.putSortable;\n    var parentSortable = putSortable || this.sortable;\n    parentSortable.captureAnimationState();\n    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);\n    parentSortable.animateAll();\n  },\n  drop: drop\n};\n\n_extends(Remove, {\n  pluginName: 'removeOnSpill'\n});\n\nvar lastSwapEl;\n\nfunction SwapPlugin() {\n  function Swap() {\n    this.defaults = {\n      swapClass: 'sortable-swap-highlight'\n    };\n  }\n\n  Swap.prototype = {\n    dragStart: function dragStart(_ref) {\n      var dragEl = _ref.dragEl;\n      lastSwapEl = dragEl;\n    },\n    dragOverValid: function dragOverValid(_ref2) {\n      var completed = _ref2.completed,\n          target = _ref2.target,\n          onMove = _ref2.onMove,\n          activeSortable = _ref2.activeSortable,\n          changed = _ref2.changed,\n          cancel = _ref2.cancel;\n      if (!activeSortable.options.swap) return;\n      var el = this.sortable.el,\n          options = this.options;\n\n      if (target && target !== el) {\n        var prevSwapEl = lastSwapEl;\n\n        if (onMove(target) !== false) {\n          toggleClass(target, options.swapClass, true);\n          lastSwapEl = target;\n        } else {\n          lastSwapEl = null;\n        }\n\n        if (prevSwapEl && prevSwapEl !== lastSwapEl) {\n          toggleClass(prevSwapEl, options.swapClass, false);\n        }\n      }\n\n      changed();\n      completed(true);\n      cancel();\n    },\n    drop: function drop(_ref3) {\n      var activeSortable = _ref3.activeSortable,\n          putSortable = _ref3.putSortable,\n          dragEl = _ref3.dragEl;\n      var toSortable = putSortable || this.sortable;\n      var options = this.options;\n      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);\n\n      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {\n        if (dragEl !== lastSwapEl) {\n          toSortable.captureAnimationState();\n          if (toSortable !== activeSortable) activeSortable.captureAnimationState();\n          swapNodes(dragEl, lastSwapEl);\n          toSortable.animateAll();\n          if (toSortable !== activeSortable) activeSortable.animateAll();\n        }\n      }\n    },\n    nulling: function nulling() {\n      lastSwapEl = null;\n    }\n  };\n  return _extends(Swap, {\n    pluginName: 'swap',\n    eventProperties: function eventProperties() {\n      return {\n        swapItem: lastSwapEl\n      };\n    }\n  });\n}\n\nfunction swapNodes(n1, n2) {\n  var p1 = n1.parentNode,\n      p2 = n2.parentNode,\n      i1,\n      i2;\n  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;\n  i1 = index(n1);\n  i2 = index(n2);\n\n  if (p1.isEqualNode(p2) && i1 < i2) {\n    i2++;\n  }\n\n  p1.insertBefore(n2, p1.children[i1]);\n  p2.insertBefore(n1, p2.children[i2]);\n}\n\nvar multiDragElements = [],\n    multiDragClones = [],\n    lastMultiDragSelect,\n    // for selection with modifier key down (SHIFT)\nmultiDragSortable,\n    initialFolding = false,\n    // Initial multi-drag fold when drag started\nfolding = false,\n    // Folding any other time\ndragStarted = false,\n    dragEl$1,\n    clonesFromRect,\n    clonesHidden;\n\nfunction MultiDragPlugin() {\n  function MultiDrag(sortable) {\n    // Bind all private methods\n    for (var fn in this) {\n      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {\n        this[fn] = this[fn].bind(this);\n      }\n    }\n\n    if (!sortable.options.avoidImplicitDeselect) {\n      if (sortable.options.supportPointer) {\n        on(document, 'pointerup', this._deselectMultiDrag);\n      } else {\n        on(document, 'mouseup', this._deselectMultiDrag);\n        on(document, 'touchend', this._deselectMultiDrag);\n      }\n    }\n\n    on(document, 'keydown', this._checkKeyDown);\n    on(document, 'keyup', this._checkKeyUp);\n    this.defaults = {\n      selectedClass: 'sortable-selected',\n      multiDragKey: null,\n      avoidImplicitDeselect: false,\n      setData: function setData(dataTransfer, dragEl) {\n        var data = '';\n\n        if (multiDragElements.length && multiDragSortable === sortable) {\n          multiDragElements.forEach(function (multiDragElement, i) {\n            data += (!i ? '' : ', ') + multiDragElement.textContent;\n          });\n        } else {\n          data = dragEl.textContent;\n        }\n\n        dataTransfer.setData('Text', data);\n      }\n    };\n  }\n\n  MultiDrag.prototype = {\n    multiDragKeyDown: false,\n    isMultiDrag: false,\n    delayStartGlobal: function delayStartGlobal(_ref) {\n      var dragged = _ref.dragEl;\n      dragEl$1 = dragged;\n    },\n    delayEnded: function delayEnded() {\n      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);\n    },\n    setupClone: function setupClone(_ref2) {\n      var sortable = _ref2.sortable,\n          cancel = _ref2.cancel;\n      if (!this.isMultiDrag) return;\n\n      for (var i = 0; i < multiDragElements.length; i++) {\n        multiDragClones.push(clone(multiDragElements[i]));\n        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;\n        multiDragClones[i].draggable = false;\n        multiDragClones[i].style['will-change'] = '';\n        toggleClass(multiDragClones[i], this.options.selectedClass, false);\n        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);\n      }\n\n      sortable._hideClone();\n\n      cancel();\n    },\n    clone: function clone(_ref3) {\n      var sortable = _ref3.sortable,\n          rootEl = _ref3.rootEl,\n          dispatchSortableEvent = _ref3.dispatchSortableEvent,\n          cancel = _ref3.cancel;\n      if (!this.isMultiDrag) return;\n\n      if (!this.options.removeCloneOnHide) {\n        if (multiDragElements.length && multiDragSortable === sortable) {\n          insertMultiDragClones(true, rootEl);\n          dispatchSortableEvent('clone');\n          cancel();\n        }\n      }\n    },\n    showClone: function showClone(_ref4) {\n      var cloneNowShown = _ref4.cloneNowShown,\n          rootEl = _ref4.rootEl,\n          cancel = _ref4.cancel;\n      if (!this.isMultiDrag) return;\n      insertMultiDragClones(false, rootEl);\n      multiDragClones.forEach(function (clone) {\n        css(clone, 'display', '');\n      });\n      cloneNowShown();\n      clonesHidden = false;\n      cancel();\n    },\n    hideClone: function hideClone(_ref5) {\n      var _this = this;\n\n      var sortable = _ref5.sortable,\n          cloneNowHidden = _ref5.cloneNowHidden,\n          cancel = _ref5.cancel;\n      if (!this.isMultiDrag) return;\n      multiDragClones.forEach(function (clone) {\n        css(clone, 'display', 'none');\n\n        if (_this.options.removeCloneOnHide && clone.parentNode) {\n          clone.parentNode.removeChild(clone);\n        }\n      });\n      cloneNowHidden();\n      clonesHidden = true;\n      cancel();\n    },\n    dragStartGlobal: function dragStartGlobal(_ref6) {\n      var sortable = _ref6.sortable;\n\n      if (!this.isMultiDrag && multiDragSortable) {\n        multiDragSortable.multiDrag._deselectMultiDrag();\n      }\n\n      multiDragElements.forEach(function (multiDragElement) {\n        multiDragElement.sortableIndex = index(multiDragElement);\n      }); // Sort multi-drag elements\n\n      multiDragElements = multiDragElements.sort(function (a, b) {\n        return a.sortableIndex - b.sortableIndex;\n      });\n      dragStarted = true;\n    },\n    dragStarted: function dragStarted(_ref7) {\n      var _this2 = this;\n\n      var sortable = _ref7.sortable;\n      if (!this.isMultiDrag) return;\n\n      if (this.options.sort) {\n        // Capture rects,\n        // hide multi drag elements (by positioning them absolute),\n        // set multi drag elements rects to dragRect,\n        // show multi drag elements,\n        // animate to rects,\n        // unset rects & remove from DOM\n        sortable.captureAnimationState();\n\n        if (this.options.animation) {\n          multiDragElements.forEach(function (multiDragElement) {\n            if (multiDragElement === dragEl$1) return;\n            css(multiDragElement, 'position', 'absolute');\n          });\n          var dragRect = getRect(dragEl$1, false, true, true);\n          multiDragElements.forEach(function (multiDragElement) {\n            if (multiDragElement === dragEl$1) return;\n            setRect(multiDragElement, dragRect);\n          });\n          folding = true;\n          initialFolding = true;\n        }\n      }\n\n      sortable.animateAll(function () {\n        folding = false;\n        initialFolding = false;\n\n        if (_this2.options.animation) {\n          multiDragElements.forEach(function (multiDragElement) {\n            unsetRect(multiDragElement);\n          });\n        } // Remove all auxiliary multidrag items from el, if sorting enabled\n\n\n        if (_this2.options.sort) {\n          removeMultiDragElements();\n        }\n      });\n    },\n    dragOver: function dragOver(_ref8) {\n      var target = _ref8.target,\n          completed = _ref8.completed,\n          cancel = _ref8.cancel;\n\n      if (folding && ~multiDragElements.indexOf(target)) {\n        completed(false);\n        cancel();\n      }\n    },\n    revert: function revert(_ref9) {\n      var fromSortable = _ref9.fromSortable,\n          rootEl = _ref9.rootEl,\n          sortable = _ref9.sortable,\n          dragRect = _ref9.dragRect;\n\n      if (multiDragElements.length > 1) {\n        // Setup unfold animation\n        multiDragElements.forEach(function (multiDragElement) {\n          sortable.addAnimationState({\n            target: multiDragElement,\n            rect: folding ? getRect(multiDragElement) : dragRect\n          });\n          unsetRect(multiDragElement);\n          multiDragElement.fromRect = dragRect;\n          fromSortable.removeAnimationState(multiDragElement);\n        });\n        folding = false;\n        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);\n      }\n    },\n    dragOverCompleted: function dragOverCompleted(_ref10) {\n      var sortable = _ref10.sortable,\n          isOwner = _ref10.isOwner,\n          insertion = _ref10.insertion,\n          activeSortable = _ref10.activeSortable,\n          parentEl = _ref10.parentEl,\n          putSortable = _ref10.putSortable;\n      var options = this.options;\n\n      if (insertion) {\n        // Clones must be hidden before folding animation to capture dragRectAbsolute properly\n        if (isOwner) {\n          activeSortable._hideClone();\n        }\n\n        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location\n\n        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {\n          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible\n          var dragRectAbsolute = getRect(dragEl$1, false, true, true);\n          multiDragElements.forEach(function (multiDragElement) {\n            if (multiDragElement === dragEl$1) return;\n            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted\n            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable\n\n            parentEl.appendChild(multiDragElement);\n          });\n          folding = true;\n        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out\n\n\n        if (!isOwner) {\n          // Only remove if not folding (folding will remove them anyways)\n          if (!folding) {\n            removeMultiDragElements();\n          }\n\n          if (multiDragElements.length > 1) {\n            var clonesHiddenBefore = clonesHidden;\n\n            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden\n\n\n            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {\n              multiDragClones.forEach(function (clone) {\n                activeSortable.addAnimationState({\n                  target: clone,\n                  rect: clonesFromRect\n                });\n                clone.fromRect = clonesFromRect;\n                clone.thisAnimationDuration = null;\n              });\n            }\n          } else {\n            activeSortable._showClone(sortable);\n          }\n        }\n      }\n    },\n    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {\n      var dragRect = _ref11.dragRect,\n          isOwner = _ref11.isOwner,\n          activeSortable = _ref11.activeSortable;\n      multiDragElements.forEach(function (multiDragElement) {\n        multiDragElement.thisAnimationDuration = null;\n      });\n\n      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {\n        clonesFromRect = _extends({}, dragRect);\n        var dragMatrix = matrix(dragEl$1, true);\n        clonesFromRect.top -= dragMatrix.f;\n        clonesFromRect.left -= dragMatrix.e;\n      }\n    },\n    dragOverAnimationComplete: function dragOverAnimationComplete() {\n      if (folding) {\n        folding = false;\n        removeMultiDragElements();\n      }\n    },\n    drop: function drop(_ref12) {\n      var evt = _ref12.originalEvent,\n          rootEl = _ref12.rootEl,\n          parentEl = _ref12.parentEl,\n          sortable = _ref12.sortable,\n          dispatchSortableEvent = _ref12.dispatchSortableEvent,\n          oldIndex = _ref12.oldIndex,\n          putSortable = _ref12.putSortable;\n      var toSortable = putSortable || this.sortable;\n      if (!evt) return;\n      var options = this.options,\n          children = parentEl.children; // Multi-drag selection\n\n      if (!dragStarted) {\n        if (options.multiDragKey && !this.multiDragKeyDown) {\n          this._deselectMultiDrag();\n        }\n\n        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));\n\n        if (!~multiDragElements.indexOf(dragEl$1)) {\n          multiDragElements.push(dragEl$1);\n          dispatchEvent({\n            sortable: sortable,\n            rootEl: rootEl,\n            name: 'select',\n            targetEl: dragEl$1,\n            originalEvent: evt\n          }); // Modifier activated, select from last to dragEl\n\n          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {\n            var lastIndex = index(lastMultiDragSelect),\n                currentIndex = index(dragEl$1);\n\n            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {\n              // Must include lastMultiDragSelect (select it), in case modified selection from no selection\n              // (but previous selection existed)\n              var n, i;\n\n              if (currentIndex > lastIndex) {\n                i = lastIndex;\n                n = currentIndex;\n              } else {\n                i = currentIndex;\n                n = lastIndex + 1;\n              }\n\n              for (; i < n; i++) {\n                if (~multiDragElements.indexOf(children[i])) continue;\n                toggleClass(children[i], options.selectedClass, true);\n                multiDragElements.push(children[i]);\n                dispatchEvent({\n                  sortable: sortable,\n                  rootEl: rootEl,\n                  name: 'select',\n                  targetEl: children[i],\n                  originalEvent: evt\n                });\n              }\n            }\n          } else {\n            lastMultiDragSelect = dragEl$1;\n          }\n\n          multiDragSortable = toSortable;\n        } else {\n          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);\n          lastMultiDragSelect = null;\n          dispatchEvent({\n            sortable: sortable,\n            rootEl: rootEl,\n            name: 'deselect',\n            targetEl: dragEl$1,\n            originalEvent: evt\n          });\n        }\n      } // Multi-drag drop\n\n\n      if (dragStarted && this.isMultiDrag) {\n        folding = false; // Do not \"unfold\" after around dragEl if reverted\n\n        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {\n          var dragRect = getRect(dragEl$1),\n              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');\n          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;\n          toSortable.captureAnimationState();\n\n          if (!initialFolding) {\n            if (options.animation) {\n              dragEl$1.fromRect = dragRect;\n              multiDragElements.forEach(function (multiDragElement) {\n                multiDragElement.thisAnimationDuration = null;\n\n                if (multiDragElement !== dragEl$1) {\n                  var rect = folding ? getRect(multiDragElement) : dragRect;\n                  multiDragElement.fromRect = rect; // Prepare unfold animation\n\n                  toSortable.addAnimationState({\n                    target: multiDragElement,\n                    rect: rect\n                  });\n                }\n              });\n            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert\n            // properly they must all be removed\n\n\n            removeMultiDragElements();\n            multiDragElements.forEach(function (multiDragElement) {\n              if (children[multiDragIndex]) {\n                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);\n              } else {\n                parentEl.appendChild(multiDragElement);\n              }\n\n              multiDragIndex++;\n            }); // If initial folding is done, the elements may have changed position because they are now\n            // unfolding around dragEl, even though dragEl may not have his index changed, so update event\n            // must be fired here as Sortable will not.\n\n            if (oldIndex === index(dragEl$1)) {\n              var update = false;\n              multiDragElements.forEach(function (multiDragElement) {\n                if (multiDragElement.sortableIndex !== index(multiDragElement)) {\n                  update = true;\n                  return;\n                }\n              });\n\n              if (update) {\n                dispatchSortableEvent('update');\n              }\n            }\n          } // Must be done after capturing individual rects (scroll bar)\n\n\n          multiDragElements.forEach(function (multiDragElement) {\n            unsetRect(multiDragElement);\n          });\n          toSortable.animateAll();\n        }\n\n        multiDragSortable = toSortable;\n      } // Remove clones if necessary\n\n\n      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {\n        multiDragClones.forEach(function (clone) {\n          clone.parentNode && clone.parentNode.removeChild(clone);\n        });\n      }\n    },\n    nullingGlobal: function nullingGlobal() {\n      this.isMultiDrag = dragStarted = false;\n      multiDragClones.length = 0;\n    },\n    destroyGlobal: function destroyGlobal() {\n      this._deselectMultiDrag();\n\n      off(document, 'pointerup', this._deselectMultiDrag);\n      off(document, 'mouseup', this._deselectMultiDrag);\n      off(document, 'touchend', this._deselectMultiDrag);\n      off(document, 'keydown', this._checkKeyDown);\n      off(document, 'keyup', this._checkKeyUp);\n    },\n    _deselectMultiDrag: function _deselectMultiDrag(evt) {\n      if (typeof dragStarted !== \"undefined\" && dragStarted) return; // Only deselect if selection is in this sortable\n\n      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable\n\n      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click\n\n      if (evt && evt.button !== 0) return;\n\n      while (multiDragElements.length) {\n        var el = multiDragElements[0];\n        toggleClass(el, this.options.selectedClass, false);\n        multiDragElements.shift();\n        dispatchEvent({\n          sortable: this.sortable,\n          rootEl: this.sortable.el,\n          name: 'deselect',\n          targetEl: el,\n          originalEvent: evt\n        });\n      }\n    },\n    _checkKeyDown: function _checkKeyDown(evt) {\n      if (evt.key === this.options.multiDragKey) {\n        this.multiDragKeyDown = true;\n      }\n    },\n    _checkKeyUp: function _checkKeyUp(evt) {\n      if (evt.key === this.options.multiDragKey) {\n        this.multiDragKeyDown = false;\n      }\n    }\n  };\n  return _extends(MultiDrag, {\n    // Static methods & properties\n    pluginName: 'multiDrag',\n    utils: {\n      /**\r\n       * Selects the provided multi-drag item\r\n       * @param  {HTMLElement} el    The element to be selected\r\n       */\n      select: function select(el) {\n        var sortable = el.parentNode[expando];\n        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;\n\n        if (multiDragSortable && multiDragSortable !== sortable) {\n          multiDragSortable.multiDrag._deselectMultiDrag();\n\n          multiDragSortable = sortable;\n        }\n\n        toggleClass(el, sortable.options.selectedClass, true);\n        multiDragElements.push(el);\n      },\n\n      /**\r\n       * Deselects the provided multi-drag item\r\n       * @param  {HTMLElement} el    The element to be deselected\r\n       */\n      deselect: function deselect(el) {\n        var sortable = el.parentNode[expando],\n            index = multiDragElements.indexOf(el);\n        if (!sortable || !sortable.options.multiDrag || !~index) return;\n        toggleClass(el, sortable.options.selectedClass, false);\n        multiDragElements.splice(index, 1);\n      }\n    },\n    eventProperties: function eventProperties() {\n      var _this3 = this;\n\n      var oldIndicies = [],\n          newIndicies = [];\n      multiDragElements.forEach(function (multiDragElement) {\n        oldIndicies.push({\n          multiDragElement: multiDragElement,\n          index: multiDragElement.sortableIndex\n        }); // multiDragElements will already be sorted if folding\n\n        var newIndex;\n\n        if (folding && multiDragElement !== dragEl$1) {\n          newIndex = -1;\n        } else if (folding) {\n          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');\n        } else {\n          newIndex = index(multiDragElement);\n        }\n\n        newIndicies.push({\n          multiDragElement: multiDragElement,\n          index: newIndex\n        });\n      });\n      return {\n        items: _toConsumableArray(multiDragElements),\n        clones: [].concat(multiDragClones),\n        oldIndicies: oldIndicies,\n        newIndicies: newIndicies\n      };\n    },\n    optionListeners: {\n      multiDragKey: function multiDragKey(key) {\n        key = key.toLowerCase();\n\n        if (key === 'ctrl') {\n          key = 'Control';\n        } else if (key.length > 1) {\n          key = key.charAt(0).toUpperCase() + key.substr(1);\n        }\n\n        return key;\n      }\n    }\n  });\n}\n\nfunction insertMultiDragElements(clonesInserted, rootEl) {\n  multiDragElements.forEach(function (multiDragElement, i) {\n    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];\n\n    if (target) {\n      rootEl.insertBefore(multiDragElement, target);\n    } else {\n      rootEl.appendChild(multiDragElement);\n    }\n  });\n}\n/**\r\n * Insert multi-drag clones\r\n * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted\r\n * @param  {HTMLElement} rootEl\r\n */\n\n\nfunction insertMultiDragClones(elementsInserted, rootEl) {\n  multiDragClones.forEach(function (clone, i) {\n    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];\n\n    if (target) {\n      rootEl.insertBefore(clone, target);\n    } else {\n      rootEl.appendChild(clone);\n    }\n  });\n}\n\nfunction removeMultiDragElements() {\n  multiDragElements.forEach(function (multiDragElement) {\n    if (multiDragElement === dragEl$1) return;\n    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);\n  });\n}\n\nSortable.mount(new AutoScrollPlugin());\nSortable.mount(Remove, Revert);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sortable);\n\n\n\n//# sourceURL=webpack://ImageGallery/./node_modules/sortablejs/modular/sortable.esm.js?");

/***/ }),

/***/ "./src/index.pcss":
/*!************************!*\
  !*** ./src/index.pcss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_index_pcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./index.pcss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/index.pcss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_index_pcss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_index_pcss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_index_pcss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_index_pcss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ImageGallery/./src/index.pcss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ImageGallery/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ImageGallery/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ImageGallery/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ImageGallery/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ImageGallery/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ImageGallery/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/svg/button-icon.svg":
/*!*********************************!*\
  !*** ./src/svg/button-icon.svg ***!
  \*********************************/
/***/ ((module) => {

eval("module.exports = \"<svg width=\\\"20\\\" height=\\\"20\\\" viewBox=\\\"0 0 20 20\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z\\\"></path></svg>\"\n\n//# sourceURL=webpack://ImageGallery/./src/svg/button-icon.svg?");

/***/ }),

/***/ "./src/svg/fit.svg":
/*!*************************!*\
  !*** ./src/svg/fit.svg ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill=\\\"currentColor\\\" class=\\\"bi bi-grid-1x2-fill\\\" viewBox=\\\"0 0 16 16\\\"><path d=\\\"M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5z\\\"></path></svg>\"\n\n//# sourceURL=webpack://ImageGallery/./src/svg/fit.svg?");

/***/ }),

/***/ "./src/svg/slider.svg":
/*!****************************!*\
  !*** ./src/svg/slider.svg ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill=\\\"currentColor\\\" class=\\\"bi bi-images\\\" viewBox=\\\"0 0 16 16\\\"><path d=\\\"M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z\\\"></path><path d=\\\"M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z\\\"></path></svg>\"\n\n//# sourceURL=webpack://ImageGallery/./src/svg/slider.svg?");

/***/ }),

/***/ "./src/svg/toolbox.svg":
/*!*****************************!*\
  !*** ./src/svg/toolbox.svg ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill=\\\"currentColor\\\" class=\\\"bi bi-grid\\\" viewBox=\\\"0 0 16 16\\\"><path d=\\\"M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z\\\"></path></svg>\"\n\n//# sourceURL=webpack://ImageGallery/./src/svg/toolbox.svg?");

/***/ }),

/***/ "./src/svg/trash.svg":
/*!***************************!*\
  !*** ./src/svg/trash.svg ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"16\\\" height=\\\"16\\\" fill=\\\"currentColor\\\" class=\\\"bi bi-trash\\\" viewBox=\\\"0 0 16 16\\\"><path d=\\\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\\\"></path><path fill-rule=\\\"evenodd\\\" d=\\\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\\\"></path></svg>\"\n\n//# sourceURL=webpack://ImageGallery/./src/svg/trash.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_213781__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_213781__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_213781__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_213781__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_213781__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_213781__.o(definition, key) && !__nested_webpack_require_213781__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_213781__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_213781__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__nested_webpack_require_213781__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __nested_webpack_exports__ = __nested_webpack_require_213781__("./src/index.js");
/******/ 	__nested_webpack_exports__ = __nested_webpack_exports__["default"];
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ }),

/***/ "./node_modules/editorjs-style/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/editorjs-style/dist/index.js ***!
  \***************************************************/
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"StyleInlineTool",(function(){return c}));class r extends HTMLElement{}class i extends Error{constructor(...e){super(...e),this.name="EditorJSStyleError"}}var s,o,l=function(e,t,n,r,i){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(e,n):i?i.value=n:t.set(e,n),n},a=function(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)};class c{constructor({api:e}){s.set(this,void 0),o.set(this,void 0),l(this,s,document.createElement("div"),"f"),l(this,o,e,"f")}static get isInline(){return!0}static get sanitize(){return{"editorjs-style":{class:!0,id:!0,style:!0}}}static get title(){return"Style"}static prepare(){customElements.get("editorjs-style")||customElements.define("editorjs-style",r)}get shortcut(){return"CMD+S"}checkState(){var e;a(this,s,"f").innerHTML="";const t=a(this,o,"f").selection.findParentTag("EDITORJS-STYLE");if(!t)return!1;a(this,s,"f").innerHTML=`\n      <div style="margin-bottom: 16px; margin-left: 16px; margin-right: 16px; ">\n        <div style="display: flex; align-items: center; justify-content: space-between; ">\n          <div>Style settings</div>\n\n          <button class="delete-button ${a(this,o,"f").styles.settingsButton}" type="button">\n            <svg class="icon" height="24" viewBox="0 0 24 24" width="24">\n              <path d="M0 0h24v24H0z" fill="none"/>\n              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>\n            </svg>\n          </button>\n        </div>\n\n        <label style="display: flex; align-items: center; justify-content: space-between; ">\n          <span>ID</span>\n\n          <input class="id-input ${a(this,o,"f").styles.input}" style="width: 80%; ">\n        </label>\n\n        <label style="display: flex; align-items: center; justify-content: space-between; ">\n          <span>Class</span>\n\n          <input class="class-input ${a(this,o,"f").styles.input}" style="width: 80%; ">\n        </label>\n\n        <label style="display: flex; align-items: center; justify-content: space-between; ">\n          <span>Style</span>\n\n          <textarea\n            class="style-textarea ${a(this,o,"f").styles.input}"\n            placeholder="background: #ffe7e8;"\n            style="resize: none; width: 80%; ">\n          </textarea>\n        </label>\n      </div>\n    `;const n=a(this,s,"f").querySelector(".delete-button"),r=a(this,s,"f").querySelector(".class-input"),l=a(this,s,"f").querySelector(".id-input"),c=a(this,s,"f").querySelector(".style-textarea");if(!(n&&r&&l&&c))throw new i;return n.addEventListener("click",()=>{const e=Array.from(t.childNodes).map(e=>e.cloneNode(!0));if(e.forEach(e=>{var n;return null===(n=t.parentNode)||void 0===n?void 0:n.insertBefore(e,t)}),t.remove(),0===e.length)return;const n=window.getSelection();if(!n)throw new i;n.removeAllRanges();const r=new Range;r.setStartBefore(e[0]),r.setEndAfter(e[e.length-1]),n.addRange(r),a(this,s,"f").innerHTML="",a(this,o,"f").tooltip.hide()}),a(this,o,"f").tooltip.onHover(n,"Delete style",{placement:"top"}),r.value=t.className,r.addEventListener("input",()=>t.setAttribute("class",r.value)),l.value=t.id,l.addEventListener("input",()=>t.id=l.value),c.value=null!==(e=t.getAttribute("style"))&&void 0!==e?e:"",c.addEventListener("keydown",e=>e.stopPropagation()),c.addEventListener("input",()=>t.setAttribute("style",c.value)),!0}clear(){a(this,s,"f").innerHTML=""}render(){const e=document.createElement("button");return e.classList.add(a(this,o,"f").styles.inlineToolButton),e.type="button",e.innerHTML='\n      <svg class="icon" height="24" viewBox="0 0 24 24" width="24">\n        <path d="M0 0h24v24H0z" fill="none"/>\n        <path d="M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"/>\n      </svg>\n    ',e}renderActions(){return a(this,s,"f")}surround(e){const t=new r;e.surroundContents(t),a(this,o,"f").selection.expandToTag(t)}}s=new WeakMap,o=new WeakMap}])}));

/***/ }),

/***/ "./node_modules/editorjs-undo/dist/bundle.js":
/*!***************************************************!*\
  !*** ./node_modules/editorjs-undo/dist/bundle.js ***!
  \***************************************************/
/***/ ((module) => {

/*! For license information please see bundle.js.LICENSE.txt */
!function(t,e){ true?module.exports=e():0}(self,(()=>(()=>{var t={917:function(t,e){var n,r;n=function(t){"use strict";var e=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),n=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.target=e,this.isContentEditable=e&&e.contentEditable}return e(t,[{key:"getPos",value:function(){if(document.activeElement!==this.target)return-1;if("true"===this.isContentEditable){this.target.focus();var t=document.getSelection().getRangeAt(0),e=t.cloneRange();return e.selectNodeContents(this.target),e.setEnd(t.endContainer,t.endOffset),e.toString().length}return this.target.selectionStart}},{key:"setPos",value:function(t){if("true"===this.isContentEditable){if(t>=0){var e=window.getSelection(),n=this.createRange(this.target,{count:t});n&&(n.collapse(!1),e.removeAllRanges(),e.addRange(n))}}else this.target.setSelectionRange(t,t)}},{key:"createRange",value:function(t,e,n){if(n||((n=document.createRange()).selectNode(t),n.setStart(t,0)),0===e.count)n.setEnd(t,e.count);else if(t&&e.count>0)if(t.nodeType===Node.TEXT_NODE)t.textContent.length<e.count?e.count-=t.textContent.length:(n.setEnd(t,e.count),e.count=0);else for(var r=0;r<t.childNodes.length&&(n=this.createRange(t.childNodes[r],e,n),0!==e.count);r++);return n}}]),t}();t.exports=n},void 0===(r=n.apply(e,[t]))||(t.exports=r)},442:(t,e,n)=>{t.exports=n(917)},633:(t,e,n)=>{var r=n(738).default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var e,n={},i=Object.prototype,a=i.hasOwnProperty,s=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",h=c.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new D(r||[]);return s(i,"_invoke",{value:T(t,n,a)}),i}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}n.wrap=d;var y="suspendedStart",v="suspendedYield",b="executing",g="completed",k={};function m(){}function x(){}function w(){}var O={};f(O,u,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(I([])));L&&L!==i&&a.call(L,u)&&(O=L);var S=w.prototype=m.prototype=Object.create(O);function C(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function n(o,i,s,c){var u=p(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==r(h)&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):e.resolve(h).then((function(t){l.value=t,s(l)}),(function(t){return n("throw",t,s,c)}))}c(u.arg)}var o;s(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function T(t,n,r){var o=y;return function(i,a){if(o===b)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var s=r.delegate;if(s){var c=B(s,r);if(c){if(c===k)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===y)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=b;var u=p(t,n,r);if("normal"===u.type){if(o=r.done?g:v,u.arg===k)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=g,r.method="throw",r.arg=u.arg)}}}function B(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,B(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),k;var i=p(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,k;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,k):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,k)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function I(t){if(t||""===t){var n=t[u];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(a.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(r(t)+" is not iterable")}return x.prototype=w,s(S,"constructor",{value:w,configurable:!0}),s(w,"constructor",{value:x,configurable:!0}),x.displayName=f(w,h,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,h,"GeneratorFunction")),t.prototype=Object.create(S),t},n.awrap=function(t){return{__await:t}},C(j.prototype),f(j.prototype,l,(function(){return this})),n.AsyncIterator=j,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new j(d(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},C(S),f(S,h,"Generator"),f(S,u,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=I,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,k):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),k},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),k}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:I(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),k}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},738:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},756:(t,e,n)=>{var r=n(633)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var r={};return(()=>{"use strict";function t(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=e.apply(n,r);function s(e){t(a,o,i,s,c,"next",e)}function c(e){t(a,o,i,s,c,"throw",e)}s(void 0)}))}}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:e+""}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,i(r.key),r)}}function c(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}n.d(r,{default:()=>v});var u=n(756),l=n.n(u),h=n(442),f=n.n(h),d=function(){return c((function t(e,n,r){a(this,t),this.holder=n,this.observer=null,this.debounceTimer=r,this.mutationDebouncer=this.debounce((function(){e()}),this.debounceTimer)}),[{key:"setMutationObserver",value:function(){var t=this,e=this.holder.querySelector(".codex-editor__redactor");this.observer=new MutationObserver((function(e){t.mutationHandler(e)})),this.observer.observe(e,{childList:!0,attributes:!0,subtree:!0,characterData:!0,characterDataOldValue:!0})}},{key:"mutationHandler",value:function(t){var e=this,n=!1;t.forEach((function(t){switch(t.type){case"childList":t.target===e.holder?e.onDestroy():n=!0;break;case"characterData":n=!0;break;case"attributes":t.target.classList.contains("ce-block")||t.target.classList.contains("tc-toolbox")||(n=!0)}})),n&&this.mutationDebouncer()}},{key:"debounce",value:function(t,e){var n,r=this;return function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];var s=r;clearTimeout(n),n=setTimeout((function(){return t.apply(s,i)}),e)}}},{key:"onDestroy",value:function(){var t=new CustomEvent("destroy");document.dispatchEvent(t),this.observer.disconnect()}}])}();function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){var r,o,a;r=t,o=e,a=n[e],(o=i(o))in r?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=function(){return c((function t(e){var n=this,r=e.editor,o=e.config,i=void 0===o?{}:o,s=e.onUpdate,c=e.maxLength;a(this,t);var u={maxLength:30,onUpdate:function(){},config:{debounceTimer:200,shortcuts:{undo:["CMD+Z"],redo:["CMD+Y","CMD+SHIFT+Z"]}}},l=r.blocks,h=r.caret,f=r.configuration,p=f.holder,v=f.defaultBlock,b=u.config.shortcuts,g=i.shortcuts,k=y(y({},b),g),m=Array.isArray(k.undo)?k.undo:[k.undo],x=Array.isArray(k.redo)?k.redo:[k.redo],w=u.config.debounceTimer,O=i.debounceTimer,E=void 0===O?w:O;this.holder="string"==typeof p?document.getElementById(p):p,this.editor=r,this.defaultBlock=v,this.blocks=l,this.caret=h,this.shouldSaveHistory=!0,this.readOnly=f.readOnly,this.maxLength=c||u.maxLength,this.onUpdate=s||u.onUpdate,this.config={debounceTimer:E,shortcuts:{undo:m,redo:x}},new d((function(){return n.registerChange()}),this.holder,this.config.debounceTimer).setMutationObserver(),this.setEventListeners(),this.initialItem=null,this.clear()}),[{key:"truncate",value:function(t,e){for(;t.length>e;)t.shift()}},{key:"initialize",value:function(t){var e="blocks"in t?t.blocks:t,n={index:e.length-1,state:e};this.stack[0]=n,this.initialItem=n}},{key:"clear",value:function(){this.stack=this.initialItem?[this.initialItem]:[{index:0,state:[{type:this.defaultBlock,data:{}}]}],this.position=0,this.onUpdate()}},{key:"setReadOnly",value:function(){var t=this.holder.querySelector(".ce-toolbox");this.readOnly=!t}},{key:"registerChange",value:function(){var t=this;this.setReadOnly(),this.readOnly||(this.editor&&this.editor.save&&this.shouldSaveHistory&&this.editor.save().then((function(e){t.editorDidUpdate(e.blocks)&&t.save(e.blocks)})),this.shouldSaveHistory=!0)}},{key:"editorDidUpdate",value:function(t){var e=this.stack[this.position].state;return!!t.length&&(t.length!==e.length||JSON.stringify(e)!==JSON.stringify(t))}},{key:"save",value:function(t){this.position>=this.maxLength&&this.truncate(this.stack,this.maxLength),this.position=Math.min(this.position,this.stack.length-1),this.stack=this.stack.slice(0,this.position+1);var e=this.blocks.getCurrentBlockIndex(),n=this.blocks.getBlocksCount(),r=e;t[e]||(r-=n-t.length);var o=!t[r]||"paragraph"!==t[r].type&&"header"!==t[r].type?null:this.getCaretIndex(e);this.stack.push({index:r,state:t,caretIndex:o}),this.position+=1,this.onUpdate()}},{key:"getCaretIndex",value:function(t){var e=this.holder.getElementsByClassName("ce-block__content");return new(f())(e[t].firstChild).getPos()}},{key:"insertDeletedBlock",value:function(t,e,n){for(var r=0;r<t.length;r+=1)if(!e[r]||t[r].id!==e[r].id){this.blocks.insert(t[r].type,t[r].data,{},r,!0),this.caret.setToBlock(n,"end");break}}},{key:"blockWasDropped",value:function(t,e){return t.length===e.length&&t.some((function(t,n){return t.id!==e[n].id}))}},{key:"blockWasSkipped",value:function(t,e){return t.length!==e.length}},{key:"contentChangedInNoFocusBlock",value:function(t,e){return t!==e}},{key:"blockWasDeleted",value:function(t,e){return t.length>e.length}},{key:"contentWasCopied",value:function(t,e,n){return 0===Object.keys(t[n].data).length&&JSON.stringify(e[n+1])!==JSON.stringify(t[n+1])}},{key:"undo",value:(i=e(l().mark((function t(){var e,n,r,o,i,a,s,c,u,h,f;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.canUndo()){t.next=47;break}if(e=this.stack[this.position],n=e.index,r=e.state,this.position-=1,this.shouldSaveHistory=!1,o=this.stack[this.position].index,i=this.stack[this.position],a=i.state,s=i.caretIndex,this.onUpdate(),c=this.blocks.getBlocksCount(),a[o]||(o-=1,this.stack[this.position].index=o),!this.blockWasDeleted(a,r)){t.next=13;break}this.insertDeletedBlock(a,r,o),t.next=42;break;case 13:if(!this.contentWasCopied(a,r,o)){t.next=19;break}return t.next=16,this.blocks.render({blocks:a});case 16:this.caret.setToBlock(o,"end"),t.next=42;break;case 19:if(!(o<n&&this.blockWasSkipped(a,r))){t.next=25;break}return t.next=22,this.blocks.delete(n);case 22:this.caret.setToBlock(o,"end"),t.next=42;break;case 25:if(!(c>a.length)){t.next=31;break}return t.next=28,this.blocks.render({blocks:a});case 28:this.setCaretIndex(o,s),t.next=42;break;case 31:if(!this.blockWasDropped(a,r)){t.next=37;break}return t.next=34,this.blocks.render({blocks:a});case 34:this.caret.setToBlock(o,"end"),t.next=42;break;case 37:if(!this.contentChangedInNoFocusBlock(o,n)){t.next=42;break}return u=this.blocks.getBlockByIndex(n),h=u.id,t.next=41,this.blocks.update(h,a[n].data);case 41:this.setCaretIndex(o,s);case 42:if(!(f=this.blocks.getBlockByIndex(o))){t.next=47;break}return t.next=46,this.blocks.update(f.id,a[o].data);case 46:this.setCaretIndex(o,s);case 47:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"setCaretIndex",value:function(t,e){if(e&&-1!==e){var n=this.holder.getElementsByClassName("ce-block__content"),r=new(f())(n[t].firstChild);setTimeout((function(){return r.setPos(e)}),50)}else this.caret.setToBlock(t,"end")}},{key:"insertBlock",value:(o=e(l().mark((function t(e,n){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.blocks.insert(e[n].type,e[n].data,{},n,!0);case 2:case"end":return t.stop()}}),t,this)}))),function(t,e){return o.apply(this,arguments)})},{key:"insertSkippedBlocks",value:(r=e(l().mark((function t(e,n,r){var o;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(o=e.length;o<n.length;o+=1)this.insertBlock(n,o);if(JSON.stringify(e[r-1])===JSON.stringify(n[r-1])){t.next=4;break}return t.next=4,this.updateModifiedBlock(n,r);case 4:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return r.apply(this,arguments)})},{key:"updateModifiedBlock",value:(n=e(l().mark((function t(e,n){var r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e[n-1],!this.editor.blocks.getById(r.id)){t.next=3;break}return t.abrupt("return",this.blocks.update(r.id,r.data));case 3:return t.abrupt("return",this.blocks.render({blocks:e}));case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return n.apply(this,arguments)})},{key:"redo",value:(t=e(l().mark((function t(){var e,n,r,o,i,a,s;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.canRedo()){t.next=27;break}if(this.position+=1,this.shouldSaveHistory=!1,e=this.stack[this.position],n=e.index,r=e.state,o=e.caretIndex,(i=this.stack[this.position-1]).index,a=i.state,!this.blockWasDeleted(a,r)){t.next=11;break}return t.next=8,this.blocks.delete();case 8:this.caret.setToBlock(n,"end"),t.next=21;break;case 11:if(!this.blockWasSkipped(r,a)){t.next=17;break}return t.next=14,this.insertSkippedBlocks(a,r,n);case 14:this.caret.setToBlock(n,"end"),t.next=21;break;case 17:if(!this.blockWasDropped(r,a)||1===this.position){t.next=21;break}return t.next=20,this.blocks.render({blocks:r});case 20:this.caret.setToBlock(n,"end");case 21:if(this.onUpdate(),!(s=this.blocks.getBlockByIndex(n))){t.next=27;break}return t.next=26,this.blocks.update(s.id,r[n].data);case 26:this.setCaretIndex(n,o);case 27:case"end":return t.stop()}}),t,this)}))),function(){return t.apply(this,arguments)})},{key:"canUndo",value:function(){return!this.readOnly&&this.position>0}},{key:"canRedo",value:function(){return!this.readOnly&&this.position<this.count()}},{key:"count",value:function(){return this.stack.length-1}},{key:"parseKeys",value:function(t){var e={CMD:/(Mac)/i.test(navigator.platform)?"metaKey":"ctrlKey",ALT:"altKey",SHIFT:"shiftKey"},n=t.slice(0,-1).map((function(t){return e[t]})),r=n.includes("shiftKey")&&2===t.length?t[t.length-1].toUpperCase():t[t.length-1].toLowerCase();return n.push(r),n}},{key:"setEventListeners",value:function(){var t=this,e=this.holder,n=this.config.shortcuts,r=n.undo,o=n.redo,i=r.map((function(t){return t.replace(/ /g,"").split("+")})),a=o.map((function(t){return t.replace(/ /g,"").split("+")})),s=i.map((function(e){return t.parseKeys(e)})),c=a.map((function(e){return t.parseKeys(e)})),u=function(t,e){return e.reduce((function(e,n){return e||function(t,e){return 3===e.length&&t[e[0]]&&t[e[1]]&&t.key.toLowerCase()===e[2]}(t,n)}),!1)},l=function(t,e,n){return!(!function(t,e){return e.reduce((function(e,n){return e||function(t,e){return 2===e.length&&t[e[0]]&&t.key.toLowerCase()===e[1]}(t,n)}),!1)}(t,e)||u(t,n))||!!u(t,e)},h=function(e){l(e,s,c)&&(e.preventDefault(),t.undo())},f=function(e){l(e,c,s)&&(e.preventDefault(),t.redo())};e.addEventListener("keydown",h),e.addEventListener("keydown",f),e.addEventListener("destroy",(function(){e.removeEventListener("keydown",h),e.removeEventListener("keydown",f)}))}}],[{key:"isReadOnlySupported",get:function(){return!0}}]);var t,n,r,o,i}()})(),r.default})()));

/***/ }),

/***/ "./resources/css/editor.css":
/*!**********************************!*\
  !*** ./resources/css/editor.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@editorjs/checklist/dist/checklist.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@editorjs/checklist/dist/checklist.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ f)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.cdx-checklist{gap:6px;display:flex;flex-direction:column}.cdx-checklist__item{display:flex;box-sizing:content-box;align-items:flex-start}.cdx-checklist__item-text{outline:none;flex-grow:1;line-height:1.57em}.cdx-checklist__item-checkbox{width:22px;height:22px;display:flex;align-items:center;margin-right:8px;margin-top:calc(.785em - 11px);cursor:pointer}.cdx-checklist__item-checkbox svg{opacity:0;height:20px;width:20px;position:absolute;left:-1px;top:-1px;max-height:20px}@media (hover: hover){.cdx-checklist__item-checkbox:not(.cdx-checklist__item-checkbox--no-hover):hover .cdx-checklist__item-checkbox-check svg{opacity:1}}.cdx-checklist__item-checkbox-check{cursor:pointer;display:inline-block;flex-shrink:0;position:relative;width:20px;height:20px;box-sizing:border-box;margin-left:0;border-radius:5px;border:1px solid #C9C9C9;background:#fff}.cdx-checklist__item-checkbox-check:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:100%;background-color:#369fff;visibility:hidden;pointer-events:none;transform:scale(1);transition:transform .4s ease-out,opacity .4s}@media (hover: hover){.cdx-checklist__item--checked .cdx-checklist__item-checkbox:not(.cdx-checklist__item--checked .cdx-checklist__item-checkbox--no-hover):hover .cdx-checklist__item-checkbox-check{background:#0059AB;border-color:#0059ab}}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check{background:#369FFF;border-color:#369fff}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check svg{opacity:1}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check svg path{stroke:#fff}.cdx-checklist__item--checked .cdx-checklist__item-checkbox-check:before{opacity:0;visibility:visible;transform:scale(2.5)}')),document.head.appendChild(e)}}catch(c){console.error("vite-plugin-css-injected-by-js",c)}})();
const k = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 12L10.4884 15.8372C10.5677 15.9245 10.705 15.9245 10.7844 15.8372L17 9"/></svg>', g = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.2 12L11.0586 13.8586C11.1367 13.9367 11.2633 13.9367 11.3414 13.8586L14.7 10.5"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
function d() {
  const s = document.activeElement, t = window.getSelection().getRangeAt(0), n = t.cloneRange();
  return n.selectNodeContents(s), n.setStart(t.endContainer, t.endOffset), n.extractContents();
}
function C(s) {
  const e = document.createElement("div");
  return e.appendChild(s), e.innerHTML;
}
function c(s, e = null, t = {}) {
  const n = document.createElement(s);
  Array.isArray(e) ? n.classList.add(...e) : e && n.classList.add(e);
  for (const i in t)
    n[i] = t[i];
  return n;
}
function m(s) {
  return s.innerHTML.replace("<br>", " ").trim();
}
function p(s, e = !1, t = void 0) {
  const n = document.createRange(), i = window.getSelection();
  n.selectNodeContents(s), t !== void 0 && (n.setStart(s, t), n.setEnd(s, t)), n.collapse(e), i.removeAllRanges(), i.addRange(n);
}
Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
Element.prototype.closest || (Element.prototype.closest = function(s) {
  let e = this;
  if (!document.documentElement.contains(e))
    return null;
  do {
    if (e.matches(s))
      return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null && e.nodeType === 1);
  return null;
});
class f {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allow to use native Enter behaviour
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: g,
      title: "Checklist"
    };
  }
  /**
   * Allow Checkbox Tool to be converted to/from other block
   *
   * @returns {{export: Function, import: Function}}
   */
  static get conversionConfig() {
    return {
      /**
       * To create exported string from the checkbox, concatenate items by dot-symbol.
       *
       * @param {ChecklistData} data - checklist data to create a string from that
       * @returns {string}
       */
      export: (e) => e.items.map(({ text: t }) => t).join(". "),
      /**
       * To create a checklist from other block's string, just put it at the first item
       *
       * @param {string} string - string to create list tool data from that
       * @returns {ChecklistData}
       */
      import: (e) => ({
        items: [
          {
            text: e,
            checked: !1
          }
        ]
      })
    };
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} options - block constructor options
   * @param {ChecklistData} options.data - previously saved data
   * @param {object} options.config - user config for Tool
   * @param {object} options.api - Editor.js API
   * @param {boolean} options.readOnly - read only mode flag
   */
  constructor({ data: e, config: t, api: n, readOnly: i }) {
    this._elements = {
      wrapper: null,
      items: []
    }, this.readOnly = i, this.api = n, this.data = e || {};
  }
  /**
   * Returns checklist tag with items
   *
   * @returns {Element}
   */
  render() {
    return this._elements.wrapper = c("div", [this.CSS.baseBlock, this.CSS.wrapper]), this.data.items || (this.data.items = [
      {
        text: "",
        checked: !1
      }
    ]), this.data.items.forEach((e) => {
      const t = this.createChecklistItem(e);
      this._elements.wrapper.appendChild(t);
    }), this.readOnly ? this._elements.wrapper : (this._elements.wrapper.addEventListener("keydown", (e) => {
      const [t, n] = [13, 8];
      switch (e.keyCode) {
        case t:
          this.enterPressed(e);
          break;
        case n:
          this.backspace(e);
          break;
      }
    }, !1), this._elements.wrapper.addEventListener("click", (e) => {
      this.toggleCheckbox(e);
    }), this._elements.wrapper);
  }
  /**
   * Return Checklist data
   *
   * @returns {ChecklistData}
   */
  save() {
    let e = this.items.map((t) => {
      const n = this.getItemInput(t);
      return {
        text: m(n),
        checked: t.classList.contains(this.CSS.itemChecked)
      };
    });
    return e = e.filter((t) => t.text.trim().length !== 0), {
      items: e
    };
  }
  /**
   * Validate data: check if Checklist has items
   *
   * @param {ChecklistData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return !!e.items.length;
  }
  /**
   * Toggle checklist item state
   *
   * @param {MouseEvent} event - click
   * @returns {void}
   */
  toggleCheckbox(e) {
    const t = e.target.closest(`.${this.CSS.item}`), n = t.querySelector(`.${this.CSS.checkboxContainer}`);
    n.contains(e.target) && (t.classList.toggle(this.CSS.itemChecked), n.classList.add(this.CSS.noHover), n.addEventListener("mouseleave", () => this.removeSpecialHoverBehavior(n), { once: !0 }));
  }
  /**
   * Create Checklist items
   *
   * @param {ChecklistItem} item - data.item
   * @returns {Element} checkListItem - new element of checklist
   */
  createChecklistItem(e = {}) {
    const t = c("div", this.CSS.item), n = c("span", this.CSS.checkbox), i = c("div", this.CSS.checkboxContainer), o = c("div", this.CSS.textField, {
      innerHTML: e.text ? e.text : "",
      contentEditable: !this.readOnly
    });
    return e.checked && t.classList.add(this.CSS.itemChecked), n.innerHTML = k, i.appendChild(n), t.appendChild(i), t.appendChild(o), t;
  }
  /**
   * Append new elements to the list by pressing Enter
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  enterPressed(e) {
    e.preventDefault();
    const t = this.items, n = document.activeElement.closest(`.${this.CSS.item}`);
    if (t.indexOf(n) === t.length - 1 && m(this.getItemInput(n)).length === 0) {
      const u = this.api.blocks.getCurrentBlockIndex();
      n.remove(), this.api.blocks.insert(), this.api.caret.setToBlock(u + 1);
      return;
    }
    const a = d(), l = C(a), r = this.createChecklistItem({
      text: l,
      checked: !1
    });
    this._elements.wrapper.insertBefore(r, n.nextSibling), p(this.getItemInput(r), !0);
  }
  /**
   * Handle backspace
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  backspace(e) {
    const t = e.target.closest(`.${this.CSS.item}`), n = this.items.indexOf(t), i = this.items[n - 1];
    if (!i || !(window.getSelection().focusOffset === 0))
      return;
    e.preventDefault();
    const l = d(), r = this.getItemInput(i), h = r.childNodes.length;
    r.appendChild(l), p(r, void 0, h), t.remove();
  }
  /**
   * Styles
   *
   * @private
   * @returns {object<string>}
   */
  get CSS() {
    return {
      baseBlock: this.api.styles.block,
      wrapper: "cdx-checklist",
      item: "cdx-checklist__item",
      itemChecked: "cdx-checklist__item--checked",
      noHover: "cdx-checklist__item-checkbox--no-hover",
      checkbox: "cdx-checklist__item-checkbox-check",
      textField: "cdx-checklist__item-text",
      checkboxContainer: "cdx-checklist__item-checkbox"
    };
  }
  /**
   * Return all items elements
   *
   * @returns {Element[]}
   */
  get items() {
    return Array.from(this._elements.wrapper.querySelectorAll(`.${this.CSS.item}`));
  }
  /**
   * Removes class responsible for special hover behavior on an item
   * 
   * @private
   * @param {Element} el - item wrapper
   * @returns {Element}
   */
  removeSpecialHoverBehavior(e) {
    e.classList.remove(this.CSS.noHover);
  }
  /**
   * Find and return item's content editable element
   *
   * @private
   * @param {Element} el - item wrapper
   * @returns {Element}
   */
  getItemInput(e) {
    return e.querySelector(`.${this.CSS.textField}`);
  }
}



/***/ }),

/***/ "./node_modules/@editorjs/code/dist/code.mjs":
/*!***************************************************!*\
  !*** ./node_modules/@editorjs/code/dist/code.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ce-code__textarea{min-height:200px;font-family:Menlo,Monaco,Consolas,Courier New,monospace;color:#41314e;line-height:1.6em;font-size:12px;background:#f8f7fa;border:1px solid #f1f1f4;box-shadow:none;white-space:pre;word-wrap:normal;overflow-x:auto;resize:vertical}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
function l(c, t) {
  let r = "";
  for (; r !== `
` && t > 0; )
    t = t - 1, r = c.substr(t, 1);
  return r === `
` && (t += 1), t;
}
const h = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>';
/**
 * CodeTool for Editor.js
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */
class d {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allow to press Enter inside the CodeTool textarea
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * @typedef {object} CodeData — plugin saved data
   * @property {string} code - previously saved plugin code
   */
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} options - tool constricting options
   * @param {CodeData} options.data — previously saved plugin code
   * @param {object} options.config - user config for Tool
   * @param {object} options.api - Editor.js API
   * @param {boolean} options.readOnly - read only mode flag
   */
  constructor({ data: t, config: e, api: r, readOnly: a }) {
    this.api = r, this.readOnly = a, this.placeholder = this.api.i18n.t(e.placeholder || d.DEFAULT_PLACEHOLDER), this.CSS = {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      wrapper: "ce-code",
      textarea: "ce-code__textarea"
    }, this.nodes = {
      holder: null,
      textarea: null
    }, this.data = {
      code: t.code || ""
    }, this.nodes.holder = this.drawView();
  }
  /**
   * Create Tool's view
   *
   * @returns {HTMLElement}
   * @private
   */
  drawView() {
    const t = document.createElement("div"), e = document.createElement("textarea");
    return t.classList.add(this.CSS.baseClass, this.CSS.wrapper), e.classList.add(this.CSS.textarea, this.CSS.input), e.textContent = this.data.code, e.placeholder = this.placeholder, this.readOnly && (e.disabled = !0), t.appendChild(e), e.addEventListener("keydown", (r) => {
      switch (r.code) {
        case "Tab":
          this.tabHandler(r);
          break;
      }
    }), this.nodes.textarea = e, t;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement} this.nodes.holder - Code's wrapper
   * @public
   */
  render() {
    return this.nodes.holder;
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} codeWrapper - CodeTool's wrapper, containing textarea with code
   * @returns {CodeData} - saved plugin code
   * @public
   */
  save(t) {
    return {
      code: t.querySelector("textarea").value
    };
  }
  /**
   * onPaste callback fired from Editor`s core
   *
   * @param {PasteEvent} event - event with pasted content
   */
  onPaste(t) {
    const e = t.detail.data;
    this.data = {
      code: e.textContent
    };
  }
  /**
   * Returns Tool`s data from private property
   *
   * @returns {CodeData}
   */
  get data() {
    return this._data;
  }
  /**
   * Set Tool`s data to private property and update view
   *
   * @param {CodeData} data - saved tool data
   */
  set data(t) {
    this._data = t, this.nodes.textarea && (this.nodes.textarea.textContent = t.code);
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: h,
      title: "Code"
    };
  }
  /**
   * Default placeholder for CodeTool's textarea
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_PLACEHOLDER() {
    return "Enter a code";
  }
  /**
   *  Used by Editor.js paste handling API.
   *  Provides configuration to handle CODE tag.
   *
   * @static
   * @returns {{tags: string[]}}
   */
  static get pasteConfig() {
    return {
      tags: ["pre"]
    };
  }
  /**
   * Automatic sanitize config
   *
   * @returns {{code: boolean}}
   */
  static get sanitize() {
    return {
      code: !0
      // Allow HTML tags
    };
  }
  /**
   * Handles Tab key pressing (adds/removes indentations)
   *
   * @private
   * @param {KeyboardEvent} event - keydown
   * @returns {void}
   */
  tabHandler(t) {
    t.stopPropagation(), t.preventDefault();
    const e = t.target, r = t.shiftKey, a = e.selectionStart, s = e.value, n = "  ";
    let i;
    if (!r)
      i = a + n.length, e.value = s.substring(0, a) + n + s.substring(a);
    else {
      const o = l(s, a);
      if (s.substr(o, n.length) !== n)
        return;
      e.value = s.substring(0, o) + s.substring(o + n.length), i = a - n.length;
    }
    e.setSelectionRange(i, i);
  }
}



/***/ }),

/***/ "./node_modules/@editorjs/delimiter/dist/delimiter.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@editorjs/delimiter/dist/delimiter.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.ce-delimiter{line-height:1.6em;width:100%;text-align:center}.ce-delimiter:before{display:inline-block;content:"***";font-size:30px;line-height:65px;height:30px;letter-spacing:.2em}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
const r = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="6" x2="10" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="14" x2="18" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
/**
 * Delimiter Block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 * @version 2.0.0
 */
class n {
  /**
   * Notify core that read-only mode is supported
   * @return {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allow Tool to have no content
   * @return {boolean}
   */
  static get contentless() {
    return !0;
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: DelimiterData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */
  constructor({ data: t, config: s, api: e }) {
    this.api = e, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-delimiter"
    }, this._element = this.drawView(), this.data = t;
  }
  /**
   * Create Tool's view
   * @return {HTMLDivElement}
   * @private
   */
  drawView() {
    let t = document.createElement("div");
    return t.classList.add(this._CSS.wrapper, this._CSS.block), t;
  }
  /**
   * Return Tool's view
   * @returns {HTMLDivElement}
   * @public
   */
  render() {
    return this._element;
  }
  /**
   * Extract Tool's data from the view
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {DelimiterData} - saved data
   * @public
   */
  save(t) {
    return {};
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: r,
      title: "Delimiter"
    };
  }
  /**
   * Delimiter onPaste configuration
   *
   * @public
   */
  static get pasteConfig() {
    return { tags: ["HR"] };
  }
  /**
   * On paste callback that is fired from Editor
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(t) {
    this.data = {};
  }
}



/***/ }),

/***/ "./node_modules/@editorjs/editorjs/dist/editorjs.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@editorjs/editorjs/dist/editorjs.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ts)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ce-hint--align-start{text-align:left}.ce-hint--align-center{text-align:center}.ce-hint__description{opacity:.6;margin-top:3px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var ko = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Fe(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function ze() {
}
Object.assign(ze, {
  default: ze,
  register: ze,
  revert: function() {
  },
  __esModule: !0
});
Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(n) {
  const e = (this.document || this.ownerDocument).querySelectorAll(n);
  let t = e.length;
  for (; --t >= 0 && e.item(t) !== this; )
    ;
  return t > -1;
});
Element.prototype.closest || (Element.prototype.closest = function(n) {
  let e = this;
  if (!document.documentElement.contains(e))
    return null;
  do {
    if (e.matches(n))
      return e;
    e = e.parentElement || e.parentNode;
  } while (e !== null);
  return null;
});
Element.prototype.prepend || (Element.prototype.prepend = function(e) {
  const t = document.createDocumentFragment();
  Array.isArray(e) || (e = [e]), e.forEach((o) => {
    const i = o instanceof Node;
    t.appendChild(i ? o : document.createTextNode(o));
  }), this.insertBefore(t, this.firstChild);
});
Element.prototype.scrollIntoViewIfNeeded || (Element.prototype.scrollIntoViewIfNeeded = function(n) {
  n = arguments.length === 0 ? !0 : !!n;
  const e = this.parentNode, t = window.getComputedStyle(e, null), o = parseInt(t.getPropertyValue("border-top-width")), i = parseInt(t.getPropertyValue("border-left-width")), s = this.offsetTop - e.offsetTop < e.scrollTop, r = this.offsetTop - e.offsetTop + this.clientHeight - o > e.scrollTop + e.clientHeight, l = this.offsetLeft - e.offsetLeft < e.scrollLeft, a = this.offsetLeft - e.offsetLeft + this.clientWidth - i > e.scrollLeft + e.clientWidth, c = s && !r;
  (s || r) && n && (e.scrollTop = this.offsetTop - e.offsetTop - e.clientHeight / 2 - o + this.clientHeight / 2), (l || a) && n && (e.scrollLeft = this.offsetLeft - e.offsetLeft - e.clientWidth / 2 - i + this.clientWidth / 2), (s || r || l || a) && !n && this.scrollIntoView(c);
});
window.requestIdleCallback = window.requestIdleCallback || function(n) {
  const e = Date.now();
  return setTimeout(function() {
    n({
      didTimeout: !1,
      timeRemaining: function() {
        return Math.max(0, 50 - (Date.now() - e));
      }
    });
  }, 1);
};
window.cancelIdleCallback = window.cancelIdleCallback || function(n) {
  clearTimeout(n);
};
let vo = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
var St = /* @__PURE__ */ ((n) => (n.VERBOSE = "VERBOSE", n.INFO = "INFO", n.WARN = "WARN", n.ERROR = "ERROR", n))(St || {});
const w = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  DELETE: 46,
  META: 91,
  SLASH: 191
}, wo = {
  LEFT: 0,
  WHEEL: 1,
  RIGHT: 2,
  BACKWARD: 3,
  FORWARD: 4
};
function Be(n, e, t = "log", o, i = "color: inherit") {
  if (!("console" in window) || !window.console[t])
    return;
  const s = ["info", "log", "warn", "error"].includes(t), r = [];
  switch (Be.logLevel) {
    case "ERROR":
      if (t !== "error")
        return;
      break;
    case "WARN":
      if (!["error", "warn"].includes(t))
        return;
      break;
    case "INFO":
      if (!s || n)
        return;
      break;
  }
  o && r.push(o);
  const l = "Editor.js 2.30.5", a = `line-height: 1em;
            color: #006FEA;
            display: inline-block;
            font-size: 11px;
            line-height: 1em;
            background-color: #fff;
            padding: 4px 9px;
            border-radius: 30px;
            border: 1px solid rgba(56, 138, 229, 0.16);
            margin: 4px 5px 4px 0;`;
  n && (s ? (r.unshift(a, i), e = `%c${l}%c ${e}`) : e = `( ${l} )${e}`);
  try {
    s ? o ? console[t](`${e} %o`, ...r) : console[t](e, ...r) : console[t](e);
  } catch {
  }
}
Be.logLevel = "VERBOSE";
function xo(n) {
  Be.logLevel = n;
}
const I = Be.bind(window, !1), X = Be.bind(window, !0);
function re(n) {
  return Object.prototype.toString.call(n).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function O(n) {
  return re(n) === "function" || re(n) === "asyncfunction";
}
function R(n) {
  return re(n) === "object";
}
function Q(n) {
  return re(n) === "string";
}
function yo(n) {
  return re(n) === "boolean";
}
function mt(n) {
  return re(n) === "number";
}
function bt(n) {
  return re(n) === "undefined";
}
function V(n) {
  return n ? Object.keys(n).length === 0 && n.constructor === Object : !0;
}
function It(n) {
  return n > 47 && n < 58 || // number keys
  n === 32 || n === 13 || // Space bar & return key(s)
  n === 229 || // processing key input for certain languages — Chinese, Japanese, etc.
  n > 64 && n < 91 || // letter keys
  n > 95 && n < 112 || // Numpad keys
  n > 185 && n < 193 || // ;=,-./` (in order)
  n > 218 && n < 223;
}
async function Eo(n, e = () => {
}, t = () => {
}) {
  async function o(i, s, r) {
    try {
      await i.function(i.data), await s(bt(i.data) ? {} : i.data);
    } catch {
      r(bt(i.data) ? {} : i.data);
    }
  }
  return n.reduce(async (i, s) => (await i, o(s, e, t)), Promise.resolve());
}
function Mt(n) {
  return Array.prototype.slice.call(n);
}
function Oe(n, e) {
  return function() {
    const t = this, o = arguments;
    window.setTimeout(() => n.apply(t, o), e);
  };
}
function Bo(n) {
  return n.name.split(".").pop();
}
function To(n) {
  return /^[-\w]+\/([-+\w]+|\*)$/.test(n);
}
function kt(n, e, t) {
  let o;
  return (...i) => {
    const s = this, r = () => {
      o = null, t || n.apply(s, i);
    }, l = t && !o;
    window.clearTimeout(o), o = window.setTimeout(r, e), l && n.apply(s, i);
  };
}
function Ve(n, e, t = void 0) {
  let o, i, s, r = null, l = 0;
  t || (t = {});
  const a = function() {
    l = t.leading === !1 ? 0 : Date.now(), r = null, s = n.apply(o, i), r || (o = i = null);
  };
  return function() {
    const c = Date.now();
    !l && t.leading === !1 && (l = c);
    const u = e - (c - l);
    return o = this, i = arguments, u <= 0 || u > e ? (r && (clearTimeout(r), r = null), l = c, s = n.apply(o, i), r || (o = i = null)) : !r && t.trailing !== !1 && (r = setTimeout(a, u)), s;
  };
}
function Co() {
  const n = {
    win: !1,
    mac: !1,
    x11: !1,
    linux: !1
  }, e = Object.keys(n).find((t) => window.navigator.appVersion.toLowerCase().indexOf(t) !== -1);
  return e && (n[e] = !0), n;
}
function Le(n) {
  return n[0].toUpperCase() + n.slice(1);
}
function qe(n, ...e) {
  if (!e.length)
    return n;
  const t = e.shift();
  if (R(n) && R(t))
    for (const o in t)
      R(t[o]) ? (n[o] || Object.assign(n, { [o]: {} }), qe(n[o], t[o])) : Object.assign(n, { [o]: t[o] });
  return qe(n, ...e);
}
function et(n) {
  const e = Co();
  return n = n.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), e.mac ? n = n.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : n = n.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), n;
}
function So(n) {
  try {
    return new URL(n).href;
  } catch {
  }
  return n.substring(0, 2) === "//" ? window.location.protocol + n : window.location.origin + n;
}
function Io() {
  return vo(10);
}
function Mo(n) {
  window.open(n, "_blank");
}
function Ao(n = "") {
  return `${n}${Math.floor(Math.random() * 1e8).toString(16)}`;
}
function Ze(n, e, t) {
  const o = `«${e}» is deprecated and will be removed in the next major release. Please use the «${t}» instead.`;
  n && X(o, "warn");
}
function ue(n, e, t) {
  const o = t.value ? "value" : "get", i = t[o], s = `#${e}Cache`;
  if (t[o] = function(...r) {
    return this[s] === void 0 && (this[s] = i.apply(this, ...r)), this[s];
  }, o === "get" && t.set) {
    const r = t.set;
    t.set = function(l) {
      delete n[s], r.apply(this, l);
    };
  }
  return t;
}
const At = 650;
function pe() {
  return window.matchMedia(`(max-width: ${At}px)`).matches;
}
const Ge = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1);
function Oo(n, e) {
  const t = Array.isArray(n) || R(n), o = Array.isArray(e) || R(e);
  return t || o ? JSON.stringify(n) === JSON.stringify(e) : n === e;
}
class d {
  /**
   * Check if passed tag has no closed tag
   *
   * @param {HTMLElement} tag - element to check
   * @returns {boolean}
   */
  static isSingleTag(e) {
    return e.tagName && [
      "AREA",
      "BASE",
      "BR",
      "COL",
      "COMMAND",
      "EMBED",
      "HR",
      "IMG",
      "INPUT",
      "KEYGEN",
      "LINK",
      "META",
      "PARAM",
      "SOURCE",
      "TRACK",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Check if element is BR or WBR
   *
   * @param {HTMLElement} element - element to check
   * @returns {boolean}
   */
  static isLineBreakTag(e) {
    return e && e.tagName && [
      "BR",
      "WBR"
    ].includes(e.tagName);
  }
  /**
   * Helper for making Elements with class name and attributes
   *
   * @param  {string} tagName - new Element tag name
   * @param  {string[]|string} [classNames] - list or name of CSS class name(s)
   * @param  {object} [attributes] - any attributes
   * @returns {HTMLElement}
   */
  static make(e, t = null, o = {}) {
    const i = document.createElement(e);
    if (Array.isArray(t)) {
      const s = t.filter((r) => r !== void 0);
      i.classList.add(...s);
    } else
      t && i.classList.add(t);
    for (const s in o)
      Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s]);
    return i;
  }
  /**
   * Creates Text Node with the passed content
   *
   * @param {string} content - text content
   * @returns {Text}
   */
  static text(e) {
    return document.createTextNode(e);
  }
  /**
   * Append one or several elements to the parent
   *
   * @param  {Element|DocumentFragment} parent - where to append
   * @param  {Element|Element[]|DocumentFragment|Text|Text[]} elements - element or elements list
   */
  static append(e, t) {
    Array.isArray(t) ? t.forEach((o) => e.appendChild(o)) : e.appendChild(t);
  }
  /**
   * Append element or a couple to the beginning of the parent elements
   *
   * @param {Element} parent - where to append
   * @param {Element|Element[]} elements - element or elements list
   */
  static prepend(e, t) {
    Array.isArray(t) ? (t = t.reverse(), t.forEach((o) => e.prepend(o))) : e.prepend(t);
  }
  /**
   * Swap two elements in parent
   *
   * @param {HTMLElement} el1 - from
   * @param {HTMLElement} el2 - to
   * @deprecated
   */
  static swap(e, t) {
    const o = document.createElement("div"), i = e.parentNode;
    i.insertBefore(o, e), i.insertBefore(e, t), i.insertBefore(t, o), i.removeChild(o);
  }
  /**
   * Selector Decorator
   *
   * Returns first match
   *
   * @param {Element} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {Element}
   */
  static find(e = document, t) {
    return e.querySelector(t);
  }
  /**
   * Get Element by Id
   *
   * @param {string} id - id to find
   * @returns {HTMLElement | null}
   */
  static get(e) {
    return document.getElementById(e);
  }
  /**
   * Selector Decorator.
   *
   * Returns all matches
   *
   * @param {Element|Document} el - element we searching inside. Default - DOM Document
   * @param {string} selector - searching string
   * @returns {NodeList}
   */
  static findAll(e = document, t) {
    return e.querySelectorAll(t);
  }
  /**
   * Returns CSS selector for all text inputs
   */
  static get allInputsSelector() {
    return "[contenteditable=true], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map((t) => `input[type="${t}"]`).join(", ");
  }
  /**
   * Find all contenteditable, textarea and editable input elements passed holder contains
   *
   * @param holder - element where to find inputs
   */
  static findAllInputs(e) {
    return Mt(e.querySelectorAll(d.allInputsSelector)).reduce((t, o) => d.isNativeInput(o) || d.containsOnlyInlineElements(o) ? [...t, o] : [...t, ...d.getDeepestBlockElements(o)], []);
  }
  /**
   * Search for deepest node which is Leaf.
   * Leaf is the vertex that doesn't have any child nodes
   *
   * @description Method recursively goes throw the all Node until it finds the Leaf
   * @param {Node} node - root Node. From this vertex we start Deep-first search
   *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
   * @param {boolean} [atLast] - find last text node
   * @returns - it can be text Node or Element Node, so that caret will able to work with it
   *            Can return null if node is Document or DocumentFragment, or node is not attached to the DOM
   */
  static getDeepestNode(e, t = !1) {
    const o = t ? "lastChild" : "firstChild", i = t ? "previousSibling" : "nextSibling";
    if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
      let s = e[o];
      if (d.isSingleTag(s) && !d.isNativeInput(s) && !d.isLineBreakTag(s))
        if (s[i])
          s = s[i];
        else if (s.parentNode[i])
          s = s.parentNode[i];
        else
          return s.parentNode;
      return this.getDeepestNode(s, t);
    }
    return e;
  }
  /**
   * Check if object is DOM node
   *
   * @param {*} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isElement(e) {
    return mt(e) ? !1 : e && e.nodeType && e.nodeType === Node.ELEMENT_NODE;
  }
  /**
   * Check if object is DocumentFragment node
   *
   * @param {object} node - object to check
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isFragment(e) {
    return mt(e) ? !1 : e && e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
  }
  /**
   * Check if passed element is contenteditable
   *
   * @param {HTMLElement} element - html element to check
   * @returns {boolean}
   */
  static isContentEditable(e) {
    return e.contentEditable === "true";
  }
  /**
   * Checks target if it is native input
   *
   * @param {*} target - HTML element or string
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static isNativeInput(e) {
    const t = [
      "INPUT",
      "TEXTAREA"
    ];
    return e && e.tagName ? t.includes(e.tagName) : !1;
  }
  /**
   * Checks if we can set caret
   *
   * @param {HTMLElement} target - target to check
   * @returns {boolean}
   */
  static canSetCaret(e) {
    let t = !0;
    if (d.isNativeInput(e))
      switch (e.type) {
        case "file":
        case "checkbox":
        case "radio":
        case "hidden":
        case "submit":
        case "button":
        case "image":
        case "reset":
          t = !1;
          break;
      }
    else
      t = d.isContentEditable(e);
    return t;
  }
  /**
   * Checks node if it is empty
   *
   * @description Method checks simple Node without any childs for emptiness
   * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean} true if it is empty
   */
  static isNodeEmpty(e, t) {
    let o;
    return this.isSingleTag(e) && !this.isLineBreakTag(e) ? !1 : (this.isElement(e) && this.isNativeInput(e) ? o = e.value : o = e.textContent.replace("​", ""), t && (o = o.replace(new RegExp(t, "g"), "")), o.trim().length === 0);
  }
  /**
   * checks node if it is doesn't have any child nodes
   *
   * @param {Node} node - node to check
   * @returns {boolean}
   */
  static isLeaf(e) {
    return e ? e.childNodes.length === 0 : !1;
  }
  /**
   * breadth-first search (BFS)
   * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
   *
   * @description Pushes to stack all DOM leafs and checks for emptiness
   * @param {Node} node - node to check
   * @param {string} [ignoreChars] - char or substring to treat as empty
   * @returns {boolean}
   */
  static isEmpty(e, t) {
    e.normalize();
    const o = [e];
    for (; o.length > 0; )
      if (e = o.shift(), !!e) {
        if (this.isLeaf(e) && !this.isNodeEmpty(e, t))
          return !1;
        e.childNodes && o.push(...Array.from(e.childNodes));
      }
    return !0;
  }
  /**
   * Check if string contains html elements
   *
   * @param {string} str - string to check
   * @returns {boolean}
   */
  static isHTMLString(e) {
    const t = d.make("div");
    return t.innerHTML = e, t.childElementCount > 0;
  }
  /**
   * Return length of node`s text content
   *
   * @param {Node} node - node with content
   * @returns {number}
   */
  static getContentLength(e) {
    return d.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length;
  }
  /**
   * Return array of names of block html elements
   *
   * @returns {string[]}
   */
  static get blockElements() {
    return [
      "address",
      "article",
      "aside",
      "blockquote",
      "canvas",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "noscript",
      "ol",
      "output",
      "p",
      "pre",
      "ruby",
      "section",
      "table",
      "tbody",
      "thead",
      "tr",
      "tfoot",
      "ul",
      "video"
    ];
  }
  /**
   * Check if passed content includes only inline elements
   *
   * @param {string|HTMLElement} data - element or html string
   * @returns {boolean}
   */
  static containsOnlyInlineElements(e) {
    let t;
    Q(e) ? (t = document.createElement("div"), t.innerHTML = e) : t = e;
    const o = (i) => !d.blockElements.includes(i.tagName.toLowerCase()) && Array.from(i.children).every(o);
    return Array.from(t.children).every(o);
  }
  /**
   * Find and return all block elements in the passed parent (including subtree)
   *
   * @param {HTMLElement} parent - root element
   * @returns {HTMLElement[]}
   */
  static getDeepestBlockElements(e) {
    return d.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce((t, o) => [...t, ...d.getDeepestBlockElements(o)], []);
  }
  /**
   * Helper for get holder from {string} or return HTMLElement
   *
   * @param {string | HTMLElement} element - holder's id or holder's HTML Element
   * @returns {HTMLElement}
   */
  static getHolder(e) {
    return Q(e) ? document.getElementById(e) : e;
  }
  /**
   * Returns true if element is anchor (is A tag)
   *
   * @param {Element} element - element to check
   * @returns {boolean}
   */
  static isAnchor(e) {
    return e.tagName.toLowerCase() === "a";
  }
  /**
   * Return element's offset related to the document
   *
   * @todo handle case when editor initialized in scrollable popup
   * @param el - element to compute offset
   */
  static offset(e) {
    const t = e.getBoundingClientRect(), o = window.pageXOffset || document.documentElement.scrollLeft, i = window.pageYOffset || document.documentElement.scrollTop, s = t.top + i, r = t.left + o;
    return {
      top: s,
      left: r,
      bottom: s + t.height,
      right: r + t.width
    };
  }
}
function Lo(n) {
  return !/[^\t\n\r ]/.test(n);
}
function _o(n) {
  const e = window.getComputedStyle(n), t = parseFloat(e.fontSize), o = parseFloat(e.lineHeight) || t * 1.2, i = parseFloat(e.paddingTop), s = parseFloat(e.borderTopWidth), r = parseFloat(e.marginTop), l = t * 0.8, a = (o - t) / 2;
  return r + s + i + a + l;
}
function Ot(n) {
  n.dataset.empty = d.isEmpty(n) ? "true" : "false";
}
const No = {
  blockTunes: {
    toggler: {
      "Click to tune": "",
      "or drag to move": ""
    }
  },
  inlineToolbar: {
    converter: {
      "Convert to": ""
    }
  },
  toolbar: {
    toolbox: {
      Add: ""
    }
  },
  popover: {
    Filter: "",
    "Nothing found": "",
    "Convert to": ""
  }
}, Po = {
  Text: "",
  Link: "",
  Bold: "",
  Italic: ""
}, Do = {
  link: {
    "Add a link": ""
  },
  stub: {
    "The block can not be displayed correctly.": ""
  }
}, Ro = {
  delete: {
    Delete: "",
    "Click to delete": ""
  },
  moveUp: {
    "Move up": ""
  },
  moveDown: {
    "Move down": ""
  }
}, Lt = {
  ui: No,
  toolNames: Po,
  tools: Do,
  blockTunes: Ro
}, _t = class ae {
  /**
   * Type-safe translation for internal UI texts:
   * Perform translation of the string by namespace and a key
   *
   * @example I18n.ui(I18nInternalNS.ui.blockTunes.toggler, 'Click to tune')
   * @param internalNamespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static ui(e, t) {
    return ae._t(e, t);
  }
  /**
   * Translate for external strings that is not presented in default dictionary.
   * For example, for user-specified tool names
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static t(e, t) {
    return ae._t(e, t);
  }
  /**
   * Adjust module for using external dictionary
   *
   * @param dictionary - new messages list to override default
   */
  static setDictionary(e) {
    ae.currentDictionary = e;
  }
  /**
   * Perform translation both for internal and external namespaces
   * If there is no translation found, returns passed key as a translated message
   *
   * @param namespace - path to translated string in dictionary
   * @param dictKey - dictionary key. Better to use default locale original text
   */
  static _t(e, t) {
    const o = ae.getNamespace(e);
    return !o || !o[t] ? t : o[t];
  }
  /**
   * Find messages section by namespace path
   *
   * @param namespace - path to section
   */
  static getNamespace(e) {
    return e.split(".").reduce((o, i) => !o || !Object.keys(o).length ? {} : o[i], ae.currentDictionary);
  }
};
_t.currentDictionary = Lt;
let z = _t;
class Nt extends Error {
}
class Te {
  constructor() {
    this.subscribers = {};
  }
  /**
   * Subscribe any event on callback
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  on(e, t) {
    e in this.subscribers || (this.subscribers[e] = []), this.subscribers[e].push(t);
  }
  /**
   * Subscribe any event on callback. Callback will be called once and be removed from subscribers array after call.
   *
   * @param eventName - event name
   * @param callback - subscriber
   */
  once(e, t) {
    e in this.subscribers || (this.subscribers[e] = []);
    const o = (i) => {
      const s = t(i), r = this.subscribers[e].indexOf(o);
      return r !== -1 && this.subscribers[e].splice(r, 1), s;
    };
    this.subscribers[e].push(o);
  }
  /**
   * Emit callbacks with passed data
   *
   * @param eventName - event name
   * @param data - subscribers get this data when they were fired
   */
  emit(e, t) {
    V(this.subscribers) || !this.subscribers[e] || this.subscribers[e].reduce((o, i) => {
      const s = i(o);
      return s !== void 0 ? s : o;
    }, t);
  }
  /**
   * Unsubscribe callback from event
   *
   * @param eventName - event name
   * @param callback - event handler
   */
  off(e, t) {
    if (this.subscribers[e] === void 0) {
      console.warn(`EventDispatcher .off(): there is no subscribers for event "${e.toString()}". Probably, .off() called before .on()`);
      return;
    }
    for (let o = 0; o < this.subscribers[e].length; o++)
      if (this.subscribers[e][o] === t) {
        delete this.subscribers[e][o];
        break;
      }
  }
  /**
   * Destroyer
   * clears subscribers list
   */
  destroy() {
    this.subscribers = {};
  }
}
function G(n) {
  Object.setPrototypeOf(this, {
    /**
     * Block id
     *
     * @returns {string}
     */
    get id() {
      return n.id;
    },
    /**
     * Tool name
     *
     * @returns {string}
     */
    get name() {
      return n.name;
    },
    /**
     * Tool config passed on Editor's initialization
     *
     * @returns {ToolConfig}
     */
    get config() {
      return n.config;
    },
    /**
     * .ce-block element, that wraps plugin contents
     *
     * @returns {HTMLElement}
     */
    get holder() {
      return n.holder;
    },
    /**
     * True if Block content is empty
     *
     * @returns {boolean}
     */
    get isEmpty() {
      return n.isEmpty;
    },
    /**
     * True if Block is selected with Cross-Block selection
     *
     * @returns {boolean}
     */
    get selected() {
      return n.selected;
    },
    /**
     * Set Block's stretch state
     *
     * @param {boolean} state — state to set
     */
    set stretched(t) {
      n.stretched = t;
    },
    /**
     * True if Block is stretched
     *
     * @returns {boolean}
     */
    get stretched() {
      return n.stretched;
    },
    /**
     * True if Block has inputs to be focused
     */
    get focusable() {
      return n.focusable;
    },
    /**
     * Call Tool method with errors handler under-the-hood
     *
     * @param {string} methodName - method to call
     * @param {object} param - object with parameters
     * @returns {unknown}
     */
    call(t, o) {
      return n.call(t, o);
    },
    /**
     * Save Block content
     *
     * @returns {Promise<void|SavedData>}
     */
    save() {
      return n.save();
    },
    /**
     * Validate Block data
     *
     * @param {BlockToolData} data - data to validate
     * @returns {Promise<boolean>}
     */
    validate(t) {
      return n.validate(t);
    },
    /**
     * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
     * Can be useful for block changes invisible for editor core.
     */
    dispatchChange() {
      n.dispatchChange();
    },
    /**
     * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
     * This method returns the entry that is related to the Block (depended on the Block data)
     */
    getActiveToolboxEntry() {
      return n.getActiveToolboxEntry();
    }
  });
}
class Ce {
  constructor() {
    this.allListeners = [];
  }
  /**
   * Assigns event listener on element and returns unique identifier
   *
   * @param {EventTarget} element - DOM element that needs to be listened
   * @param {string} eventType - event type
   * @param {Function} handler - method that will be fired on event
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  on(e, t, o, i = !1) {
    const s = Ao("l"), r = {
      id: s,
      element: e,
      eventType: t,
      handler: o,
      options: i
    };
    if (!this.findOne(e, t, o))
      return this.allListeners.push(r), e.addEventListener(t, o, i), s;
  }
  /**
   * Removes event listener from element
   *
   * @param {EventTarget} element - DOM element that we removing listener
   * @param {string} eventType - event type
   * @param {Function} handler - remove handler, if element listens several handlers on the same event type
   * @param {boolean|AddEventListenerOptions} options - useCapture or {capture, passive, once}
   */
  off(e, t, o, i) {
    const s = this.findAll(e, t, o);
    s.forEach((r, l) => {
      const a = this.allListeners.indexOf(s[l]);
      a > -1 && (this.allListeners.splice(a, 1), r.element.removeEventListener(r.eventType, r.handler, r.options));
    });
  }
  /**
   * Removes listener by id
   *
   * @param {string} id - listener identifier
   */
  offById(e) {
    const t = this.findById(e);
    t && t.element.removeEventListener(t.eventType, t.handler, t.options);
  }
  /**
   * Finds and returns first listener by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} [eventType] - event type
   * @param {Function} [handler] - event handler
   * @returns {ListenerData|null}
   */
  findOne(e, t, o) {
    const i = this.findAll(e, t, o);
    return i.length > 0 ? i[0] : null;
  }
  /**
   * Return all stored listeners by passed params
   *
   * @param {EventTarget} element - event target
   * @param {string} eventType - event type
   * @param {Function} handler - event handler
   * @returns {ListenerData[]}
   */
  findAll(e, t, o) {
    let i;
    const s = e ? this.findByEventTarget(e) : [];
    return e && t && o ? i = s.filter((r) => r.eventType === t && r.handler === o) : e && t ? i = s.filter((r) => r.eventType === t) : i = s, i;
  }
  /**
   * Removes all listeners
   */
  removeAll() {
    this.allListeners.map((e) => {
      e.element.removeEventListener(e.eventType, e.handler, e.options);
    }), this.allListeners = [];
  }
  /**
   * Module cleanup on destruction
   */
  destroy() {
    this.removeAll();
  }
  /**
   * Search method: looks for listener by passed element
   *
   * @param {EventTarget} element - searching element
   * @returns {Array} listeners that found on element
   */
  findByEventTarget(e) {
    return this.allListeners.filter((t) => {
      if (t.element === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed event type
   *
   * @param {string} eventType - event type
   * @returns {ListenerData[]} listeners that found on element
   */
  findByType(e) {
    return this.allListeners.filter((t) => {
      if (t.eventType === e)
        return t;
    });
  }
  /**
   * Search method: looks for listener by passed handler
   *
   * @param {Function} handler - event handler
   * @returns {ListenerData[]} listeners that found on element
   */
  findByHandler(e) {
    return this.allListeners.filter((t) => {
      if (t.handler === e)
        return t;
    });
  }
  /**
   * Returns listener data found by id
   *
   * @param {string} id - listener identifier
   * @returns {ListenerData}
   */
  findById(e) {
    return this.allListeners.find((t) => t.id === e);
  }
}
class y {
  /**
   * @class
   * @param options - Module options
   * @param options.config - Module config
   * @param options.eventsDispatcher - Common event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    if (this.nodes = {}, this.listeners = new Ce(), this.readOnlyMutableListeners = {
      /**
       * Assigns event listener on DOM element and pushes into special array that might be removed
       *
       * @param {EventTarget} element - DOM Element
       * @param {string} eventType - Event name
       * @param {Function} handler - Event handler
       * @param {boolean|AddEventListenerOptions} options - Listening options
       */
      on: (o, i, s, r = !1) => {
        this.mutableListenerIds.push(
          this.listeners.on(o, i, s, r)
        );
      },
      /**
       * Clears all mutable listeners
       */
      clearAll: () => {
        for (const o of this.mutableListenerIds)
          this.listeners.offById(o);
        this.mutableListenerIds = [];
      }
    }, this.mutableListenerIds = [], new.target === y)
      throw new TypeError("Constructors for abstract class Module are not allowed.");
    this.config = e, this.eventsDispatcher = t;
  }
  /**
   * Editor modules setter
   *
   * @param {EditorModules} Editor - Editor's Modules
   */
  set state(e) {
    this.Editor = e;
  }
  /**
   * Remove memorized nodes
   */
  removeAllNodes() {
    for (const e in this.nodes) {
      const t = this.nodes[e];
      t instanceof HTMLElement && t.remove();
    }
  }
  /**
   * Returns true if current direction is RTL (Right-To-Left)
   */
  get isRtl() {
    return this.config.i18n.direction === "rtl";
  }
}
class b {
  constructor() {
    this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat";
  }
  /**
   * Editor styles
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  static get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorZone: "codex-editor__redactor"
    };
  }
  /**
   * Returns selected anchor
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorNode}
   *
   * @returns {Node|null}
   */
  static get anchorNode() {
    const e = window.getSelection();
    return e ? e.anchorNode : null;
  }
  /**
   * Returns selected anchor element
   *
   * @returns {Element|null}
   */
  static get anchorElement() {
    const e = window.getSelection();
    if (!e)
      return null;
    const t = e.anchorNode;
    return t ? d.isElement(t) ? t : t.parentElement : null;
  }
  /**
   * Returns selection offset according to the anchor node
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Selection/anchorOffset}
   *
   * @returns {number|null}
   */
  static get anchorOffset() {
    const e = window.getSelection();
    return e ? e.anchorOffset : null;
  }
  /**
   * Is current selection range collapsed
   *
   * @returns {boolean|null}
   */
  static get isCollapsed() {
    const e = window.getSelection();
    return e ? e.isCollapsed : null;
  }
  /**
   * Check current selection if it is at Editor's zone
   *
   * @returns {boolean}
   */
  static get isAtEditor() {
    return this.isSelectionAtEditor(b.get());
  }
  /**
   * Check if passed selection is at Editor's zone
   *
   * @param selection - Selection object to check
   */
  static isSelectionAtEditor(e) {
    if (!e)
      return !1;
    let t = e.anchorNode || e.focusNode;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${b.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Check if passed range at Editor zone
   *
   * @param range - range to check
   */
  static isRangeAtEditor(e) {
    if (!e)
      return;
    let t = e.startContainer;
    t && t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
    let o = null;
    return t && t instanceof Element && (o = t.closest(`.${b.CSS.editorZone}`)), o ? o.nodeType === Node.ELEMENT_NODE : !1;
  }
  /**
   * Methods return boolean that true if selection exists on the page
   */
  static get isSelectionExists() {
    return !!b.get().anchorNode;
  }
  /**
   * Return first range
   *
   * @returns {Range|null}
   */
  static get range() {
    return this.getRangeFromSelection(this.get());
  }
  /**
   * Returns range from passed Selection object
   *
   * @param selection - Selection object to get Range from
   */
  static getRangeFromSelection(e) {
    return e && e.rangeCount ? e.getRangeAt(0) : null;
  }
  /**
   * Calculates position and size of selected text
   *
   * @returns {DOMRect | ClientRect}
   */
  static get rect() {
    let e = document.selection, t, o = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
    if (e && e.type !== "Control")
      return e = e, t = e.createRange(), o.x = t.boundingLeft, o.y = t.boundingTop, o.width = t.boundingWidth, o.height = t.boundingHeight, o;
    if (!window.getSelection)
      return I("Method window.getSelection is not supported", "warn"), o;
    if (e = window.getSelection(), e.rangeCount === null || isNaN(e.rangeCount))
      return I("Method SelectionUtils.rangeCount is not supported", "warn"), o;
    if (e.rangeCount === 0)
      return o;
    if (t = e.getRangeAt(0).cloneRange(), t.getBoundingClientRect && (o = t.getBoundingClientRect()), o.x === 0 && o.y === 0) {
      const i = document.createElement("span");
      if (i.getBoundingClientRect) {
        i.appendChild(document.createTextNode("​")), t.insertNode(i), o = i.getBoundingClientRect();
        const s = i.parentNode;
        s.removeChild(i), s.normalize();
      }
    }
    return o;
  }
  /**
   * Returns selected text as String
   *
   * @returns {string}
   */
  static get text() {
    return window.getSelection ? window.getSelection().toString() : "";
  }
  /**
   * Returns window SelectionUtils
   * {@link https://developer.mozilla.org/ru/docs/Web/API/Window/getSelection}
   *
   * @returns {Selection}
   */
  static get() {
    return window.getSelection();
  }
  /**
   * Set focus to contenteditable or native input element
   *
   * @param element - element where to set focus
   * @param offset - offset of cursor
   */
  static setCursor(e, t = 0) {
    const o = document.createRange(), i = window.getSelection();
    return d.isNativeInput(e) ? d.canSetCaret(e) ? (e.focus(), e.selectionStart = e.selectionEnd = t, e.getBoundingClientRect()) : void 0 : (o.setStart(e, t), o.setEnd(e, t), i.removeAllRanges(), i.addRange(o), o.getBoundingClientRect());
  }
  /**
   * Check if current range exists and belongs to container
   *
   * @param container - where range should be
   */
  static isRangeInsideContainer(e) {
    const t = b.range;
    return t === null ? !1 : e.contains(t.startContainer);
  }
  /**
   * Adds fake cursor to the current range
   */
  static addFakeCursor() {
    const e = b.range;
    if (e === null)
      return;
    const t = d.make("span", "codex-editor__fake-cursor");
    t.dataset.mutationFree = "true", e.collapse(), e.insertNode(t);
  }
  /**
   * Check if passed element contains a fake cursor
   *
   * @param el - where to check
   */
  static isFakeCursorInsideContainer(e) {
    return d.find(e, ".codex-editor__fake-cursor") !== null;
  }
  /**
   * Removes fake cursor from a container
   *
   * @param container - container to look for
   */
  static removeFakeCursor(e = document.body) {
    const t = d.find(e, ".codex-editor__fake-cursor");
    t && t.remove();
  }
  /**
   * Removes fake background
   */
  removeFakeBackground() {
    this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat));
  }
  /**
   * Sets fake background
   */
  setFakeBackground() {
    document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0;
  }
  /**
   * Save SelectionUtils's range
   */
  save() {
    this.savedSelectionRange = b.range;
  }
  /**
   * Restore saved SelectionUtils's range
   */
  restore() {
    if (!this.savedSelectionRange)
      return;
    const e = window.getSelection();
    e.removeAllRanges(), e.addRange(this.savedSelectionRange);
  }
  /**
   * Clears saved selection
   */
  clearSaved() {
    this.savedSelectionRange = null;
  }
  /**
   * Collapse current selection
   */
  collapseToEnd() {
    const e = window.getSelection(), t = document.createRange();
    t.selectNodeContents(e.focusNode), t.collapse(!1), e.removeAllRanges(), e.addRange(t);
  }
  /**
   * Looks ahead to find passed tag from current selection
   *
   * @param  {string} tagName       - tag to found
   * @param  {string} [className]   - tag's class name
   * @param  {number} [searchDepth] - count of tags that can be included. For better performance.
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t, o = 10) {
    const i = window.getSelection();
    let s = null;
    return !i || !i.anchorNode || !i.focusNode ? null : ([
      /** the Node in which the selection begins */
      i.anchorNode,
      /** the Node in which the selection ends */
      i.focusNode
    ].forEach((l) => {
      let a = o;
      for (; a > 0 && l.parentNode && !(l.tagName === e && (s = l, t && l.classList && !l.classList.contains(t) && (s = null), s)); )
        l = l.parentNode, a--;
    }), s);
  }
  /**
   * Expands selection range to the passed parent node
   *
   * @param {HTMLElement} element - element which contents should be selected
   */
  expandToTag(e) {
    const t = window.getSelection();
    t.removeAllRanges();
    const o = document.createRange();
    o.selectNodeContents(e), t.addRange(o);
  }
}
function Fo(n, e) {
  const { type: t, target: o, addedNodes: i, removedNodes: s } = n;
  return n.type === "attributes" && n.attributeName === "data-empty" ? !1 : !!(e.contains(o) || t === "childList" && (Array.from(i).some((a) => a === e) || Array.from(s).some((a) => a === e)));
}
const Je = "redactor dom changed", Pt = "block changed", Dt = "fake cursor is about to be toggled", Rt = "fake cursor have been set", ye = "editor mobile layout toggled";
function Ft(n, e) {
  if (!n.conversionConfig)
    return !1;
  const t = n.conversionConfig[e];
  return O(t) || Q(t);
}
function _e(n, e) {
  return Ft(n.tool, e);
}
function Ht(n, e) {
  return Object.entries(n).some(([t, o]) => e[t] && Oo(e[t], o));
}
async function zt(n, e) {
  const o = (await n.save()).data;
  return e.reduce((i, s) => {
    if (!Ft(s, "import"))
      return i;
    const r = s.toolbox.filter((l) => {
      if (V(l) || !l.icon)
        return !1;
      if (l.data !== void 0) {
        if (Ht(l.data, o))
          return !1;
      } else if (s.name === n.name)
        return !1;
      return !0;
    });
    return i.push({
      ...s,
      toolbox: r
    }), i;
  }, []);
}
function vt(n, e) {
  return n.mergeable ? n.name === e.name ? !0 : _e(e, "export") && _e(n, "import") : !1;
}
function Ho(n, e) {
  const t = e == null ? void 0 : e.export;
  return O(t) ? t(n) : Q(t) ? n[t] : (t !== void 0 && I("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), "");
}
function wt(n, e) {
  const t = e == null ? void 0 : e.import;
  return O(t) ? t(n) : Q(t) ? {
    [t]: n
  } : (t !== void 0 && I("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), {});
}
var A = /* @__PURE__ */ ((n) => (n.Default = "default", n.Separator = "separator", n.Html = "html", n))(A || {}), J = /* @__PURE__ */ ((n) => (n.APPEND_CALLBACK = "appendCallback", n.RENDERED = "rendered", n.MOVED = "moved", n.UPDATED = "updated", n.REMOVED = "removed", n.ON_PASTE = "onPaste", n))(J || {});
class D extends Te {
  /**
   * @param options - block constructor options
   * @param [options.id] - block's id. Will be generated if omitted.
   * @param options.data - Tool's initial data
   * @param options.tool — block's tool
   * @param options.api - Editor API module for pass it to the Block Tunes
   * @param options.readOnly - Read-Only flag
   * @param [eventBus] - Editor common event bus. Allows to subscribe on some Editor events. Could be omitted when "virtual" Block is created. See BlocksAPI@composeBlockData.
   */
  constructor({
    id: e = Io(),
    data: t,
    tool: o,
    readOnly: i,
    tunesData: s
  }, r) {
    super(), this.cachedInputs = [], this.toolRenderedElement = null, this.tunesInstances = /* @__PURE__ */ new Map(), this.defaultTunesInstances = /* @__PURE__ */ new Map(), this.unavailableTunesData = {}, this.inputIndex = 0, this.editorEventBus = null, this.handleFocus = () => {
      this.dropInputsCache(), this.updateCurrentInput();
    }, this.didMutated = (l = void 0) => {
      const a = l === void 0, c = l instanceof InputEvent;
      !a && !c && this.detectToolRootChange(l);
      let u;
      a || c ? u = !0 : u = !(l.length > 0 && l.every((p) => {
        const { addedNodes: g, removedNodes: f, target: k } = p;
        return [
          ...Array.from(g),
          ...Array.from(f),
          k
        ].some((S) => (d.isElement(S) || (S = S.parentElement), S && S.closest('[data-mutation-free="true"]') !== null));
      })), u && (this.dropInputsCache(), this.updateCurrentInput(), this.toggleInputsEmptyMark(), this.call(
        "updated"
        /* UPDATED */
      ), this.emit("didMutated", this));
    }, this.name = o.name, this.id = e, this.settings = o.settings, this.config = o.settings.config || {}, this.editorEventBus = r || null, this.blockAPI = new G(this), this.tool = o, this.toolInstance = o.create(t, this.blockAPI, i), this.tunes = o.tunes, this.composeTunes(s), this.holder = this.compose(), window.requestIdleCallback(() => {
      this.watchBlockMutations(), this.addInputEvents(), this.toggleInputsEmptyMark();
    });
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      wrapper: "ce-block",
      wrapperStretched: "ce-block--stretched",
      content: "ce-block__content",
      selected: "ce-block--selected",
      dropTarget: "ce-block--drop-target"
    };
  }
  /**
   * Find and return all editable elements (contenteditable and native inputs) in the Tool HTML
   */
  get inputs() {
    if (this.cachedInputs.length !== 0)
      return this.cachedInputs;
    const e = d.findAllInputs(this.holder);
    return this.inputIndex > e.length - 1 && (this.inputIndex = e.length - 1), this.cachedInputs = e, e;
  }
  /**
   * Return current Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get currentInput() {
    return this.inputs[this.inputIndex];
  }
  /**
   * Set input index to the passed element
   *
   * @param element - HTML Element to set as current input
   */
  set currentInput(e) {
    const t = this.inputs.findIndex((o) => o === e || o.contains(e));
    t !== -1 && (this.inputIndex = t);
  }
  /**
   * Return first Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get firstInput() {
    return this.inputs[0];
  }
  /**
   * Return first Tool`s input
   * If Block doesn't contain inputs, return undefined
   */
  get lastInput() {
    const e = this.inputs;
    return e[e.length - 1];
  }
  /**
   * Return next Tool`s input or undefined if it doesn't exist
   * If Block doesn't contain inputs, return undefined
   */
  get nextInput() {
    return this.inputs[this.inputIndex + 1];
  }
  /**
   * Return previous Tool`s input or undefined if it doesn't exist
   * If Block doesn't contain inputs, return undefined
   */
  get previousInput() {
    return this.inputs[this.inputIndex - 1];
  }
  /**
   * Get Block's JSON data
   *
   * @returns {object}
   */
  get data() {
    return this.save().then((e) => e && !V(e.data) ? e.data : {});
  }
  /**
   * Returns tool's sanitizer config
   *
   * @returns {object}
   */
  get sanitize() {
    return this.tool.sanitizeConfig;
  }
  /**
   * is block mergeable
   * We plugin have merge function then we call it mergeable
   *
   * @returns {boolean}
   */
  get mergeable() {
    return O(this.toolInstance.merge);
  }
  /**
   * If Block contains inputs, it is focusable
   */
  get focusable() {
    return this.inputs.length !== 0;
  }
  /**
   * Check block for emptiness
   *
   * @returns {boolean}
   */
  get isEmpty() {
    const e = d.isEmpty(this.pluginsContent, "/"), t = !this.hasMedia;
    return e && t;
  }
  /**
   * Check if block has a media content such as images, iframe and other
   *
   * @returns {boolean}
   */
  get hasMedia() {
    const e = [
      "img",
      "iframe",
      "video",
      "audio",
      "source",
      "input",
      "textarea",
      "twitterwidget"
    ];
    return !!this.holder.querySelector(e.join(","));
  }
  /**
   * Set selected state
   * We don't need to mark Block as Selected when it is empty
   *
   * @param {boolean} state - 'true' to select, 'false' to remove selection
   */
  set selected(e) {
    var i, s;
    this.holder.classList.toggle(D.CSS.selected, e);
    const t = e === !0 && b.isRangeInsideContainer(this.holder), o = e === !1 && b.isFakeCursorInsideContainer(this.holder);
    (t || o) && ((i = this.editorEventBus) == null || i.emit(Dt, { state: e }), t ? b.addFakeCursor() : b.removeFakeCursor(this.holder), (s = this.editorEventBus) == null || s.emit(Rt, { state: e }));
  }
  /**
   * Returns True if it is Selected
   *
   * @returns {boolean}
   */
  get selected() {
    return this.holder.classList.contains(D.CSS.selected);
  }
  /**
   * Set stretched state
   *
   * @param {boolean} state - 'true' to enable, 'false' to disable stretched state
   */
  set stretched(e) {
    this.holder.classList.toggle(D.CSS.wrapperStretched, e);
  }
  /**
   * Return Block's stretched state
   *
   * @returns {boolean}
   */
  get stretched() {
    return this.holder.classList.contains(D.CSS.wrapperStretched);
  }
  /**
   * Toggle drop target state
   *
   * @param {boolean} state - 'true' if block is drop target, false otherwise
   */
  set dropTarget(e) {
    this.holder.classList.toggle(D.CSS.dropTarget, e);
  }
  /**
   * Returns Plugins content
   *
   * @returns {HTMLElement}
   */
  get pluginsContent() {
    return this.toolRenderedElement;
  }
  /**
   * Calls Tool's method
   *
   * Method checks tool property {MethodName}. Fires method with passes params If it is instance of Function
   *
   * @param {string} methodName - method to call
   * @param {object} params - method argument
   */
  call(e, t) {
    if (O(this.toolInstance[e])) {
      e === "appendCallback" && I(
        "`appendCallback` hook is deprecated and will be removed in the next major release. Use `rendered` hook instead",
        "warn"
      );
      try {
        this.toolInstance[e].call(this.toolInstance, t);
      } catch (o) {
        I(`Error during '${e}' call: ${o.message}`, "error");
      }
    }
  }
  /**
   * Call plugins merge method
   *
   * @param {BlockToolData} data - data to merge
   */
  async mergeWith(e) {
    await this.toolInstance.merge(e);
  }
  /**
   * Extracts data from Block
   * Groups Tool's save processing time
   *
   * @returns {object}
   */
  async save() {
    const e = await this.toolInstance.save(this.pluginsContent), t = this.unavailableTunesData;
    [
      ...this.tunesInstances.entries(),
      ...this.defaultTunesInstances.entries()
    ].forEach(([s, r]) => {
      if (O(r.save))
        try {
          t[s] = r.save();
        } catch (l) {
          I(`Tune ${r.constructor.name} save method throws an Error %o`, "warn", l);
        }
    });
    const o = window.performance.now();
    let i;
    return Promise.resolve(e).then((s) => (i = window.performance.now(), {
      id: this.id,
      tool: this.name,
      data: s,
      tunes: t,
      time: i - o
    })).catch((s) => {
      I(`Saving process for ${this.name} tool failed due to the ${s}`, "log", "red");
    });
  }
  /**
   * Uses Tool's validation method to check the correctness of output data
   * Tool's validation method is optional
   *
   * @description Method returns true|false whether data passed the validation or not
   * @param {BlockToolData} data - data to validate
   * @returns {Promise<boolean>} valid
   */
  async validate(e) {
    let t = !0;
    return this.toolInstance.validate instanceof Function && (t = await this.toolInstance.validate(e)), t;
  }
  /**
   * Returns data to render in Block Tunes menu.
   * Splits block tunes into 2 groups: block specific tunes and common tunes
   */
  getTunes() {
    const e = [], t = [], o = typeof this.toolInstance.renderSettings == "function" ? this.toolInstance.renderSettings() : [];
    return d.isElement(o) ? e.push({
      type: A.Html,
      element: o
    }) : Array.isArray(o) ? e.push(...o) : e.push(o), [
      ...this.tunesInstances.values(),
      ...this.defaultTunesInstances.values()
    ].map((s) => s.render()).forEach((s) => {
      d.isElement(s) ? t.push({
        type: A.Html,
        element: s
      }) : Array.isArray(s) ? t.push(...s) : t.push(s);
    }), {
      toolTunes: e,
      commonTunes: t
    };
  }
  /**
   * Update current input index with selection anchor node
   */
  updateCurrentInput() {
    this.currentInput = d.isNativeInput(document.activeElement) || !b.anchorNode ? document.activeElement : b.anchorNode;
  }
  /**
   * Allows to say Editor that Block was changed. Used to manually trigger Editor's 'onChange' callback
   * Can be useful for block changes invisible for editor core.
   */
  dispatchChange() {
    this.didMutated();
  }
  /**
   * Call Tool instance destroy method
   */
  destroy() {
    this.unwatchBlockMutations(), this.removeInputEvents(), super.destroy(), O(this.toolInstance.destroy) && this.toolInstance.destroy();
  }
  /**
   * Tool could specify several entries to be displayed at the Toolbox (for example, "Heading 1", "Heading 2", "Heading 3")
   * This method returns the entry that is related to the Block (depended on the Block data)
   */
  async getActiveToolboxEntry() {
    const e = this.tool.toolbox;
    if (e.length === 1)
      return Promise.resolve(this.tool.toolbox[0]);
    const t = await this.data, o = e;
    return o == null ? void 0 : o.find((i) => Ht(i.data, t));
  }
  /**
   * Exports Block data as string using conversion config
   */
  async exportDataAsString() {
    const e = await this.data;
    return Ho(e, this.tool.conversionConfig);
  }
  /**
   * Make default Block wrappers and put Tool`s content there
   *
   * @returns {HTMLDivElement}
   */
  compose() {
    const e = d.make("div", D.CSS.wrapper), t = d.make("div", D.CSS.content), o = this.toolInstance.render();
    e.dataset.id = this.id, this.toolRenderedElement = o, t.appendChild(this.toolRenderedElement);
    let i = t;
    return [...this.tunesInstances.values(), ...this.defaultTunesInstances.values()].forEach((s) => {
      if (O(s.wrap))
        try {
          i = s.wrap(i);
        } catch (r) {
          I(`Tune ${s.constructor.name} wrap method throws an Error %o`, "warn", r);
        }
    }), e.appendChild(i), e;
  }
  /**
   * Instantiate Block Tunes
   *
   * @param tunesData - current Block tunes data
   * @private
   */
  composeTunes(e) {
    Array.from(this.tunes.values()).forEach((t) => {
      (t.isInternal ? this.defaultTunesInstances : this.tunesInstances).set(t.name, t.create(e[t.name], this.blockAPI));
    }), Object.entries(e).forEach(([t, o]) => {
      this.tunesInstances.has(t) || (this.unavailableTunesData[t] = o);
    });
  }
  /**
   * Adds focus event listeners to all inputs and contenteditable
   */
  addInputEvents() {
    this.inputs.forEach((e) => {
      e.addEventListener("focus", this.handleFocus), d.isNativeInput(e) && e.addEventListener("input", this.didMutated);
    });
  }
  /**
   * removes focus event listeners from all inputs and contenteditable
   */
  removeInputEvents() {
    this.inputs.forEach((e) => {
      e.removeEventListener("focus", this.handleFocus), d.isNativeInput(e) && e.removeEventListener("input", this.didMutated);
    });
  }
  /**
   * Listen common editor Dom Changed event and detect mutations related to the  Block
   */
  watchBlockMutations() {
    var e;
    this.redactorDomChangedCallback = (t) => {
      const { mutations: o } = t;
      o.some((s) => Fo(s, this.toolRenderedElement)) && this.didMutated(o);
    }, (e = this.editorEventBus) == null || e.on(Je, this.redactorDomChangedCallback);
  }
  /**
   * Remove redactor dom change event listener
   */
  unwatchBlockMutations() {
    var e;
    (e = this.editorEventBus) == null || e.off(Je, this.redactorDomChangedCallback);
  }
  /**
   * Sometimes Tool can replace own main element, for example H2 -> H4 or UL -> OL
   * We need to detect such changes and update a link to tools main element with the new one
   *
   * @param mutations - records of block content mutations
   */
  detectToolRootChange(e) {
    e.forEach((t) => {
      if (Array.from(t.removedNodes).includes(this.toolRenderedElement)) {
        const i = t.addedNodes[t.addedNodes.length - 1];
        this.toolRenderedElement = i;
      }
    });
  }
  /**
   * Clears inputs cached value
   */
  dropInputsCache() {
    this.cachedInputs = [];
  }
  /**
   * Mark inputs with 'data-empty' attribute with the empty state
   */
  toggleInputsEmptyMark() {
    this.inputs.forEach(Ot);
  }
}
class zo extends y {
  constructor() {
    super(...arguments), this.insert = (e = this.config.defaultBlock, t = {}, o = {}, i, s, r, l) => {
      const a = this.Editor.BlockManager.insert({
        id: l,
        tool: e,
        data: t,
        index: i,
        needToFocus: s,
        replace: r
      });
      return new G(a);
    }, this.composeBlockData = async (e) => {
      const t = this.Editor.Tools.blockTools.get(e);
      return new D({
        tool: t,
        api: this.Editor.API,
        readOnly: !0,
        data: {},
        tunesData: {}
      }).data;
    }, this.update = async (e, t, o) => {
      const { BlockManager: i } = this.Editor, s = i.getBlockById(e);
      if (s === void 0)
        throw new Error(`Block with id "${e}" not found`);
      const r = await i.update(s, t, o);
      return new G(r);
    }, this.convert = async (e, t, o) => {
      var h, p;
      const { BlockManager: i, Tools: s } = this.Editor, r = i.getBlockById(e);
      if (!r)
        throw new Error(`Block with id "${e}" not found`);
      const l = s.blockTools.get(r.name), a = s.blockTools.get(t);
      if (!a)
        throw new Error(`Block Tool with type "${t}" not found`);
      const c = ((h = l == null ? void 0 : l.conversionConfig) == null ? void 0 : h.export) !== void 0, u = ((p = a.conversionConfig) == null ? void 0 : p.import) !== void 0;
      if (c && u) {
        const g = await i.convert(r, t, o);
        return new G(g);
      } else {
        const g = [
          c ? !1 : Le(r.name),
          u ? !1 : Le(t)
        ].filter(Boolean).join(" and ");
        throw new Error(`Conversion from "${r.name}" to "${t}" is not possible. ${g} tool(s) should provide a "conversionConfig"`);
      }
    }, this.insertMany = (e, t = this.Editor.BlockManager.blocks.length - 1) => {
      this.validateIndex(t);
      const o = e.map(({ id: i, type: s, data: r }) => this.Editor.BlockManager.composeBlock({
        id: i,
        tool: s || this.config.defaultBlock,
        data: r
      }));
      return this.Editor.BlockManager.insertMany(o, t), o.map((i) => new G(i));
    };
  }
  /**
   * Available methods
   *
   * @returns {Blocks}
   */
  get methods() {
    return {
      clear: () => this.clear(),
      render: (e) => this.render(e),
      renderFromHTML: (e) => this.renderFromHTML(e),
      delete: (e) => this.delete(e),
      swap: (e, t) => this.swap(e, t),
      move: (e, t) => this.move(e, t),
      getBlockByIndex: (e) => this.getBlockByIndex(e),
      getById: (e) => this.getById(e),
      getCurrentBlockIndex: () => this.getCurrentBlockIndex(),
      getBlockIndex: (e) => this.getBlockIndex(e),
      getBlocksCount: () => this.getBlocksCount(),
      getBlockByElement: (e) => this.getBlockByElement(e),
      stretchBlock: (e, t = !0) => this.stretchBlock(e, t),
      insertNewBlock: () => this.insertNewBlock(),
      insert: this.insert,
      insertMany: this.insertMany,
      update: this.update,
      composeBlockData: this.composeBlockData,
      convert: this.convert
    };
  }
  /**
   * Returns Blocks count
   *
   * @returns {number}
   */
  getBlocksCount() {
    return this.Editor.BlockManager.blocks.length;
  }
  /**
   * Returns current block index
   *
   * @returns {number}
   */
  getCurrentBlockIndex() {
    return this.Editor.BlockManager.currentBlockIndex;
  }
  /**
   * Returns the index of Block by id;
   *
   * @param id - block id
   */
  getBlockIndex(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    if (!t) {
      X("There is no block with id `" + e + "`", "warn");
      return;
    }
    return this.Editor.BlockManager.getBlockIndex(t);
  }
  /**
   * Returns BlockAPI object by Block index
   *
   * @param {number} index - index to get
   */
  getBlockByIndex(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(e);
    if (t === void 0) {
      X("There is no block at index `" + e + "`", "warn");
      return;
    }
    return new G(t);
  }
  /**
   * Returns BlockAPI object by Block id
   *
   * @param id - id of block to get
   */
  getById(e) {
    const t = this.Editor.BlockManager.getBlockById(e);
    return t === void 0 ? (X("There is no block with id `" + e + "`", "warn"), null) : new G(t);
  }
  /**
   * Get Block API object by any child html element
   *
   * @param element - html element to get Block by
   */
  getBlockByElement(e) {
    const t = this.Editor.BlockManager.getBlock(e);
    if (t === void 0) {
      X("There is no block corresponding to element `" + e + "`", "warn");
      return;
    }
    return new G(t);
  }
  /**
   * Call Block Manager method that swap Blocks
   *
   * @param {number} fromIndex - position of first Block
   * @param {number} toIndex - position of second Block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    I(
      "`blocks.swap()` method is deprecated and will be removed in the next major release. Use `block.move()` method instead",
      "info"
    ), this.Editor.BlockManager.swap(e, t);
  }
  /**
   * Move block from one index to another
   *
   * @param {number} toIndex - index to move to
   * @param {number} fromIndex - index to move from
   */
  move(e, t) {
    this.Editor.BlockManager.move(e, t);
  }
  /**
   * Deletes Block
   *
   * @param {number} blockIndex - index of Block to delete
   */
  delete(e = this.Editor.BlockManager.currentBlockIndex) {
    try {
      const t = this.Editor.BlockManager.getBlockByIndex(e);
      this.Editor.BlockManager.removeBlock(t);
    } catch (t) {
      X(t, "warn");
      return;
    }
    this.Editor.BlockManager.blocks.length === 0 && this.Editor.BlockManager.insert(), this.Editor.BlockManager.currentBlock && this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END), this.Editor.Toolbar.close();
  }
  /**
   * Clear Editor's area
   */
  async clear() {
    await this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close();
  }
  /**
   * Fills Editor with Blocks data
   *
   * @param {OutputData} data — Saved Editor data
   */
  async render(e) {
    if (e === void 0 || e.blocks === void 0)
      throw new Error("Incorrect data passed to the render() method");
    this.Editor.ModificationsObserver.disable(), await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(e.blocks), this.Editor.ModificationsObserver.enable();
  }
  /**
   * Render passed HTML string
   *
   * @param {string} data - HTML string to render
   * @returns {Promise<void>}
   */
  renderFromHTML(e) {
    return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(e, !0);
  }
  /**
   * Stretch Block's content
   *
   * @param {number} index - index of Block to stretch
   * @param {boolean} status - true to enable, false to disable
   * @deprecated Use BlockAPI interface to stretch Blocks
   */
  stretchBlock(e, t = !0) {
    Ze(
      !0,
      "blocks.stretchBlock()",
      "BlockAPI"
    );
    const o = this.Editor.BlockManager.getBlockByIndex(e);
    o && (o.stretched = t);
  }
  /**
   * Insert new Block
   * After set caret to this Block
   *
   * @todo remove in 3.0.0
   * @deprecated with insert() method
   */
  insertNewBlock() {
    I("Method blocks.insertNewBlock() is deprecated and it will be removed in the next major release. Use blocks.insert() instead.", "warn"), this.insert();
  }
  /**
   * Validated block index and throws an error if it's invalid
   *
   * @param index - index to validate
   */
  validateIndex(e) {
    if (typeof e != "number")
      throw new Error("Index should be a number");
    if (e < 0)
      throw new Error("Index should be greater than or equal to 0");
    if (e === null)
      throw new Error("Index should be greater than or equal to 0");
  }
}
function Uo(n, e) {
  return typeof n == "number" ? e.BlockManager.getBlockByIndex(n) : typeof n == "string" ? e.BlockManager.getBlockById(n) : e.BlockManager.getBlockById(n.id);
}
class jo extends y {
  constructor() {
    super(...arguments), this.setToFirstBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.firstBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.firstBlock, e, t), !0) : !1, this.setToLastBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.lastBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.lastBlock, e, t), !0) : !1, this.setToPreviousBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.previousBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.previousBlock, e, t), !0) : !1, this.setToNextBlock = (e = this.Editor.Caret.positions.DEFAULT, t = 0) => this.Editor.BlockManager.nextBlock ? (this.Editor.Caret.setToBlock(this.Editor.BlockManager.nextBlock, e, t), !0) : !1, this.setToBlock = (e, t = this.Editor.Caret.positions.DEFAULT, o = 0) => {
      const i = Uo(e, this.Editor);
      return i === void 0 ? !1 : (this.Editor.Caret.setToBlock(i, t, o), !0);
    }, this.focus = (e = !1) => e ? this.setToLastBlock(this.Editor.Caret.positions.END) : this.setToFirstBlock(this.Editor.Caret.positions.START);
  }
  /**
   * Available methods
   *
   * @returns {Caret}
   */
  get methods() {
    return {
      setToFirstBlock: this.setToFirstBlock,
      setToLastBlock: this.setToLastBlock,
      setToPreviousBlock: this.setToPreviousBlock,
      setToNextBlock: this.setToNextBlock,
      setToBlock: this.setToBlock,
      focus: this.focus
    };
  }
}
class $o extends y {
  /**
   * Available methods
   *
   * @returns {Events}
   */
  get methods() {
    return {
      emit: (e, t) => this.emit(e, t),
      off: (e, t) => this.off(e, t),
      on: (e, t) => this.on(e, t)
    };
  }
  /**
   * Subscribe on Events
   *
   * @param {string} eventName - event name to subscribe
   * @param {Function} callback - event handler
   */
  on(e, t) {
    this.eventsDispatcher.on(e, t);
  }
  /**
   * Emit event with data
   *
   * @param {string} eventName - event to emit
   * @param {object} data - event's data
   */
  emit(e, t) {
    this.eventsDispatcher.emit(e, t);
  }
  /**
   * Unsubscribe from Event
   *
   * @param {string} eventName - event to unsubscribe
   * @param {Function} callback - event handler
   */
  off(e, t) {
    this.eventsDispatcher.off(e, t);
  }
}
class tt extends y {
  /**
   * Return namespace section for tool or block tune
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  static getNamespace(e, t) {
    return t ? `blockTunes.${e}` : `tools.${e}`;
  }
  /**
   * Return I18n API methods with global dictionary access
   */
  get methods() {
    return {
      t: () => {
        X("I18n.t() method can be accessed only from Tools", "warn");
      }
    };
  }
  /**
   * Return I18n API methods with tool namespaced dictionary
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  getMethodsForTool(e, t) {
    return Object.assign(
      this.methods,
      {
        t: (o) => z.t(tt.getNamespace(e, t), o)
      }
    );
  }
}
class Yo extends y {
  /**
   * Editor.js Core API modules
   */
  get methods() {
    return {
      blocks: this.Editor.BlocksAPI.methods,
      caret: this.Editor.CaretAPI.methods,
      tools: this.Editor.ToolsAPI.methods,
      events: this.Editor.EventsAPI.methods,
      listeners: this.Editor.ListenersAPI.methods,
      notifier: this.Editor.NotifierAPI.methods,
      sanitizer: this.Editor.SanitizerAPI.methods,
      saver: this.Editor.SaverAPI.methods,
      selection: this.Editor.SelectionAPI.methods,
      styles: this.Editor.StylesAPI.classes,
      toolbar: this.Editor.ToolbarAPI.methods,
      inlineToolbar: this.Editor.InlineToolbarAPI.methods,
      tooltip: this.Editor.TooltipAPI.methods,
      i18n: this.Editor.I18nAPI.methods,
      readOnly: this.Editor.ReadOnlyAPI.methods,
      ui: this.Editor.UiAPI.methods
    };
  }
  /**
   * Returns Editor.js Core API methods for passed tool
   *
   * @param toolName - tool name
   * @param isTune - is tool a block tune
   */
  getMethodsForTool(e, t) {
    return Object.assign(
      this.methods,
      {
        i18n: this.Editor.I18nAPI.getMethodsForTool(e, t)
      }
    );
  }
}
class Wo extends y {
  /**
   * Available methods
   *
   * @returns {InlineToolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open()
    };
  }
  /**
   * Open Inline Toolbar
   */
  open() {
    this.Editor.InlineToolbar.tryToShow();
  }
  /**
   * Close Inline Toolbar
   */
  close() {
    this.Editor.InlineToolbar.close();
  }
}
class Ko extends y {
  /**
   * Available methods
   *
   * @returns {Listeners}
   */
  get methods() {
    return {
      on: (e, t, o, i) => this.on(e, t, o, i),
      off: (e, t, o, i) => this.off(e, t, o, i),
      offById: (e) => this.offById(e)
    };
  }
  /**
   * Ads a DOM event listener. Return it's id.
   *
   * @param {HTMLElement} element - Element to set handler to
   * @param {string} eventType - event type
   * @param {() => void} handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  on(e, t, o, i) {
    return this.listeners.on(e, t, o, i);
  }
  /**
   * Removes DOM listener from element
   *
   * @param {Element} element - Element to remove handler from
   * @param eventType - event type
   * @param handler - event handler
   * @param {boolean} useCapture - capture event or not
   */
  off(e, t, o, i) {
    this.listeners.off(e, t, o, i);
  }
  /**
   * Removes DOM listener by the listener id
   *
   * @param id - id of the listener to remove
   */
  offById(e) {
    this.listeners.offById(e);
  }
}
var Ut = { exports: {} };
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(s) {
        if (o[s])
          return o[s].exports;
        var r = o[s] = { i: s, l: !1, exports: {} };
        return t[s].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
      }
      return i.m = t, i.c = o, i.d = function(s, r, l) {
        i.o(s, r) || Object.defineProperty(s, r, { enumerable: !0, get: l });
      }, i.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, i.t = function(s, r) {
        if (1 & r && (s = i(s)), 8 & r || 4 & r && typeof s == "object" && s && s.__esModule)
          return s;
        var l = /* @__PURE__ */ Object.create(null);
        if (i.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: s }), 2 & r && typeof s != "string")
          for (var a in s)
            i.d(l, a, (function(c) {
              return s[c];
            }).bind(null, a));
        return l;
      }, i.n = function(s) {
        var r = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return i.d(r, "a", r), r;
      }, i.o = function(s, r) {
        return Object.prototype.hasOwnProperty.call(s, r);
      }, i.p = "/", i(i.s = 0);
    }([function(t, o, i) {
      i(1), /*!
       * Codex JavaScript Notification module
       * https://github.com/codex-team/js-notifier
       */
      t.exports = function() {
        var s = i(6), r = "cdx-notify--bounce-in", l = null;
        return { show: function(a) {
          if (a.message) {
            (function() {
              if (l)
                return !0;
              l = s.getWrapper(), document.body.appendChild(l);
            })();
            var c = null, u = a.time || 8e3;
            switch (a.type) {
              case "confirm":
                c = s.confirm(a);
                break;
              case "prompt":
                c = s.prompt(a);
                break;
              default:
                c = s.alert(a), window.setTimeout(function() {
                  c.remove();
                }, u);
            }
            l.appendChild(c), c.classList.add(r);
          }
        } };
      }();
    }, function(t, o, i) {
      var s = i(2);
      typeof s == "string" && (s = [[t.i, s, ""]]);
      var r = { hmr: !0, transform: void 0, insertInto: void 0 };
      i(4)(s, r), s.locals && (t.exports = s.locals);
    }, function(t, o, i) {
      (t.exports = i(3)(!1)).push([t.i, `.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:'';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:'';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}`, ""]);
    }, function(t, o) {
      t.exports = function(i) {
        var s = [];
        return s.toString = function() {
          return this.map(function(r) {
            var l = function(a, c) {
              var u = a[1] || "", h = a[3];
              if (!h)
                return u;
              if (c && typeof btoa == "function") {
                var p = (f = h, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(f)))) + " */"), g = h.sources.map(function(k) {
                  return "/*# sourceURL=" + h.sourceRoot + k + " */";
                });
                return [u].concat(g).concat([p]).join(`
`);
              }
              var f;
              return [u].join(`
`);
            }(r, i);
            return r[2] ? "@media " + r[2] + "{" + l + "}" : l;
          }).join("");
        }, s.i = function(r, l) {
          typeof r == "string" && (r = [[null, r, ""]]);
          for (var a = {}, c = 0; c < this.length; c++) {
            var u = this[c][0];
            typeof u == "number" && (a[u] = !0);
          }
          for (c = 0; c < r.length; c++) {
            var h = r[c];
            typeof h[0] == "number" && a[h[0]] || (l && !h[2] ? h[2] = l : l && (h[2] = "(" + h[2] + ") and (" + l + ")"), s.push(h));
          }
        }, s;
      };
    }, function(t, o, i) {
      var s, r, l = {}, a = (s = function() {
        return window && document && document.all && !window.atob;
      }, function() {
        return r === void 0 && (r = s.apply(this, arguments)), r;
      }), c = function(v) {
        var m = {};
        return function(x) {
          if (typeof x == "function")
            return x();
          if (m[x] === void 0) {
            var E = (function(M) {
              return document.querySelector(M);
            }).call(this, x);
            if (window.HTMLIFrameElement && E instanceof window.HTMLIFrameElement)
              try {
                E = E.contentDocument.head;
              } catch {
                E = null;
              }
            m[x] = E;
          }
          return m[x];
        };
      }(), u = null, h = 0, p = [], g = i(5);
      function f(v, m) {
        for (var x = 0; x < v.length; x++) {
          var E = v[x], M = l[E.id];
          if (M) {
            M.refs++;
            for (var T = 0; T < M.parts.length; T++)
              M.parts[T](E.parts[T]);
            for (; T < E.parts.length; T++)
              M.parts.push(j(E.parts[T], m));
          } else {
            var P = [];
            for (T = 0; T < E.parts.length; T++)
              P.push(j(E.parts[T], m));
            l[E.id] = { id: E.id, refs: 1, parts: P };
          }
        }
      }
      function k(v, m) {
        for (var x = [], E = {}, M = 0; M < v.length; M++) {
          var T = v[M], P = m.base ? T[0] + m.base : T[0], B = { css: T[1], media: T[2], sourceMap: T[3] };
          E[P] ? E[P].parts.push(B) : x.push(E[P] = { id: P, parts: [B] });
        }
        return x;
      }
      function C(v, m) {
        var x = c(v.insertInto);
        if (!x)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var E = p[p.length - 1];
        if (v.insertAt === "top")
          E ? E.nextSibling ? x.insertBefore(m, E.nextSibling) : x.appendChild(m) : x.insertBefore(m, x.firstChild), p.push(m);
        else if (v.insertAt === "bottom")
          x.appendChild(m);
        else {
          if (typeof v.insertAt != "object" || !v.insertAt.before)
            throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);
          var M = c(v.insertInto + " " + v.insertAt.before);
          x.insertBefore(m, M);
        }
      }
      function S(v) {
        if (v.parentNode === null)
          return !1;
        v.parentNode.removeChild(v);
        var m = p.indexOf(v);
        m >= 0 && p.splice(m, 1);
      }
      function _(v) {
        var m = document.createElement("style");
        return v.attrs.type === void 0 && (v.attrs.type = "text/css"), ee(m, v.attrs), C(v, m), m;
      }
      function ee(v, m) {
        Object.keys(m).forEach(function(x) {
          v.setAttribute(x, m[x]);
        });
      }
      function j(v, m) {
        var x, E, M, T;
        if (m.transform && v.css) {
          if (!(T = m.transform(v.css)))
            return function() {
            };
          v.css = T;
        }
        if (m.singleton) {
          var P = h++;
          x = u || (u = _(m)), E = fe.bind(null, x, P, !1), M = fe.bind(null, x, P, !0);
        } else
          v.sourceMap && typeof URL == "function" && typeof URL.createObjectURL == "function" && typeof URL.revokeObjectURL == "function" && typeof Blob == "function" && typeof btoa == "function" ? (x = function(B) {
            var Y = document.createElement("link");
            return B.attrs.type === void 0 && (B.attrs.type = "text/css"), B.attrs.rel = "stylesheet", ee(Y, B.attrs), C(B, Y), Y;
          }(m), E = (function(B, Y, ge) {
            var ie = ge.css, He = ge.sourceMap, mo = Y.convertToAbsoluteUrls === void 0 && He;
            (Y.convertToAbsoluteUrls || mo) && (ie = g(ie)), He && (ie += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(He)))) + " */");
            var bo = new Blob([ie], { type: "text/css" }), gt = B.href;
            B.href = URL.createObjectURL(bo), gt && URL.revokeObjectURL(gt);
          }).bind(null, x, m), M = function() {
            S(x), x.href && URL.revokeObjectURL(x.href);
          }) : (x = _(m), E = (function(B, Y) {
            var ge = Y.css, ie = Y.media;
            if (ie && B.setAttribute("media", ie), B.styleSheet)
              B.styleSheet.cssText = ge;
            else {
              for (; B.firstChild; )
                B.removeChild(B.firstChild);
              B.appendChild(document.createTextNode(ge));
            }
          }).bind(null, x), M = function() {
            S(x);
          });
        return E(v), function(B) {
          if (B) {
            if (B.css === v.css && B.media === v.media && B.sourceMap === v.sourceMap)
              return;
            E(v = B);
          } else
            M();
        };
      }
      t.exports = function(v, m) {
        if (typeof DEBUG < "u" && DEBUG && typeof document != "object")
          throw new Error("The style-loader cannot be used in a non-browser environment");
        (m = m || {}).attrs = typeof m.attrs == "object" ? m.attrs : {}, m.singleton || typeof m.singleton == "boolean" || (m.singleton = a()), m.insertInto || (m.insertInto = "head"), m.insertAt || (m.insertAt = "bottom");
        var x = k(v, m);
        return f(x, m), function(E) {
          for (var M = [], T = 0; T < x.length; T++) {
            var P = x[T];
            (B = l[P.id]).refs--, M.push(B);
          }
          for (E && f(k(E, m), m), T = 0; T < M.length; T++) {
            var B;
            if ((B = M[T]).refs === 0) {
              for (var Y = 0; Y < B.parts.length; Y++)
                B.parts[Y]();
              delete l[B.id];
            }
          }
        };
      };
      var $, oe = ($ = [], function(v, m) {
        return $[v] = m, $.filter(Boolean).join(`
`);
      });
      function fe(v, m, x, E) {
        var M = x ? "" : E.css;
        if (v.styleSheet)
          v.styleSheet.cssText = oe(m, M);
        else {
          var T = document.createTextNode(M), P = v.childNodes;
          P[m] && v.removeChild(P[m]), P.length ? v.insertBefore(T, P[m]) : v.appendChild(T);
        }
      }
    }, function(t, o) {
      t.exports = function(i) {
        var s = typeof window < "u" && window.location;
        if (!s)
          throw new Error("fixUrls requires window.location");
        if (!i || typeof i != "string")
          return i;
        var r = s.protocol + "//" + s.host, l = r + s.pathname.replace(/\/[^\/]*$/, "/");
        return i.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(a, c) {
          var u, h = c.trim().replace(/^"(.*)"$/, function(p, g) {
            return g;
          }).replace(/^'(.*)'$/, function(p, g) {
            return g;
          });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(h) ? a : (u = h.indexOf("//") === 0 ? h : h.indexOf("/") === 0 ? r + h : l + h.replace(/^\.\//, ""), "url(" + JSON.stringify(u) + ")");
        });
      };
    }, function(t, o, i) {
      var s, r, l, a, c, u, h, p, g;
      t.exports = (s = "cdx-notifies", r = "cdx-notify", l = "cdx-notify__cross", a = "cdx-notify__button--confirm", c = "cdx-notify__button--cancel", u = "cdx-notify__input", h = "cdx-notify__button", p = "cdx-notify__btns-wrapper", { alert: g = function(f) {
        var k = document.createElement("DIV"), C = document.createElement("DIV"), S = f.message, _ = f.style;
        return k.classList.add(r), _ && k.classList.add(r + "--" + _), k.innerHTML = S, C.classList.add(l), C.addEventListener("click", k.remove.bind(k)), k.appendChild(C), k;
      }, confirm: function(f) {
        var k = g(f), C = document.createElement("div"), S = document.createElement("button"), _ = document.createElement("button"), ee = k.querySelector("." + l), j = f.cancelHandler, $ = f.okHandler;
        return C.classList.add(p), S.innerHTML = f.okText || "Confirm", _.innerHTML = f.cancelText || "Cancel", S.classList.add(h), _.classList.add(h), S.classList.add(a), _.classList.add(c), j && typeof j == "function" && (_.addEventListener("click", j), ee.addEventListener("click", j)), $ && typeof $ == "function" && S.addEventListener("click", $), S.addEventListener("click", k.remove.bind(k)), _.addEventListener("click", k.remove.bind(k)), C.appendChild(S), C.appendChild(_), k.appendChild(C), k;
      }, prompt: function(f) {
        var k = g(f), C = document.createElement("div"), S = document.createElement("button"), _ = document.createElement("input"), ee = k.querySelector("." + l), j = f.cancelHandler, $ = f.okHandler;
        return C.classList.add(p), S.innerHTML = f.okText || "Ok", S.classList.add(h), S.classList.add(a), _.classList.add(u), f.placeholder && _.setAttribute("placeholder", f.placeholder), f.default && (_.value = f.default), f.inputType && (_.type = f.inputType), j && typeof j == "function" && ee.addEventListener("click", j), $ && typeof $ == "function" && S.addEventListener("click", function() {
          $(_.value);
        }), S.addEventListener("click", k.remove.bind(k)), C.appendChild(_), C.appendChild(S), k.appendChild(C), k;
      }, getWrapper: function() {
        var f = document.createElement("DIV");
        return f.classList.add(s), f;
      } });
    }]);
  });
})(Ut);
var Xo = Ut.exports;
const Vo = /* @__PURE__ */ Fe(Xo);
class qo {
  /**
   * Show web notification
   *
   * @param {NotifierOptions | ConfirmNotifierOptions | PromptNotifierOptions} options - notification options
   */
  show(e) {
    Vo.show(e);
  }
}
class Zo extends y {
  /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.notifier = new qo();
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e) => this.show(e)
    };
  }
  /**
   * Show notification
   *
   * @param {NotifierOptions} options - message option
   */
  show(e) {
    return this.notifier.show(e);
  }
}
class Go extends y {
  /**
   * Available methods
   */
  get methods() {
    const e = () => this.isEnabled;
    return {
      toggle: (t) => this.toggle(t),
      get isEnabled() {
        return e();
      }
    };
  }
  /**
   * Set or toggle read-only state
   *
   * @param {boolean|undefined} state - set or toggle state
   * @returns {boolean} current value
   */
  toggle(e) {
    return this.Editor.ReadOnly.toggle(e);
  }
  /**
   * Returns current read-only state
   */
  get isEnabled() {
    return this.Editor.ReadOnly.isEnabled;
  }
}
var jt = { exports: {} };
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(ko, function() {
    function t(h) {
      var p = h.tags, g = Object.keys(p), f = g.map(function(k) {
        return typeof p[k];
      }).every(function(k) {
        return k === "object" || k === "boolean" || k === "function";
      });
      if (!f)
        throw new Error("The configuration was invalid");
      this.config = h;
    }
    var o = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];
    function i(h) {
      return o.indexOf(h.nodeName) !== -1;
    }
    var s = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];
    function r(h) {
      return s.indexOf(h.nodeName) !== -1;
    }
    t.prototype.clean = function(h) {
      const p = document.implementation.createHTMLDocument(), g = p.createElement("div");
      return g.innerHTML = h, this._sanitize(p, g), g.innerHTML;
    }, t.prototype._sanitize = function(h, p) {
      var g = l(h, p), f = g.firstChild();
      if (f)
        do {
          if (f.nodeType === Node.TEXT_NODE)
            if (f.data.trim() === "" && (f.previousElementSibling && i(f.previousElementSibling) || f.nextElementSibling && i(f.nextElementSibling))) {
              p.removeChild(f), this._sanitize(h, p);
              break;
            } else
              continue;
          if (f.nodeType === Node.COMMENT_NODE) {
            p.removeChild(f), this._sanitize(h, p);
            break;
          }
          var k = r(f), C;
          k && (C = Array.prototype.some.call(f.childNodes, i));
          var S = !!p.parentNode, _ = i(p) && i(f) && S, ee = f.nodeName.toLowerCase(), j = a(this.config, ee, f), $ = k && C;
          if ($ || c(f, j) || !this.config.keepNestedBlockElements && _) {
            if (!(f.nodeName === "SCRIPT" || f.nodeName === "STYLE"))
              for (; f.childNodes.length > 0; )
                p.insertBefore(f.childNodes[0], f);
            p.removeChild(f), this._sanitize(h, p);
            break;
          }
          for (var oe = 0; oe < f.attributes.length; oe += 1) {
            var fe = f.attributes[oe];
            u(fe, j, f) && (f.removeAttribute(fe.name), oe = oe - 1);
          }
          this._sanitize(h, f);
        } while (f = g.nextSibling());
    };
    function l(h, p) {
      return h.createTreeWalker(
        p,
        NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
        null,
        !1
      );
    }
    function a(h, p, g) {
      return typeof h.tags[p] == "function" ? h.tags[p](g) : h.tags[p];
    }
    function c(h, p) {
      return typeof p > "u" ? !0 : typeof p == "boolean" ? !p : !1;
    }
    function u(h, p, g) {
      var f = h.name.toLowerCase();
      return p === !0 ? !1 : typeof p[f] == "function" ? !p[f](h.value, g) : typeof p[f] > "u" || p[f] === !1 ? !0 : typeof p[f] == "string" ? p[f] !== h.value : !1;
    }
    return t;
  });
})(jt);
var Jo = jt.exports;
const Qo = /* @__PURE__ */ Fe(Jo);
function ot(n, e) {
  return n.map((t) => {
    const o = O(e) ? e(t.tool) : e;
    return V(o) || (t.data = it(t.data, o)), t;
  });
}
function q(n, e = {}) {
  const t = {
    tags: e
  };
  return new Qo(t).clean(n);
}
function it(n, e) {
  return Array.isArray(n) ? ei(n, e) : R(n) ? ti(n, e) : Q(n) ? oi(n, e) : n;
}
function ei(n, e) {
  return n.map((t) => it(t, e));
}
function ti(n, e) {
  const t = {};
  for (const o in n) {
    if (!Object.prototype.hasOwnProperty.call(n, o))
      continue;
    const i = n[o], s = ii(e[o]) ? e[o] : e;
    t[o] = it(i, s);
  }
  return t;
}
function oi(n, e) {
  return R(e) ? q(n, e) : e === !1 ? q(n, {}) : n;
}
function ii(n) {
  return R(n) || yo(n) || O(n);
}
class si extends y {
  /**
   * Available methods
   *
   * @returns {SanitizerConfig}
   */
  get methods() {
    return {
      clean: (e, t) => this.clean(e, t)
    };
  }
  /**
   * Perform sanitizing of a string
   *
   * @param {string} taintString - what to sanitize
   * @param {SanitizerConfig} config - sanitizer config
   * @returns {string}
   */
  clean(e, t) {
    return q(e, t);
  }
}
class ni extends y {
  /**
   * Available methods
   *
   * @returns {Saver}
   */
  get methods() {
    return {
      save: () => this.save()
    };
  }
  /**
   * Return Editor's data
   *
   * @returns {OutputData}
   */
  save() {
    const e = "Editor's content can not be saved in read-only mode";
    return this.Editor.ReadOnly.isEnabled ? (X(e, "warn"), Promise.reject(new Error(e))) : this.Editor.Saver.save();
  }
}
class ri extends y {
  constructor() {
    super(...arguments), this.selectionUtils = new b();
  }
  /**
   * Available methods
   *
   * @returns {SelectionAPIInterface}
   */
  get methods() {
    return {
      findParentTag: (e, t) => this.findParentTag(e, t),
      expandToTag: (e) => this.expandToTag(e),
      save: () => this.selectionUtils.save(),
      restore: () => this.selectionUtils.restore(),
      setFakeBackground: () => this.selectionUtils.setFakeBackground(),
      removeFakeBackground: () => this.selectionUtils.removeFakeBackground()
    };
  }
  /**
   * Looks ahead from selection and find passed tag with class name
   *
   * @param {string} tagName - tag to find
   * @param {string} className - tag's class name
   * @returns {HTMLElement|null}
   */
  findParentTag(e, t) {
    return this.selectionUtils.findParentTag(e, t);
  }
  /**
   * Expand selection to passed tag
   *
   * @param {HTMLElement} node - tag that should contain selection
   */
  expandToTag(e) {
    this.selectionUtils.expandToTag(e);
  }
}
class li extends y {
  /**
   * Available methods
   */
  get methods() {
    return {
      getBlockTools: () => Array.from(this.Editor.Tools.blockTools.values())
    };
  }
}
class ai extends y {
  /**
   * Exported classes
   */
  get classes() {
    return {
      /**
       * Base Block styles
       */
      block: "cdx-block",
      /**
       * Inline Tools styles
       */
      inlineToolButton: "ce-inline-tool",
      inlineToolButtonActive: "ce-inline-tool--active",
      /**
       * UI elements
       */
      input: "cdx-input",
      loader: "cdx-loader",
      button: "cdx-button",
      /**
       * Settings styles
       */
      settingsButton: "cdx-settings-button",
      settingsButtonActive: "cdx-settings-button--active"
    };
  }
}
class ci extends y {
  /**
   * Available methods
   *
   * @returns {Toolbar}
   */
  get methods() {
    return {
      close: () => this.close(),
      open: () => this.open(),
      toggleBlockSettings: (e) => this.toggleBlockSettings(e),
      toggleToolbox: (e) => this.toggleToolbox(e)
    };
  }
  /**
   * Open toolbar
   */
  open() {
    this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * Close toolbar and all included elements
   */
  close() {
    this.Editor.Toolbar.close();
  }
  /**
   * Toggles Block Setting of the current block
   *
   * @param {boolean} openingState —  opening state of Block Setting
   */
  toggleBlockSettings(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      X("Could't toggle the Toolbar because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.BlockSettings.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.open()) : this.Editor.BlockSettings.close();
  }
  /**
   * Open toolbox
   *
   * @param {boolean} openingState - Opening state of toolbox
   */
  toggleToolbox(e) {
    if (this.Editor.BlockManager.currentBlockIndex === -1) {
      X("Could't toggle the Toolbox because there is no block selected ", "warn");
      return;
    }
    e ?? !this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open()) : this.Editor.Toolbar.toolbox.close();
  }
}
var $t = { exports: {} };
/*!
 * CodeX.Tooltips
 * 
 * @version 1.0.5
 * 
 * @licence MIT
 * @author CodeX <https://codex.so>
 * 
 * 
 */
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(s) {
        if (o[s])
          return o[s].exports;
        var r = o[s] = { i: s, l: !1, exports: {} };
        return t[s].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
      }
      return i.m = t, i.c = o, i.d = function(s, r, l) {
        i.o(s, r) || Object.defineProperty(s, r, { enumerable: !0, get: l });
      }, i.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, i.t = function(s, r) {
        if (1 & r && (s = i(s)), 8 & r || 4 & r && typeof s == "object" && s && s.__esModule)
          return s;
        var l = /* @__PURE__ */ Object.create(null);
        if (i.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: s }), 2 & r && typeof s != "string")
          for (var a in s)
            i.d(l, a, (function(c) {
              return s[c];
            }).bind(null, a));
        return l;
      }, i.n = function(s) {
        var r = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return i.d(r, "a", r), r;
      }, i.o = function(s, r) {
        return Object.prototype.hasOwnProperty.call(s, r);
      }, i.p = "", i(i.s = 0);
    }([function(t, o, i) {
      t.exports = i(1);
    }, function(t, o, i) {
      i.r(o), i.d(o, "default", function() {
        return s;
      });
      class s {
        constructor() {
          this.nodes = { wrapper: null, content: null }, this.showed = !1, this.offsetTop = 10, this.offsetLeft = 10, this.offsetRight = 10, this.hidingDelay = 0, this.handleWindowScroll = () => {
            this.showed && this.hide(!0);
          }, this.loadStyles(), this.prepare(), window.addEventListener("scroll", this.handleWindowScroll, { passive: !0 });
        }
        get CSS() {
          return { tooltip: "ct", tooltipContent: "ct__content", tooltipShown: "ct--shown", placement: { left: "ct--left", bottom: "ct--bottom", right: "ct--right", top: "ct--top" } };
        }
        show(l, a, c) {
          this.nodes.wrapper || this.prepare(), this.hidingTimeout && clearTimeout(this.hidingTimeout);
          const u = Object.assign({ placement: "bottom", marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, delay: 70, hidingDelay: 0 }, c);
          if (u.hidingDelay && (this.hidingDelay = u.hidingDelay), this.nodes.content.innerHTML = "", typeof a == "string")
            this.nodes.content.appendChild(document.createTextNode(a));
          else {
            if (!(a instanceof Node))
              throw Error("[CodeX Tooltip] Wrong type of «content» passed. It should be an instance of Node or String. But " + typeof a + " given.");
            this.nodes.content.appendChild(a);
          }
          switch (this.nodes.wrapper.classList.remove(...Object.values(this.CSS.placement)), u.placement) {
            case "top":
              this.placeTop(l, u);
              break;
            case "left":
              this.placeLeft(l, u);
              break;
            case "right":
              this.placeRight(l, u);
              break;
            case "bottom":
            default:
              this.placeBottom(l, u);
          }
          u && u.delay ? this.showingTimeout = setTimeout(() => {
            this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0;
          }, u.delay) : (this.nodes.wrapper.classList.add(this.CSS.tooltipShown), this.showed = !0);
        }
        hide(l = !1) {
          if (this.hidingDelay && !l)
            return this.hidingTimeout && clearTimeout(this.hidingTimeout), void (this.hidingTimeout = setTimeout(() => {
              this.hide(!0);
            }, this.hidingDelay));
          this.nodes.wrapper.classList.remove(this.CSS.tooltipShown), this.showed = !1, this.showingTimeout && clearTimeout(this.showingTimeout);
        }
        onHover(l, a, c) {
          l.addEventListener("mouseenter", () => {
            this.show(l, a, c);
          }), l.addEventListener("mouseleave", () => {
            this.hide();
          });
        }
        destroy() {
          this.nodes.wrapper.remove(), window.removeEventListener("scroll", this.handleWindowScroll);
        }
        prepare() {
          this.nodes.wrapper = this.make("div", this.CSS.tooltip), this.nodes.content = this.make("div", this.CSS.tooltipContent), this.append(this.nodes.wrapper, this.nodes.content), this.append(document.body, this.nodes.wrapper);
        }
        loadStyles() {
          const l = "codex-tooltips-style";
          if (document.getElementById(l))
            return;
          const a = i(2), c = this.make("style", null, { textContent: a.toString(), id: l });
          this.prepend(document.head, c);
        }
        placeBottom(l, a) {
          const c = l.getBoundingClientRect(), u = c.left + l.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h = c.bottom + window.pageYOffset + this.offsetTop + a.marginTop;
          this.applyPlacement("bottom", u, h);
        }
        placeTop(l, a) {
          const c = l.getBoundingClientRect(), u = c.left + l.clientWidth / 2 - this.nodes.wrapper.offsetWidth / 2, h = c.top + window.pageYOffset - this.nodes.wrapper.clientHeight - this.offsetTop;
          this.applyPlacement("top", u, h);
        }
        placeLeft(l, a) {
          const c = l.getBoundingClientRect(), u = c.left - this.nodes.wrapper.offsetWidth - this.offsetLeft - a.marginLeft, h = c.top + window.pageYOffset + l.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("left", u, h);
        }
        placeRight(l, a) {
          const c = l.getBoundingClientRect(), u = c.right + this.offsetRight + a.marginRight, h = c.top + window.pageYOffset + l.clientHeight / 2 - this.nodes.wrapper.offsetHeight / 2;
          this.applyPlacement("right", u, h);
        }
        applyPlacement(l, a, c) {
          this.nodes.wrapper.classList.add(this.CSS.placement[l]), this.nodes.wrapper.style.left = a + "px", this.nodes.wrapper.style.top = c + "px";
        }
        make(l, a = null, c = {}) {
          const u = document.createElement(l);
          Array.isArray(a) ? u.classList.add(...a) : a && u.classList.add(a);
          for (const h in c)
            c.hasOwnProperty(h) && (u[h] = c[h]);
          return u;
        }
        append(l, a) {
          Array.isArray(a) ? a.forEach((c) => l.appendChild(c)) : l.appendChild(a);
        }
        prepend(l, a) {
          Array.isArray(a) ? (a = a.reverse()).forEach((c) => l.prepend(c)) : l.prepend(a);
        }
      }
    }, function(t, o) {
      t.exports = `.ct{z-index:999;opacity:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1);transition:opacity 50ms ease-in,transform 70ms cubic-bezier(.215,.61,.355,1),-webkit-transform 70ms cubic-bezier(.215,.61,.355,1);will-change:opacity,top,left;-webkit-box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);box-shadow:0 8px 12px 0 rgba(29,32,43,.17),0 4px 5px -3px rgba(5,6,12,.49);border-radius:9px}.ct,.ct:before{position:absolute;top:0;left:0}.ct:before{content:"";bottom:0;right:0;background-color:#1d202b;z-index:-1;border-radius:4px}@supports(-webkit-mask-box-image:url("")){.ct:before{border-radius:0;-webkit-mask-box-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10.71 0h2.58c3.02 0 4.64.42 6.1 1.2a8.18 8.18 0 013.4 3.4C23.6 6.07 24 7.7 24 10.71v2.58c0 3.02-.42 4.64-1.2 6.1a8.18 8.18 0 01-3.4 3.4c-1.47.8-3.1 1.21-6.11 1.21H10.7c-3.02 0-4.64-.42-6.1-1.2a8.18 8.18 0 01-3.4-3.4C.4 17.93 0 16.3 0 13.29V10.7c0-3.02.42-4.64 1.2-6.1a8.18 8.18 0 013.4-3.4C6.07.4 7.7 0 10.71 0z"/></svg>') 48% 41% 37.9% 53.3%}}@media (--mobile){.ct{display:none}}.ct__content{padding:6px 10px;color:#cdd1e0;font-size:12px;text-align:center;letter-spacing:.02em;line-height:1em}.ct:after{content:"";width:8px;height:8px;position:absolute;background-color:#1d202b;z-index:-1}.ct--bottom{-webkit-transform:translateY(5px);transform:translateY(5px)}.ct--bottom:after{top:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--top{-webkit-transform:translateY(-5px);transform:translateY(-5px)}.ct--top:after{top:auto;bottom:-3px;left:50%;-webkit-transform:translateX(-50%) rotate(-45deg);transform:translateX(-50%) rotate(-45deg)}.ct--left{-webkit-transform:translateX(-5px);transform:translateX(-5px)}.ct--left:after{top:50%;left:auto;right:0;-webkit-transform:translate(41.6%,-50%) rotate(-45deg);transform:translate(41.6%,-50%) rotate(-45deg)}.ct--right{-webkit-transform:translateX(5px);transform:translateX(5px)}.ct--right:after{top:50%;left:0;-webkit-transform:translate(-41.6%,-50%) rotate(-45deg);transform:translate(-41.6%,-50%) rotate(-45deg)}.ct--shown{opacity:1;-webkit-transform:none;transform:none}`;
    }]).default;
  });
})($t);
var di = $t.exports;
const hi = /* @__PURE__ */ Fe(di);
let U = null;
function st() {
  U || (U = new hi());
}
function ui(n, e, t) {
  st(), U == null || U.show(n, e, t);
}
function Ne(n = !1) {
  st(), U == null || U.hide(n);
}
function Pe(n, e, t) {
  st(), U == null || U.onHover(n, e, t);
}
function pi() {
  U == null || U.destroy(), U = null;
}
class fi extends y {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    });
  }
  /**
   * Available methods
   */
  get methods() {
    return {
      show: (e, t, o) => this.show(e, t, o),
      hide: () => this.hide(),
      onHover: (e, t, o) => this.onHover(e, t, o)
    };
  }
  /**
   * Method show tooltip on element with passed HTML content
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  show(e, t, o) {
    ui(e, t, o);
  }
  /**
   * Method hides tooltip on HTML page
   */
  hide() {
    Ne();
  }
  /**
   * Decorator for showing Tooltip by mouseenter/mouseleave
   *
   * @param {HTMLElement} element - element on which tooltip should be shown
   * @param {TooltipContent} content - tooltip content
   * @param {TooltipOptions} options - tooltip options
   */
  onHover(e, t, o) {
    Pe(e, t, o);
  }
}
class gi extends y {
  /**
   * Available methods / getters
   */
  get methods() {
    return {
      nodes: this.editorNodes
      /**
       * There can be added some UI methods, like toggleThinMode() etc
       */
    };
  }
  /**
   * Exported classes
   */
  get editorNodes() {
    return {
      /**
       * Top-level editor instance wrapper
       */
      wrapper: this.Editor.UI.nodes.wrapper,
      /**
       * Element that holds all the Blocks
       */
      redactor: this.Editor.UI.nodes.redactor
    };
  }
}
function Yt(n, e) {
  const t = {};
  return Object.entries(n).forEach(([o, i]) => {
    if (R(i)) {
      const s = e ? `${e}.${o}` : o;
      Object.values(i).every((l) => Q(l)) ? t[o] = s : t[o] = Yt(i, s);
      return;
    }
    t[o] = i;
  }), t;
}
const K = Yt(Lt);
function mi(n, e) {
  const t = {};
  return Object.keys(n).forEach((o) => {
    const i = e[o];
    i !== void 0 ? t[i] = n[o] : t[o] = n[o];
  }), t;
}
const Wt = class ve {
  /**
   * @param {HTMLElement[]} nodeList — the list of iterable HTML-items
   * @param {string} focusedCssClass - user-provided CSS-class that will be set in flipping process
   */
  constructor(e, t) {
    this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = t;
  }
  /**
   * Returns Focused button Node
   *
   * @returns {HTMLElement}
   */
  get currentItem() {
    return this.cursor === -1 ? null : this.items[this.cursor];
  }
  /**
   * Sets cursor to specified position
   *
   * @param cursorPosition - new cursor position
   */
  setCursor(e) {
    e < this.items.length && e >= -1 && (this.dropCursor(), this.cursor = e, this.items[this.cursor].classList.add(this.focusedCssClass));
  }
  /**
   * Sets items. Can be used when iterable items changed dynamically
   *
   * @param {HTMLElement[]} nodeList - nodes to iterate
   */
  setItems(e) {
    this.items = e;
  }
  /**
   * Sets cursor next to the current
   */
  next() {
    this.cursor = this.leafNodesAndReturnIndex(ve.directions.RIGHT);
  }
  /**
   * Sets cursor before current
   */
  previous() {
    this.cursor = this.leafNodesAndReturnIndex(ve.directions.LEFT);
  }
  /**
   * Sets cursor to the default position and removes CSS-class from previously focused item
   */
  dropCursor() {
    this.cursor !== -1 && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1);
  }
  /**
   * Leafs nodes inside the target list from active element
   *
   * @param {string} direction - leaf direction. Can be 'left' or 'right'
   * @returns {number} index of focused node
   */
  leafNodesAndReturnIndex(e) {
    if (this.items.length === 0)
      return this.cursor;
    let t = this.cursor;
    return t === -1 ? t = e === ve.directions.RIGHT ? -1 : 0 : this.items[t].classList.remove(this.focusedCssClass), e === ve.directions.RIGHT ? t = (t + 1) % this.items.length : t = (this.items.length + t - 1) % this.items.length, d.canSetCaret(this.items[t]) && Oe(() => b.setCursor(this.items[t]), 50)(), this.items[t].classList.add(this.focusedCssClass), t;
  }
};
Wt.directions = {
  RIGHT: "right",
  LEFT: "left"
};
let me = Wt;
class le {
  /**
   * @param options - different constructing settings
   */
  constructor(e) {
    this.iterator = null, this.activated = !1, this.flipCallbacks = [], this.onKeyDown = (t) => {
      if (this.isEventReadyForHandling(t))
        switch (le.usedKeys.includes(t.keyCode) && t.preventDefault(), t.keyCode) {
          case w.TAB:
            this.handleTabPress(t);
            break;
          case w.LEFT:
          case w.UP:
            this.flipLeft();
            break;
          case w.RIGHT:
          case w.DOWN:
            this.flipRight();
            break;
          case w.ENTER:
            this.handleEnterPress(t);
            break;
        }
    }, this.iterator = new me(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, this.allowedKeys = e.allowedKeys || le.usedKeys;
  }
  /**
   * True if flipper is currently activated
   */
  get isActivated() {
    return this.activated;
  }
  /**
   * Array of keys (codes) that is handled by Flipper
   * Used to:
   *  - preventDefault only for this keys, not all keydowns (@see constructor)
   *  - to skip external behaviours only for these keys, when filler is activated (@see BlockEvents@arrowRightAndDown)
   */
  static get usedKeys() {
    return [
      w.TAB,
      w.LEFT,
      w.RIGHT,
      w.ENTER,
      w.UP,
      w.DOWN
    ];
  }
  /**
   * Active tab/arrows handling by flipper
   *
   * @param items - Some modules (like, InlineToolbar, BlockSettings) might refresh buttons dynamically
   * @param cursorPosition - index of the item that should be focused once flipper is activated
   */
  activate(e, t) {
    this.activated = !0, e && this.iterator.setItems(e), t !== void 0 && this.iterator.setCursor(t), document.addEventListener("keydown", this.onKeyDown, !0);
  }
  /**
   * Disable tab/arrows handling by flipper
   */
  deactivate() {
    this.activated = !1, this.dropCursor(), document.removeEventListener("keydown", this.onKeyDown);
  }
  /**
   * Focus first item
   */
  focusFirst() {
    this.dropCursor(), this.flipRight();
  }
  /**
   * Focuses previous flipper iterator item
   */
  flipLeft() {
    this.iterator.previous(), this.flipCallback();
  }
  /**
   * Focuses next flipper iterator item
   */
  flipRight() {
    this.iterator.next(), this.flipCallback();
  }
  /**
   * Return true if some button is focused
   */
  hasFocus() {
    return !!this.iterator.currentItem;
  }
  /**
   * Registeres function that should be executed on each navigation action
   *
   * @param cb - function to execute
   */
  onFlip(e) {
    this.flipCallbacks.push(e);
  }
  /**
   * Unregisteres function that is executed on each navigation action
   *
   * @param cb - function to stop executing
   */
  removeOnFlip(e) {
    this.flipCallbacks = this.flipCallbacks.filter((t) => t !== e);
  }
  /**
   * Drops flipper's iterator cursor
   *
   * @see DomIterator#dropCursor
   */
  dropCursor() {
    this.iterator.dropCursor();
  }
  /**
   * This function is fired before handling flipper keycodes
   * The result of this function defines if it is need to be handled or not
   *
   * @param {KeyboardEvent} event - keydown keyboard event
   * @returns {boolean}
   */
  isEventReadyForHandling(e) {
    return this.activated && this.allowedKeys.includes(e.keyCode);
  }
  /**
   * When flipper is activated tab press will leaf the items
   *
   * @param {KeyboardEvent} event - tab keydown event
   */
  handleTabPress(e) {
    switch (e.shiftKey ? me.directions.LEFT : me.directions.RIGHT) {
      case me.directions.RIGHT:
        this.flipRight();
        break;
      case me.directions.LEFT:
        this.flipLeft();
        break;
    }
  }
  /**
   * Enter press will click current item if flipper is activated
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  handleEnterPress(e) {
    this.activated && (this.iterator.currentItem && (e.stopPropagation(), e.preventDefault(), this.iterator.currentItem.click()), O(this.activateCallback) && this.activateCallback(this.iterator.currentItem));
  }
  /**
   * Fired after flipping in any direction
   */
  flipCallback() {
    this.iterator.currentItem && this.iterator.currentItem.scrollIntoViewIfNeeded(), this.flipCallbacks.forEach((e) => e());
  }
}
const bi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 12L9 7.1C9 7.04477 9.04477 7 9.1 7H10.4C11.5 7 14 7.1 14 9.5C14 9.5 14 12 11 12M9 12V16.8C9 16.9105 9.08954 17 9.2 17H12.5C14 17 15 16 15 14.5C15 11.7046 11 12 11 12M9 12H11"/></svg>', ki = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 10L11.8586 14.8586C11.9367 14.9367 12.0633 14.9367 12.1414 14.8586L17 10"/></svg>', vi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.5 17.5L9.64142 12.6414C9.56331 12.5633 9.56331 12.4367 9.64142 12.3586L14.5 7.5"/></svg>', wi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.58284 17.5L14.4414 12.6414C14.5195 12.5633 14.5195 12.4367 14.4414 12.3586L9.58284 7.5"/></svg>', xi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7 15L11.8586 10.1414C11.9367 10.0633 12.0633 10.0633 12.1414 10.1414L17 15"/></svg>', yi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', Ei = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/></svg>', Bi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.34 10C12.4223 12.7337 11 17 11 17"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.21 7H14.2"/></svg>', xt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.5691 6.39509 13.9269 6.25143 12.8271 7.17675L11.3901 8.38588C10.0935 9.47674 9.95706 11.4241 11.0888 12.6852L11.12 12.72"/></svg>', Ti = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 7.29999H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 7.29999H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.30999 12H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 12H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.40999 16.7H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 16.7H14.59"/></svg>', Ci = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>', Kt = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M11.5 17.5L5 11M5 11V15.5M5 11H9.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12.5 6.5L19 13M19 13V8.5M19 13H14.5"/></svg>', Si = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" stroke-width="2"/><line x1="15.4142" x2="19" y1="15" y2="18.5858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', Ii = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15.7795 11.5C15.7795 11.5 16.053 11.1962 16.5497 10.6722C17.4442 9.72856 17.4701 8.2475 16.5781 7.30145V7.30145C15.6482 6.31522 14.0873 6.29227 13.1288 7.25073L11.8796 8.49999"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.24517 12.3883C8.24517 12.3883 7.97171 12.6922 7.47504 13.2161C6.58051 14.1598 6.55467 15.6408 7.44666 16.5869V16.5869C8.37653 17.5731 9.93744 17.5961 10.8959 16.6376L12.1452 15.3883"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17.7802 15.1032L16.597 14.9422C16.0109 14.8624 15.4841 15.3059 15.4627 15.8969L15.4199 17.0818"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.39064 9.03238L7.58432 9.06668C8.17551 9.08366 8.6522 8.58665 8.61056 7.99669L8.5271 6.81397"/><line x1="12.1142" x2="11.7" y1="12.2" y2="11.7858" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>', Mi = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>', Ai = "__", Oi = "--";
function te(n) {
  return (e, t) => [[n, e].filter((i) => !!i).join(Ai), t].filter((i) => !!i).join(Oi);
}
const be = te("ce-hint"), ke = {
  root: be(),
  alignedStart: be(null, "align-left"),
  alignedCenter: be(null, "align-center"),
  title: be("title"),
  description: be("description")
};
class Li {
  /**
   * Constructs the hint content instance
   *
   * @param params - hint content parameters
   */
  constructor(e) {
    this.nodes = {
      root: d.make("div", [ke.root, e.alignment === "center" ? ke.alignedCenter : ke.alignedStart]),
      title: d.make("div", ke.title, { textContent: e.title })
    }, this.nodes.root.appendChild(this.nodes.title), e.description !== void 0 && (this.nodes.description = d.make("div", ke.description, { textContent: e.description }), this.nodes.root.appendChild(this.nodes.description));
  }
  /**
   * Returns the root element of the hint content
   */
  getElement() {
    return this.nodes.root;
  }
}
class nt {
  /**
   * Constructs the instance
   *
   * @param params - instance parameters
   */
  constructor(e) {
    this.params = e;
  }
  /**
   * Item name if exists
   */
  get name() {
    if (this.params !== void 0 && "name" in this.params)
      return this.params.name;
  }
  /**
   * Destroys the instance
   */
  destroy() {
    Ne();
  }
  /**
   * Called when children popover is opened (if exists)
   */
  onChildrenOpen() {
    var e;
    this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onOpen) == "function" && this.params.children.onOpen();
  }
  /**
   * Called when children popover is closed (if exists)
   */
  onChildrenClose() {
    var e;
    this.params !== void 0 && "children" in this.params && typeof ((e = this.params.children) == null ? void 0 : e.onClose) == "function" && this.params.children.onClose();
  }
  /**
   * Called on popover item click
   */
  handleClick() {
    var e, t;
    this.params !== void 0 && "onActivate" in this.params && ((t = (e = this.params).onActivate) == null || t.call(e, this.params));
  }
  /**
   * Adds hint to the item element if hint data is provided
   *
   * @param itemElement - popover item root element to add hint to
   * @param hintData - hint data
   */
  addHint(e, t) {
    const o = new Li(t);
    Pe(e, o.getElement(), {
      placement: t.position,
      hidingDelay: 100
    });
  }
  /**
   * Returns item children that are represented as popover items
   */
  get children() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.items) !== void 0 ? this.params.children.items : [];
  }
  /**
   * Returns true if item has any type of children
   */
  get hasChildren() {
    return this.children.length > 0;
  }
  /**
   * Returns true if item children should be open instantly after popover is opened and not on item click/hover
   */
  get isChildrenOpen() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.isOpen) === !0;
  }
  /**
   * True if item children items should be navigatable via keyboard
   */
  get isChildrenFlippable() {
    var e;
    return !(this.params === void 0 || !("children" in this.params) || ((e = this.params.children) == null ? void 0 : e.isFlippable) === !1);
  }
  /**
   * Returns true if item has children that should be searchable
   */
  get isChildrenSearchable() {
    var e;
    return this.params !== void 0 && "children" in this.params && ((e = this.params.children) == null ? void 0 : e.searchable) === !0;
  }
  /**
   * True if popover should close once item is activated
   */
  get closeOnActivate() {
    return this.params !== void 0 && "closeOnActivate" in this.params && this.params.closeOnActivate;
  }
  /**
   * True if item is active
   */
  get isActive() {
    return this.params === void 0 || !("isActive" in this.params) ? !1 : typeof this.params.isActive == "function" ? this.params.isActive() : this.params.isActive === !0;
  }
}
const W = te("ce-popover-item"), L = {
  container: W(),
  active: W(null, "active"),
  disabled: W(null, "disabled"),
  focused: W(null, "focused"),
  hidden: W(null, "hidden"),
  confirmationState: W(null, "confirmation"),
  noHover: W(null, "no-hover"),
  noFocus: W(null, "no-focus"),
  title: W("title"),
  secondaryTitle: W("secondary-title"),
  icon: W("icon"),
  iconTool: W("icon", "tool"),
  iconChevronRight: W("icon", "chevron-right"),
  wobbleAnimation: te("wobble")()
};
class se extends nt {
  /**
   * Constructs popover item instance
   *
   * @param params - popover item construction params
   * @param renderParams - popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t) {
    super(e), this.params = e, this.nodes = {
      root: null,
      icon: null
    }, this.confirmationState = null, this.removeSpecialFocusBehavior = () => {
      var o;
      (o = this.nodes.root) == null || o.classList.remove(L.noFocus);
    }, this.removeSpecialHoverBehavior = () => {
      var o;
      (o = this.nodes.root) == null || o.classList.remove(L.noHover);
    }, this.onErrorAnimationEnd = () => {
      var o, i;
      (o = this.nodes.icon) == null || o.classList.remove(L.wobbleAnimation), (i = this.nodes.icon) == null || i.removeEventListener("animationend", this.onErrorAnimationEnd);
    }, this.nodes.root = this.make(e, t);
  }
  /**
   * True if item is disabled and hence not clickable
   */
  get isDisabled() {
    return this.params.isDisabled === !0;
  }
  /**
   * Exposes popover item toggle parameter
   */
  get toggle() {
    return this.params.toggle;
  }
  /**
   * Item title
   */
  get title() {
    return this.params.title;
  }
  /**
   * True if confirmation state is enabled for popover item
   */
  get isConfirmationStateEnabled() {
    return this.confirmationState !== null;
  }
  /**
   * True if item is focused in keyboard navigation process
   */
  get isFocused() {
    return this.nodes.root === null ? !1 : this.nodes.root.classList.contains(L.focused);
  }
  /**
   * Returns popover item root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Called on popover item click
   */
  handleClick() {
    if (this.isConfirmationStateEnabled && this.confirmationState !== null) {
      this.activateOrEnableConfirmationMode(this.confirmationState);
      return;
    }
    this.activateOrEnableConfirmationMode(this.params);
  }
  /**
   * Toggles item active state
   *
   * @param isActive - true if item should strictly should become active
   */
  toggleActive(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(L.active, e);
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(L.hidden, e);
  }
  /**
   * Resets popover item to its original state
   */
  reset() {
    this.isConfirmationStateEnabled && this.disableConfirmationMode();
  }
  /**
   * Method called once item becomes focused during keyboard navigation
   */
  onFocus() {
    this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Constructs HTML element corresponding to popover item params
   *
   * @param params - item construction params
   * @param renderParams - popover item render params
   */
  make(e, t) {
    var s, r;
    const o = (t == null ? void 0 : t.wrapperTag) || "div", i = d.make(o, L.container, {
      type: o === "button" ? "button" : void 0
    });
    return e.name && (i.dataset.itemName = e.name), this.nodes.icon = d.make("div", [L.icon, L.iconTool], {
      innerHTML: e.icon || Ei
    }), i.appendChild(this.nodes.icon), e.title !== void 0 && i.appendChild(d.make("div", L.title, {
      innerHTML: e.title || ""
    })), e.secondaryLabel && i.appendChild(d.make("div", L.secondaryTitle, {
      textContent: e.secondaryLabel
    })), this.hasChildren && i.appendChild(d.make("div", [L.icon, L.iconChevronRight], {
      innerHTML: wi
    })), this.isActive && i.classList.add(L.active), e.isDisabled && i.classList.add(L.disabled), e.hint !== void 0 && ((s = t == null ? void 0 : t.hint) == null ? void 0 : s.enabled) !== !1 && this.addHint(i, {
      ...e.hint,
      position: ((r = t == null ? void 0 : t.hint) == null ? void 0 : r.position) || "right"
    }), i;
  }
  /**
   * Activates confirmation mode for the item.
   *
   * @param newState - new popover item params that should be applied
   */
  enableConfirmationMode(e) {
    if (this.nodes.root === null)
      return;
    const t = {
      ...this.params,
      ...e,
      confirmation: "confirmation" in e ? e.confirmation : void 0
    }, o = this.make(t);
    this.nodes.root.innerHTML = o.innerHTML, this.nodes.root.classList.add(L.confirmationState), this.confirmationState = e, this.enableSpecialHoverAndFocusBehavior();
  }
  /**
   * Returns item to its original state
   */
  disableConfirmationMode() {
    if (this.nodes.root === null)
      return;
    const e = this.make(this.params);
    this.nodes.root.innerHTML = e.innerHTML, this.nodes.root.classList.remove(L.confirmationState), this.confirmationState = null, this.disableSpecialHoverAndFocusBehavior();
  }
  /**
   * Enables special focus and hover behavior for item in confirmation state.
   * This is needed to prevent item from being highlighted as hovered/focused just after click.
   */
  enableSpecialHoverAndFocusBehavior() {
    var e, t, o;
    (e = this.nodes.root) == null || e.classList.add(L.noHover), (t = this.nodes.root) == null || t.classList.add(L.noFocus), (o = this.nodes.root) == null || o.addEventListener("mouseleave", this.removeSpecialHoverBehavior, { once: !0 });
  }
  /**
   * Disables special focus and hover behavior
   */
  disableSpecialHoverAndFocusBehavior() {
    var e;
    this.removeSpecialFocusBehavior(), this.removeSpecialHoverBehavior(), (e = this.nodes.root) == null || e.removeEventListener("mouseleave", this.removeSpecialHoverBehavior);
  }
  /**
   * Executes item's onActivate callback if the item has no confirmation configured
   *
   * @param item - item to activate or bring to confirmation mode
   */
  activateOrEnableConfirmationMode(e) {
    var t;
    if (!("confirmation" in e) || e.confirmation === void 0)
      try {
        (t = e.onActivate) == null || t.call(e, e), this.disableConfirmationMode();
      } catch {
        this.animateError();
      }
    else
      this.enableConfirmationMode(e.confirmation);
  }
  /**
   * Animates item which symbolizes that error occured while executing 'onActivate()' callback
   */
  animateError() {
    var e, t, o;
    (e = this.nodes.icon) != null && e.classList.contains(L.wobbleAnimation) || ((t = this.nodes.icon) == null || t.classList.add(L.wobbleAnimation), (o = this.nodes.icon) == null || o.addEventListener("animationend", this.onErrorAnimationEnd));
  }
}
const Ue = te("ce-popover-item-separator"), je = {
  container: Ue(),
  line: Ue("line"),
  hidden: Ue(null, "hidden")
};
class Xt extends nt {
  /**
   * Constructs the instance
   */
  constructor() {
    super(), this.nodes = {
      root: d.make("div", je.container),
      line: d.make("div", je.line)
    }, this.nodes.root.appendChild(this.nodes.line);
  }
  /**
   * Returns popover separator root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(je.hidden, e);
  }
}
var Z = /* @__PURE__ */ ((n) => (n.Closed = "closed", n.ClosedOnActivate = "closed-on-activate", n))(Z || {});
const H = te("ce-popover"), N = {
  popover: H(),
  popoverContainer: H("container"),
  popoverOpenTop: H(null, "open-top"),
  popoverOpenLeft: H(null, "open-left"),
  popoverOpened: H(null, "opened"),
  search: H("search"),
  nothingFoundMessage: H("nothing-found-message"),
  nothingFoundMessageDisplayed: H("nothing-found-message", "displayed"),
  items: H("items"),
  overlay: H("overlay"),
  overlayHidden: H("overlay", "hidden"),
  popoverNested: H(null, "nested"),
  getPopoverNestedClass: (n) => H(null, `nested-level-${n.toString()}`),
  popoverInline: H(null, "inline"),
  popoverHeader: H("header")
};
var de = /* @__PURE__ */ ((n) => (n.NestingLevel = "--nesting-level", n.PopoverHeight = "--popover-height", n.InlinePopoverWidth = "--inline-popover-width", n.TriggerItemLeft = "--trigger-item-left", n.TriggerItemTop = "--trigger-item-top", n))(de || {});
const yt = te("ce-popover-item-html"), Et = {
  root: yt(),
  hidden: yt(null, "hidden")
};
class Ee extends nt {
  /**
   * Constructs the instance
   *
   * @param params – instance parameters
   * @param renderParams – popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t) {
    var o, i;
    super(e), this.nodes = {
      root: d.make("div", Et.root)
    }, this.nodes.root.appendChild(e.element), e.name && (this.nodes.root.dataset.itemName = e.name), e.hint !== void 0 && ((o = t == null ? void 0 : t.hint) == null ? void 0 : o.enabled) !== !1 && this.addHint(this.nodes.root, {
      ...e.hint,
      position: ((i = t == null ? void 0 : t.hint) == null ? void 0 : i.position) || "right"
    });
  }
  /**
   * Returns popover item root element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Toggles item hidden state
   *
   * @param isHidden - true if item should be hidden
   */
  toggleHidden(e) {
    var t;
    (t = this.nodes.root) == null || t.classList.toggle(Et.hidden, e);
  }
  /**
   * Returns list of buttons and inputs inside custom content
   */
  getControls() {
    const e = this.nodes.root.querySelectorAll(
      `button, ${d.allInputsSelector}`
    );
    return Array.from(e);
  }
}
class Vt extends Te {
  /**
   * Constructs the instance
   *
   * @param params - popover construction params
   * @param itemsRenderParams - popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t = {}) {
    super(), this.params = e, this.itemsRenderParams = t, this.listeners = new Ce(), this.messages = {
      nothingFound: "Nothing found",
      search: "Search"
    }, this.items = this.buildItems(e.items), e.messages && (this.messages = {
      ...this.messages,
      ...e.messages
    }), this.nodes = {}, this.nodes.popoverContainer = d.make("div", [N.popoverContainer]), this.nodes.nothingFoundMessage = d.make("div", [N.nothingFoundMessage], {
      textContent: this.messages.nothingFound
    }), this.nodes.popoverContainer.appendChild(this.nodes.nothingFoundMessage), this.nodes.items = d.make("div", [N.items]), this.items.forEach((o) => {
      const i = o.getElement();
      i !== null && this.nodes.items.appendChild(i);
    }), this.nodes.popoverContainer.appendChild(this.nodes.items), this.listeners.on(this.nodes.popoverContainer, "click", (o) => this.handleClick(o)), this.nodes.popover = d.make("div", [
      N.popover,
      this.params.class
    ]), this.nodes.popover.appendChild(this.nodes.popoverContainer);
  }
  /**
   * List of default popover items that are searchable and may have confirmation state
   */
  get itemsDefault() {
    return this.items.filter((e) => e instanceof se);
  }
  /**
   * Returns HTML element corresponding to the popover
   */
  getElement() {
    return this.nodes.popover;
  }
  /**
   * Open popover
   */
  show() {
    this.nodes.popover.classList.add(N.popoverOpened), this.search !== void 0 && this.search.focus();
  }
  /**
   * Closes popover
   */
  hide() {
    this.nodes.popover.classList.remove(N.popoverOpened), this.nodes.popover.classList.remove(N.popoverOpenTop), this.itemsDefault.forEach((e) => e.reset()), this.search !== void 0 && this.search.clear(), this.emit(Z.Closed);
  }
  /**
   * Clears memory
   */
  destroy() {
    var e;
    this.items.forEach((t) => t.destroy()), this.nodes.popover.remove(), this.listeners.removeAll(), (e = this.search) == null || e.destroy();
  }
  /**
   * Looks for the item by name and imitates click on it
   *
   * @param name - name of the item to activate
   */
  activateItemByName(e) {
    const t = this.items.find((o) => o.name === e);
    this.handleItemClick(t);
  }
  /**
   * Factory method for creating popover items
   *
   * @param items - list of items params
   */
  buildItems(e) {
    return e.map((t) => {
      switch (t.type) {
        case A.Separator:
          return new Xt();
        case A.Html:
          return new Ee(t, this.itemsRenderParams[A.Html]);
        default:
          return new se(t, this.itemsRenderParams[A.Default]);
      }
    });
  }
  /**
   * Retrieves popover item that is the target of the specified event
   *
   * @param event - event to retrieve popover item from
   */
  getTargetItem(e) {
    return this.items.filter((t) => t instanceof se || t instanceof Ee).find((t) => {
      const o = t.getElement();
      return o === null ? !1 : e.composedPath().includes(o);
    });
  }
  /**
   * Handles popover item click
   *
   * @param item - item to handle click of
   */
  handleItemClick(e) {
    if (!("isDisabled" in e && e.isDisabled)) {
      if (e.hasChildren) {
        this.showNestedItems(e), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick();
        return;
      }
      this.itemsDefault.filter((t) => t !== e).forEach((t) => t.reset()), "handleClick" in e && typeof e.handleClick == "function" && e.handleClick(), this.toggleItemActivenessIfNeeded(e), e.closeOnActivate && (this.hide(), this.emit(Z.ClosedOnActivate));
    }
  }
  /**
   * Handles clicks inside popover
   *
   * @param event - item to handle click of
   */
  handleClick(e) {
    const t = this.getTargetItem(e);
    t !== void 0 && this.handleItemClick(t);
  }
  /**
   * - Toggles item active state, if clicked popover item has property 'toggle' set to true.
   *
   * - Performs radiobutton-like behavior if the item has property 'toggle' set to string key.
   * (All the other items with the same key get inactive, and the item gets active)
   *
   * @param clickedItem - popover item that was clicked
   */
  toggleItemActivenessIfNeeded(e) {
    if (e instanceof se && (e.toggle === !0 && e.toggleActive(), typeof e.toggle == "string")) {
      const t = this.itemsDefault.filter((o) => o.toggle === e.toggle);
      if (t.length === 1) {
        e.toggleActive();
        return;
      }
      t.forEach((o) => {
        o.toggleActive(o === e);
      });
    }
  }
}
var De = /* @__PURE__ */ ((n) => (n.Search = "search", n))(De || {});
const $e = te("cdx-search-field"), Ye = {
  wrapper: $e(),
  icon: $e("icon"),
  input: $e("input")
};
class _i extends Te {
  /**
   * @param options - available config
   * @param options.items - searchable items list
   * @param options.placeholder - input placeholder
   */
  constructor({ items: e, placeholder: t }) {
    super(), this.listeners = new Ce(), this.items = e, this.wrapper = d.make("div", Ye.wrapper);
    const o = d.make("div", Ye.icon, {
      innerHTML: Si
    });
    this.input = d.make("input", Ye.input, {
      placeholder: t,
      /**
       * Used to prevent focusing on the input by Tab key
       * (Popover in the Toolbar lays below the blocks,
       * so Tab in the last block will focus this hidden input if this property is not set)
       */
      tabIndex: -1
    }), this.wrapper.appendChild(o), this.wrapper.appendChild(this.input), this.listeners.on(this.input, "input", () => {
      this.searchQuery = this.input.value, this.emit(De.Search, {
        query: this.searchQuery,
        items: this.foundItems
      });
    });
  }
  /**
   * Returns search field element
   */
  getElement() {
    return this.wrapper;
  }
  /**
   * Sets focus to the input
   */
  focus() {
    this.input.focus();
  }
  /**
   * Clears search query and results
   */
  clear() {
    this.input.value = "", this.searchQuery = "", this.emit(De.Search, {
      query: "",
      items: this.foundItems
    });
  }
  /**
   * Clears memory
   */
  destroy() {
    this.listeners.removeAll();
  }
  /**
   * Returns list of found items for the current search query
   */
  get foundItems() {
    return this.items.filter((e) => this.checkItem(e));
  }
  /**
   * Contains logic for checking whether passed item conforms the search query
   *
   * @param item - item to be checked
   */
  checkItem(e) {
    var i, s;
    const t = ((i = e.title) == null ? void 0 : i.toLowerCase()) || "", o = (s = this.searchQuery) == null ? void 0 : s.toLowerCase();
    return o !== void 0 ? t.includes(o) : !1;
  }
}
var Ni = Object.defineProperty, Pi = Object.getOwnPropertyDescriptor, Di = (n, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? Pi(e, t) : e, s = n.length - 1, r; s >= 0; s--)
    (r = n[s]) && (i = (o ? r(e, t, i) : r(i)) || i);
  return o && i && Ni(e, t, i), i;
};
const qt = class Zt extends Vt {
  /**
   * Construct the instance
   *
   * @param params - popover params
   * @param itemsRenderParams – popover item render params.
   * The parameters that are not set by user via popover api but rather depend on technical implementation
   */
  constructor(e, t) {
    super(e, t), this.nestingLevel = 0, this.nestedPopoverTriggerItem = null, this.previouslyHoveredItem = null, this.scopeElement = document.body, this.hide = () => {
      var o;
      super.hide(), this.destroyNestedPopoverIfExists(), (o = this.flipper) == null || o.deactivate(), this.previouslyHoveredItem = null;
    }, this.onFlip = () => {
      const o = this.itemsDefault.find((i) => i.isFocused);
      o == null || o.onFocus();
    }, this.onSearch = (o) => {
      var l;
      const i = o.query === "", s = o.items.length === 0;
      this.items.forEach((a) => {
        let c = !1;
        a instanceof se ? c = !o.items.includes(a) : (a instanceof Xt || a instanceof Ee) && (c = s || !i), a.toggleHidden(c);
      }), this.toggleNothingFoundMessage(s);
      const r = o.query === "" ? this.flippableElements : o.items.map((a) => a.getElement());
      (l = this.flipper) != null && l.isActivated && (this.flipper.deactivate(), this.flipper.activate(r));
    }, e.nestingLevel !== void 0 && (this.nestingLevel = e.nestingLevel), this.nestingLevel > 0 && this.nodes.popover.classList.add(N.popoverNested), e.scopeElement !== void 0 && (this.scopeElement = e.scopeElement), this.nodes.popoverContainer !== null && this.listeners.on(this.nodes.popoverContainer, "mouseover", (o) => this.handleHover(o)), e.searchable && this.addSearch(), e.flippable !== !1 && (this.flipper = new le({
      items: this.flippableElements,
      focusedItemClass: L.focused,
      allowedKeys: [
        w.TAB,
        w.UP,
        w.DOWN,
        w.ENTER
      ]
    }), this.flipper.onFlip(this.onFlip));
  }
  /**
   * Returns true if some item inside popover is focused
   */
  hasFocus() {
    return this.flipper === void 0 ? !1 : this.flipper.hasFocus();
  }
  /**
   * Scroll position inside items container of the popover
   */
  get scrollTop() {
    return this.nodes.items === null ? 0 : this.nodes.items.scrollTop;
  }
  /**
   * Returns visible element offset top
   */
  get offsetTop() {
    return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetTop;
  }
  /**
   * Open popover
   */
  show() {
    var e;
    this.nodes.popover.style.setProperty(de.PopoverHeight, this.size.height + "px"), this.shouldOpenBottom || this.nodes.popover.classList.add(N.popoverOpenTop), this.shouldOpenRight || this.nodes.popover.classList.add(N.popoverOpenLeft), super.show(), (e = this.flipper) == null || e.activate(this.flippableElements);
  }
  /**
   * Clears memory
   */
  destroy() {
    this.hide(), super.destroy();
  }
  /**
   * Handles displaying nested items for the item.
   *
   * @param item – item to show nested popover for
   */
  showNestedItems(e) {
    this.nestedPopover !== null && this.nestedPopover !== void 0 || (this.nestedPopoverTriggerItem = e, this.showNestedPopoverForItem(e));
  }
  /**
   * Handles hover events inside popover items container
   *
   * @param event - hover event data
   */
  handleHover(e) {
    const t = this.getTargetItem(e);
    t !== void 0 && this.previouslyHoveredItem !== t && (this.destroyNestedPopoverIfExists(), this.previouslyHoveredItem = t, t.hasChildren && this.showNestedPopoverForItem(t));
  }
  /**
   * Sets CSS variable with position of item near which nested popover should be displayed.
   * Is used for correct positioning of the nested popover
   *
   * @param nestedPopoverEl - nested popover element
   * @param item – item near which nested popover should be displayed
   */
  setTriggerItemPosition(e, t) {
    const o = t.getElement(), i = (o ? o.offsetTop : 0) - this.scrollTop, s = this.offsetTop + i;
    e.style.setProperty(de.TriggerItemTop, s + "px");
  }
  /**
   * Destroys existing nested popover
   */
  destroyNestedPopoverIfExists() {
    var e, t;
    this.nestedPopover === void 0 || this.nestedPopover === null || (this.nestedPopover.off(Z.ClosedOnActivate, this.hide), this.nestedPopover.hide(), this.nestedPopover.destroy(), this.nestedPopover.getElement().remove(), this.nestedPopover = null, (e = this.flipper) == null || e.activate(this.flippableElements), (t = this.nestedPopoverTriggerItem) == null || t.onChildrenClose());
  }
  /**
   * Creates and displays nested popover for specified item.
   * Is used only on desktop
   *
   * @param item - item to display nested popover by
   */
  showNestedPopoverForItem(e) {
    var o;
    this.nestedPopover = new Zt({
      searchable: e.isChildrenSearchable,
      items: e.children,
      nestingLevel: this.nestingLevel + 1,
      flippable: e.isChildrenFlippable,
      messages: this.messages
    }), e.onChildrenOpen(), this.nestedPopover.on(Z.ClosedOnActivate, this.hide);
    const t = this.nestedPopover.getElement();
    return this.nodes.popover.appendChild(t), this.setTriggerItemPosition(t, e), t.style.setProperty(de.NestingLevel, this.nestedPopover.nestingLevel.toString()), this.nestedPopover.show(), (o = this.flipper) == null || o.deactivate(), this.nestedPopover;
  }
  /**
   * Checks if popover should be opened bottom.
   * It should happen when there is enough space below or not enough space above
   */
  get shouldOpenBottom() {
    if (this.nodes.popover === void 0 || this.nodes.popover === null)
      return !1;
    const e = this.nodes.popoverContainer.getBoundingClientRect(), t = this.scopeElement.getBoundingClientRect(), o = this.size.height, i = e.top + o, s = e.top - o, r = Math.min(window.innerHeight, t.bottom);
    return s < t.top || i <= r;
  }
  /**
   * Checks if popover should be opened left.
   * It should happen when there is enough space in the right or not enough space in the left
   */
  get shouldOpenRight() {
    if (this.nodes.popover === void 0 || this.nodes.popover === null)
      return !1;
    const e = this.nodes.popover.getBoundingClientRect(), t = this.scopeElement.getBoundingClientRect(), o = this.size.width, i = e.right + o, s = e.left - o, r = Math.min(window.innerWidth, t.right);
    return s < t.left || i <= r;
  }
  get size() {
    var i;
    const e = {
      height: 0,
      width: 0
    };
    if (this.nodes.popover === null)
      return e;
    const t = this.nodes.popover.cloneNode(!0);
    t.style.visibility = "hidden", t.style.position = "absolute", t.style.top = "-1000px", t.classList.add(N.popoverOpened), (i = t.querySelector("." + N.popoverNested)) == null || i.remove(), document.body.appendChild(t);
    const o = t.querySelector("." + N.popoverContainer);
    return e.height = o.offsetHeight, e.width = o.offsetWidth, t.remove(), e;
  }
  /**
   * Returns list of elements available for keyboard navigation.
   */
  get flippableElements() {
    return this.items.map((t) => {
      if (t instanceof se)
        return t.getElement();
      if (t instanceof Ee)
        return t.getControls();
    }).flat().filter((t) => t != null);
  }
  /**
   * Adds search to the popover
   */
  addSearch() {
    this.search = new _i({
      items: this.itemsDefault,
      placeholder: this.messages.search
    }), this.search.on(De.Search, this.onSearch);
    const e = this.search.getElement();
    e.classList.add(N.search), this.nodes.popoverContainer.insertBefore(e, this.nodes.popoverContainer.firstChild);
  }
  /**
   * Toggles nothing found message visibility
   *
   * @param isDisplayed - true if the message should be displayed
   */
  toggleNothingFoundMessage(e) {
    this.nodes.nothingFoundMessage.classList.toggle(N.nothingFoundMessageDisplayed, e);
  }
};
Di([
  ue
], qt.prototype, "size", 1);
let rt = qt;
class Ri extends rt {
  /**
   * Constructs the instance
   *
   * @param params - instance parameters
   */
  constructor(e) {
    const t = !pe();
    super(
      {
        ...e,
        class: N.popoverInline
      },
      {
        [A.Default]: {
          /**
           * We use button instead of div here to fix bug associated with focus loss (which leads to selection change) on click in safari
           *
           * @todo figure out better way to solve the issue
           */
          wrapperTag: "button",
          hint: {
            position: "top",
            alignment: "center",
            enabled: t
          }
        },
        [A.Html]: {
          hint: {
            position: "top",
            alignment: "center",
            enabled: t
          }
        }
      }
    ), this.items.forEach((o) => {
      !(o instanceof se) && !(o instanceof Ee) || o.hasChildren && o.isChildrenOpen && this.showNestedItems(o);
    });
  }
  /**
   * Returns visible element offset top
   */
  get offsetLeft() {
    return this.nodes.popoverContainer === null ? 0 : this.nodes.popoverContainer.offsetLeft;
  }
  /**
   * Open popover
   */
  show() {
    this.nestingLevel === 0 && this.nodes.popover.style.setProperty(
      de.InlinePopoverWidth,
      this.size.width + "px"
    ), super.show();
  }
  /**
   * Disable hover event handling.
   * Overrides parent's class behavior
   */
  handleHover() {
  }
  /**
   * Sets CSS variable with position of item near which nested popover should be displayed.
   * Is used to position nested popover right below clicked item
   *
   * @param nestedPopoverEl - nested popover element
   * @param item – item near which nested popover should be displayed
   */
  setTriggerItemPosition(e, t) {
    const o = t.getElement(), i = o ? o.offsetLeft : 0, s = this.offsetLeft + i;
    e.style.setProperty(
      de.TriggerItemLeft,
      s + "px"
    );
  }
  /**
   * Handles displaying nested items for the item.
   * Overriding in order to add toggling behaviour
   *
   * @param item – item to toggle nested popover for
   */
  showNestedItems(e) {
    if (this.nestedPopoverTriggerItem === e) {
      this.destroyNestedPopoverIfExists(), this.nestedPopoverTriggerItem = null;
      return;
    }
    super.showNestedItems(e);
  }
  /**
   * Creates and displays nested popover for specified item.
   * Is used only on desktop
   *
   * @param item - item to display nested popover by
   */
  showNestedPopoverForItem(e) {
    const t = super.showNestedPopoverForItem(e);
    return t.getElement().classList.add(N.getPopoverNestedClass(t.nestingLevel)), t;
  }
  /**
   * Overrides default item click handling.
   * Helps to close nested popover once other item is clicked.
   *
   * @param item - clicked item
   */
  handleItemClick(e) {
    var t;
    e !== this.nestedPopoverTriggerItem && ((t = this.nestedPopoverTriggerItem) == null || t.handleClick(), super.destroyNestedPopoverIfExists()), super.handleItemClick(e);
  }
}
const Gt = class we {
  constructor() {
    this.scrollPosition = null;
  }
  /**
   * Locks body element scroll
   */
  lock() {
    Ge ? this.lockHard() : document.body.classList.add(we.CSS.scrollLocked);
  }
  /**
   * Unlocks body element scroll
   */
  unlock() {
    Ge ? this.unlockHard() : document.body.classList.remove(we.CSS.scrollLocked);
  }
  /**
   * Locks scroll in a hard way (via setting fixed position to body element)
   */
  lockHard() {
    this.scrollPosition = window.pageYOffset, document.documentElement.style.setProperty(
      "--window-scroll-offset",
      `${this.scrollPosition}px`
    ), document.body.classList.add(we.CSS.scrollLockedHard);
  }
  /**
   * Unlocks hard scroll lock
   */
  unlockHard() {
    document.body.classList.remove(we.CSS.scrollLockedHard), this.scrollPosition !== null && window.scrollTo(0, this.scrollPosition), this.scrollPosition = null;
  }
};
Gt.CSS = {
  scrollLocked: "ce-scroll-locked",
  scrollLockedHard: "ce-scroll-locked--hard"
};
let Fi = Gt;
const We = te("ce-popover-header"), Ke = {
  root: We(),
  text: We("text"),
  backButton: We("back-button")
};
class Hi {
  /**
   * Constructs the instance
   *
   * @param params - popover header params
   */
  constructor({ text: e, onBackButtonClick: t }) {
    this.listeners = new Ce(), this.text = e, this.onBackButtonClick = t, this.nodes = {
      root: d.make("div", [Ke.root]),
      backButton: d.make("button", [Ke.backButton]),
      text: d.make("div", [Ke.text])
    }, this.nodes.backButton.innerHTML = vi, this.nodes.root.appendChild(this.nodes.backButton), this.listeners.on(this.nodes.backButton, "click", this.onBackButtonClick), this.nodes.text.innerText = this.text, this.nodes.root.appendChild(this.nodes.text);
  }
  /**
   * Returns popover header root html element
   */
  getElement() {
    return this.nodes.root;
  }
  /**
   * Destroys the instance
   */
  destroy() {
    this.nodes.root.remove(), this.listeners.destroy();
  }
}
class zi {
  constructor() {
    this.history = [];
  }
  /**
   * Push new popover state
   *
   * @param state - new state
   */
  push(e) {
    this.history.push(e);
  }
  /**
   * Pop last popover state
   */
  pop() {
    return this.history.pop();
  }
  /**
   * Title retrieved from the current state
   */
  get currentTitle() {
    return this.history.length === 0 ? "" : this.history[this.history.length - 1].title;
  }
  /**
   * Items list retrieved from the current state
   */
  get currentItems() {
    return this.history.length === 0 ? [] : this.history[this.history.length - 1].items;
  }
  /**
   * Returns history to initial popover state
   */
  reset() {
    for (; this.history.length > 1; )
      this.pop();
  }
}
class Jt extends Vt {
  /**
   * Construct the instance
   *
   * @param params - popover params
   */
  constructor(e) {
    super(e, {
      [A.Default]: {
        hint: {
          enabled: !1
        }
      },
      [A.Html]: {
        hint: {
          enabled: !1
        }
      }
    }), this.scrollLocker = new Fi(), this.history = new zi(), this.isHidden = !0, this.nodes.overlay = d.make("div", [N.overlay, N.overlayHidden]), this.nodes.popover.insertBefore(this.nodes.overlay, this.nodes.popover.firstChild), this.listeners.on(this.nodes.overlay, "click", () => {
      this.hide();
    }), this.history.push({ items: e.items });
  }
  /**
   * Open popover
   */
  show() {
    this.nodes.overlay.classList.remove(N.overlayHidden), super.show(), this.scrollLocker.lock(), this.isHidden = !1;
  }
  /**
   * Closes popover
   */
  hide() {
    this.isHidden || (super.hide(), this.nodes.overlay.classList.add(N.overlayHidden), this.scrollLocker.unlock(), this.history.reset(), this.isHidden = !0);
  }
  /**
   * Clears memory
   */
  destroy() {
    super.destroy(), this.scrollLocker.unlock();
  }
  /**
   * Handles displaying nested items for the item
   *
   * @param item – item to show nested popover for
   */
  showNestedItems(e) {
    this.updateItemsAndHeader(e.children, e.title), this.history.push({
      title: e.title,
      items: e.children
    });
  }
  /**
   * Removes rendered popover items and header and displays new ones
   *
   * @param items - new popover items
   * @param title - new popover header text
   */
  updateItemsAndHeader(e, t) {
    if (this.header !== null && this.header !== void 0 && (this.header.destroy(), this.header = null), t !== void 0) {
      this.header = new Hi({
        text: t,
        onBackButtonClick: () => {
          this.history.pop(), this.updateItemsAndHeader(this.history.currentItems, this.history.currentTitle);
        }
      });
      const o = this.header.getElement();
      o !== null && this.nodes.popoverContainer.insertBefore(o, this.nodes.popoverContainer.firstChild);
    }
    this.items.forEach((o) => {
      var i;
      return (i = o.getElement()) == null ? void 0 : i.remove();
    }), this.items = this.buildItems(e), this.items.forEach((o) => {
      var s;
      const i = o.getElement();
      i !== null && ((s = this.nodes.items) == null || s.appendChild(i));
    });
  }
}
class Ui extends y {
  constructor() {
    super(...arguments), this.opened = !1, this.selection = new b(), this.popover = null, this.close = () => {
      this.opened && (this.opened = !1, b.isAtEditor || this.selection.restore(), this.selection.clearSaved(), !this.Editor.CrossBlockSelection.isCrossBlockSelectionStarted && this.Editor.BlockManager.currentBlock && this.Editor.BlockSelection.unselectBlock(this.Editor.BlockManager.currentBlock), this.eventsDispatcher.emit(this.events.closed), this.popover && (this.popover.off(Z.Closed, this.onPopoverClose), this.popover.destroy(), this.popover.getElement().remove(), this.popover = null));
    }, this.onPopoverClose = () => {
      this.close();
    };
  }
  /**
   * Module Events
   */
  get events() {
    return {
      opened: "block-settings-opened",
      closed: "block-settings-closed"
    };
  }
  /**
   * Block Settings CSS
   */
  get CSS() {
    return {
      settings: "ce-settings"
    };
  }
  /**
   * Getter for inner popover's flipper instance
   *
   * @todo remove once BlockSettings becomes standalone non-module class
   */
  get flipper() {
    var e;
    if (this.popover !== null)
      return "flipper" in this.popover ? (e = this.popover) == null ? void 0 : e.flipper : void 0;
  }
  /**
   * Panel with block settings with 2 sections:
   *  - Tool's Settings
   *  - Default Settings [Move, Remove, etc]
   */
  make() {
    this.nodes.wrapper = d.make("div", [this.CSS.settings]), this.eventsDispatcher.on(ye, this.close);
  }
  /**
   * Destroys module
   */
  destroy() {
    this.removeAllNodes(), this.listeners.destroy(), this.eventsDispatcher.off(ye, this.close);
  }
  /**
   * Open Block Settings pane
   *
   * @param targetBlock - near which Block we should open BlockSettings
   */
  async open(e = this.Editor.BlockManager.currentBlock) {
    var s;
    this.opened = !0, this.selection.save(), this.Editor.BlockSelection.selectBlock(e), this.Editor.BlockSelection.clearCache();
    const { toolTunes: t, commonTunes: o } = e.getTunes();
    this.eventsDispatcher.emit(this.events.opened);
    const i = pe() ? Jt : rt;
    this.popover = new i({
      searchable: !0,
      items: await this.getTunesItems(e, o, t),
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: z.ui(K.ui.popover, "Nothing found"),
        search: z.ui(K.ui.popover, "Filter")
      }
    }), this.popover.on(Z.Closed, this.onPopoverClose), (s = this.nodes.wrapper) == null || s.append(this.popover.getElement()), this.popover.show();
  }
  /**
   * Returns root block settings element
   */
  getElement() {
    return this.nodes.wrapper;
  }
  /**
   * Returns list of items to be displayed in block tunes menu.
   * Merges tool specific tunes, conversion menu and common tunes in one list in predefined order
   *
   * @param currentBlock –  block we are about to open block tunes for
   * @param commonTunes – common tunes
   * @param toolTunes - tool specific tunes
   */
  async getTunesItems(e, t, o) {
    const i = [];
    o !== void 0 && o.length > 0 && (i.push(...o), i.push({
      type: A.Separator
    }));
    const s = Array.from(this.Editor.Tools.blockTools.values()), l = (await zt(e, s)).reduce((a, c) => (c.toolbox.forEach((u) => {
      a.push({
        icon: u.icon,
        title: z.t(K.toolNames, u.title),
        name: c.name,
        closeOnActivate: !0,
        onActivate: async () => {
          const { BlockManager: h, Caret: p, Toolbar: g } = this.Editor, f = await h.convert(e, c.name, u.data);
          g.close(), p.setToBlock(f, p.positions.END);
        }
      });
    }), a), []);
    return l.length > 0 && (i.push({
      icon: Kt,
      name: "convert-to",
      title: z.ui(K.ui.popover, "Convert to"),
      children: {
        searchable: !0,
        items: l
      }
    }), i.push({
      type: A.Separator
    })), i.push(...t), i.map((a) => this.resolveTuneAliases(a));
  }
  /**
   * Resolves aliases in tunes menu items
   *
   * @param item - item with resolved aliases
   */
  resolveTuneAliases(e) {
    if (e.type === A.Separator || e.type === A.Html)
      return e;
    const t = mi(e, { label: "title" });
    return e.confirmation && (t.confirmation = this.resolveTuneAliases(e.confirmation)), t;
  }
}
var Qt = { exports: {} };
/*!
 * Library for handling keyboard shortcuts
 * @copyright CodeX (https://codex.so)
 * @license MIT
 * @author CodeX (https://codex.so)
 * @version 1.2.0
 */
(function(n, e) {
  (function(t, o) {
    n.exports = o();
  })(window, function() {
    return function(t) {
      var o = {};
      function i(s) {
        if (o[s])
          return o[s].exports;
        var r = o[s] = { i: s, l: !1, exports: {} };
        return t[s].call(r.exports, r, r.exports, i), r.l = !0, r.exports;
      }
      return i.m = t, i.c = o, i.d = function(s, r, l) {
        i.o(s, r) || Object.defineProperty(s, r, { enumerable: !0, get: l });
      }, i.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, i.t = function(s, r) {
        if (1 & r && (s = i(s)), 8 & r || 4 & r && typeof s == "object" && s && s.__esModule)
          return s;
        var l = /* @__PURE__ */ Object.create(null);
        if (i.r(l), Object.defineProperty(l, "default", { enumerable: !0, value: s }), 2 & r && typeof s != "string")
          for (var a in s)
            i.d(l, a, (function(c) {
              return s[c];
            }).bind(null, a));
        return l;
      }, i.n = function(s) {
        var r = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return i.d(r, "a", r), r;
      }, i.o = function(s, r) {
        return Object.prototype.hasOwnProperty.call(s, r);
      }, i.p = "", i(i.s = 0);
    }([function(t, o, i) {
      function s(a, c) {
        for (var u = 0; u < c.length; u++) {
          var h = c[u];
          h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(a, h.key, h);
        }
      }
      function r(a, c, u) {
        return c && s(a.prototype, c), u && s(a, u), a;
      }
      i.r(o);
      var l = function() {
        function a(c) {
          var u = this;
          (function(h, p) {
            if (!(h instanceof p))
              throw new TypeError("Cannot call a class as a function");
          })(this, a), this.commands = {}, this.keys = {}, this.name = c.name, this.parseShortcutName(c.name), this.element = c.on, this.callback = c.callback, this.executeShortcut = function(h) {
            u.execute(h);
          }, this.element.addEventListener("keydown", this.executeShortcut, !1);
        }
        return r(a, null, [{ key: "supportedCommands", get: function() {
          return { SHIFT: ["SHIFT"], CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"], ALT: ["ALT", "OPTION"] };
        } }, { key: "keyCodes", get: function() {
          return { 0: 48, 1: 49, 2: 50, 3: 51, 4: 52, 5: 53, 6: 54, 7: 55, 8: 56, 9: 57, A: 65, B: 66, C: 67, D: 68, E: 69, F: 70, G: 71, H: 72, I: 73, J: 74, K: 75, L: 76, M: 77, N: 78, O: 79, P: 80, Q: 81, R: 82, S: 83, T: 84, U: 85, V: 86, W: 87, X: 88, Y: 89, Z: 90, BACKSPACE: 8, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, INSERT: 45, DELETE: 46, ".": 190 };
        } }]), r(a, [{ key: "parseShortcutName", value: function(c) {
          c = c.split("+");
          for (var u = 0; u < c.length; u++) {
            c[u] = c[u].toUpperCase();
            var h = !1;
            for (var p in a.supportedCommands)
              if (a.supportedCommands[p].includes(c[u])) {
                h = this.commands[p] = !0;
                break;
              }
            h || (this.keys[c[u]] = !0);
          }
          for (var g in a.supportedCommands)
            this.commands[g] || (this.commands[g] = !1);
        } }, { key: "execute", value: function(c) {
          var u, h = { CMD: c.ctrlKey || c.metaKey, SHIFT: c.shiftKey, ALT: c.altKey }, p = !0;
          for (u in this.commands)
            this.commands[u] !== h[u] && (p = !1);
          var g, f = !0;
          for (g in this.keys)
            f = f && c.keyCode === a.keyCodes[g];
          p && f && this.callback(c);
        } }, { key: "remove", value: function() {
          this.element.removeEventListener("keydown", this.executeShortcut);
        } }]), a;
      }();
      o.default = l;
    }]).default;
  });
})(Qt);
var ji = Qt.exports;
const $i = /* @__PURE__ */ Fe(ji);
class Yi {
  constructor() {
    this.registeredShortcuts = /* @__PURE__ */ new Map();
  }
  /**
   * Register shortcut
   *
   * @param shortcut - shortcut options
   */
  add(e) {
    if (this.findShortcut(e.on, e.name))
      throw Error(
        `Shortcut ${e.name} is already registered for ${e.on}. Please remove it before add a new handler.`
      );
    const o = new $i({
      name: e.name,
      on: e.on,
      callback: e.handler
    }), i = this.registeredShortcuts.get(e.on) || [];
    this.registeredShortcuts.set(e.on, [...i, o]);
  }
  /**
   * Remove shortcut
   *
   * @param element - Element shortcut is set for
   * @param name - shortcut name
   */
  remove(e, t) {
    const o = this.findShortcut(e, t);
    if (!o)
      return;
    o.remove();
    const i = this.registeredShortcuts.get(e);
    this.registeredShortcuts.set(e, i.filter((s) => s !== o));
  }
  /**
   * Get Shortcut instance if exist
   *
   * @param element - Element shorcut is set for
   * @param shortcut - shortcut name
   * @returns {number} index - shortcut index if exist
   */
  findShortcut(e, t) {
    return (this.registeredShortcuts.get(e) || []).find(({ name: i }) => i === t);
  }
}
const he = new Yi();
var Wi = Object.defineProperty, Ki = Object.getOwnPropertyDescriptor, eo = (n, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? Ki(e, t) : e, s = n.length - 1, r; s >= 0; s--)
    (r = n[s]) && (i = (o ? r(e, t, i) : r(i)) || i);
  return o && i && Wi(e, t, i), i;
}, Se = /* @__PURE__ */ ((n) => (n.Opened = "toolbox-opened", n.Closed = "toolbox-closed", n.BlockAdded = "toolbox-block-added", n))(Se || {});
const lt = class to extends Te {
  /**
   * Toolbox constructor
   *
   * @param options - available parameters
   * @param options.api - Editor API methods
   * @param options.tools - Tools available to check whether some of them should be displayed at the Toolbox or not
   */
  constructor({ api: e, tools: t, i18nLabels: o }) {
    super(), this.opened = !1, this.listeners = new Ce(), this.popover = null, this.handleMobileLayoutToggle = () => {
      this.destroyPopover(), this.initPopover();
    }, this.onPopoverClose = () => {
      this.opened = !1, this.emit(
        "toolbox-closed"
        /* Closed */
      );
    }, this.api = e, this.tools = t, this.i18nLabels = o, this.enableShortcuts(), this.nodes = {
      toolbox: d.make("div", to.CSS.toolbox)
    }, this.initPopover(), this.api.events.on(ye, this.handleMobileLayoutToggle);
  }
  /**
   * Returns True if Toolbox is Empty and nothing to show
   *
   * @returns {boolean}
   */
  get isEmpty() {
    return this.toolsToBeDisplayed.length === 0;
  }
  /**
   * CSS styles
   */
  static get CSS() {
    return {
      toolbox: "ce-toolbox"
    };
  }
  /**
   * Returns root block settings element
   */
  getElement() {
    return this.nodes.toolbox;
  }
  /**
   * Returns true if the Toolbox has the Flipper activated and the Flipper has selected button
   */
  hasFocus() {
    if (this.popover !== null)
      return "hasFocus" in this.popover ? this.popover.hasFocus() : void 0;
  }
  /**
   * Destroy Module
   */
  destroy() {
    var e;
    super.destroy(), this.nodes && this.nodes.toolbox && this.nodes.toolbox.remove(), this.removeAllShortcuts(), (e = this.popover) == null || e.off(Z.Closed, this.onPopoverClose), this.listeners.destroy(), this.api.events.off(ye, this.handleMobileLayoutToggle);
  }
  /**
   * Toolbox Tool's button click handler
   *
   * @param toolName - tool type to be activated
   * @param blockDataOverrides - Block data predefined by the activated Toolbox item
   */
  toolButtonActivated(e, t) {
    this.insertNewBlock(e, t);
  }
  /**
   * Open Toolbox with Tools
   */
  open() {
    var e;
    this.isEmpty || ((e = this.popover) == null || e.show(), this.opened = !0, this.emit(
      "toolbox-opened"
      /* Opened */
    ));
  }
  /**
   * Close Toolbox
   */
  close() {
    var e;
    (e = this.popover) == null || e.hide(), this.opened = !1, this.emit(
      "toolbox-closed"
      /* Closed */
    );
  }
  /**
   * Close Toolbox
   */
  toggle() {
    this.opened ? this.close() : this.open();
  }
  /**
   * Creates toolbox popover and appends it inside wrapper element
   */
  initPopover() {
    var t;
    const e = pe() ? Jt : rt;
    this.popover = new e({
      scopeElement: this.api.ui.nodes.redactor,
      searchable: !0,
      messages: {
        nothingFound: this.i18nLabels.nothingFound,
        search: this.i18nLabels.filter
      },
      items: this.toolboxItemsToBeDisplayed
    }), this.popover.on(Z.Closed, this.onPopoverClose), (t = this.nodes.toolbox) == null || t.append(this.popover.getElement());
  }
  /**
   * Destroys popover instance and removes it from DOM
   */
  destroyPopover() {
    this.popover !== null && (this.popover.hide(), this.popover.off(Z.Closed, this.onPopoverClose), this.popover.destroy(), this.popover = null), this.nodes.toolbox !== null && (this.nodes.toolbox.innerHTML = "");
  }
  get toolsToBeDisplayed() {
    const e = [];
    return this.tools.forEach((t) => {
      t.toolbox && e.push(t);
    }), e;
  }
  get toolboxItemsToBeDisplayed() {
    const e = (t, o) => ({
      icon: t.icon,
      title: z.t(K.toolNames, t.title || Le(o.name)),
      name: o.name,
      onActivate: () => {
        this.toolButtonActivated(o.name, t.data);
      },
      secondaryLabel: o.shortcut ? et(o.shortcut) : ""
    });
    return this.toolsToBeDisplayed.reduce((t, o) => (Array.isArray(o.toolbox) ? o.toolbox.forEach((i) => {
      t.push(e(i, o));
    }) : o.toolbox !== void 0 && t.push(e(o.toolbox, o)), t), []);
  }
  /**
   * Iterate all tools and enable theirs shortcuts if specified
   */
  enableShortcuts() {
    this.toolsToBeDisplayed.forEach((e) => {
      const t = e.shortcut;
      t && this.enableShortcutForTool(e.name, t);
    });
  }
  /**
   * Enable shortcut Block Tool implemented shortcut
   *
   * @param {string} toolName - Tool name
   * @param {string} shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcutForTool(e, t) {
    he.add({
      name: t,
      on: this.api.ui.nodes.redactor,
      handler: async (o) => {
        o.preventDefault();
        const i = this.api.blocks.getCurrentBlockIndex(), s = this.api.blocks.getBlockByIndex(i);
        if (s)
          try {
            const r = await this.api.blocks.convert(s.id, e);
            this.api.caret.setToBlock(r, "end");
            return;
          } catch {
          }
        this.insertNewBlock(e);
      }
    });
  }
  /**
   * Removes all added shortcuts
   * Fired when the Read-Only mode is activated
   */
  removeAllShortcuts() {
    this.toolsToBeDisplayed.forEach((e) => {
      const t = e.shortcut;
      t && he.remove(this.api.ui.nodes.redactor, t);
    });
  }
  /**
   * Inserts new block
   * Can be called when button clicked on Toolbox or by ShortcutData
   *
   * @param {string} toolName - Tool name
   * @param blockDataOverrides - predefined Block data
   */
  async insertNewBlock(e, t) {
    const o = this.api.blocks.getCurrentBlockIndex(), i = this.api.blocks.getBlockByIndex(o);
    if (!i)
      return;
    const s = i.isEmpty ? o : o + 1;
    let r;
    if (t) {
      const a = await this.api.blocks.composeBlockData(e);
      r = Object.assign(a, t);
    }
    const l = this.api.blocks.insert(
      e,
      r,
      void 0,
      s,
      void 0,
      i.isEmpty
    );
    l.call(J.APPEND_CALLBACK), this.api.caret.setToBlock(s), this.emit("toolbox-block-added", {
      block: l
    }), this.api.toolbar.close();
  }
};
eo([
  ue
], lt.prototype, "toolsToBeDisplayed", 1);
eo([
  ue
], lt.prototype, "toolboxItemsToBeDisplayed", 1);
let Xi = lt;
const oo = "block hovered";
async function Vi(n, e) {
  const t = navigator.keyboard;
  return t && (await t.getLayoutMap()).get(n) || e;
}
class qi extends y {
  /**
   * @class
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.toolboxInstance = null;
  }
  /**
   * CSS styles
   *
   * @returns {object}
   */
  get CSS() {
    return {
      toolbar: "ce-toolbar",
      content: "ce-toolbar__content",
      actions: "ce-toolbar__actions",
      actionsOpened: "ce-toolbar__actions--opened",
      toolbarOpened: "ce-toolbar--opened",
      openedToolboxHolderModifier: "codex-editor--toolbox-opened",
      plusButton: "ce-toolbar__plus",
      plusButtonShortcut: "ce-toolbar__plus-shortcut",
      settingsToggler: "ce-toolbar__settings-btn",
      settingsTogglerHidden: "ce-toolbar__settings-btn--hidden"
    };
  }
  /**
   * Returns the Toolbar opening state
   *
   * @returns {boolean}
   */
  get opened() {
    return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened);
  }
  /**
   * Public interface for accessing the Toolbox
   */
  get toolbox() {
    var e;
    return {
      opened: (e = this.toolboxInstance) == null ? void 0 : e.opened,
      close: () => {
        var t;
        (t = this.toolboxInstance) == null || t.close();
      },
      open: () => {
        if (this.toolboxInstance === null) {
          I("toolbox.open() called before initialization is finished", "warn");
          return;
        }
        this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.toolboxInstance.open();
      },
      toggle: () => {
        if (this.toolboxInstance === null) {
          I("toolbox.toggle() called before initialization is finished", "warn");
          return;
        }
        this.toolboxInstance.toggle();
      },
      hasFocus: () => {
        var t;
        return (t = this.toolboxInstance) == null ? void 0 : t.hasFocus();
      }
    };
  }
  /**
   * Block actions appearance manipulations
   */
  get blockActions() {
    return {
      hide: () => {
        this.nodes.actions.classList.remove(this.CSS.actionsOpened);
      },
      show: () => {
        this.nodes.actions.classList.add(this.CSS.actionsOpened);
      }
    };
  }
  /**
   * Methods for working with Block Tunes toggler
   */
  get blockTunesToggler() {
    return {
      hide: () => this.nodes.settingsToggler.classList.add(this.CSS.settingsTogglerHidden),
      show: () => this.nodes.settingsToggler.classList.remove(this.CSS.settingsTogglerHidden)
    };
  }
  /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */
  toggleReadOnly(e) {
    e ? (this.destroy(), this.Editor.BlockSettings.destroy(), this.disableModuleBindings()) : window.requestIdleCallback(() => {
      this.drawUI(), this.enableModuleBindings();
    }, { timeout: 2e3 });
  }
  /**
   * Move Toolbar to the passed (or current) Block
   *
   * @param block - block to move Toolbar near it
   */
  moveAndOpen(e = this.Editor.BlockManager.currentBlock) {
    if (this.toolboxInstance === null) {
      I("Can't open Toolbar since Editor initialization is not finished yet", "warn");
      return;
    }
    if (this.toolboxInstance.opened && this.toolboxInstance.close(), this.Editor.BlockSettings.opened && this.Editor.BlockSettings.close(), !e)
      return;
    this.hoveredBlock = e;
    const t = e.holder, { isMobile: o } = this.Editor.UI;
    let i;
    const s = 20, r = e.firstInput, l = t.getBoundingClientRect(), a = r !== void 0 ? r.getBoundingClientRect() : null, c = a !== null ? a.top - l.top : null, u = c !== null ? c > s : void 0;
    if (o)
      i = t.offsetTop + t.offsetHeight;
    else if (r === void 0 || u) {
      const h = parseInt(window.getComputedStyle(e.pluginsContent).paddingTop);
      i = t.offsetTop + h;
    } else {
      const h = _o(r), p = parseInt(window.getComputedStyle(this.nodes.plusButton).height, 10), g = 8;
      i = t.offsetTop + h - p + g + c;
    }
    this.nodes.wrapper.style.top = `${Math.floor(i)}px`, this.Editor.BlockManager.blocks.length === 1 && e.isEmpty ? this.blockTunesToggler.hide() : this.blockTunesToggler.show(), this.open();
  }
  /**
   * Close the Toolbar
   */
  close() {
    var e, t;
    this.Editor.ReadOnly.isEnabled || ((e = this.nodes.wrapper) == null || e.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), (t = this.toolboxInstance) == null || t.close(), this.Editor.BlockSettings.close(), this.reset());
  }
  /**
   * Reset the Toolbar position to prevent DOM height growth, for example after blocks deletion
   */
  reset() {
    this.nodes.wrapper.style.top = "unset";
  }
  /**
   * Open Toolbar with Plus Button and Actions
   *
   * @param {boolean} withBlockActions - by default, Toolbar opens with Block Actions.
   *                                     This flag allows to open Toolbar without Actions.
   */
  open(e = !0) {
    this.nodes.wrapper.classList.add(this.CSS.toolbarOpened), e ? this.blockActions.show() : this.blockActions.hide();
  }
  /**
   * Draws Toolbar elements
   */
  async make() {
    this.nodes.wrapper = d.make("div", this.CSS.toolbar), ["content", "actions"].forEach((s) => {
      this.nodes[s] = d.make("div", this.CSS[s]);
    }), d.append(this.nodes.wrapper, this.nodes.content), d.append(this.nodes.content, this.nodes.actions), this.nodes.plusButton = d.make("div", this.CSS.plusButton, {
      innerHTML: Ci
    }), d.append(this.nodes.actions, this.nodes.plusButton), this.readOnlyMutableListeners.on(this.nodes.plusButton, "click", () => {
      Ne(!0), this.plusButtonClicked();
    }, !1);
    const e = d.make("div");
    e.appendChild(document.createTextNode(z.ui(K.ui.toolbar.toolbox, "Add"))), e.appendChild(d.make("div", this.CSS.plusButtonShortcut, {
      textContent: "/"
    })), Pe(this.nodes.plusButton, e, {
      hidingDelay: 400
    }), this.nodes.settingsToggler = d.make("span", this.CSS.settingsToggler, {
      innerHTML: Ti
    }), d.append(this.nodes.actions, this.nodes.settingsToggler);
    const t = d.make("div"), o = d.text(z.ui(K.ui.blockTunes.toggler, "Click to tune")), i = await Vi("Slash", "/");
    t.appendChild(o), t.appendChild(d.make("div", this.CSS.plusButtonShortcut, {
      textContent: et(`CMD + ${i}`)
    })), Pe(this.nodes.settingsToggler, t, {
      hidingDelay: 400
    }), d.append(this.nodes.actions, this.makeToolbox()), d.append(this.nodes.actions, this.Editor.BlockSettings.getElement()), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  /**
   * Creates the Toolbox instance and return it's rendered element
   */
  makeToolbox() {
    return this.toolboxInstance = new Xi({
      api: this.Editor.API.methods,
      tools: this.Editor.Tools.blockTools,
      i18nLabels: {
        filter: z.ui(K.ui.popover, "Filter"),
        nothingFound: z.ui(K.ui.popover, "Nothing found")
      }
    }), this.toolboxInstance.on(Se.Opened, () => {
      this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(Se.Closed, () => {
      this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolboxHolderModifier);
    }), this.toolboxInstance.on(Se.BlockAdded, ({ block: e }) => {
      const { BlockManager: t, Caret: o } = this.Editor, i = t.getBlockById(e.id);
      i.inputs.length === 0 && (i === t.lastBlock ? (t.insertAtEnd(), o.setToBlock(t.lastBlock)) : o.setToBlock(t.nextBlock));
    }), this.toolboxInstance.getElement();
  }
  /**
   * Handler for Plus Button
   */
  plusButtonClicked() {
    var e;
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, (e = this.toolboxInstance) == null || e.toggle();
  }
  /**
   * Enable bindings
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(this.nodes.settingsToggler, "mousedown", (e) => {
      var t;
      e.stopPropagation(), this.settingsTogglerClicked(), (t = this.toolboxInstance) != null && t.opened && this.toolboxInstance.close(), Ne(!0);
    }, !0), pe() || this.eventsDispatcher.on(oo, (e) => {
      var t;
      this.Editor.BlockSettings.opened || (t = this.toolboxInstance) != null && t.opened || this.moveAndOpen(e.block);
    });
  }
  /**
   * Disable bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Clicks on the Block Settings toggler
   */
  settingsTogglerClicked() {
    this.Editor.BlockManager.currentBlock = this.hoveredBlock, this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open(this.hoveredBlock);
  }
  /**
   * Draws Toolbar UI
   *
   * Toolbar contains BlockSettings and Toolbox.
   * That's why at first we draw its components and then Toolbar itself
   *
   * Steps:
   *  - Make Toolbar dependent components like BlockSettings, Toolbox and so on
   *  - Make itself and append dependent nodes to itself
   *
   */
  drawUI() {
    this.Editor.BlockSettings.make(), this.make();
  }
  /**
   * Removes all created and saved HTMLElements
   * It is used in Read-Only mode
   */
  destroy() {
    this.removeAllNodes(), this.toolboxInstance && this.toolboxInstance.destroy();
  }
}
var ne = /* @__PURE__ */ ((n) => (n[n.Block = 0] = "Block", n[n.Inline = 1] = "Inline", n[n.Tune = 2] = "Tune", n))(ne || {}), Ie = /* @__PURE__ */ ((n) => (n.Shortcut = "shortcut", n.Toolbox = "toolbox", n.EnabledInlineTools = "inlineToolbar", n.EnabledBlockTunes = "tunes", n.Config = "config", n))(Ie || {}), io = /* @__PURE__ */ ((n) => (n.Shortcut = "shortcut", n.SanitizeConfig = "sanitize", n))(io || {}), ce = /* @__PURE__ */ ((n) => (n.IsEnabledLineBreaks = "enableLineBreaks", n.Toolbox = "toolbox", n.ConversionConfig = "conversionConfig", n.IsReadOnlySupported = "isReadOnlySupported", n.PasteConfig = "pasteConfig", n))(ce || {}), at = /* @__PURE__ */ ((n) => (n.IsInline = "isInline", n.Title = "title", n))(at || {}), Qe = /* @__PURE__ */ ((n) => (n.IsTune = "isTune", n))(Qe || {});
class ct {
  /**
   * @class
   * @param {ConstructorOptions} options - Constructor options
   */
  constructor({
    name: e,
    constructable: t,
    config: o,
    api: i,
    isDefault: s,
    isInternal: r = !1,
    defaultPlaceholder: l
  }) {
    this.api = i, this.name = e, this.constructable = t, this.config = o, this.isDefault = s, this.isInternal = r, this.defaultPlaceholder = l;
  }
  /**
   * Returns Tool user configuration
   */
  get settings() {
    const e = this.config.config || {};
    return this.isDefault && !("placeholder" in e) && this.defaultPlaceholder && (e.placeholder = this.defaultPlaceholder), e;
  }
  /**
   * Calls Tool's reset method
   */
  reset() {
    if (O(this.constructable.reset))
      return this.constructable.reset();
  }
  /**
   * Calls Tool's prepare method
   */
  prepare() {
    if (O(this.constructable.prepare))
      return this.constructable.prepare({
        toolName: this.name,
        config: this.settings
      });
  }
  /**
   * Returns shortcut for Tool (internal or specified by user)
   */
  get shortcut() {
    const e = this.constructable.shortcut;
    return this.config.shortcut || e;
  }
  /**
   * Returns Tool's sanitizer configuration
   */
  get sanitizeConfig() {
    return this.constructable.sanitize || {};
  }
  /**
   * Returns true if Tools is inline
   */
  isInline() {
    return this.type === ne.Inline;
  }
  /**
   * Returns true if Tools is block
   */
  isBlock() {
    return this.type === ne.Block;
  }
  /**
   * Returns true if Tools is tune
   */
  isTune() {
    return this.type === ne.Tune;
  }
}
class Zi extends y {
  /**
   * @param moduleConfiguration - Module Configuration
   * @param moduleConfiguration.config - Editor's config
   * @param moduleConfiguration.eventsDispatcher - Editor's event dispatcher
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.CSS = {
      inlineToolbar: "ce-inline-toolbar"
    }, this.opened = !1, this.popover = null, this.toolbarVerticalMargin = pe() ? 20 : 6, this.toolsInstances = /* @__PURE__ */ new Map();
  }
  /**
   * Toggles read-only mode
   *
   * @param {boolean} readOnlyEnabled - read-only mode
   */
  toggleReadOnly(e) {
    e ? this.destroy() : window.requestIdleCallback(() => {
      this.make();
    }, { timeout: 2e3 });
  }
  /**
   *  Moving / appearance
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Shows Inline Toolbar if something is selected
   *
   * @param [needToClose] - pass true to close toolbar if it is not allowed.
   *                                  Avoid to use it just for closing IT, better call .close() clearly.
   */
  async tryToShow(e = !1) {
    e && this.close(), this.allowedToShow() && (await this.open(), this.Editor.Toolbar.close());
  }
  /**
   * Hides Inline Toolbar
   */
  close() {
    var e, t;
    this.opened && (this.Editor.ReadOnly.isEnabled || (Array.from(this.toolsInstances.entries()).forEach(([o, i]) => {
      const s = this.getToolShortcut(o);
      s && he.remove(this.Editor.UI.nodes.redactor, s), O(i.clear) && i.clear();
    }), this.toolsInstances = null, this.reset(), this.opened = !1, (e = this.popover) == null || e.hide(), (t = this.popover) == null || t.destroy(), this.popover = null));
  }
  /**
   * Check if node is contained by Inline Toolbar
   *
   * @param {Node} node — node to check
   */
  containsNode(e) {
    return this.nodes.wrapper === void 0 ? !1 : this.nodes.wrapper.contains(e);
  }
  /**
   * Removes UI and its components
   */
  destroy() {
    var e;
    this.removeAllNodes(), (e = this.popover) == null || e.destroy(), this.popover = null;
  }
  /**
   * Making DOM
   */
  make() {
    this.nodes.wrapper = d.make("div", [
      this.CSS.inlineToolbar,
      ...this.isRtl ? [this.Editor.UI.CSS.editorRtlFix] : []
    ]), d.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper);
  }
  /**
   * Shows Inline Toolbar
   */
  async open() {
    var t;
    if (this.opened)
      return;
    this.opened = !0, this.popover !== null && this.popover.destroy();
    const e = await this.getInlineTools();
    this.popover = new Ri({
      items: e,
      scopeElement: this.Editor.API.methods.ui.nodes.redactor,
      messages: {
        nothingFound: z.ui(K.ui.popover, "Nothing found"),
        search: z.ui(K.ui.popover, "Filter")
      }
    }), this.move(this.popover.size.width), (t = this.nodes.wrapper) == null || t.append(this.popover.getElement()), this.popover.show();
  }
  /**
   * Move Toolbar to the selected text
   *
   * @param popoverWidth - width of the toolbar popover
   */
  move(e) {
    const t = b.rect, o = this.Editor.UI.nodes.wrapper.getBoundingClientRect(), i = {
      x: t.x - o.x,
      y: t.y + t.height - // + window.scrollY
      o.top + this.toolbarVerticalMargin
    };
    i.x + e + o.x > this.Editor.UI.contentRect.right && (i.x = this.Editor.UI.contentRect.right - e - o.x), this.nodes.wrapper.style.left = Math.floor(i.x) + "px", this.nodes.wrapper.style.top = Math.floor(i.y) + "px";
  }
  /**
   * Clear orientation classes and reset position
   */
  reset() {
    this.nodes.wrapper.style.left = "0", this.nodes.wrapper.style.top = "0";
  }
  /**
   * Need to show Inline Toolbar or not
   */
  allowedToShow() {
    const e = ["IMG", "INPUT"], t = b.get(), o = b.text;
    if (!t || !t.anchorNode || t.isCollapsed || o.length < 1)
      return !1;
    const i = d.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
    if (i === null || t && e.includes(i.tagName) || i.closest('[contenteditable="true"]') === null)
      return !1;
    const r = this.Editor.BlockManager.getBlock(t.anchorNode);
    return r ? r.tool.inlineTools.size !== 0 : !1;
  }
  /**
   *  Working with Tools
   *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   */
  /**
   * Returns Inline Tools segregated by their appearance type: popover items and custom html elements.
   * Sets this.toolsInstances map
   */
  async getInlineTools() {
    const e = b.get(), t = this.Editor.BlockManager.getBlock(e.anchorNode), o = Array.from(t.tool.inlineTools.values()), i = [];
    this.toolsInstances === null && (this.toolsInstances = /* @__PURE__ */ new Map());
    for (let s = 0; s < o.length; s++) {
      const r = o[s], l = r.create(), a = await l.render();
      this.toolsInstances.set(r.name, l);
      const c = this.getToolShortcut(r.name);
      if (c)
        try {
          this.enableShortcuts(r.name, c);
        } catch {
        }
      const u = c !== void 0 ? et(c) : void 0, h = z.t(
        K.toolNames,
        r.title || Le(r.name)
      );
      [a].flat().forEach((p) => {
        var f, k;
        const g = {
          name: r.name,
          onActivate: () => {
            this.toolClicked(l);
          },
          hint: {
            title: h,
            description: u
          }
        };
        if (d.isElement(p)) {
          const C = {
            ...g,
            element: p,
            type: A.Html
          };
          if (O(l.renderActions)) {
            const S = l.renderActions();
            C.children = {
              isOpen: (f = l.checkState) == null ? void 0 : f.call(l, b.get()),
              /** Disable keyboard navigation in actions, as it might conflict with enter press handling */
              isFlippable: !1,
              items: [
                {
                  type: A.Html,
                  element: S
                }
              ]
            };
          } else
            (k = l.checkState) == null || k.call(l, b.get());
          i.push(C);
        } else if (p.type === A.Html)
          i.push({
            ...g,
            ...p,
            type: A.Html
          });
        else if (p.type === A.Separator)
          i.push({
            type: A.Separator
          });
        else {
          const C = {
            ...g,
            ...p,
            type: A.Default
          };
          "children" in C && s !== 0 && i.push({
            type: A.Separator
          }), i.push(C), "children" in C && s < o.length - 1 && i.push({
            type: A.Separator
          });
        }
      });
    }
    return i;
  }
  /**
   * Get shortcut name for tool
   *
   * @param toolName — Tool name
   */
  getToolShortcut(e) {
    const { Tools: t } = this.Editor, o = t.inlineTools.get(e), i = t.internal.inlineTools;
    return Array.from(i.keys()).includes(e) ? this.inlineTools[e][io.Shortcut] : o == null ? void 0 : o.shortcut;
  }
  /**
   * Enable Tool shortcut with Editor Shortcuts Module
   *
   * @param toolName - tool name
   * @param shortcut - shortcut according to the ShortcutData Module format
   */
  enableShortcuts(e, t) {
    he.add({
      name: t,
      handler: (o) => {
        var s;
        const { currentBlock: i } = this.Editor.BlockManager;
        i && i.tool.enabledInlineTools && (o.preventDefault(), (s = this.popover) == null || s.activateItemByName(e));
      },
      on: this.Editor.UI.nodes.redactor
    });
  }
  /**
   * Inline Tool button clicks
   *
   * @param tool - Tool's instance
   */
  toolClicked(e) {
    var o;
    const t = b.range;
    (o = e.surround) == null || o.call(e, t), this.checkToolsState();
  }
  /**
   * Check Tools` state by selection
   */
  checkToolsState() {
    var e;
    (e = this.toolsInstances) == null || e.forEach((t) => {
      var o;
      (o = t.checkState) == null || o.call(t, b.get());
    });
  }
  /**
   * Get inline tools tools
   * Tools that has isInline is true
   */
  get inlineTools() {
    const e = {};
    return Array.from(this.Editor.Tools.inlineTools.entries()).forEach(([t, o]) => {
      e[t] = o.create();
    }), e;
  }
}
function so() {
  const n = window.getSelection();
  if (n === null)
    return [null, 0];
  let e = n.focusNode, t = n.focusOffset;
  return e === null ? [null, 0] : (e.nodeType !== Node.TEXT_NODE && e.childNodes.length > 0 && (e.childNodes[t] ? (e = e.childNodes[t], t = 0) : (e = e.childNodes[t - 1], t = e.textContent.length)), [e, t]);
}
function no(n, e, t, o) {
  const i = document.createRange();
  o === "left" ? (i.setStart(n, 0), i.setEnd(e, t)) : (i.setStart(e, t), i.setEnd(n, n.childNodes.length));
  const s = i.cloneContents(), r = document.createElement("div");
  r.appendChild(s);
  const l = r.textContent || "";
  return Lo(l);
}
function Me(n) {
  const e = d.getDeepestNode(n);
  if (e === null || d.isEmpty(n))
    return !0;
  if (d.isNativeInput(e))
    return e.selectionEnd === 0;
  if (d.isEmpty(n))
    return !0;
  const [t, o] = so();
  return t === null ? !1 : no(n, t, o, "left");
}
function Ae(n) {
  const e = d.getDeepestNode(n, !0);
  if (e === null)
    return !0;
  if (d.isNativeInput(e))
    return e.selectionEnd === e.value.length;
  const [t, o] = so();
  return t === null ? !1 : no(n, t, o, "right");
}
class Gi extends y {
  /**
   * All keydowns on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  keydown(e) {
    switch (this.beforeKeydownProcessing(e), e.keyCode) {
      case w.BACKSPACE:
        this.backspace(e);
        break;
      case w.DELETE:
        this.delete(e);
        break;
      case w.ENTER:
        this.enter(e);
        break;
      case w.DOWN:
      case w.RIGHT:
        this.arrowRightAndDown(e);
        break;
      case w.UP:
      case w.LEFT:
        this.arrowLeftAndUp(e);
        break;
      case w.TAB:
        this.tabPressed(e);
        break;
    }
    e.key === "/" && !e.ctrlKey && !e.metaKey && this.slashPressed(e), e.code === "Slash" && (e.ctrlKey || e.metaKey) && (e.preventDefault(), this.commandSlashPressed());
  }
  /**
   * Fires on keydown before event processing
   *
   * @param {KeyboardEvent} event - keydown
   */
  beforeKeydownProcessing(e) {
    this.needToolbarClosing(e) && It(e.keyCode) && (this.Editor.Toolbar.close(), e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || this.Editor.BlockSelection.clearSelection(e));
  }
  /**
   * Key up on Block:
   * - shows Inline Toolbar if something selected
   * - shows conversion toolbar with 85% of block selection
   *
   * @param {KeyboardEvent} event - keyup event
   */
  keyup(e) {
    e.shiftKey || this.Editor.UI.checkEmptiness();
  }
  /**
   * Add drop target styles
   *
   * @param {DragEvent} event - drag over event
   */
  dragOver(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = !0;
  }
  /**
   * Remove drop target style
   *
   * @param {DragEvent} event - drag leave event
   */
  dragLeave(e) {
    const t = this.Editor.BlockManager.getBlockByChildNode(e.target);
    t.dropTarget = !1;
  }
  /**
   * Copying selected blocks
   * Before putting to the clipboard we sanitize all blocks and then copy to the clipboard
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandC(e) {
    const { BlockSelection: t } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e);
  }
  /**
   * Copy and Delete selected Blocks
   *
   * @param {ClipboardEvent} event - clipboard event
   */
  handleCommandX(e) {
    const { BlockSelection: t, BlockManager: o, Caret: i } = this.Editor;
    t.anyBlockSelected && t.copySelectedBlocks(e).then(() => {
      const s = o.removeSelectedBlocks(), r = o.insertDefaultBlockAtIndex(s, !0);
      i.setToBlock(r, i.positions.START), t.clearSelection(e);
    });
  }
  /**
   * Tab pressed inside a Block.
   *
   * @param {KeyboardEvent} event - keydown
   */
  tabPressed(e) {
    const { InlineToolbar: t, Caret: o } = this.Editor;
    if (t.opened)
      return;
    (e.shiftKey ? o.navigatePrevious(!0) : o.navigateNext(!0)) && e.preventDefault();
  }
  /**
   * '/' + 'command' keydown inside a Block
   */
  commandSlashPressed() {
    this.Editor.BlockSelection.selectedBlocks.length > 1 || this.activateBlockSettings();
  }
  /**
   * '/' keydown inside a Block
   *
   * @param event - keydown
   */
  slashPressed(e) {
    this.Editor.BlockManager.currentBlock.isEmpty && (e.preventDefault(), this.Editor.Caret.insertContentAtCaretPosition("/"), this.activateToolbox());
  }
  /**
   * ENTER pressed on block
   *
   * @param {KeyboardEvent} event - keydown
   */
  enter(e) {
    const { BlockManager: t, UI: o } = this.Editor, i = t.currentBlock;
    if (i === void 0 || i.tool.isLineBreaksEnabled || o.someToolbarOpened && o.someFlipperButtonFocused || e.shiftKey && !Ge)
      return;
    let s = i;
    i.currentInput !== void 0 && Me(i.currentInput) && !i.hasMedia ? this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : i.currentInput && Ae(i.currentInput) ? s = this.Editor.BlockManager.insertDefaultBlockAtIndex(this.Editor.BlockManager.currentBlockIndex + 1) : s = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(s), this.Editor.Toolbar.moveAndOpen(s), e.preventDefault();
  }
  /**
   * Handle backspace keydown on Block
   *
   * @param {KeyboardEvent} event - keydown
   */
  backspace(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: i, previousBlock: s } = t;
    if (i === void 0 || !b.isCollapsed || !i.currentInput || !Me(i.currentInput))
      return;
    if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.firstInput)) {
      o.navigatePrevious();
      return;
    }
    if (s === null)
      return;
    if (s.isEmpty) {
      t.removeBlock(s);
      return;
    }
    if (i.isEmpty) {
      t.removeBlock(i);
      const a = t.currentBlock;
      o.setToBlock(a, o.positions.END);
      return;
    }
    vt(s, i) ? this.mergeBlocks(s, i) : o.setToBlock(s, o.positions.END);
  }
  /**
   * Handles delete keydown on Block
   * Removes char after the caret.
   * If caret is at the end of the block, merge next block with current
   *
   * @param {KeyboardEvent} event - keydown
   */
  delete(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { currentBlock: i, nextBlock: s } = t;
    if (!b.isCollapsed || !Ae(i.currentInput))
      return;
    if (e.preventDefault(), this.Editor.Toolbar.close(), !(i.currentInput === i.lastInput)) {
      o.navigateNext();
      return;
    }
    if (s === null)
      return;
    if (s.isEmpty) {
      t.removeBlock(s);
      return;
    }
    if (i.isEmpty) {
      t.removeBlock(i), o.setToBlock(s, o.positions.START);
      return;
    }
    vt(i, s) ? this.mergeBlocks(i, s) : o.setToBlock(s, o.positions.START);
  }
  /**
   * Merge passed Blocks
   *
   * @param targetBlock - to which Block we want to merge
   * @param blockToMerge - what Block we want to merge
   */
  mergeBlocks(e, t) {
    const { BlockManager: o, Caret: i, Toolbar: s } = this.Editor;
    i.createShadow(e.lastInput), o.mergeBlocks(e, t).then(() => {
      i.restoreCaret(e.pluginsContent), s.close();
    });
  }
  /**
   * Handle right and down keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowRightAndDown(e) {
    const t = le.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === w.TAB);
    if (this.Editor.UI.someToolbarOpened && t)
      return;
    this.Editor.Toolbar.close();
    const { currentBlock: o } = this.Editor.BlockManager, s = ((o == null ? void 0 : o.currentInput) !== void 0 ? Ae(o.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === w.DOWN && s) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState();
      return;
    }
    if (e.keyCode === w.DOWN || e.keyCode === w.RIGHT && !this.isRtl ? this.Editor.Caret.navigateNext() : this.Editor.Caret.navigatePrevious()) {
      e.preventDefault();
      return;
    }
    Oe(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Handle left and up keyboard keys
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  arrowLeftAndUp(e) {
    if (this.Editor.UI.someToolbarOpened) {
      if (le.usedKeys.includes(e.keyCode) && (!e.shiftKey || e.keyCode === w.TAB))
        return;
      this.Editor.UI.closeAllToolbars();
    }
    this.Editor.Toolbar.close();
    const { currentBlock: t } = this.Editor.BlockManager, i = ((t == null ? void 0 : t.currentInput) !== void 0 ? Me(t.currentInput) : void 0) || this.Editor.BlockSelection.anyBlockSelected;
    if (e.shiftKey && e.keyCode === w.UP && i) {
      this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1);
      return;
    }
    if (e.keyCode === w.UP || e.keyCode === w.LEFT && !this.isRtl ? this.Editor.Caret.navigatePrevious() : this.Editor.Caret.navigateNext()) {
      e.preventDefault();
      return;
    }
    Oe(() => {
      this.Editor.BlockManager.currentBlock && this.Editor.BlockManager.currentBlock.updateCurrentInput();
    }, 20)(), this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Cases when we need to close Toolbar
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  needToolbarClosing(e) {
    const t = e.keyCode === w.ENTER && this.Editor.Toolbar.toolbox.opened, o = e.keyCode === w.ENTER && this.Editor.BlockSettings.opened, i = e.keyCode === w.ENTER && this.Editor.InlineToolbar.opened, s = e.keyCode === w.TAB;
    return !(e.shiftKey || s || t || o || i);
  }
  /**
   * If Toolbox is not open, then just open it and show plus button
   */
  activateToolbox() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.Toolbar.toolbox.open();
  }
  /**
   * Open Toolbar and show BlockSettings before flipping Tools
   */
  activateBlockSettings() {
    this.Editor.Toolbar.opened || this.Editor.Toolbar.moveAndOpen(), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open();
  }
}
class Xe {
  /**
   * @class
   * @param {HTMLElement} workingArea — editor`s working node
   */
  constructor(e) {
    this.blocks = [], this.workingArea = e;
  }
  /**
   * Get length of Block instances array
   *
   * @returns {number}
   */
  get length() {
    return this.blocks.length;
  }
  /**
   * Get Block instances array
   *
   * @returns {Block[]}
   */
  get array() {
    return this.blocks;
  }
  /**
   * Get blocks html elements array
   *
   * @returns {HTMLElement[]}
   */
  get nodes() {
    return Mt(this.workingArea.children);
  }
  /**
   * Proxy trap to implement array-like setter
   *
   * @example
   * blocks[0] = new Block(...)
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — block index or any Blocks class property key to set
   * @param {Block} value — value to set
   * @returns {boolean}
   */
  static set(e, t, o) {
    return isNaN(Number(t)) ? (Reflect.set(e, t, o), !0) : (e.insert(+t, o), !0);
  }
  /**
   * Proxy trap to implement array-like getter
   *
   * @param {Blocks} instance — Blocks instance
   * @param {PropertyKey} property — Blocks class property key
   * @returns {Block|*}
   */
  static get(e, t) {
    return isNaN(Number(t)) ? Reflect.get(e, t) : e.get(+t);
  }
  /**
   * Push new Block to the blocks array and append it to working area
   *
   * @param {Block} block - Block to add
   */
  push(e) {
    this.blocks.push(e), this.insertToDOM(e);
  }
  /**
   * Swaps blocks with indexes first and second
   *
   * @param {number} first - first block index
   * @param {number} second - second block index
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    const o = this.blocks[t];
    d.swap(this.blocks[e].holder, o.holder), this.blocks[t] = this.blocks[e], this.blocks[e] = o;
  }
  /**
   * Move a block from one to another index
   *
   * @param {number} toIndex - new index of the block
   * @param {number} fromIndex - block to move
   */
  move(e, t) {
    const o = this.blocks.splice(t, 1)[0], i = e - 1, s = Math.max(0, i), r = this.blocks[s];
    e > 0 ? this.insertToDOM(o, "afterend", r) : this.insertToDOM(o, "beforebegin", r), this.blocks.splice(e, 0, o);
    const l = this.composeBlockEvent("move", {
      fromIndex: t,
      toIndex: e
    });
    o.call(J.MOVED, l);
  }
  /**
   * Insert new Block at passed index
   *
   * @param {number} index — index to insert Block
   * @param {Block} block — Block to insert
   * @param {boolean} replace — it true, replace block on given index
   */
  insert(e, t, o = !1) {
    if (!this.length) {
      this.push(t);
      return;
    }
    e > this.length && (e = this.length), o && (this.blocks[e].holder.remove(), this.blocks[e].call(J.REMOVED));
    const i = o ? 1 : 0;
    if (this.blocks.splice(e, i, t), e > 0) {
      const s = this.blocks[e - 1];
      this.insertToDOM(t, "afterend", s);
    } else {
      const s = this.blocks[e + 1];
      s ? this.insertToDOM(t, "beforebegin", s) : this.insertToDOM(t);
    }
  }
  /**
   * Replaces block under passed index with passed block
   *
   * @param index - index of existed block
   * @param block - new block
   */
  replace(e, t) {
    if (this.blocks[e] === void 0)
      throw Error("Incorrect index");
    this.blocks[e].holder.replaceWith(t.holder), this.blocks[e] = t;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index to insert blocks at
   */
  insertMany(e, t) {
    const o = new DocumentFragment();
    for (const i of e)
      o.appendChild(i.holder);
    if (this.length > 0) {
      if (t > 0) {
        const i = Math.min(t - 1, this.length - 1);
        this.blocks[i].holder.after(o);
      } else
        t === 0 && this.workingArea.prepend(o);
      this.blocks.splice(t, 0, ...e);
    } else
      this.blocks.push(...e), this.workingArea.appendChild(o);
    e.forEach((i) => i.call(J.RENDERED));
  }
  /**
   * Remove block
   *
   * @param {number} index - index of Block to remove
   */
  remove(e) {
    isNaN(e) && (e = this.length - 1), this.blocks[e].holder.remove(), this.blocks[e].call(J.REMOVED), this.blocks.splice(e, 1);
  }
  /**
   * Remove all blocks
   */
  removeAll() {
    this.workingArea.innerHTML = "", this.blocks.forEach((e) => e.call(J.REMOVED)), this.blocks.length = 0;
  }
  /**
   * Insert Block after passed target
   *
   * @todo decide if this method is necessary
   * @param {Block} targetBlock — target after which Block should be inserted
   * @param {Block} newBlock — Block to insert
   */
  insertAfter(e, t) {
    const o = this.blocks.indexOf(e);
    this.insert(o + 1, t);
  }
  /**
   * Get Block by index
   *
   * @param {number} index — Block index
   * @returns {Block}
   */
  get(e) {
    return this.blocks[e];
  }
  /**
   * Return index of passed Block
   *
   * @param {Block} block - Block to find
   * @returns {number}
   */
  indexOf(e) {
    return this.blocks.indexOf(e);
  }
  /**
   * Insert new Block into DOM
   *
   * @param {Block} block - Block to insert
   * @param {InsertPosition} position — insert position (if set, will use insertAdjacentElement)
   * @param {Block} target — Block related to position
   */
  insertToDOM(e, t, o) {
    t ? o.holder.insertAdjacentElement(t, e.holder) : this.workingArea.appendChild(e.holder), e.call(J.RENDERED);
  }
  /**
   * Composes Block event with passed type and details
   *
   * @param {string} type - event type
   * @param {object} detail - event detail
   */
  composeBlockEvent(e, t) {
    return new CustomEvent(e, {
      detail: t
    });
  }
}
const Bt = "block-removed", Tt = "block-added", Ji = "block-moved", Ct = "block-changed";
class Qi {
  constructor() {
    this.completed = Promise.resolve();
  }
  /**
   * Add new promise to queue
   *
   * @param operation - promise should be added to queue
   */
  add(e) {
    return new Promise((t, o) => {
      this.completed = this.completed.then(e).then(t).catch(o);
    });
  }
}
class es extends y {
  constructor() {
    super(...arguments), this._currentBlockIndex = -1, this._blocks = null;
  }
  /**
   * Returns current Block index
   *
   * @returns {number}
   */
  get currentBlockIndex() {
    return this._currentBlockIndex;
  }
  /**
   * Set current Block index and fire Block lifecycle callbacks
   *
   * @param {number} newIndex - index of Block to set as current
   */
  set currentBlockIndex(e) {
    this._currentBlockIndex = e;
  }
  /**
   * returns first Block
   *
   * @returns {Block}
   */
  get firstBlock() {
    return this._blocks[0];
  }
  /**
   * returns last Block
   *
   * @returns {Block}
   */
  get lastBlock() {
    return this._blocks[this._blocks.length - 1];
  }
  /**
   * Get current Block instance
   *
   * @returns {Block}
   */
  get currentBlock() {
    return this._blocks[this.currentBlockIndex];
  }
  /**
   * Set passed Block as a current
   *
   * @param block - block to set as a current
   */
  set currentBlock(e) {
    this.currentBlockIndex = this.getBlockIndex(e);
  }
  /**
   * Returns next Block instance
   *
   * @returns {Block|null}
   */
  get nextBlock() {
    return this.currentBlockIndex === this._blocks.length - 1 ? null : this._blocks[this.currentBlockIndex + 1];
  }
  /**
   * Return first Block with inputs after current Block
   *
   * @returns {Block | undefined}
   */
  get nextContentfulBlock() {
    return this.blocks.slice(this.currentBlockIndex + 1).find((t) => !!t.inputs.length);
  }
  /**
   * Return first Block with inputs before current Block
   *
   * @returns {Block | undefined}
   */
  get previousContentfulBlock() {
    return this.blocks.slice(0, this.currentBlockIndex).reverse().find((t) => !!t.inputs.length);
  }
  /**
   * Returns previous Block instance
   *
   * @returns {Block|null}
   */
  get previousBlock() {
    return this.currentBlockIndex === 0 ? null : this._blocks[this.currentBlockIndex - 1];
  }
  /**
   * Get array of Block instances
   *
   * @returns {Block[]} {@link Blocks#array}
   */
  get blocks() {
    return this._blocks.array;
  }
  /**
   * Check if each Block is empty
   *
   * @returns {boolean}
   */
  get isEditorEmpty() {
    return this.blocks.every((e) => e.isEmpty);
  }
  /**
   * Should be called after Editor.UI preparation
   * Define this._blocks property
   */
  prepare() {
    const e = new Xe(this.Editor.UI.nodes.redactor);
    this._blocks = new Proxy(e, {
      set: Xe.set,
      get: Xe.get
    }), this.listeners.on(
      document,
      "copy",
      (t) => this.Editor.BlockEvents.handleCommandC(t)
    );
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - Unbind event handlers from created Blocks
   *
   * if readOnly is false:
   *  - Bind event handlers to all existing Blocks
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Creates Block instance by tool name
   *
   * @param {object} options - block creation options
   * @param {string} options.tool - tools passed in editor config {@link EditorConfig#tools}
   * @param {string} [options.id] - unique id for this block
   * @param {BlockToolData} [options.data] - constructor params
   * @returns {Block}
   */
  composeBlock({
    tool: e,
    data: t = {},
    id: o = void 0,
    tunes: i = {}
  }) {
    const s = this.Editor.ReadOnly.isEnabled, r = this.Editor.Tools.blockTools.get(e), l = new D({
      id: o,
      data: t,
      tool: r,
      api: this.Editor.API,
      readOnly: s,
      tunesData: i
    }, this.eventsDispatcher);
    return s || window.requestIdleCallback(() => {
      this.bindBlockEvents(l);
    }, { timeout: 2e3 }), l;
  }
  /**
   * Insert new block into _blocks
   *
   * @param {object} options - insert options
   * @param {string} [options.id] - block's unique id
   * @param {string} [options.tool] - plugin name, by default method inserts the default block type
   * @param {object} [options.data] - plugin data
   * @param {number} [options.index] - index where to insert new Block
   * @param {boolean} [options.needToFocus] - flag shows if needed to update current Block index
   * @param {boolean} [options.replace] - flag shows if block by passed index should be replaced with inserted one
   * @returns {Block}
   */
  insert({
    id: e = void 0,
    tool: t = this.config.defaultBlock,
    data: o = {},
    index: i,
    needToFocus: s = !0,
    replace: r = !1,
    tunes: l = {}
  } = {}) {
    let a = i;
    a === void 0 && (a = this.currentBlockIndex + (r ? 0 : 1));
    const c = this.composeBlock({
      id: e,
      tool: t,
      data: o,
      tunes: l
    });
    return r && this.blockDidMutated(Bt, this.getBlockByIndex(a), {
      index: a
    }), this._blocks.insert(a, c, r), this.blockDidMutated(Tt, c, {
      index: a
    }), s ? this.currentBlockIndex = a : a <= this.currentBlockIndex && this.currentBlockIndex++, c;
  }
  /**
   * Inserts several blocks at once
   *
   * @param blocks - blocks to insert
   * @param index - index where to insert
   */
  insertMany(e, t = 0) {
    this._blocks.insertMany(e, t);
  }
  /**
   * Update Block data.
   *
   * Currently we don't have an 'update' method in the Tools API, so we just create a new block with the same id and type
   * Should not trigger 'block-removed' or 'block-added' events.
   *
   * If neither data nor tunes is provided, return the provided block instead.
   *
   * @param block - block to update
   * @param data - (optional) new data
   * @param tunes - (optional) tune data
   */
  async update(e, t, o) {
    if (!t && !o)
      return e;
    const i = await e.data, s = this.composeBlock({
      id: e.id,
      tool: e.name,
      data: Object.assign({}, i, t ?? {}),
      tunes: o ?? e.tunes
    }), r = this.getBlockIndex(e);
    return this._blocks.replace(r, s), this.blockDidMutated(Ct, s, {
      index: r
    }), s;
  }
  /**
   * Replace passed Block with the new one with specified Tool and data
   *
   * @param block - block to replace
   * @param newTool - new Tool name
   * @param data - new Tool data
   */
  replace(e, t, o) {
    const i = this.getBlockIndex(e);
    return this.insert({
      tool: t,
      data: o,
      index: i,
      replace: !0
    });
  }
  /**
   * Insert pasted content. Call onPaste callback after insert.
   *
   * @param {string} toolName - name of Tool to insert
   * @param {PasteEvent} pasteEvent - pasted data
   * @param {boolean} replace - should replace current block
   */
  paste(e, t, o = !1) {
    const i = this.insert({
      tool: e,
      replace: o
    });
    try {
      window.requestIdleCallback(() => {
        i.call(J.ON_PASTE, t);
      });
    } catch (s) {
      I(`${e}: onPaste callback call is failed`, "error", s);
    }
    return i;
  }
  /**
   * Insert new default block at passed index
   *
   * @param {number} index - index where Block should be inserted
   * @param {boolean} needToFocus - if true, updates current Block index
   *
   * TODO: Remove method and use insert() with index instead (?)
   * @returns {Block} inserted Block
   */
  insertDefaultBlockAtIndex(e, t = !1) {
    const o = this.composeBlock({ tool: this.config.defaultBlock });
    return this._blocks[e] = o, this.blockDidMutated(Tt, o, {
      index: e
    }), t ? this.currentBlockIndex = e : e <= this.currentBlockIndex && this.currentBlockIndex++, o;
  }
  /**
   * Always inserts at the end
   *
   * @returns {Block}
   */
  insertAtEnd() {
    return this.currentBlockIndex = this.blocks.length - 1, this.insert();
  }
  /**
   * Merge two blocks
   *
   * @param {Block} targetBlock - previous block will be append to this block
   * @param {Block} blockToMerge - block that will be merged with target block
   * @returns {Promise} - the sequence that can be continued
   */
  async mergeBlocks(e, t) {
    let o;
    if (e.name === t.name && e.mergeable) {
      const i = await t.data;
      if (V(i)) {
        console.error("Could not merge Block. Failed to extract original Block data.");
        return;
      }
      const [s] = ot([i], e.tool.sanitizeConfig);
      o = s;
    } else if (e.mergeable && _e(t, "export") && _e(e, "import")) {
      const i = await t.exportDataAsString(), s = q(i, e.tool.sanitizeConfig);
      o = wt(s, e.tool.conversionConfig);
    }
    o !== void 0 && (await e.mergeWith(o), this.removeBlock(t), this.currentBlockIndex = this._blocks.indexOf(e));
  }
  /**
   * Remove passed Block
   *
   * @param block - Block to remove
   * @param addLastBlock - if true, adds new default block at the end. @todo remove this logic and use event-bus instead
   */
  removeBlock(e, t = !0) {
    return new Promise((o) => {
      const i = this._blocks.indexOf(e);
      if (!this.validateIndex(i))
        throw new Error("Can't find a Block to remove");
      e.destroy(), this._blocks.remove(i), this.blockDidMutated(Bt, e, {
        index: i
      }), this.currentBlockIndex >= i && this.currentBlockIndex--, this.blocks.length ? i === 0 && (this.currentBlockIndex = 0) : (this.unsetCurrentBlock(), t && this.insert()), o();
    });
  }
  /**
   * Remove only selected Blocks
   * and returns first Block index where started removing...
   *
   * @returns {number|undefined}
   */
  removeSelectedBlocks() {
    let e;
    for (let t = this.blocks.length - 1; t >= 0; t--)
      this.blocks[t].selected && (this.removeBlock(this.blocks[t]), e = t);
    return e;
  }
  /**
   * Attention!
   * After removing insert the new default typed Block and focus on it
   * Removes all blocks
   */
  removeAllBlocks() {
    for (let e = this.blocks.length - 1; e >= 0; e--)
      this._blocks.remove(e);
    this.unsetCurrentBlock(), this.insert(), this.currentBlock.firstInput.focus();
  }
  /**
   * Split current Block
   * 1. Extract content from Caret position to the Block`s end
   * 2. Insert a new Block below current one with extracted content
   *
   * @returns {Block}
   */
  split() {
    const e = this.Editor.Caret.extractFragmentFromCaretPosition(), t = d.make("div");
    t.appendChild(e);
    const o = {
      text: d.isEmpty(t) ? "" : t.innerHTML
    };
    return this.insert({ data: o });
  }
  /**
   * Returns Block by passed index
   *
   * @param {number} index - index to get. -1 to get last
   * @returns {Block}
   */
  getBlockByIndex(e) {
    return e === -1 && (e = this._blocks.length - 1), this._blocks[e];
  }
  /**
   * Returns an index for passed Block
   *
   * @param block - block to find index
   */
  getBlockIndex(e) {
    return this._blocks.indexOf(e);
  }
  /**
   * Returns the Block by passed id
   *
   * @param id - id of block to get
   * @returns {Block}
   */
  getBlockById(e) {
    return this._blocks.array.find((t) => t.id === e);
  }
  /**
   * Get Block instance by html element
   *
   * @param {Node} element - html element to get Block by
   */
  getBlock(e) {
    d.isElement(e) || (e = e.parentNode);
    const t = this._blocks.nodes, o = e.closest(`.${D.CSS.wrapper}`), i = t.indexOf(o);
    if (i >= 0)
      return this._blocks[i];
  }
  /**
   * 1) Find first-level Block from passed child Node
   * 2) Mark it as current
   *
   * @param {Node} childNode - look ahead from this node.
   * @returns {Block | undefined} can return undefined in case when the passed child note is not a part of the current editor instance
   */
  setCurrentBlockByChildNode(e) {
    d.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${D.CSS.wrapper}`);
    if (!t)
      return;
    const o = t.closest(`.${this.Editor.UI.CSS.editorWrapper}`);
    if (o != null && o.isEqualNode(this.Editor.UI.nodes.wrapper))
      return this.currentBlockIndex = this._blocks.nodes.indexOf(t), this.currentBlock.updateCurrentInput(), this.currentBlock;
  }
  /**
   * Return block which contents passed node
   *
   * @param {Node} childNode - node to get Block by
   * @returns {Block}
   */
  getBlockByChildNode(e) {
    if (!e || !(e instanceof Node))
      return;
    d.isElement(e) || (e = e.parentNode);
    const t = e.closest(`.${D.CSS.wrapper}`);
    return this.blocks.find((o) => o.holder === t);
  }
  /**
   * Swap Blocks Position
   *
   * @param {number} fromIndex - index of first block
   * @param {number} toIndex - index of second block
   * @deprecated — use 'move' instead
   */
  swap(e, t) {
    this._blocks.swap(e, t), this.currentBlockIndex = t;
  }
  /**
   * Move a block to a new index
   *
   * @param {number} toIndex - index where to move Block
   * @param {number} fromIndex - index of Block to move
   */
  move(e, t = this.currentBlockIndex) {
    if (isNaN(e) || isNaN(t)) {
      I("Warning during 'move' call: incorrect indices provided.", "warn");
      return;
    }
    if (!this.validateIndex(e) || !this.validateIndex(t)) {
      I("Warning during 'move' call: indices cannot be lower than 0 or greater than the amount of blocks.", "warn");
      return;
    }
    this._blocks.move(e, t), this.currentBlockIndex = e, this.blockDidMutated(Ji, this.currentBlock, {
      fromIndex: t,
      toIndex: e
    });
  }
  /**
   * Converts passed Block to the new Tool
   * Uses Conversion Config
   *
   * @param blockToConvert - Block that should be converted
   * @param targetToolName - name of the Tool to convert to
   * @param blockDataOverrides - optional new Block data overrides
   */
  async convert(e, t, o) {
    if (!await e.save())
      throw new Error("Could not convert Block. Failed to extract original Block data.");
    const s = this.Editor.Tools.blockTools.get(t);
    if (!s)
      throw new Error(`Could not convert Block. Tool «${t}» not found.`);
    const r = await e.exportDataAsString(), l = q(
      r,
      s.sanitizeConfig
    );
    let a = wt(l, s.conversionConfig);
    return o && (a = Object.assign(a, o)), this.replace(e, s.name, a);
  }
  /**
   * Sets current Block Index -1 which means unknown
   * and clear highlights
   */
  unsetCurrentBlock() {
    this.currentBlockIndex = -1;
  }
  /**
   * Clears Editor
   *
   * @param {boolean} needToAddDefaultBlock - 1) in internal calls (for example, in api.blocks.render)
   *                                             we don't need to add an empty default block
   *                                        2) in api.blocks.clear we should add empty block
   */
  async clear(e = !1) {
    const t = new Qi();
    this.blocks.forEach((o) => {
      t.add(async () => {
        await this.removeBlock(o, !1);
      });
    }), await t.completed, this.unsetCurrentBlock(), e && this.insert(), this.Editor.UI.checkEmptiness();
  }
  /**
   * Cleans up all the block tools' resources
   * This is called when editor is destroyed
   */
  async destroy() {
    await Promise.all(this.blocks.map((e) => e.destroy()));
  }
  /**
   * Bind Block events
   *
   * @param {Block} block - Block to which event should be bound
   */
  bindBlockEvents(e) {
    const { BlockEvents: t } = this.Editor;
    this.readOnlyMutableListeners.on(e.holder, "keydown", (o) => {
      t.keydown(o);
    }), this.readOnlyMutableListeners.on(e.holder, "keyup", (o) => {
      t.keyup(o);
    }), this.readOnlyMutableListeners.on(e.holder, "dragover", (o) => {
      t.dragOver(o);
    }), this.readOnlyMutableListeners.on(e.holder, "dragleave", (o) => {
      t.dragLeave(o);
    }), e.on("didMutated", (o) => this.blockDidMutated(Ct, o, {
      index: this.getBlockIndex(o)
    }));
  }
  /**
   * Disable mutable handlers and bindings
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Enables all module handlers and bindings for all Blocks
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(
      document,
      "cut",
      (e) => this.Editor.BlockEvents.handleCommandX(e)
    ), this.blocks.forEach((e) => {
      this.bindBlockEvents(e);
    });
  }
  /**
   * Validates that the given index is not lower than 0 or higher than the amount of blocks
   *
   * @param {number} index - index of blocks array to validate
   * @returns {boolean}
   */
  validateIndex(e) {
    return !(e < 0 || e >= this._blocks.length);
  }
  /**
   * Block mutation callback
   *
   * @param mutationType - what happened with block
   * @param block - mutated block
   * @param detailData - additional data to pass with change event
   */
  blockDidMutated(e, t, o) {
    const i = new CustomEvent(e, {
      detail: {
        target: new G(t),
        ...o
      }
    });
    return this.eventsDispatcher.emit(Pt, {
      event: i
    }), t;
  }
}
class ts extends y {
  constructor() {
    super(...arguments), this.anyBlockSelectedCache = null, this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
  }
  /**
   * Sanitizer Config
   *
   * @returns {SanitizerConfig}
   */
  get sanitizerConfig() {
    return {
      p: {},
      h1: {},
      h2: {},
      h3: {},
      h4: {},
      h5: {},
      h6: {},
      ol: {},
      ul: {},
      li: {},
      br: !0,
      img: {
        src: !0,
        width: !0,
        height: !0
      },
      a: {
        href: !0
      },
      b: {},
      i: {},
      u: {}
    };
  }
  /**
   * Flag that identifies all Blocks selection
   *
   * @returns {boolean}
   */
  get allBlocksSelected() {
    const { BlockManager: e } = this.Editor;
    return e.blocks.every((t) => t.selected === !0);
  }
  /**
   * Set selected all blocks
   *
   * @param {boolean} state - state to set
   */
  set allBlocksSelected(e) {
    const { BlockManager: t } = this.Editor;
    t.blocks.forEach((o) => {
      o.selected = e;
    }), this.clearCache();
  }
  /**
   * Flag that identifies any Block selection
   *
   * @returns {boolean}
   */
  get anyBlockSelected() {
    const { BlockManager: e } = this.Editor;
    return this.anyBlockSelectedCache === null && (this.anyBlockSelectedCache = e.blocks.some((t) => t.selected === !0)), this.anyBlockSelectedCache;
  }
  /**
   * Return selected Blocks array
   *
   * @returns {Block[]}
   */
  get selectedBlocks() {
    return this.Editor.BlockManager.blocks.filter((e) => e.selected);
  }
  /**
   * Module Preparation
   * Registers Shortcuts CMD+A and CMD+C
   * to select all and copy them
   */
  prepare() {
    this.selection = new b(), he.add({
      name: "CMD+A",
      handler: (e) => {
        const { BlockManager: t, ReadOnly: o } = this.Editor;
        if (o.isEnabled) {
          e.preventDefault(), this.selectAllBlocks();
          return;
        }
        t.currentBlock && this.handleCommandA(e);
      },
      on: this.Editor.UI.nodes.redactor
    });
  }
  /**
   * Toggle read-only state
   *
   *  - Remove all ranges
   *  - Unselect all Blocks
   */
  toggleReadOnly() {
    b.get().removeAllRanges(), this.allBlocksSelected = !1;
  }
  /**
   * Remove selection of Block
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  unSelectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor;
    let o;
    isNaN(e) ? o = t.currentBlock : o = t.getBlockByIndex(e), o.selected = !1, this.clearCache();
  }
  /**
   * Clear selection from Blocks
   *
   * @param {Event} reason - event caused clear of selection
   * @param {boolean} restoreSelection - if true, restore saved selection
   */
  clearSelection(e, t = !1) {
    const { BlockManager: o, Caret: i, RectangleSelection: s } = this.Editor;
    this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1;
    const r = e && e instanceof KeyboardEvent, l = r && It(e.keyCode);
    if (this.anyBlockSelected && r && l && !b.isSelectionExists) {
      const a = o.removeSelectedBlocks();
      o.insertDefaultBlockAtIndex(a, !0), i.setToBlock(o.currentBlock), Oe(() => {
        const c = e.key;
        i.insertContentAtCaretPosition(c.length > 1 ? "" : c);
      }, 20)();
    }
    if (this.Editor.CrossBlockSelection.clear(e), !this.anyBlockSelected || s.isRectActivated()) {
      this.Editor.RectangleSelection.clearSelection();
      return;
    }
    t && this.selection.restore(), this.allBlocksSelected = !1;
  }
  /**
   * Reduce each Block and copy its content
   *
   * @param {ClipboardEvent} e - copy/cut event
   * @returns {Promise<void>}
   */
  copySelectedBlocks(e) {
    e.preventDefault();
    const t = d.make("div");
    this.selectedBlocks.forEach((s) => {
      const r = q(s.holder.innerHTML, this.sanitizerConfig), l = d.make("p");
      l.innerHTML = r, t.appendChild(l);
    });
    const o = Array.from(t.childNodes).map((s) => s.textContent).join(`

`), i = t.innerHTML;
    return e.clipboardData.setData("text/plain", o), e.clipboardData.setData("text/html", i), Promise.all(this.selectedBlocks.map((s) => s.save())).then((s) => {
      try {
        e.clipboardData.setData(this.Editor.Paste.MIME_TYPE, JSON.stringify(s));
      } catch {
      }
    });
  }
  /**
   * Select Block by its index
   *
   * @param {number?} index - Block index according to the BlockManager's indexes
   */
  selectBlockByIndex(e) {
    const { BlockManager: t } = this.Editor, o = t.getBlockByIndex(e);
    o !== void 0 && this.selectBlock(o);
  }
  /**
   * Select passed Block
   *
   * @param {Block} block - Block to select
   */
  selectBlock(e) {
    this.selection.save(), b.get().removeAllRanges(), e.selected = !0, this.clearCache(), this.Editor.InlineToolbar.close();
  }
  /**
   * Remove selection from passed Block
   *
   * @param {Block} block - Block to unselect
   */
  unselectBlock(e) {
    e.selected = !1, this.clearCache();
  }
  /**
   * Clear anyBlockSelected cache
   */
  clearCache() {
    this.anyBlockSelectedCache = null;
  }
  /**
   * Module destruction
   * De-registers Shortcut CMD+A
   */
  destroy() {
    he.remove(this.Editor.UI.nodes.redactor, "CMD+A");
  }
  /**
   * First CMD+A selects all input content by native behaviour,
   * next CMD+A keypress selects all blocks
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  handleCommandA(e) {
    if (this.Editor.RectangleSelection.clearSelection(), d.isNativeInput(e.target) && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    const t = this.Editor.BlockManager.getBlock(e.target), o = t.inputs;
    if (o.length > 1 && !this.readyToBlockSelection) {
      this.readyToBlockSelection = !0;
      return;
    }
    if (o.length === 1 && !this.needToSelectAll) {
      this.needToSelectAll = !0;
      return;
    }
    this.needToSelectAll ? (e.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1) : this.readyToBlockSelection && (e.preventDefault(), this.selectBlock(t), this.needToSelectAll = !0);
  }
  /**
   * Select All Blocks
   * Each Block has selected setter that makes Block copyable
   */
  selectAllBlocks() {
    this.selection.save(), b.get().removeAllRanges(), this.allBlocksSelected = !0, this.Editor.InlineToolbar.close();
  }
}
class Re extends y {
  /**
   * Allowed caret positions in input
   *
   * @static
   * @returns {{START: string, END: string, DEFAULT: string}}
   */
  get positions() {
    return {
      START: "start",
      END: "end",
      DEFAULT: "default"
    };
  }
  /**
   * Elements styles that can be useful for Caret Module
   */
  static get CSS() {
    return {
      shadowCaret: "cdx-shadow-caret"
    };
  }
  /**
   * Method gets Block instance and puts caret to the text node with offset
   * There two ways that method applies caret position:
   *   - first found text node: sets at the beginning, but you can pass an offset
   *   - last found text node: sets at the end of the node. Also, you can customize the behaviour
   *
   * @param {Block} block - Block class
   * @param {string} position - position where to set caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */
  setToBlock(e, t = this.positions.DEFAULT, o = 0) {
    var c;
    const { BlockManager: i, BlockSelection: s } = this.Editor;
    if (s.clearSelection(), !e.focusable) {
      (c = window.getSelection()) == null || c.removeAllRanges(), s.selectBlock(e), i.currentBlock = e;
      return;
    }
    let r;
    switch (t) {
      case this.positions.START:
        r = e.firstInput;
        break;
      case this.positions.END:
        r = e.lastInput;
        break;
      default:
        r = e.currentInput;
    }
    if (!r)
      return;
    const l = d.getDeepestNode(r, t === this.positions.END), a = d.getContentLength(l);
    switch (!0) {
      case t === this.positions.START:
        o = 0;
        break;
      case t === this.positions.END:
      case o > a:
        o = a;
        break;
    }
    this.set(l, o), i.setCurrentBlockByChildNode(e.holder), i.currentBlock.currentInput = r;
  }
  /**
   * Set caret to the current input of current Block.
   *
   * @param {HTMLElement} input - input where caret should be set
   * @param {string} position - position of the caret.
   *                            If default - leave default behaviour and apply offset if it's passed
   * @param {number} offset - caret offset regarding to the text node
   */
  setToInput(e, t = this.positions.DEFAULT, o = 0) {
    const { currentBlock: i } = this.Editor.BlockManager, s = d.getDeepestNode(e);
    switch (t) {
      case this.positions.START:
        this.set(s, 0);
        break;
      case this.positions.END:
        this.set(s, d.getContentLength(s));
        break;
      default:
        o && this.set(s, o);
    }
    i.currentInput = e;
  }
  /**
   * Creates Document Range and sets caret to the element with offset
   *
   * @param {HTMLElement} element - target node.
   * @param {number} offset - offset
   */
  set(e, t = 0) {
    const { top: i, bottom: s } = b.setCursor(e, t), { innerHeight: r } = window;
    i < 0 ? window.scrollBy(0, i - 30) : s > r && window.scrollBy(0, s - r + 30);
  }
  /**
   * Set Caret to the last Block
   * If last block is not empty, append another empty block
   */
  setToTheLastBlock() {
    const e = this.Editor.BlockManager.lastBlock;
    if (e)
      if (e.tool.isDefault && e.isEmpty)
        this.setToBlock(e);
      else {
        const t = this.Editor.BlockManager.insertAtEnd();
        this.setToBlock(t);
      }
  }
  /**
   * Extract content fragment of current Block from Caret position to the end of the Block
   */
  extractFragmentFromCaretPosition() {
    const e = b.get();
    if (e.rangeCount) {
      const t = e.getRangeAt(0), o = this.Editor.BlockManager.currentBlock.currentInput;
      if (t.deleteContents(), o)
        if (d.isNativeInput(o)) {
          const i = o, s = document.createDocumentFragment(), r = i.value.substring(0, i.selectionStart), l = i.value.substring(i.selectionStart);
          return s.textContent = l, i.value = r, s;
        } else {
          const i = t.cloneRange();
          return i.selectNodeContents(o), i.setStart(t.endContainer, t.endOffset), i.extractContents();
        }
    }
  }
  /**
   * Set's caret to the next Block or Tool`s input
   * Before moving caret, we should check if caret position is at the end of Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */
  navigateNext(e = !1) {
    const { BlockManager: t } = this.Editor, { currentBlock: o, nextBlock: i } = t;
    if (o === void 0)
      return !1;
    const { nextInput: s, currentInput: r } = o, l = r !== void 0 ? Ae(r) : void 0;
    let a = i;
    const c = e || l || !o.focusable;
    if (s && c)
      return this.setToInput(s, this.positions.START), !0;
    if (a === null) {
      if (o.tool.isDefault || !c)
        return !1;
      a = t.insertAtEnd();
    }
    return c ? (this.setToBlock(a, this.positions.START), !0) : !1;
  }
  /**
   * Set's caret to the previous Tool`s input or Block
   * Before moving caret, we should check if caret position is start of the Plugins node
   * Using {@link Dom#getDeepestNode} to get a last node and match with current selection
   *
   * @param {boolean} force - pass true to skip check for caret position
   */
  navigatePrevious(e = !1) {
    const { currentBlock: t, previousBlock: o } = this.Editor.BlockManager;
    if (!t)
      return !1;
    const { previousInput: i, currentInput: s } = t, r = s !== void 0 ? Me(s) : void 0, l = e || r || !t.focusable;
    return i && l ? (this.setToInput(i, this.positions.END), !0) : o !== null && l ? (this.setToBlock(o, this.positions.END), !0) : !1;
  }
  /**
   * Inserts shadow element after passed element where caret can be placed
   *
   * @param {Element} element - element after which shadow caret should be inserted
   */
  createShadow(e) {
    const t = document.createElement("span");
    t.classList.add(Re.CSS.shadowCaret), e.insertAdjacentElement("beforeend", t);
  }
  /**
   * Restores caret position
   *
   * @param {HTMLElement} element - element where caret should be restored
   */
  restoreCaret(e) {
    const t = e.querySelector(`.${Re.CSS.shadowCaret}`);
    if (!t)
      return;
    new b().expandToTag(t);
    const i = document.createRange();
    i.selectNode(t), i.extractContents();
  }
  /**
   * Inserts passed content at caret position
   *
   * @param {string} content - content to insert
   */
  insertContentAtCaretPosition(e) {
    const t = document.createDocumentFragment(), o = document.createElement("div"), i = b.get(), s = b.range;
    o.innerHTML = e, Array.from(o.childNodes).forEach((c) => t.appendChild(c)), t.childNodes.length === 0 && t.appendChild(new Text());
    const r = t.lastChild;
    s.deleteContents(), s.insertNode(t);
    const l = document.createRange(), a = r.nodeType === Node.TEXT_NODE ? r : r.firstChild;
    a !== null && a.textContent !== null && l.setStart(a, a.textContent.length), i.removeAllRanges(), i.addRange(l);
  }
}
class os extends y {
  constructor() {
    super(...arguments), this.onMouseUp = () => {
      this.listeners.off(document, "mouseover", this.onMouseOver), this.listeners.off(document, "mouseup", this.onMouseUp);
    }, this.onMouseOver = (e) => {
      const { BlockManager: t, BlockSelection: o } = this.Editor;
      if (e.relatedTarget === null && e.target === null)
        return;
      const i = t.getBlockByChildNode(e.relatedTarget) || this.lastSelectedBlock, s = t.getBlockByChildNode(e.target);
      if (!(!i || !s) && s !== i) {
        if (i === this.firstSelectedBlock) {
          b.get().removeAllRanges(), i.selected = !0, s.selected = !0, o.clearCache();
          return;
        }
        if (s === this.firstSelectedBlock) {
          i.selected = !1, s.selected = !1, o.clearCache();
          return;
        }
        this.Editor.InlineToolbar.close(), this.toggleBlocksSelectedState(i, s), this.lastSelectedBlock = s;
      }
    };
  }
  /**
   * Module preparation
   *
   * @returns {Promise}
   */
  async prepare() {
    this.listeners.on(document, "mousedown", (e) => {
      this.enableCrossBlockSelection(e);
    });
  }
  /**
   * Sets up listeners
   *
   * @param {MouseEvent} event - mouse down event
   */
  watchSelection(e) {
    if (e.button !== wo.LEFT)
      return;
    const { BlockManager: t } = this.Editor;
    this.firstSelectedBlock = t.getBlock(e.target), this.lastSelectedBlock = this.firstSelectedBlock, this.listeners.on(document, "mouseover", this.onMouseOver), this.listeners.on(document, "mouseup", this.onMouseUp);
  }
  /**
   * Return boolean is cross block selection started:
   * there should be at least 2 selected blocks
   */
  get isCrossBlockSelectionStarted() {
    return !!this.firstSelectedBlock && !!this.lastSelectedBlock && this.firstSelectedBlock !== this.lastSelectedBlock;
  }
  /**
   * Change selection state of the next Block
   * Used for CBS via Shift + arrow keys
   *
   * @param {boolean} next - if true, toggle next block. Previous otherwise
   */
  toggleBlockSelectedState(e = !0) {
    const { BlockManager: t, BlockSelection: o } = this.Editor;
    this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = t.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, o.clearCache(), b.get().removeAllRanges());
    const i = t.blocks.indexOf(this.lastSelectedBlock) + (e ? 1 : -1), s = t.blocks[i];
    s && (this.lastSelectedBlock.selected !== s.selected ? (s.selected = !0, o.clearCache()) : (this.lastSelectedBlock.selected = !1, o.clearCache()), this.lastSelectedBlock = s, this.Editor.InlineToolbar.close(), s.holder.scrollIntoView({
      block: "nearest"
    }));
  }
  /**
   * Clear saved state
   *
   * @param {Event} reason - event caused clear of selection
   */
  clear(e) {
    const { BlockManager: t, BlockSelection: o, Caret: i } = this.Editor, s = t.blocks.indexOf(this.firstSelectedBlock), r = t.blocks.indexOf(this.lastSelectedBlock);
    if (o.anyBlockSelected && s > -1 && r > -1 && e && e instanceof KeyboardEvent)
      switch (e.keyCode) {
        case w.DOWN:
        case w.RIGHT:
          i.setToBlock(t.blocks[Math.max(s, r)], i.positions.END);
          break;
        case w.UP:
        case w.LEFT:
          i.setToBlock(t.blocks[Math.min(s, r)], i.positions.START);
          break;
        default:
          i.setToBlock(t.blocks[Math.max(s, r)], i.positions.END);
      }
    this.firstSelectedBlock = this.lastSelectedBlock = null;
  }
  /**
   * Enables Cross Block Selection
   *
   * @param {MouseEvent} event - mouse down event
   */
  enableCrossBlockSelection(e) {
    const { UI: t } = this.Editor;
    b.isCollapsed || this.Editor.BlockSelection.clearSelection(e), t.nodes.redactor.contains(e.target) ? this.watchSelection(e) : this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * Change blocks selection state between passed two blocks.
   *
   * @param {Block} firstBlock - first block in range
   * @param {Block} lastBlock - last block in range
   */
  toggleBlocksSelectedState(e, t) {
    const { BlockManager: o, BlockSelection: i } = this.Editor, s = o.blocks.indexOf(e), r = o.blocks.indexOf(t), l = e.selected !== t.selected;
    for (let a = Math.min(s, r); a <= Math.max(s, r); a++) {
      const c = o.blocks[a];
      c !== this.firstSelectedBlock && c !== (l ? e : t) && (o.blocks[a].selected = !o.blocks[a].selected, i.clearCache());
    }
  }
}
class is extends y {
  constructor() {
    super(...arguments), this.isStartedAtEditor = !1;
  }
  /**
   * Toggle read-only state
   *
   * if state is true:
   *  - disable all drag-n-drop event handlers
   *
   * if state is false:
   *  - restore drag-n-drop event handlers
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : this.enableModuleBindings();
  }
  /**
   * Add drag events listeners to editor zone
   */
  enableModuleBindings() {
    const { UI: e } = this.Editor;
    this.readOnlyMutableListeners.on(e.nodes.holder, "drop", async (t) => {
      await this.processDrop(t);
    }, !0), this.readOnlyMutableListeners.on(e.nodes.holder, "dragstart", () => {
      this.processDragStart();
    }), this.readOnlyMutableListeners.on(e.nodes.holder, "dragover", (t) => {
      this.processDragOver(t);
    }, !0);
  }
  /**
   * Unbind drag-n-drop event handlers
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Handle drop event
   *
   * @param {DragEvent} dropEvent - drop event
   */
  async processDrop(e) {
    const {
      BlockManager: t,
      Paste: o,
      Caret: i
    } = this.Editor;
    e.preventDefault(), t.blocks.forEach((r) => {
      r.dropTarget = !1;
    }), b.isAtEditor && !b.isCollapsed && this.isStartedAtEditor && document.execCommand("delete"), this.isStartedAtEditor = !1;
    const s = t.setCurrentBlockByChildNode(e.target);
    if (s)
      this.Editor.Caret.setToBlock(s, i.positions.END);
    else {
      const r = t.setCurrentBlockByChildNode(t.lastBlock.holder);
      this.Editor.Caret.setToBlock(r, i.positions.END);
    }
    await o.processDataTransfer(e.dataTransfer, !0);
  }
  /**
   * Handle drag start event
   */
  processDragStart() {
    b.isAtEditor && !b.isCollapsed && (this.isStartedAtEditor = !0), this.Editor.InlineToolbar.close();
  }
  /**
   * @param {DragEvent} dragEvent - drag event
   */
  processDragOver(e) {
    e.preventDefault();
  }
}
const ss = 180, ns = 400;
class rs extends y {
  /**
   * Prepare the module
   *
   * @param options - options used by the modification observer module
   * @param options.config - Editor configuration object
   * @param options.eventsDispatcher - common Editor event bus
   */
  constructor({ config: e, eventsDispatcher: t }) {
    super({
      config: e,
      eventsDispatcher: t
    }), this.disabled = !1, this.batchingTimeout = null, this.batchingOnChangeQueue = /* @__PURE__ */ new Map(), this.batchTime = ns, this.mutationObserver = new MutationObserver((o) => {
      this.redactorChanged(o);
    }), this.eventsDispatcher.on(Pt, (o) => {
      this.particularBlockChanged(o.event);
    }), this.eventsDispatcher.on(Dt, () => {
      this.disable();
    }), this.eventsDispatcher.on(Rt, () => {
      this.enable();
    });
  }
  /**
   * Enables onChange event
   */
  enable() {
    this.mutationObserver.observe(
      this.Editor.UI.nodes.redactor,
      {
        childList: !0,
        subtree: !0,
        characterData: !0,
        attributes: !0
      }
    ), this.disabled = !1;
  }
  /**
   * Disables onChange event
   */
  disable() {
    this.mutationObserver.disconnect(), this.disabled = !0;
  }
  /**
   * Call onChange event passed to Editor.js configuration
   *
   * @param event - some of our custom change events
   */
  particularBlockChanged(e) {
    this.disabled || !O(this.config.onChange) || (this.batchingOnChangeQueue.set(`block:${e.detail.target.id}:event:${e.type}`, e), this.batchingTimeout && clearTimeout(this.batchingTimeout), this.batchingTimeout = setTimeout(() => {
      let t;
      this.batchingOnChangeQueue.size === 1 ? t = this.batchingOnChangeQueue.values().next().value : t = Array.from(this.batchingOnChangeQueue.values()), this.config.onChange && this.config.onChange(this.Editor.API.methods, t), this.batchingOnChangeQueue.clear();
    }, this.batchTime));
  }
  /**
   * Fired on every blocks wrapper dom change
   *
   * @param mutations - mutations happened
   */
  redactorChanged(e) {
    this.eventsDispatcher.emit(Je, {
      mutations: e
    });
  }
}
const ro = class lo extends y {
  constructor() {
    super(...arguments), this.MIME_TYPE = "application/x-editor-js", this.toolsTags = {}, this.tagsByTool = {}, this.toolsPatterns = [], this.toolsFiles = {}, this.exceptionList = [], this.processTool = (e) => {
      try {
        const t = e.create({}, {}, !1);
        if (e.pasteConfig === !1) {
          this.exceptionList.push(e.name);
          return;
        }
        if (!O(t.onPaste))
          return;
        this.getTagsConfig(e), this.getFilesConfig(e), this.getPatternsConfig(e);
      } catch (t) {
        I(
          `Paste handling for «${e.name}» Tool hasn't been set up because of the error`,
          "warn",
          t
        );
      }
    }, this.handlePasteEvent = async (e) => {
      const { BlockManager: t, Toolbar: o } = this.Editor, i = t.setCurrentBlockByChildNode(e.target);
      !i || this.isNativeBehaviour(e.target) && !e.clipboardData.types.includes("Files") || i && this.exceptionList.includes(i.name) || (e.preventDefault(), this.processDataTransfer(e.clipboardData), o.close());
    };
  }
  /**
   * Set onPaste callback and collect tools` paste configurations
   */
  async prepare() {
    this.processTools();
  }
  /**
   * Set read-only state
   *
   * @param {boolean} readOnlyEnabled - read only flag value
   */
  toggleReadOnly(e) {
    e ? this.unsetCallback() : this.setCallback();
  }
  /**
   * Handle pasted or dropped data transfer object
   *
   * @param {DataTransfer} dataTransfer - pasted or dropped data transfer object
   * @param {boolean} isDragNDrop - true if data transfer comes from drag'n'drop events
   */
  async processDataTransfer(e, t = !1) {
    const { Tools: o } = this.Editor, i = e.types;
    if ((i.includes ? i.includes("Files") : i.contains("Files")) && !V(this.toolsFiles)) {
      await this.processFiles(e.files);
      return;
    }
    const r = e.getData(this.MIME_TYPE), l = e.getData("text/plain");
    let a = e.getData("text/html");
    if (r)
      try {
        this.insertEditorJSData(JSON.parse(r));
        return;
      } catch {
      }
    t && l.trim() && a.trim() && (a = "<p>" + (a.trim() ? a : l) + "</p>");
    const c = Object.keys(this.toolsTags).reduce((p, g) => (p[g.toLowerCase()] = this.toolsTags[g].sanitizationConfig ?? {}, p), {}), u = Object.assign({}, c, o.getAllInlineToolsSanitizeConfig(), { br: {} }), h = q(a, u);
    !h.trim() || h.trim() === l || !d.isHTMLString(h) ? await this.processText(l) : await this.processText(h, !0);
  }
  /**
   * Process pasted text and divide them into Blocks
   *
   * @param {string} data - text to process. Can be HTML or plain.
   * @param {boolean} isHTML - if passed string is HTML, this parameter should be true
   */
  async processText(e, t = !1) {
    const { Caret: o, BlockManager: i } = this.Editor, s = t ? this.processHTML(e) : this.processPlain(e);
    if (!s.length)
      return;
    if (s.length === 1) {
      s[0].isBlock ? this.processSingleBlock(s.pop()) : this.processInlinePaste(s.pop());
      return;
    }
    const l = i.currentBlock && i.currentBlock.tool.isDefault && i.currentBlock.isEmpty;
    s.map(
      async (a, c) => this.insertBlock(a, c === 0 && l)
    ), i.currentBlock && o.setToBlock(i.currentBlock, o.positions.END);
  }
  /**
   * Set onPaste callback handler
   */
  setCallback() {
    this.listeners.on(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Unset onPaste callback handler
   */
  unsetCallback() {
    this.listeners.off(this.Editor.UI.nodes.holder, "paste", this.handlePasteEvent);
  }
  /**
   * Get and process tool`s paste configs
   */
  processTools() {
    const e = this.Editor.Tools.blockTools;
    Array.from(e.values()).forEach(this.processTool);
  }
  /**
   * Get tags name list from either tag name or sanitization config.
   *
   * @param {string | object} tagOrSanitizeConfig - tag name or sanitize config object.
   * @returns {string[]} array of tags.
   */
  collectTagNames(e) {
    return Q(e) ? [e] : R(e) ? Object.keys(e) : [];
  }
  /**
   * Get tags to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getTagsConfig(e) {
    if (e.pasteConfig === !1)
      return;
    const t = e.pasteConfig.tags || [], o = [];
    t.forEach((i) => {
      const s = this.collectTagNames(i);
      o.push(...s), s.forEach((r) => {
        if (Object.prototype.hasOwnProperty.call(this.toolsTags, r)) {
          I(
            `Paste handler for «${e.name}» Tool on «${r}» tag is skipped because it is already used by «${this.toolsTags[r].tool.name}» Tool.`,
            "warn"
          );
          return;
        }
        const l = R(i) ? i[r] : null;
        this.toolsTags[r.toUpperCase()] = {
          tool: e,
          sanitizationConfig: l
        };
      });
    }), this.tagsByTool[e.name] = o.map((i) => i.toUpperCase());
  }
  /**
   * Get files` types and extensions to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getFilesConfig(e) {
    if (e.pasteConfig === !1)
      return;
    const { files: t = {} } = e.pasteConfig;
    let { extensions: o, mimeTypes: i } = t;
    !o && !i || (o && !Array.isArray(o) && (I(`«extensions» property of the onDrop config for «${e.name}» Tool should be an array`), o = []), i && !Array.isArray(i) && (I(`«mimeTypes» property of the onDrop config for «${e.name}» Tool should be an array`), i = []), i && (i = i.filter((s) => To(s) ? !0 : (I(`MIME type value «${s}» for the «${e.name}» Tool is not a valid MIME type`, "warn"), !1))), this.toolsFiles[e.name] = {
      extensions: o || [],
      mimeTypes: i || []
    });
  }
  /**
   * Get RegExp patterns to substitute by Tool
   *
   * @param tool - BlockTool object
   */
  getPatternsConfig(e) {
    e.pasteConfig === !1 || !e.pasteConfig.patterns || V(e.pasteConfig.patterns) || Object.entries(e.pasteConfig.patterns).forEach(([t, o]) => {
      o instanceof RegExp || I(
        `Pattern ${o} for «${e.name}» Tool is skipped because it should be a Regexp instance.`,
        "warn"
      ), this.toolsPatterns.push({
        key: t,
        pattern: o,
        tool: e
      });
    });
  }
  /**
   * Check if browser behavior suits better
   *
   * @param {EventTarget} element - element where content has been pasted
   * @returns {boolean}
   */
  isNativeBehaviour(e) {
    return d.isNativeInput(e);
  }
  /**
   * Get files from data transfer object and insert related Tools
   *
   * @param {FileList} items - pasted or dropped items
   */
  async processFiles(e) {
    const { BlockManager: t } = this.Editor;
    let o;
    o = await Promise.all(
      Array.from(e).map((r) => this.processFile(r))
    ), o = o.filter((r) => !!r);
    const s = t.currentBlock.tool.isDefault && t.currentBlock.isEmpty;
    o.forEach(
      (r, l) => {
        t.paste(r.type, r.event, l === 0 && s);
      }
    );
  }
  /**
   * Get information about file and find Tool to handle it
   *
   * @param {File} file - file to process
   */
  async processFile(e) {
    const t = Bo(e), o = Object.entries(this.toolsFiles).find(([r, { mimeTypes: l, extensions: a }]) => {
      const [c, u] = e.type.split("/"), h = a.find((g) => g.toLowerCase() === t.toLowerCase()), p = l.find((g) => {
        const [f, k] = g.split("/");
        return f === c && (k === u || k === "*");
      });
      return !!h || !!p;
    });
    if (!o)
      return;
    const [i] = o;
    return {
      event: this.composePasteEvent("file", {
        file: e
      }),
      type: i
    };
  }
  /**
   * Split HTML string to blocks and return it as array of Block data
   *
   * @param {string} innerHTML - html string to process
   * @returns {PasteData[]}
   */
  processHTML(e) {
    const { Tools: t } = this.Editor, o = d.make("DIV");
    return o.innerHTML = e, this.getNodes(o).map((s) => {
      let r, l = t.defaultTool, a = !1;
      switch (s.nodeType) {
        case Node.DOCUMENT_FRAGMENT_NODE:
          r = d.make("div"), r.appendChild(s);
          break;
        case Node.ELEMENT_NODE:
          r = s, a = !0, this.toolsTags[r.tagName] && (l = this.toolsTags[r.tagName].tool);
          break;
      }
      const { tags: c } = l.pasteConfig || { tags: [] }, u = c.reduce((g, f) => (this.collectTagNames(f).forEach((C) => {
        const S = R(f) ? f[C] : null;
        g[C.toLowerCase()] = S || {};
      }), g), {}), h = Object.assign({}, u, l.baseSanitizeConfig);
      if (r.tagName.toLowerCase() === "table") {
        const g = q(r.outerHTML, h);
        r = d.make("div", void 0, {
          innerHTML: g
        }).firstChild;
      } else
        r.innerHTML = q(r.innerHTML, h);
      const p = this.composePasteEvent("tag", {
        data: r
      });
      return {
        content: r,
        isBlock: a,
        tool: l.name,
        event: p
      };
    }).filter((s) => {
      const r = d.isEmpty(s.content), l = d.isSingleTag(s.content);
      return !r || l;
    });
  }
  /**
   * Split plain text by new line symbols and return it as array of Block data
   *
   * @param {string} plain - string to process
   * @returns {PasteData[]}
   */
  processPlain(e) {
    const { defaultBlock: t } = this.config;
    if (!e)
      return [];
    const o = t;
    return e.split(/\r?\n/).filter((i) => i.trim()).map((i) => {
      const s = d.make("div");
      s.textContent = i;
      const r = this.composePasteEvent("tag", {
        data: s
      });
      return {
        content: s,
        tool: o,
        isBlock: !1,
        event: r
      };
    });
  }
  /**
   * Process paste of single Block tool content
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processSingleBlock(e) {
    const { Caret: t, BlockManager: o } = this.Editor, { currentBlock: i } = o;
    if (!i || e.tool !== i.name || !d.containsOnlyInlineElements(e.content.innerHTML)) {
      this.insertBlock(e, (i == null ? void 0 : i.tool.isDefault) && i.isEmpty);
      return;
    }
    t.insertContentAtCaretPosition(e.content.innerHTML);
  }
  /**
   * Process paste to single Block:
   * 1. Find patterns` matches
   * 2. Insert new block if it is not the same type as current one
   * 3. Just insert text if there is no substitutions
   *
   * @param {PasteData} dataToInsert - data of Block to insert
   */
  async processInlinePaste(e) {
    const { BlockManager: t, Caret: o } = this.Editor, { content: i } = e;
    if (t.currentBlock && t.currentBlock.tool.isDefault && i.textContent.length < lo.PATTERN_PROCESSING_MAX_LENGTH) {
      const r = await this.processPattern(i.textContent);
      if (r) {
        const l = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty, a = t.paste(r.tool, r.event, l);
        o.setToBlock(a, o.positions.END);
        return;
      }
    }
    if (t.currentBlock && t.currentBlock.currentInput) {
      const r = t.currentBlock.tool.baseSanitizeConfig;
      document.execCommand(
        "insertHTML",
        !1,
        q(i.innerHTML, r)
      );
    } else
      this.insertBlock(e);
  }
  /**
   * Get patterns` matches
   *
   * @param {string} text - text to process
   * @returns {Promise<{event: PasteEvent, tool: string}>}
   */
  async processPattern(e) {
    const t = this.toolsPatterns.find((i) => {
      const s = i.pattern.exec(e);
      return s ? e === s.shift() : !1;
    });
    return t ? {
      event: this.composePasteEvent("pattern", {
        key: t.key,
        data: e
      }),
      tool: t.tool.name
    } : void 0;
  }
  /**
   * Insert pasted Block content to Editor
   *
   * @param {PasteData} data - data to insert
   * @param {boolean} canReplaceCurrentBlock - if true and is current Block is empty, will replace current Block
   * @returns {void}
   */
  insertBlock(e, t = !1) {
    const { BlockManager: o, Caret: i } = this.Editor, { currentBlock: s } = o;
    let r;
    if (t && s && s.isEmpty) {
      r = o.paste(e.tool, e.event, !0), i.setToBlock(r, i.positions.END);
      return;
    }
    r = o.paste(e.tool, e.event), i.setToBlock(r, i.positions.END);
  }
  /**
   * Insert data passed as application/x-editor-js JSON
   *
   * @param {Array} blocks — Blocks' data to insert
   * @returns {void}
   */
  insertEditorJSData(e) {
    const { BlockManager: t, Caret: o, Tools: i } = this.Editor;
    ot(
      e,
      (r) => i.blockTools.get(r).sanitizeConfig
    ).forEach(({ tool: r, data: l }, a) => {
      let c = !1;
      a === 0 && (c = t.currentBlock && t.currentBlock.tool.isDefault && t.currentBlock.isEmpty);
      const u = t.insert({
        tool: r,
        data: l,
        replace: c
      });
      o.setToBlock(u, o.positions.END);
    });
  }
  /**
   * Fetch nodes from Element node
   *
   * @param {Node} node - current node
   * @param {Node[]} nodes - processed nodes
   * @param {Node} destNode - destination node
   */
  processElementNode(e, t, o) {
    const i = Object.keys(this.toolsTags), s = e, { tool: r } = this.toolsTags[s.tagName] || {}, l = this.tagsByTool[r == null ? void 0 : r.name] || [], a = i.includes(s.tagName), c = d.blockElements.includes(s.tagName.toLowerCase()), u = Array.from(s.children).some(
      ({ tagName: p }) => i.includes(p) && !l.includes(p)
    ), h = Array.from(s.children).some(
      ({ tagName: p }) => d.blockElements.includes(p.toLowerCase())
    );
    if (!c && !a && !u)
      return o.appendChild(s), [...t, o];
    if (a && !u || c && !h && !u)
      return [...t, o, s];
  }
  /**
   * Recursively divide HTML string to two types of nodes:
   * 1. Block element
   * 2. Document Fragments contained text and markup tags like a, b, i etc.
   *
   * @param {Node} wrapper - wrapper of paster HTML content
   * @returns {Node[]}
   */
  getNodes(e) {
    const t = Array.from(e.childNodes);
    let o;
    const i = (s, r) => {
      if (d.isEmpty(r) && !d.isSingleTag(r))
        return s;
      const l = s[s.length - 1];
      let a = new DocumentFragment();
      switch (l && d.isFragment(l) && (a = s.pop()), r.nodeType) {
        case Node.ELEMENT_NODE:
          if (o = this.processElementNode(r, s, a), o)
            return o;
          break;
        case Node.TEXT_NODE:
          return a.appendChild(r), [...s, a];
        default:
          return [...s, a];
      }
      return [...s, ...Array.from(r.childNodes).reduce(i, [])];
    };
    return t.reduce(i, []);
  }
  /**
   * Compose paste event with passed type and detail
   *
   * @param {string} type - event type
   * @param {PasteEventDetail} detail - event detail
   */
  composePasteEvent(e, t) {
    return new CustomEvent(e, {
      detail: t
    });
  }
};
ro.PATTERN_PROCESSING_MAX_LENGTH = 450;
let ls = ro;
class as extends y {
  constructor() {
    super(...arguments), this.toolsDontSupportReadOnly = [], this.readOnlyEnabled = !1;
  }
  /**
   * Returns state of read only mode
   */
  get isEnabled() {
    return this.readOnlyEnabled;
  }
  /**
   * Set initial state
   */
  async prepare() {
    const { Tools: e } = this.Editor, { blockTools: t } = e, o = [];
    Array.from(t.entries()).forEach(([i, s]) => {
      s.isReadOnlySupported || o.push(i);
    }), this.toolsDontSupportReadOnly = o, this.config.readOnly && o.length > 0 && this.throwCriticalError(), this.toggle(this.config.readOnly, !0);
  }
  /**
   * Set read-only mode or toggle current state
   * Call all Modules `toggleReadOnly` method and re-render Editor
   *
   * @param state - (optional) read-only state or toggle
   * @param isInitial - (optional) true when editor is initializing
   */
  async toggle(e = !this.readOnlyEnabled, t = !1) {
    e && this.toolsDontSupportReadOnly.length > 0 && this.throwCriticalError();
    const o = this.readOnlyEnabled;
    this.readOnlyEnabled = e;
    for (const s in this.Editor)
      this.Editor[s].toggleReadOnly && this.Editor[s].toggleReadOnly(e);
    if (o === e)
      return this.readOnlyEnabled;
    if (t)
      return this.readOnlyEnabled;
    this.Editor.ModificationsObserver.disable();
    const i = await this.Editor.Saver.save();
    return await this.Editor.BlockManager.clear(), await this.Editor.Renderer.render(i.blocks), this.Editor.ModificationsObserver.enable(), this.readOnlyEnabled;
  }
  /**
   * Throws an error about tools which don't support read-only mode
   */
  throwCriticalError() {
    throw new Nt(
      `To enable read-only mode all connected tools should support it. Tools ${this.toolsDontSupportReadOnly.join(", ")} don't support read-only mode.`
    );
  }
}
class xe extends y {
  constructor() {
    super(...arguments), this.isRectSelectionActivated = !1, this.SCROLL_SPEED = 3, this.HEIGHT_OF_SCROLL_ZONE = 40, this.BOTTOM_SCROLL_ZONE = 1, this.TOP_SCROLL_ZONE = 2, this.MAIN_MOUSE_BUTTON = 0, this.mousedown = !1, this.isScrolling = !1, this.inScrollZone = null, this.startX = 0, this.startY = 0, this.mouseX = 0, this.mouseY = 0, this.stackOfSelected = [], this.listenerIds = [];
  }
  /**
   * CSS classes for the Block
   *
   * @returns {{wrapper: string, content: string}}
   */
  static get CSS() {
    return {
      overlay: "codex-editor-overlay",
      overlayContainer: "codex-editor-overlay__container",
      rect: "codex-editor-overlay__rectangle",
      topScrollZone: "codex-editor-overlay__scroll-zone--top",
      bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
    };
  }
  /**
   * Module Preparation
   * Creating rect and hang handlers
   */
  prepare() {
    this.enableModuleBindings();
  }
  /**
   * Init rect params
   *
   * @param {number} pageX - X coord of mouse
   * @param {number} pageY - Y coord of mouse
   */
  startSelection(e, t) {
    const o = document.elementFromPoint(e - window.pageXOffset, t - window.pageYOffset);
    o.closest(`.${this.Editor.Toolbar.CSS.toolbar}`) || (this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = []);
    const s = [
      `.${D.CSS.content}`,
      `.${this.Editor.Toolbar.CSS.toolbar}`,
      `.${this.Editor.InlineToolbar.CSS.inlineToolbar}`
    ], r = o.closest("." + this.Editor.UI.CSS.editorWrapper), l = s.some((a) => !!o.closest(a));
    !r || l || (this.mousedown = !0, this.startX = e, this.startY = t);
  }
  /**
   * Clear all params to end selection
   */
  endSelection() {
    this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
  }
  /**
   * is RectSelection Activated
   */
  isRectActivated() {
    return this.isRectSelectionActivated;
  }
  /**
   * Mark that selection is end
   */
  clearSelection() {
    this.isRectSelectionActivated = !1;
  }
  /**
   * Sets Module necessary event handlers
   */
  enableModuleBindings() {
    const { container: e } = this.genHTML();
    this.listeners.on(e, "mousedown", (t) => {
      this.processMouseDown(t);
    }, !1), this.listeners.on(document.body, "mousemove", Ve((t) => {
      this.processMouseMove(t);
    }, 10), {
      passive: !0
    }), this.listeners.on(document.body, "mouseleave", () => {
      this.processMouseLeave();
    }), this.listeners.on(window, "scroll", Ve((t) => {
      this.processScroll(t);
    }, 10), {
      passive: !0
    }), this.listeners.on(document.body, "mouseup", () => {
      this.processMouseUp();
    }, !1);
  }
  /**
   * Handle mouse down events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseDown(e) {
    if (e.button !== this.MAIN_MOUSE_BUTTON)
      return;
    e.target.closest(d.allInputsSelector) !== null || this.startSelection(e.pageX, e.pageY);
  }
  /**
   * Handle mouse move events
   *
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processMouseMove(e) {
    this.changingRectangle(e), this.scrollByZones(e.clientY);
  }
  /**
   * Handle mouse leave
   */
  processMouseLeave() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * @param {MouseEvent} mouseEvent - mouse event payload
   */
  processScroll(e) {
    this.changingRectangle(e);
  }
  /**
   * Handle mouse up
   */
  processMouseUp() {
    this.clearSelection(), this.endSelection();
  }
  /**
   * Scroll If mouse in scroll zone
   *
   * @param {number} clientY - Y coord of mouse
   */
  scrollByZones(e) {
    if (this.inScrollZone = null, e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - e <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), !this.inScrollZone) {
      this.isScrolling = !1;
      return;
    }
    this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0);
  }
  /**
   * Generates required HTML elements
   *
   * @returns {Object<string, Element>}
   */
  genHTML() {
    const { UI: e } = this.Editor, t = e.nodes.holder.querySelector("." + e.CSS.editorWrapper), o = d.make("div", xe.CSS.overlay, {}), i = d.make("div", xe.CSS.overlayContainer, {}), s = d.make("div", xe.CSS.rect, {});
    return i.appendChild(s), o.appendChild(i), t.appendChild(o), this.overlayRectangle = s, {
      container: t,
      overlay: o
    };
  }
  /**
   * Activates scrolling if blockSelection is active and mouse is in scroll zone
   *
   * @param {number} speed - speed of scrolling
   */
  scrollVertical(e) {
    if (!(this.inScrollZone && this.mousedown))
      return;
    const t = window.pageYOffset;
    window.scrollBy(0, e), this.mouseY += window.pageYOffset - t, setTimeout(() => {
      this.scrollVertical(e);
    }, 0);
  }
  /**
   * Handles the change in the rectangle and its effect
   *
   * @param {MouseEvent} event - mouse event
   */
  changingRectangle(e) {
    if (!this.mousedown)
      return;
    e.pageY !== void 0 && (this.mouseX = e.pageX, this.mouseY = e.pageY);
    const { rightPos: t, leftPos: o, index: i } = this.genInfoForMouseSelection(), s = this.startX > t && this.mouseX > t, r = this.startX < o && this.mouseX < o;
    this.rectCrossesBlocks = !(s || r), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), this.Editor.Toolbar.close(), i !== void 0 && (this.trySelectNextBlock(i), this.inverseSelection(), b.get().removeAllRanges());
  }
  /**
   * Shrink rect to singular point
   */
  shrinkRectangleToPoint() {
    this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`;
  }
  /**
   * Select or unselect all of blocks in array if rect is out or in selectable area
   */
  inverseSelection() {
    const t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]).selected;
    if (this.rectCrossesBlocks && !t)
      for (const o of this.stackOfSelected)
        this.Editor.BlockSelection.selectBlockByIndex(o);
    if (!this.rectCrossesBlocks && t)
      for (const o of this.stackOfSelected)
        this.Editor.BlockSelection.unSelectBlockByIndex(o);
  }
  /**
   * Updates size of rectangle
   */
  updateRectangleSize() {
    this.mouseY >= this.startY ? (this.overlayRectangle.style.top = `${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.bottom = `calc(100% - ${this.mouseY - window.pageYOffset}px`) : (this.overlayRectangle.style.bottom = `calc(100% - ${this.startY - window.pageYOffset}px`, this.overlayRectangle.style.top = `${this.mouseY - window.pageYOffset}px`), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = `${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.right = `calc(100% - ${this.mouseX - window.pageXOffset}px`) : (this.overlayRectangle.style.right = `calc(100% - ${this.startX - window.pageXOffset}px`, this.overlayRectangle.style.left = `${this.mouseX - window.pageXOffset}px`);
  }
  /**
   * Collects information needed to determine the behavior of the rectangle
   *
   * @returns {object} index - index next Block, leftPos - start of left border of Block, rightPos - right border
   */
  genInfoForMouseSelection() {
    const t = document.body.offsetWidth / 2, o = this.mouseY - window.pageYOffset, i = document.elementFromPoint(t, o), s = this.Editor.BlockManager.getBlockByChildNode(i);
    let r;
    s !== void 0 && (r = this.Editor.BlockManager.blocks.findIndex((h) => h.holder === s.holder));
    const l = this.Editor.BlockManager.lastBlock.holder.querySelector("." + D.CSS.content), a = Number.parseInt(window.getComputedStyle(l).width, 10) / 2, c = t - a, u = t + a;
    return {
      index: r,
      leftPos: c,
      rightPos: u
    };
  }
  /**
   * Select block with index index
   *
   * @param index - index of block in redactor
   */
  addBlockInSelection(e) {
    this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(e), this.stackOfSelected.push(e);
  }
  /**
   * Adds a block to the selection and determines which blocks should be selected
   *
   * @param {object} index - index of new block in the reactor
   */
  trySelectNextBlock(e) {
    const t = this.stackOfSelected[this.stackOfSelected.length - 1] === e, o = this.stackOfSelected.length, i = 1, s = -1, r = 0;
    if (t)
      return;
    const l = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0;
    let a = r;
    o > 1 && (a = l ? i : s);
    const c = e > this.stackOfSelected[o - 1] && a === i, u = e < this.stackOfSelected[o - 1] && a === s, p = !(c || u || a === r);
    if (!p && (e > this.stackOfSelected[o - 1] || this.stackOfSelected[o - 1] === void 0)) {
      let k = this.stackOfSelected[o - 1] + 1 || e;
      for (k; k <= e; k++)
        this.addBlockInSelection(k);
      return;
    }
    if (!p && e < this.stackOfSelected[o - 1]) {
      for (let k = this.stackOfSelected[o - 1] - 1; k >= e; k--)
        this.addBlockInSelection(k);
      return;
    }
    if (!p)
      return;
    let g = o - 1, f;
    for (e > this.stackOfSelected[o - 1] ? f = () => e > this.stackOfSelected[g] : f = () => e < this.stackOfSelected[g]; f(); )
      this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[g]), this.stackOfSelected.pop(), g--;
  }
}
class cs extends y {
  /**
   * Renders passed blocks as one batch
   *
   * @param blocksData - blocks to render
   */
  async render(e) {
    return new Promise((t) => {
      const { Tools: o, BlockManager: i } = this.Editor;
      if (e.length === 0)
        i.insert();
      else {
        const s = e.map(({ type: r, data: l, tunes: a, id: c }) => {
          o.available.has(r) === !1 && (X(`Tool «${r}» is not found. Check 'tools' property at the Editor.js config.`, "warn"), l = this.composeStubDataForTool(r, l, c), r = o.stubTool);
          let u;
          try {
            u = i.composeBlock({
              id: c,
              tool: r,
              data: l,
              tunes: a
            });
          } catch (h) {
            I(`Block «${r}» skipped because of plugins error`, "error", {
              data: l,
              error: h
            }), l = this.composeStubDataForTool(r, l, c), r = o.stubTool, u = i.composeBlock({
              id: c,
              tool: r,
              data: l,
              tunes: a
            });
          }
          return u;
        });
        i.insertMany(s);
      }
      window.requestIdleCallback(() => {
        t();
      }, { timeout: 2e3 });
    });
  }
  /**
   * Create data for the Stub Tool that will be used instead of unavailable tool
   *
   * @param tool - unavailable tool name to stub
   * @param data - data of unavailable block
   * @param [id] - id of unavailable block
   */
  composeStubDataForTool(e, t, o) {
    const { Tools: i } = this.Editor;
    let s = e;
    if (i.unavailable.has(e)) {
      const r = i.unavailable.get(e).toolbox;
      r !== void 0 && r[0].title !== void 0 && (s = r[0].title);
    }
    return {
      savedData: {
        id: o,
        type: e,
        data: t
      },
      title: s
    };
  }
}
class ds extends y {
  /**
   * Composes new chain of Promises to fire them alternatelly
   *
   * @returns {OutputData}
   */
  async save() {
    const { BlockManager: e, Tools: t } = this.Editor, o = e.blocks, i = [];
    try {
      o.forEach((l) => {
        i.push(this.getSavedData(l));
      });
      const s = await Promise.all(i), r = await ot(s, (l) => t.blockTools.get(l).sanitizeConfig);
      return this.makeOutput(r);
    } catch (s) {
      X("Saving failed due to the Error %o", "error", s);
    }
  }
  /**
   * Saves and validates
   *
   * @param {Block} block - Editor's Tool
   * @returns {ValidatedData} - Tool's validated data
   */
  async getSavedData(e) {
    const t = await e.save(), o = t && await e.validate(t.data);
    return {
      ...t,
      isValid: o
    };
  }
  /**
   * Creates output object with saved data, time and version of editor
   *
   * @param {ValidatedData} allExtractedData - data extracted from Blocks
   * @returns {OutputData}
   */
  makeOutput(e) {
    const t = [];
    return e.forEach(({ id: o, tool: i, data: s, tunes: r, isValid: l }) => {
      if (!l) {
        I(`Block «${i}» skipped because saved data is invalid`);
        return;
      }
      if (i === this.Editor.Tools.stubTool) {
        t.push(s);
        return;
      }
      const a = {
        id: o,
        type: i,
        data: s,
        ...!V(r) && {
          tunes: r
        }
      };
      t.push(a);
    }), {
      time: +/* @__PURE__ */ new Date(),
      blocks: t,
      version: "2.30.5"
    };
  }
}
(function() {
  try {
    if (typeof document < "u") {
      var n = document.createElement("style");
      n.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")), document.head.appendChild(n);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
const hs = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function us(n) {
  const e = document.createElement("div");
  e.innerHTML = n.trim();
  const t = document.createDocumentFragment();
  return t.append(...Array.from(e.childNodes)), t;
}
/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */
class dt {
  /**
   * Default placeholder for Paragraph Tool
   *
   * @returns {string}
   * @class
   */
  static get DEFAULT_PLACEHOLDER() {
    return "";
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {ParagraphData} params.data - previously saved data
   * @param {ParagraphConfig} params.config - user config for Tool
   * @param {object} params.api - editor.js api
   * @param {boolean} readOnly - read only mode flag
   */
  constructor({ data: e, config: t, api: o, readOnly: i }) {
    this.api = o, this.readOnly = i, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-paragraph"
    }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = t.placeholder ? t.placeholder : dt.DEFAULT_PLACEHOLDER, this._data = e ?? {}, this._element = null, this._preserveBlank = t.preserveBlank ?? !1;
  }
  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */
  onKeyUp(e) {
    if (e.code !== "Backspace" && e.code !== "Delete" || !this._element)
      return;
    const { textContent: t } = this._element;
    t === "" && (this._element.innerHTML = "");
  }
  /**
   * Create Tool's view
   *
   * @returns {HTMLDivElement}
   * @private
   */
  drawView() {
    const e = document.createElement("DIV");
    return e.classList.add(this._CSS.wrapper, this._CSS.block), e.contentEditable = "false", e.dataset.placeholderActive = this.api.i18n.t(this._placeholder), this._data.text && (e.innerHTML = this._data.text), this.readOnly || (e.contentEditable = "true", e.addEventListener("keyup", this.onKeyUp)), e;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this._element = this.drawView(), this._element;
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {ParagraphData} data
   * @public
   */
  merge(e) {
    if (!this._element)
      return;
    this._data.text += e.text;
    const t = us(e.text);
    this._element.appendChild(t), this._element.normalize();
  }
  /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return !(e.text.trim() === "" && !this._preserveBlank);
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML
    };
  }
  /**
   * On paste callback fired from Editor.
   *
   * @param {HTMLPasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const t = {
      text: e.detail.data.innerHTML
    };
    this._data = t, window.requestAnimationFrame(() => {
      this._element && (this._element.innerHTML = this._data.text || "");
    });
  }
  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   * @returns {ConversionConfig}
   */
  static get conversionConfig() {
    return {
      export: "text",
      // to convert Paragraph to other block, use 'text' property of saved data
      import: "text"
      // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }
  /**
   * Sanitizer rules
   * @returns {SanitizerConfig} - Edtior.js sanitizer config
   */
  static get sanitize() {
    return {
      text: {
        br: !0
      }
    };
  }
  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {PasteConfig} - Paragraph Paste Setting
   */
  static get pasteConfig() {
    return {
      tags: ["P"]
    };
  }
  /**
   * Icon and title for displaying at the Toolbox
   *
   * @returns {ToolboxConfig} - Paragraph Toolbox Setting
   */
  static get toolbox() {
    return {
      icon: hs,
      title: "Text"
    };
  }
}
class ht {
  constructor() {
    this.commandName = "bold";
  }
  /**
   * Sanitizer Rule
   * Leave <b> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      b: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return {
      icon: bi,
      name: "bold",
      onActivate: () => {
        document.execCommand(this.commandName);
      },
      isActive: () => document.queryCommandState(this.commandName)
    };
  }
  /**
   * Set a shortcut
   *
   * @returns {boolean}
   */
  get shortcut() {
    return "CMD+B";
  }
}
ht.isInline = !0;
ht.title = "Bold";
class ut {
  constructor() {
    this.commandName = "italic", this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--italic"
    }, this.nodes = {
      button: null
    };
  }
  /**
   * Sanitizer Rule
   * Leave <i> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      i: {}
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = Bi, this.nodes.button;
  }
  /**
   * Wrap range with <i> tag
   */
  surround() {
    document.execCommand(this.commandName);
  }
  /**
   * Check selection and set activated state to button if there are <i> tag
   */
  checkState() {
    const e = document.queryCommandState(this.commandName);
    return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e;
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+I";
  }
}
ut.isInline = !0;
ut.title = "Italic";
class pt {
  /**
   * @param api - Editor.js API
   */
  constructor({ api: e }) {
    this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
      button: "ce-inline-tool",
      buttonActive: "ce-inline-tool--active",
      buttonModifier: "ce-inline-tool--link",
      buttonUnlink: "ce-inline-tool--unlink",
      input: "ce-inline-tool-input",
      inputShowed: "ce-inline-tool-input--showed"
    }, this.nodes = {
      button: null,
      input: null
    }, this.inputOpened = !1, this.toolbar = e.toolbar, this.inlineToolbar = e.inlineToolbar, this.notifier = e.notifier, this.i18n = e.i18n, this.selection = new b();
  }
  /**
   * Sanitizer Rule
   * Leave <a> tags
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      a: {
        href: !0,
        target: "_blank",
        rel: "nofollow"
      }
    };
  }
  /**
   * Create button for Inline Toolbar
   */
  render() {
    return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.innerHTML = xt, this.nodes.button;
  }
  /**
   * Input for the link
   */
  renderActions() {
    return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = this.i18n.t("Add a link"), this.nodes.input.enterKeyHint = "done", this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", (e) => {
      e.keyCode === this.ENTER_KEY && this.enterPressed(e);
    }), this.nodes.input;
  }
  /**
   * Handle clicks on the Inline Toolbar icon
   *
   * @param {Range} range - range to wrap with link
   */
  surround(e) {
    if (e) {
      this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
      const t = this.selection.findParentTag("A");
      if (t) {
        this.selection.expandToTag(t), this.unlink(), this.closeActions(), this.checkState(), this.toolbar.close();
        return;
      }
    }
    this.toggleActions();
  }
  /**
   * Check selection and set activated state to button if there are <a> tag
   */
  checkState() {
    const e = this.selection.findParentTag("A");
    if (e) {
      this.nodes.button.innerHTML = Ii, this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
      const t = e.getAttribute("href");
      this.nodes.input.value = t !== "null" ? t : "", this.selection.save();
    } else
      this.nodes.button.innerHTML = xt, this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
    return !!e;
  }
  /**
   * Function called with Inline Toolbar closing
   */
  clear() {
    this.closeActions();
  }
  /**
   * Set a shortcut
   */
  get shortcut() {
    return "CMD+K";
  }
  /**
   * Show/close link input
   */
  toggleActions() {
    this.inputOpened ? this.closeActions(!1) : this.openActions(!0);
  }
  /**
   * @param {boolean} needFocus - on link creation we need to focus input. On editing - nope.
   */
  openActions(e = !1) {
    this.nodes.input.classList.add(this.CSS.inputShowed), e && this.nodes.input.focus(), this.inputOpened = !0;
  }
  /**
   * Close input
   *
   * @param {boolean} clearSavedSelection — we don't need to clear saved selection
   *                                        on toggle-clicks on the icon of opened Toolbar
   */
  closeActions(e = !0) {
    if (this.selection.isFakeBackgroundEnabled) {
      const t = new b();
      t.save(), this.selection.restore(), this.selection.removeFakeBackground(), t.restore();
    }
    this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", e && this.selection.clearSaved(), this.inputOpened = !1;
  }
  /**
   * Enter pressed on input
   *
   * @param {KeyboardEvent} event - enter keydown event
   */
  enterPressed(e) {
    let t = this.nodes.input.value || "";
    if (!t.trim()) {
      this.selection.restore(), this.unlink(), e.preventDefault(), this.closeActions();
      return;
    }
    if (!this.validateURL(t)) {
      this.notifier.show({
        message: "Pasted link is not valid.",
        style: "error"
      }), I("Incorrect Link pasted", "warn", t);
      return;
    }
    t = this.prepareLink(t), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(t), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close();
  }
  /**
   * Detects if passed string is URL
   *
   * @param {string} str - string to validate
   * @returns {boolean}
   */
  validateURL(e) {
    return !/\s/.test(e);
  }
  /**
   * Process link before injection
   * - sanitize
   * - add protocol for links like 'google.com'
   *
   * @param {string} link - raw user input
   */
  prepareLink(e) {
    return e = e.trim(), e = this.addProtocol(e), e;
  }
  /**
   * Add 'http' protocol to the links like 'vc.ru', 'google.com'
   *
   * @param {string} link - string to process
   */
  addProtocol(e) {
    if (/^(\w+):(\/\/)?/.test(e))
      return e;
    const t = /^\/[^/\s]/.test(e), o = e.substring(0, 1) === "#", i = /^\/\/[^/\s]/.test(e);
    return !t && !o && !i && (e = "http://" + e), e;
  }
  /**
   * Inserts <a> tag with "href"
   *
   * @param {string} link - "href" value
   */
  insertLink(e) {
    const t = this.selection.findParentTag("A");
    t && this.selection.expandToTag(t), document.execCommand(this.commandLink, !1, e);
  }
  /**
   * Removes <a> tag
   */
  unlink() {
    document.execCommand(this.commandUnlink);
  }
}
pt.isInline = !0;
pt.title = "Link";
class ao {
  /**
   * @param api - Editor.js API
   */
  constructor({ api: e }) {
    this.i18nAPI = e.i18n, this.blocksAPI = e.blocks, this.selectionAPI = e.selection, this.toolsAPI = e.tools, this.caretAPI = e.caret;
  }
  /**
   * Returns tool's UI config
   */
  async render() {
    const e = b.get(), t = this.blocksAPI.getBlockByElement(e.anchorNode);
    if (t === void 0)
      return [];
    const o = this.toolsAPI.getBlockTools(), i = await zt(t, o);
    if (i.length === 0)
      return [];
    const s = i.reduce((c, u) => {
      var h;
      return (h = u.toolbox) == null || h.forEach((p) => {
        c.push({
          icon: p.icon,
          title: z.t(K.toolNames, p.title),
          name: u.name,
          closeOnActivate: !0,
          onActivate: async () => {
            const g = await this.blocksAPI.convert(t.id, u.name, p.data);
            this.caretAPI.setToBlock(g, "end");
          }
        });
      }), c;
    }, []), r = await t.getActiveToolboxEntry(), l = r !== void 0 ? r.icon : Kt, a = !pe();
    return {
      icon: l,
      name: "convert-to",
      hint: {
        title: this.i18nAPI.t("Convert to")
      },
      children: {
        searchable: a,
        items: s,
        onOpen: () => {
          a && (this.selectionAPI.setFakeBackground(), this.selectionAPI.save());
        },
        onClose: () => {
          a && (this.selectionAPI.restore(), this.selectionAPI.removeFakeBackground());
        }
      }
    };
  }
}
ao.isInline = !0;
class co {
  /**
   * @param options - constructor options
   * @param options.data - stub tool data
   * @param options.api - Editor.js API
   */
  constructor({ data: e, api: t }) {
    this.CSS = {
      wrapper: "ce-stub",
      info: "ce-stub__info",
      title: "ce-stub__title",
      subtitle: "ce-stub__subtitle"
    }, this.api = t, this.title = e.title || this.api.i18n.t("Error"), this.subtitle = this.api.i18n.t("The block can not be displayed correctly."), this.savedData = e.savedData, this.wrapper = this.make();
  }
  /**
   * Returns stub holder
   *
   * @returns {HTMLElement}
   */
  render() {
    return this.wrapper;
  }
  /**
   * Return original Tool data
   *
   * @returns {BlockToolData}
   */
  save() {
    return this.savedData;
  }
  /**
   * Create Tool html markup
   *
   * @returns {HTMLElement}
   */
  make() {
    const e = d.make("div", this.CSS.wrapper), t = Mi, o = d.make("div", this.CSS.info), i = d.make("div", this.CSS.title, {
      textContent: this.title
    }), s = d.make("div", this.CSS.subtitle, {
      textContent: this.subtitle
    });
    return e.innerHTML = t, o.appendChild(i), o.appendChild(s), e.appendChild(o), e;
  }
}
co.isReadOnlySupported = !0;
class ps extends ct {
  constructor() {
    super(...arguments), this.type = ne.Inline;
  }
  /**
   * Returns title for Inline Tool if specified by user
   */
  get title() {
    return this.constructable[at.Title];
  }
  /**
   * Constructs new InlineTool instance from constructable
   */
  create() {
    return new this.constructable({
      api: this.api,
      config: this.settings
    });
  }
}
class fs extends ct {
  constructor() {
    super(...arguments), this.type = ne.Tune;
  }
  /**
   * Constructs new BlockTune instance from constructable
   *
   * @param data - Tune data
   * @param block - Block API object
   */
  create(e, t) {
    return new this.constructable({
      api: this.api,
      config: this.settings,
      block: t,
      data: e
    });
  }
}
class F extends Map {
  /**
   * Returns Block Tools collection
   */
  get blockTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isBlock());
    return new F(e);
  }
  /**
   * Returns Inline Tools collection
   */
  get inlineTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInline());
    return new F(e);
  }
  /**
   * Returns Block Tunes collection
   */
  get blockTunes() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isTune());
    return new F(e);
  }
  /**
   * Returns internal Tools collection
   */
  get internalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => t.isInternal);
    return new F(e);
  }
  /**
   * Returns Tools collection provided by user
   */
  get externalTools() {
    const e = Array.from(this.entries()).filter(([, t]) => !t.isInternal);
    return new F(e);
  }
}
var gs = Object.defineProperty, ms = Object.getOwnPropertyDescriptor, ho = (n, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? ms(e, t) : e, s = n.length - 1, r; s >= 0; s--)
    (r = n[s]) && (i = (o ? r(e, t, i) : r(i)) || i);
  return o && i && gs(e, t, i), i;
};
class ft extends ct {
  constructor() {
    super(...arguments), this.type = ne.Block, this.inlineTools = new F(), this.tunes = new F();
  }
  /**
   * Creates new Tool instance
   *
   * @param data - Tool data
   * @param block - BlockAPI for current Block
   * @param readOnly - True if Editor is in read-only mode
   */
  create(e, t, o) {
    return new this.constructable({
      data: e,
      block: t,
      readOnly: o,
      api: this.api,
      config: this.settings
    });
  }
  /**
   * Returns true if read-only mode is supported by Tool
   */
  get isReadOnlySupported() {
    return this.constructable[ce.IsReadOnlySupported] === !0;
  }
  /**
   * Returns true if Tool supports linebreaks
   */
  get isLineBreaksEnabled() {
    return this.constructable[ce.IsEnabledLineBreaks];
  }
  /**
   * Returns Tool toolbox configuration (internal or user-specified).
   *
   * Merges internal and user-defined toolbox configs based on the following rules:
   *
   * - If both internal and user-defined toolbox configs are arrays their items are merged.
   * Length of the second one is kept.
   *
   * - If both are objects their properties are merged.
   *
   * - If one is an object and another is an array than internal config is replaced with user-defined
   * config. This is made to allow user to override default tool's toolbox representation (single/multiple entries)
   */
  get toolbox() {
    const e = this.constructable[ce.Toolbox], t = this.config[Ie.Toolbox];
    if (!V(e) && t !== !1)
      return t ? Array.isArray(e) ? Array.isArray(t) ? t.map((o, i) => {
        const s = e[i];
        return s ? {
          ...s,
          ...o
        } : o;
      }) : [t] : Array.isArray(t) ? t : [
        {
          ...e,
          ...t
        }
      ] : Array.isArray(e) ? e : [e];
  }
  /**
   * Returns Tool conversion configuration
   */
  get conversionConfig() {
    return this.constructable[ce.ConversionConfig];
  }
  /**
   * Returns enabled inline tools for Tool
   */
  get enabledInlineTools() {
    return this.config[Ie.EnabledInlineTools] || !1;
  }
  /**
   * Returns enabled tunes for Tool
   */
  get enabledBlockTunes() {
    return this.config[Ie.EnabledBlockTunes];
  }
  /**
   * Returns Tool paste configuration
   */
  get pasteConfig() {
    return this.constructable[ce.PasteConfig] ?? {};
  }
  get sanitizeConfig() {
    const e = super.sanitizeConfig, t = this.baseSanitizeConfig;
    if (V(e))
      return t;
    const o = {};
    for (const i in e)
      if (Object.prototype.hasOwnProperty.call(e, i)) {
        const s = e[i];
        R(s) ? o[i] = Object.assign({}, t, s) : o[i] = s;
      }
    return o;
  }
  get baseSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), Array.from(this.tunes.values()).forEach((t) => Object.assign(e, t.sanitizeConfig)), e;
  }
}
ho([
  ue
], ft.prototype, "sanitizeConfig", 1);
ho([
  ue
], ft.prototype, "baseSanitizeConfig", 1);
class bs {
  /**
   * @class
   * @param config - tools config
   * @param editorConfig - EditorJS config
   * @param api - EditorJS API module
   */
  constructor(e, t, o) {
    this.api = o, this.config = e, this.editorConfig = t;
  }
  /**
   * Returns Tool object based on it's type
   *
   * @param name - tool name
   */
  get(e) {
    const { class: t, isInternal: o = !1, ...i } = this.config[e], s = this.getConstructor(t), r = t[Qe.IsTune];
    return new s({
      name: e,
      constructable: t,
      config: i,
      api: this.api.getMethodsForTool(e, r),
      isDefault: e === this.editorConfig.defaultBlock,
      defaultPlaceholder: this.editorConfig.placeholder,
      isInternal: o
    });
  }
  /**
   * Find appropriate Tool object constructor for Tool constructable
   *
   * @param constructable - Tools constructable
   */
  getConstructor(e) {
    switch (!0) {
      case e[at.IsInline]:
        return ps;
      case e[Qe.IsTune]:
        return fs;
      default:
        return ft;
    }
  }
}
class uo {
  /**
   * MoveDownTune constructor
   *
   * @param {API} api — Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: ki,
      title: this.api.i18n.t("Move down"),
      onActivate: () => this.handleClick(),
      name: "move-down"
    };
  }
  /**
   * Handle clicks on 'move down' button
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e + 1);
    if (!t)
      throw new Error("Unable to move Block down since it is already the last");
    const o = t.holder, i = o.getBoundingClientRect();
    let s = Math.abs(window.innerHeight - o.offsetHeight);
    i.top < window.innerHeight && (s = window.scrollY + o.offsetHeight), window.scrollTo(0, s), this.api.blocks.move(e + 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
uo.isTune = !0;
class po {
  /**
   * DeleteTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: yi,
      title: this.api.i18n.t("Delete"),
      name: "delete",
      confirmation: {
        title: this.api.i18n.t("Click to delete"),
        onActivate: () => this.handleClick()
      }
    };
  }
  /**
   * Delete block conditions passed
   */
  handleClick() {
    this.api.blocks.delete();
  }
}
po.isTune = !0;
class fo {
  /**
   * MoveUpTune constructor
   *
   * @param {API} api - Editor's API
   */
  constructor({ api: e }) {
    this.CSS = {
      animation: "wobble"
    }, this.api = e;
  }
  /**
   * Tune's appearance in block settings menu
   */
  render() {
    return {
      icon: xi,
      title: this.api.i18n.t("Move up"),
      onActivate: () => this.handleClick(),
      name: "move-up"
    };
  }
  /**
   * Move current block up
   */
  handleClick() {
    const e = this.api.blocks.getCurrentBlockIndex(), t = this.api.blocks.getBlockByIndex(e), o = this.api.blocks.getBlockByIndex(e - 1);
    if (e === 0 || !t || !o)
      throw new Error("Unable to move Block up since it is already the first");
    const i = t.holder, s = o.holder, r = i.getBoundingClientRect(), l = s.getBoundingClientRect();
    let a;
    l.top > 0 ? a = Math.abs(r.top) - Math.abs(l.top) : a = Math.abs(r.top) + l.height, window.scrollBy(0, -1 * a), this.api.blocks.move(e - 1), this.api.toolbar.toggleBlockSettings(!0);
  }
}
fo.isTune = !0;
var ks = Object.defineProperty, vs = Object.getOwnPropertyDescriptor, ws = (n, e, t, o) => {
  for (var i = o > 1 ? void 0 : o ? vs(e, t) : e, s = n.length - 1, r; s >= 0; s--)
    (r = n[s]) && (i = (o ? r(e, t, i) : r(i)) || i);
  return o && i && ks(e, t, i), i;
};
class go extends y {
  constructor() {
    super(...arguments), this.stubTool = "stub", this.toolsAvailable = new F(), this.toolsUnavailable = new F();
  }
  /**
   * Returns available Tools
   */
  get available() {
    return this.toolsAvailable;
  }
  /**
   * Returns unavailable Tools
   */
  get unavailable() {
    return this.toolsUnavailable;
  }
  /**
   * Return Tools for the Inline Toolbar
   */
  get inlineTools() {
    return this.available.inlineTools;
  }
  /**
   * Return editor block tools
   */
  get blockTools() {
    return this.available.blockTools;
  }
  /**
   * Return available Block Tunes
   *
   * @returns {object} - object of Inline Tool's classes
   */
  get blockTunes() {
    return this.available.blockTunes;
  }
  /**
   * Returns default Tool object
   */
  get defaultTool() {
    return this.blockTools.get(this.config.defaultBlock);
  }
  /**
   * Returns internal tools
   */
  get internal() {
    return this.available.internalTools;
  }
  /**
   * Creates instances via passed or default configuration
   *
   * @returns {Promise<void>}
   */
  async prepare() {
    if (this.validateTools(), this.config.tools = qe({}, this.internalTools, this.config.tools), !Object.prototype.hasOwnProperty.call(this.config, "tools") || Object.keys(this.config.tools).length === 0)
      throw Error("Can't start without tools");
    const e = this.prepareConfig();
    this.factory = new bs(e, this.config, this.Editor.API);
    const t = this.getListOfPrepareFunctions(e);
    if (t.length === 0)
      return Promise.resolve();
    await Eo(t, (o) => {
      this.toolPrepareMethodSuccess(o);
    }, (o) => {
      this.toolPrepareMethodFallback(o);
    }), this.prepareBlockTools();
  }
  getAllInlineToolsSanitizeConfig() {
    const e = {};
    return Array.from(this.inlineTools.values()).forEach((t) => {
      Object.assign(e, t.sanitizeConfig);
    }), e;
  }
  /**
   * Calls each Tool reset method to clean up anything set by Tool
   */
  destroy() {
    Object.values(this.available).forEach(async (e) => {
      O(e.reset) && await e.reset();
    });
  }
  /**
   * Returns internal tools
   * Includes Bold, Italic, Link and Paragraph
   */
  get internalTools() {
    return {
      convertTo: {
        class: ao,
        isInternal: !0
      },
      link: {
        class: pt,
        isInternal: !0
      },
      bold: {
        class: ht,
        isInternal: !0
      },
      italic: {
        class: ut,
        isInternal: !0
      },
      paragraph: {
        class: dt,
        inlineToolbar: !0,
        isInternal: !0
      },
      stub: {
        class: co,
        isInternal: !0
      },
      moveUp: {
        class: fo,
        isInternal: !0
      },
      delete: {
        class: po,
        isInternal: !0
      },
      moveDown: {
        class: uo,
        isInternal: !0
      }
    };
  }
  /**
   * Tool prepare method success callback
   *
   * @param {object} data - append tool to available list
   */
  toolPrepareMethodSuccess(e) {
    const t = this.factory.get(e.toolName);
    if (t.isInline()) {
      const i = ["render"].filter((s) => !t.create()[s]);
      if (i.length) {
        I(
          `Incorrect Inline Tool: ${t.name}. Some of required methods is not implemented %o`,
          "warn",
          i
        ), this.toolsUnavailable.set(t.name, t);
        return;
      }
    }
    this.toolsAvailable.set(t.name, t);
  }
  /**
   * Tool prepare method fail callback
   *
   * @param {object} data - append tool to unavailable list
   */
  toolPrepareMethodFallback(e) {
    this.toolsUnavailable.set(e.toolName, this.factory.get(e.toolName));
  }
  /**
   * Binds prepare function of plugins with user or default config
   *
   * @returns {Array} list of functions that needs to be fired sequentially
   * @param config - tools config
   */
  getListOfPrepareFunctions(e) {
    const t = [];
    return Object.entries(e).forEach(([o, i]) => {
      t.push({
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        function: O(i.class.prepare) ? i.class.prepare : () => {
        },
        data: {
          toolName: o,
          config: i.config
        }
      });
    }), t;
  }
  /**
   * Assign enabled Inline Tools and Block Tunes for Block Tool
   */
  prepareBlockTools() {
    Array.from(this.blockTools.values()).forEach((e) => {
      this.assignInlineToolsToBlockTool(e), this.assignBlockTunesToBlockTool(e);
    });
  }
  /**
   * Assign enabled Inline Tools for Block Tool
   *
   * @param tool - Block Tool
   */
  assignInlineToolsToBlockTool(e) {
    if (this.config.inlineToolbar !== !1) {
      if (e.enabledInlineTools === !0) {
        e.inlineTools = new F(
          Array.isArray(this.config.inlineToolbar) ? this.config.inlineToolbar.map((t) => [t, this.inlineTools.get(t)]) : Array.from(this.inlineTools.entries())
        );
        return;
      }
      Array.isArray(e.enabledInlineTools) && (e.inlineTools = new F(
        /** Prepend ConvertTo Inline Tool */
        ["convertTo", ...e.enabledInlineTools].map((t) => [t, this.inlineTools.get(t)])
      ));
    }
  }
  /**
   * Assign enabled Block Tunes for Block Tool
   *
   * @param tool — Block Tool
   */
  assignBlockTunesToBlockTool(e) {
    if (e.enabledBlockTunes !== !1) {
      if (Array.isArray(e.enabledBlockTunes)) {
        const t = new F(
          e.enabledBlockTunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new F([...t, ...this.blockTunes.internalTools]);
        return;
      }
      if (Array.isArray(this.config.tunes)) {
        const t = new F(
          this.config.tunes.map((o) => [o, this.blockTunes.get(o)])
        );
        e.tunes = new F([...t, ...this.blockTunes.internalTools]);
        return;
      }
      e.tunes = this.blockTunes.internalTools;
    }
  }
  /**
   * Validate Tools configuration objects and throw Error for user if it is invalid
   */
  validateTools() {
    for (const e in this.config.tools)
      if (Object.prototype.hasOwnProperty.call(this.config.tools, e)) {
        if (e in this.internalTools)
          return;
        const t = this.config.tools[e];
        if (!O(t) && !O(t.class))
          throw Error(
            `Tool «${e}» must be a constructor function or an object with function in the «class» property`
          );
      }
  }
  /**
   * Unify tools config
   */
  prepareConfig() {
    const e = {};
    for (const t in this.config.tools)
      R(this.config.tools[t]) ? e[t] = this.config.tools[t] : e[t] = { class: this.config.tools[t] };
    return e;
  }
}
ws([
  ue
], go.prototype, "getAllInlineToolsSanitizeConfig", 1);
const xs = `:root{--selectionColor: #e1f2ff;--inlineSelectionColor: #d4ecff;--bg-light: #eff2f5;--grayText: #707684;--color-dark: #1D202B;--color-active-icon: #388AE5;--color-gray-border: rgba(201, 201, 204, .48);--content-width: 650px;--narrow-mode-right-padding: 50px;--toolbox-buttons-size: 26px;--toolbox-buttons-size--mobile: 36px;--icon-size: 20px;--icon-size--mobile: 28px;--block-padding-vertical: .4em;--color-line-gray: #EFF0F1 }.codex-editor{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide{display:none}.codex-editor__redactor [contenteditable]:empty:after{content:"\\feff"}@media (min-width: 651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .codex-editor__redactor{margin-left:50px;margin-right:0}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:#2eaadc33;border:1px solid transparent}.codex-editor svg{max-height:100%}.codex-editor path{stroke:currentColor}.codex-editor ::-moz-selection{background-color:#d4ecff}.codex-editor ::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}.ce-scroll-locked{overflow:hidden}.ce-scroll-locked--hard{overflow:hidden;top:calc(-1 * var(--window-scroll-offset));position:fixed;width:100%}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,top;display:none}.ce-toolbar--opened{display:block}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}.ce-toolbar__plus{color:#1d202b;cursor:pointer;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0}@media (max-width: 650px){.ce-toolbar__plus{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__plus:hover{background-color:#eff2f5}}.ce-toolbar__plus--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus-shortcut{opacity:.6;word-spacing:-2px;margin-top:5px}@media (max-width: 650px){.ce-toolbar__plus{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__plus--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__plus--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__actions{position:absolute;right:100%;opacity:0;display:-webkit-box;display:-ms-flexbox;display:flex;padding-right:5px}.ce-toolbar__actions--opened{opacity:1}@media (max-width: 650px){.ce-toolbar__actions{right:auto}}.ce-toolbar__settings-btn{color:#1d202b;width:26px;height:26px;border-radius:7px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin-left:3px;cursor:pointer;user-select:none}@media (max-width: 650px){.ce-toolbar__settings-btn{width:36px;height:36px}}@media (hover: hover){.ce-toolbar__settings-btn:hover{background-color:#eff2f5}}.ce-toolbar__settings-btn--active{background-color:#eff2f5;-webkit-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (min-width: 651px){.ce-toolbar__settings-btn{width:24px}}.ce-toolbar__settings-btn--hidden{display:none}@media (max-width: 650px){.ce-toolbar__settings-btn{position:absolute;background-color:#fff;border:1px solid #E8E8EB;-webkit-box-shadow:0 3px 15px -3px rgba(13,20,33,.13);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;z-index:2;position:static}.ce-toolbar__settings-btn--left-oriented:before{left:15px;margin-left:0}.ce-toolbar__settings-btn--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar__plus svg,.ce-toolbar__settings-btn svg{width:24px;height:24px}@media (min-width: 651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}@media (min-width: 651px){.codex-editor--narrow .ce-toolbox .ce-popover{right:0;left:auto;left:initial}}.ce-inline-toolbar{--y-offset: 8px;--color-background-icon-active: rgba(56, 138, 229, .1);--color-text-icon-active: #388AE5;--color-text-primary: black;position:absolute;visibility:hidden;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;will-change:opacity,left,top;top:0;left:0;z-index:3;opacity:1;visibility:visible}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__toggler-and-button-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;padding:0 6px}.ce-inline-toolbar__buttons{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px;margin:0 6px 0 -6px;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;border-right:1px solid rgba(201,201,204,.48);-webkit-box-sizing:border-box;box-sizing:border-box}@media (hover: hover){.ce-inline-toolbar__dropdown:hover{background:#eff2f5}}.ce-inline-toolbar__dropdown--hidden{display:none}.ce-inline-toolbar__dropdown-content,.ce-inline-toolbar__dropdown-arrow{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-inline-toolbar__dropdown-content svg,.ce-inline-toolbar__dropdown-arrow svg{width:20px;height:20px}.ce-inline-toolbar__shortcut{opacity:.6;word-spacing:-3px;margin-top:3px}.ce-inline-tool{color:var(--color-text-primary);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:0;border-radius:4px;line-height:normal;height:100%;padding:0;width:28px;background-color:transparent;cursor:pointer}@media (max-width: 650px){.ce-inline-tool{width:36px;height:36px}}@media (hover: hover){.ce-inline-tool:hover{background-color:#f8f8f8}}.ce-inline-tool svg{display:block;width:20px;height:20px}@media (max-width: 650px){.ce-inline-tool svg{width:28px;height:28px}}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block;margin-bottom:-1px}.ce-inline-tool-input{background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:4px 8px;font-size:14px;line-height:22px;outline:none;margin:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:none;font-weight:500;-webkit-appearance:none;font-family:inherit}@media (max-width: 650px){.ce-inline-tool-input{font-size:15px;font-weight:500}}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input::-moz-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-inline-tool--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.ce-block{-webkit-animation:fade-in .3s ease;animation:fade-in .3s ease;-webkit-animation-fill-mode:none;animation-fill-mode:none;-webkit-animation-fill-mode:initial;animation-fill-mode:initial}.ce-block:first-of-type{margin-top:0}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content img,.ce-block--selected .ce-block__content .ce-stub{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388AE5;border-width:1px 1px 0 0;-webkit-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:repeating-linear-gradient(90deg,#388AE5,#388AE5 1px,#fff 1px,#fff 6px)}.ce-block a{cursor:pointer;-webkit-text-decoration:underline;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scale3d(1,1,1);transform:scaleZ(1)}}.cdx-block{padding:.4em 0}.cdx-block::-webkit-input-placeholder{line-height:normal!important}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px #232c480f;border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.cdx-input[data-placeholder]:before{position:static!important}.cdx-input[data-placeholder]:before{display:inline-block;width:0;white-space:nowrap;pointer-events:none}.cdx-settings-button{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:inherit;margin:0;min-width:26px;min-height:26px}.cdx-settings-button--focused{background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0px 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px #07a1e314}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button--active{color:#388ae5}.cdx-settings-button svg{width:auto;height:auto}@media (max-width: 650px){.cdx-settings-button svg{width:28px;height:28px}}@media (max-width: 650px){.cdx-settings-button{width:36px;height:36px;border-radius:8px}}@media (hover: hover){.cdx-settings-button:hover{background-color:#eff2f5}}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s infinite linear}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px #121e390a;color:#707684;text-align:center;cursor:pointer}@media (hover: hover){.cdx-button:hover{background:#FBFCFE;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px #121e3914}}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:12px 18px;margin:10px 0;border-radius:10px;background:#eff2f5;border:1px solid #EFF0F1;color:#707684;font-size:14px}.ce-stub svg{width:20px;height:20px}.ce-stub__info{margin-left:14px}.ce-stub__title{font-weight:500;text-transform:capitalize}.codex-editor.codex-editor--rtl{direction:rtl}.codex-editor.codex-editor--rtl .cdx-list{padding-left:0;padding-right:40px}.codex-editor.codex-editor--rtl .ce-toolbar__plus{right:-26px;left:auto}.codex-editor.codex-editor--rtl .ce-toolbar__actions{right:auto;left:-26px}@media (max-width: 650px){.codex-editor.codex-editor--rtl .ce-toolbar__actions{margin-left:0;margin-right:auto;padding-right:0;padding-left:10px}}.codex-editor.codex-editor--rtl .ce-settings{left:5px;right:auto}.codex-editor.codex-editor--rtl .ce-settings:before{right:auto;left:25px}.codex-editor.codex-editor--rtl .ce-settings__button:not(:nth-child(3n+3)){margin-left:3px;margin-right:0}.codex-editor.codex-editor--rtl .ce-conversion-tool__icon{margin-right:0;margin-left:10px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown{border-right:0px solid transparent;border-left:1px solid rgba(201,201,204,.48);margin:0 -6px 0 6px}.codex-editor.codex-editor--rtl .ce-inline-toolbar__dropdown .icon--toggler-down{margin-left:0;margin-right:4px}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__plus{left:0;right:5px}}@media (min-width: 651px){.codex-editor--narrow.codex-editor--rtl .ce-toolbar__actions{left:-5px}}.cdx-search-field{--icon-margin-right: 10px;background:#F8F8F8;border:1px solid rgba(226,226,229,.2);border-radius:6px;padding:2px;display:grid;grid-template-columns:auto auto 1fr;grid-template-rows:auto}.cdx-search-field__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:var(--icon-margin-right)}.cdx-search-field__icon svg{width:20px;height:20px;color:#707684}.cdx-search-field__input{font-size:14px;outline:none;font-weight:500;font-family:inherit;border:0;background:transparent;margin:0;padding:0;line-height:22px;min-width:calc(100% - 26px - var(--icon-margin-right))}.cdx-search-field__input::-webkit-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-moz-placeholder{color:#707684;font-weight:500}.cdx-search-field__input:-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::-ms-input-placeholder{color:#707684;font-weight:500}.cdx-search-field__input::placeholder{color:#707684;font-weight:500}.ce-popover{--border-radius: 6px;--width: 200px;--max-height: 270px;--padding: 6px;--offset-from-target: 8px;--color-border: #EFF0F1;--color-shadow: rgba(13, 20, 33, .1);--color-background: white;--color-text-primary: black;--color-text-secondary: #707684;--color-border-icon: rgba(201, 201, 204, .48);--color-border-icon-disabled: #EFF0F1;--color-text-icon-active: #388AE5;--color-background-icon-active: rgba(56, 138, 229, .1);--color-background-item-focus: rgba(34, 186, 255, .08);--color-shadow-item-focus: rgba(7, 161, 227, .08);--color-background-item-hover: #F8F8F8;--color-background-item-confirm: #E24A4A;--color-background-item-confirm-hover: #CE4343;--popover-top: calc(100% + var(--offset-from-target));--popover-left: 0;--nested-popover-overlap: 4px;--icon-size: 20px;--item-padding: 3px;--item-height: calc(var(--icon-size) + 2 * var(--item-padding))}.ce-popover__container{min-width:var(--width);width:var(--width);max-height:var(--max-height);border-radius:var(--border-radius);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-shadow:0px 3px 15px -3px var(--color-shadow);box-shadow:0 3px 15px -3px var(--color-shadow);position:absolute;left:var(--popover-left);top:var(--popover-top);background:var(--color-background);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;z-index:4;opacity:0;max-height:0;pointer-events:none;padding:0;border:none}.ce-popover--opened>.ce-popover__container{opacity:1;padding:var(--padding);max-height:var(--max-height);pointer-events:auto;-webkit-animation:panelShowing .1s ease;animation:panelShowing .1s ease;border:1px solid var(--color-border)}@media (max-width: 650px){.ce-popover--opened>.ce-popover__container{-webkit-animation:panelShowingMobile .25s ease;animation:panelShowingMobile .25s ease}}.ce-popover--open-top .ce-popover__container{--popover-top: calc(-1 * (var(--offset-from-target) + var(--popover-height)))}.ce-popover--open-left .ce-popover__container{--popover-left: calc(-1 * var(--width) + 100%)}.ce-popover__items{overflow-y:auto;-ms-scroll-chaining:none;overscroll-behavior:contain}@media (max-width: 650px){.ce-popover__overlay{position:fixed;top:0;bottom:0;left:0;right:0;background:#1D202B;z-index:3;opacity:.5;-webkit-transition:opacity .12s ease-in;transition:opacity .12s ease-in;will-change:opacity;visibility:visible}}.ce-popover__overlay--hidden{display:none}@media (max-width: 650px){.ce-popover .ce-popover__container{--offset: 5px;position:fixed;max-width:none;min-width:calc(100% - var(--offset) * 2);left:var(--offset);right:var(--offset);bottom:calc(var(--offset) + env(safe-area-inset-bottom));top:auto;border-radius:10px}}.ce-popover__search{margin-bottom:5px}.ce-popover__nothing-found-message{color:#707684;display:none;cursor:default;padding:3px;font-size:14px;line-height:20px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ce-popover__nothing-found-message--displayed{display:block}.ce-popover--nested .ce-popover__container{--popover-left: calc(var(--nesting-level) * (var(--width) - var(--nested-popover-overlap)));top:calc(var(--trigger-item-top) - var(--nested-popover-overlap));position:absolute}.ce-popover--open-top.ce-popover--nested .ce-popover__container{top:calc(var(--trigger-item-top) - var(--popover-height) + var(--item-height) + var(--offset-from-target) + var(--nested-popover-overlap))}.ce-popover--open-left .ce-popover--nested .ce-popover__container{--popover-left: calc(-1 * (var(--nesting-level) + 1) * var(--width) + 100%)}.ce-popover-item-separator{padding:4px 3px}.ce-popover-item-separator--hidden{display:none}.ce-popover-item-separator__line{height:1px;background:var(--color-border);width:100%}.ce-popover-item-html--hidden{display:none}.ce-popover-item{--border-radius: 6px;border-radius:var(--border-radius);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:var(--item-padding);color:var(--color-text-primary);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;background:transparent}@media (max-width: 650px){.ce-popover-item{padding:4px}}.ce-popover-item:not(:last-of-type){margin-bottom:1px}.ce-popover-item__icon{width:26px;height:26px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover-item__icon{width:36px;height:36px;border-radius:8px}.ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover-item__icon--tool{margin-right:4px}.ce-popover-item__title{font-size:14px;line-height:20px;font-weight:500;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin-right:auto}@media (max-width: 650px){.ce-popover-item__title{font-size:16px}}.ce-popover-item__secondary-title{color:var(--color-text-secondary);font-size:12px;white-space:nowrap;letter-spacing:-.1em;padding-right:5px;opacity:.6}@media (max-width: 650px){.ce-popover-item__secondary-title{display:none}}.ce-popover-item--active{background:var(--color-background-icon-active);color:var(--color-text-icon-active)}.ce-popover-item--disabled{color:var(--color-text-secondary);cursor:default;pointer-events:none}.ce-popover-item--focused:not(.ce-popover-item--no-focus){background:var(--color-background-item-focus)!important}.ce-popover-item--hidden{display:none}@media (hover: hover){.ce-popover-item:hover{cursor:pointer}.ce-popover-item:hover:not(.ce-popover-item--no-hover){background-color:var(--color-background-item-hover)}}.ce-popover-item--confirmation{background:var(--color-background-item-confirm)}.ce-popover-item--confirmation .ce-popover-item__title,.ce-popover-item--confirmation .ce-popover-item__icon{color:#fff}@media (hover: hover){.ce-popover-item--confirmation:not(.ce-popover-item--no-hover):hover{background:var(--color-background-item-confirm-hover)}}.ce-popover-item--confirmation:not(.ce-popover-item--no-focus).ce-popover-item--focused{background:var(--color-background-item-confirm-hover)!important}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowingMobile{0%{opacity:0;-webkit-transform:translateY(14px) scale(.98);transform:translateY(14px) scale(.98)}70%{opacity:1;-webkit-transform:translateY(-4px);transform:translateY(-4px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-9%,0,0);transform:translate3d(-9%,0,0)}30%{-webkit-transform:translate3d(9%,0,0);transform:translate3d(9%,0,0)}45%{-webkit-transform:translate3d(-4%,0,0);transform:translate3d(-4%,0,0)}60%{-webkit-transform:translate3d(4%,0,0);transform:translate3d(4%,0,0)}75%{-webkit-transform:translate3d(-1%,0,0);transform:translate3d(-1%,0,0)}to{-webkit-transform:translate3d(0,0,0);transform:translateZ(0)}}.ce-popover-header{margin-bottom:8px;margin-top:4px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover-header__text{font-size:18px;font-weight:600}.ce-popover-header__back-button{border:0;background:transparent;width:36px;height:36px;color:var(--color-text-primary)}.ce-popover-header__back-button svg{display:block;width:28px;height:28px}.ce-popover--inline{--height: 38px;--height-mobile: 46px;--container-padding: 4px;position:relative}.ce-popover--inline .ce-popover__custom-content{margin-bottom:0}.ce-popover--inline .ce-popover__items{display:-webkit-box;display:-ms-flexbox;display:flex}.ce-popover--inline .ce-popover__container{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;padding:var(--container-padding);height:var(--height);top:0;min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;width:-webkit-max-content;width:-moz-max-content;width:max-content;-webkit-animation:none;animation:none}@media (max-width: 650px){.ce-popover--inline .ce-popover__container{height:var(--height-mobile);position:absolute}}.ce-popover--inline .ce-popover-item-separator{padding:0 4px}.ce-popover--inline .ce-popover-item-separator__line{height:100%;width:1px}.ce-popover--inline .ce-popover-item{border-radius:4px;padding:4px}.ce-popover--inline .ce-popover-item__icon--tool{-webkit-box-shadow:none;box-shadow:none;background:transparent;margin-right:0}.ce-popover--inline .ce-popover-item__icon{width:auto;width:initial;height:auto;height:initial}.ce-popover--inline .ce-popover-item__icon svg{width:20px;height:20px}@media (max-width: 650px){.ce-popover--inline .ce-popover-item__icon svg{width:28px;height:28px}}.ce-popover--inline .ce-popover-item:not(:last-of-type){margin-bottom:0;margin-bottom:initial}.ce-popover--inline .ce-popover-item-html{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.ce-popover--inline .ce-popover-item__icon--chevron-right{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{--offset: 3px;left:0;top:calc(var(--height) + var(--offset))}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested-level-1 .ce-popover__container{top:calc(var(--height-mobile) + var(--offset))}}.ce-popover--inline .ce-popover--nested .ce-popover__container{min-width:var(--width);width:var(--width);height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:6px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.ce-popover--inline .ce-popover--nested .ce-popover__items{display:block;width:100%}.ce-popover--inline .ce-popover--nested .ce-popover-item{border-radius:6px;padding:3px}@media (max-width: 650px){.ce-popover--inline .ce-popover--nested .ce-popover-item{padding:4px}}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon--tool{margin-right:4px}.ce-popover--inline .ce-popover--nested .ce-popover-item__icon{width:26px;height:26px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator{padding:4px 3px}.ce-popover--inline .ce-popover--nested .ce-popover-item-separator__line{width:100%;height:1px}.codex-editor [data-placeholder]:empty:before,.codex-editor [data-placeholder][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text;content:attr(data-placeholder)}.codex-editor [data-placeholder-active]:empty:before,.codex-editor [data-placeholder-active][data-empty=true]:before{pointer-events:none;color:#707684;cursor:text}.codex-editor [data-placeholder-active]:empty:focus:before,.codex-editor [data-placeholder-active][data-empty=true]:focus:before{content:attr(data-placeholder-active)}
`;
class ys extends y {
  constructor() {
    super(...arguments), this.isMobile = !1, this.contentRectCache = void 0, this.resizeDebouncer = kt(() => {
      this.windowResize();
    }, 200);
  }
  /**
   * Editor.js UI CSS class names
   *
   * @returns {{editorWrapper: string, editorZone: string}}
   */
  get CSS() {
    return {
      editorWrapper: "codex-editor",
      editorWrapperNarrow: "codex-editor--narrow",
      editorZone: "codex-editor__redactor",
      editorZoneHidden: "codex-editor__redactor--hidden",
      editorEmpty: "codex-editor--empty",
      editorRtlFix: "codex-editor--rtl"
    };
  }
  /**
   * Return Width of center column of Editor
   *
   * @returns {DOMRect}
   */
  get contentRect() {
    if (this.contentRectCache)
      return this.contentRectCache;
    const e = this.nodes.wrapper.querySelector(`.${D.CSS.content}`);
    return e ? (this.contentRectCache = e.getBoundingClientRect(), this.contentRectCache) : {
      width: 650,
      left: 0,
      right: 0
    };
  }
  /**
   * Making main interface
   */
  async prepare() {
    this.setIsMobile(), this.make(), this.loadStyles();
  }
  /**
   * Toggle read-only state
   *
   * If readOnly is true:
   *  - removes all listeners from main UI module elements
   *
   * if readOnly is false:
   *  - enables all listeners to UI module elements
   *
   * @param {boolean} readOnlyEnabled - "read only" state
   */
  toggleReadOnly(e) {
    e ? this.disableModuleBindings() : window.requestIdleCallback(() => {
      this.enableModuleBindings();
    }, {
      timeout: 2e3
    });
  }
  /**
   * Check if Editor is empty and set CSS class to wrapper
   */
  checkEmptiness() {
    const { BlockManager: e } = this.Editor;
    this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, e.isEditorEmpty);
  }
  /**
   * Check if one of Toolbar is opened
   * Used to prevent global keydowns (for example, Enter) conflicts with Enter-on-toolbar
   *
   * @returns {boolean}
   */
  get someToolbarOpened() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o } = this.Editor;
    return !!(t.opened || o.opened || e.toolbox.opened);
  }
  /**
   * Check for some Flipper-buttons is under focus
   */
  get someFlipperButtonFocused() {
    return this.Editor.Toolbar.toolbox.hasFocus() ? !0 : Object.entries(this.Editor).filter(([e, t]) => t.flipper instanceof le).some(([e, t]) => t.flipper.hasFocus());
  }
  /**
   * Clean editor`s UI
   */
  destroy() {
    this.nodes.holder.innerHTML = "";
  }
  /**
   * Close all Editor's toolbars
   */
  closeAllToolbars() {
    const { Toolbar: e, BlockSettings: t, InlineToolbar: o } = this.Editor;
    t.close(), o.close(), e.toolbox.close();
  }
  /**
   * Check for mobile mode and save the result
   */
  setIsMobile() {
    const e = window.innerWidth < At;
    e !== this.isMobile && this.eventsDispatcher.emit(ye, {
      isEnabled: this.isMobile
    }), this.isMobile = e;
  }
  /**
   * Makes Editor.js interface
   */
  make() {
    this.nodes.holder = d.getHolder(this.config.holder), this.nodes.wrapper = d.make("div", [
      this.CSS.editorWrapper,
      ...this.isRtl ? [this.CSS.editorRtlFix] : []
    ]), this.nodes.redactor = d.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
  }
  /**
   * Appends CSS
   */
  loadStyles() {
    const e = "editor-js-styles";
    if (d.get(e))
      return;
    const t = d.make("style", null, {
      id: e,
      textContent: xs.toString()
    });
    this.config.style && !V(this.config.style) && this.config.style.nonce && t.setAttribute("nonce", this.config.style.nonce), d.prepend(document.head, t);
  }
  /**
   * Bind events on the Editor.js interface
   */
  enableModuleBindings() {
    this.readOnlyMutableListeners.on(this.nodes.redactor, "click", (t) => {
      this.redactorClicked(t);
    }, !1), this.readOnlyMutableListeners.on(this.nodes.redactor, "mousedown", (t) => {
      this.documentTouched(t);
    }, {
      capture: !0,
      passive: !0
    }), this.readOnlyMutableListeners.on(this.nodes.redactor, "touchstart", (t) => {
      this.documentTouched(t);
    }, {
      capture: !0,
      passive: !0
    }), this.readOnlyMutableListeners.on(document, "keydown", (t) => {
      this.documentKeydown(t);
    }, !0), this.readOnlyMutableListeners.on(document, "mousedown", (t) => {
      this.documentClicked(t);
    }, !0);
    const e = kt(() => {
      this.selectionChanged();
    }, ss);
    this.readOnlyMutableListeners.on(document, "selectionchange", e, !0), this.readOnlyMutableListeners.on(window, "resize", () => {
      this.resizeDebouncer();
    }, {
      passive: !0
    }), this.watchBlockHoveredEvents(), this.enableInputsEmptyMark();
  }
  /**
   * Listen redactor mousemove to emit 'block-hovered' event
   */
  watchBlockHoveredEvents() {
    let e;
    this.readOnlyMutableListeners.on(this.nodes.redactor, "mousemove", Ve((t) => {
      const o = t.target.closest(".ce-block");
      this.Editor.BlockSelection.anyBlockSelected || o && e !== o && (e = o, this.eventsDispatcher.emit(oo, {
        block: this.Editor.BlockManager.getBlockByChildNode(o)
      }));
    }, 20), {
      passive: !0
    });
  }
  /**
   * Unbind events on the Editor.js interface
   */
  disableModuleBindings() {
    this.readOnlyMutableListeners.clearAll();
  }
  /**
   * Resize window handler
   */
  windowResize() {
    this.contentRectCache = null, this.setIsMobile();
  }
  /**
   * All keydowns on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  documentKeydown(e) {
    switch (e.keyCode) {
      case w.ENTER:
        this.enterPressed(e);
        break;
      case w.BACKSPACE:
      case w.DELETE:
        this.backspacePressed(e);
        break;
      case w.ESC:
        this.escapePressed(e);
        break;
      default:
        this.defaultBehaviour(e);
        break;
    }
  }
  /**
   * Ignore all other document's keydown events
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  defaultBehaviour(e) {
    const { currentBlock: t } = this.Editor.BlockManager, o = e.target.closest(`.${this.CSS.editorWrapper}`), i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
    if (t !== void 0 && o === null) {
      this.Editor.BlockEvents.keydown(e);
      return;
    }
    o || t && i || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
  }
  /**
   * @param {KeyboardEvent} event - keyboard event
   */
  backspacePressed(e) {
    const { BlockManager: t, BlockSelection: o, Caret: i } = this.Editor;
    if (o.anyBlockSelected && !b.isSelectionExists) {
      const s = t.removeSelectedBlocks(), r = t.insertDefaultBlockAtIndex(s, !0);
      i.setToBlock(r, i.positions.START), o.clearSelection(e), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
    }
  }
  /**
   * Escape pressed
   * If some of Toolbar components are opened, then close it otherwise close Toolbar
   *
   * @param {Event} event - escape keydown event
   */
  escapePressed(e) {
    this.Editor.BlockSelection.clearSelection(e), this.Editor.Toolbar.toolbox.opened ? (this.Editor.Toolbar.toolbox.close(), this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock, this.Editor.Caret.positions.END)) : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.Toolbar.close();
  }
  /**
   * Enter pressed on document
   *
   * @param {KeyboardEvent} event - keyboard event
   */
  enterPressed(e) {
    const { BlockManager: t, BlockSelection: o } = this.Editor;
    if (this.someToolbarOpened)
      return;
    const i = t.currentBlockIndex >= 0;
    if (o.anyBlockSelected && !b.isSelectionExists) {
      o.clearSelection(e), e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation();
      return;
    }
    if (!this.someToolbarOpened && i && e.target.tagName === "BODY") {
      const s = this.Editor.BlockManager.insert();
      e.preventDefault(), this.Editor.Caret.setToBlock(s), this.Editor.Toolbar.moveAndOpen(s);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * All clicks on document
   *
   * @param {MouseEvent} event - Click event
   */
  documentClicked(e) {
    var l, a;
    if (!e.isTrusted)
      return;
    const t = e.target;
    this.nodes.holder.contains(t) || b.isAtEditor || (this.Editor.BlockManager.unsetCurrentBlock(), this.Editor.Toolbar.close());
    const i = (l = this.Editor.BlockSettings.nodes.wrapper) == null ? void 0 : l.contains(t), s = (a = this.Editor.Toolbar.nodes.settingsToggler) == null ? void 0 : a.contains(t), r = i || s;
    if (this.Editor.BlockSettings.opened && !r) {
      this.Editor.BlockSettings.close();
      const c = this.Editor.BlockManager.getBlockByChildNode(t);
      this.Editor.Toolbar.moveAndOpen(c);
    }
    this.Editor.BlockSelection.clearSelection(e);
  }
  /**
   * First touch on editor
   * Fired before click
   *
   * Used to change current block — we need to do it before 'selectionChange' event.
   * Also:
   * - Move and show the Toolbar
   * - Set a Caret
   *
   * @param {MouseEvent | TouchEvent} event - touch or mouse event
   */
  documentTouched(e) {
    let t = e.target;
    if (t === this.nodes.redactor) {
      const o = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX, i = e instanceof MouseEvent ? e.clientY : e.touches[0].clientY;
      t = document.elementFromPoint(o, i);
    }
    try {
      this.Editor.BlockManager.setCurrentBlockByChildNode(t);
    } catch {
      this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock();
    }
    this.Editor.Toolbar.moveAndOpen();
  }
  /**
   * All clicks on the redactor zone
   *
   * @param {MouseEvent} event - click event
   * @description
   * - By clicks on the Editor's bottom zone:
   *      - if last Block is empty, set a Caret to this
   *      - otherwise, add a new empty Block and set a Caret to that
   */
  redactorClicked(e) {
    if (!b.isCollapsed)
      return;
    const t = e.target, o = e.metaKey || e.ctrlKey;
    if (d.isAnchor(t) && o) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const i = t.getAttribute("href"), s = So(i);
      Mo(s);
      return;
    }
    this.processBottomZoneClick(e);
  }
  /**
   * Check if user clicks on the Editor's bottom zone:
   *  - set caret to the last block
   *  - or add new empty block
   *
   * @param event - click event
   */
  processBottomZoneClick(e) {
    const t = this.Editor.BlockManager.getBlockByIndex(-1), o = d.offset(t.holder).bottom, i = e.pageY, { BlockSelection: s } = this.Editor;
    if (e.target instanceof Element && e.target.isEqualNode(this.nodes.redactor) && /**
    * If there is cross block selection started, target will be equal to redactor so we need additional check
    */
    !s.anyBlockSelected && /**
    * Prevent caret jumping (to last block) when clicking between blocks
    */
    o < i) {
      e.stopImmediatePropagation(), e.stopPropagation();
      const { BlockManager: l, Caret: a, Toolbar: c } = this.Editor;
      (!l.lastBlock.tool.isDefault || !l.lastBlock.isEmpty) && l.insertAtEnd(), a.setToTheLastBlock(), c.moveAndOpen(l.lastBlock);
    }
  }
  /**
   * Handle selection changes on mobile devices
   * Uses for showing the Inline Toolbar
   */
  selectionChanged() {
    const { CrossBlockSelection: e, BlockSelection: t } = this.Editor, o = b.anchorElement;
    if (e.isCrossBlockSelectionStarted && t.anyBlockSelected && b.get().removeAllRanges(), !o) {
      b.range || this.Editor.InlineToolbar.close();
      return;
    }
    o.closest(`.${D.CSS.content}`) === null && (this.Editor.InlineToolbar.containsNode(o) || this.Editor.InlineToolbar.close(), !(o.dataset.inlineToolbar === "true")) || (this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.setCurrentBlockByChildNode(o), this.Editor.InlineToolbar.tryToShow(!0));
  }
  /**
   * Editor.js provides and ability to show placeholders for empty contenteditable elements
   *
   * This method watches for input and focus events and toggles 'data-empty' attribute
   * to workaroud the case, when inputs contains only <br>s and has no visible content
   * Then, CSS could rely on this attribute to show placeholders
   */
  enableInputsEmptyMark() {
    function e(t) {
      const o = t.target;
      Ot(o);
    }
    this.readOnlyMutableListeners.on(this.nodes.wrapper, "input", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusin", e), this.readOnlyMutableListeners.on(this.nodes.wrapper, "focusout", e);
  }
}
const Es = {
  // API Modules
  BlocksAPI: zo,
  CaretAPI: jo,
  EventsAPI: $o,
  I18nAPI: tt,
  API: Yo,
  InlineToolbarAPI: Wo,
  ListenersAPI: Ko,
  NotifierAPI: Zo,
  ReadOnlyAPI: Go,
  SanitizerAPI: si,
  SaverAPI: ni,
  SelectionAPI: ri,
  ToolsAPI: li,
  StylesAPI: ai,
  ToolbarAPI: ci,
  TooltipAPI: fi,
  UiAPI: gi,
  // Toolbar Modules
  BlockSettings: Ui,
  Toolbar: qi,
  InlineToolbar: Zi,
  // Modules
  BlockEvents: Gi,
  BlockManager: es,
  BlockSelection: ts,
  Caret: Re,
  CrossBlockSelection: os,
  DragNDrop: is,
  ModificationsObserver: rs,
  Paste: ls,
  ReadOnly: as,
  RectangleSelection: xe,
  Renderer: cs,
  Saver: ds,
  Tools: go,
  UI: ys
};
class Bs {
  /**
   * @param {EditorConfig} config - user configuration
   */
  constructor(e) {
    this.moduleInstances = {}, this.eventsDispatcher = new Te();
    let t, o;
    this.isReady = new Promise((i, s) => {
      t = i, o = s;
    }), Promise.resolve().then(async () => {
      this.configuration = e, this.validate(), this.init(), await this.start(), await this.render();
      const { BlockManager: i, Caret: s, UI: r, ModificationsObserver: l } = this.moduleInstances;
      r.checkEmptiness(), l.enable(), this.configuration.autofocus && s.setToBlock(i.blocks[0], s.positions.START), t();
    }).catch((i) => {
      I(`Editor.js is not ready because of ${i}`, "error"), o(i);
    });
  }
  /**
   * Setting for configuration
   *
   * @param {EditorConfig|string} config - Editor's config to set
   */
  set configuration(e) {
    var o, i;
    R(e) ? this.config = {
      ...e
    } : this.config = {
      holder: e
    }, Ze(!!this.config.holderId, "config.holderId", "config.holder"), this.config.holderId && !this.config.holder && (this.config.holder = this.config.holderId, this.config.holderId = null), this.config.holder == null && (this.config.holder = "editorjs"), this.config.logLevel || (this.config.logLevel = St.VERBOSE), xo(this.config.logLevel), Ze(!!this.config.initialBlock, "config.initialBlock", "config.defaultBlock"), this.config.defaultBlock = this.config.defaultBlock || this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight !== void 0 ? this.config.minHeight : 300;
    const t = {
      type: this.config.defaultBlock,
      data: {}
    };
    this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
      p: !0,
      b: !0,
      a: !0
    }, this.config.hideToolbar = this.config.hideToolbar ? this.config.hideToolbar : !1, this.config.tools = this.config.tools || {}, this.config.i18n = this.config.i18n || {}, this.config.data = this.config.data || { blocks: [] }, this.config.onReady = this.config.onReady || (() => {
    }), this.config.onChange = this.config.onChange || (() => {
    }), this.config.inlineToolbar = this.config.inlineToolbar !== void 0 ? this.config.inlineToolbar : !0, (V(this.config.data) || !this.config.data.blocks || this.config.data.blocks.length === 0) && (this.config.data = { blocks: [t] }), this.config.readOnly = this.config.readOnly || !1, (o = this.config.i18n) != null && o.messages && z.setDictionary(this.config.i18n.messages), this.config.i18n.direction = ((i = this.config.i18n) == null ? void 0 : i.direction) || "ltr";
  }
  /**
   * Returns private property
   *
   * @returns {EditorConfig}
   */
  get configuration() {
    return this.config;
  }
  /**
   * Checks for required fields in Editor's config
   */
  validate() {
    const { holderId: e, holder: t } = this.config;
    if (e && t)
      throw Error("«holderId» and «holder» param can't assign at the same time.");
    if (Q(t) && !d.get(t))
      throw Error(`element with ID «${t}» is missing. Pass correct holder's ID.`);
    if (t && R(t) && !d.isElement(t))
      throw Error("«holder» value must be an Element node");
  }
  /**
   * Initializes modules:
   *  - make and save instances
   *  - configure
   */
  init() {
    this.constructModules(), this.configureModules();
  }
  /**
   * Start Editor!
   *
   * Get list of modules that needs to be prepared and return a sequence (Promise)
   *
   * @returns {Promise<void>}
   */
  async start() {
    await [
      "Tools",
      "UI",
      "BlockManager",
      "Paste",
      "BlockSelection",
      "RectangleSelection",
      "CrossBlockSelection",
      "ReadOnly"
    ].reduce(
      (t, o) => t.then(async () => {
        try {
          await this.moduleInstances[o].prepare();
        } catch (i) {
          if (i instanceof Nt)
            throw new Error(i.message);
          I(`Module ${o} was skipped because of %o`, "warn", i);
        }
      }),
      Promise.resolve()
    );
  }
  /**
   * Render initial data
   */
  render() {
    return this.moduleInstances.Renderer.render(this.config.data.blocks);
  }
  /**
   * Make modules instances and save it to the @property this.moduleInstances
   */
  constructModules() {
    Object.entries(Es).forEach(([e, t]) => {
      try {
        this.moduleInstances[e] = new t({
          config: this.configuration,
          eventsDispatcher: this.eventsDispatcher
        });
      } catch (o) {
        I("[constructModules]", `Module ${e} skipped because`, "error", o);
      }
    });
  }
  /**
   * Modules instances configuration:
   *  - pass other modules to the 'state' property
   *  - ...
   */
  configureModules() {
    for (const e in this.moduleInstances)
      Object.prototype.hasOwnProperty.call(this.moduleInstances, e) && (this.moduleInstances[e].state = this.getModulesDiff(e));
  }
  /**
   * Return modules without passed name
   *
   * @param {string} name - module for witch modules difference should be calculated
   */
  getModulesDiff(e) {
    const t = {};
    for (const o in this.moduleInstances)
      o !== e && (t[o] = this.moduleInstances[o]);
    return t;
  }
}
/**
 * Editor.js
 *
 * @license Apache-2.0
 * @see Editor.js <https://editorjs.io>
 * @author CodeX Team <https://codex.so>
 */
class Ts {
  /** Editor version */
  static get version() {
    return "2.30.5";
  }
  /**
   * @param {EditorConfig|string|undefined} [configuration] - user configuration
   */
  constructor(e) {
    let t = () => {
    };
    R(e) && O(e.onReady) && (t = e.onReady);
    const o = new Bs(e);
    this.isReady = o.isReady.then(() => {
      this.exportAPI(o), t();
    });
  }
  /**
   * Export external API methods
   *
   * @param {Core} editor — Editor's instance
   */
  exportAPI(e) {
    const t = ["configuration"], o = () => {
      Object.values(e.moduleInstances).forEach((s) => {
        O(s.destroy) && s.destroy(), s.listeners.removeAll();
      }), pi(), e = null;
      for (const s in this)
        Object.prototype.hasOwnProperty.call(this, s) && delete this[s];
      Object.setPrototypeOf(this, null);
    };
    t.forEach((s) => {
      this[s] = e[s];
    }), this.destroy = o, Object.setPrototypeOf(this, e.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
      blocks: {
        clear: "clear",
        render: "render"
      },
      caret: {
        focus: "focus"
      },
      events: {
        on: "on",
        off: "off",
        emit: "emit"
      },
      saver: {
        save: "save"
      }
    }).forEach(([s, r]) => {
      Object.entries(r).forEach(([l, a]) => {
        this[a] = e.moduleInstances.API.methods[s][l];
      });
    });
  }
}



/***/ }),

/***/ "./node_modules/@editorjs/header/dist/header.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@editorjs/header/dist/header.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
const a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>', l = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>', o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>', h = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>', d = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>', u = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>', g = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>';
/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */
class c {
  constructor({ data: e, config: t, api: s, readOnly: r }) {
    this.api = s, this.readOnly = r, this._settings = t, this._data = this.normalizeData(e), this._element = this.getTag();
  }
  /**
   * Styles
   */
  get _CSS() {
    return {
      block: this.api.styles.block,
      wrapper: "ce-header"
    };
  }
  /**
   * Check if data is valid
   * 
   * @param {any} data - data to check
   * @returns {data is HeaderData}
   * @private
   */
  isHeaderData(e) {
    return e.text !== void 0;
  }
  /**
   * Normalize input data
   *
   * @param {HeaderData} data - saved data to process
   *
   * @returns {HeaderData}
   * @private
   */
  normalizeData(e) {
    const t = { text: "", level: this.defaultLevel.number };
    return this.isHeaderData(e) && (t.text = e.text || "", e.level !== void 0 && !isNaN(parseInt(e.level.toString())) && (t.level = parseInt(e.level.toString()))), t;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLHeadingElement}
   * @public
   */
  render() {
    return this._element;
  }
  /**
   * Returns header block tunes config
   *
   * @returns {Array}
   */
  renderSettings() {
    return this.levels.map((e) => ({
      icon: e.svg,
      label: this.api.i18n.t(`Heading ${e.number}`),
      onActivate: () => this.setLevel(e.number),
      closeOnActivate: !0,
      isActive: this.currentLevel.number === e.number,
      render: () => document.createElement("div")
    }));
  }
  /**
   * Callback for Block's settings buttons
   *
   * @param {number} level - level to set
   */
  setLevel(e) {
    this.data = {
      level: e,
      text: this.data.text
    };
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {HeaderData} data - saved data to merger with current block
   * @public
   */
  merge(e) {
    const t = {
      text: this.data.text + e.text,
      level: this.data.level
    };
    this.data = t;
  }
  /**
   * Validate Text block data:
   * - check for emptiness
   *
   * @param {HeaderData} blockData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(e) {
    return e.text.trim() !== "";
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLHeadingElement} toolsContent - Text tools rendered view
   * @returns {HeaderData} - saved data
   * @public
   */
  save(e) {
    return {
      text: e.innerHTML,
      level: this.currentLevel.number
    };
  }
  /**
   * Allow Header to be converted to/from other blocks
   */
  static get conversionConfig() {
    return {
      export: "text",
      // use 'text' property for other blocks
      import: "text"
      // fill 'text' property from other block's export string
    };
  }
  /**
   * Sanitizer Rules
   */
  static get sanitize() {
    return {
      level: !1,
      text: {}
    };
  }
  /**
   * Returns true to notify core that read-only is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get current Tools`s data
   *
   * @returns {HeaderData} Current data
   * @private
   */
  get data() {
    return this._data.text = this._element.innerHTML, this._data.level = this.currentLevel.number, this._data;
  }
  /**
   * Store data in plugin:
   * - at the this._data property
   * - at the HTML
   *
   * @param {HeaderData} data — data to set
   * @private
   */
  set data(e) {
    if (this._data = this.normalizeData(e), e.level !== void 0 && this._element.parentNode) {
      const t = this.getTag();
      t.innerHTML = this._element.innerHTML, this._element.parentNode.replaceChild(t, this._element), this._element = t;
    }
    e.text !== void 0 && (this._element.innerHTML = this._data.text || "");
  }
  /**
   * Get tag for target level
   * By default returns second-leveled header
   *
   * @returns {HTMLElement}
   */
  getTag() {
    const e = document.createElement(this.currentLevel.tag);
    return e.innerHTML = this._data.text || "", e.classList.add(this._CSS.wrapper), e.contentEditable = this.readOnly ? "false" : "true", e.dataset.placeholder = this.api.i18n.t(this._settings.placeholder || ""), e;
  }
  /**
   * Get current level
   *
   * @returns {level}
   */
  get currentLevel() {
    let e = this.levels.find((t) => t.number === this._data.level);
    return e || (e = this.defaultLevel), e;
  }
  /**
   * Return default level
   *
   * @returns {level}
   */
  get defaultLevel() {
    if (this._settings.defaultLevel) {
      const e = this.levels.find((t) => t.number === this._settings.defaultLevel);
      if (e)
        return e;
      console.warn("(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels");
    }
    return this.levels[1];
  }
  /**
   * @typedef {object} level
   * @property {number} number - level number
   * @property {string} tag - tag corresponds with level number
   * @property {string} svg - icon
   */
  /**
   * Available header levels
   *
   * @returns {level[]}
   */
  get levels() {
    const e = [
      {
        number: 1,
        tag: "H1",
        svg: a
      },
      {
        number: 2,
        tag: "H2",
        svg: l
      },
      {
        number: 3,
        tag: "H3",
        svg: o
      },
      {
        number: 4,
        tag: "H4",
        svg: h
      },
      {
        number: 5,
        tag: "H5",
        svg: d
      },
      {
        number: 6,
        tag: "H6",
        svg: u
      }
    ];
    return this._settings.levels ? e.filter(
      (t) => this._settings.levels.includes(t.number)
    ) : e;
  }
  /**
   * Handle H1-H6 tags on paste to substitute it with header Tool
   *
   * @param {PasteEvent} event - event with pasted content
   */
  onPaste(e) {
    const t = e.detail;
    if ("data" in t) {
      const s = t.data;
      let r = this.defaultLevel.number;
      switch (s.tagName) {
        case "H1":
          r = 1;
          break;
        case "H2":
          r = 2;
          break;
        case "H3":
          r = 3;
          break;
        case "H4":
          r = 4;
          break;
        case "H5":
          r = 5;
          break;
        case "H6":
          r = 6;
          break;
      }
      this._settings.levels && (r = this._settings.levels.reduce((n, i) => Math.abs(i - r) < Math.abs(n - r) ? i : n)), this.data = {
        level: r,
        text: s.innerHTML
      };
    }
  }
  /**
   * Used by Editor.js paste handling API.
   * Provides configuration to handle H1-H6 tags.
   *
   * @returns {{handler: (function(HTMLElement): {text: string}), tags: string[]}}
   */
  static get pasteConfig() {
    return {
      tags: ["H1", "H2", "H3", "H4", "H5", "H6"]
    };
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: g,
      title: "Heading"
    };
  }
}



/***/ }),

/***/ "./node_modules/@editorjs/image/dist/image.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/@editorjs/image/dist/image.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ P)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.image-tool{--bg-color: #cdd1e0;--front-color: #388ae5;--border-color: #e8e8eb}.image-tool__image{border-radius:3px;overflow:hidden;margin-bottom:10px}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:center center}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top-color:var(--front-color);left:50%;top:50%;margin-top:-30px;margin-left:-30px;animation:image-preloader-spin 2s infinite linear;box-sizing:border-box}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:attr(data-placeholder);color:#707684;font-weight:400;display:none}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{display:block}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{display:none}.image-tool--empty .image-tool__image,.image-tool--empty .image-tool__caption,.image-tool--loading .image-tool__caption{display:none}.image-tool .cdx-button{display:flex;align-items:center;justify-content:center}.image-tool .cdx-button svg{height:auto;margin:0 6px 0 0}.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader{display:none}.image-tool--loading .image-tool__image{min-height:200px;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--loading .image-tool__image-picture,.image-tool--loading .cdx-button{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(--border-color)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(--bg-color)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}@keyframes image-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const H = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>', I = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>', L = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.7778 9.33331H13.7867"/></svg>', U = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';
function S(C, a = null, r = {}) {
  const c = document.createElement(C);
  Array.isArray(a) ? c.classList.add(...a) : a !== null && c.classList.add(a);
  for (const i in r)
    r.hasOwnProperty(i) && (c[i] = r[i]);
  return c;
}
var F = /* @__PURE__ */ ((C) => (C.Empty = "empty", C.Uploading = "uploading", C.Filled = "filled", C))(F || {});
class x {
  /**
   * @param ui - image tool Ui module
   * @param ui.api - Editor.js API
   * @param ui.config - user config
   * @param ui.onSelectFile - callback for clicks on Select file button
   * @param ui.readOnly - read-only mode flag
   */
  constructor({ api: a, config: r, onSelectFile: c, readOnly: i }) {
    this.api = a, this.config = r, this.onSelectFile = c, this.readOnly = i, this.nodes = {
      wrapper: S("div", [this.CSS.baseClass, this.CSS.wrapper]),
      imageContainer: S("div", [this.CSS.imageContainer]),
      fileButton: this.createFileButton(),
      imageEl: void 0,
      imagePreloader: S("div", this.CSS.imagePreloader),
      caption: S("div", [this.CSS.input, this.CSS.caption], {
        contentEditable: !this.readOnly
      })
    }, this.nodes.caption.dataset.placeholder = this.config.captionPlaceholder, this.nodes.imageContainer.appendChild(this.nodes.imagePreloader), this.nodes.wrapper.appendChild(this.nodes.imageContainer), this.nodes.wrapper.appendChild(this.nodes.caption), this.nodes.wrapper.appendChild(this.nodes.fileButton);
  }
  /**
   * Apply visual representation of activated tune
   * @param tuneName - one of available tunes {@link Tunes.tunes}
   * @param status - true for enable, false for disable
   */
  applyTune(a, r) {
    this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${a}`, r);
  }
  /**
   * Renders tool UI
   * @param toolData - saved tool data
   */
  render(a) {
    return a.file === void 0 || Object.keys(a.file).length === 0 ? this.toggleStatus(
      "empty"
      /* Empty */
    ) : this.toggleStatus(
      "uploading"
      /* Uploading */
    ), this.nodes.wrapper;
  }
  /**
   * Shows uploading preloader
   * @param src - preview source
   */
  showPreloader(a) {
    this.nodes.imagePreloader.style.backgroundImage = `url(${a})`, this.toggleStatus(
      "uploading"
      /* Uploading */
    );
  }
  /**
   * Hide uploading preloader
   */
  hidePreloader() {
    this.nodes.imagePreloader.style.backgroundImage = "", this.toggleStatus(
      "empty"
      /* Empty */
    );
  }
  /**
   * Shows an image
   * @param url - image source
   */
  fillImage(a) {
    const r = /\.mp4$/.test(a) ? "VIDEO" : "IMG", c = {
      src: a
    };
    let i = "load";
    r === "VIDEO" && (c.autoplay = !0, c.loop = !0, c.muted = !0, c.playsinline = !0, i = "loadeddata"), this.nodes.imageEl = S(r, this.CSS.imageEl, c), this.nodes.imageEl.addEventListener(i, () => {
      this.toggleStatus(
        "filled"
        /* Filled */
      ), this.nodes.imagePreloader !== void 0 && (this.nodes.imagePreloader.style.backgroundImage = "");
    }), this.nodes.imageContainer.appendChild(this.nodes.imageEl);
  }
  /**
   * Shows caption input
   * @param text - caption content text
   */
  fillCaption(a) {
    this.nodes.caption !== void 0 && (this.nodes.caption.innerHTML = a);
  }
  /**
   * CSS classes
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      loading: this.api.styles.loader,
      input: this.api.styles.input,
      button: this.api.styles.button,
      /**
       * Tool's classes
       */
      wrapper: "image-tool",
      imageContainer: "image-tool__image",
      imagePreloader: "image-tool__image-preloader",
      imageEl: "image-tool__image-picture",
      caption: "image-tool__caption"
    };
  }
  /**
   * Creates upload-file button
   */
  createFileButton() {
    const a = S("div", [this.CSS.button]);
    return a.innerHTML = this.config.buttonContent ?? `${L} ${this.api.i18n.t("Select an Image")}`, a.addEventListener("click", () => {
      this.onSelectFile();
    }), a;
  }
  /**
   * Changes UI status
   * @param status - see {@link Ui.status} constants
   */
  toggleStatus(a) {
    for (const r in F)
      Object.prototype.hasOwnProperty.call(F, r) && this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${F[r]}`, a === F[r]);
  }
}
function D(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
var R = { exports: {} };
(function(C, a) {
  (function(r, c) {
    C.exports = c();
  })(window, function() {
    return function(r) {
      var c = {};
      function i(o) {
        if (c[o]) return c[o].exports;
        var n = c[o] = { i: o, l: !1, exports: {} };
        return r[o].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
      }
      return i.m = r, i.c = c, i.d = function(o, n, d) {
        i.o(o, n) || Object.defineProperty(o, n, { enumerable: !0, get: d });
      }, i.r = function(o) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o, "__esModule", { value: !0 });
      }, i.t = function(o, n) {
        if (1 & n && (o = i(o)), 8 & n || 4 & n && typeof o == "object" && o && o.__esModule) return o;
        var d = /* @__PURE__ */ Object.create(null);
        if (i.r(d), Object.defineProperty(d, "default", { enumerable: !0, value: o }), 2 & n && typeof o != "string") for (var b in o) i.d(d, b, (function(u) {
          return o[u];
        }).bind(null, b));
        return d;
      }, i.n = function(o) {
        var n = o && o.__esModule ? function() {
          return o.default;
        } : function() {
          return o;
        };
        return i.d(n, "a", n), n;
      }, i.o = function(o, n) {
        return Object.prototype.hasOwnProperty.call(o, n);
      }, i.p = "", i(i.s = 3);
    }([function(r, c) {
      var i;
      i = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        i = i || new Function("return this")();
      } catch {
        typeof window == "object" && (i = window);
      }
      r.exports = i;
    }, function(r, c, i) {
      (function(o) {
        var n = i(2), d = setTimeout;
        function b() {
        }
        function u(e) {
          if (!(this instanceof u)) throw new TypeError("Promises must be constructed via new");
          if (typeof e != "function") throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], t(e, this);
        }
        function f(e, l) {
          for (; e._state === 3; ) e = e._value;
          e._state !== 0 ? (e._handled = !0, u._immediateFn(function() {
            var s = e._state === 1 ? l.onFulfilled : l.onRejected;
            if (s !== null) {
              var g;
              try {
                g = s(e._value);
              } catch (m) {
                return void y(l.promise, m);
              }
              p(l.promise, g);
            } else (e._state === 1 ? p : y)(l.promise, e._value);
          })) : e._deferreds.push(l);
        }
        function p(e, l) {
          try {
            if (l === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (l && (typeof l == "object" || typeof l == "function")) {
              var s = l.then;
              if (l instanceof u) return e._state = 3, e._value = l, void w(e);
              if (typeof s == "function") return void t((g = s, m = l, function() {
                g.apply(m, arguments);
              }), e);
            }
            e._state = 1, e._value = l, w(e);
          } catch (h) {
            y(e, h);
          }
          var g, m;
        }
        function y(e, l) {
          e._state = 2, e._value = l, w(e);
        }
        function w(e) {
          e._state === 2 && e._deferreds.length === 0 && u._immediateFn(function() {
            e._handled || u._unhandledRejectionFn(e._value);
          });
          for (var l = 0, s = e._deferreds.length; l < s; l++) f(e, e._deferreds[l]);
          e._deferreds = null;
        }
        function v(e, l, s) {
          this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof l == "function" ? l : null, this.promise = s;
        }
        function t(e, l) {
          var s = !1;
          try {
            e(function(g) {
              s || (s = !0, p(l, g));
            }, function(g) {
              s || (s = !0, y(l, g));
            });
          } catch (g) {
            if (s) return;
            s = !0, y(l, g);
          }
        }
        u.prototype.catch = function(e) {
          return this.then(null, e);
        }, u.prototype.then = function(e, l) {
          var s = new this.constructor(b);
          return f(this, new v(e, l, s)), s;
        }, u.prototype.finally = n.a, u.all = function(e) {
          return new u(function(l, s) {
            if (!e || e.length === void 0) throw new TypeError("Promise.all accepts an array");
            var g = Array.prototype.slice.call(e);
            if (g.length === 0) return l([]);
            var m = g.length;
            function h(T, E) {
              try {
                if (E && (typeof E == "object" || typeof E == "function")) {
                  var j = E.then;
                  if (typeof j == "function") return void j.call(E, function(M) {
                    h(T, M);
                  }, s);
                }
                g[T] = E, --m == 0 && l(g);
              } catch (M) {
                s(M);
              }
            }
            for (var k = 0; k < g.length; k++) h(k, g[k]);
          });
        }, u.resolve = function(e) {
          return e && typeof e == "object" && e.constructor === u ? e : new u(function(l) {
            l(e);
          });
        }, u.reject = function(e) {
          return new u(function(l, s) {
            s(e);
          });
        }, u.race = function(e) {
          return new u(function(l, s) {
            for (var g = 0, m = e.length; g < m; g++) e[g].then(l, s);
          });
        }, u._immediateFn = typeof o == "function" && function(e) {
          o(e);
        } || function(e) {
          d(e, 0);
        }, u._unhandledRejectionFn = function(e) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", e);
        }, c.a = u;
      }).call(this, i(5).setImmediate);
    }, function(r, c, i) {
      c.a = function(o) {
        var n = this.constructor;
        return this.then(function(d) {
          return n.resolve(o()).then(function() {
            return d;
          });
        }, function(d) {
          return n.resolve(o()).then(function() {
            return n.reject(d);
          });
        });
      };
    }, function(r, c, i) {
      function o(t) {
        return (o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(t);
      }
      i(4);
      var n, d, b, u, f, p, y, w = i(8), v = (d = function(t) {
        return new Promise(function(e, l) {
          t = u(t), (t = f(t)).beforeSend && t.beforeSend();
          var s = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          s.open(t.method, t.url), s.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var h = t.headers[m];
            s.setRequestHeader(m, h);
          });
          var g = t.ratio;
          s.upload.addEventListener("progress", function(m) {
            var h = Math.round(m.loaded / m.total * 100), k = Math.ceil(h * g / 100);
            t.progress(Math.min(k, 100));
          }, !1), s.addEventListener("progress", function(m) {
            var h = Math.round(m.loaded / m.total * 100), k = Math.ceil(h * (100 - g) / 100) + g;
            t.progress(Math.min(k, 100));
          }, !1), s.onreadystatechange = function() {
            if (s.readyState === 4) {
              var m = s.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var h = w.parseHeaders(s.getAllResponseHeaders()), k = { body: m, code: s.status, headers: h };
              y(s.status) ? e(k) : l(k);
            }
          }, s.send(t.data);
        });
      }, b = function(t) {
        return t.method = "POST", d(t);
      }, u = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string") throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string") throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && o(t.headers) !== "object") throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(n).includes(t.type))) throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function") throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(e) {
        }, t.beforeSend = t.beforeSend || function(e) {
        }, t.ratio && typeof t.ratio != "number") throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100) throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string") throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean") throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string") throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, f = function(t) {
        switch (t.method) {
          case "GET":
            var e = p(t.data, n.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + e : t.url + "?" + e;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var l = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || n.JSON;
            }(t);
            (w.isFormData(t.data) || w.isFormElement(t.data)) && (l = n.FORM), t.data = p(t.data, l), l !== v.contentType.FORM && (t.headers["content-type"] = l);
        }
        return t;
      }, p = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case n.URLENCODED:
            return w.urlEncode(t);
          case n.JSON:
            return w.jsonEncode(t);
          case n.FORM:
            return w.formEncode(t);
          default:
            return t;
        }
      }, y = function(t) {
        return t >= 200 && t < 300;
      }, { contentType: n = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: d, get: function(t) {
        return t.method = "GET", d(t);
      }, post: b, transport: function(t) {
        return t = u(t), w.selectFiles(t).then(function(e) {
          for (var l = new FormData(), s = 0; s < e.length; s++) l.append(t.fieldName, e[s], e[s].name);
          w.isObject(t.data) && Object.keys(t.data).forEach(function(m) {
            var h = t.data[m];
            l.append(m, h);
          });
          var g = t.beforeSend;
          return t.beforeSend = function() {
            return g(e);
          }, t.data = l, b(t);
        });
      }, selectFiles: function(t) {
        return delete (t = u(t)).beforeSend, w.selectFiles(t);
      } });
      r.exports = v;
    }, function(r, c, i) {
      i.r(c);
      var o = i(1);
      window.Promise = window.Promise || o.a;
    }, function(r, c, i) {
      (function(o) {
        var n = o !== void 0 && o || typeof self < "u" && self || window, d = Function.prototype.apply;
        function b(u, f) {
          this._id = u, this._clearFn = f;
        }
        c.setTimeout = function() {
          return new b(d.call(setTimeout, n, arguments), clearTimeout);
        }, c.setInterval = function() {
          return new b(d.call(setInterval, n, arguments), clearInterval);
        }, c.clearTimeout = c.clearInterval = function(u) {
          u && u.close();
        }, b.prototype.unref = b.prototype.ref = function() {
        }, b.prototype.close = function() {
          this._clearFn.call(n, this._id);
        }, c.enroll = function(u, f) {
          clearTimeout(u._idleTimeoutId), u._idleTimeout = f;
        }, c.unenroll = function(u) {
          clearTimeout(u._idleTimeoutId), u._idleTimeout = -1;
        }, c._unrefActive = c.active = function(u) {
          clearTimeout(u._idleTimeoutId);
          var f = u._idleTimeout;
          f >= 0 && (u._idleTimeoutId = setTimeout(function() {
            u._onTimeout && u._onTimeout();
          }, f));
        }, i(6), c.setImmediate = typeof self < "u" && self.setImmediate || o !== void 0 && o.setImmediate || this && this.setImmediate, c.clearImmediate = typeof self < "u" && self.clearImmediate || o !== void 0 && o.clearImmediate || this && this.clearImmediate;
      }).call(this, i(0));
    }, function(r, c, i) {
      (function(o, n) {
        (function(d, b) {
          if (!d.setImmediate) {
            var u, f, p, y, w, v = 1, t = {}, e = !1, l = d.document, s = Object.getPrototypeOf && Object.getPrototypeOf(d);
            s = s && s.setTimeout ? s : d, {}.toString.call(d.process) === "[object process]" ? u = function(h) {
              n.nextTick(function() {
                m(h);
              });
            } : function() {
              if (d.postMessage && !d.importScripts) {
                var h = !0, k = d.onmessage;
                return d.onmessage = function() {
                  h = !1;
                }, d.postMessage("", "*"), d.onmessage = k, h;
              }
            }() ? (y = "setImmediate$" + Math.random() + "$", w = function(h) {
              h.source === d && typeof h.data == "string" && h.data.indexOf(y) === 0 && m(+h.data.slice(y.length));
            }, d.addEventListener ? d.addEventListener("message", w, !1) : d.attachEvent("onmessage", w), u = function(h) {
              d.postMessage(y + h, "*");
            }) : d.MessageChannel ? ((p = new MessageChannel()).port1.onmessage = function(h) {
              m(h.data);
            }, u = function(h) {
              p.port2.postMessage(h);
            }) : l && "onreadystatechange" in l.createElement("script") ? (f = l.documentElement, u = function(h) {
              var k = l.createElement("script");
              k.onreadystatechange = function() {
                m(h), k.onreadystatechange = null, f.removeChild(k), k = null;
              }, f.appendChild(k);
            }) : u = function(h) {
              setTimeout(m, 0, h);
            }, s.setImmediate = function(h) {
              typeof h != "function" && (h = new Function("" + h));
              for (var k = new Array(arguments.length - 1), T = 0; T < k.length; T++) k[T] = arguments[T + 1];
              var E = { callback: h, args: k };
              return t[v] = E, u(v), v++;
            }, s.clearImmediate = g;
          }
          function g(h) {
            delete t[h];
          }
          function m(h) {
            if (e) setTimeout(m, 0, h);
            else {
              var k = t[h];
              if (k) {
                e = !0;
                try {
                  (function(T) {
                    var E = T.callback, j = T.args;
                    switch (j.length) {
                      case 0:
                        E();
                        break;
                      case 1:
                        E(j[0]);
                        break;
                      case 2:
                        E(j[0], j[1]);
                        break;
                      case 3:
                        E(j[0], j[1], j[2]);
                        break;
                      default:
                        E.apply(b, j);
                    }
                  })(k);
                } finally {
                  g(h), e = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? o === void 0 ? this : o : self);
      }).call(this, i(0), i(7));
    }, function(r, c) {
      var i, o, n = r.exports = {};
      function d() {
        throw new Error("setTimeout has not been defined");
      }
      function b() {
        throw new Error("clearTimeout has not been defined");
      }
      function u(s) {
        if (i === setTimeout) return setTimeout(s, 0);
        if ((i === d || !i) && setTimeout) return i = setTimeout, setTimeout(s, 0);
        try {
          return i(s, 0);
        } catch {
          try {
            return i.call(null, s, 0);
          } catch {
            return i.call(this, s, 0);
          }
        }
      }
      (function() {
        try {
          i = typeof setTimeout == "function" ? setTimeout : d;
        } catch {
          i = d;
        }
        try {
          o = typeof clearTimeout == "function" ? clearTimeout : b;
        } catch {
          o = b;
        }
      })();
      var f, p = [], y = !1, w = -1;
      function v() {
        y && f && (y = !1, f.length ? p = f.concat(p) : w = -1, p.length && t());
      }
      function t() {
        if (!y) {
          var s = u(v);
          y = !0;
          for (var g = p.length; g; ) {
            for (f = p, p = []; ++w < g; ) f && f[w].run();
            w = -1, g = p.length;
          }
          f = null, y = !1, function(m) {
            if (o === clearTimeout) return clearTimeout(m);
            if ((o === b || !o) && clearTimeout) return o = clearTimeout, clearTimeout(m);
            try {
              o(m);
            } catch {
              try {
                return o.call(null, m);
              } catch {
                return o.call(this, m);
              }
            }
          }(s);
        }
      }
      function e(s, g) {
        this.fun = s, this.array = g;
      }
      function l() {
      }
      n.nextTick = function(s) {
        var g = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var m = 1; m < arguments.length; m++) g[m - 1] = arguments[m];
        p.push(new e(s, g)), p.length !== 1 || y || u(t);
      }, e.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = l, n.addListener = l, n.once = l, n.off = l, n.removeListener = l, n.removeAllListeners = l, n.emit = l, n.prependListener = l, n.prependOnceListener = l, n.listeners = function(s) {
        return [];
      }, n.binding = function(s) {
        throw new Error("process.binding is not supported");
      }, n.cwd = function() {
        return "/";
      }, n.chdir = function(s) {
        throw new Error("process.chdir is not supported");
      }, n.umask = function() {
        return 0;
      };
    }, function(r, c, i) {
      function o(d, b) {
        for (var u = 0; u < b.length; u++) {
          var f = b[u];
          f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(d, f.key, f);
        }
      }
      var n = i(9);
      r.exports = function() {
        function d() {
          (function(p, y) {
            if (!(p instanceof y)) throw new TypeError("Cannot call a class as a function");
          })(this, d);
        }
        var b, u, f;
        return b = d, f = [{ key: "urlEncode", value: function(p) {
          return n(p);
        } }, { key: "jsonEncode", value: function(p) {
          return JSON.stringify(p);
        } }, { key: "formEncode", value: function(p) {
          if (this.isFormData(p)) return p;
          if (this.isFormElement(p)) return new FormData(p);
          if (this.isObject(p)) {
            var y = new FormData();
            return Object.keys(p).forEach(function(w) {
              var v = p[w];
              y.append(w, v);
            }), y;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(p) {
          return Object.prototype.toString.call(p) === "[object Object]";
        } }, { key: "isFormData", value: function(p) {
          return p instanceof FormData;
        } }, { key: "isFormElement", value: function(p) {
          return p instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(y, w) {
            var v = document.createElement("INPUT");
            v.type = "file", p.multiple && v.setAttribute("multiple", "multiple"), p.accept && v.setAttribute("accept", p.accept), v.style.display = "none", document.body.appendChild(v), v.addEventListener("change", function(t) {
              var e = t.target.files;
              y(e), document.body.removeChild(v);
            }, !1), v.click();
          });
        } }, { key: "parseHeaders", value: function(p) {
          var y = p.trim().split(/[\r\n]+/), w = {};
          return y.forEach(function(v) {
            var t = v.split(": "), e = t.shift(), l = t.join(": ");
            e && (w[e] = l);
          }), w;
        } }], (u = null) && o(b.prototype, u), f && o(b, f), d;
      }();
    }, function(r, c) {
      var i = function(n) {
        return encodeURIComponent(n).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, o = function(n, d, b, u) {
        return d = d || null, b = b || "&", u = u || null, n ? function(f) {
          for (var p = new Array(), y = 0; y < f.length; y++) f[y] && p.push(f[y]);
          return p;
        }(Object.keys(n).map(function(f) {
          var p, y, w = f;
          if (u && (w = u + "[" + w + "]"), typeof n[f] == "object" && n[f] !== null) p = o(n[f], null, b, w);
          else {
            d && (y = w, w = !isNaN(parseFloat(y)) && isFinite(y) ? d + Number(w) : w);
            var v = n[f];
            v = (v = (v = (v = v === !0 ? "1" : v) === !1 ? "0" : v) === 0 ? "0" : v) || "", p = i(w) + "=" + i(v);
          }
          return p;
        })).join(b).replace(/[!'()*]/g, "") : "";
      };
      r.exports = o;
    }]);
  });
})(R);
var B = R.exports;
const _ = /* @__PURE__ */ D(B);
function O(C) {
  return C !== void 0 && typeof C.then == "function";
}
class q {
  /**
   * @param params - uploader module params
   * @param params.config - image tool config
   * @param params.onUpload - one callback for all uploading (file, url, d-n-d, pasting)
   * @param params.onError - callback for uploading errors
   */
  constructor({ config: a, onUpload: r, onError: c }) {
    this.config = a, this.onUpload = r, this.onError = c;
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.transport()
   * @param onPreview - callback fired when preview is ready
   */
  uploadSelectedFile({ onPreview: a }) {
    const r = function(i) {
      const o = new FileReader();
      o.readAsDataURL(i), o.onload = (n) => {
        a(n.target.result);
      };
    };
    let c;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function") {
      const i = this.config.uploader.uploadByFile;
      c = _.selectFiles({ accept: this.config.types ?? "image/*" }).then((o) => {
        r(o[0]);
        const n = i(o[0]);
        return O(n) || console.warn("Custom uploader method uploadByFile should return a Promise"), n;
      });
    } else
      c = _.transport({
        url: this.config.endpoints.byFile,
        data: this.config.additionalRequestData,
        accept: this.config.types ?? "image/*",
        headers: this.config.additionalRequestHeaders,
        beforeSend: (i) => {
          r(i[0]);
        },
        fieldName: this.config.field ?? "image"
      }).then((i) => i.body);
    c.then((i) => {
      this.onUpload(i);
    }).catch((i) => {
      this.onError(i);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param url - image source url
   */
  uploadByUrl(a) {
    let r;
    this.config.uploader && typeof this.config.uploader.uploadByUrl == "function" ? (r = this.config.uploader.uploadByUrl(a), O(r) || console.warn("Custom uploader method uploadByUrl should return a Promise")) : r = _.post({
      url: this.config.endpoints.byUrl,
      data: Object.assign({
        url: a
      }, this.config.additionalRequestData),
      type: _.contentType.JSON,
      headers: this.config.additionalRequestHeaders
    }).then((c) => c.body), r.then((c) => {
      this.onUpload(c);
    }).catch((c) => {
      this.onError(c);
    });
  }
  /**
   * Handle clicks on the upload file button
   * Fires ajax.post()
   * @param file - file pasted by drag-n-drop
   * @param onPreview - file pasted by drag-n-drop
   */
  uploadByFile(a, { onPreview: r }) {
    const c = new FileReader();
    c.readAsDataURL(a), c.onload = (o) => {
      r(o.target.result);
    };
    let i;
    if (this.config.uploader && typeof this.config.uploader.uploadByFile == "function")
      i = this.config.uploader.uploadByFile(a), O(i) || console.warn("Custom uploader method uploadByFile should return a Promise");
    else {
      const o = new FormData();
      o.append(this.config.field ?? "image", a), this.config.additionalRequestData && Object.keys(this.config.additionalRequestData).length && Object.entries(this.config.additionalRequestData).forEach(([n, d]) => {
        o.append(n, d);
      }), i = _.post({
        url: this.config.endpoints.byFile,
        data: o,
        type: _.contentType.JSON,
        headers: this.config.additionalRequestHeaders
      }).then((n) => n.body);
    }
    i.then((o) => {
      this.onUpload(o);
    }).catch((o) => {
      this.onError(o);
    });
  }
}
/**
 * Image Tool for the Editor.js
 * @author CodeX <team@codex.so>
 * @license MIT
 * @see {@link https://github.com/editor-js/image}
 *
 * To developers.
 * To simplify Tool structure, we split it to 4 parts:
 *  1) index.ts — main Tool's interface, public API and methods for working with data
 *  2) uploader.ts — module that has methods for sending files via AJAX: from device, by URL or File pasting
 *  3) ui.ts — module for UI manipulations: render, showing preloader, etc
 *  4) tunes.js — working with Block Tunes: render buttons, handle clicks
 *
 * For debug purposes there is a testing server
 * that can save uploaded files and return a Response {@link UploadResponseFormat}
 *
 *       $ node dev/server.js
 *
 * It will expose 8008 port, so you can pass http://localhost:8008 with the Tools config:
 *
 * image: {
 *   class: ImageTool,
 *   config: {
 *     endpoints: {
 *       byFile: 'http://localhost:8008/uploadFile',
 *       byUrl: 'http://localhost:8008/fetchUrl',
 *     }
 *   },
 * },
 */
class P {
  /**
   * @param tool - tool properties got from editor.js
   * @param tool.data - previously saved data
   * @param tool.config - user config for Tool
   * @param tool.api - Editor.js API
   * @param tool.readOnly - read-only mode flag
   * @param tool.block - current Block API
   */
  constructor({ data: a, config: r, api: c, readOnly: i, block: o }) {
    this.api = c, this.readOnly = i, this.block = o, this.config = {
      endpoints: r.endpoints,
      additionalRequestData: r.additionalRequestData,
      additionalRequestHeaders: r.additionalRequestHeaders,
      field: r.field,
      types: r.types,
      captionPlaceholder: this.api.i18n.t(r.captionPlaceholder ?? "Caption"),
      buttonContent: r.buttonContent,
      uploader: r.uploader,
      actions: r.actions
    }, this.uploader = new q({
      config: this.config,
      onUpload: (n) => this.onUpload(n),
      onError: (n) => this.uploadingFailed(n)
    }), this.ui = new x({
      api: c,
      config: this.config,
      onSelectFile: () => {
        this.uploader.uploadSelectedFile({
          onPreview: (n) => {
            this.ui.showPreloader(n);
          }
        });
      },
      readOnly: i
    }), this._data = {
      caption: "",
      withBorder: !1,
      withBackground: !1,
      stretched: !1,
      file: {
        url: ""
      }
    }, this.data = a;
  }
  /**
   * Notify core that read-only mode is supported
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   */
  static get toolbox() {
    return {
      icon: L,
      title: "Image"
    };
  }
  /**
   * Available image tools
   */
  static get tunes() {
    return [
      {
        name: "withBorder",
        icon: I,
        title: "With border",
        toggle: !0
      },
      {
        name: "stretched",
        icon: U,
        title: "Stretch image",
        toggle: !0
      },
      {
        name: "withBackground",
        icon: H,
        title: "With background",
        toggle: !0
      }
    ];
  }
  /**
   * Renders Block content
   */
  render() {
    return this.ui.render(this.data);
  }
  /**
   * Validate data: check if Image exists
   * @param savedData — data received after saving
   * @returns false if saved data is not correct, otherwise true
   */
  validate(a) {
    return !!a.file.url;
  }
  /**
   * Return Block data
   */
  save() {
    const a = this.ui.nodes.caption;
    return this._data.caption = a.innerHTML, this.data;
  }
  /**
   * Returns configuration for block tunes: add background, add border, stretch image
   * @returns TunesMenuConfig
   */
  renderSettings() {
    return P.tunes.concat(this.config.actions || []).map((r) => ({
      icon: r.icon,
      label: this.api.i18n.t(r.title),
      name: r.name,
      toggle: r.toggle,
      isActive: this.data[r.name],
      onActivate: () => {
        if (typeof r.action == "function") {
          r.action(r.name);
          return;
        }
        this.tuneToggled(r.name);
      }
    }));
  }
  /**
   * Fires after clicks on the Toolbox Image Icon
   * Initiates click on the Select File button
   */
  appendCallback() {
    this.ui.nodes.fileButton.click();
  }
  /**
   * Specify paste substitutes
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   */
  static get pasteConfig() {
    return {
      /**
       * Paste HTML into Editor
       */
      tags: [
        {
          img: { src: !0 }
        }
      ],
      /**
       * Paste URL of image into the Editor
       */
      patterns: {
        image: /https?:\/\/\S+\.(gif|jpe?g|tiff|png|svg|webp)(\?[a-z0-9=]*)?$/i
      },
      /**
       * Drag n drop file from into the Editor
       */
      files: {
        mimeTypes: ["image/*"]
      }
    };
  }
  /**
   * Specify paste handlers
   * @see {@link https://github.com/codex-team/editor.js/blob/master/docs/tools.md#paste-handling}
   * @param event - editor.js custom paste event
   *                              {@link https://github.com/codex-team/editor.js/blob/master/types/tools/paste-events.d.ts}
   */
  async onPaste(a) {
    switch (a.type) {
      case "tag": {
        const r = a.detail.data;
        if (/^blob:/.test(r.src)) {
          const i = await (await fetch(r.src)).blob();
          this.uploadFile(i);
          break;
        }
        this.uploadUrl(r.src);
        break;
      }
      case "pattern": {
        const r = a.detail.data;
        this.uploadUrl(r);
        break;
      }
      case "file": {
        const r = a.detail.file;
        this.uploadFile(r);
        break;
      }
    }
  }
  /**
   * Private methods
   * ̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿
   */
  /**
   * Stores all Tool's data
   * @param data - data in Image Tool format
   */
  set data(a) {
    this.image = a.file, this._data.caption = a.caption || "", this.ui.fillCaption(this._data.caption), P.tunes.forEach(({ name: r }) => {
      const c = typeof a[r] < "u" ? a[r] === !0 || a[r] === "true" : !1;
      this.setTune(r, c);
    });
  }
  /**
   * Return Tool data
   */
  get data() {
    return this._data;
  }
  /**
   * Set new image file
   * @param file - uploaded file data
   */
  set image(a) {
    this._data.file = a || { url: "" }, a && a.url && this.ui.fillImage(a.url);
  }
  /**
   * File uploading callback
   * @param response - uploading server response
   */
  onUpload(a) {
    a.success && a.file ? this.image = a.file : this.uploadingFailed("incorrect response: " + JSON.stringify(a));
  }
  /**
   * Handle uploader errors
   * @param errorText - uploading error info
   */
  uploadingFailed(a) {
    console.log("Image Tool: uploading failed because of", a), this.api.notifier.show({
      message: this.api.i18n.t("Couldn’t upload image. Please try another."),
      style: "error"
    }), this.ui.hidePreloader();
  }
  /**
   * Callback fired when Block Tune is activated
   * @param tuneName - tune that has been clicked
   */
  tuneToggled(a) {
    this.setTune(a, !this._data[a]);
  }
  /**
   * Set one tune
   * @param tuneName - {@link Tunes.tunes}
   * @param value - tune state
   */
  setTune(a, r) {
    this._data[a] = r, this.ui.applyTune(a, r), a === "stretched" && Promise.resolve().then(() => {
      this.block.stretched = r;
    }).catch((c) => {
      console.error(c);
    });
  }
  /**
   * Show preloader and upload image file
   * @param file - file that is currently uploading (from paste)
   */
  uploadFile(a) {
    this.uploader.uploadByFile(a, {
      onPreview: (r) => {
        this.ui.showPreloader(r);
      }
    });
  }
  /**
   * Show preloader and upload image by target url
   * @param url - url pasted
   */
  uploadUrl(a) {
    this.ui.showPreloader(a), this.uploader.uploadByUrl(a);
  }
}



/***/ }),

/***/ "./node_modules/@editorjs/inline-code/dist/inline-code.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@editorjs/inline-code/dist/inline-code.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".inline-code{background:rgba(250,239,240,.78);color:#b44437;padding:3px 4px;border-radius:5px;margin:0 1px;font-family:inherit;font-size:.86em;font-weight:500;letter-spacing:.3px}")),document.head.appendChild(e)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
const a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8L5 12L9 16"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8L19 12L15 16"/></svg>';
class s {
  constructor({ api: t }) {
    this.tag = "CODE", this.api = t, this.button = null, this.iconClasses = {
      base: this.api.styles.inlineToolButton,
      active: this.api.styles.inlineToolButtonActive
    };
  }
  /**
   * Class name for term-tag
   *
   * @type {string}
   */
  static get CSS() {
    return "inline-code";
  }
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @return {boolean}
   */
  static get isInline() {
    return !0;
  }
  /**
   * Create button element for Toolbar
   *
   * @return {HTMLElement}
   */
  render() {
    return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(this.iconClasses.base), this.button.innerHTML = this.toolboxIcon, this.button;
  }
  /**
   * Wrap/Unwrap selected fragment
   *
   * @param {Range} range - selected fragment
   */
  surround(t) {
    if (!t)
      return;
    let e = this.api.selection.findParentTag(this.tag, s.CSS);
    e ? this.unwrap(e) : this.wrap(t);
  }
  /**
   * Wrap selection with term-tag
   *
   * @param {Range} range - selected fragment
   */
  wrap(t) {
    let e = document.createElement(this.tag);
    e.classList.add(s.CSS), e.appendChild(t.extractContents()), t.insertNode(e), this.api.selection.expandToTag(e);
  }
  /**
   * Unwrap term-tag
   *
   * @param {HTMLElement} termWrapper - term wrapper tag
   */
  unwrap(t) {
    var i;
    this.api.selection.expandToTag(t);
    const e = window.getSelection();
    if (!e)
      return;
    const n = e.getRangeAt(0), o = n.extractContents();
    (i = t.parentNode) == null || i.removeChild(t), n.insertNode(o), e.removeAllRanges(), e.addRange(n);
  }
  /**
   * Check and change Term's state for current selection
   * 
   * @return {boolean}
   */
  checkState() {
    const t = this.api.selection.findParentTag(this.tag, s.CSS);
    return this.button && this.button.classList.toggle(this.iconClasses.active, !!t), !!t;
  }
  /**
   * Get Tool icon's SVG
   * @return {string}
   */
  get toolboxIcon() {
    return a;
  }
  /**
   * Sanitizer rule
   * @return {SanitizerConfig}
   */
  static get sanitize() {
    return {
      code: {
        class: s.CSS
      }
    };
  }
}



/***/ }),

/***/ "./node_modules/@editorjs/link/dist/link.mjs":
/*!***************************************************!*\
  !*** ./node_modules/@editorjs/link/dist/link.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ I)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(`.link-tool{position:relative}.link-tool__input{padding-left:38px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='%23707684' stroke-linecap='round' stroke-width='2' d='m7.7 12.6-.021.02a2.795 2.795 0 0 0-.044 4.005v0a2.795 2.795 0 0 0 3.936.006l1.455-1.438a3 3 0 0 0 .34-3.866l-.146-.207'/%3E%3Cpath stroke='%23707684' stroke-linecap='round' stroke-width='2' d='m16.22 11.12.136-.14c.933-.954.992-2.46.135-3.483v0a2.597 2.597 0 0 0-3.664-.32L11.39 8.386a3 3 0 0 0-.301 4.3l.031.034'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:10px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.link-tool__input-holder{position:relative}.link-tool__input-holder--error .link-tool__input{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-width='2' d='m7.7 12.6-.021.02a2.795 2.795 0 0 0-.044 4.005v0a2.795 2.795 0 0 0 3.936.006l1.455-1.438a3 3 0 0 0 .34-3.866l-.146-.207'/%3E%3Cpath stroke='rgb(224, 147, 147)' stroke-linecap='round' stroke-width='2' d='m16.22 11.12.136-.14c.933-.954.992-2.46.135-3.483v0a2.597 2.597 0 0 0-3.664-.32L11.39 8.386a3 3 0 0 0-.301 4.3l.031.034'/%3E%3C/svg%3E");background-color:#fff3f6;border-color:#f3e0e0;color:#a95a5a;box-shadow:inset 0 1px 3px #923e3e0d}.link-tool__input[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.link-tool__input[contentEditable=true][data-placeholder]:empty:before{opacity:1}.link-tool__input[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.link-tool__progress{position:absolute;box-shadow:inset 0 1px 3px #66556b0a;height:100%;width:0;background-color:#f4f5f7;z-index:-1}.link-tool__progress--loading{-webkit-animation:progress .5s ease-in;-webkit-animation-fill-mode:forwards}.link-tool__progress--loaded{width:100%}.link-tool__content{display:block;padding:25px;border-radius:2px;box-shadow:0 0 0 2px #fff;color:initial!important;text-decoration:none!important}.link-tool__content:after{content:"";clear:both;display:table}.link-tool__content--rendered{background:#fff;border:1px solid rgba(201,201,204,.48);box-shadow:0 1px 3px #0000001a;border-radius:6px;will-change:filter;animation:link-in .45s 1 cubic-bezier(.215,.61,.355,1)}.link-tool__content--rendered:hover{box-shadow:0 0 3px #00000029}.link-tool__image{background-position:center center;background-repeat:no-repeat;background-size:cover;margin:0 0 0 30px;width:65px;height:65px;border-radius:3px;float:right}.link-tool__title{font-size:17px;font-weight:600;line-height:1.5em;margin:0 0 10px}.link-tool__title+.link-tool__anchor{margin-top:25px}.link-tool__description{margin:0 0 20px;font-size:15px;line-height:1.55em;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}.link-tool__anchor{display:block;font-size:15px;line-height:1em;color:#888!important;border:0!important;padding:0!important}@keyframes link-in{0%{filter:blur(5px)}to{filter:none}}.codex-editor--narrow .link-tool__image{display:none}@-webkit-keyframes progress{0%{width:0}to{width:85%}}`)),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var C = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function O(k) {
  return k && k.__esModule && Object.prototype.hasOwnProperty.call(k, "default") ? k.default : k;
}
(function(k) {
  var w = function() {
    try {
      return !!Symbol.iterator;
    } catch {
      return !1;
    }
  }, d = w(), v = function(n) {
    var o = {
      next: function() {
        var e = n.shift();
        return { done: e === void 0, value: e };
      }
    };
    return d && (o[Symbol.iterator] = function() {
      return o;
    }), o;
  }, c = function(n) {
    return encodeURIComponent(n).replace(/%20/g, "+");
  }, i = function(n) {
    return decodeURIComponent(String(n).replace(/\+/g, " "));
  }, a = function() {
    var n = function(e) {
      Object.defineProperty(this, "_entries", { writable: !0, value: {} });
      var s = typeof e;
      if (s !== "undefined")
        if (s === "string")
          e !== "" && this._fromString(e);
        else if (e instanceof n) {
          var h = this;
          e.forEach(function(u, f) {
            h.append(f, u);
          });
        } else if (e !== null && s === "object")
          if (Object.prototype.toString.call(e) === "[object Array]")
            for (var t = 0; t < e.length; t++) {
              var y = e[t];
              if (Object.prototype.toString.call(y) === "[object Array]" || y.length !== 2)
                this.append(y[0], y[1]);
              else
                throw new TypeError("Expected [string, any] as entry at index " + t + " of URLSearchParams's input");
            }
          else
            for (var r in e)
              e.hasOwnProperty(r) && this.append(r, e[r]);
        else
          throw new TypeError("Unsupported input's type for URLSearchParams");
    }, o = n.prototype;
    o.append = function(e, s) {
      e in this._entries ? this._entries[e].push(String(s)) : this._entries[e] = [String(s)];
    }, o.delete = function(e) {
      delete this._entries[e];
    }, o.get = function(e) {
      return e in this._entries ? this._entries[e][0] : null;
    }, o.getAll = function(e) {
      return e in this._entries ? this._entries[e].slice(0) : [];
    }, o.has = function(e) {
      return e in this._entries;
    }, o.set = function(e, s) {
      this._entries[e] = [String(s)];
    }, o.forEach = function(e, s) {
      var h;
      for (var t in this._entries)
        if (this._entries.hasOwnProperty(t)) {
          h = this._entries[t];
          for (var y = 0; y < h.length; y++)
            e.call(s, h[y], t, this);
        }
    }, o.keys = function() {
      var e = [];
      return this.forEach(function(s, h) {
        e.push(h);
      }), v(e);
    }, o.values = function() {
      var e = [];
      return this.forEach(function(s) {
        e.push(s);
      }), v(e);
    }, o.entries = function() {
      var e = [];
      return this.forEach(function(s, h) {
        e.push([h, s]);
      }), v(e);
    }, d && (o[Symbol.iterator] = o.entries), o.toString = function() {
      var e = [];
      return this.forEach(function(s, h) {
        e.push(c(h) + "=" + c(s));
      }), e.join("&");
    }, k.URLSearchParams = n;
  }, p = function() {
    try {
      var n = k.URLSearchParams;
      return new n("?a=1").toString() === "a=1" && typeof n.prototype.set == "function";
    } catch {
      return !1;
    }
  };
  p() || a();
  var l = k.URLSearchParams.prototype;
  typeof l.sort != "function" && (l.sort = function() {
    var n = this, o = [];
    this.forEach(function(s, h) {
      o.push([h, s]), n._entries || n.delete(h);
    }), o.sort(function(s, h) {
      return s[0] < h[0] ? -1 : s[0] > h[0] ? 1 : 0;
    }), n._entries && (n._entries = {});
    for (var e = 0; e < o.length; e++)
      this.append(o[e][0], o[e][1]);
  }), typeof l._fromString != "function" && Object.defineProperty(l, "_fromString", {
    enumerable: !1,
    configurable: !1,
    writable: !1,
    value: function(n) {
      if (this._entries)
        this._entries = {};
      else {
        var o = [];
        this.forEach(function(t, y) {
          o.push(y);
        });
        for (var e = 0; e < o.length; e++)
          this.delete(o[e]);
      }
      n = n.replace(/^\?/, "");
      for (var s = n.split("&"), h, e = 0; e < s.length; e++)
        h = s[e].split("="), this.append(
          i(h[0]),
          h.length > 1 ? i(h[1]) : ""
        );
    }
  });
})(
  typeof C < "u" ? C : typeof window < "u" ? window : typeof self < "u" ? self : C
);
(function(k) {
  var w = function() {
    try {
      var c = new k.URL("b", "http://a");
      return c.pathname = "c d", c.href === "http://a/c%20d" && c.searchParams;
    } catch {
      return !1;
    }
  }, d = function() {
    var c = k.URL, i = function(l, n) {
      typeof l != "string" && (l = String(l));
      var o = document, e;
      if (n && (k.location === void 0 || n !== k.location.href)) {
        o = document.implementation.createHTMLDocument(""), e = o.createElement("base"), e.href = n, o.head.appendChild(e);
        try {
          if (e.href.indexOf(n) !== 0)
            throw new Error(e.href);
        } catch (m) {
          throw new Error("URL unable to set base " + n + " due to " + m);
        }
      }
      var s = o.createElement("a");
      s.href = l, e && (o.body.appendChild(s), s.href = s.href);
      var h = o.createElement("input");
      if (h.type = "url", h.value = l, s.protocol === ":" || !/:/.test(s.href) || !h.checkValidity() && !n)
        throw new TypeError("Invalid URL");
      Object.defineProperty(this, "_anchorElement", {
        value: s
      });
      var t = new k.URLSearchParams(this.search), y = !0, r = !0, u = this;
      ["append", "delete", "set"].forEach(function(m) {
        var b = t[m];
        t[m] = function() {
          b.apply(t, arguments), y && (r = !1, u.search = t.toString(), r = !0);
        };
      }), Object.defineProperty(this, "searchParams", {
        value: t,
        enumerable: !0
      });
      var f = void 0;
      Object.defineProperty(this, "_updateSearchParams", {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: function() {
          this.search !== f && (f = this.search, r && (y = !1, this.searchParams._fromString(this.search), y = !0));
        }
      });
    }, a = i.prototype, p = function(l) {
      Object.defineProperty(a, l, {
        get: function() {
          return this._anchorElement[l];
        },
        set: function(n) {
          this._anchorElement[l] = n;
        },
        enumerable: !0
      });
    };
    ["hash", "host", "hostname", "port", "protocol"].forEach(function(l) {
      p(l);
    }), Object.defineProperty(a, "search", {
      get: function() {
        return this._anchorElement.search;
      },
      set: function(l) {
        this._anchorElement.search = l, this._updateSearchParams();
      },
      enumerable: !0
    }), Object.defineProperties(a, {
      toString: {
        get: function() {
          var l = this;
          return function() {
            return l.href;
          };
        }
      },
      href: {
        get: function() {
          return this._anchorElement.href.replace(/\?$/, "");
        },
        set: function(l) {
          this._anchorElement.href = l, this._updateSearchParams();
        },
        enumerable: !0
      },
      pathname: {
        get: function() {
          return this._anchorElement.pathname.replace(/(^\/?)/, "/");
        },
        set: function(l) {
          this._anchorElement.pathname = l;
        },
        enumerable: !0
      },
      origin: {
        get: function() {
          var l = { "http:": 80, "https:": 443, "ftp:": 21 }[this._anchorElement.protocol], n = this._anchorElement.port != l && this._anchorElement.port !== "";
          return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (n ? ":" + this._anchorElement.port : "");
        },
        enumerable: !0
      },
      password: {
        // TODO
        get: function() {
          return "";
        },
        set: function(l) {
        },
        enumerable: !0
      },
      username: {
        // TODO
        get: function() {
          return "";
        },
        set: function(l) {
        },
        enumerable: !0
      }
    }), i.createObjectURL = function(l) {
      return c.createObjectURL.apply(c, arguments);
    }, i.revokeObjectURL = function(l) {
      return c.revokeObjectURL.apply(c, arguments);
    }, k.URL = i;
  };
  if (w() || d(), k.location !== void 0 && !("origin" in k.location)) {
    var v = function() {
      return k.location.protocol + "//" + k.location.hostname + (k.location.port ? ":" + k.location.port : "");
    };
    try {
      Object.defineProperty(k.location, "origin", {
        get: v,
        enumerable: !0
      });
    } catch {
      setInterval(function() {
        k.location.origin = v();
      }, 100);
    }
  }
})(
  typeof C < "u" ? C : typeof window < "u" ? window : typeof self < "u" ? self : C
);
var j = { exports: {} };
(function(k, w) {
  (function(d, v) {
    k.exports = v();
  })(window, function() {
    return function(d) {
      var v = {};
      function c(i) {
        if (v[i])
          return v[i].exports;
        var a = v[i] = { i, l: !1, exports: {} };
        return d[i].call(a.exports, a, a.exports, c), a.l = !0, a.exports;
      }
      return c.m = d, c.c = v, c.d = function(i, a, p) {
        c.o(i, a) || Object.defineProperty(i, a, { enumerable: !0, get: p });
      }, c.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
      }, c.t = function(i, a) {
        if (1 & a && (i = c(i)), 8 & a || 4 & a && typeof i == "object" && i && i.__esModule)
          return i;
        var p = /* @__PURE__ */ Object.create(null);
        if (c.r(p), Object.defineProperty(p, "default", { enumerable: !0, value: i }), 2 & a && typeof i != "string")
          for (var l in i)
            c.d(p, l, (function(n) {
              return i[n];
            }).bind(null, l));
        return p;
      }, c.n = function(i) {
        var a = i && i.__esModule ? function() {
          return i.default;
        } : function() {
          return i;
        };
        return c.d(a, "a", a), a;
      }, c.o = function(i, a) {
        return Object.prototype.hasOwnProperty.call(i, a);
      }, c.p = "", c(c.s = 3);
    }([function(d, v) {
      var c;
      c = function() {
        return this;
      }();
      try {
        c = c || new Function("return this")();
      } catch {
        typeof window == "object" && (c = window);
      }
      d.exports = c;
    }, function(d, v, c) {
      (function(i) {
        var a = c(2), p = setTimeout;
        function l() {
        }
        function n(r) {
          if (!(this instanceof n))
            throw new TypeError("Promises must be constructed via new");
          if (typeof r != "function")
            throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], y(r, this);
        }
        function o(r, u) {
          for (; r._state === 3; )
            r = r._value;
          r._state !== 0 ? (r._handled = !0, n._immediateFn(function() {
            var f = r._state === 1 ? u.onFulfilled : u.onRejected;
            if (f !== null) {
              var m;
              try {
                m = f(r._value);
              } catch (b) {
                return void s(u.promise, b);
              }
              e(u.promise, m);
            } else
              (r._state === 1 ? e : s)(u.promise, r._value);
          })) : r._deferreds.push(u);
        }
        function e(r, u) {
          try {
            if (u === r)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (u && (typeof u == "object" || typeof u == "function")) {
              var f = u.then;
              if (u instanceof n)
                return r._state = 3, r._value = u, void h(r);
              if (typeof f == "function")
                return void y((m = f, b = u, function() {
                  m.apply(b, arguments);
                }), r);
            }
            r._state = 1, r._value = u, h(r);
          } catch (g) {
            s(r, g);
          }
          var m, b;
        }
        function s(r, u) {
          r._state = 2, r._value = u, h(r);
        }
        function h(r) {
          r._state === 2 && r._deferreds.length === 0 && n._immediateFn(function() {
            r._handled || n._unhandledRejectionFn(r._value);
          });
          for (var u = 0, f = r._deferreds.length; u < f; u++)
            o(r, r._deferreds[u]);
          r._deferreds = null;
        }
        function t(r, u, f) {
          this.onFulfilled = typeof r == "function" ? r : null, this.onRejected = typeof u == "function" ? u : null, this.promise = f;
        }
        function y(r, u) {
          var f = !1;
          try {
            r(function(m) {
              f || (f = !0, e(u, m));
            }, function(m) {
              f || (f = !0, s(u, m));
            });
          } catch (m) {
            if (f)
              return;
            f = !0, s(u, m);
          }
        }
        n.prototype.catch = function(r) {
          return this.then(null, r);
        }, n.prototype.then = function(r, u) {
          var f = new this.constructor(l);
          return o(this, new t(r, u, f)), f;
        }, n.prototype.finally = a.a, n.all = function(r) {
          return new n(function(u, f) {
            if (!r || r.length === void 0)
              throw new TypeError("Promise.all accepts an array");
            var m = Array.prototype.slice.call(r);
            if (m.length === 0)
              return u([]);
            var b = m.length;
            function g(T, E) {
              try {
                if (E && (typeof E == "object" || typeof E == "function")) {
                  var S = E.then;
                  if (typeof S == "function")
                    return void S.call(E, function(L) {
                      g(T, L);
                    }, f);
                }
                m[T] = E, --b == 0 && u(m);
              } catch (L) {
                f(L);
              }
            }
            for (var _ = 0; _ < m.length; _++)
              g(_, m[_]);
          });
        }, n.resolve = function(r) {
          return r && typeof r == "object" && r.constructor === n ? r : new n(function(u) {
            u(r);
          });
        }, n.reject = function(r) {
          return new n(function(u, f) {
            f(r);
          });
        }, n.race = function(r) {
          return new n(function(u, f) {
            for (var m = 0, b = r.length; m < b; m++)
              r[m].then(u, f);
          });
        }, n._immediateFn = typeof i == "function" && function(r) {
          i(r);
        } || function(r) {
          p(r, 0);
        }, n._unhandledRejectionFn = function(r) {
          typeof console < "u" && console && console.warn("Possible Unhandled Promise Rejection:", r);
        }, v.a = n;
      }).call(this, c(5).setImmediate);
    }, function(d, v, c) {
      v.a = function(i) {
        var a = this.constructor;
        return this.then(function(p) {
          return a.resolve(i()).then(function() {
            return p;
          });
        }, function(p) {
          return a.resolve(i()).then(function() {
            return a.reject(p);
          });
        });
      };
    }, function(d, v, c) {
      function i(t) {
        return (i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
          return typeof y;
        } : function(y) {
          return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
        })(t);
      }
      c(4);
      var a, p, l, n, o, e, s = c(8), h = (p = function(t) {
        return new Promise(function(y, r) {
          t = n(t), t = o(t);
          var u = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP");
          u.open(t.method, t.url), u.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(t.headers).forEach(function(m) {
            var b = t.headers[m];
            u.setRequestHeader(m, b);
          });
          var f = t.ratio;
          u.upload.addEventListener("progress", function(m) {
            var b = Math.round(m.loaded / m.total * 100), g = Math.ceil(b * f / 100);
            t.progress(g);
          }, !1), u.addEventListener("progress", function(m) {
            var b = Math.round(m.loaded / m.total * 100), g = Math.ceil(b * (100 - f) / 100) + f;
            t.progress(g);
          }, !1), u.onreadystatechange = function() {
            if (u.readyState === 4) {
              var m = u.response;
              try {
                m = JSON.parse(m);
              } catch {
              }
              var b = s.parseHeaders(u.getAllResponseHeaders()), g = { body: m, code: u.status, headers: b };
              u.status === 200 ? y(g) : r(g);
            }
          }, u.send(t.data);
        });
      }, l = function(t) {
        return t.method = "POST", p(t);
      }, n = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        if (t.url && typeof t.url != "string")
          throw new Error("Url must be a string");
        if (t.url = t.url || "", t.method && typeof t.method != "string")
          throw new Error("`method` must be a string or null");
        if (t.method = t.method ? t.method.toUpperCase() : "GET", t.headers && i(t.headers) !== "object")
          throw new Error("`headers` must be an object or null");
        if (t.headers = t.headers || {}, t.type && (typeof t.type != "string" || !Object.values(a).includes(t.type)))
          throw new Error("`type` must be taken from module's «contentType» library");
        if (t.progress && typeof t.progress != "function")
          throw new Error("`progress` must be a function or null");
        if (t.progress = t.progress || function(y) {
        }, t.beforeSend = t.beforeSend || function(y) {
        }, t.ratio && typeof t.ratio != "number")
          throw new Error("`ratio` must be a number");
        if (t.ratio < 0 || t.ratio > 100)
          throw new Error("`ratio` must be in a 0-100 interval");
        if (t.ratio = t.ratio || 90, t.accept && typeof t.accept != "string")
          throw new Error("`accept` must be a string with a list of allowed mime-types");
        if (t.accept = t.accept || "*/*", t.multiple && typeof t.multiple != "boolean")
          throw new Error("`multiple` must be a true or false");
        if (t.multiple = t.multiple || !1, t.fieldName && typeof t.fieldName != "string")
          throw new Error("`fieldName` must be a string");
        return t.fieldName = t.fieldName || "files", t;
      }, o = function(t) {
        switch (t.method) {
          case "GET":
            var y = e(t.data, a.URLENCODED);
            delete t.data, t.url = /\?/.test(t.url) ? t.url + "&" + y : t.url + "?" + y;
            break;
          case "POST":
          case "PUT":
          case "DELETE":
          case "UPDATE":
            var r = function() {
              return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).type || a.JSON;
            }(t);
            (s.isFormData(t.data) || s.isFormElement(t.data)) && (r = a.FORM), t.data = e(t.data, r), r !== h.contentType.FORM && (t.headers["content-type"] = r);
        }
        return t;
      }, e = function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        switch (arguments.length > 1 ? arguments[1] : void 0) {
          case a.URLENCODED:
            return s.urlEncode(t);
          case a.JSON:
            return s.jsonEncode(t);
          case a.FORM:
            return s.formEncode(t);
          default:
            return t;
        }
      }, { contentType: a = { URLENCODED: "application/x-www-form-urlencoded; charset=utf-8", FORM: "multipart/form-data", JSON: "application/json; charset=utf-8" }, request: p, get: function(t) {
        return t.method = "GET", p(t);
      }, post: l, transport: function(t) {
        return t = n(t), s.selectFiles(t).then(function(y) {
          for (var r = new FormData(), u = 0; u < y.length; u++)
            r.append(t.fieldName, y[u], y[u].name);
          return s.isObject(t.data) && Object.keys(t.data).forEach(function(f) {
            var m = t.data[f];
            r.append(f, m);
          }), t.beforeSend && t.beforeSend(y), t.data = r, l(t);
        });
      }, selectFiles: function(t) {
        return delete (t = n(t)).beforeSend, s.selectFiles(t);
      } });
      d.exports = h;
    }, function(d, v, c) {
      c.r(v);
      var i = c(1);
      window.Promise = window.Promise || i.a;
    }, function(d, v, c) {
      (function(i) {
        var a = i !== void 0 && i || typeof self < "u" && self || window, p = Function.prototype.apply;
        function l(n, o) {
          this._id = n, this._clearFn = o;
        }
        v.setTimeout = function() {
          return new l(p.call(setTimeout, a, arguments), clearTimeout);
        }, v.setInterval = function() {
          return new l(p.call(setInterval, a, arguments), clearInterval);
        }, v.clearTimeout = v.clearInterval = function(n) {
          n && n.close();
        }, l.prototype.unref = l.prototype.ref = function() {
        }, l.prototype.close = function() {
          this._clearFn.call(a, this._id);
        }, v.enroll = function(n, o) {
          clearTimeout(n._idleTimeoutId), n._idleTimeout = o;
        }, v.unenroll = function(n) {
          clearTimeout(n._idleTimeoutId), n._idleTimeout = -1;
        }, v._unrefActive = v.active = function(n) {
          clearTimeout(n._idleTimeoutId);
          var o = n._idleTimeout;
          o >= 0 && (n._idleTimeoutId = setTimeout(function() {
            n._onTimeout && n._onTimeout();
          }, o));
        }, c(6), v.setImmediate = typeof self < "u" && self.setImmediate || i !== void 0 && i.setImmediate || this && this.setImmediate, v.clearImmediate = typeof self < "u" && self.clearImmediate || i !== void 0 && i.clearImmediate || this && this.clearImmediate;
      }).call(this, c(0));
    }, function(d, v, c) {
      (function(i, a) {
        (function(p, l) {
          if (!p.setImmediate) {
            var n, o, e, s, h, t = 1, y = {}, r = !1, u = p.document, f = Object.getPrototypeOf && Object.getPrototypeOf(p);
            f = f && f.setTimeout ? f : p, {}.toString.call(p.process) === "[object process]" ? n = function(g) {
              a.nextTick(function() {
                b(g);
              });
            } : function() {
              if (p.postMessage && !p.importScripts) {
                var g = !0, _ = p.onmessage;
                return p.onmessage = function() {
                  g = !1;
                }, p.postMessage("", "*"), p.onmessage = _, g;
              }
            }() ? (s = "setImmediate$" + Math.random() + "$", h = function(g) {
              g.source === p && typeof g.data == "string" && g.data.indexOf(s) === 0 && b(+g.data.slice(s.length));
            }, p.addEventListener ? p.addEventListener("message", h, !1) : p.attachEvent("onmessage", h), n = function(g) {
              p.postMessage(s + g, "*");
            }) : p.MessageChannel ? ((e = new MessageChannel()).port1.onmessage = function(g) {
              b(g.data);
            }, n = function(g) {
              e.port2.postMessage(g);
            }) : u && "onreadystatechange" in u.createElement("script") ? (o = u.documentElement, n = function(g) {
              var _ = u.createElement("script");
              _.onreadystatechange = function() {
                b(g), _.onreadystatechange = null, o.removeChild(_), _ = null;
              }, o.appendChild(_);
            }) : n = function(g) {
              setTimeout(b, 0, g);
            }, f.setImmediate = function(g) {
              typeof g != "function" && (g = new Function("" + g));
              for (var _ = new Array(arguments.length - 1), T = 0; T < _.length; T++)
                _[T] = arguments[T + 1];
              var E = { callback: g, args: _ };
              return y[t] = E, n(t), t++;
            }, f.clearImmediate = m;
          }
          function m(g) {
            delete y[g];
          }
          function b(g) {
            if (r)
              setTimeout(b, 0, g);
            else {
              var _ = y[g];
              if (_) {
                r = !0;
                try {
                  (function(T) {
                    var E = T.callback, S = T.args;
                    switch (S.length) {
                      case 0:
                        E();
                        break;
                      case 1:
                        E(S[0]);
                        break;
                      case 2:
                        E(S[0], S[1]);
                        break;
                      case 3:
                        E(S[0], S[1], S[2]);
                        break;
                      default:
                        E.apply(l, S);
                    }
                  })(_);
                } finally {
                  m(g), r = !1;
                }
              }
            }
          }
        })(typeof self > "u" ? i === void 0 ? this : i : self);
      }).call(this, c(0), c(7));
    }, function(d, v) {
      var c, i, a = d.exports = {};
      function p() {
        throw new Error("setTimeout has not been defined");
      }
      function l() {
        throw new Error("clearTimeout has not been defined");
      }
      function n(f) {
        if (c === setTimeout)
          return setTimeout(f, 0);
        if ((c === p || !c) && setTimeout)
          return c = setTimeout, setTimeout(f, 0);
        try {
          return c(f, 0);
        } catch {
          try {
            return c.call(null, f, 0);
          } catch {
            return c.call(this, f, 0);
          }
        }
      }
      (function() {
        try {
          c = typeof setTimeout == "function" ? setTimeout : p;
        } catch {
          c = p;
        }
        try {
          i = typeof clearTimeout == "function" ? clearTimeout : l;
        } catch {
          i = l;
        }
      })();
      var o, e = [], s = !1, h = -1;
      function t() {
        s && o && (s = !1, o.length ? e = o.concat(e) : h = -1, e.length && y());
      }
      function y() {
        if (!s) {
          var f = n(t);
          s = !0;
          for (var m = e.length; m; ) {
            for (o = e, e = []; ++h < m; )
              o && o[h].run();
            h = -1, m = e.length;
          }
          o = null, s = !1, function(b) {
            if (i === clearTimeout)
              return clearTimeout(b);
            if ((i === l || !i) && clearTimeout)
              return i = clearTimeout, clearTimeout(b);
            try {
              i(b);
            } catch {
              try {
                return i.call(null, b);
              } catch {
                return i.call(this, b);
              }
            }
          }(f);
        }
      }
      function r(f, m) {
        this.fun = f, this.array = m;
      }
      function u() {
      }
      a.nextTick = function(f) {
        var m = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var b = 1; b < arguments.length; b++)
            m[b - 1] = arguments[b];
        e.push(new r(f, m)), e.length !== 1 || s || n(y);
      }, r.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = u, a.addListener = u, a.once = u, a.off = u, a.removeListener = u, a.removeAllListeners = u, a.emit = u, a.prependListener = u, a.prependOnceListener = u, a.listeners = function(f) {
        return [];
      }, a.binding = function(f) {
        throw new Error("process.binding is not supported");
      }, a.cwd = function() {
        return "/";
      }, a.chdir = function(f) {
        throw new Error("process.chdir is not supported");
      }, a.umask = function() {
        return 0;
      };
    }, function(d, v, c) {
      function i(p, l) {
        for (var n = 0; n < l.length; n++) {
          var o = l[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(p, o.key, o);
        }
      }
      var a = c(9);
      d.exports = function() {
        function p() {
          (function(e, s) {
            if (!(e instanceof s))
              throw new TypeError("Cannot call a class as a function");
          })(this, p);
        }
        var l, n, o;
        return l = p, o = [{ key: "urlEncode", value: function(e) {
          return a(e);
        } }, { key: "jsonEncode", value: function(e) {
          return JSON.stringify(e);
        } }, { key: "formEncode", value: function(e) {
          if (this.isFormData(e))
            return e;
          if (this.isFormElement(e))
            return new FormData(e);
          if (this.isObject(e)) {
            var s = new FormData();
            return Object.keys(e).forEach(function(h) {
              var t = e[h];
              s.append(h, t);
            }), s;
          }
          throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement");
        } }, { key: "isObject", value: function(e) {
          return Object.prototype.toString.call(e) === "[object Object]";
        } }, { key: "isFormData", value: function(e) {
          return e instanceof FormData;
        } }, { key: "isFormElement", value: function(e) {
          return e instanceof HTMLFormElement;
        } }, { key: "selectFiles", value: function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new Promise(function(s, h) {
            var t = document.createElement("INPUT");
            t.type = "file", e.multiple && t.setAttribute("multiple", "multiple"), e.accept && t.setAttribute("accept", e.accept), t.style.display = "none", document.body.appendChild(t), t.addEventListener("change", function(y) {
              var r = y.target.files;
              s(r), document.body.removeChild(t);
            }, !1), t.click();
          });
        } }, { key: "parseHeaders", value: function(e) {
          var s = e.trim().split(/[\r\n]+/), h = {};
          return s.forEach(function(t) {
            var y = t.split(": "), r = y.shift(), u = y.join(": ");
            r && (h[r] = u);
          }), h;
        } }], (n = null) && i(l.prototype, n), o && i(l, o), p;
      }();
    }, function(d, v) {
      var c = function(a) {
        return encodeURIComponent(a).replace(/[!'()*]/g, escape).replace(/%20/g, "+");
      }, i = function(a, p, l, n) {
        return p = p || null, l = l || "&", n = n || null, a ? function(o) {
          for (var e = new Array(), s = 0; s < o.length; s++)
            o[s] && e.push(o[s]);
          return e;
        }(Object.keys(a).map(function(o) {
          var e, s, h = o;
          if (n && (h = n + "[" + h + "]"), typeof a[o] == "object" && a[o] !== null)
            e = i(a[o], null, l, h);
          else {
            p && (s = h, h = !isNaN(parseFloat(s)) && isFinite(s) ? p + Number(h) : h);
            var t = a[o];
            t = (t = (t = (t = t === !0 ? "1" : t) === !1 ? "0" : t) === 0 ? "0" : t) || "", e = c(h) + "=" + c(t);
          }
          return e;
        })).join(l).replace(/[!'()*]/g, "") : "";
      };
      d.exports = i;
    }]);
  });
})(j);
var P = j.exports;
const R = /* @__PURE__ */ O(P), F = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.69998 12.6L7.67896 12.62C6.53993 13.7048 6.52012 15.5155 7.63516 16.625V16.625C8.72293 17.7073 10.4799 17.7102 11.5712 16.6314L13.0263 15.193C14.0703 14.1609 14.2141 12.525 13.3662 11.3266L13.22 11.12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.22 11.12L16.3564 10.9805C17.2895 10.0265 17.3478 8.5207 16.4914 7.49733V7.49733C15.569 6.39509 13.9269 6.25143 12.8271 7.17675L11.39 8.38588C10.0935 9.47674 9.95704 11.4241 11.0887 12.6852L11.12 12.72"/></svg>';
class I {
  /**
   * Notify core that read-only mode supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: F,
      title: "Link"
    };
  }
  /**
   * Allow to press Enter inside the LinkTool input
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * @param {object} options - Tool constructor options fot from Editor.js
   * @param {LinkToolData} options.data - previously saved data
   * @param {LinkToolConfig} options.config - user config for Tool
   * @param {object} options.api - Editor.js API
   * @param {boolean} options.readOnly - read-only mode flag
   */
  constructor({ data: w, config: d, api: v, readOnly: c }) {
    this.api = v, this.readOnly = c, this.config = {
      endpoint: d.endpoint || "",
      headers: d.headers || {}
    }, this.nodes = {
      wrapper: null,
      container: null,
      progress: null,
      input: null,
      inputHolder: null,
      linkContent: null,
      linkImage: null,
      linkTitle: null,
      linkDescription: null,
      linkText: null
    }, this._data = {
      link: "",
      meta: {}
    }, this.data = w;
  }
  /**
   * Renders Block content
   *
   * @public
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.nodes.wrapper = this.make("div", this.CSS.baseClass), this.nodes.container = this.make("div", this.CSS.container), this.nodes.inputHolder = this.makeInputHolder(), this.nodes.linkContent = this.prepareLinkPreview(), Object.keys(this.data.meta).length ? (this.nodes.container.appendChild(this.nodes.linkContent), this.showLinkPreview(this.data.meta)) : this.nodes.container.appendChild(this.nodes.inputHolder), this.nodes.wrapper.appendChild(this.nodes.container), this.nodes.wrapper;
  }
  /**
   * Return Block data
   *
   * @public
   *
   * @returns {LinkToolData}
   */
  save() {
    return this.data;
  }
  /**
   * Validate Block data
   * - check if given link is an empty string or not.
   *
   * @public
   *
   * @returns {boolean} false if saved data is incorrect, otherwise true
   */
  validate() {
    return this.data.link.trim() !== "";
  }
  /**
   * Stores all Tool's data
   *
   * @param {LinkToolData} data - data to store
   */
  set data(w) {
    this._data = Object.assign({}, {
      link: w.link || this._data.link,
      meta: w.meta || this._data.meta
    });
  }
  /**
   * Return Tool data
   *
   * @returns {LinkToolData}
   */
  get data() {
    return this._data;
  }
  /**
   * @returns {object} - Link Tool styles
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      /**
       * Tool's classes
       */
      container: "link-tool",
      inputEl: "link-tool__input",
      inputHolder: "link-tool__input-holder",
      inputError: "link-tool__input-holder--error",
      linkContent: "link-tool__content",
      linkContentRendered: "link-tool__content--rendered",
      linkImage: "link-tool__image",
      linkTitle: "link-tool__title",
      linkDescription: "link-tool__description",
      linkText: "link-tool__anchor",
      progress: "link-tool__progress",
      progressLoading: "link-tool__progress--loading",
      progressLoaded: "link-tool__progress--loaded"
    };
  }
  /**
   * Prepare input holder
   *
   * @returns {HTMLElement}
   */
  makeInputHolder() {
    const w = this.make("div", this.CSS.inputHolder);
    return this.nodes.progress = this.make("label", this.CSS.progress), this.nodes.input = this.make("div", [this.CSS.input, this.CSS.inputEl], {
      contentEditable: !this.readOnly
    }), this.nodes.input.dataset.placeholder = this.api.i18n.t("Link"), this.readOnly || (this.nodes.input.addEventListener("paste", (d) => {
      this.startFetching(d);
    }), this.nodes.input.addEventListener("keydown", (d) => {
      const [v, c] = [13, 65], i = d.ctrlKey || d.metaKey;
      switch (d.keyCode) {
        case v:
          d.preventDefault(), d.stopPropagation(), this.startFetching(d);
          break;
        case c:
          i && this.selectLinkUrl(d);
          break;
      }
    })), w.appendChild(this.nodes.progress), w.appendChild(this.nodes.input), w;
  }
  /**
   * Activates link data fetching by url
   *
   * @param {PasteEvent|KeyboardEvent} event - fetching could be fired by a pase or keydown events
   */
  startFetching(w) {
    let d = this.nodes.input.textContent;
    w.type === "paste" && (d = (w.clipboardData || window.clipboardData).getData("text")), this.removeErrorStyle(), this.fetchLinkData(d);
  }
  /**
   * If previous link data fetching failed, remove error styles
   */
  removeErrorStyle() {
    this.nodes.inputHolder.classList.remove(this.CSS.inputError), this.nodes.inputHolder.insertBefore(this.nodes.progress, this.nodes.input);
  }
  /**
   * Select LinkTool input content by CMD+A
   *
   * @param {KeyboardEvent} event - keydown
   */
  selectLinkUrl(w) {
    w.preventDefault(), w.stopPropagation();
    const d = window.getSelection(), v = new Range(), a = d.anchorNode.parentNode.closest(`.${this.CSS.inputHolder}`).querySelector(`.${this.CSS.inputEl}`);
    v.selectNodeContents(a), d.removeAllRanges(), d.addRange(v);
  }
  /**
   * Prepare link preview holder
   *
   * @returns {HTMLElement}
   */
  prepareLinkPreview() {
    const w = this.make("a", this.CSS.linkContent, {
      target: "_blank",
      rel: "nofollow noindex noreferrer"
    });
    return this.nodes.linkImage = this.make("div", this.CSS.linkImage), this.nodes.linkTitle = this.make("div", this.CSS.linkTitle), this.nodes.linkDescription = this.make("p", this.CSS.linkDescription), this.nodes.linkText = this.make("span", this.CSS.linkText), w;
  }
  /**
   * Compose link preview from fetched data
   *
   * @param {metaData} meta - link meta data
   */
  showLinkPreview({ image: w, title: d, description: v }) {
    this.nodes.container.appendChild(this.nodes.linkContent), w && w.url && (this.nodes.linkImage.style.backgroundImage = "url(" + w.url + ")", this.nodes.linkContent.appendChild(this.nodes.linkImage)), d && (this.nodes.linkTitle.textContent = d, this.nodes.linkContent.appendChild(this.nodes.linkTitle)), v && (this.nodes.linkDescription.textContent = v, this.nodes.linkContent.appendChild(this.nodes.linkDescription)), this.nodes.linkContent.classList.add(this.CSS.linkContentRendered), this.nodes.linkContent.setAttribute("href", this.data.link), this.nodes.linkContent.appendChild(this.nodes.linkText);
    try {
      this.nodes.linkText.textContent = new URL(this.data.link).hostname;
    } catch {
      this.nodes.linkText.textContent = this.data.link;
    }
  }
  /**
   * Show loading progress bar
   */
  showProgress() {
    this.nodes.progress.classList.add(this.CSS.progressLoading);
  }
  /**
   * Hide loading progress bar
   *
   * @returns {Promise<void>}
   */
  hideProgress() {
    return new Promise((w) => {
      this.nodes.progress.classList.remove(this.CSS.progressLoading), this.nodes.progress.classList.add(this.CSS.progressLoaded), setTimeout(w, 500);
    });
  }
  /**
   * If data fetching failed, set input error style
   */
  applyErrorStyle() {
    this.nodes.inputHolder.classList.add(this.CSS.inputError), this.nodes.progress.remove();
  }
  /**
   * Sends to backend pasted url and receives link data
   *
   * @param {string} url - link source url
   */
  async fetchLinkData(w) {
    this.showProgress(), this.data = { link: w };
    try {
      const { body: d } = await R.get({
        url: this.config.endpoint,
        headers: this.config.headers,
        data: {
          url: w
        }
      });
      this.onFetch(d);
    } catch {
      this.fetchingFailed(this.api.i18n.t("Couldn't fetch the link data"));
    }
  }
  /**
   * Link data fetching callback
   *
   * @param {UploadResponseFormat} response - backend response
   */
  onFetch(w) {
    if (!w || !w.success) {
      this.fetchingFailed(this.api.i18n.t("Couldn't get this link data, try the other one"));
      return;
    }
    const d = w.meta, v = w.link || this.data.link;
    if (this.data = {
      meta: d,
      link: v
    }, !d) {
      this.fetchingFailed(this.api.i18n.t("Wrong response format from the server"));
      return;
    }
    this.hideProgress().then(() => {
      this.nodes.inputHolder.remove(), this.showLinkPreview(d);
    });
  }
  /**
   * Handle link fetching errors
   *
   * @private
   *
   * @param {string} errorMessage - message to explain user what he should do
   */
  fetchingFailed(w) {
    this.api.notifier.show({
      message: w,
      style: "error"
    }), this.applyErrorStyle();
  }
  /**
   * Helper method for elements creation
   *
   * @param {string} tagName - name of creating element
   * @param {string|string[]} [classNames] - list of CSS classes to add
   * @param {object} [attributes] - object with attributes to add
   * @returns {HTMLElement}
   */
  make(w, d = null, v = {}) {
    const c = document.createElement(w);
    Array.isArray(d) ? c.classList.add(...d) : d && c.classList.add(d);
    for (const i in v)
      c[i] = v[i];
    return c;
  }
}



/***/ }),

/***/ "./node_modules/@editorjs/list/dist/list.mjs":
/*!***************************************************!*\
  !*** ./node_modules/@editorjs/list/dist/list.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".cdx-list{margin:0;padding-left:40px;outline:none}.cdx-list__item{padding:5.5px 0 5.5px 3px;line-height:1.6em}.cdx-list--unordered{list-style:disc}.cdx-list--ordered{list-style:decimal}.cdx-list-settings{display:flex}.cdx-list-settings .cdx-settings-button{width:50%}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
const a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>', o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>';
class d {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allow to use native Enter behaviour
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: a,
      title: "List"
    };
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - tool constructor options
   * @param {ListData} params.data - previously saved data
   * @param {object} params.config - user config for Tool
   * @param {object} params.api - Editor.js API
   * @param {boolean} params.readOnly - read-only mode flag
   */
  constructor({ data: e, config: t, api: r, readOnly: s }) {
    this._elements = {
      wrapper: null
    }, this.api = r, this.readOnly = s, this.settings = [
      {
        name: "unordered",
        label: this.api.i18n.t("Unordered"),
        icon: a,
        default: t.defaultStyle === "unordered" || !1
      },
      {
        name: "ordered",
        label: this.api.i18n.t("Ordered"),
        icon: o,
        default: t.defaultStyle === "ordered" || !0
      }
    ], this._data = {
      style: this.settings.find((i) => i.default === !0).name,
      items: []
    }, this.data = e;
  }
  /**
   * Returns list tag with items
   *
   * @returns {Element}
   * @public
   */
  render() {
    return this._elements.wrapper = this.makeMainTag(this._data.style), this._data.items.length ? this._data.items.forEach((e) => {
      this._elements.wrapper.appendChild(this._make("li", this.CSS.item, {
        innerHTML: e
      }));
    }) : this._elements.wrapper.appendChild(this._make("li", this.CSS.item)), this.readOnly || this._elements.wrapper.addEventListener("keydown", (e) => {
      const [t, r] = [13, 8];
      switch (e.keyCode) {
        case t:
          this.getOutofList(e);
          break;
        case r:
          this.backspace(e);
          break;
      }
    }, !1), this._elements.wrapper;
  }
  /**
   * @returns {ListData}
   * @public
   */
  save() {
    return this.data;
  }
  /**
   * Allow List Tool to be converted to/from other block
   *
   * @returns {{export: Function, import: Function}}
   */
  static get conversionConfig() {
    return {
      /**
       * To create exported string from list, concatenate items by dot-symbol.
       *
       * @param {ListData} data - list data to create a string from thats
       * @returns {string}
       */
      export: (e) => e.items.join(". "),
      /**
       * To create a list from other block's string, just put it at the first item
       *
       * @param {string} string - string to create list tool data from that
       * @returns {ListData}
       */
      import: (e) => ({
        items: [e],
        style: "unordered"
      })
    };
  }
  /**
   * Sanitizer rules
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      style: {},
      items: {
        br: !0
      }
    };
  }
  /**
   * Settings
   *
   * @public
   * @returns {Array}
   */
  renderSettings() {
    return this.settings.map((e) => ({
      ...e,
      isActive: this._data.style === e.name,
      closeOnActivate: !0,
      onActivate: () => this.toggleTune(e.name)
    }));
  }
  /**
   * On paste callback that is fired from Editor
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const t = e.detail.data;
    this.data = this.pasteHandler(t);
  }
  /**
   * List Tool on paste configuration
   *
   * @public
   */
  static get pasteConfig() {
    return {
      tags: ["OL", "UL", "LI"]
    };
  }
  /**
   * Creates main <ul> or <ol> tag depended on style
   *
   * @param {string} style - 'ordered' or 'unordered'
   * @returns {HTMLOListElement|HTMLUListElement}
   */
  makeMainTag(e) {
    const t = e === "ordered" ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered, r = e === "ordered" ? "ol" : "ul";
    return this._make(r, [this.CSS.baseBlock, this.CSS.wrapper, t], {
      contentEditable: !this.readOnly
    });
  }
  /**
   * Toggles List style
   *
   * @param {string} style - 'ordered'|'unordered'
   */
  toggleTune(e) {
    const t = this.makeMainTag(e);
    for (; this._elements.wrapper.hasChildNodes(); )
      t.appendChild(this._elements.wrapper.firstChild);
    this._elements.wrapper.replaceWith(t), this._elements.wrapper = t, this._data.style = e;
  }
  /**
   * Styles
   *
   * @private
   */
  get CSS() {
    return {
      baseBlock: this.api.styles.block,
      wrapper: "cdx-list",
      wrapperOrdered: "cdx-list--ordered",
      wrapperUnordered: "cdx-list--unordered",
      item: "cdx-list__item"
    };
  }
  /**
   * List data setter
   *
   * @param {ListData} listData
   */
  set data(e) {
    e || (e = {}), this._data.style = e.style || this.settings.find((r) => r.default === !0).name, this._data.items = e.items || [];
    const t = this._elements.wrapper;
    t && t.parentNode.replaceChild(this.render(), t);
  }
  /**
   * Return List data
   *
   * @returns {ListData}
   */
  get data() {
    this._data.items = [];
    const e = this._elements.wrapper.querySelectorAll(`.${this.CSS.item}`);
    for (let t = 0; t < e.length; t++)
      e[t].innerHTML.replace("<br>", " ").trim() && this._data.items.push(e[t].innerHTML);
    return this._data;
  }
  /**
   * Helper for making Elements with attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {Array|string} classNames  - list or name of CSS classname(s)
   * @param  {object} attributes        - any attributes
   * @returns {Element}
   */
  _make(e, t = null, r = {}) {
    const s = document.createElement(e);
    Array.isArray(t) ? s.classList.add(...t) : t && s.classList.add(t);
    for (const i in r)
      s[i] = r[i];
    return s;
  }
  /**
   * Returns current List item by the caret position
   *
   * @returns {Element}
   */
  get currentItem() {
    let e = window.getSelection().anchorNode;
    return e.nodeType !== Node.ELEMENT_NODE && (e = e.parentNode), e.closest(`.${this.CSS.item}`);
  }
  /**
   * Get out from List Tool
   * by Enter on the empty last item
   *
   * @param {KeyboardEvent} event
   */
  getOutofList(e) {
    const t = this._elements.wrapper.querySelectorAll("." + this.CSS.item);
    if (t.length < 2)
      return;
    const r = t[t.length - 1], s = this.currentItem;
    s === r && !r.textContent.trim().length && (s.parentElement.removeChild(s), this.api.blocks.insert(), this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex()), e.preventDefault(), e.stopPropagation());
  }
  /**
   * Handle backspace
   *
   * @param {KeyboardEvent} event
   */
  backspace(e) {
    const t = this._elements.wrapper.querySelectorAll("." + this.CSS.item), r = t[0];
    r && t.length < 2 && !r.innerHTML.replace("<br>", " ").trim() && e.preventDefault();
  }
  /**
   * Select LI content by CMD+A
   *
   * @param {KeyboardEvent} event
   */
  selectItem(e) {
    e.preventDefault();
    const t = window.getSelection(), r = t.anchorNode.parentNode, s = r.closest("." + this.CSS.item), i = new Range();
    i.selectNodeContents(s), t.removeAllRanges(), t.addRange(i);
  }
  /**
   * Handle UL, OL and LI tags paste and returns List data
   *
   * @param {HTMLUListElement|HTMLOListElement|HTMLLIElement} element
   * @returns {ListData}
   */
  pasteHandler(e) {
    const { tagName: t } = e;
    let r;
    switch (t) {
      case "OL":
        r = "ordered";
        break;
      case "UL":
      case "LI":
        r = "unordered";
    }
    const s = {
      style: r,
      items: []
    };
    if (t === "LI")
      s.items = [e.innerHTML];
    else {
      const i = Array.from(e.querySelectorAll("LI"));
      s.items = i.map((n) => n.innerHTML).filter((n) => !!n.trim());
    }
    return s;
  }
}



/***/ }),

/***/ "./node_modules/@editorjs/marker/dist/marker.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@editorjs/marker/dist/marker.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ s)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".cdx-marker{background:rgba(245,235,111,.29);padding:3px 0}")),document.head.appendChild(e)}}catch(d){console.error("vite-plugin-css-injected-by-js",d)}})();
const o = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M11.3536 9.31802L12.7678 7.90381C13.5488 7.12276 14.8151 7.12276 15.5962 7.90381C16.3772 8.68486 16.3772 9.95119 15.5962 10.7322L14.182 12.1464M11.3536 9.31802L7.96729 12.7043C7.40889 13.2627 7.02827 13.9739 6.8734 14.7482L6.69798 15.6253C6.55804 16.325 7.17496 16.942 7.87468 16.802L8.75176 16.6266C9.52612 16.4717 10.2373 16.0911 10.7957 15.5327L14.182 12.1464M11.3536 9.31802L14.182 12.1464"/><line x1="15" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>';
class s {
  /**
   * Class name for term-tag
   *
   * @type {string}
   */
  static get CSS() {
    return "cdx-marker";
  }
  /**
   * @param {{api: object}}  - Editor.js API
   */
  constructor({ api: t }) {
    this.api = t, this.button = null, this.tag = "MARK", this.iconClasses = {
      base: this.api.styles.inlineToolButton,
      active: this.api.styles.inlineToolButtonActive
    };
  }
  /**
   * Specifies Tool as Inline Toolbar Tool
   *
   * @return {boolean}
   */
  static get isInline() {
    return !0;
  }
  /**
   * Create button element for Toolbar
   *
   * @return {HTMLElement}
   */
  render() {
    return this.button = document.createElement("button"), this.button.type = "button", this.button.classList.add(this.iconClasses.base), this.button.innerHTML = this.toolboxIcon, this.button;
  }
  /**
   * Wrap/Unwrap selected fragment
   *
   * @param {Range} range - selected fragment
   */
  surround(t) {
    if (!t)
      return;
    let e = this.api.selection.findParentTag(this.tag, s.CSS);
    e ? this.unwrap(e) : this.wrap(t);
  }
  /**
   * Wrap selection with term-tag
   *
   * @param {Range} range - selected fragment
   */
  wrap(t) {
    let e = document.createElement(this.tag);
    e.classList.add(s.CSS), e.appendChild(t.extractContents()), t.insertNode(e), this.api.selection.expandToTag(e);
  }
  /**
   * Unwrap term-tag
   *
   * @param {HTMLElement} termWrapper - term wrapper tag
   */
  unwrap(t) {
    this.api.selection.expandToTag(t);
    let e = window.getSelection(), n = e.getRangeAt(0), i = n.extractContents();
    t.parentNode.removeChild(t), n.insertNode(i), e.removeAllRanges(), e.addRange(n);
  }
  /**
   * Check and change Term's state for current selection
   */
  checkState() {
    const t = this.api.selection.findParentTag(this.tag, s.CSS);
    this.button.classList.toggle(this.iconClasses.active, !!t);
  }
  /**
   * Get Tool icon's SVG
   * @return {string}
   */
  get toolboxIcon() {
    return o;
  }
  /**
   * Sanitizer rule
   * @return {{mark: {class: string}}}
   */
  static get sanitize() {
    return {
      mark: {
        class: s.CSS
      }
    };
  }
}



/***/ }),

/***/ "./node_modules/@editorjs/nested-list/dist/nested-list.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@editorjs/nested-list/dist/nested-list.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ f)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.cdx-nested-list{margin:0;padding:0;outline:none;counter-reset:item;list-style:none}.cdx-nested-list__item{line-height:1.6em;display:flex;margin:2px 0}.cdx-nested-list__item [contenteditable]{outline:none}.cdx-nested-list__item-body{flex-grow:2}.cdx-nested-list__item-content,.cdx-nested-list__item-children{flex-basis:100%}.cdx-nested-list__item-content{word-break:break-word;white-space:pre-wrap}.cdx-nested-list__item:before{counter-increment:item;margin-right:5px;white-space:nowrap}.cdx-nested-list--ordered>.cdx-nested-list__item:before{content:counters(item,".") ". "}.cdx-nested-list--unordered>.cdx-nested-list__item:before{content:"•"}.cdx-nested-list__settings{display:flex}.cdx-nested-list__settings .cdx-settings-button{width:50%}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
function c(d) {
  return d.nodeType === Node.ELEMENT_NODE;
}
function p(d, e = null, t) {
  const r = document.createElement(d);
  Array.isArray(e) ? r.classList.add(...e) : e && r.classList.add(e);
  for (const n in t)
    r[n] = t[n];
  return r;
}
function g(d) {
  const e = p("div");
  return e.appendChild(d), e.innerHTML;
}
function C(d) {
  let e;
  return d.nodeType !== Node.ELEMENT_NODE ? e = d.textContent : (e = d.innerHTML, e = e.replaceAll("<br>", "")), (e == null ? void 0 : e.trim().length) === 0;
}
class u {
  /**
   * Store internal properties
   */
  constructor() {
    this.savedFakeCaret = void 0;
  }
  /**
   * Saves caret position using hidden <span>
   *
   * @returns {void}
   */
  save() {
    const e = u.range, t = p("span");
    t.hidden = !0, e && (e.insertNode(t), this.savedFakeCaret = t);
  }
  /**
   * Restores the caret position saved by the save() method
   *
   * @returns {void}
   */
  restore() {
    if (!this.savedFakeCaret)
      return;
    const e = window.getSelection();
    if (!e)
      return;
    const t = new Range();
    t.setStartAfter(this.savedFakeCaret), t.setEndAfter(this.savedFakeCaret), e.removeAllRanges(), e.addRange(t), setTimeout(() => {
      var r;
      (r = this.savedFakeCaret) == null || r.remove();
    }, 150);
  }
  /**
   * Returns the first range
   *
   * @returns {Range|null}
   */
  static get range() {
    const e = window.getSelection();
    return e && e.rangeCount ? e.getRangeAt(0) : null;
  }
  /**
   * Extract content fragment from Caret position to the end of contenteditable element
   *
   * @returns {DocumentFragment|void}
   */
  static extractFragmentFromCaretPositionTillTheEnd() {
    const e = window.getSelection();
    if (!e || !e.rangeCount)
      return;
    const t = e.getRangeAt(0);
    let r = t.startContainer;
    if (r.nodeType !== Node.ELEMENT_NODE) {
      if (!r.parentNode)
        return;
      r = r.parentNode;
    }
    if (!c(r))
      return;
    const n = r.closest("[contenteditable]");
    if (!n)
      return;
    t.deleteContents();
    const s = t.cloneRange();
    return s.selectNodeContents(n), s.setStart(t.endContainer, t.endOffset), s.extractContents();
  }
  /**
   * Set focus to contenteditable or native input element
   *
   * @param {HTMLElement} element - element where to set focus
   * @param {boolean} atStart - where to set focus: at the start or at the end
   * @returns {void}
   */
  static focus(e, t = !0) {
    const r = document.createRange(), n = window.getSelection();
    n && (r.selectNodeContents(e), r.collapse(t), n.removeAllRanges(), n.addRange(r));
  }
  /**
   * Check if the caret placed at the start of the contenteditable element
   *
   * @returns {boolean}
   */
  static isAtStart() {
    const e = window.getSelection();
    if (!e || e.focusOffset > 0)
      return !1;
    const t = e.focusNode;
    return !t || !c(t) ? !1 : u.getHigherLevelSiblings(t, "left").every((s) => C(s));
  }
  /**
   * Get all first-level (first child of [contenteditabel]) siblings from passed node
   * Then you can check it for emptiness
   *
   * @example
   * <div contenteditable>
   * <p></p>                            |
   * <p></p>                            | left first-level siblings
   * <p></p>                            |
   * <blockquote><a><b>adaddad</b><a><blockquote>       <-- passed node for example <b>
   * <p></p>                            |
   * <p></p>                            | right first-level siblings
   * <p></p>                            |
   * </div>
   * @param {HTMLElement} from - element from which siblings should be searched
   * @param {'left' | 'right'} direction - direction of search
   * @returns {HTMLElement[]}
   */
  static getHigherLevelSiblings(e, t = "left") {
    let r = e;
    const n = [];
    for (; r.parentNode && r.parentNode.contentEditable !== "true"; )
      r = r.parentNode;
    const s = t === "left" ? "previousSibling" : "nextSibling";
    for (; r[s]; )
      r = r[s], n.push(r);
    return n;
  }
}
const w = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>', S = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>';
class f {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allow to use native Enter behaviour
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {ToolboxConfig}
   */
  static get toolbox() {
    return {
      icon: S,
      title: "List"
    };
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - tool constructor options
   * @param {ListData} params.data - previously saved data
   * @param {object} params.config - user config for Tool
   * @param {object} params.api - Editor.js API
   * @param {boolean} params.readOnly - read-only mode flag
   */
  constructor({ data: e, config: t, api: r, readOnly: n }) {
    var i;
    this.nodes = {
      wrapper: null
    }, this.api = r, this.readOnly = n, this.config = t, this.defaultListStyle = ((i = this.config) == null ? void 0 : i.defaultStyle) === "ordered" ? "ordered" : "unordered";
    const s = {
      style: this.defaultListStyle,
      items: []
    };
    this.data = e && Object.keys(e).length ? e : s, this.caret = new u();
  }
  /**
   * Returns list tag with items
   *
   * @returns {Element}
   * @public
   */
  render() {
    return this.nodes.wrapper = this.makeListWrapper(this.data.style, [
      this.CSS.baseBlock
    ]), this.data.items.length ? this.appendItems(this.data.items, this.nodes.wrapper) : this.appendItems(
      [
        {
          content: "",
          items: []
        }
      ],
      this.nodes.wrapper
    ), this.readOnly || this.nodes.wrapper.addEventListener(
      "keydown",
      (e) => {
        switch (e.key) {
          case "Enter":
            this.enterPressed(e);
            break;
          case "Backspace":
            this.backspace(e);
            break;
          case "Tab":
            e.shiftKey ? this.shiftTab(e) : this.addTab(e);
            break;
        }
      },
      !1
    ), this.nodes.wrapper;
  }
  /**
   * Creates Block Tune allowing to change the list style
   *
   * @public
   * @returns {Array}
   */
  renderSettings() {
    return [
      {
        name: "unordered",
        label: this.api.i18n.t("Unordered"),
        icon: w
      },
      {
        name: "ordered",
        label: this.api.i18n.t("Ordered"),
        icon: S
      }
    ].map((t) => ({
      name: t.name,
      icon: t.icon,
      label: t.label,
      isActive: this.data.style === t.name,
      closeOnActivate: !0,
      onActivate: () => {
        this.listStyle = t.name;
      }
    }));
  }
  /**
   * On paste sanitzation config. Allow only tags that are allowed in the Tool.
   *
   * @returns {PasteConfig} - paste config.
   */
  static get pasteConfig() {
    return {
      tags: ["OL", "UL", "LI"]
    };
  }
  /**
   * On paste callback that is fired from Editor.
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(e) {
    const t = e.detail.data;
    this.data = this.pasteHandler(t);
    const r = this.nodes.wrapper;
    r && r.parentNode && r.parentNode.replaceChild(this.render(), r);
  }
  /**
   * Handle UL, OL and LI tags paste and returns List data
   *
   * @param {HTMLUListElement|HTMLOListElement|HTMLLIElement} element
   * @returns {ListData}
   */
  pasteHandler(e) {
    const { tagName: t } = e;
    let r = "unordered", n;
    switch (t) {
      case "OL":
        r = "ordered", n = "ol";
        break;
      case "UL":
      case "LI":
        r = "unordered", n = "ul";
    }
    const s = {
      style: r,
      items: []
    }, i = (l) => Array.from(l.querySelectorAll(":scope > li")).map((o) => {
      var m;
      const a = o.querySelector(`:scope > ${n}`), y = a ? i(a) : [];
      return {
        content: ((m = o == null ? void 0 : o.firstChild) == null ? void 0 : m.textContent) || "",
        items: y
      };
    });
    return s.items = i(e), s;
  }
  /**
   * Renders children list
   *
   * @param {ListItem[]} items - items data to append
   * @param {Element} parentItem - where to append
   * @returns {void}
   */
  appendItems(e, t) {
    e.forEach((r) => {
      const n = this.createItem(r.content, r.items);
      t.appendChild(n);
    });
  }
  /**
   * Renders the single item
   *
   * @param {string} content - item content to render
   * @param {ListItem[]} [items] - children
   * @returns {Element}
   */
  createItem(e, t = []) {
    const r = p("li", this.CSS.item), n = p("div", this.CSS.itemBody), s = p("div", this.CSS.itemContent, {
      innerHTML: e,
      contentEditable: (!this.readOnly).toString()
    });
    return n.appendChild(s), r.appendChild(n), t && t.length > 0 && this.addChildrenList(r, t), r;
  }
  /**
   * Extracts tool's data from the DOM
   *
   * @returns {ListData}
   */
  save() {
    const e = (t) => Array.from(
      t.querySelectorAll(`:scope > .${this.CSS.item}`)
    ).map((n) => {
      const s = n.querySelector(`.${this.CSS.itemChildren}`), i = this.getItemContent(n), l = s ? e(s) : [];
      return {
        content: i,
        items: l
      };
    });
    return {
      style: this.data.style,
      items: this.nodes.wrapper ? e(this.nodes.wrapper) : []
    };
  }
  /**
   * Append children list to passed item
   *
   * @param {Element} parentItem - item that should contain passed sub-items
   * @param {ListItem[]} items - sub items to append
   */
  addChildrenList(e, t) {
    const r = e.querySelector(`.${this.CSS.itemBody}`), n = this.makeListWrapper(void 0, [
      this.CSS.itemChildren
    ]);
    this.appendItems(t, n), r && r.appendChild(n);
  }
  /**
   * Creates main <ul> or <ol> tag depended on style
   *
   * @param {string} [style] - 'ordered' or 'unordered'
   * @param {string[]} [classes] - additional classes to append
   * @returns {HTMLOListElement|HTMLUListElement}
   */
  makeListWrapper(e = this.listStyle, t = []) {
    const r = e === "ordered" ? "ol" : "ul", n = e === "ordered" ? this.CSS.wrapperOrdered : this.CSS.wrapperUnordered;
    return t.push(n), p(r, [this.CSS.wrapper, ...t]);
  }
  /**
   * Styles
   *
   * @returns {NestedListCssClasses} - CSS classes names by keys
   * @private
   */
  get CSS() {
    return {
      baseBlock: this.api.styles.block,
      wrapper: "cdx-nested-list",
      wrapperOrdered: "cdx-nested-list--ordered",
      wrapperUnordered: "cdx-nested-list--unordered",
      item: "cdx-nested-list__item",
      itemBody: "cdx-nested-list__item-body",
      itemContent: "cdx-nested-list__item-content",
      itemChildren: "cdx-nested-list__item-children",
      settingsWrapper: "cdx-nested-list__settings",
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive
    };
  }
  /**
   * Get list style name
   *
   * @returns {string}
   */
  get listStyle() {
    return this.data.style || this.defaultListStyle;
  }
  /**
   * Set list style
   *
   * @param {ListDataStyle} style - new style to set
   */
  set listStyle(e) {
    if (!this.nodes || !this.nodes.wrapper)
      return;
    const t = Array.from(
      this.nodes.wrapper.querySelectorAll(`.${this.CSS.wrapper}`)
    );
    t.push(this.nodes.wrapper), t.forEach((r) => {
      r.classList.toggle(this.CSS.wrapperUnordered, e === "unordered"), r.classList.toggle(this.CSS.wrapperOrdered, e === "ordered");
    }), this.data.style = e;
  }
  /**
   * Returns current List item by the caret position
   *
   * @returns {Element}
   */
  get currentItem() {
    const e = window.getSelection();
    if (!e)
      return null;
    let t = e.anchorNode;
    return !t || (c(t) || (t = t.parentNode), !t) || !c(t) ? null : t.closest(`.${this.CSS.item}`);
  }
  /**
   * Handles Enter keypress
   *
   * @param {KeyboardEvent} event - keydown
   * @returns {void}
   */
  enterPressed(e) {
    const t = this.currentItem;
    if (e.stopPropagation(), e.preventDefault(), e.isComposing)
      return;
    const r = t ? this.getItemContent(t).trim().length === 0 : !0, n = (t == null ? void 0 : t.parentNode) === this.nodes.wrapper, s = (t == null ? void 0 : t.nextElementSibling) === null;
    if (n && s && r) {
      this.getOutOfList();
      return;
    } else if (s && r) {
      this.unshiftItem();
      return;
    }
    const i = u.extractFragmentFromCaretPositionTillTheEnd();
    if (!i)
      return;
    const l = g(i), h = t == null ? void 0 : t.querySelector(
      `.${this.CSS.itemChildren}`
    ), o = this.createItem(l, void 0);
    h && Array.from(h.querySelectorAll(`.${this.CSS.item}`)).length > 0 ? h.prepend(o) : t == null || t.after(o), this.focusItem(o);
  }
  /**
   * Decrease indentation of the current item
   *
   * @returns {void}
   */
  unshiftItem() {
    const e = this.currentItem;
    if (!e || !e.parentNode || !c(e.parentNode))
      return;
    const t = e.parentNode.closest(`.${this.CSS.item}`);
    if (!t)
      return;
    this.caret.save(), t.after(e), this.caret.restore();
    const r = t.querySelector(
      `.${this.CSS.itemChildren}`
    );
    if (!r)
      return;
    r.children.length === 0 && r.remove();
  }
  /**
   * Return the item content
   *
   * @param {Element} item - item wrapper (<li>)
   * @returns {string}
   */
  getItemContent(e) {
    const t = e.querySelector(`.${this.CSS.itemContent}`);
    return !t || C(t) ? "" : t.innerHTML;
  }
  /**
   * Sets focus to the item's content
   *
   * @param {Element} item - item (<li>) to select
   * @param {boolean} atStart - where to set focus: at the start or at the end
   * @returns {void}
   */
  focusItem(e, t = !0) {
    const r = e.querySelector(
      `.${this.CSS.itemContent}`
    );
    r && u.focus(r, t);
  }
  /**
   * Get out from List Tool by Enter on the empty last item
   *
   * @returns {void}
   */
  getOutOfList() {
    var e;
    (e = this.currentItem) == null || e.remove(), this.api.blocks.insert(), this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex());
  }
  /**
   * Handle backspace
   *
   * @param {KeyboardEvent} event - keydown
   */
  backspace(e) {
    if (!u.isAtStart())
      return;
    e.preventDefault();
    const t = this.currentItem;
    if (!t)
      return;
    const r = t.previousSibling;
    if (!t.parentNode || !c(t.parentNode))
      return;
    const n = t.parentNode.closest(`.${this.CSS.item}`);
    if (!r && !n || r && !c(r))
      return;
    e.stopPropagation();
    let s;
    if (r) {
      const a = r.querySelectorAll(
        `.${this.CSS.item}`
      );
      s = Array.from(a).pop() || r;
    } else
      s = n;
    const i = u.extractFragmentFromCaretPositionTillTheEnd();
    if (!i)
      return;
    const l = g(i);
    if (!s)
      return;
    const h = s.querySelector(
      `.${this.CSS.itemContent}`
    );
    if (!h)
      return;
    u.focus(h, !1), this.caret.save(), h.insertAdjacentHTML("beforeend", l);
    let o = t.querySelectorAll(
      `.${this.CSS.itemChildren} > .${this.CSS.item}`
    );
    o = Array.from(o), o = o.filter((a) => !a.parentNode || !c(a.parentNode) ? !1 : a.parentNode.closest(`.${this.CSS.item}`) === t), o.reverse().forEach((a) => {
      r ? s.after(a) : t.after(a);
    }), t.remove(), this.caret.restore();
  }
  /**
   * Add indentation to current item
   *
   * @param {KeyboardEvent} event - keydown
   */
  addTab(e) {
    e.stopPropagation(), e.preventDefault();
    const t = this.currentItem;
    if (!t)
      return;
    const r = t.previousSibling;
    if (!r || !c(r) || !r)
      return;
    const s = r.querySelector(
      `.${this.CSS.itemChildren}`
    );
    if (this.caret.save(), s)
      s.appendChild(t);
    else {
      const i = this.makeListWrapper(void 0, [
        this.CSS.itemChildren
      ]), l = r.querySelector(`.${this.CSS.itemBody}`);
      i.appendChild(t), l == null || l.appendChild(i);
    }
    this.caret.restore();
  }
  /**
   * Reduce indentation for current item
   *
   * @param {KeyboardEvent} event - keydown
   * @returns {void}
   */
  shiftTab(e) {
    e.stopPropagation(), e.preventDefault(), this.unshiftItem();
  }
  /**
   * Convert from list to text for conversionConfig
   *
   * @param {ListData} data
   * @returns {string}
   */
  static joinRecursive(e) {
    return e.items.map((t) => `${t.content} ${f.joinRecursive(t)}`).join("");
  }
  /**
   * Convert from text to list with import and export list to text
   */
  static get conversionConfig() {
    return {
      export: (e) => f.joinRecursive(e),
      import: (e) => ({
        items: [
          {
            content: e,
            items: []
          }
        ],
        style: "unordered"
      })
    };
  }
}



/***/ }),

/***/ "./node_modules/@editorjs/paragraph/dist/paragraph.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@editorjs/paragraph/dist/paragraph.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-block:only-of-type .ce-paragraph[data-placeholder-active]:empty:before,.ce-block:only-of-type .ce-paragraph[data-placeholder-active][data-empty=true]:before{content:attr(data-placeholder-active)}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
const a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';
function l(r) {
  const t = document.createElement("div");
  t.innerHTML = r.trim();
  const e = document.createDocumentFragment();
  return e.append(...Array.from(t.childNodes)), e;
}
/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */
class n {
  /**
   * Default placeholder for Paragraph Tool
   *
   * @returns {string}
   * @class
   */
  static get DEFAULT_PLACEHOLDER() {
    return "";
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {ParagraphData} params.data - previously saved data
   * @param {ParagraphConfig} params.config - user config for Tool
   * @param {object} params.api - editor.js api
   * @param {boolean} readOnly - read only mode flag
   */
  constructor({ data: t, config: e, api: i, readOnly: s }) {
    this.api = i, this.readOnly = s, this._CSS = {
      block: this.api.styles.block,
      wrapper: "ce-paragraph"
    }, this.readOnly || (this.onKeyUp = this.onKeyUp.bind(this)), this._placeholder = e.placeholder ? e.placeholder : n.DEFAULT_PLACEHOLDER, this._data = t ?? {}, this._element = null, this._preserveBlank = e.preserveBlank ?? !1;
  }
  /**
   * Check if text content is empty and set empty string to inner html.
   * We need this because some browsers (e.g. Safari) insert <br> into empty contenteditanle elements
   *
   * @param {KeyboardEvent} e - key up event
   */
  onKeyUp(t) {
    if (t.code !== "Backspace" && t.code !== "Delete" || !this._element)
      return;
    const { textContent: e } = this._element;
    e === "" && (this._element.innerHTML = "");
  }
  /**
   * Create Tool's view
   *
   * @returns {HTMLDivElement}
   * @private
   */
  drawView() {
    const t = document.createElement("DIV");
    return t.classList.add(this._CSS.wrapper, this._CSS.block), t.contentEditable = "false", t.dataset.placeholderActive = this.api.i18n.t(this._placeholder), this._data.text && (t.innerHTML = this._data.text), this.readOnly || (t.contentEditable = "true", t.addEventListener("keyup", this.onKeyUp)), t;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this._element = this.drawView(), this._element;
  }
  /**
   * Method that specified how to merge two Text blocks.
   * Called by Editor.js by backspace at the beginning of the Block
   *
   * @param {ParagraphData} data
   * @public
   */
  merge(t) {
    if (!this._element)
      return;
    this._data.text += t.text;
    const e = l(t.text);
    this._element.appendChild(e), this._element.normalize();
  }
  /**
   * Validate Paragraph block data:
   * - check for emptiness
   *
   * @param {ParagraphData} savedData — data received after saving
   * @returns {boolean} false if saved data is not correct, otherwise true
   * @public
   */
  validate(t) {
    return !(t.text.trim() === "" && !this._preserveBlank);
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {ParagraphData} - saved data
   * @public
   */
  save(t) {
    return {
      text: t.innerHTML
    };
  }
  /**
   * On paste callback fired from Editor.
   *
   * @param {HTMLPasteEvent} event - event with pasted data
   */
  onPaste(t) {
    const e = {
      text: t.detail.data.innerHTML
    };
    this._data = e, window.requestAnimationFrame(() => {
      this._element && (this._element.innerHTML = this._data.text || "");
    });
  }
  /**
   * Enable Conversion Toolbar. Paragraph can be converted to/from other tools
   * @returns {ConversionConfig}
   */
  static get conversionConfig() {
    return {
      export: "text",
      // to convert Paragraph to other block, use 'text' property of saved data
      import: "text"
      // to covert other block's exported string to Paragraph, fill 'text' property of tool data
    };
  }
  /**
   * Sanitizer rules
   * @returns {SanitizerConfig} - Edtior.js sanitizer config
   */
  static get sanitize() {
    return {
      text: {
        br: !0
      }
    };
  }
  /**
   * Returns true to notify the core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Used by Editor paste handling API.
   * Provides configuration to handle P tags.
   *
   * @returns {PasteConfig} - Paragraph Paste Setting
   */
  static get pasteConfig() {
    return {
      tags: ["P"]
    };
  }
  /**
   * Icon and title for displaying at the Toolbox
   *
   * @returns {ToolboxConfig} - Paragraph Toolbox Setting
   */
  static get toolbox() {
    return {
      icon: a,
      title: "Text"
    };
  }
}



/***/ }),

/***/ "./node_modules/@editorjs/quote/dist/quote.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/@editorjs/quote/dist/quote.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ o)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".cdx-quote-icon svg{transform:rotate(180deg)}.cdx-quote{margin:0}.cdx-quote__text{min-height:158px;margin-bottom:10px}.cdx-quote [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-quote [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-quote [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-quote-settings{display:flex}.cdx-quote-settings .cdx-settings-button{width:50%}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const c = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 7L6 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 17H6"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 12L8 12"/></svg>', d = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 7L5 7"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M17 17H5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13 12L5 12"/></svg>', p = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 10.8182L9 10.8182C8.80222 10.8182 8.60888 10.7649 8.44443 10.665C8.27998 10.5651 8.15181 10.4231 8.07612 10.257C8.00043 10.0909 7.98063 9.90808 8.01922 9.73174C8.0578 9.55539 8.15304 9.39341 8.29289 9.26627C8.43275 9.13913 8.61093 9.05255 8.80491 9.01747C8.99889 8.98239 9.19996 9.00039 9.38268 9.0692C9.56541 9.13801 9.72159 9.25453 9.83147 9.40403C9.94135 9.55353 10 9.72929 10 9.90909L10 12.1818C10 12.664 9.78929 13.1265 9.41421 13.4675C9.03914 13.8084 8.53043 14 8 14"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 10.8182L15 10.8182C14.8022 10.8182 14.6089 10.7649 14.4444 10.665C14.28 10.5651 14.1518 10.4231 14.0761 10.257C14.0004 10.0909 13.9806 9.90808 14.0192 9.73174C14.0578 9.55539 14.153 9.39341 14.2929 9.26627C14.4327 9.13913 14.6109 9.05255 14.8049 9.01747C14.9989 8.98239 15.2 9.00039 15.3827 9.0692C15.5654 9.13801 15.7216 9.25453 15.8315 9.40403C15.9414 9.55353 16 9.72929 16 9.90909L16 12.1818C16 12.664 15.7893 13.1265 15.4142 13.4675C15.0391 13.8084 14.5304 14 14 14"/></svg>';
function a(i, t = null, e = {}) {
  const n = document.createElement(i);
  if (Array.isArray(t)) {
    const r = t.filter((s) => s !== void 0);
    n.classList.add(...r);
  } else
    t !== null && n.classList.add(t);
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
  return n;
}
var l = /* @__PURE__ */ ((i) => (i.Left = "left", i.Center = "center", i))(l || {});
class o {
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {object} params - constructor params
   * @param {QuoteData} params.data - previously saved data
   * @param {QuoteConfig} params.config - user config for Tool
   * @param {API} params.api - editor.js api
   * @param {boolean} params.readOnly - read only mode flag
   */
  constructor({ data: t, config: e, api: n, readOnly: r }) {
    const { DEFAULT_ALIGNMENT: s } = o;
    this.api = n, this.readOnly = r, this._quotePlaceholder = e.quotePlaceholder || o.DEFAULT_QUOTE_PLACEHOLDER, this._captionPlaceholder = e.captionPlaceholder || o.DEFAULT_CAPTION_PLACEHOLDER, this._data = {
      text: t.text || "",
      caption: t.caption || "",
      alignment: Object.values(l).includes(t.alignment) && t.alignment || e.defaultAlignment || s
    }, this._CSS = {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input,
      caption: "cdx-quote__caption"
    };
  }
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: p,
      title: "Quote"
    };
  }
  /**
   * Empty Quote is not empty Block
   *
   * @public
   * @returns {boolean}
   */
  static get contentless() {
    return !0;
  }
  /**
   * Allow to press Enter inside the Quote
   *
   * @public
   * @returns {boolean}
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Default placeholder for quote text
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_QUOTE_PLACEHOLDER() {
    return "Enter a quote";
  }
  /**
   * Default placeholder for quote caption
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_CAPTION_PLACEHOLDER() {
    return "Enter a caption";
  }
  /**
   * Default quote alignment
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_ALIGNMENT() {
    return "left";
  }
  /**
   * Allow Quote to be converted to/from other blocks
   */
  static get conversionConfig() {
    return {
      /**
       * To create Quote data from string, simple fill 'text' property
       */
      import: "text",
      /**
       * To create string from Quote data, concatenate text and caption
       *
       * @param {QuoteData} quoteData
       * @returns {string}
       */
      export: function(t) {
        return t.caption ? `${t.text} — ${t.caption}` : t.text;
      }
    };
  }
  /**
   * Tool`s styles
   *
   * @returns {QuoteCSS}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      wrapper: "cdx-quote",
      text: "cdx-quote__text",
      input: this.api.styles.input,
      caption: "cdx-quote__caption"
    };
  }
  /**
   * Tool`s settings properties
   *
   * @returns {*[]}
   */
  get settings() {
    return [
      {
        name: "left",
        icon: d
      },
      {
        name: "center",
        icon: c
      }
    ];
  }
  /**
   * Create Quote Tool container with inputs
   *
   * @returns {Element}
   */
  render() {
    const t = a("blockquote", [
      this._CSS.baseClass,
      this._CSS.wrapper
    ]), e = a("div", [this._CSS.input, this._CSS.text], {
      contentEditable: !this.readOnly,
      innerHTML: this._data.text
    }), n = a("div", [this._CSS.input, this._CSS.caption], {
      contentEditable: !this.readOnly,
      innerHTML: this._data.caption
    });
    return e.dataset.placeholder = this._quotePlaceholder, n.dataset.placeholder = this._captionPlaceholder, t.appendChild(e), t.appendChild(n), t;
  }
  /**
   * Extract Quote data from Quote Tool element
   *
   * @param {HTMLDivElement} quoteElement - element to save
   * @returns {QuoteData}
   */
  save(t) {
    const e = t.querySelector(`.${this._CSS.text}`), n = t.querySelector(`.${this._CSS.caption}`);
    return Object.assign(this._data, {
      text: (e == null ? void 0 : e.innerHTML) ?? "",
      caption: (n == null ? void 0 : n.innerHTML) ?? ""
    });
  }
  /**
   * Sanitizer rules
   */
  static get sanitize() {
    return {
      text: {
        br: !0
      },
      caption: {
        br: !0
      },
      alignment: {}
    };
  }
  /**
   * Create wrapper for Tool`s settings buttons:
   * 1. Left alignment
   * 2. Center alignment
   *
   * @returns {MenuConfig}
   *
   */
  renderSettings() {
    const t = (e) => e && e[0].toUpperCase() + e.slice(1);
    return this.settings.map((e) => ({
      icon: e.icon,
      label: this.api.i18n.t(`Align ${t(e.name)}`),
      onActivate: () => this._toggleTune(e.name),
      isActive: this._data.alignment === e.name,
      closeOnActivate: !0
    }));
  }
  /**
   * Toggle quote`s alignment
   *
   * @param {string} tune - alignment
   * @private
   */
  _toggleTune(t) {
    this._data.alignment = t;
  }
}



/***/ }),

/***/ "./node_modules/@editorjs/raw/dist/raw.mjs":
/*!*************************************************!*\
  !*** ./node_modules/@editorjs/raw/dist/raw.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".ce-rawtool__textarea{min-height:200px;resize:vertical;border-radius:8px;border:0;background-color:#1e2128;font-family:Menlo,Monaco,Consolas,Courier New,monospace;font-size:12px;line-height:1.6;letter-spacing:-.2px;color:#a1a7b6;overscroll-behavior:contain}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
const a = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.6954 5C17.912 5 18.8468 6.07716 18.6755 7.28165L17.426 16.0659C17.3183 16.8229 16.7885 17.4522 16.061 17.6873L12.6151 18.8012C12.2152 18.9304 11.7848 18.9304 11.3849 18.8012L7.93898 17.6873C7.21148 17.4522 6.6817 16.8229 6.57403 16.0659L5.32454 7.28165C5.15322 6.07716 6.088 5 7.30461 5H16.6954Z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8.4H9L9.42857 11.7939H14.5714L14.3571 13.2788L14.1429 14.7636L12 15.4L9.85714 14.7636L9.77143 14.3394"/></svg>';
/**
 * Raw HTML Tool for CodeX Editor
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */
class r {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Should this tool be displayed at the Editor's Toolbox
   *
   * @returns {boolean}
   * @public
   */
  static get displayInToolbox() {
    return !0;
  }
  /**
   * Allow to press Enter inside the RawTool textarea
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: a,
      title: "Raw HTML"
    };
  }
  /**
   * @typedef {object} RawData — plugin saved data
   * @param {string} html - previously saved HTML code
   * @property
   */
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {RawData} data — previously saved HTML data
   * @param {object} config - user config for Tool
   * @param {object} api - CodeX Editor API
   * @param {boolean} readOnly - read-only mode flag
   */
  constructor({ data: t, config: e, api: s, readOnly: i }) {
    this.api = s, this.readOnly = i, this.placeholder = e.placeholder || r.DEFAULT_PLACEHOLDER, this.CSS = {
      baseClass: this.api.styles.block,
      input: this.api.styles.input,
      wrapper: "ce-rawtool",
      textarea: "ce-rawtool__textarea"
    }, this.data = {
      html: t.html || ""
    }, this.textarea = null, this.resizeDebounce = null;
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement} this.element - RawTool's wrapper
   * @public
   */
  render() {
    const t = document.createElement("div"), e = 100;
    return this.textarea = document.createElement("textarea"), t.classList.add(this.CSS.baseClass, this.CSS.wrapper), this.textarea.classList.add(this.CSS.textarea, this.CSS.input), this.textarea.textContent = this.data.html, this.textarea.placeholder = this.placeholder, this.readOnly ? this.textarea.disabled = !0 : this.textarea.addEventListener("input", () => {
      this.onInput();
    }), t.appendChild(this.textarea), setTimeout(() => {
      this.resize();
    }, e), t;
  }
  /**
   * Extract Tool's data from the view
   *
   * @param {HTMLDivElement} rawToolsWrapper - RawTool's wrapper, containing textarea with raw HTML code
   * @returns {RawData} - raw HTML code
   * @public
   */
  save(t) {
    return {
      html: t.querySelector("textarea").value
    };
  }
  /**
   * Default placeholder for RawTool's textarea
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_PLACEHOLDER() {
    return "Enter HTML code";
  }
  /**
   * Automatic sanitize config
   */
  static get sanitize() {
    return {
      html: !0
      // Allow HTML tags
    };
  }
  /**
   * Textarea change event
   *
   * @returns {void}
   */
  onInput() {
    this.resizeDebounce && clearTimeout(this.resizeDebounce), this.resizeDebounce = setTimeout(() => {
      this.resize();
    }, 200);
  }
  /**
   * Resize textarea to fit whole height
   *
   * @returns {void}
   */
  resize() {
    this.textarea.style.height = "auto", this.textarea.style.height = this.textarea.scrollHeight + "px";
  }
}



/***/ }),

/***/ "./node_modules/@editorjs/table/dist/table.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/@editorjs/table/dist/table.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ I)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode('.tc-wrap{--color-background:#f9f9fb;--color-text-secondary:#7b7e89;--color-border:#e8e8eb;--cell-size:34px;--toolbox-icon-size:18px;--toolbox-padding:6px;--toolbox-aiming-field-size:calc(var(--toolbox-icon-size) + var(--toolbox-padding)*2);border-left:0;position:relative;height:100%;width:100%;margin-top:var(--toolbox-icon-size);box-sizing:border-box;display:grid;grid-template-columns:calc(100% - var(--cell-size)) var(--cell-size)}.tc-wrap--readonly{grid-template-columns:100% var(--cell-size)}.tc-wrap svg{vertical-align:top}@media print{.tc-wrap{border-left-color:var(--color-border);border-left-style:solid;border-left-width:1px;grid-template-columns:100% var(--cell-size)}}@media print{.tc-wrap .tc-row:after{display:none}}.tc-table{position:relative;width:100%;height:100%;display:grid;font-size:14px;border-top:1px solid var(--color-border);line-height:1.4}.tc-table:after{width:calc(var(--cell-size));height:100%;left:calc(var(--cell-size)*-1);top:0}.tc-table:after,.tc-table:before{position:absolute;content:""}.tc-table:before{width:100%;height:var(--toolbox-aiming-field-size);top:calc(var(--toolbox-aiming-field-size)*-1);left:0}.tc-table--heading .tc-row:first-child{font-weight:600;border-bottom:2px solid var(--color-border)}.tc-table--heading .tc-row:first-child [contenteditable]:empty:before{content:attr(heading);color:var(--color-text-secondary)}.tc-table--heading .tc-row:first-child:after{bottom:-2px;border-bottom:2px solid var(--color-border)}.tc-add-column,.tc-add-row{display:flex;color:var(--color-text-secondary)}@media print{.tc-add{display:none}}.tc-add-column{padding:4px 0;justify-content:center;border-top:1px solid var(--color-border)}@media print{.tc-add-column{display:none}}.tc-add-row{height:var(--cell-size);align-items:center;padding-left:4px;position:relative}.tc-add-row:before{content:"";position:absolute;right:calc(var(--cell-size)*-1);width:var(--cell-size);height:100%}@media print{.tc-add-row{display:none}}.tc-add-column,.tc-add-row{transition:0s;cursor:pointer;will-change:background-color}.tc-add-column:hover,.tc-add-row:hover{transition:background-color .1s ease;background-color:var(--color-background)}.tc-add-row{margin-top:1px}.tc-add-row:hover:before{transition:.1s;background-color:var(--color-background)}.tc-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(10px,1fr));position:relative;border-bottom:1px solid var(--color-border)}.tc-row:after{content:"";pointer-events:none;position:absolute;width:var(--cell-size);height:100%;bottom:-1px;right:calc(var(--cell-size)*-1);border-bottom:1px solid var(--color-border)}.tc-row--selected{background:var(--color-background)}.tc-row--selected:after{background:var(--color-background)}.tc-cell{border-right:1px solid var(--color-border);padding:6px 12px;overflow:hidden;outline:none;line-break:normal}.tc-cell--selected{background:var(--color-background)}.tc-wrap--readonly .tc-row:after{display:none}.tc-toolbox{--toolbox-padding:6px;--popover-margin:30px;--toggler-click-zone-size:30px;--toggler-dots-color:#7b7e89;--toggler-dots-color-hovered:#1d202b;position:absolute;cursor:pointer;z-index:1;opacity:0;transition:opacity .1s;will-change:left,opacity}.tc-toolbox--column{top:calc(var(--toggler-click-zone-size)*-1);transform:translate(calc(var(--toggler-click-zone-size)*-1/2));will-change:left,opacity}.tc-toolbox--row{left:calc(var(--popover-margin)*-1);transform:translateY(calc(var(--toggler-click-zone-size)*-1/2));margin-top:-1px;will-change:top,opacity}.tc-toolbox--showed{opacity:1}.tc-toolbox .tc-popover{position:absolute;top:0;left:var(--popover-margin)}.tc-toolbox__toggler{display:flex;align-items:center;justify-content:center;width:var(--toggler-click-zone-size);height:var(--toggler-click-zone-size);color:var(--toggler-dots-color);opacity:0;transition:opacity .15s ease;will-change:opacity}.tc-toolbox__toggler:hover{color:var(--toggler-dots-color-hovered)}.tc-toolbox__toggler svg{fill:currentColor}.tc-wrap:hover .tc-toolbox__toggler{opacity:1}.tc-settings .cdx-settings-button{width:50%;margin:0}.tc-popover{--color-border:#eaeaea;--color-background:#fff;--color-background-hover:rgba(232,232,235,.49);--color-background-confirm:#e24a4a;--color-background-confirm-hover:#d54040;--color-text-confirm:#fff;background:var(--color-background);border:1px solid var(--color-border);box-shadow:0 3px 15px -3px #0d142121;border-radius:6px;padding:6px;display:none;will-change:opacity,transform}.tc-popover--opened{display:block;animation:menuShowing .1s cubic-bezier(.215,.61,.355,1) forwards}.tc-popover__item{display:flex;align-items:center;padding:2px 14px 2px 2px;border-radius:5px;cursor:pointer;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;user-select:none}.tc-popover__item:hover{background:var(--color-background-hover)}.tc-popover__item:not(:last-of-type){margin-bottom:2px}.tc-popover__item-icon{display:inline-flex;width:26px;height:26px;align-items:center;justify-content:center;background:var(--color-background);border-radius:5px;border:1px solid var(--color-border);margin-right:8px}.tc-popover__item-label{line-height:22px;font-size:14px;font-weight:500}.tc-popover__item--confirm{background:var(--color-background-confirm);color:var(--color-text-confirm)}.tc-popover__item--confirm:hover{background-color:var(--color-background-confirm-hover)}.tc-popover__item--confirm .tc-popover__item-icon{background:var(--color-background-confirm);border-color:#0000001a}.tc-popover__item--confirm .tc-popover__item-icon svg{transition:transform .2s ease-in;transform:rotate(90deg) scale(1.2)}.tc-popover__item--hidden{display:none}@keyframes menuShowing{0%{opacity:0;transform:translateY(-8px) scale(.9)}70%{opacity:1;transform:translateY(2px)}to{transform:translateY(0)}}')),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
function c(d, t, e = {}) {
  const o = document.createElement(d);
  Array.isArray(t) ? o.classList.add(...t) : t && o.classList.add(t);
  for (const i in e)
    Object.prototype.hasOwnProperty.call(e, i) && (o[i] = e[i]);
  return o;
}
function f(d) {
  const t = d.getBoundingClientRect();
  return {
    y1: Math.floor(t.top + window.pageYOffset),
    x1: Math.floor(t.left + window.pageXOffset),
    x2: Math.floor(t.right + window.pageXOffset),
    y2: Math.floor(t.bottom + window.pageYOffset)
  };
}
function g(d, t) {
  const e = f(d), o = f(t);
  return {
    fromTopBorder: o.y1 - e.y1,
    fromLeftBorder: o.x1 - e.x1,
    fromRightBorder: e.x2 - o.x2,
    fromBottomBorder: e.y2 - o.y2
  };
}
function R(d, t) {
  const e = d.getBoundingClientRect(), { width: o, height: i, x: s, y: n } = e, { clientX: h, clientY: l } = t;
  return {
    width: o,
    height: i,
    x: h - s,
    y: l - n
  };
}
function C(d, t) {
  return t.parentNode.insertBefore(d, t);
}
function m(d, t = !0) {
  const e = document.createRange(), o = window.getSelection();
  e.selectNodeContents(d), e.collapse(t), o.removeAllRanges(), o.addRange(e);
}
class a {
  /**
   * @param {object} options - constructor options
   * @param {PopoverItem[]} options.items - constructor options
   */
  constructor({ items: t }) {
    this.items = t, this.wrapper = void 0, this.itemEls = [];
  }
  /**
   * Set of CSS classnames used in popover
   *
   * @returns {object}
   */
  static get CSS() {
    return {
      popover: "tc-popover",
      popoverOpened: "tc-popover--opened",
      item: "tc-popover__item",
      itemHidden: "tc-popover__item--hidden",
      itemConfirmState: "tc-popover__item--confirm",
      itemIcon: "tc-popover__item-icon",
      itemLabel: "tc-popover__item-label"
    };
  }
  /**
   * Returns the popover element
   *
   * @returns {Element}
   */
  render() {
    return this.wrapper = c("div", a.CSS.popover), this.items.forEach((t, e) => {
      const o = c("div", a.CSS.item), i = c("div", a.CSS.itemIcon, {
        innerHTML: t.icon
      }), s = c("div", a.CSS.itemLabel, {
        textContent: t.label
      });
      o.dataset.index = e, o.appendChild(i), o.appendChild(s), this.wrapper.appendChild(o), this.itemEls.push(o);
    }), this.wrapper.addEventListener("click", (t) => {
      this.popoverClicked(t);
    }), this.wrapper;
  }
  /**
   * Popover wrapper click listener
   * Used to delegate clicks in items
   *
   * @returns {void}
   */
  popoverClicked(t) {
    const e = t.target.closest(`.${a.CSS.item}`);
    if (!e)
      return;
    const o = e.dataset.index, i = this.items[o];
    if (i.confirmationRequired && !this.hasConfirmationState(e)) {
      this.setConfirmationState(e);
      return;
    }
    i.onClick();
  }
  /**
   * Enable the confirmation state on passed item
   *
   * @returns {void}
   */
  setConfirmationState(t) {
    t.classList.add(a.CSS.itemConfirmState);
  }
  /**
   * Disable the confirmation state on passed item
   *
   * @returns {void}
   */
  clearConfirmationState(t) {
    t.classList.remove(a.CSS.itemConfirmState);
  }
  /**
   * Check if passed item has the confirmation state
   *
   * @returns {boolean}
   */
  hasConfirmationState(t) {
    return t.classList.contains(a.CSS.itemConfirmState);
  }
  /**
   * Return an opening state
   *
   * @returns {boolean}
   */
  get opened() {
    return this.wrapper.classList.contains(a.CSS.popoverOpened);
  }
  /**
   * Opens the popover
   *
   * @returns {void}
   */
  open() {
    this.items.forEach((t, e) => {
      typeof t.hideIf == "function" && this.itemEls[e].classList.toggle(a.CSS.itemHidden, t.hideIf());
    }), this.wrapper.classList.add(a.CSS.popoverOpened);
  }
  /**
   * Closes the popover
   *
   * @returns {void}
   */
  close() {
    this.wrapper.classList.remove(a.CSS.popoverOpened), this.itemEls.forEach((t) => {
      this.clearConfirmationState(t);
    });
  }
}
const b = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 8L12 12M12 12L16 16M12 12L16 8M12 12L8 16"/></svg>', k = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 9.16666L18.2167 12.5M18.2167 12.5L14.8833 15.8333M18.2167 12.5H10.05C9.16594 12.5 8.31809 12.1488 7.69297 11.5237C7.06785 10.8986 6.71666 10.0507 6.71666 9.16666"/></svg>', S = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.9167 14.9167L11.5833 18.25M11.5833 18.25L8.25 14.9167M11.5833 18.25L11.5833 10.0833C11.5833 9.19928 11.9345 8.35143 12.5596 7.72631C13.1848 7.10119 14.0326 6.75 14.9167 6.75"/></svg>', x = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.13333 14.9167L12.4667 18.25M12.4667 18.25L15.8 14.9167M12.4667 18.25L12.4667 10.0833C12.4667 9.19928 12.1155 8.35143 11.4904 7.72631C10.8652 7.10119 10.0174 6.75 9.13333 6.75"/></svg>', y = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.8833 15.8333L18.2167 12.5M18.2167 12.5L14.8833 9.16667M18.2167 12.5L10.05 12.5C9.16595 12.5 8.31811 12.8512 7.69299 13.4763C7.06787 14.1014 6.71667 14.9493 6.71667 15.8333"/></svg>', T = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.41 9.66H9.4"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 9.66H14.59"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M9.31 14.36H9.3"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2.6" d="M14.6 14.36H14.59"/></svg>', v = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 7V12M12 17V12M17 12H12M12 12H7"/></svg>', L = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', M = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M14 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><path stroke="currentColor" stroke-width="2" d="M5 14H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>', O = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M10 5V18.5"/><path stroke="currentColor" stroke-width="2" d="M5 10H19"/><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/></svg>';
class u {
  /**
   * Creates toolbox buttons and toolbox menus
   *
   * @param {object} api - Editor.js api
   * @param {PopoverItem[]} items - Editor.js api
   * @param {function} onOpen - callback fired when the Popover is opening
   * @param {function} onClose - callback fired when the Popover is closing
   * @param {string} [cssModifier] - the modifier for the Toolbox. Allows to add some specific styles.
   */
  constructor({ api: t, items: e, onOpen: o, onClose: i, cssModifier: s = "" }) {
    this.api = t, this.items = e, this.onOpen = o, this.onClose = i, this.cssModifier = s, this.popover = null, this.wrapper = this.createToolbox();
  }
  /**
   * Style classes
   */
  static get CSS() {
    return {
      toolbox: "tc-toolbox",
      toolboxShowed: "tc-toolbox--showed",
      toggler: "tc-toolbox__toggler"
    };
  }
  /**
   * Returns rendered Toolbox element
   */
  get element() {
    return this.wrapper;
  }
  /**
   * Creating a toolbox to open menu for a manipulating columns
   *
   * @returns {Element}
   */
  createToolbox() {
    const t = c("div", [
      u.CSS.toolbox,
      this.cssModifier ? `${u.CSS.toolbox}--${this.cssModifier}` : ""
    ]);
    t.dataset.mutationFree = "true";
    const e = this.createPopover(), o = this.createToggler();
    return t.appendChild(o), t.appendChild(e), t;
  }
  /**
   * Creates the Toggler
   *
   * @returns {Element}
   */
  createToggler() {
    const t = c("div", u.CSS.toggler, {
      innerHTML: T
    });
    return t.addEventListener("click", () => {
      this.togglerClicked();
    }), t;
  }
  /**
   * Creates the Popover instance and render it
   *
   * @returns {Element}
   */
  createPopover() {
    return this.popover = new a({
      items: this.items
    }), this.popover.render();
  }
  /**
   * Toggler click handler. Opens/Closes the popover
   *
   * @returns {void}
   */
  togglerClicked() {
    this.popover.opened ? (this.popover.close(), this.onClose()) : (this.popover.open(), this.onOpen());
  }
  /**
   * Shows the Toolbox
   *
   * @param {function} computePositionMethod - method that returns the position coordinate
   * @returns {void}
   */
  show(t) {
    const e = t();
    Object.entries(e).forEach(([o, i]) => {
      this.wrapper.style[o] = i;
    }), this.wrapper.classList.add(u.CSS.toolboxShowed);
  }
  /**
   * Hides the Toolbox
   *
   * @returns {void}
   */
  hide() {
    this.popover.close(), this.wrapper.classList.remove(u.CSS.toolboxShowed);
  }
}
function H(d, t) {
  let e = 0;
  return function(...o) {
    const i = (/* @__PURE__ */ new Date()).getTime();
    if (!(i - e < d))
      return e = i, t(...o);
  };
}
const r = {
  wrapper: "tc-wrap",
  wrapperReadOnly: "tc-wrap--readonly",
  table: "tc-table",
  row: "tc-row",
  withHeadings: "tc-table--heading",
  rowSelected: "tc-row--selected",
  cell: "tc-cell",
  cellSelected: "tc-cell--selected",
  addRow: "tc-add-row",
  addColumn: "tc-add-column"
};
class A {
  /**
   * Creates
   *
   * @constructor
   * @param {boolean} readOnly - read-only mode flag
   * @param {object} api - Editor.js API
   * @param {TableData} data - Editor.js API
   * @param {TableConfig} config - Editor.js API
   */
  constructor(t, e, o, i) {
    this.readOnly = t, this.api = e, this.data = o, this.config = i, this.wrapper = null, this.table = null, this.toolboxColumn = this.createColumnToolbox(), this.toolboxRow = this.createRowToolbox(), this.createTableWrapper(), this.hoveredRow = 0, this.hoveredColumn = 0, this.selectedRow = 0, this.selectedColumn = 0, this.tunes = {
      withHeadings: !1
    }, this.resize(), this.fill(), this.focusedCell = {
      row: 0,
      column: 0
    }, this.documentClicked = (s) => {
      const n = s.target.closest(`.${r.table}`) !== null, h = s.target.closest(`.${r.wrapper}`) === null;
      (n || h) && this.hideToolboxes();
      const w = s.target.closest(`.${r.addRow}`), p = s.target.closest(`.${r.addColumn}`);
      w && w.parentNode === this.wrapper ? (this.addRow(void 0, !0), this.hideToolboxes()) : p && p.parentNode === this.wrapper && (this.addColumn(void 0, !0), this.hideToolboxes());
    }, this.readOnly || this.bindEvents();
  }
  /**
   * Returns the rendered table wrapper
   *
   * @returns {Element}
   */
  getWrapper() {
    return this.wrapper;
  }
  /**
   * Hangs the necessary handlers to events
   */
  bindEvents() {
    document.addEventListener("click", this.documentClicked), this.table.addEventListener("mousemove", H(150, (t) => this.onMouseMoveInTable(t)), { passive: !0 }), this.table.onkeypress = (t) => this.onKeyPressListener(t), this.table.addEventListener("keydown", (t) => this.onKeyDownListener(t)), this.table.addEventListener("focusin", (t) => this.focusInTableListener(t));
  }
  /**
   * Configures and creates the toolbox for manipulating with columns
   *
   * @returns {Toolbox}
   */
  createColumnToolbox() {
    return new u({
      api: this.api,
      cssModifier: "column",
      items: [
        {
          label: this.api.i18n.t("Add column to left"),
          icon: S,
          onClick: () => {
            this.addColumn(this.selectedColumn, !0), this.hideToolboxes();
          }
        },
        {
          label: this.api.i18n.t("Add column to right"),
          icon: x,
          onClick: () => {
            this.addColumn(this.selectedColumn + 1, !0), this.hideToolboxes();
          }
        },
        {
          label: this.api.i18n.t("Delete column"),
          icon: b,
          hideIf: () => this.numberOfColumns === 1,
          confirmationRequired: !0,
          onClick: () => {
            this.deleteColumn(this.selectedColumn), this.hideToolboxes();
          }
        }
      ],
      onOpen: () => {
        this.selectColumn(this.hoveredColumn), this.hideRowToolbox();
      },
      onClose: () => {
        this.unselectColumn();
      }
    });
  }
  /**
   * Configures and creates the toolbox for manipulating with rows
   *
   * @returns {Toolbox}
   */
  createRowToolbox() {
    return new u({
      api: this.api,
      cssModifier: "row",
      items: [
        {
          label: this.api.i18n.t("Add row above"),
          icon: y,
          onClick: () => {
            this.addRow(this.selectedRow, !0), this.hideToolboxes();
          }
        },
        {
          label: this.api.i18n.t("Add row below"),
          icon: k,
          onClick: () => {
            this.addRow(this.selectedRow + 1, !0), this.hideToolboxes();
          }
        },
        {
          label: this.api.i18n.t("Delete row"),
          icon: b,
          hideIf: () => this.numberOfRows === 1,
          confirmationRequired: !0,
          onClick: () => {
            this.deleteRow(this.selectedRow), this.hideToolboxes();
          }
        }
      ],
      onOpen: () => {
        this.selectRow(this.hoveredRow), this.hideColumnToolbox();
      },
      onClose: () => {
        this.unselectRow();
      }
    });
  }
  /**
   * When you press enter it moves the cursor down to the next row
   * or creates it if the click occurred on the last one
   */
  moveCursorToNextRow() {
    this.focusedCell.row !== this.numberOfRows ? (this.focusedCell.row += 1, this.focusCell(this.focusedCell)) : (this.addRow(), this.focusedCell.row += 1, this.focusCell(this.focusedCell), this.updateToolboxesPosition(0, 0));
  }
  /**
   * Get table cell by row and col index
   *
   * @param {number} row - cell row coordinate
   * @param {number} column - cell column coordinate
   * @returns {HTMLElement}
   */
  getCell(t, e) {
    return this.table.querySelectorAll(`.${r.row}:nth-child(${t}) .${r.cell}`)[e - 1];
  }
  /**
   * Get table row by index
   *
   * @param {number} row - row coordinate
   * @returns {HTMLElement}
   */
  getRow(t) {
    return this.table.querySelector(`.${r.row}:nth-child(${t})`);
  }
  /**
   * The parent of the cell which is the row
   *
   * @param {HTMLElement} cell - cell element
   * @returns {HTMLElement}
   */
  getRowByCell(t) {
    return t.parentElement;
  }
  /**
   * Ger row's first cell
   *
   * @param {Element} row - row to find its first cell
   * @returns {Element}
   */
  getRowFirstCell(t) {
    return t.querySelector(`.${r.cell}:first-child`);
  }
  /**
   * Set the sell's content by row and column numbers
   *
   * @param {number} row - cell row coordinate
   * @param {number} column - cell column coordinate
   * @param {string} content - cell HTML content
   */
  setCellContent(t, e, o) {
    const i = this.getCell(t, e);
    i.innerHTML = o;
  }
  /**
   * Add column in table on index place
   * Add cells in each row
   *
   * @param {number} columnIndex - number in the array of columns, where new column to insert, -1 if insert at the end
   * @param {boolean} [setFocus] - pass true to focus the first cell
   */
  addColumn(t = -1, e = !1) {
    let o = this.numberOfColumns;
    for (let i = 1; i <= this.numberOfRows; i++) {
      let s;
      const n = this.createCell();
      if (t > 0 && t <= o ? (s = this.getCell(i, t), C(n, s)) : s = this.getRow(i).appendChild(n), i === 1) {
        const h = this.getCell(i, t > 0 ? t : o + 1);
        h && e && m(h);
      }
    }
    this.addHeadingAttrToFirstRow();
  }
  /**
   * Add row in table on index place
   *
   * @param {number} index - number in the array of rows, where new column to insert, -1 if insert at the end
   * @param {boolean} [setFocus] - pass true to focus the inserted row
   * @returns {HTMLElement} row
   */
  addRow(t = -1, e = !1) {
    let o, i = c("div", r.row);
    this.tunes.withHeadings && this.removeHeadingAttrFromFirstRow();
    let s = this.numberOfColumns;
    if (t > 0 && t <= this.numberOfRows) {
      let h = this.getRow(t);
      o = C(i, h);
    } else
      o = this.table.appendChild(i);
    this.fillRow(o, s), this.tunes.withHeadings && this.addHeadingAttrToFirstRow();
    const n = this.getRowFirstCell(o);
    return n && e && m(n), o;
  }
  /**
   * Delete a column by index
   *
   * @param {number} index
   */
  deleteColumn(t) {
    for (let e = 1; e <= this.numberOfRows; e++) {
      const o = this.getCell(e, t);
      if (!o)
        return;
      o.remove();
    }
  }
  /**
   * Delete a row by index
   *
   * @param {number} index
   */
  deleteRow(t) {
    this.getRow(t).remove(), this.addHeadingAttrToFirstRow();
  }
  /**
   * Create a wrapper containing a table, toolboxes
   * and buttons for adding rows and columns
   *
   * @returns {HTMLElement} wrapper - where all buttons for a table and the table itself will be
   */
  createTableWrapper() {
    if (this.wrapper = c("div", r.wrapper), this.table = c("div", r.table), this.readOnly && this.wrapper.classList.add(r.wrapperReadOnly), this.wrapper.appendChild(this.toolboxRow.element), this.wrapper.appendChild(this.toolboxColumn.element), this.wrapper.appendChild(this.table), !this.readOnly) {
      const t = c("div", r.addColumn, {
        innerHTML: v
      }), e = c("div", r.addRow, {
        innerHTML: v
      });
      this.wrapper.appendChild(t), this.wrapper.appendChild(e);
    }
  }
  /**
   * Returns the size of the table based on initial data or config "size" property
   *
   * @return {{rows: number, cols: number}} - number of cols and rows
   */
  computeInitialSize() {
    const t = this.data && this.data.content, e = Array.isArray(t), o = e ? t.length : !1, i = e ? t.length : void 0, s = o ? t[0].length : void 0, n = Number.parseInt(this.config && this.config.rows), h = Number.parseInt(this.config && this.config.cols), l = !isNaN(n) && n > 0 ? n : void 0, w = !isNaN(h) && h > 0 ? h : void 0;
    return {
      rows: i || l || 2,
      cols: s || w || 2
    };
  }
  /**
   * Resize table to match config size or transmitted data size
   *
   * @return {{rows: number, cols: number}} - number of cols and rows
   */
  resize() {
    const { rows: t, cols: e } = this.computeInitialSize();
    for (let o = 0; o < t; o++)
      this.addRow();
    for (let o = 0; o < e; o++)
      this.addColumn();
  }
  /**
   * Fills the table with data passed to the constructor
   *
   * @returns {void}
   */
  fill() {
    const t = this.data;
    if (t && t.content)
      for (let e = 0; e < t.content.length; e++)
        for (let o = 0; o < t.content[e].length; o++)
          this.setCellContent(e + 1, o + 1, t.content[e][o]);
  }
  /**
   * Fills a row with cells
   *
   * @param {HTMLElement} row - row to fill
   * @param {number} numberOfColumns - how many cells should be in a row
   */
  fillRow(t, e) {
    for (let o = 1; o <= e; o++) {
      const i = this.createCell();
      t.appendChild(i);
    }
  }
  /**
   * Creating a cell element
   *
   * @return {Element}
   */
  createCell() {
    return c("div", r.cell, {
      contentEditable: !this.readOnly
    });
  }
  /**
   * Get number of rows in the table
   */
  get numberOfRows() {
    return this.table.childElementCount;
  }
  /**
   * Get number of columns in the table
   */
  get numberOfColumns() {
    return this.numberOfRows ? this.table.querySelectorAll(`.${r.row}:first-child .${r.cell}`).length : 0;
  }
  /**
   * Is the column toolbox menu displayed or not
   *
   * @returns {boolean}
   */
  get isColumnMenuShowing() {
    return this.selectedColumn !== 0;
  }
  /**
   * Is the row toolbox menu displayed or not
   *
   * @returns {boolean}
   */
  get isRowMenuShowing() {
    return this.selectedRow !== 0;
  }
  /**
   * Recalculate position of toolbox icons
   *
   * @param {Event} event - mouse move event
   */
  onMouseMoveInTable(t) {
    const { row: e, column: o } = this.getHoveredCell(t);
    this.hoveredColumn = o, this.hoveredRow = e, this.updateToolboxesPosition();
  }
  /**
   * Prevents default Enter behaviors
   * Adds Shift+Enter processing
   *
   * @param {KeyboardEvent} event - keypress event
   */
  onKeyPressListener(t) {
    if (t.key === "Enter") {
      if (t.shiftKey)
        return !0;
      this.moveCursorToNextRow();
    }
    return t.key !== "Enter";
  }
  /**
   * Prevents tab keydown event from bubbling
   * so that it only works inside the table
   *
   * @param {KeyboardEvent} event - keydown event
   */
  onKeyDownListener(t) {
    t.key === "Tab" && t.stopPropagation();
  }
  /**
   * Set the coordinates of the cell that the focus has moved to
   *
   * @param {FocusEvent} event - focusin event
   */
  focusInTableListener(t) {
    const e = t.target, o = this.getRowByCell(e);
    this.focusedCell = {
      row: Array.from(this.table.querySelectorAll(`.${r.row}`)).indexOf(o) + 1,
      column: Array.from(o.querySelectorAll(`.${r.cell}`)).indexOf(e) + 1
    };
  }
  /**
   * Unselect row/column
   * Close toolbox menu
   * Hide toolboxes
   *
   * @returns {void}
   */
  hideToolboxes() {
    this.hideRowToolbox(), this.hideColumnToolbox(), this.updateToolboxesPosition();
  }
  /**
   * Unselect row, close toolbox
   *
   * @returns {void}
   */
  hideRowToolbox() {
    this.unselectRow(), this.toolboxRow.hide();
  }
  /**
   * Unselect column, close toolbox
   *
   * @returns {void}
   */
  hideColumnToolbox() {
    this.unselectColumn(), this.toolboxColumn.hide();
  }
  /**
   * Set the cursor focus to the focused cell
   *
   * @returns {void}
   */
  focusCell() {
    this.focusedCellElem.focus();
  }
  /**
   * Get current focused element
   *
   * @returns {HTMLElement} - focused cell
   */
  get focusedCellElem() {
    const { row: t, column: e } = this.focusedCell;
    return this.getCell(t, e);
  }
  /**
   * Update toolboxes position
   *
   * @param {number} row - hovered row
   * @param {number} column - hovered column
   */
  updateToolboxesPosition(t = this.hoveredRow, e = this.hoveredColumn) {
    this.isColumnMenuShowing || e > 0 && e <= this.numberOfColumns && this.toolboxColumn.show(() => ({
      left: `calc((100% - var(--cell-size)) / (${this.numberOfColumns} * 2) * (1 + (${e} - 1) * 2))`
    })), this.isRowMenuShowing || t > 0 && t <= this.numberOfRows && this.toolboxRow.show(() => {
      const o = this.getRow(t), { fromTopBorder: i } = g(this.table, o), { height: s } = o.getBoundingClientRect();
      return {
        top: `${Math.ceil(i + s / 2)}px`
      };
    });
  }
  /**
   * Makes the first row headings
   *
   * @param {boolean} withHeadings - use headings row or not
   */
  setHeadingsSetting(t) {
    this.tunes.withHeadings = t, t ? (this.table.classList.add(r.withHeadings), this.addHeadingAttrToFirstRow()) : (this.table.classList.remove(r.withHeadings), this.removeHeadingAttrFromFirstRow());
  }
  /**
   * Adds an attribute for displaying the placeholder in the cell
   */
  addHeadingAttrToFirstRow() {
    for (let t = 1; t <= this.numberOfColumns; t++) {
      let e = this.getCell(1, t);
      e && e.setAttribute("heading", this.api.i18n.t("Heading"));
    }
  }
  /**
   * Removes an attribute for displaying the placeholder in the cell
   */
  removeHeadingAttrFromFirstRow() {
    for (let t = 1; t <= this.numberOfColumns; t++) {
      let e = this.getCell(1, t);
      e && e.removeAttribute("heading");
    }
  }
  /**
   * Add effect of a selected row
   *
   * @param {number} index
   */
  selectRow(t) {
    const e = this.getRow(t);
    e && (this.selectedRow = t, e.classList.add(r.rowSelected));
  }
  /**
   * Remove effect of a selected row
   */
  unselectRow() {
    if (this.selectedRow <= 0)
      return;
    const t = this.table.querySelector(`.${r.rowSelected}`);
    t && t.classList.remove(r.rowSelected), this.selectedRow = 0;
  }
  /**
   * Add effect of a selected column
   *
   * @param {number} index
   */
  selectColumn(t) {
    for (let e = 1; e <= this.numberOfRows; e++) {
      const o = this.getCell(e, t);
      o && o.classList.add(r.cellSelected);
    }
    this.selectedColumn = t;
  }
  /**
   * Remove effect of a selected column
   */
  unselectColumn() {
    if (this.selectedColumn <= 0)
      return;
    let t = this.table.querySelectorAll(`.${r.cellSelected}`);
    Array.from(t).forEach((e) => {
      e.classList.remove(r.cellSelected);
    }), this.selectedColumn = 0;
  }
  /**
   * Calculates the row and column that the cursor is currently hovering over
   * The search was optimized from O(n) to O (log n) via bin search to reduce the number of calculations
   *
   * @param {Event} event - mousemove event
   * @returns hovered cell coordinates as an integer row and column
   */
  getHoveredCell(t) {
    let e = this.hoveredRow, o = this.hoveredColumn;
    const { width: i, height: s, x: n, y: h } = R(this.table, t);
    return n >= 0 && (o = this.binSearch(
      this.numberOfColumns,
      (l) => this.getCell(1, l),
      ({ fromLeftBorder: l }) => n < l,
      ({ fromRightBorder: l }) => n > i - l
    )), h >= 0 && (e = this.binSearch(
      this.numberOfRows,
      (l) => this.getCell(l, 1),
      ({ fromTopBorder: l }) => h < l,
      ({ fromBottomBorder: l }) => h > s - l
    )), {
      row: e || this.hoveredRow,
      column: o || this.hoveredColumn
    };
  }
  /**
   * Looks for the index of the cell the mouse is hovering over.
   * Cells can be represented as ordered intervals with left and
   * right (upper and lower for rows) borders inside the table, if the mouse enters it, then this is our index
   *
   * @param {number} numberOfCells - upper bound of binary search
   * @param {function} getCell - function to take the currently viewed cell
   * @param {function} beforeTheLeftBorder - determines the cursor position, to the left of the cell or not
   * @param {function} afterTheRightBorder - determines the cursor position, to the right of the cell or not
   * @returns {number}
   */
  binSearch(t, e, o, i) {
    let s = 0, n = t + 1, h = 0, l;
    for (; s < n - 1 && h < 10; ) {
      l = Math.ceil((s + n) / 2);
      const w = e(l), p = g(this.table, w);
      if (o(p))
        n = l;
      else if (i(p))
        s = l;
      else
        break;
      h++;
    }
    return l;
  }
  /**
   * Collects data from cells into a two-dimensional array
   *
   * @returns {string[][]}
   */
  getData() {
    const t = [];
    for (let e = 1; e <= this.numberOfRows; e++) {
      const o = this.table.querySelector(`.${r.row}:nth-child(${e})`), i = Array.from(o.querySelectorAll(`.${r.cell}`));
      i.every((n) => !n.textContent.trim()) || t.push(i.map((n) => n.innerHTML));
    }
    return t;
  }
  /**
   * Remove listeners on the document
   */
  destroy() {
    document.removeEventListener("click", this.documentClicked);
  }
}
class I {
  /**
   * Notify core that read-only mode is supported
   *
   * @returns {boolean}
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Allow to press Enter inside the CodeTool textarea
   *
   * @returns {boolean}
   * @public
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {TableData} data — previously saved data
   * @param {TableConfig} config - user config for Tool
   * @param {object} api - Editor.js API
   * @param {boolean} readOnly - read-only mode flag
   */
  constructor({ data: t, config: e, api: o, readOnly: i }) {
    this.api = o, this.readOnly = i, this.config = e, this.data = {
      withHeadings: this.getConfig("withHeadings", !1, t),
      content: t && t.content ? t.content : []
    }, this.table = null;
  }
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @returns {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: O,
      title: "Table"
    };
  }
  /**
   * Return Tool's view
   *
   * @returns {HTMLDivElement}
   */
  render() {
    return this.table = new A(this.readOnly, this.api, this.data, this.config), this.container = c("div", this.api.styles.block), this.container.appendChild(this.table.getWrapper()), this.table.setHeadingsSetting(this.data.withHeadings), this.container;
  }
  /**
   * Returns plugin settings
   *
   * @returns {Array}
   */
  renderSettings() {
    return [
      {
        label: this.api.i18n.t("With headings"),
        icon: L,
        isActive: this.data.withHeadings,
        closeOnActivate: !0,
        toggle: !0,
        onActivate: () => {
          this.data.withHeadings = !0, this.table.setHeadingsSetting(this.data.withHeadings);
        }
      },
      {
        label: this.api.i18n.t("Without headings"),
        icon: M,
        isActive: !this.data.withHeadings,
        closeOnActivate: !0,
        toggle: !0,
        onActivate: () => {
          this.data.withHeadings = !1, this.table.setHeadingsSetting(this.data.withHeadings);
        }
      }
    ];
  }
  /**
   * Extract table data from the view
   *
   * @returns {TableData} - saved data
   */
  save() {
    const t = this.table.getData();
    return {
      withHeadings: this.data.withHeadings,
      content: t
    };
  }
  /**
   * Plugin destroyer
   *
   * @returns {void}
   */
  destroy() {
    this.table.destroy();
  }
  /**
   * A helper to get config value.
   * 
   * @param {string} configName - the key to get from the config. 
   * @param {any} defaultValue - default value if config doesn't have passed key
   * @param {object} savedData - previously saved data. If passed, the key will be got from there, otherwise from the config
   * @returns {any} - config value.
   */
  getConfig(t, e = void 0, o = void 0) {
    const i = this.data || o;
    return i ? i[t] ? i[t] : e : this.config && this.config[t] ? this.config[t] : e;
  }
  /**  
   * Table onPaste configuration
   *
   * @public
   */
  static get pasteConfig() {
    return { tags: ["TABLE", "TR", "TH", "TD"] };
  }
  /**
   * On paste callback that is fired from Editor
   *
   * @param {PasteEvent} event - event with pasted data
   */
  onPaste(t) {
    const e = t.detail.data, o = e.querySelector(":scope > thead, tr:first-of-type th"), s = Array.from(e.querySelectorAll("tr")).map((n) => Array.from(n.querySelectorAll("th, td")).map((l) => l.innerHTML));
    this.data = {
      withHeadings: o !== null,
      content: s
    }, this.table.wrapper && this.table.wrapper.replaceWith(this.render());
  }
}



/***/ }),

/***/ "./node_modules/@editorjs/warning/dist/warning.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/@editorjs/warning/dist/warning.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ r)
/* harmony export */ });
(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`.cdx-warning{position:relative}@media all and (min-width: 736px){.cdx-warning{padding-left:36px}}.cdx-warning [contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-warning [contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-warning [contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-warning:before{content:"";background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='5' y='5' width='14' height='14' rx='4' stroke='black' stroke-width='2'/%3E%3Cline x1='12' y1='9' x2='12' y2='12' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M12 15.02V15.01' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");width:24px;height:24px;background-size:24px 24px;position:absolute;margin-top:8px;left:0}@media all and (max-width: 735px){.cdx-warning:before{display:none}}.cdx-warning__message{min-height:85px}.cdx-warning__title{margin-bottom:6px}`)),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
const n = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="2" rx="4"/><line x1="12" x2="12" y1="9" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 15.02V15.01"/></svg>';
class r {
  /**
   * Notify core that read-only mode is supported
   */
  static get isReadOnlySupported() {
    return !0;
  }
  /**
   * Get Toolbox settings
   *
   * @public
   * @returns {string}
   */
  static get toolbox() {
    return {
      icon: n,
      title: "Warning"
    };
  }
  /**
   * Allow to press Enter inside the Warning
   *
   * @public
   * @returns {boolean}
   */
  static get enableLineBreaks() {
    return !0;
  }
  /**
   * Default placeholder for warning title
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_TITLE_PLACEHOLDER() {
    return "Title";
  }
  /**
   * Default placeholder for warning message
   *
   * @public
   * @returns {string}
   */
  static get DEFAULT_MESSAGE_PLACEHOLDER() {
    return "Message";
  }
  /**
   * Warning Tool`s styles
   *
   * @returns {object}
   */
  get CSS() {
    return {
      baseClass: this.api.styles.block,
      wrapper: "cdx-warning",
      title: "cdx-warning__title",
      input: this.api.styles.input,
      message: "cdx-warning__message"
    };
  }
  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {WarningData} data — previously saved data
   * @param {WarningConfig} config — user config for Tool
   * @param {object} api - Editor.js API
   * @param {boolean} readOnly - read-only mode flag
   */
  constructor({ data: e, config: t, api: s, readOnly: i }) {
    this.api = s, this.readOnly = i, this.titlePlaceholder = t.titlePlaceholder || r.DEFAULT_TITLE_PLACEHOLDER, this.messagePlaceholder = t.messagePlaceholder || r.DEFAULT_MESSAGE_PLACEHOLDER, this.data = {
      title: e.title || "",
      message: e.message || ""
    };
  }
  /**
   * Create Warning Tool container with inputs
   *
   * @returns {Element}
   */
  render() {
    const e = this._make("div", [this.CSS.baseClass, this.CSS.wrapper]), t = this._make("div", [this.CSS.input, this.CSS.title], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.title
    }), s = this._make("div", [this.CSS.input, this.CSS.message], {
      contentEditable: !this.readOnly,
      innerHTML: this.data.message
    });
    return t.dataset.placeholder = this.titlePlaceholder, s.dataset.placeholder = this.messagePlaceholder, e.appendChild(t), e.appendChild(s), e;
  }
  /**
   * Extract Warning data from Warning Tool element
   *
   * @param {HTMLDivElement} warningElement - element to save
   * @returns {WarningData}
   */
  save(e) {
    const t = e.querySelector(`.${this.CSS.title}`), s = e.querySelector(`.${this.CSS.message}`);
    return Object.assign(this.data, {
      title: t.innerHTML,
      message: s.innerHTML
    });
  }
  /**
   * Helper for making Elements with attributes
   *
   * @param  {string} tagName           - new Element tag name
   * @param  {Array|string} classNames  - list or name of CSS classname(s)
   * @param  {object} attributes        - any attributes
   * @returns {Element}
   */
  _make(e, t = null, s = {}) {
    const i = document.createElement(e);
    Array.isArray(t) ? i.classList.add(...t) : t && i.classList.add(t);
    for (const a in s)
      i[a] = s[a];
    return i;
  }
  /**
   * Sanitizer config for Warning Tool saved data
   *
   * @returns {object}
   */
  static get sanitize() {
    return {
      title: {},
      message: {}
    };
  }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/editor": 0,
/******/ 			"css/editor": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/editor"], () => (__webpack_require__("./resources/js/editor.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/editor"], () => (__webpack_require__("./resources/css/editor.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;