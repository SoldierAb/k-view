(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("KVIEW", [], factory);
	else if(typeof exports === 'object')
		exports["KVIEW"] = factory();
	else
		root["KVIEW"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 74);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColTable_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/col-table/src/ColTable.vue?vue&type=template&id=53dae2b7&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-table-container" }, [
    _c(
      "table",
      _vm._l(_vm.headerData, function(thItem, thIndex) {
        return _c(
          "tr",
          {
            key: thItem + thIndex,
            class: "" + (thIndex === 0 ? "col-tr-one" : "")
          },
          [
            _c("td", { style: "width:" + _vm.tdWidth + "px" }, [
              _c(
                "span",
                [
                  _vm._t(
                    "h-" + thItem.key,
                    [_c("span", [_vm._v(_vm._s(thItem.label))])],
                    null,
                    thItem
                  )
                ],
                2
              )
            ]),
            _vm._v(" "),
            _vm._l(_vm.bodyData, function(tdItem, tdIndex) {
              return _c(
                "td",
                {
                  key: tdItem + tdIndex,
                  on: {
                    mouseover: function($event) {
                      return _vm.tdOver(thItem.event, tdIndex)
                    }
                  }
                },
                [
                  _c(
                    "span",
                    [
                      _vm._t(
                        thItem.key,
                        [
                          thItem.comp
                            ? _c(
                                "El" + thItem.comp,
                                _vm._b(
                                  {
                                    tag: "component",
                                    nativeOn: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.cellClick(
                                          thItem.event,
                                          tdIndex,
                                          _vm.bodyData
                                        )
                                      }
                                    },
                                    model: {
                                      value: tdItem[thItem.bind],
                                      callback: function($$v) {
                                        _vm.$set(tdItem, thItem.bind, $$v)
                                      },
                                      expression: "tdItem[thItem.bind]"
                                    }
                                  },
                                  "component",
                                  Object.assign({}, thItem.props, tdItem),
                                  false
                                ),
                                [
                                  thItem.comp === "Select"
                                    ? _c("async-options", {
                                        attrs: { url: thItem.url }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  thItem.comp === "Button"
                                    ? _c("span", [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(tdItem[thItem.key]) +
                                            "\n              "
                                        )
                                      ])
                                    : _vm._e()
                                ],
                                1
                              )
                            : _c("span", [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(tdItem[thItem.key]) +
                                    "\n            "
                                )
                              ])
                        ],
                        null,
                        { $th: thItem, $index: tdIndex, $data: _vm.bodyData }
                      )
                    ],
                    2
                  )
                ]
              )
            })
          ],
          2
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/col-table/src/ColTable.vue?vue&type=template&id=53dae2b7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/col-table/src/ColTable.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ColTablevue_type_script_lang_js_ = ({
  name: "KColTable",
  props: {
    headerData: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    bodyData: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    tdWidth: {
      type: Number,
      default: function _default() {
        return 120;
      }
    }
  },
  data: function data() {
    return {
      eventType: "",
      index: -1
    };
  },
  watch: {
    bodyData: {
      deep: true,
      handler: function handler(val) {
        this.$emit("on-change", this.eventType, this.index, val);
      }
    }
  },
  methods: {
    tdOver: function tdOver(eventType, index) {
      this.eventType = eventType;
      this.index = index;
    },
    cellClick: function cellClick(eventType, index, data) {
      this.$emit("cell-click", eventType, index, data);
    }
  }
});
// CONCATENATED MODULE: ./src/components/col-table/src/ColTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_ColTablevue_type_script_lang_js_ = (ColTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/col-table/src/ColTable.vue?vue&type=style&index=0&lang=scss&
var ColTablevue_type_style_index_0_lang_scss_ = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/col-table/src/ColTable.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_ColTablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/col-table/src/ColTable.vue"
/* harmony default export */ var ColTable = (component.exports);
// CONCATENATED MODULE: ./src/components/col-table/index.js


ColTable.install = function (Vue) {
  Vue.component(ColTable.name, ColTable);
};

/* harmony default export */ var col_table = __webpack_exports__["default"] = (ColTable);

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=index.js.map