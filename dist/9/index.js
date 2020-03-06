(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./docs/zh-CN/tip.md?vue&type=template&id=81357fa6&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content" },
    [
      _c("h1", [_vm._v("Tip")]),
      _c("p", [_vm._v("文本溢出气泡展示")]),
      _c("h2", [_vm._v("代码演示")]),
      _c(
        "demo-box",
        [
          _c("template", { slot: "instance" }, [_c("kview-demo-0")], 1),
          _c("template", { slot: "code-box" }, [
            _c("pre", { staticClass: "hljs" }, [
              _c("code", { staticClass: "pre-code html" }, [
                _vm._v(
                  '<template>\n    <k-tip position="right" :content="contentString" :text="contentString"></k-tip>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                contentString: "今天天气真不错，适合去打球，但是没人一起，就算了吧",\n            }\n        },\n    };\n</script>\n'
                )
              ])
            ])
          ])
        ],
        2
      ),
      _c("h2", [_vm._v("Props")]),
      _vm._m(0)
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
            _c("td", [_vm._v("popperClass")]),
            _c("td", [_vm._v("附加样式")]),
            _c("td", [_vm._v("string")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("text")]),
            _c("td", [_vm._v("填充文本")]),
            _c("td", [_vm._v("string")]),
            _c("td", [_vm._v("文本")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("content")]),
            _c("td", [_vm._v("提示内容")]),
            _c("td", [_vm._v("string")]),
            _c("td", [_vm._v("提示内容")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("position")]),
            _c("td", [_vm._v("展示位置")]),
            _c("td", [_vm._v("string")]),
            _c("td", [_vm._v("top")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("textWidth")]),
            _c("td", [_vm._v("文本宽度")]),
            _c("td", [_vm._v("number")]),
            _c("td", [_vm._v("110")]),
            _c("td", [_vm._v("-")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./docs/zh-CN/tip.md?vue&type=template&id=81357fa6&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(109);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./docs/zh-CN/tip.md?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var tipvue_type_script_lang_js_ = ({
  name: 'component-kview',
  components: {
    "kview-demo-0": function () {
      var render = function render() {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c("div", [_c("k-tip", {
          attrs: {
            position: "right",
            content: _vm.contentString,
            text: _vm.contentString
          }
        })], 1);
      };

      var staticRenderFns = [];
      render._withStripped = true;
      var kviewDemoComp = {
        data: function data() {
          return {
            contentString: "今天天气真不错，适合去打球，但是没人一起，就算了吧"
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
// CONCATENATED MODULE: ./docs/zh-CN/tip.md?vue&type=script&lang=js&
 /* harmony default export */ var zh_CN_tipvue_type_script_lang_js_ = (tipvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./docs/zh-CN/tip.md





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  zh_CN_tipvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "docs/zh-CN/tip.md"
/* harmony default export */ var tip = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);