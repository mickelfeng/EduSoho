!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/static-dist/",o(o.s=748)}({360:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(){var r=$("#import-step-form"),o=$("#upload-btn"),a=$("#form_file"),i=$("#upload-file-box"),e=document.getElementById("upload-file-box"),s=$("#old-template-btn"),d=$(".js-step1-view"),t=$(".js-step2-view"),l=$(".js-step3-view"),n=$(".js-step2-btn"),u=$(".js-step3-btn");function c(e){var t,n;e&&(t=r.attr("action"),n=r.attr("method"),o.button("loading"),$.ajax({type:n,url:t,data:e,cache:!1,processData:!1,contentType:!1,success:function(e){var t,n;o.button("reset"),!0===e.success?(n=e,window.location.href=n.url):(t=e,s.addClass("hidden"),d.addClass("hidden"),l.html(t).removeClass("hidden"),u.removeClass("hidden"))},error:function(e){o.button("reset"),a.val(""),e=e.responseJSON.error,console.log("Read error:",e)}}))}a.on("change",function(e){var t=e.currentTarget.files;if(0===t.length)return!1;var n=t[0].name.split(".");n.pop(),n.join("."),c(new FormData(r[0]))}),i.on({dragleave:function(e){e.preventDefault(),e.stopPropagation()},drop:function(e){e.preventDefault(),e.stopPropagation()},dragenter:function(e){e.preventDefault(),e.stopPropagation()},dragover:function(e){e.preventDefault(),e.stopPropagation()}}),e.addEventListener("dragenter",function(e){i.toggleClass("bg-primary-light")},!1),e.addEventListener("dragleave",function(e){i.toggleClass("bg-primary-light")},!1),e.addEventListener("drop",function(e){i.removeClass("bg-primary-light");var t=e.dataTransfer.files;if(0===t.length)return!1;var n=t[0].name.split(".");n.pop(),n.join(".");var r=new FormData;r.append("importFile",t[0]),c(r)},!1),s.click(function(){return"1"==$(this).data("need-upgrade")?($("#modal").modal("hide"),void cd.confirm({title:Translator.trans("site.tips"),content:'<div class="cd-pb24 cd-dark-major">'+Translator.trans("course.question_manage.upgrade_tips")+"</div>",okText:Translator.trans("site.close"),cancelText:Translator.trans("site.confirm"),className:""}).on("ok",function(){$("#modal").modal("show")}).on("cancel",function(){$("#modal").modal("show")})):void $.ajax({type:"get",url:r.data("plumberUrl")}).done(function(e){$("#modal").html(e)})}),$("#re-import-btn").click(function(){s.removeClass("hidden"),d.removeClass("hidden"),t.addClass("hidden"),l.addClass("hidden"),n.addClass("hidden"),u.addClass("hidden"),a.val("")}),$('[data-toggle="popover"]').popover()}},748:function(e,t,n){"use strict";n.r(t);var r=n(360),o=$("#import-testpaper-box");Object(r.a)(o)}});