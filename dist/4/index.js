(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./docs/zh-CN/loading.md?vue&type=template&id=1e533328&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content" },
    [
      _c("h1", [_vm._v("Loading 加载动画")]),
      _c("h3", [_vm._v("使用")]),
      _c(
        "demo-box",
        [
          _c("template", { slot: "instance" }, [_c("kview-demo-0")], 1),
          _c("template", { slot: "code-box" }, [
            _c("pre", { staticClass: "hljs" }, [
              _c("code", { staticClass: "pre-code html" }, [
                _vm._v(
                  '<template>\n    <a class="k-button" style="color:red" @click="toggleLoading">点击显示/隐藏加载动画' +
                    _vm._s(_vm.loading) +
                    "</a>\n</template>\n\n<style>\n    .k-button{\n        color:#3a8ee6;\n        position:fixed;\n        top:0;\n        right:100px;\n        bottom:0;\n        margin:auto;\n        z-index:99999;\n        border:1px solid #3a8ee6;\n        width:300px;\n        height:30px;\n        display:flex;\n        justify-content:center;\n        align-items:center;\n        background:yellow;\n    }\n    .k-button:hover{\n        cursor:pointer;\n    }\n\n</style>\n\n<script>\n    export default {\n        data() {\n            return {\n                loading: false,\n            }\n        },\n        methods: {\n            toggleLoading() {\n                this.loading = !this.loading;\n                console.log('loading', this.loading);\n                this.$loading[this.loading ? 'show' : 'hide'](() => {\n                    console.log('call-back');\n                    setTimeout(()=>{\n                        this.loading=false;\n                        this.$loading.hide();\n                    },3000)\n                })\n            },\n        },\n    };\n\n</script>\n"
                )
              ])
            ])
          ])
        ],
        2
      ),
      _c("h3", [_vm._v("Attributes")]),
      _vm._m(0),
      _c("h3", [_vm._v("Events")]),
      _vm._m(1)
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
            _c("td", [_vm._v("callback")]),
            _c("td", [_vm._v("回调函数")]),
            _c("td", [_vm._v("Function")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("background")]),
            _c("td", [_vm._v("背景色")]),
            _c("td", [_vm._v("String")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("rgba(0, 0, 0, .6)")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("color")]),
            _c("td", [_vm._v("加载图标颜色")]),
            _c("td", [_vm._v("String")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("#4b9cdb")]),
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
          _c("tr", [_c("th", [_vm._v("方法名")]), _c("th", [_vm._v("说明")])])
        ]),
        _c("tbody", [
          _c("tr", [
            _c("td", [_vm._v("show")]),
            _c("td", [_vm._v("显示提示")])
          ]),
          _c("tr", [_c("td", [_vm._v("hide")]), _c("td", [_vm._v("隐藏提示")])])
        ])
      ])
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./docs/zh-CN/loading.md?vue&type=template&id=1e533328&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(109);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./docs/zh-CN/loading.md?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var loadingvue_type_script_lang_js_ = ({
  name: 'component-kview',
  components: {
    "kview-demo-0": function () {
      var render = function render() {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c("div", [_c("a", {
          staticClass: "k-button",
          staticStyle: {
            color: "red"
          },
          on: {
            click: _vm.toggleLoading
          }
        }, [_vm._v("点击显示/隐藏加载动画" + _vm._s(_vm.loading))])]);
      };

      var staticRenderFns = [];
      render._withStripped = true;
      var kviewDemoComp = {
        data: function data() {
          return {
            loading: false
          };
        },
        methods: {
          toggleLoading: function toggleLoading() {
            var _this = this;

            this.loading = !this.loading;
            console.log('loading', this.loading);
            this.$loading[this.loading ? 'show' : 'hide'](function () {
              console.log('call-back');
              setTimeout(function () {
                _this.loading = false;

                _this.$loading.hide();
              }, 3000);
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
// CONCATENATED MODULE: ./docs/zh-CN/loading.md?vue&type=script&lang=js&
 /* harmony default export */ var zh_CN_loadingvue_type_script_lang_js_ = (loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./docs/zh-CN/loading.md?vue&type=style&index=0&lang=css&
var loadingvue_type_style_index_0_lang_css_ = __webpack_require__(217);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./docs/zh-CN/loading.md






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  zh_CN_loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "docs/zh-CN/loading.md"
/* harmony default export */ var loading = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(218);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_ref_4_0_build_md_loader_index_js_loading_md_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(214);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_ref_4_0_build_md_loader_index_js_loading_md_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_ref_4_0_build_md_loader_index_js_loading_md_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_ref_4_0_build_md_loader_index_js_loading_md_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "\n.k-button{\n    color:#3a8ee6;\n    position:fixed;\n    top:0;\n    right:100px;\n    bottom:0;\n    margin:auto;\n    z-index:99999;\n    border:1px solid #3a8ee6;\n    width:300px;\n    height:30px;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    background:yellow;\n}\n.k-button:hover{\n    cursor:pointer;\n}\n  ", ""]);



/***/ })

}]);