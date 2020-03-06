(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./docs/zh-CN/fade-pop.md?vue&type=template&id=13462042&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content" },
    [
      _c("h1", [_vm._v("弹窗")]),
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
                  '<template>\n    <a class="k-link" @click="showPop = true">点击弹出，点击阴影消失</a>\n   <k-fade-pop v-model="showPop" draggable modalHidden title="标题" :height="200">\n       展示内容\n   </k-fade-pop>\n</template>\n\n<style>\n    .k-link{\n        padding:10px 20px;\n        color:#3a8ee6;\n      \n    }\n    .k-link:hover{\n        cursor:pointer;\n    }\n\n</style>\n\n<script>\n    export default{\n        data(){\n            return {\n                showPop:false,\n            }\n        }\n    }\n</script>\n\n'
                )
              ])
            ])
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./docs/zh-CN/fade-pop.md?vue&type=template&id=13462042&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(109);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./docs/zh-CN/fade-pop.md?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var fade_popvue_type_script_lang_js_ = ({
  name: 'component-kview',
  components: {
    "kview-demo-0": function () {
      var render = function render() {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c("div", [_c("a", {
          staticClass: "k-link",
          on: {
            click: function click($event) {
              _vm.showPop = true;
            }
          }
        }, [_vm._v("点击弹出，点击阴影消失")]), _vm._v(" "), _c("k-fade-pop", {
          attrs: {
            draggable: "",
            modalHidden: "",
            title: "标题",
            height: 200
          },
          model: {
            value: _vm.showPop,
            callback: function callback($$v) {
              _vm.showPop = $$v;
            },
            expression: "showPop"
          }
        }, [_vm._v("\n       展示内容\n   ")])], 1);
      };

      var staticRenderFns = [];
      render._withStripped = true;
      var kviewDemoComp = {
        data: function data() {
          return {
            showPop: false
          };
        }
      };
      return Object.assign({
        render: render,
        staticRenderFns: staticRenderFns
      }, kviewDemoComp);
    }()
  }
});
// CONCATENATED MODULE: ./docs/zh-CN/fade-pop.md?vue&type=script&lang=js&
 /* harmony default export */ var zh_CN_fade_popvue_type_script_lang_js_ = (fade_popvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./docs/zh-CN/fade-pop.md?vue&type=style&index=0&lang=css&
var fade_popvue_type_style_index_0_lang_css_ = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./docs/zh-CN/fade-pop.md






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  zh_CN_fade_popvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "docs/zh-CN/fade-pop.md"
/* harmony default export */ var fade_pop = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(216);

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

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_ref_4_0_build_md_loader_index_js_fade_pop_md_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(213);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_ref_4_0_build_md_loader_index_js_fade_pop_md_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_ref_4_0_build_md_loader_index_js_fade_pop_md_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_ref_4_0_build_md_loader_index_js_fade_pop_md_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "\n.k-link{\n    padding:10px 20px;\n    color:#3a8ee6;\n}\n.k-link:hover{\n    cursor:pointer;\n}\n  ", ""]);



/***/ })

}]);