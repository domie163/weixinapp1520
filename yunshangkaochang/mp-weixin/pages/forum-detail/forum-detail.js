(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-detail/forum-detail"],{1242:function(t,n,e){"use strict";var r=e("32ff"),u=e.n(r);u.a},"32ff":function(t,n,e){},3706:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,r,u,a,o){try{var i=t[a](o),c=i.value}catch(f){return void e(f)}i.done?n(c):Promise.resolve(c).then(r,u)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(r,u){var o=t.apply(n,e);function i(t){a(o,r,u,i,c,"next",t)}function c(t){a(o,r,u,i,c,"throw",t)}i(void 0)}))}}var i=function(){e.e("components/forum-reply/forum-reply").then(function(){return resolve(e("948e"))}.bind(null,e)).catch(e.oe)},c={components:{userReply:i},data:function(){return{commentData:[],forum:{},id:""}},onLoad:function(){var t=o(r.default.mark((function t(n){var e;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.id=n.id,t.next=3,this.$api.forumDetail(n.id);case 3:e=t.sent,this.commentData=e.data.childs,this.forum=e.data,console.log(this.commentData);case 7:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}(),onShow:function(){var t=o(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.forumDetail(this.id);case 2:n=t.sent,this.commentData=n.data.childs,this.forum=n.data;case 5:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),methods:{onReplyTap:function(t){this.$utils.jump("../forum-reply/forum-reply?pid=".concat(t))}}};n.default=c},"3f57":function(t,n,e){"use strict";e.r(n);var r=e("9fe6"),u=e("fa60");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("1242");var o,i=e("f0c5"),c=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,"7ae3bd44",null,!1,r["a"],o);n["default"]=c.exports},"54a0":function(t,n,e){"use strict";(function(t){e("0624"),e("921b");r(e("66fd"));var n=r(e("3f57"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"9fe6":function(t,n,e){"use strict";var r,u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}))},fa60:function(t,n,e){"use strict";e.r(n);var r=e("3706"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a}},[["54a0","common/runtime","common/vendor"]]]);