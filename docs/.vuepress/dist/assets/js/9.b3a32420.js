(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{487:function(t,e,n){},488:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},489:function(t,e,n){var o=n(24),i="["+n(488)+"]",s=RegExp("^"+i+i+"*"),r=RegExp(i+i+"*$"),c=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},490:function(t,e,n){"use strict";var o={props:["name"],name:"gulu-gicon"},i=(n(493),n(41)),s=Object(i.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-"+this.name}})])])}),[],!1,null,"278af004",null);e.a=s.exports},491:function(t,e,n){"use strict";var o=n(1),i=n(489).trim;o({target:"String",proto:!0,forced:n(492)("trim")},{trim:function(){return i(this)}})},492:function(t,e,n){var o=n(2),i=n(488);t.exports=function(t){return o((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},493:function(t,e,n){"use strict";var o=n(487);n.n(o).a},494:function(t,e,n){"use strict";e.a={data:function(){return{codeParent:[],codeHeightArr:[],isShow:[]}},methods:{showCode:function(t){var e=this;this.$set(this.isShow,t,!this.isShow[t]),this.$nextTick((function(){!0===e.isShow[t]?e.codeParent[t].style.height=+e.codeHeightArr[t]+25+"px":e.codeParent[t].style.height=0}))},getCodesHeight:function(){var t=document.getElementsByClassName("code-content-height");this.codeParent=document.getElementsByClassName("code-content");for(var e=t.length,n=0;n<e;n++)this.codeHeightArr.push(t[n].getBoundingClientRect().height),this.isShow.push(!1)}},mounted:function(){var t=this;this.$nextTick((function(){t.getCodesHeight()}))}}},495:function(t,e){var n=document.createElement("script");n.src="//at.alicdn.com/t/font_1967024_93oeubwae7q.js",document.body.appendChild(n)},496:function(t,e,n){},499:function(t,e,n){"use strict";var o=n(496);n.n(o).a},501:function(t,e,n){"use strict";var o={components:{GIcon:n(490).a},props:{icon:String,loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(t){return"right"!==t||"left"!==t}}},name:"gulu-gbutton"},i=(n(499),n(41)),s=Object(i.a)(o,(function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("button",{staticClass:"g-button",class:(t={},t["icon-"+e.iconPosition]=!0,t),on:{click:function(t){return e.$emit("click")}}},[e.loading?o("g-icon",{staticClass:"icon loading",attrs:{name:"jiazai"}}):e._e(),e._v(" "),e.icon&&!e.loading?o("g-icon",{staticClass:"icon",attrs:{name:e.icon}}):e._e(),e._v(" "),o("div",{staticClass:"content"},[e._t("default")],2)],1)}),[],!1,null,"23516550",null);e.a=s.exports},536:function(t,e,n){},593:function(t,e,n){"use strict";var o=n(536);n.n(o).a},613:function(t,e,n){"use strict";n.r(e);n(42),n(65),n(491),n(495);var o=n(501),i=(n(161),{name:"GuluPopover",props:{position:{type:String,default:"top",validator:function(t){return["top","bottom","left","right"].indexOf(t)>=0}},trigger:{type:String,default:"click",validator:function(t){return["click","hover"].indexOf(t)>=0}}},mounted:function(){"click"===this.trigger?this.$refs.popover.addEventListener("click",this.onClick):(this.$refs.popover.addEventListener("mouseenter",this.open),this.$refs.popover.addEventListener("mouseleave",this.close))},destroyed:function(){"click"===this.trigger?this.$refs.popover.removeEventListener("click",this.onClick):(this.$refs.popover.removeEventListener("mouseenter",this.open),this.$refs.popover.removeEventListener("mouseleave",this.close))},data:function(){return{visiable:!1}},methods:{positionContent:function(){var t=this.$refs.contentwrapper;document.body.appendChild(t);var e=this.$refs.button.getBoundingClientRect(),n=e.left,o=e.top,i=e.height,s=e.width,r={top:{top:o+window.scrollY,left:n+window.scrollX},bottom:{top:o+i+window.scrollY,left:n+window.scrollX},left:{top:o+window.scrollY,left:n+window.scrollX},right:{top:o+window.scrollY,left:n+s+window.scrollX}};t.style.left=r[this.position].left+"px",t.style.top=r[this.position].top+"px"},eventHandle:function(t){this.$refs.contentwrapper.contains(t.target)||this.close()},addListenr:function(){var t=this;setTimeout((function(){document.addEventListener("click",t.eventHandle)}),10)},close:function(){this.visiable=!1,document.removeEventListener("click",this.eventHandle)},open:function(){var t=this;this.visiable=!0,this.$nextTick((function(){t.positionContent(),t.addListenr()}))},onClick:function(t){this.$refs.button.contains(t.target)&&(!0===this.visiable?this.close():this.open())}}}),s=(n(593),n(41)),r=Object(s.a)(i,(function(){var t,e=this.$createElement,n=this._self._c||e;return n("div",{ref:"popover",staticClass:"popover"},[n("div",{directives:[{name:"show",rawName:"v-show",value:this.visiable,expression:"visiable"}],ref:"contentwrapper",staticClass:"contentwrapper",class:(t={},t["position-"+this.position]=!0,t)},[this._t("content")],2),this._v(" "),n("span",{ref:"button",staticStyle:{display:"inline-block"}},[this._t("default")],2)])}),[],!1,null,"fdffa9f4",null).exports,c=n(490),a=n(494),l={components:{GButton:o.a,GPopover:r,GIcon:c.a},mixins:[a.a],data:function(){return{codeStr:'\n          <g-popover>\n          <g-button>上方弹出</g-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </g-popover>\n        <g-popover position="bottom">\n          <g-button>下方弹出</g-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </g-popover>\n        <g-popover position="left">\n          <g-button>左边弹出</g-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </g-popover>\n        <g-popover position="right">\n          <g-button>右边弹出</g-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </g-popover>\n      '.replace(/^ {8}/gm,"").trim(),codeStr2:'\n           <g-popover trigger="hover">\n          <g-button>上方弹出</g-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </g-popover>\n        <g-popover position="bottom" trigger="hover">\n          <g-button>下方弹出</g-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </g-popover>\n        <g-popover position="left" trigger="hover">\n          <g-button>左边弹出</g-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </g-popover>\n        <g-popover position="right" trigger="hover">\n          <g-button>右边弹出</g-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </g-popover>\n      '.replace(/^ {8}/gm,"").trim()}}},p=Object(s.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("h2",[t._v("支持 HTML")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[n("g-popover",{attrs:{trigger:"click",position:"top"}},[n("g-button",[t._v("上方弹出")]),t._v(" "),n("template",{slot:"content"},[t._v("\n          弹出内容\n        ")])],2),t._v(" "),n("g-popover",{attrs:{position:"bottom",trigger:"click"}},[n("g-button",[t._v("下方弹出")]),t._v(" "),n("template",{slot:"content"},[t._v("\n          弹出内容\n        ")])],2),t._v(" "),n("g-popover",{attrs:{position:"left",trigger:"click"}},[n("g-button",[t._v("左边弹出")]),t._v(" "),n("template",{slot:"content"},[t._v("\n          弹出内容\n        ")])],2),t._v(" "),n("g-popover",{attrs:{position:"right",trigger:"click"}},[n("g-button",[t._v("右边弹出")]),t._v(" "),n("template",{slot:"content"},[t._v("\n          弹出内容\n        ")])],2)],1),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"html"},[t._v(t._s(t.codeStr))])])])]),t._v(" "),n("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(0)}}},[n("g-icon",{staticClass:"icon-xia",attrs:{name:!1===t.isShow[0]?"xia":"shang"}}),t._v(" "),n("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[0]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),n("h2",[t._v("将触发方式改为 hover")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[n("g-popover",{attrs:{trigger:"hover"}},[n("g-button",[t._v("上方弹出")]),t._v(" "),n("template",{slot:"content"},[t._v("\n          弹出内容\n        ")])],2),t._v(" "),n("g-popover",{attrs:{position:"bottom",trigger:"hover"}},[n("g-button",[t._v("下方弹出")]),t._v(" "),n("template",{slot:"content"},[t._v("\n          弹出内容\n        ")])],2),t._v(" "),n("g-popover",{attrs:{position:"left",trigger:"hover"}},[n("g-button",[t._v("左边弹出")]),t._v(" "),n("template",{slot:"content"},[t._v("\n          弹出内容\n        ")])],2),t._v(" "),n("g-popover",{attrs:{position:"right",trigger:"hover"}},[n("g-button",[t._v("右边弹出")]),t._v(" "),n("template",{slot:"content"},[t._v("\n          弹出内容\n        ")])],2)],1),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"html"},[t._v(t._s(t.codeStr2))])])])]),t._v(" "),n("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(1)}}},[n("g-icon",{staticClass:"icon-xia",attrs:{name:!1===t.isShow[1]?"xia":"shang"}}),t._v(" "),n("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[1]?"显示代码":"隐藏代码"))])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])}],!1,null,null,null);e.default=p.exports}}]);