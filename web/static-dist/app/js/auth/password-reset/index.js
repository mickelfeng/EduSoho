!function(c){function e(e){for(var r,t,a=e[0],n=e[1],o=e[2],s=0,i=[];s<a.length;s++)t=a[s],Object.prototype.hasOwnProperty.call(l,t)&&l[t]&&i.push(l[t][0]),l[t]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(c[r]=n[r]);for(h&&h(e);i.length;)i.shift()();return u.push.apply(u,o||[]),d()}function d(){for(var e,r=0;r<u.length;r++){for(var t=u[r],a=!0,n=1;n<t.length;n++){var o=t[n];0!==l[o]&&(a=!1)}a&&(u.splice(r--,1),e=s(s.s=t[0]))}return e}var t={},l={121:0},u=[];function s(e){if(t[e])return t[e].exports;var r=t[e]={i:e,l:!1,exports:{}};return c[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=c,s.c=t,s.d=function(e,r,t){s.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(r,e){if(1&e&&(r=s(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var a in r)s.d(t,a,function(e){return r[e]}.bind(null,a));return t},s.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(r,"a",r),r},s.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},s.p="/static-dist/";var r=window.webpackJsonp=window.webpackJsonp||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var n=0;n<r.length;n++)e(r[n]);var h=a;u.push([606,0]),d()}({15:function(e,r){e.exports=jQuery},360:function(e,r,t){"use strict";t.d(r,"a",function(){return a});var a=function e(r,t,a,n){var o=3<arguments.length&&void 0!==n?n:function(){};if(r.addClass("disabled").attr("disabled",!0),t.data("count-down-text")||t.data("count-down-text",t.text()),t.text(a+" 秒后重新获取"),--a<0)return r.removeClass("disabled").attr("disabled",!1),t.text(t.data("count-down-text")),void o();setTimeout(function(){e(r,t,a,o)},1e3)}},402:function(e,r){!function(t){"use strict";var c,u;void 0===t.btoa&&(t.btoa=(c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),function(e){var r,t,a,n=t=0,o=e.length,s=o%3,i=(o-=s)/3<<2;for(0<s&&(i+=4),r=new Array(i);n<o;)a=e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<8|e.charCodeAt(n++),r[t++]=c[a>>18]+c[a>>12&63]+c[a>>6&63]+c[63&a];return 1==s?(a=e.charCodeAt(n++),r[t++]=c[a>>2]+c[(3&a)<<4]+"=="):2==s&&(a=e.charCodeAt(n++)<<8|e.charCodeAt(n++),r[t++]=c[a>>10]+c[a>>4&63]+c[(15&a)<<2]+"="),r.join("")})),void 0===t.atob&&(t.atob=(u=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1],function(e){var r,t,a,n,o,s,i,c,d,l=e.length;if(l%4!=0)return"";if(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(e))return"";for(c=l,0<(i="="==e.charAt(l-2)?1:"="==e.charAt(l-1)?2:0)&&(c-=4),c=3*(c>>2)+i,d=new Array(c),o=s=0;o<l&&-1!=(r=u[e.charCodeAt(o++)])&&-1!=(t=u[e.charCodeAt(o++)])&&(d[s++]=String.fromCharCode(r<<2|(48&t)>>4),-1!=(a=u[e.charCodeAt(o++)]))&&(d[s++]=String.fromCharCode((15&t)<<4|(60&a)>>2),-1!=(n=u[e.charCodeAt(o++)]));)d[s++]=String.fromCharCode((3&a)<<6|n);return d.join("")}));var l=2654435769;function a(e,r){var t=e.length,a=t<<2;if(r){var n=e[t-1];if(n<(a-=4)-3||a<n)return null;a=n}for(var o=0;o<t;o++)e[o]=String.fromCharCode(255&e[o],e[o]>>>8&255,e[o]>>>16&255,e[o]>>>24&255);var s=e.join("");return r?s.substring(0,a):s}function n(e,r){var t,a=e.length,n=a>>2;0!=(3&a)&&++n,r?(t=new Array(n+1))[n]=a:t=new Array(n);for(var o=0;o<a;++o)t[o>>2]|=e.charCodeAt(o)<<((3&o)<<3);return t}function h(e){return 4294967295&e}function f(e,r,t,a,n,o){return(t>>>5^r<<2)+(r>>>3^t<<4)^(e^r)+(o[3&a^n]^t)}function o(e){return e.length<4&&(e.length=4),e}function s(e){if(/^[\x00-\x7f]*$/.test(e))return e;for(var r=[],t=e.length,a=0,n=0;a<t;++a,++n){var o=e.charCodeAt(a);if(o<128)r[n]=e.charAt(a);else if(o<2048)r[n]=String.fromCharCode(192|o>>6,128|63&o);else{if(!(o<55296||57343<o)){if(a+1<t){var s=e.charCodeAt(a+1);if(o<56320&&56320<=s&&s<=57343){var i=65536+((1023&o)<<10|1023&s);r[n]=String.fromCharCode(240|i>>18&63,128|i>>12&63,128|i>>6&63,128|63&i),++a;continue}}throw new Error("Malformed string")}r[n]=String.fromCharCode(224|o>>12,128|o>>6&63,128|63&o)}}return r.join("")}function i(e,r){return(null==r||r<0)&&(r=e.length),0===r?"":/^[\x00-\x7f]*$/.test(e)||!/^[\x00-\xff]*$/.test(e)?r===e.length?e:e.substr(0,r):(r<65535?function(e,r){for(var t=new Array(r),a=0,n=0,o=e.length;a<r&&n<o;a++){var s=e.charCodeAt(n++);switch(s>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:t[a]=s;break;case 12:case 13:if(!(n<o))throw new Error("Unfinished UTF-8 octet sequence");t[a]=(31&s)<<6|63&e.charCodeAt(n++);break;case 14:if(!(n+1<o))throw new Error("Unfinished UTF-8 octet sequence");t[a]=(15&s)<<12|(63&e.charCodeAt(n++))<<6|63&e.charCodeAt(n++);break;case 15:if(!(n+2<o))throw new Error("Unfinished UTF-8 octet sequence");var i=((7&s)<<18|(63&e.charCodeAt(n++))<<12|(63&e.charCodeAt(n++))<<6|63&e.charCodeAt(n++))-65536;if(!(0<=i&&i<=1048575))throw new Error("Character outside valid Unicode range: 0x"+i.toString(16));t[a++]=i>>10&1023|55296,t[a]=1023&i|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+s.toString(16))}}return a<r&&(t.length=a),String.fromCharCode.apply(String,t)}:function(e,r){for(var t=[],a=new Array(32768),n=0,o=0,s=e.length;n<r&&o<s;n++){var i,c=e.charCodeAt(o++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:a[n]=c;break;case 12:case 13:if(!(o<s))throw new Error("Unfinished UTF-8 octet sequence");a[n]=(31&c)<<6|63&e.charCodeAt(o++);break;case 14:if(!(o+1<s))throw new Error("Unfinished UTF-8 octet sequence");a[n]=(15&c)<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++);break;case 15:if(!(o+2<s))throw new Error("Unfinished UTF-8 octet sequence");var d=((7&c)<<18|(63&e.charCodeAt(o++))<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++))-65536;if(!(0<=d&&d<=1048575))throw new Error("Character outside valid Unicode range: 0x"+d.toString(16));a[n++]=d>>10&1023|55296,a[n]=1023&d|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+c.toString(16))}32766<=n&&(i=n+1,a.length=i,t[t.length]=String.fromCharCode.apply(String,a),r-=i,n=-1)}return 0<n&&(a.length=n,t[t.length]=String.fromCharCode.apply(String,a)),t.join("")})(e,r)}function d(e,r){return null==e||0===e.length?e:(e=s(e),r=s(r),a(function(e,r){for(var t,a,n,o=e.length,s=o-1,i=e[s],c=0,d=0|Math.floor(6+52/o);0<d;--d){for(a=(c=h(c+l))>>>2&3,n=0;n<s;++n)t=e[n+1],i=e[n]=h(e[n]+f(c,t,i,n,a,r));t=e[0],i=e[s]=h(e[s]+f(c,t,i,s,a,r))}return e}(n(e,!0),o(n(r,!1))),!1))}function m(e,r){return null==e||0===e.length?e:(r=s(r),i(a(function(e,r){for(var t,a,n,o=e.length,s=o-1,i=e[0],c=h(Math.floor(6+52/o)*l);0!==c;c=h(c-l)){for(a=c>>>2&3,n=s;0<n;--n)t=e[n-1],i=e[n]=h(e[n]-f(c,i,t,n,a,r));t=e[s],i=e[0]=h(e[0]-f(c,i,t,0,a,r))}return e}(n(e,!1),o(n(r,!1))),!0)))}t.XXTEA={utf8Encode:s,utf8Decode:i,encrypt:d,encryptToBase64:function(e,r){return t.btoa(d(e,r))},decrypt:m,decryptFromBase64:function(e,r){return null==e||0===e.length?e:m(t.atob(e),r)}}}(window)},606:function(e,r,t){"use strict";t.r(r);var a=t(0),n=t.n(a),o=t(1),s=t.n(o),i=(t(73),t(69)),c=t(30),d=t(4),l=t(360);t(402),new(function(){function e(){n()(this,e),this.event(),this.dragHtml=$(".js-drag-box").html(),$(".js-drag-box").remove(),"none"==$("#password-reset-form").css("display")?$("#password-reset-by-mobile-form").prepend(this.dragHtml):$("#password-reset-form").prepend(this.dragHtml),this.drag=new i.a($("#drag-btn"),$(".js-jigsaw"),{limitType:"reset_password"}),this.smsEvent(),this.validator(),this.smsToken=""}return s()(e,[{key:"event",value:function(){var t=this;$(".js-find-password li").click(function(){var e,r=$(this);r.hasClass("active")||(r.addClass("active").siblings().removeClass("active"),0<(e=$(r.data("target"))).length&&($("form").hide(),t.drag.unbindEvent(),$(".js-drag").remove(),e.prepend(t.dragHtml),t.drag=new i.a($("#drag-btn"),$(".js-jigsaw"),{limitType:"reset_password"}),e.show()))})}},{key:"smsEvent",value:function(){var e=this,r=$(".js-sms-send"),t=this;r.click(function(){if(e.mobileValidator.element($('[name="dragCaptchaToken"]'))&&e.mobileValidator.element($('[name="mobile"]'))){if(r.hasClass("disabled"))return;r.addClass("disabled"),c.a.resetPasswordSms.get({params:{mobile:$("#mobile").val()},data:{dragCaptchaToken:$('[name="dragCaptchaToken"]').val()}}).then(function(e){Object(d.a)("success",Translator.trans("notify.sms_send_success.message")),r.removeClass("disabled"),Object(l.a)($(".js-sms-send"),$("#js-fetch-btn-text"),120),t.smsToken=e.smsToken}).catch(function(){r.removeClass("disabled"),t.drag.initDragCaptcha()})}})}},{key:"validator",value:function(){var a=this;$("#password-reset-form").validate({rules:{email:{required:!0,email:!0},dragCaptchaToken:{required:!0}},messages:{dragCaptchaToken:{required:Translator.trans("site.captcha_code.required")}},submitHandler:function(){var r=$("#password-reset-form").find('[name="email"]').val();c.a.resetPasswordEmail.patch({params:{email:r},data:{dragCaptchaToken:$('[name="dragCaptchaToken"]').val()}}).then(function(e){Object(d.a)("success",Translator.trans("notify.password_reset_email_send_success.message")),window.location.href=$("#password-reset-form").data("success")+"?email="+r}).catch(function(e){4040104==(e.responseJSON.error.code||0)&&a.drag.initDragCaptcha()})}}),$.validator.addMethod("passwordSms",function(e,r){var t=!1;return c.a.resetPasswordSms.validate({params:{mobile:$("#mobile").val(),smsCode:$("#sms-code").val()},data:{smsToken:a.smsToken},async:!1,promise:!1}).success(function(e){t="sms.code.success"==e}),t},$.validator.format(Translator.trans("validate.sms_code.message"))),this.mobileValidator=$("#password-reset-by-mobile-form").validate({rules:{mobile:{required:!0,phone:!0},sms_code:{required:!0,unsigned_integer:!0,rangelength:[6,6],passwordSms:!0},dragCaptchaToken:{required:!0},reset_password:{required:!0,minlength:5,maxlength:20}},messages:{sms_code:{required:Translator.trans("auth.password_reset.sms_code_required_hint"),rangelength:Translator.trans("auth.password_reset.sms_code_validate_hint")},dragCaptchaToken:{required:Translator.trans("site.captcha_code.required")}},submitHandler:function(){c.a.resetPasswordMobile.patch({params:{mobile:$("#mobile").val()},data:{smsToken:a.smsToken,smsCode:$("#sms-code").val(),encrypt_password:window.XXTEA.encryptToBase64($("#reset_password").val(),window.location.host),dragCaptchaToken:$('[name="dragCaptchaToken"]').val()}}).then(function(e){Object(d.a)("success",Translator.trans("notify.password_reset_success.message")),window.location.href=$("#password-reset-form").data("success")+"?mobile="+$("#mobile").val()})}})}}]),e}())}});