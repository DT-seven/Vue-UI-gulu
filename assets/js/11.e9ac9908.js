(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{495:function(t,e,n){},496:function(t,e,n){"use strict";var s={props:["name"],name:"gulu-gicon"},i=(n(499),n(26)),a=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-"+this.name}})])])}),[],!1,null,"278af004",null);e.a=a.exports},497:function(t,e,n){"use strict";var s=n(1),i=n(166).trim;s({target:"String",proto:!0,forced:n(498)("trim")},{trim:function(){return i(this)}})},498:function(t,e,n){var s=n(2),i=n(167);t.exports=function(t){return s((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},499:function(t,e,n){"use strict";var s=n(495);n.n(s).a},500:function(t,e,n){"use strict";e.a={data:function(){return{codeParent:[],codeHeightArr:[],isShow:[]}},methods:{showCode:function(t){var e=this;this.$set(this.isShow,t,!this.isShow[t]),this.$nextTick((function(){!0===e.isShow[t]?e.codeParent[t].style.height=+e.codeHeightArr[t]+25+"px":e.codeParent[t].style.height=0}))},getCodesHeight:function(){var t=document.getElementsByClassName("code-content-height");this.codeParent=document.getElementsByClassName("code-content");for(var e=t.length,n=0;n<e;n++)this.codeHeightArr.push(t[n].getBoundingClientRect().height),this.isShow.push(!1)}},mounted:function(){var t=this;this.$nextTick((function(){t.getCodesHeight()}))}}},501:function(t,e){var n=document.createElement("script");n.src="//at.alicdn.com/t/font_1967024_93oeubwae7q.js",document.body.appendChild(n)},532:function(t,e,n){},588:function(t,e,n){"use strict";var s=n(532);n.n(s).a},613:function(t,e,n){"use strict";n.r(e);n(44),n(67),n(497),n(501);var s=n(496),i={name:"gulu-input",components:{GIcon:s.a},props:{value:{type:String},disabled:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},error:{type:String}}},a=(n(588),n(26)),r=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",class:{error:t.error}},[n("input",{attrs:{disabled:t.disabled,readOnly:t.readOnly,error:t.error,type:"text"},domProps:{value:t.value},on:{change:function(e){return t.$emit("change",e)},input:function(e){return t.$emit("input",e.target.value)}}}),t._v(" "),t.error?[n("g-icon",{attrs:{name:"test"}}),t._v(" "),n("span",{domProps:{textContent:t._s(t.error)}})]:t._e()],2)}),[],!1,null,"d509ba16",null).exports,o=n(500),c={components:{GInput:r,GIcon:s.a},mixins:[o.a],data:function(){return{errorMessage:"姓名不得少于2个字",message:"请输入内容",codeStr:'\n        <g-input value="请输入内容"></g-input>\n        <g-input value="请输入内容" disabled></g-input>\n        <g-input value="请输入内容" readOnly></g-input>\n        <g-input value="请输入内容" :error="errorMessage"></g-input>\n        '.replace(/^ {8}/gm,"").trim(),codeStr2:'\n          data:{\n             message: "请输入内容",\n          }\n\n        <g-input v-model="message"></g-input>\n        <div style="margin-top: 20px">message: {{ message }}</div>\n        '.replace(/^ {8}/gm,"").trim()}}},u=Object(a.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("h2",[t._v("简单用法")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[n("g-input",{attrs:{value:"请输入内容"}}),t._v(" "),n("g-input",{attrs:{value:"请输入内容",disabled:""}}),t._v(" "),n("g-input",{attrs:{value:"请输入内容",readOnly:""}}),t._v(" "),n("g-input",{attrs:{value:"请输入内容",error:t.errorMessage}})],1),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"html"},[t._v(t._s(t.codeStr))])])])]),t._v(" "),n("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(0)}}},[n("g-icon",{staticClass:"icon-xia",attrs:{name:!1===t.isShow[0]?"xia":"shang"}}),t._v(" "),n("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[0]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),n("h2",[t._v("双向绑定")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[n("g-input",{model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),n("div",{staticStyle:{"margin-top":"20px"}},[t._v("message: "+t._s(t.message))])],1),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"html"},[t._v(t._s(t.codeStr2))])])])]),t._v(" "),n("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(1)}}},[n("g-icon",{staticClass:"icon-xia",attrs:{name:!1===t.isShow[1]?"xia":"shang"}}),t._v(" "),n("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[1]?"显示代码":"隐藏代码"))])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])}],!1,null,null,null);e.default=u.exports}}]);