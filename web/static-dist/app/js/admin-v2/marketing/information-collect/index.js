!function(l){function n(n){for(var t,e,o=n[0],r=n[1],i=n[2],a=0,c=[];a<o.length;a++)e=o[a],Object.prototype.hasOwnProperty.call(s,e)&&s[e]&&c.push(s[e][0]),s[e]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(l[t]=r[t]);for(p&&p(n);c.length;)c.shift()();return f.push.apply(f,i||[]),u()}function u(){for(var n,t=0;t<f.length;t++){for(var e=f[t],o=!0,r=1;r<e.length;r++){var i=e[r];0!==s[i]&&(o=!1)}o&&(f.splice(t--,1),n=a(a.s=e[0]))}return n}var e={},s={64:0},f=[];function a(n){if(e[n])return e[n].exports;var t=e[n]={i:n,l:!1,exports:{}};return l[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=l,a.c=e,a.d=function(n,t,e){a.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)a.d(e,o,function(n){return t[n]}.bind(null,o));return e},a.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(t,"a",t),t},a.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},a.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],o=t.push.bind(t);t.push=n,t=t.slice();for(var r=0;r<t.length;r++)n(t[r]);var p=o;f.push([557,0]),u()}({15:function(n,t){n.exports=jQuery},557:function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return l});var o=e(0),r=e.n(o),i=e(1),a=e.n(i),c=e(4),l=function(){function n(){r()(this,n),this.init()}return a()(n,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){var n=$("#collect-table");n.on("click",".close-collect",function(){confirm(Translator.trans("admin_v2.information_collect.close.hint"))&&$.post($(this).data("url"),function(n){n?(Object(c.a)("success",Translator.trans("admin_v2.information_collect.close.success_hint"),1),window.location.reload()):Object(c.a)("danger",Translator.trans("admin_v2.information_collect.close.failure_hint"),1)})}),n.on("click",".open-collect",function(){confirm(Translator.trans("admin_v2.information_collect.open.hint"))&&$.post($(this).data("url"),function(n){n?(Object(c.a)("success",Translator.trans("admin_v2.information_collect.open.success_hint"),1),window.location.reload()):Object(c.a)("danger",Translator.trans("admin_v2.information_collect.open.failure_hint"),1)})})}}]),n}();new l}});