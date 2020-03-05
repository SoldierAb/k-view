(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ 560:
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
                  '<template>\n    <button class="button" @click="toggleLoading">' +
                    _vm._s(_vm.loading) +
                    "</button>\n</template>\n\n<style lang=\"css\">\n    .button{\n        position:fixed;\n        z-index:999999;\n        top:100px;\n        right:100px;\n    }\n</style>\n\n<script>\n    export default {\n        data() {\n            return {\n                loading: false,\n            }\n        },\n        methods: {\n            toggleLoading() {\n                this.loading = !this.loading;\n                console.log('loading', this.loading);\n                this.$loading[this.loading ? 'show' : 'hide'](() => {\n                    console.log('call-back');\n                })\n            },\n        },\n    };\n\n</script>\n"
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", [
      _c("thead", [
        _c("tr", [_c("th", [_vm._v("方法名")]), _c("th", [_vm._v("说明")])])
      ]),
      _c("tbody", [
        _c("tr", [_c("td", [_vm._v("show")]), _c("td", [_vm._v("显示提示")])]),
        _c("tr", [_c("td", [_vm._v("hide")]), _c("td", [_vm._v("隐藏提示")])])
      ])
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./docs/zh-CN/loading.md?vue&type=template&id=1e533328&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./docs/zh-CN/loading.md?vue&type=script&lang=js&
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
/* harmony default export */ var loadingvue_type_script_lang_js_ = ({
  name: 'component-kview',
  components: {
    "kview-demo-0": function () {
      var render = function render() {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c("div", [_c("button", {
          staticClass: "button",
          on: {
            click: _vm.toggleLoading
          }
        }, [_vm._v(_vm._s(_vm.loading))])]);
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
            this.loading = !this.loading;
            console.log('loading', this.loading);
            this.$loading[this.loading ? 'show' : 'hide'](function () {
              console.log('call-back');
            });
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
// CONCATENATED MODULE: ./docs/zh-CN/loading.md?vue&type=script&lang=js&
 /* harmony default export */ var zh_CN_loadingvue_type_script_lang_js_ = (loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

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

/***/ })

}]);