!function(d){function e(e){for(var t,r,a=e[0],n=e[1],s=e[2],i=0,o=[];i<a.length;i++)r=a[i],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&o.push(l[r][0]),l[r]=0;for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(d[t]=n[t]);for(h&&h(e);o.length;)o.shift()();return c.push.apply(c,s||[]),u()}function u(){for(var e,t=0;t<c.length;t++){for(var r=c[t],a=!0,n=1;n<r.length;n++){var s=r[n];0!==l[s]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var r={},l={276:0},c=[];function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return d[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=d,i.c=r,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var n=0;n<t.length;n++)e(t[n]);var h=a;c.push([862,0]),u()}({15:function(e,t){e.exports=jQuery},158:function(e,t,r){"use strict";r.d(t,"a",function(){return a});var a=function(e,t){e.keypress(function(e){13==e.which&&(t.trigger("click"),e.preventDefault())})}},862:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(1),i=r.n(s),o=r(158),d=r(4),u=$(".js-time-left"),l=$(".js-sms-send"),c=$(".js-fetch-btn-text"),h=function e(){var t=u.text();u.html(t-1),0<t-1?(l.attr("disabled",!0),setTimeout(e,1e3)):(u.html(""),c.html(Translator.trans("oauth.send.validate_message")),l.removeAttr("disabled"))},p=r(30),g=r(69);new(function(){function e(){n()(this,e),this.$form=$("#third-party-create-account-form"),this.$btn=$(".js-submit-btn"),this.validator=null,this.dragCaptchaToken="",this.smsToken=null,this.$sendBtn=$(".js-sms-send"),this.drag=!!$("#drag-btn").length&&new g.a($("#drag-btn"),$(".js-jigsaw"),{limitType:"bind_register"}),this.init()}return i()(e,[{key:"init",value:function(){this.setValidateRule(),this.initValidator(),this.smsSend(),this.submitForm(),this.removeSmsErrorTip(),this.dragEvent(),this.initRegisterVisitIdField()}},{key:"setValidateRule",value:function(){$.validator.addMethod("spaceNoSupport",function(e,t){return e.indexOf(" ")<0},$.validator.format(Translator.trans("validate.have_spaces")))}},{key:"dragEvent",value:function(){var t=this;this.drag&&this.drag.on("success",function(e){t.$sendBtn.attr("disabled",!1),t.dragCaptchaToken=e.token}),$(".js-drag-jigsaw").hasClass("hidden")||this.addDragCaptchaRules()}},{key:"initValidator",value:function(){this.rules={username:{required:!0,byte_minlength:4,byte_maxlength:18,nickname:!0,chinese_alphanumeric:!0,es_remote:{type:"get"}},invitedCode:{required:!1,reg_inviteCode:!0,es_remote:{type:"get"}},password:{required:!0,minlength:5,maxlength:20,spaceNoSupport:!0},confirmPassword:{required:!0,equalTo:"#password"},sms_code:{required:!0,unsigned_integer:!0,rangelength:[6,6]},agree_policy:{required:!0}},this.validator=this.$form.validate({rules:this.rules,messages:{sms_code:{required:Translator.trans("site.captcha_code.required"),rangelength:Translator.trans("validate.sms_code.message")},agree_policy:{required:Translator.trans("validate.valid_policy_input.message")}}})}},{key:"smsSend",value:function(){var r=this,a=this,n=$("#captcha_code");this.$sendBtn.length&&this.$sendBtn.click(function(e){a.smsSended||($.ajaxSetup({global:!1}),a.smsSended=!0),a.$sendBtn.attr("disabled",!0);var t={type:"register",mobile:$(".js-account").text(),dragCaptchaToken:r.dragCaptchaToken,phrase:n.val()};p.a.sms.send({data:t}).then(function(e){var t;$.ajaxSetup({global:!0}),r.smsToken=e.smsToken,t=120,u.html(t),c.html(Translator.trans("site.data.get_sms_code_again_btn")),Object(d.a)("success",Translator.trans("site.data.get_sms_code_success_hint")),h()}).catch(function(e){a.drag&&($.ajaxSetup({global:!0}),a.addDragCaptchaRules(),a.drag.initDragCaptcha(),$(".js-drag-jigsaw").removeClass("hidden"))})})}},{key:"submitForm",value:function(){var n=this;this.$btn.click(function(e){var t,r,a=$(e.target);n.validator.form()&&(a.button("loading"),t={nickname:$("#username").val(),password:$("#password").val(),mobile:$(".js-account").html(),smsToken:n.smsToken,smsCode:$("#sms-code").val(),captchaToken:n.captchaToken,phrase:$("#captcha_code").val(),dragCaptchaToken:$('[name="dragCaptchaToken"]').val(),invitedCode:0<$("#invitedCode").length?$("#invitedCode").val():"",registerVisitId:$('[name="registerVisitId"]').val()},r=Translator.trans("oauth.send.sms_code_error_tip"),$.post(a.data("url"),t,function(e){a.button("reset"),1===e.success?window.location.href=e.url:$(".js-password-error").length||a.prev().addClass("has-error").append('<p id="password-error" class="form-error-message js-password-error">'.concat(r,"</p>"))}).error(function(e){a.button("reset")}))}),Object(o.a)(this.$form,this.$btn)}},{key:"addDragCaptchaRules",value:function(){$('[name="dragCaptchaToken"]').rules("add",{required:!0,messages:{required:Translator.trans("auth.register.drag_captcha_tips")}})}},{key:"removeSmsErrorTip",value:function(){$("#sms-code").focus(function(){var e=$(".js-password-error");e.length&&e.remove()})}},{key:"initRegisterVisitIdField",value:function(){$(document).ready(function(){"undefined"!==window._VISITOR_ID&&$('[name="registerVisitId"]').val(window._VISITOR_ID)})}}]),e}())}});