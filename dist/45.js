/*! NutUI v1.2.0 Fri May 11 2018 17:09:50 GMT+0800 (中国标准时间) */
webpackJsonpnutui([45],{1081:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"优惠券，包括京券、东券、运费券、不可用券，支持领取、选中事件。",showQrCode:!0}}),t._v(" "),e("h5",[t._v("示例")]),t._v(" "),e("h6",[t._v("优惠券展示：京券,立即使用")]),t._v(" "),e("nut-codebox",{attrs:{code:t.demo1,imgUrl:["../asset/img/demo/coupon1.png"]}}),t._v(" "),e("nut-codebox",{attrs:{code:t.demo11}}),t._v(" "),e("h6",[t._v("优惠券展示：东券,立即使用")]),t._v(" "),e("nut-codebox",{attrs:{code:t.demo2,imgUrl:["../asset/img/demo/coupon2.png"]}}),t._v(" "),e("nut-codebox",{attrs:{code:t.demo21}}),t._v(" "),e("h6",[t._v("优惠券展示：运费券,立即使用")]),t._v(" "),e("nut-codebox",{attrs:{code:t.demo3,imgUrl:["../asset/img/demo/coupon3.png"]}}),t._v(" "),e("nut-codebox",{attrs:{code:t.demo31}}),t._v(" "),e("h6",[t._v("优惠券展示：不可用券")]),t._v(" "),e("nut-codebox",{attrs:{code:t.demo4,imgUrl:["../asset/img/demo/coupon4.png"]}}),t._v(" "),e("nut-codebox",{attrs:{code:t.demo41}}),t._v(" "),e("h6",[t._v("优惠券展示：切换状态")]),t._v(" "),e("nut-codebox",{attrs:{code:t.demo5,imgUrl:["../asset/img/demo/coupon5.png"]}}),t._v(" "),e("nut-codebox",{attrs:{code:t.demo51}}),t._v(" "),e("h6",[t._v("优惠券展示：有活动角标")]),t._v(" "),e("nut-codebox",{attrs:{code:t.demo6,imgUrl:["../asset/img/demo/coupon6.png"]}}),t._v(" "),e("nut-codebox",{attrs:{code:t.demo61}}),t._v(" "),e("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),e("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tbl-wrapper"},[e("table",{staticClass:"u-full-width"},[e("thead",[e("tr",[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("可选值")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("datas")]),t._v(" "),e("td",[t._v("券数据")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td",[t._v("--")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("datas.id")]),t._v(" "),e("td",[t._v("优惠券Id")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("--")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("datas.discount")]),t._v(" "),e("td",[t._v("折扣金额")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("--")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("datas.quota")]),t._v(" "),e("td",[t._v("满额值")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("--")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("datas.couponType")]),t._v(" "),e("td",[t._v("0京券 1东券 2免运费券")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td",[t._v("--")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("datas.couponLimitInfo")]),t._v(" "),e("td",[t._v("该券不可使用或者可以使用的说明")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("--")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("datas.beginTime")]),t._v(" "),e("td",[t._v("优惠券使用的起始日期")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("--")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("datas.endTime")]),t._v(" "),e("td",[t._v("优惠券使用的截止日期")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td",[t._v("--")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("datas.isUsed")]),t._v(" "),e("td",[t._v("是否可用")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("--")]),t._v(" "),e("td",[t._v("--")])]),t._v(" "),e("tr",[e("td",[t._v("isSwitch")]),t._v(" "),e("td",[t._v("是否切换到选择功能")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("true/false")])]),t._v(" "),e("tr",[e("td",[t._v("isBadge")]),t._v(" "),e("td",[t._v("是否有角标")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("true/false")])])])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tbl-wrapper"},[e("table",{staticClass:"u-full-width"},[e("thead",[e("tr",[e("th",[t._v("事件名")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("回调参数")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("immediate-use")]),t._v(" "),e("td",[t._v("点击立即使用时触发")]),t._v(" "),e("td",[t._v("返回当前优惠券数据")])]),t._v(" "),e("tr",[e("td",[t._v("switch-use")]),t._v(" "),e("td",[t._v("选中或不选中时触发")]),t._v(" "),e("td",[t._v("返回当前优惠券数据和是否选中状态")])])])])])}]}},1175:function(t,n,e){var d=e(983);"string"==typeof d&&(d=[[t.i,d,""]]),d.locals&&(t.exports=d.locals);e(3)("5d54f5a7",d,!0)},834:function(t,n,e){function d(t){e(1175)}var o=e(1)(e(925),e(1081),d,null,null);t.exports=o.exports},925:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var d=e(174),o=function(t){return t&&t.__esModule?t:{default:t}}(d);n.default={data:function(){return{demo1:'<nut-coupon\n  :datas="beanData"\n  @immediate-use="immediateUse">\n</nut-coupon>',demo2:'<nut-coupon\n  :datas="beanData"\n  @immediate-use="immediateUse">\n</nut-coupon>',demo3:'<nut-coupon\n  :datas="beanData"\n  @immediate-use="immediateUse">\n</nut-coupon>',demo4:'<nut-coupon\n  :datas="beanData"\n  @immediate-use="immediateUse">\n</nut-coupon>',demo5:'<nut-coupon\n  :datas="beanData"\n  :is-switch="true"\n  @switch-use="switchUse">\n</nut-coupon>',demo6:'<nut-coupon\n  :datas="beanData"\n  :is-switch="true"\n  @switch-use="switchUse"\n  :is-badge="true">\n</nut-coupon>',demo11:"export default {\n    data(){\n        return{\n            beanData: {\n                'id': 1,\n                'discount': 100,\n                'quota': 400,\n                'couponType': 0,\n                'couponLimitInfo': '限自营好丽友商品',\n                'beginTime': '2015.07.07',\n                'endTime': '2015.07.07',\n                'isUsed': true\n            }\n        }\n    },\n    methods:{\n        immediateUse(datas){\n            console.log('立即使用,数据如下：' + JSON.stringify(datas));\n        }\n    }\n}",demo21:"export default {\n    data(){\n        return{\n            beanData: {\n                  'id': 2,\n                  'discount': 10,\n                  'quota': 60,\n                  'couponType': 1,\n                  'couponLimitInfo': '限自营盼盼品牌部分饼干类商品',\n                  'beginTime': '2015.07.07',\n                  'endTime': '2015.07.07',\n                  'isUsed': true\n              }\n        }\n    },\n    methods:{\n        immediateUse(datas){\n            console.log('立即使用,数据如下：' + JSON.stringify(datas));\n        }\n    }\n}",demo31:"export default {\n    data(){\n        return{\n            beanData: {\n                  'id': 3,\n                  'discount': 10,\n                  'quota': 400,\n                  'couponType': 2,\n                  'couponLimitInfo': '限自营好丽友、盼盼品牌部分饼干类商品',\n                  'beginTime': '2015.07.07',\n                  'endTime': '2015.07.07',\n                  'isUsed': true\n              }\n        }\n    },\n    methods:{\n        immediateUse(datas){\n            console.log('立即使用,数据如下：' + JSON.stringify(datas));\n        }\n    }\n}",demo41:"export default {\n    data(){\n        return{\n            beanData: {\n                  'id': 4,\n                  'discount': 10,\n                  'quota': 400,\n                  'couponType': 1,\n                  'couponLimitInfo': '限自营好丽友、盼盼品牌部分饼干类商品',\n                  'beginTime': '2015.07.07',\n                  'endTime': '2015.07.07',\n                  'isUsed': false\n              }\n        }\n    },\n    methods:{\n        immediateUse(datas){\n            console.log('立即使用,数据如下：' + JSON.stringify(datas));\n        }\n    }\n}",demo51:"export default {\n    data(){\n        return{\n            beanData: {\n                  'id': 3,\n                  'discount': 10,\n                  'quota': 400,\n                  'couponType': 2,\n                  'couponLimitInfo': '限自营好丽友商品',\n                  'beginTime': '2015.07.07',\n                  'endTime': '2015.07.07',\n                  'isUsed': true\n              }\n        }\n    },\n    methods:{\n        switchUse(datas, isChecked) {\n            console.log('是否选中：' + isChecked);\n        }\n    }\n}",demo61:"export default {\n    data(){\n        return{\n            beanData: {\n                  'id': 3,\n                  'discount': 10,\n                  'quota': 400,\n                  'couponType': 2,\n                  'couponLimitInfo': '限自营好丽友商品',\n                  'beginTime': '2015.07.07',\n                  'endTime': '2015.07.07',\n                  'isUsed': true\n              }\n        }\n    },\n    methods:{\n        switchUse(datas, isChecked) {\n            console.log('是否选中：' + isChecked);\n        }\n    }\n}"}},methods:{immediateUse:function(t){console.log("立即使用,数据如下："+(0,o.default)(t))},switchUse:function(t,n){console.log("是否选中："+n)}}}},983:function(t,n,e){n=t.exports=e(2)(),n.push([t.i,"",""])}});