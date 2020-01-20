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
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
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

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuTree_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuTree_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuTree_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuTree_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/menu-tree/src/MenuTree.vue?vue&type=template&id=0a8cb3fb&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    { class: "k-menu-tree-container" },
    [
      _vm.dataSource[_vm.childrenKey] && _vm.dataSource[_vm.childrenKey].length
        ? _c(
            "el-submenu",
            { attrs: { index: _vm.dataSource[_vm.valueKey] } },
            [
              _c("template", { slot: "title" }, [
                _vm.dataSource.icon
                  ? _c("div", { class: "menu-icon" }, [
                      _c(
                        "span",
                        _vm._b({}, "span", _vm.dataSource.props, false),
                        [_vm._v(_vm._s(_vm.dataSource[_vm.labelKey]))]
                      )
                    ])
                  : _c(
                      "span",
                      _vm._b({}, "span", _vm.dataSource.props, false),
                      [_vm._v(_vm._s(_vm.dataSource[_vm.labelKey]))]
                    )
              ]),
              _vm._v(" "),
              _c(
                "el-menu-item-group",
                _vm._l(_vm.dataSource[_vm.childrenKey], function(child) {
                  return _c("k-menu-tree", {
                    key: child[_vm.valueKey],
                    attrs: {
                      "label-key": _vm.labelKey,
                      "value-key": _vm.valueKey,
                      "data-source": child
                    }
                  })
                }),
                1
              )
            ],
            2
          )
        : _c(
            "el-menu-item",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.showLink,
                  expression: "showLink"
                }
              ],
              class: "" + (_vm.navActive ? "nav-active" : ""),
              attrs: { index: _vm.dataSource[_vm.valueKey] }
            },
            [
              _c(
                "router-link",
                {
                  class: "" + (_vm.navActive ? "nav-link-active" : ""),
                  attrs: {
                    slot: "title",
                    to: "/" + _vm.dataSource[_vm.valueKey]
                  },
                  slot: "title"
                },
                [
                  _vm.dataSource.icon
                    ? _c("div", { class: "\n        menu-icon \n        " }, [
                        _c(
                          "span",
                          _vm._b({}, "span", _vm.dataSource.props, false),
                          [_vm._v(_vm._s(_vm.dataSource[_vm.labelKey]))]
                        )
                      ])
                    : _c(
                        "span",
                        _vm._b({}, "span", _vm.dataSource.props, false),
                        [_vm._v(_vm._s(_vm.dataSource[_vm.labelKey]))]
                      )
                ]
              )
            ],
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/menu-tree/src/MenuTree.vue?vue&type=template&id=0a8cb3fb&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/menu-tree/src/MenuTree.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MenuTreevue_type_script_lang_js_ = ({
  name: "KMenuTree",
  props: {
    dataSource: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    valueKey: {
      type: String,
      default: function _default() {
        return "name";
      }
    },
    labelKey: {
      type: String,
      default: function _default() {
        return "title";
      }
    },
    childrenKey: {
      type: String,
      default: function _default() {
        return "children";
      }
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    navActive: function navActive() {
      var menuItemValue = this.dataSource[this.valueKey],
          currentRoute = this.$route.path;
      return currentRoute && currentRoute.includes(menuItemValue);
    },
    showLink: function showLink() {
      return this.dataSource.show === false ? false : true;
    }
  }
});
// CONCATENATED MODULE: ./src/components/menu-tree/src/MenuTree.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_MenuTreevue_type_script_lang_js_ = (MenuTreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/menu-tree/src/MenuTree.vue?vue&type=style&index=0&lang=scss&
var MenuTreevue_type_style_index_0_lang_scss_ = __webpack_require__(65);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/menu-tree/src/MenuTree.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_MenuTreevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/menu-tree/src/MenuTree.vue"
/* harmony default export */ var MenuTree = (component.exports);
// CONCATENATED MODULE: ./src/components/menu-tree/index.js


MenuTree.install = function (Vue) {
  Vue.component(MenuTree.name, MenuTree);
};

/* harmony default export */ var menu_tree = __webpack_exports__["default"] = (MenuTree);

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=index.js.map