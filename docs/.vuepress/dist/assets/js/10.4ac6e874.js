(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{487:function(t,n,e){},488:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},489:function(t,n,e){var i=e(24),o="["+e(488)+"]",a=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),s=function(t){return function(n){var e=String(i(n));return 1&t&&(e=e.replace(a,"")),2&t&&(e=e.replace(c,"")),e}};t.exports={start:s(1),end:s(2),trim:s(3)}},490:function(t,n,e){"use strict";var i={props:["name"],name:"gulu-gicon"},o=(e(493),e(41)),a=Object(o.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-"+this.name}})])])}),[],!1,null,"278af004",null);n.a=a.exports},491:function(t,n,e){"use strict";var i=e(1),o=e(489).trim;i({target:"String",proto:!0,forced:e(492)("trim")},{trim:function(){return o(this)}})},492:function(t,n,e){var i=e(2),o=e(488);t.exports=function(t){return i((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},493:function(t,n,e){"use strict";var i=e(487);e.n(i).a},494:function(t,n,e){"use strict";n.a={data:function(){return{codeParent:[],codeHeightArr:[],isShow:[]}},methods:{showCode:function(t){var n=this;this.$set(this.isShow,t,!this.isShow[t]),this.$nextTick((function(){!0===n.isShow[t]?n.codeParent[t].style.height=+n.codeHeightArr[t]+25+"px":n.codeParent[t].style.height=0}))},getCodesHeight:function(){var t=document.getElementsByClassName("code-content-height");this.codeParent=document.getElementsByClassName("code-content");for(var n=t.length,e=0;e<n;e++)this.codeHeightArr.push(t[e].getBoundingClientRect().height),this.isShow.push(!1)}},mounted:function(){var t=this;this.$nextTick((function(){t.getCodesHeight()}))}}},495:function(t,n){var e=document.createElement("script");e.src="//at.alicdn.com/t/font_1967024_93oeubwae7q.js",document.body.appendChild(e)},496:function(t,n,e){},499:function(t,n,e){"use strict";var i=e(496);e.n(i).a},501:function(t,n,e){"use strict";var i={components:{GIcon:e(490).a},props:{icon:String,loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(t){return"right"!==t||"left"!==t}}},name:"gulu-gbutton"},o=(e(499),e(41)),a=Object(o.a)(i,(function(){var t,n=this,e=n.$createElement,i=n._self._c||e;return i("button",{staticClass:"g-button",class:(t={},t["icon-"+n.iconPosition]=!0,t),on:{click:function(t){return n.$emit("click")}}},[n.loading?i("g-icon",{staticClass:"icon loading",attrs:{name:"jiazai"}}):n._e(),n._v(" "),n.icon&&!n.loading?i("g-icon",{staticClass:"icon",attrs:{name:n.icon}}):n._e(),n._v(" "),i("div",{staticClass:"content"},[n._t("default")],2)],1)}),[],!1,null,"23516550",null);n.a=a.exports},616:function(t,n,e){"use strict";e.r(n);e(42),e(65),e(491),e(495);var i=e(490),o=e(494),a=e(501),c={name:"GuluGIcon",mixins:[o.a],components:{GIcon:i.a,GButton:a.a},data:function(){return{codeStr:'\n        <g-icon name="shezhi"></g-icon>\n        <g-icon name="dianzan"></g-icon>\n        <g-icon name="jiazai"></g-icon>\n        <g-button icon="xiazai">下载</g-button>\n      '.replace(/^ {8}/gm,"").trim()}}},s=e(41),r=Object(s.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"demo"},[e("h2",[t._v("简单用法")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"component-wrapper"},[e("div",{staticClass:"component-wrapper-demo"},[e("g-icon",{attrs:{name:"shezhi"}}),t._v(" "),e("g-icon",{attrs:{name:"dianzan"}}),t._v(" "),e("g-icon",{attrs:{name:"jiazai"}}),t._v(" "),e("g-button",{attrs:{icon:"xiazai"}},[t._v("下载")])],1),t._v(" "),e("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[e("div",{staticClass:"code-content-height"},[e("pre",[e("code",{staticClass:"html"},[t._v(t._s(t.codeStr))])])])]),t._v(" "),e("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(n){return t.showCode(0)}}},[e("g-icon",{staticClass:"icon-xia",attrs:{name:!1===t.isShow[0]?"xia":"shang"}}),t._v(" "),e("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[0]?"显示代码":"隐藏代码"))])],1)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])}],!1,null,"3c0a13d9",null);n.default=r.exports}}]);