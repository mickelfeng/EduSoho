!function(o){function e(e){for(var t,n,a=e[0],r=e[1],s=e[2],i=0,c=[];i<a.length;i++)n=a[i],Object.prototype.hasOwnProperty.call(d,n)&&d[n]&&c.push(d[n][0]),d[n]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(o[t]=r[t]);for(h&&h(e);c.length;)c.shift()();return u.push.apply(u,s||[]),l()}function l(){for(var e,t=0;t<u.length;t++){for(var n=u[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==d[s]&&(a=!1)}a&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var n={},d={233:0},u=[];function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=o,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/static-dist/";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var h=a;u.push([732,0]),l()}({104:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(17),r=n.n(a),s=n(0),i=n.n(s),c=n(1),o=n.n(c),l=function(){function t(e){i()(this,t),this.$elem=$(e),this.init(),this.selectMap={}}return o()(t,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){var t=this;this.$elem.on("click",".js-checkbox",function(e){t.toggleItem(e),t.changeSelectedNum()}),this.$elem.on("click",".js-select-all",function(e){$(e.target).prop("checked")?(t.$elem.find(".js-select-all").prop("checked",!0),t.addItems()):(t.$elem.find(".js-select-all").prop("checked",!1),t.removeItems()),t.changeSelectedNum()})}},{key:"setOpts",value:function(e){var t=e.addCb,n=void 0===t?function(){}:t,a=e.removeCb,r=void 0===a?function(){}:a;this.addCb=n,this.removeCb=r}},{key:"getItem",value:function(e){return{id:e.data("id")}}},{key:"removeItem",value:function(e){var t=this.$elem.find('input[data-id="'.concat(e.id,'"]'));t.length&&t.prop("checked",!1),this.selectMap[e.id]&&delete this.selectMap[e.id]}},{key:"addItem",value:function(e){var t=$(e);t.prop("checked",!0),this.selectMap[t.data("id")]||(this.selectMap[t.data("id")]=!0)}},{key:"addItems",value:function(){var n=this;this.$elem.find(".js-checkbox").each(function(e,t){$(t).prop("checked")||(n.addItem(t),n.addCb&&n.addCb(t))})}},{key:"removeItems",value:function(){var a=this;this.$elem.find(".js-checkbox").each(function(e,t){if($(t).prop("checked")){var n=a.getItem($(t));a.removeItem(n),a.removeCb&&a.removeCb(t)}})}},{key:"toggleItem",value:function(e){var t=$(e.currentTarget);t.prop("checked")?this.selectMap[t.data("id")]||(this.selectMap[t.data("id")]=!0,this.addCb&&this.addCb(t)):this.selectMap[t.data("id")]&&(delete this.selectMap[t.data("id")],this.removeCb&&this.removeCb(t))}},{key:"resetItems",value:function(){this.selectMap={}}},{key:"getObjectLength",value:function(){return r()(this.selectMap).length}},{key:"toJson",value:function(){return r()(this.selectMap)}},{key:"updateTable",value:function(){var n=this;this.$elem.find(".js-checkbox").each(function(e,t){n.selectMap[$(t).data("id")]&&$(t).prop("checked",!0)}),this.changeSelectedNum()}},{key:"changeSelectedNum",value:function(){0<this.$elem.find(".js-select-number").length&&this.$elem.find(".js-select-number").text(this.getObjectLength())}}]),t}()},732:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(1),i=n.n(s),c=n(104);new(function(){function e(){r()(this,e),this.table=$(".js-testpaper-html"),this.renderUrl=this.table.data("url"),this.element=$(".js-testpaper-container"),this.selector=new c.a(this.table),this.init()}return i()(e,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){var t=this;this.element.on("click",".js-search-btn",function(e){t.onClickSearchBtn(e)}),this.element.on("click",".pagination li",function(e){t.onClickPagination(e)}),this.element.on("click",".js-batch-delete",function(e){t.onBatchDelete(e)}),this.element.on("click",".open-testpaper,.close-testpaper",function(e){t.testpaperAction(e)}),this.element.on("click",".js-delete-btn",function(e){t.onDeleteSingle(e)})}},{key:"onBatchDelete",value:function(e){var t=this,n=$(e.currentTarget),a=n.data("name"),r=this.selector.toJson();0!==r.length?cd.confirm({title:Translator.trans("site.data.delete_title_hint",{name:a}),content:Translator.trans("site.data.delete_check_name_hint",{name:a}),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",function(){$.post(n.data("url"),{ids:r},function(e){e?(cd.message({type:"success",message:Translator.trans("site.delete_success_hint")}),t._resetPage(),t.selector.resetItems(),t.renderTable()):cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})}).error(function(e){cd.message({type:"danger",message:Translator.trans("site.delete_fail_hint")})})}):cd.message({type:"danger",message:Translator.trans("site.data.uncheck_name_hint",{name:a})})}},{key:"onDeleteSingle",value:function(e){var t=this,n=$(e.currentTarget),a=n.data("name");cd.confirm({title:Translator.trans("site.data.delete_title_hint",{name:a}),content:Translator.trans("site.data.delete_check_name_hint",{name:a}),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",function(){$.post(n.data("url"),function(e){cd.message({type:"success",message:Translator.trans("testpaper_manage.save_success_hint")}),t._resetPage(),t.renderTable()}).error(function(){cd.message({type:"danger",message:Translator.trans("testpaper_manage.save_error_hint")})})})}},{key:"onClickSearchBtn",value:function(e){this.renderTable(),e.preventDefault()}},{key:"onClickPagination",value:function(e){var t=$(e.currentTarget);this.element.find(".js-page").val(t.data("page")),this.renderTable(!0),e.preventDefault()}},{key:"testpaperAction",value:function(e){var t=$(e.currentTarget),n=(t.closest("tr"),this);cd.confirm({title:Translator.trans("confirm.oper.tip"),content:t.attr("title"),okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.close")}).on("ok",function(){$.post(t.data("url"),function(e){cd.message({type:"success",message:Translator.trans("testpaper_manage.save_success_hint")}),n.renderTable()}).error(function(){cd.message({type:"danger",message:Translator.trans("testpaper_manage.save_error_hint")})})})}},{key:"renderTable",value:function(e){e||this._resetPage();var t=this,n=this.element.find('[data-role="search-conditions"]').serialize()+"&page="+this.element.find(".js-page").val();this._loading(),$.ajax({type:"GET",url:this.renderUrl,data:n}).done(function(e){t.table.html(e),t.selector.updateTable()}).fail(function(){t._loaded_error()})}},{key:"_loading",value:function(){var e='<div class="empty" colspan="10" style="color:#999;padding:80px;">'+Translator.trans("site.loading")+"</div>";this.table.html(e)}},{key:"_loaded_error",value:function(){var e='<div class="empty" colspan="10" style="color:#999;padding:80px;">'+Translator.trans("site.loading_error")+"</div>";this.table.html(e)}},{key:"_resetPage",value:function(){this.element.find(".js-page").val(1)}}]),e}())}});