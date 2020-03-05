(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./docs/zh-CN/tree.md?vue&type=template&id=3c1b75e4&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content" },
    [
      _c("h1", [_vm._v("VUE 树形控件")]),
      _c("p", [
        _vm._v(
          "用清晰的层级结构展示信息，可下拉选择、展开或折叠，提供单选多选功能，支持v-model双向数据绑定"
        )
      ]),
      _c("h2", [_vm._v("代码演示")]),
      _c(
        "demo-box",
        [
          _c("template", { slot: "instance" }, [_c("kview-demo-0")], 1),
          _c("template", { slot: "code-box" }, [
            _c("pre", { staticClass: "hljs" }, [
              _c("code", { staticClass: "pre-code html" }, [
                _vm._v(
                  '<template>\n   <k-tree\n      only-leaf\n      show-checkbox\n      type="tree"\n      v-model="selectValue"\n      :label-key="labelKey"\n      :value-key="valueKey"\n      :data-source="list"\n      @on-toggle-expand="toggleExpand"\n      @on-select-change="selectChange"\n      @on-check-change="checkChange"\n    ></k-tree>\n    list: ' +
                    _vm._s(_vm.list) +
                    '\n</template>\n\n<script>\n\nexport default {\n  data() {\n    return {\n        list: [\n        {\n          name: "霍山县",\n          pId: "341500000000000",\n          open: "False",\n          id: "341525000000000",\n          children: [\n            {\n              name: "衡山镇",\n              pId: "341525000000000",\n              open: "False",\n              id: "341525100000000"\n            },\n            {\n              name: "与儿街镇",\n              pId: "341525000000000",\n              open: "False",\n              id: "341525104000000"\n            },\n            {\n              name: "黑石渡镇",\n              pId: "341525000000000",\n              open: "False",\n              id: "341525105000000"\n            },\n            {\n              name: "诸佛庵镇",\n              pId: "341525000000000",\n              open: "False",\n              id: "341525106000000"\n            },\n            {\n              name: "高桥湾现代产业园",\n              pId: "341525000000000",\n              open: "False",\n              id: "341525401000000"\n            }\n          ]\n        }\n      ],\n      showCheckBox: false,\n      type:\'select\',\n      labelKey: "name",\n      valueKey: "id",\n      childrenKey:\'children\',\n      selectValue:\'341525401000000\',       //双向数据绑定当前选中值\n    };\n  },\n  mounted(){\n    setTimeout(()=>{\n      this.selectValue = "341525106000000";\n    },3000)\n  },\n  watch:{\n      selectValue(){\n          console.log(\'selectValue\',this.selectValue);\n      },\n  },\n\n  methods: {\n    toggleExpand(node){\n      console.log(\'toggleExpand\',node);\n    },\n    selectChange(node){\n      console.log(\'selectChange\',node);\n    },\n    checkChange(nodes){\n      console.log(\'checkChange\',nodes);\n    },\n  }\n};\n</script>\n'
                )
              ])
            ])
          ])
        ],
        2
      ),
      _c("h2", [_vm._v("Attributes")]),
      _vm._m(0),
      _c("h2", [_vm._v("Props")]),
      _vm._m(1),
      _c("h2", [_vm._v("Events")]),
      _vm._m(2),
      _c("h3", [_vm._v("methods")]),
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
    return _c("table", [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("属性")]),
          _c("th", [_vm._v("说明")]),
          _c("th", [_vm._v("类型")]),
          _c("th", [_vm._v("可选值")]),
          _c("th", [_vm._v("默认值")]),
          _c("th", [_vm._v("是否必须")])
        ])
      ]),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("dataSource")]),
          _c("td", [_vm._v("数据源")]),
          _c("td", [_vm._v("Array")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("是")])
        ]),
        _c("tr", [
          _c("td", [_vm._v("type")]),
          _c("td", [_vm._v("组件类型")]),
          _c("td", [_vm._v("String")]),
          _c("td", [_vm._v("tree、select")]),
          _c("td", [_vm._v("select")]),
          _c("td", [_vm._v("-")])
        ]),
        _c("tr", [
          _c("td", [_vm._v("labelKey")]),
          _c("td", [_vm._v("数据显示key")]),
          _c("td", [_vm._v("String")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("label")]),
          _c("td", [_vm._v("是")])
        ]),
        _c("tr", [
          _c("td", [_vm._v("valueKey")]),
          _c("td", [_vm._v("取值key (不传默认传递节点完整数据)")]),
          _c("td", [_vm._v("String")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("value")]),
          _c("td", [_vm._v("-")])
        ]),
        _c("tr", [
          _c("td", [_vm._v("childrenKey")]),
          _c("td", [_vm._v("子集key")]),
          _c("td", [_vm._v("String")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("children")]),
          _c("td", [_vm._v("-")])
        ]),
        _c("tr", [
          _c("td", [_vm._v("v-model")]),
          _c("td", [
            _vm._v("双向数据绑定 , "),
            _c("code", [_vm._v("props需传入valueKey，为 “,” 拼接的字符串")])
          ]),
          _c("td", [_vm._v("String")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")])
        ]),
        _c("tr", [
          _c("td", [_vm._v("multiple")]),
          _c("td", [_vm._v("单击多选")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")])
        ]),
        _c("tr", [
          _c("td", [_vm._v("only-leaf")]),
          _c("td", [_vm._v("只取叶子节点数据")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")])
        ]),
        _c("tr", [
          _c("td", [_vm._v("show-checkbox")]),
          _c("td", [
            _vm._v("开启复选框（"),
            _c("code", [
              _vm._v(
                "复选框开启，v-model初始化可只传入需要选中的顶层节点的value"
              )
            ]),
            _vm._v("）")
          ]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")])
        ]),
        _c("tr", [
          _c("td", [_vm._v("props")]),
          _c("td", [_vm._v("dataSource数据配置选项具体看下表")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", [
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
          _c("td", [_vm._v("selected")]),
          _c("td", [_vm._v("节点单选选中")]),
          _c("td", [_vm._v("Boolean")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")])
        ]),
        _c("tr", [
          _c("td", [_vm._v("checked")]),
          _c("td", [_vm._v("节点多选选中")]),
          _c("td", [_vm._v("Boolean")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")])
        ]),
        _c("tr", [
          _c("td", [_vm._v("expand")]),
          _c("td", [_vm._v("节点展开")]),
          _c("td", [_vm._v("Boolean")]),
          _c("td", [_vm._v("-")]),
          _c("td", [_vm._v("-")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("方法名")]),
          _c("th", [_vm._v("说明")]),
          _c("th", [_vm._v("参数")])
        ])
      ]),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("on-toggle-expand")]),
          _c("td", [_vm._v("节点被点击展开收缩的时触发")]),
          _c("td", [
            _vm._v("传递 "),
            _c("code", [_vm._v("dataSource")]),
            _vm._v(" 属性的数组中该节点所对应的对象 （ 对象中"),
            _c("code", [_vm._v("expand")]),
            _vm._v("属性即当前展开状态 ）")
          ])
        ]),
        _c("tr", [
          _c("td", [_vm._v("on-select-change")]),
          _c("td", [_vm._v("Attributes不含show-checkbox，节点被点选的时触发")]),
          _c("td", [
            _vm._v("传递 "),
            _c("code", [_vm._v("dataSource")]),
            _vm._v(" 属性的数组中所选中的对象")
          ])
        ]),
        _c("tr", [
          _c("td", [_vm._v("on-check-change")]),
          _c("td", [
            _vm._v("Attributes含show-checkbox，节点checkbox被点击的时触发")
          ]),
          _c("td", [
            _vm._v("传递 "),
            _c("code", [_vm._v("dataSource")]),
            _vm._v(" 属性的数组中所选中的对象")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", [
      _c("thead", [
        _c("tr", [
          _c("th", [_vm._v("方法名")]),
          _c("th", [_vm._v("说明")]),
          _c("th", [_vm._v("参数")])
        ])
      ]),
      _c("tbody", [
        _c("tr", [
          _c("td", [_vm._v("getSelectedNodes")]),
          _c("td", [_vm._v("获取当前单击选中的所有节点")]),
          _c("td", [_vm._v("-")])
        ]),
        _c("tr", [
          _c("td", [_vm._v("getCheckedNodes")]),
          _c("td", [_vm._v("获取当前多选选中的所有节点")]),
          _c("td", [_vm._v("-")])
        ])
      ])
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./docs/zh-CN/tree.md?vue&type=template&id=3c1b75e4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./docs/zh-CN/tree.md?vue&type=script&lang=js&
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var treevue_type_script_lang_js_ = ({
  name: 'component-kview',
  components: {
    "kview-demo-0": function () {
      var render = function render() {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c("div", [_c("k-tree", {
          attrs: {
            "only-leaf": "",
            "show-checkbox": "",
            type: "tree",
            "label-key": _vm.labelKey,
            "value-key": _vm.valueKey,
            "data-source": _vm.list
          },
          on: {
            "on-toggle-expand": _vm.toggleExpand,
            "on-select-change": _vm.selectChange,
            "on-check-change": _vm.checkChange
          },
          model: {
            value: _vm.selectValue,
            callback: function callback($$v) {
              _vm.selectValue = $$v;
            },
            expression: "selectValue"
          }
        }), _vm._v("\n    list: " + _vm._s(_vm.list))], 1);
      };

      var staticRenderFns = [];
      render._withStripped = true;
      var kviewDemoComp = {
        data: function data() {
          return {
            list: [{
              name: "霍山县",
              pId: "341500000000000",
              open: "False",
              id: "341525000000000",
              children: [{
                name: "衡山镇",
                pId: "341525000000000",
                open: "False",
                id: "341525100000000"
              }, {
                name: "与儿街镇",
                pId: "341525000000000",
                open: "False",
                id: "341525104000000"
              }, {
                name: "黑石渡镇",
                pId: "341525000000000",
                open: "False",
                id: "341525105000000"
              }, {
                name: "诸佛庵镇",
                pId: "341525000000000",
                open: "False",
                id: "341525106000000"
              }, {
                name: "高桥湾现代产业园",
                pId: "341525000000000",
                open: "False",
                id: "341525401000000"
              }]
            }],
            showCheckBox: false,
            type: 'select',
            labelKey: "name",
            valueKey: "id",
            childrenKey: 'children',
            selectValue: '341525401000000' //双向数据绑定当前选中值

          };
        },
        mounted: function mounted() {
          var _this = this;

          setTimeout(function () {
            _this.selectValue = "341525106000000";
          }, 3000);
        },
        watch: {
          selectValue: function selectValue() {
            console.log('selectValue', this.selectValue);
          }
        },
        methods: {
          toggleExpand: function toggleExpand(node) {
            console.log('toggleExpand', node);
          },
          selectChange: function selectChange(node) {
            console.log('selectChange', node);
          },
          checkChange: function checkChange(nodes) {
            console.log('checkChange', nodes);
          }
        }
      };
      return _objectSpread({
        render: render,
        staticRenderFns: staticRenderFns
      }, kviewDemoComp);
    }()
  }
});
// CONCATENATED MODULE: ./docs/zh-CN/tree.md?vue&type=script&lang=js&
 /* harmony default export */ var zh_CN_treevue_type_script_lang_js_ = (treevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// CONCATENATED MODULE: ./docs/zh-CN/tree.md





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  zh_CN_treevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "docs/zh-CN/tree.md"
/* harmony default export */ var tree = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);