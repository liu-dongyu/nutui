/*! NutUI v1.2.0 Fri May 11 2018 17:09:50 GMT+0800 (中国标准时间) */
webpackJsonpnutui([65],{1075:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nut-demoheader",{attrs:{name:e.$route.name}}),e._v(" "),n("h5",[e._v("示例")]),e._v(" "),n("p",[e._v("默认的")]),e._v(" "),n("nut-signature",{on:{confirm:e.confirm}}),e._v(" "),n("div",{ref:"demo1",staticClass:"demo-show demo1"},[e._v("!!!确认之后显示base64图片")]),e._v(" "),n("p",[e._v("修改签字颜色和画笔粗细")]),e._v(" "),n("nut-signature",{attrs:{lineWidth:e.lineWidth,strokeStyle:e.strokeStyle},on:{confirm:e.confirm1}}),e._v(" "),n("div",{ref:"demo2",staticClass:"demo-show demo2"},[e._v("!!!确认之后显示base64图片")])],1)},staticRenderFns:[]}},1169:function(e,t,n){var o=n(977);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(3)("af417db2",o,!0)},814:function(e,t,n){function o(e){n(1169)}var r=n(1)(n(905),n(1075),o,null,null);e.exports=r.exports},905:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{lineWidth:5,strokeStyle:"pink"}},computed:{},methods:{confirm:function(e,t){console.log(t);var n=document.createElement("img");n.src=t,document.querySelector(".demo1").appendChild(n)},confirm1:function(e,t){var n=document.createElement("img");n.src=t,document.querySelector(".demo2").appendChild(n)}}}},977:function(e,t,n){t=e.exports=n(2)(),t.push([e.i,".nut-signature .nut-signature-inner{height:3rem;margin-bottom:.1rem;border:1px solid #eee;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.nut-signature .nut-signature-unsopport{font-size:.24rem}.nut-signature button{color:#fff;background-color:#33c3f0;border-color:#33c3f0;border:none;outline:0;padding:.1rem;border-radius:.05rem}.demo-show{padding-top:.22rem;color:#33c3f0}",""])}});