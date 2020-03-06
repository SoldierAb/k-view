(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./docs/zh-CN/upload-btn.md?vue&type=template&id=fd66bc1c&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content" },
    [
      _c("h1", [_vm._v("上传按钮")]),
      _c("h3", [_vm._v("使用")]),
      _c(
        "demo-box",
        [
          _c("template", { slot: "instance" }, [_c("kview-demo-0")], 1),
          _c("template", { slot: "code-box" }, [
            _c("pre", { staticClass: "hljs" }, [
              _c("code", { staticClass: "pre-code html" }, [
                _vm._v(
                  "<template>\n  <k-upload-btn />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n            }\n        },\n        methods: {\n           \n        },\n    };\n\n</script>\n"
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
            _c("td", [_vm._v("multiple")]),
            _c("td", [_vm._v("是否多选")]),
            _c("td", [_vm._v("Boolean")]),
            _c("td", [_vm._v("false")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("headers")]),
            _c("td", [_vm._v("请求头信息")]),
            _c("td", [_vm._v("Object")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("fileName")]),
            _c("td", [_vm._v("文件字段名")]),
            _c("td", [_vm._v("String")]),
            _c("td", [_vm._v("file")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("data")]),
            _c("td", [_vm._v("附加上传数据")]),
            _c("td", [_vm._v("Object")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("url")]),
            _c("td", [_vm._v("上传接口")]),
            _c("td", [_vm._v("String")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("是")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("withCredentials")]),
            _c("td", [_vm._v("是否支持cookie验证")]),
            _c("td", [_vm._v("Boolean")]),
            _c("td", [_vm._v("false")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("beforeUpload")]),
            _c("td", [
              _vm._v(
                "上传之前验证函数; 接收参数：（fileName : string, file : File）,需Promise返回过滤后的文件"
              )
            ]),
            _c("td", [_vm._v("Function")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("onProgress")]),
            _c("td", [
              _vm._v(
                "上传进度函数；接收参数：（e : Event, file : File, fileList : Array<File>）"
              )
            ]),
            _c("td", [_vm._v("Function")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("onSuccess")]),
            _c("td", [
              _vm._v(
                "上传成功函数;接收参数：（res : Result, file : File, fileList : Array<File>）"
              )
            ]),
            _c("td", [_vm._v("Function")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ]),
          _c("tr", [
            _c("td", [_vm._v("onError")]),
            _c("td", [
              _vm._v(
                "上传失败函数；接收参数：（err : Error, res：result, file : File, fileList : Array<File>）"
              )
            ]),
            _c("td", [_vm._v("Function")]),
            _c("td", [_vm._v("-")]),
            _c("td", [_vm._v("-")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true


// CONCATENATED MODULE: ./docs/zh-CN/upload-btn.md?vue&type=template&id=fd66bc1c&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(109);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??ref--4-0!./build/md-loader!./docs/zh-CN/upload-btn.md?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var upload_btnvue_type_script_lang_js_ = ({
  name: 'component-kview',
  components: {
    "kview-demo-0": function () {
      var render = function render() {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c("div", [_c("k-upload-btn")], 1);
      };

      var staticRenderFns = [];
      render._withStripped = true;
      var kviewDemoComp = {
        data: function data() {
          return {};
        },
        methods: {}
      };
      return Object.assign({
        render: render,
        staticRenderFns: staticRenderFns
      }, kviewDemoComp);
    }()
  }
});
// CONCATENATED MODULE: ./docs/zh-CN/upload-btn.md?vue&type=script&lang=js&
 /* harmony default export */ var zh_CN_upload_btnvue_type_script_lang_js_ = (upload_btnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./docs/zh-CN/upload-btn.md





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  zh_CN_upload_btnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "docs/zh-CN/upload-btn.md"
/* harmony default export */ var upload_btn = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);