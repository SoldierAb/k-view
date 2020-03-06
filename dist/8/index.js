(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./docs/zh-CN/table.md?vue&type=template&id=8134f14c&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content" },
    [
      _c("h1", [_vm._v("Table 表格")]),
      _c("p", [
        _vm._v(
          "基于Element 的 Table 进行二次封装，用于展示多条结构类似的数据，可根据配置文件作自定义展示。"
        )
      ]),
      _c("h2", [_vm._v("代码演示")]),
      _c("h3", [_vm._v("基础用法")]),
      _c(
        "demo-box",
        [
          _c("template", { slot: "instance" }, [_c("kview-demo-0")], 1),
          _c("template", { slot: "code-box" }, [
            _c("pre", { staticClass: "hljs" }, [
              _c("code", { staticClass: "pre-code html" }, [
                _vm._v(
                  '<template>\n    <k-table :height="contentHeight" :header-data="headerData" :table-data="tableData" @act="clickAct" @sort-change="sortChange"\n    @selection-change="selectChange" />\n</template>\n\n<script>\n    const getPermissionByKey = key => {\n        return {\n            PERMISSION_VOICE_LIB_DETAIL: {\n                label: \'查看\',\n                has: true\n            },\n            PERMISSION_VOICE_LIB_DEL: {\n                label: \'删除\',\n                has: false\n            },\n            PERMISSION_VOICE_LIB_DL_VP:{\n                label:\'下载\',\n                has:true\n            },\n            PERMISSION_VOICE_LIB_DEL_VP:{\n                label:\'删除声纹\',\n                has:true\n            }\n        } [key]\n    }\n    export default {\n        data() {\n            return {\n                contentHeight: 300,\n                headerData: [{\n                        type: "selection",\n                        width: 55,\n                        fixed: "left",\n                        showRules: () => {\n                            const {\n                                has: PERMISSION_VOICE_LIB_DL_VP\n                            } = getPermissionByKey("PERMISSION_VOICE_LIB_DL_VP"), {\n                                has: PERMISSION_VOICE_LIB_DEL_VP\n                            } = getPermissionByKey("PERMISSION_VOICE_LIB_DEL_VP");\n                            return PERMISSION_VOICE_LIB_DL_VP || PERMISSION_VOICE_LIB_DEL_VP;\n                        },\n                    },\n                    {\n                        label: "编号",\n                        prop: "id",\n                    },\n                    {\n                        label: "声纹库名",\n                        prop: "name",\n                    },\n                    {\n                        label: "声纹总量/条",\n                        prop: "count",\n                    },\n                    {\n                        label: "建库时间",\n                        prop: "created_at",\n                        sortable:true,\n                        formatType: "time", //全局注册的Vue.filter\n                    },\n                    {\n                        label: "操作",\n                        fixed: "right",\n                        width: 240,\n                        comps: [{\n                                label: "查看详情",\n                                comp: "ElButton", //全局注册的组件\n                                event: "detail",\n                                props: {\n                                    style: "margin-right:10px;",\n                                    size: "mini",\n                                },\n                                //  showRules: () => {\n                                //   const { has } = getPermissionByKey("PERMISSION_VOICE_LIB_DETAIL");\n                                //   return has;\n                                // },\n                                disableRules: () => {\n                                    const {\n                                        has\n                                    } = getPermissionByKey("PERMISSION_VOICE_LIB_DETAIL");\n                                    return !has;\n                                },\n                            },\n                            {\n                                label: "删除",\n                                comp: "ElButton",\n                                event: "delete",\n                                props: {\n                                    type: "danger",\n                                    style: "margin-right:10px;",\n                                    size: "mini",\n                                },\n                                // showRules: () => {\n                                //   const { has } = getPermissionByKey("PERMISSION_VOICE_LIB_DEL");\n                                //   return has;\n                                // },\n                                disableRules: () => {\n                                    const {\n                                        has\n                                    } = getPermissionByKey("PERMISSION_VOICE_LIB_DEL");\n                                    return !has;\n                                },\n                            },\n                        ],\n                    },\n                ],\n                tableData: [{\n                    "id": 36,\n                    "branch_id": 28,\n                    "name": "速度发送方发送刚刚",\n                    "is_deleted": 0,\n                    "count": 0,\n                    "voice_group_id": "6ec878df4f2311ea8cb20233488cb340",\n                    "created_at": 1581682418,\n                    "updated_at": 1582882719\n                }, {\n                    "id": 35,\n                    "branch_id": 20,\n                    "name": "测试库",\n                    "is_deleted": 0,\n                    "count": 0,\n                    "voice_group_id": "9f1533814eff11ea8bf10233484e9886",\n                    "created_at": 1581667038,\n                    "updated_at": 1581667038\n                }, {\n                    "id": 32,\n                    "branch_id": 10,\n                    "name": "测试",\n                    "is_deleted": 0,\n                    "count": 0,\n                    "voice_group_id": "db49acac4ef611ea8bf10233484e9886",\n                    "created_at": 1581663273,\n                    "updated_at": 1581663273\n                }],\n            }\n        },\n        methods: {\n            clickAct(event, rowIndex, tableData, ) {\n                console.log(event, rowIndex, tableData);\n            },\n            selectChange(multipleData){\n                console.log(multipleData);\n            },\n            sortChange(column, prop, order) {\n                const propSort = Object.prototype.toString.call(order).includes("String");\n                const order_by = propSort ? prop : "";\n                const desc = propSort ? {\n                        descending: true,\n                        ascending: false,\n                    } [order] :\n                    "";\n                this.requestParam = {\n                    ...this.requestParam,\n                    order_by,\n                    desc,\n                };\n            },\n\n        }\n    }\n</script>\n'
                )
              ])
            ])
          ])
        ],
        2
      ),
      _c("h2", [_vm._v("Props")]),
      _vm._m(0),
      _c("h2", [_vm._v("HeaderData")]),
      _vm._m(1),
      _c("h2", [_vm._v("HeaderData-Comps")]),
      _vm._m(2),
      _c("h2", [_vm._v("Events")]),
      _vm._m(3)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "markdown-table" }, [
      _c("table", [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("参数")]),
            _c("th", [_vm._v("说明")]),
            _c("th", [_vm._v("类型")]),
            _c("th", [_vm._v("默认值")]),
            _c("th", [_vm._v("是否必须")])
          ])
        ]),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v("tableData")]),
            _c("td", [_vm._v("数据")]),
            _c("td", [_vm._v("Array")]),
            _c("td", [_vm._v("[]")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("height")]),
            _c("td", [_vm._v("表格高度")]),
            _c("td", [_vm._v("Number")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("是")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("headerData")]),
            _c("td", [_vm._v("表头配置(详见下方HeaderData)")]),
            _c("td", [_vm._v("Array")]),
            _c("td", [_vm._v("[]")]),
            _c("td", [_vm._v("是")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "markdown-table" }, [
      _c("table", [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("参数")]),
            _c("th", [_vm._v("说明")]),
            _c("th", [_vm._v("类型")]),
            _c("th", [_vm._v("默认值")]),
            _c("th", [_vm._v("是否必须")])
          ])
        ]),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v("label")]),
            _c("td", [_vm._v("表头文本")]),
            _c("td", [_vm._v("String")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("是")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("prop")]),
            _c("td", [_vm._v("数据项展示key")]),
            _c("td", [_vm._v("String")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("是")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("width")]),
            _c("td", [_vm._v("列宽")]),
            _c("td", [_vm._v("Number")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("formatType")]),
            _c("td", [_vm._v("格式化类型")]),
            _c("td", [_vm._v("String")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("fixed")]),
            _c("td", [_vm._v("定位")]),
            _c("td", [_vm._v("String")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("showRules")]),
            _c("td", [_vm._v("展示规则")]),
            _c("td", [_vm._v("Function类型，返回值为Boolean")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("disableRules")]),
            _c("td", [_vm._v("禁用规则")]),
            _c("td", [_vm._v("Function类型，返回值为Boolean")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("type")]),
            _c("td", [_vm._v("表头类型")]),
            _c("td", [_vm._v("String")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("sortable")]),
            _c("td", [_vm._v("是否可排序")]),
            _c("td", [_vm._v("Boolean")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("comps")]),
            _c("td", [_vm._v("操作项配置（详见下方HeaderData-Comps）")]),
            _c("td", [_vm._v("Array")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "markdown-table" }, [
      _c("table", [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("参数")]),
            _c("th", [_vm._v("说明")]),
            _c("th", [_vm._v("类型")]),
            _c("th", [_vm._v("默认值")]),
            _c("th", [_vm._v("是否必须")])
          ])
        ]),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v("label")]),
            _c("td", [_vm._v("填充文本")]),
            _c("td", [_vm._v("String")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("是")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("comp")]),
            _c("td", [_vm._v("全局绑定的组件key")]),
            _c("td", [_vm._v("String")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("是")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("event")]),
            _c("td", [_vm._v("触发的事件key")]),
            _c("td", [_vm._v("String")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("是")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("props")]),
            _c("td", [_vm._v("当前操作comp接收的额外属性")]),
            _c("td", [_vm._v("Object")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("showRules")]),
            _c("td", [_vm._v("展示规则")]),
            _c("td", [_vm._v("Function类型，返回值为Boolean")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("disableRules")]),
            _c("td", [_vm._v("禁用规则")]),
            _c("td", [_vm._v("Function类型，返回值为Boolean")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "markdown-table" }, [
      _c("table", [
        _c("thead", [
          _c("tr", [
            _c("th", [_vm._v("方法名")]),
            _c("th", [_vm._v("说明")]),
            _c("th", [_vm._v("参数")])
          ])
        ]),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v("row-click")]),
            _c("td", [_vm._v("行点击事件")]),
            _c("td", [_vm._v("传递row, col, event")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("cell-click")]),
            _c("td", [_vm._v("行点击事件")]),
            _c("td", [_vm._v("传递cell, row, col, event")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("selection-change")]),
            _c("td", [
              _vm._v("headerData含多选操作配置，表格项被点选的时触发")
            ]),
            _c("td", [
              _vm._v("传递 "),
              _c("code", [_vm._v("tableData")]),
              _vm._v(" 属性的数组中所选中的对象")
            ])
          ]),
          _c("tr", [
            _c("td", [_vm._v("sort-change")]),
            _c("td", [
              _vm._v("headerData含排序配置（sortable），排序按钮点击时出发")
            ]),
            _c("td", [_vm._v("传递 column, prop, order")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./docs/zh-CN/table.md?vue&type=template&id=8134f14c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(109);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./docs/zh-CN/table.md?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var tablevue_type_script_lang_js_ = ({
  name: 'component-kview',
  components: {
    "kview-demo-0": function () {
      var render = function render() {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c("div", [_c("k-table", {
          attrs: {
            height: _vm.contentHeight,
            "header-data": _vm.headerData,
            "table-data": _vm.tableData
          },
          on: {
            act: _vm.clickAct,
            "sort-change": _vm.sortChange,
            "selection-change": _vm.selectChange
          }
        })], 1);
      };

      var staticRenderFns = [];
      render._withStripped = true;

      var getPermissionByKey = function getPermissionByKey(key) {
        return {
          PERMISSION_VOICE_LIB_DETAIL: {
            label: '查看',
            has: true
          },
          PERMISSION_VOICE_LIB_DEL: {
            label: '删除',
            has: false
          },
          PERMISSION_VOICE_LIB_DL_VP: {
            label: '下载',
            has: true
          },
          PERMISSION_VOICE_LIB_DEL_VP: {
            label: '删除声纹',
            has: true
          }
        }[key];
      };

      var kviewDemoComp = {
        data: function data() {
          return {
            contentHeight: 300,
            headerData: [{
              type: "selection",
              width: 55,
              fixed: "left",
              showRules: function showRules() {
                var _getPermissionByKey = getPermissionByKey("PERMISSION_VOICE_LIB_DL_VP"),
                    PERMISSION_VOICE_LIB_DL_VP = _getPermissionByKey.has,
                    _getPermissionByKey2 = getPermissionByKey("PERMISSION_VOICE_LIB_DEL_VP"),
                    PERMISSION_VOICE_LIB_DEL_VP = _getPermissionByKey2.has;

                return PERMISSION_VOICE_LIB_DL_VP || PERMISSION_VOICE_LIB_DEL_VP;
              }
            }, {
              label: "编号",
              prop: "id"
            }, {
              label: "声纹库名",
              prop: "name"
            }, {
              label: "声纹总量/条",
              prop: "count"
            }, {
              label: "建库时间",
              prop: "created_at",
              sortable: true,
              formatType: "time" //全局注册的Vue.filter

            }, {
              label: "操作",
              fixed: "right",
              width: 240,
              comps: [{
                label: "查看详情",
                comp: "ElButton",
                //全局注册的组件
                event: "detail",
                props: {
                  style: "margin-right:10px;",
                  size: "mini"
                },
                //  showRules: () => {
                //   const { has } = getPermissionByKey("PERMISSION_VOICE_LIB_DETAIL");
                //   return has;
                // },
                disableRules: function disableRules() {
                  var _getPermissionByKey3 = getPermissionByKey("PERMISSION_VOICE_LIB_DETAIL"),
                      has = _getPermissionByKey3.has;

                  return !has;
                }
              }, {
                label: "删除",
                comp: "ElButton",
                event: "delete",
                props: {
                  type: "danger",
                  style: "margin-right:10px;",
                  size: "mini"
                },
                // showRules: () => {
                //   const { has } = getPermissionByKey("PERMISSION_VOICE_LIB_DEL");
                //   return has;
                // },
                disableRules: function disableRules() {
                  var _getPermissionByKey4 = getPermissionByKey("PERMISSION_VOICE_LIB_DEL"),
                      has = _getPermissionByKey4.has;

                  return !has;
                }
              }]
            }],
            tableData: [{
              "id": 36,
              "branch_id": 28,
              "name": "速度发送方发送刚刚",
              "is_deleted": 0,
              "count": 0,
              "voice_group_id": "6ec878df4f2311ea8cb20233488cb340",
              "created_at": 1581682418,
              "updated_at": 1582882719
            }, {
              "id": 35,
              "branch_id": 20,
              "name": "测试库",
              "is_deleted": 0,
              "count": 0,
              "voice_group_id": "9f1533814eff11ea8bf10233484e9886",
              "created_at": 1581667038,
              "updated_at": 1581667038
            }, {
              "id": 32,
              "branch_id": 10,
              "name": "测试",
              "is_deleted": 0,
              "count": 0,
              "voice_group_id": "db49acac4ef611ea8bf10233484e9886",
              "created_at": 1581663273,
              "updated_at": 1581663273
            }]
          };
        },
        methods: {
          clickAct: function clickAct(event, rowIndex, tableData) {
            console.log(event, rowIndex, tableData);
          },
          selectChange: function selectChange(multipleData) {
            console.log(multipleData);
          },
          sortChange: function sortChange(column, prop, order) {
            var propSort = Object.prototype.toString.call(order).includes("String");
            var order_by = propSort ? prop : "";
            var desc = propSort ? {
              descending: true,
              ascending: false
            }[order] : "";
            this.requestParam = Object.assign({}, this.requestParam, {
              order_by: order_by,
              desc: desc
            });
          }
        }
      };
      return Object.assign({
        render: render,
        staticRenderFns: staticRenderFns
      }, kviewDemoComp);
    }()
  }
});
// CONCATENATED MODULE: ./docs/zh-CN/table.md?vue&type=script&lang=js&
 /* harmony default export */ var zh_CN_tablevue_type_script_lang_js_ = (tablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./docs/zh-CN/table.md





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  zh_CN_tablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "docs/zh-CN/table.md"
/* harmony default export */ var table = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);