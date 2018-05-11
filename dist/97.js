/*! NutUI v1.2.0 Fri May 11 2018 17:09:50 GMT+0800 (中国标准时间) */
webpackJsonpnutui([97],{1084:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",[d("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"左划展示操作按钮，例如删除、收藏等按钮。",showQrCode:!0}}),t._v(" "),d("h5",[t._v("示例")]),t._v(" "),d("nut-codebox",{attrs:{code:t.demo,imgUrl:"../asset/img/demo/sideslipbutton.jpg"}}),t._v(" "),d("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),d("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"tbl-wrapper"},[d("table",{staticClass:"u-full-width"},[d("thead",[d("tr",[d("th",[t._v("参数")]),t._v(" "),d("th",[t._v("说明")]),t._v(" "),d("th",[t._v("类型")]),t._v(" "),d("th",[t._v("默认值")]),t._v(" "),d("th",[t._v("可选值/备注")])])]),t._v(" "),d("tbody",[d("tr",[d("td",[t._v("during")]),t._v(" "),d("td",[t._v("缓动效果时长")]),t._v(" "),d("td",[t._v("Number")]),t._v(" "),d("td",[t._v("1")]),t._v(" "),d("td",[t._v("单位是s")])]),t._v(" "),d("tr",[d("td",[t._v("isClickRestore")]),t._v(" "),d("td",[t._v("是否在点击的时候恢复原状")]),t._v(" "),d("td",[t._v("Boolean")]),t._v(" "),d("td",[t._v("true")]),t._v(" "),d("td",[t._v("true/false")])])])])])},function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"tbl-wrapper"},[d("table",{staticClass:"u-full-width"},[d("thead",[d("tr",[d("th",[t._v("事件名")]),t._v(" "),d("th",[t._v("说明")]),t._v(" "),d("th",[t._v("回调参数")])])]),t._v(" "),d("tbody",[d("tr",[d("td",[t._v("slide-left")]),t._v(" "),d("td",[t._v("左划时触发事件")]),t._v(" "),d("td",[t._v("--")])]),t._v(" "),d("tr",[d("td",[t._v("slide-right")]),t._v(" "),d("td",[t._v("右划时触发事件")]),t._v(" "),d("td",[t._v("--")])]),t._v(" "),d("tr",[d("td",[t._v("slide-no")]),t._v(" "),d("td",[t._v("点击时触发事件")]),t._v(" "),d("td",[t._v("--")])])])])])}]}},858:function(t,e,d){var v=d(1)(d(952),d(1084),null,null,null);t.exports=v.exports},952:function(t,e,d){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{demo:'<nut-sideslipbutton @slide-left="slideLeft" @slide-right="slideRight" @slide-no="slideNo" :during="0.5">\n    <div slot="slidedom" class="slidedom">\n        <div class="addr">\n            <p class="name-mobile">159****8888</p>\n            <p class="full-addr">北京市大兴区亦庄经济开发中心京东大厦B座</p>\n        </div>\n        <a class="addr-edit" href="javascript:void(0)"></a>\n    </div>\n    <div slot="slideoper" class="slideoper">删除/收藏</div>\n</nut-sideslipbutton>'}},methods:{}}}});