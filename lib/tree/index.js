module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tree/src/Tree.vue?vue&type=template&id=4caea10c&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "tree-container" }, [
    _c(
      "div",
      { staticClass: "tree-body" },
      _vm._l(_vm.stateTree, function(item, index) {
        return _c("tree-node", {
          key: index,
          attrs: {
            "img-source": _vm.imgSource,
            "node-data": item,
            "value-key": _vm.valueKey,
            "label-key": _vm.labelKey,
            "show-checkbox": _vm.showCheckbox,
            "show-tip": _vm.showTip
          }
        })
      }),
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/tree/src/Tree.vue?vue&type=template&id=4caea10c&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tree/src/TreeNode.vue?vue&type=template&id=4942a0c8&
var TreeNodevue_type_template_id_4942a0c8_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "k-tree-node-container" }, [
    _c(
      "ul",
      {
        style:
          "padding-left:" +
          (_vm.children && _vm.children.length ? 20 : 40) +
          "px"
      },
      [
        _c(
          "li",
          [
            _vm.children && _vm.children.length
              ? _c(
                  "span",
                  {
                    staticClass: "tree-arrow point-cursor",
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.toggleExpand($event)
                      }
                    }
                  },
                  [
                    _vm.imgSource.right && _vm.imgSource.down
                      ? _c("img", {
                          attrs: {
                            width: "18",
                            height: "18",
                            src: _vm.imgSource[_vm.arrowType],
                            alt: ""
                          }
                        })
                      : _c("icon", {
                          attrs: { type: "caret-" + _vm.arrowType }
                        })
                  ],
                  1
                )
              : _c("span", { staticClass: "tree-arrow" }),
            _vm._v(" "),
            _vm.showCheckbox
              ? _c("span", [
                  _c("input", {
                    staticClass: "tree-checkbox",
                    attrs: { type: "checkbox" },
                    domProps: { checked: _vm.nodeData.checked },
                    on: {
                      change: function($event) {
                        $event.stopPropagation()
                        return _vm.handleCheck($event)
                      }
                    }
                  })
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "span",
              {
                class: _vm.labelClasses,
                style: "" + (_vm.showTip ? "width:calc(100% - 40px)" : ""),
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    return _vm.handleSelect($event)
                  }
                }
              },
              [
                _vm.imgSource.node && _vm.imgSource.leaf
                  ? _c("img", {
                      staticClass: "label-icon",
                      attrs: {
                        width: "18",
                        height: "18",
                        src:
                          _vm.children && _vm.children.length
                            ? _vm.imgSource.node
                            : _vm.imgSource.leaf,
                        alt: ""
                      }
                    })
                  : _c("icon", {
                      attrs: {
                        type:
                          "" +
                          (_vm.children && _vm.children.length
                            ? "file-b-"
                            : "file")
                      }
                    }),
                _vm._v(" "),
                _c("label", [_vm._v(_vm._s(_vm.nodeData[_vm.labelKey]))])
              ],
              1
            ),
            _vm._v(" "),
            _vm._l(_vm.children, function(item, index) {
              return _c("k-tree-node", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.nodeData.expand,
                    expression: "nodeData.expand"
                  }
                ],
                key: index,
                attrs: {
                  "show-tip": _vm.showTip,
                  "img-source": _vm.imgSource,
                  "show-checkbox": _vm.showCheckbox,
                  "node-data": item,
                  "label-key": _vm.labelKey
                }
              })
            })
          ],
          2
        )
      ]
    )
  ])
}
var TreeNodevue_type_template_id_4942a0c8_staticRenderFns = []
TreeNodevue_type_template_id_4942a0c8_render._withStripped = true


// CONCATENATED MODULE: ./src/components/tree/src/TreeNode.vue?vue&type=template&id=4942a0c8&

// EXTERNAL MODULE: ./src/utils/emitter.js
var emitter = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icon/src/Icon.vue?vue&type=template&id=1f9345da&lang=html&
var Iconvue_type_template_id_1f9345da_lang_html_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", { staticClass: "k-icon" }, [
    _c("svg", { staticClass: "icon", attrs: { "aria-hidden": "true" } }, [
      _c("use", { attrs: { "xlink:href": "#icon-" + _vm.type } })
    ])
  ])
}
var Iconvue_type_template_id_1f9345da_lang_html_staticRenderFns = []
Iconvue_type_template_id_1f9345da_lang_html_render._withStripped = true


// CONCATENATED MODULE: ./src/components/icon/src/Icon.vue?vue&type=template&id=1f9345da&lang=html&

// EXTERNAL MODULE: ./src/components/icon/src/iconfont.js
var iconfont = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icon/src/Icon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Iconvue_type_script_lang_js_ = ({
  // eslint-disable-next-line vue/require-prop-types
  props: ["type", "color", "size"]
});
// CONCATENATED MODULE: ./src/components/icon/src/Icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Iconvue_type_script_lang_js_ = (Iconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/icon/src/Icon.vue?vue&type=style&index=0&lang=scss&
var Iconvue_type_style_index_0_lang_scss_ = __webpack_require__(36);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/icon/src/Icon.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Iconvue_type_script_lang_js_,
  Iconvue_type_template_id_1f9345da_lang_html_render,
  Iconvue_type_template_id_1f9345da_lang_html_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/icon/src/Icon.vue"
/* harmony default export */ var Icon = (component.exports);
// CONCATENATED MODULE: ./src/components/icon/index.js


Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon);
};

/* harmony default export */ var icon = (Icon);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tree/src/TreeNode.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var TreeNodevue_type_script_lang_js_ = ({
  name: "KTreeNode",
  components: {
    Icon: icon
  },
  mixins: [emitter["a" /* default */]],
  props: {
    showTip: {
      type: Boolean
    },
    showLine: {
      type: Boolean,
      "default": false
    },
    nodeData: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    imgSource: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    showCheckbox: {
      type: Boolean,
      "default": false
    },
    labelKey: {
      type: String,
      "default": "label"
    },
    childrenKey: {
      type: String,
      "default": "children"
    }
  },
  data: function data() {
    return {
      checked: getType(this.nodeData["checked"], "Boolean") //初始化默认选中设置
      ? this.nodeData["checked"] : false
    };
  },
  computed: {
    children: function children() {
      return this.nodeData[this.childrenKey];
    },
    arrowType: function arrowType() {
      return this.nodeData.expand ? "down" : "right";
    },
    labelClasses: function labelClasses() {
      return "node-label node-hover point-cursor  ".concat(this.nodeData.selected && !this.showCheckbox ? "node-label-active" : "");
    }
  },
  methods: {
    /**
     * @description 复选框事件
     */
    handleCheck: function handleCheck() {
      var changes = {
        checked: !this.nodeData.checked,
        nodeKey: this.nodeData.nodeKey
      };
      this.dispatch("KTree", "on-check", changes);
    },

    /**
     * @description  单选
     */
    handleSelect: function handleSelect() {
      if (!this.showCheckbox) this.dispatch("KTree", "on-select", this.nodeData);
    },

    /**
     * @description 展开收缩
     */
    toggleExpand: function toggleExpand(_e) {
      if (this.nodeData[this.childrenKey] && this.nodeData[this.childrenKey].length) {
        this.$set(this.nodeData, "expand", !this.nodeData["expand"]);
        this.dispatch("KTree", "toggle-expand", this.nodeData);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/tree/src/TreeNode.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_TreeNodevue_type_script_lang_js_ = (TreeNodevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/tree/src/TreeNode.vue





/* normalize component */

var TreeNode_component = Object(componentNormalizer["a" /* default */])(
  src_TreeNodevue_type_script_lang_js_,
  TreeNodevue_type_template_id_4942a0c8_render,
  TreeNodevue_type_template_id_4942a0c8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var TreeNode_api; }
TreeNode_component.options.__file = "src/components/tree/src/TreeNode.vue"
/* harmony default export */ var TreeNode = (TreeNode_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--5-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/tree/src/Tree.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



window.getType = function (obj, type) {
  return Object.prototype.toString.call(obj).includes("".concat(type.slice(1)));
};

/* harmony default export */ var Treevue_type_script_lang_js_ = ({
  name: "KTree",
  components: {
    TreeNode: TreeNode
  },
  mixins: [emitter["a" /* default */]],
  props: {
    value: {
      type: String,
      "default": function _default() {
        return "";
      }
    },
    dataSource: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    showTip: {
      type: Boolean,
      "default": true
    },
    imgSource: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    onlyLeaf: {
      //是否只保留叶子节点数据
      type: Boolean,
      "default": false
    },
    multiple: {
      type: Boolean,
      "default": false
    },
    type: {
      type: String,
      "default": "select"
    },
    showCheckbox: {
      type: Boolean,
      "default": false
    },
    labelKey: {
      type: String,
      "default": "label"
    },
    valueKey: {
      type: String,
      "default": "value"
    },
    childrenKey: {
      type: String,
      "default": "children"
    }
  },
  data: function data() {
    return {
      stateTree: this.dataSource,
      showTree: this.type !== "select",
      selectedNodes: [],
      checkedNodes: []
    };
  },
  watch: {
    value: 'setNodesPoperty',
    dataSource: {
      handler: function handler() {
        this.initDataSource();
      }
    }
  },
  created: function created() {
    this.$on("on-select", this.handleSelect);
    this.$on("on-check", this.handleCheck);
    this.$on("toggle-expand", this.handleExpand);
    this.initDataSource();
  },
  methods: {
    /**
    * @description 数据初始化
    */
    initDataSource: function initDataSource() {
      if (getType(this.dataSource, "Array") && this.dataSource.length) {
        this.stateTree = this.dataSource;
        this.setFlatState();
      }
    },

    /**
     * @description 缓存平行数据,建立父子关系
     */
    setFlatState: function setFlatState() {
      var _this = this;

      var flatState = [],
          markKey = 0,
          childrenKey = this.childrenKey,
          showCheckbox = this.showCheckbox,
          multiple = this.multiple;

      var toFlateJson = function toFlateJson(node, parentNode) {
        node.nodeKey = markKey++;

        if (getType(node.expand, 'undefined')) {
          _this.$set(node, 'expand', Boolean(node.expand));
        }

        flatState[node.nodeKey] = {
          node: node,
          nodeKey: node.nodeKey
        }; //nodeKey与索引对应

        node.hasParent = !getType(parentNode, 'Undefined');

        if (parentNode) {
          flatState[node.nodeKey].parentKey = parentNode.nodeKey; //设置当前节点父节点标识

          flatState[parentNode.nodeKey][childrenKey].push(node.nodeKey); //父节点填充子节点
        }

        if (node[childrenKey] && node[childrenKey].length) {
          //当前节点子集操作
          flatState[node.nodeKey][childrenKey] = [];
          node[childrenKey].forEach(function (child) {
            return toFlateJson(child, node);
          });
        } else {
          node["isLeafNode"] = true; //叶子节点标记
        }
      };

      this.dataSource.forEach(function (rootNode) {
        return toFlateJson(rootNode);
      });
      this.flatState = flatState;
      this.setNodesPoperty();
    },

    /**
    * @description 双向绑定设置节点对应属性状态
    */
    setNodesPoperty: function setNodesPoperty() {
      var _this2 = this;

      var _this$getCurrentNodes = this.getCurrentNodes(),
          _value = _this$getCurrentNodes._value,
          _label = _this$getCurrentNodes._label;

      if (this.value === _value) return false;

      if (this.value && this.value.length) {
        this.clearAllNodes();

        if (!this.showCheckbox) {
          this.value.split(',').forEach(function (valItem) {
            _this2.setNodeBySearchValue(valItem, "selected", true);
          });
          this.selectedNodes = this.getSelectedNodes();
        } else {
          this.value.split(',').forEach(function (valItem) {
            var findNode = _this2.setNodeBySearchValue(valItem, "checked", true);

            if (findNode) {
              var checkChange = {
                checked: true,
                nodeKey: findNode.nodeKey
              };

              _this2.updateCheckedNodesPoperty(checkChange);
            }
          });
          this.checkedNodes = this.getCheckedNodes();
        }

        this.setModelValue();
      }
    },

    /**
    * @description 清除当前选中的所有数据
    */
    clearAllNodes: function clearAllNodes() {
      var curStateKey = this.showCheckbox ? 'checked' : 'selected';
      this.setAllNodesState(curStateKey, false);
      this["".concat(curStateKey, "Nodes")] = [];
    },

    /**
    * @description 清空所有选中状态
    */
    rebootTree: function rebootTree() {
      this.clearAllNodes();
      this.setModelValue();
    },

    /**
    * @description 查找节点
    */
    findNodeByKeyValue: function findNodeByKeyValue(key, value) {
      var flatState = this.flatState;

      if (flatState) {
        var findNode = flatState.find(function (flatNode) {
          return flatNode.node[key] === value;
        });
        return findNode;
      }
    },

    /**
    * @description 设置节点属性值
    */
    setNodeBySearchValue: function setNodeBySearchValue(searchValue, setKey, setVal) {
      var findNode = this.findNodeByKeyValue(this.valueKey, searchValue);

      if (findNode) {
        this.$set(findNode.node, setKey, setVal);
        return findNode;
      }
    },

    /**
     * @description 获取当前选择的节点数据
     */
    getCurrentNodes: function getCurrentNodes() {
      var selectedNodes = this.selectedNodes,
          showCheckbox = this.showCheckbox,
          onlyLeaf = this.onlyLeaf,
          checkedNodes = this.checkedNodes,
          valueKey = this.valueKey,
          labelKey = this.labelKey,
          value = this.value,
          flatState = this.flatState,
          leafNodes = checkedNodes.filter(function (item) {
        return item.isLeafNode;
      }),
          _curNodes = showCheckbox ? onlyLeaf ? leafNodes : checkedNodes : selectedNodes,
          _label = _curNodes.map(function (node) {
        return node[labelKey];
      }).join(","),
          _value = valueKey ? _curNodes.map(function (node) {
        return node[valueKey];
      }).join(",") : _curNodes;

      return {
        _value: _value,
        _label: _label,
        _curNodes: _curNodes
      };
    },

    /**
     * @description 当前点击的节点
     */
    handleExpand: function handleExpand(nodeItem) {
      // this.$set(node,'expand',!Boolean(node[`expand`]));
      this.$emit("on-toggle-expand", nodeItem);
    },

    /**
     * @description 复选框事件
     */
    handleCheck: function handleCheck(checkItem) {
      this.updateCheckedNodesPoperty(checkItem);
      this.setModelValue();
    },

    /**
    * @description 更新选中后的节点状态
    */
    updateCheckedNodesPoperty: function updateCheckedNodesPoperty(_ref) {
      var checked = _ref.checked,
          nodeKey = _ref.nodeKey;
      var node = this.flatState[nodeKey].node;
      this.$set(node, "checked", checked);
      this.updateParentNodes(nodeKey);
      this.updateChildrenNodes(node, this.childrenKey, checked);
      this.checkedNodes = this.getCheckedNodes();
    },

    /**
     * @description 更新父节点
     */
    updateParentNodes: function updateParentNodes(nodeKey) {
      var _this$flatState$nodeK = this.flatState[nodeKey],
          parentKey = _this$flatState$nodeK.parentKey,
          node = _this$flatState$nodeK.node;

      if (getType(parentKey, "Number")) {
        var parentNode = this.flatState[parentKey].node,
            childrenKey = this.childrenKey;
        var allAdjacentNodesChecked = parentNode[childrenKey].every(function (item) {
          return item.checked;
        });
        this.$set(parentNode, "checked", allAdjacentNodesChecked);
        this.updateParentNodes(parentKey);
      }
    },

    /**
     * @description 更新子节点
     */
    updateChildrenNodes: function updateChildrenNodes(node, childrenKey, checked) {
      var _this3 = this;

      if (node[childrenKey] && node[childrenKey].length) node[childrenKey].forEach(function (child) {
        _this3.$set(child, "checked", checked);

        _this3.updateChildrenNodes(child, childrenKey, checked);
      });
    },

    /**
     * @description 节点选择
     */
    handleSelect: function handleSelect(_ref2) {
      var nodeKey = _ref2.nodeKey;
      var _this$flatState$nodeK2 = this.flatState[nodeKey],
          node = _this$flatState$nodeK2.node,
          parentKey = _this$flatState$nodeK2.parentKey; //如果是单选

      if (!this.multiple) {
        this.setAllNodesState('selected', false);
      }

      this.$set(node, "selected", !node["selected"]);
      this.selectedNodes = this.getSelectedNodes();
      this.setModelValue();
    },

    /**
    * @description 触发v-model绑定值变化
    */
    setModelValue: function setModelValue() {
      var _this$getCurrentNodes2 = this.getCurrentNodes(),
          _value = _this$getCurrentNodes2._value,
          _label = _this$getCurrentNodes2._label,
          _curNodes = _this$getCurrentNodes2._curNodes,
          showCheckbox = this.showCheckbox;

      if (this.flatState) {
        this.$emit("input", _value); //当前选择触发双向绑定数据变化
        // this.$emit("input", _curNodes);       //当前选择触发双向绑定数据变化

        showCheckbox ? this.$emit("on-check-change", this.getCheckedNodes()) : this.$emit("on-select-change", this.getSelectedNodes());
      }
    },

    /**
     * @description 更新节点属性
    */
    setAllNodesState: function setAllNodesState(key, value) {
      var _this4 = this;

      this.flatState.filter(function (item) {
        return item.node[key];
      }).map(function (item) {
        return item.node;
      }).forEach(function (leaf) {
        _this4.$set(leaf, key, value);
      });
    },

    /**
     * @description 获取当前选中的所有节点
     */
    getSelectedNodes: function getSelectedNodes() {
      return this.flatState.filter(function (item) {
        return item.node.selected;
      }).map(function (item) {
        return item.node;
      });
    },

    /**
     * @description 获取当前选中的节点
     */
    getCheckedNodes: function getCheckedNodes() {
      return this.flatState.filter(function (item) {
        return item.node.checked;
      }).map(function (item) {
        return item.node;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/tree/src/Tree.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Treevue_type_script_lang_js_ = (Treevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/tree/src/Tree.vue?vue&type=style&index=0&lang=scss&
var Treevue_type_style_index_0_lang_scss_ = __webpack_require__(37);

// CONCATENATED MODULE: ./src/components/tree/src/Tree.vue






/* normalize component */

var Tree_component = Object(componentNormalizer["a" /* default */])(
  src_Treevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Tree_api; }
Tree_component.options.__file = "src/components/tree/src/Tree.vue"
/* harmony default export */ var Tree = (Tree_component.exports);
// CONCATENATED MODULE: ./src/components/tree/index.js


Tree.install = function (Vue) {
  Vue.component(Tree.name, Tree);
};

/* harmony default export */ var tree = __webpack_exports__["default"] = (Tree);

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

!function (d) {
  var t,
      l = '<svg><symbol id="icon-deleteicon" viewBox="0 0 1356 1024"><path d="M90.352941 512 90.352941 512C90.352941 561.808824 466.876386 893.436413 466.876386 893.436413 491.663089 915.595839 539.016734 933.647059 572.343567 933.647059L1144.385777 933.647059C1210.791514 933.647059 1264.941176 879.753165 1264.941176 813.271675L1264.941176 210.728324C1264.941176 144.387622 1210.966679 90.352941 1144.385777 90.352941L572.343567 90.352941C538.797568 90.352941 491.976192 108.195569 467.275565 130.205566 467.275565 130.205566 90.352941 462.191176 90.352941 512L90.352941 512ZM798.117647 448.110824 649.112124 299.105301C631.269707 281.262868 602.796243 281.393566 585.153717 299.036075 567.38822 316.801584 567.542212 345.313738 585.222957 362.99448L734.22848 512 585.222957 661.00552C567.38051 678.847955 567.511221 707.321416 585.153717 724.963924 602.919243 742.729433 631.431379 742.575441 649.112124 724.894699L798.117647 575.889176 947.12317 724.894699C964.965587 742.737131 993.439051 742.606432 1011.081577 724.963924 1028.847074 707.198416 1028.693082 678.686262 1011.012337 661.00552L862.006814 512 1011.012337 362.99448C1028.854784 345.152045 1028.724073 316.678584 1011.081577 299.036075 993.316051 281.270566 964.803915 281.42456 947.12317 299.105301L798.117647 448.110824ZM0 512C0 451.000055 46.04151 400.247371 193.416222 258.98649 201.001352 251.716009 208.764085 244.322514 216.692344 236.815608 258.494554 197.235093 303.171765 156.113154 347.834669 115.79134 363.456512 101.687878 377.967616 88.685541 391.002353 77.08179 398.855288 70.090967 404.49542 65.098401 407.166163 62.748062 448.494622 25.921502 516.73594 0 572.343567 0L1144.385777 0C1260.804698 0 1355.294118 94.424547 1355.294118 210.728324L1355.294118 813.271675C1355.294118 929.643954 1260.702118 1024 1144.385777 1024L572.343567 1024C516.813101 1024 448.017378 997.772113 407.157579 961.239953 404.099885 958.546839 398.465446 953.559407 390.620582 946.575809 377.599337 934.984153 363.103262 921.995303 347.497623 907.90637 302.881009 867.62605 258.250059 826.545577 216.490918 787.003645 208.561333 779.495084 200.797545 772.100048 193.211573 764.82816 46.014283 623.72552 0 572.991482 0 512Z"  ></path></symbol><symbol id="icon-caretup" viewBox="0 0 1024 1024"><path d="M804.571429 694.857143q0 14.857143-10.857143 25.714286t-25.714286 10.857143l-512 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286 10.857143-25.714286l256-256q10.857143-10.857143 25.714286-10.857143t25.714286 10.857143l256 256q10.857143 10.857143 10.857143 25.714286z"  ></path></symbol><symbol id="icon-file" viewBox="0 0 1024 1024"><path d="M725.333333 0H196.266667C111.786667 0 42.666667 69.12 42.666667 153.6v716.8c0 84.48 69.12 153.6 153.6 153.6h631.466666c84.48 0 153.6-69.12 153.6-153.6V256L725.333333 0z m170.666667 870.4c0 37.546667-30.72 68.266667-68.266667 68.266667H196.266667c-37.546667 0-68.266667-30.72-68.266667-68.266667V153.6c0-37.546667 30.72-68.266667 68.266667-68.266667h409.6v221.866667c0 37.546667 30.72 68.266667 68.266666 68.266667h221.866667v494.933333zM708.266667 290.133333c-9.386667 0-17.066667-7.68-17.066667-17.066666V85.333333l204.8 204.8H708.266667z" fill="#4990EE" ></path><path d="M588.8 716.8H298.666667c-23.893333 0-42.666667 18.773333-42.666667 42.666667s18.773333 42.666667 42.666667 42.666666h290.133333c23.893333 0 42.666667-18.773333 42.666667-42.666666s-18.773333-42.666667-42.666667-42.666667zM256 571.733333c0 23.893333 18.773333 42.666667 42.666667 42.666667h426.666666c23.893333 0 42.666667-18.773333 42.666667-42.666667s-18.773333-42.666667-42.666667-42.666666H298.666667c-23.893333 0-42.666667 18.773333-42.666667 42.666666z" fill="#4990EE" ></path></symbol><symbol id="icon-file-b-" viewBox="0 0 1024 1024"><path d="M437.677419 206.451613c1.651613-37.987097-29.729032-82.580645-47.896774-82.580645H47.896774c-34.683871 28.077419-33.032258 82.580645-33.032258 82.580645h422.812903z" fill="#ECC049" ></path><path d="M18.167742 204.8L16.516129 772.954839c0 62.76129 62.76129 127.174194 125.522581 127.174193h739.92258c62.76129 0 125.522581-62.76129 125.522581-127.174193V333.625806c0-62.76129-62.76129-127.174194-125.522581-127.174193H520.258065l-502.090323-1.651613z" fill="#FFD658" ></path></symbol><symbol id="icon-caret-down" viewBox="0 0 1024 1024"><path d="M254.6 384h514.6c35.6 0 53.4 43 28.2 68.2L540.2 709.6c-15.6 15.6-41 15.6-56.6 0L226.4 452.2C201.2 427 219 384 254.6 384z" fill="" ></path></symbol><symbol id="icon-caret-right" viewBox="0 0 1024 1024"><path d="M658.285714 512q0 14.857143-10.857143 25.714286l-256 256q-10.857143 10.857143-25.714285 10.857143t-25.714286-10.857143-10.857143-25.714286V256q0-14.857143 10.857143-25.714286t25.714286-10.857143 25.714285 10.857143l256 256q10.857143 10.857143 10.857143 25.714286z"  ></path></symbol></svg>',
      e = (t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss");

  if (e && !d.__iconfont__svg__cssinject__) {
    d.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (t) {
      console && console.log(t);
    }
  }

  !function (t) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(t, 0);else {
        var e = function e() {
          document.removeEventListener("DOMContentLoaded", e, !1), t();
        };

        document.addEventListener("DOMContentLoaded", e, !1);
      }
    } else document.attachEvent && (n = t, o = d.document, i = !1, c = function c() {
      i || (i = !0, n());
    }, (_l = function l() {
      try {
        o.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(_l, 50);
      }

      c();
    })(), o.onreadystatechange = function () {
      "complete" == o.readyState && (o.onreadystatechange = null, c());
    });

    var n, o, i, c, _l;
  }(function () {
    var t, e, n, o, i, c;
    (t = document.createElement("div")).innerHTML = l, l = null, (e = t.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", n = e, (o = document.body).firstChild ? (i = n, (c = o.firstChild).parentNode.insertBefore(i, c)) : o.appendChild(n));
  });
}(window);

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _this = undefined;

/** 
 * @description 跨组件通信库
 * @author SoldierAb
 * @since 18-12-28
 * @example 
 * 
 *  child.vue:
 *    this.dispatch('parent',eventName,params);
 * 
 *  parant.vue
 *    this.$on(eventName,params=>{
 *       
 *    });
*/
var _broadcast = function broadcast(componentName, eventName, params) {
  _this.$children.forEach(function (child) {
    var name = child.$options.name;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      //如果 params 是空数组，接收到的会是 undefined
      _broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.name;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
      }

      if (parent) parent.$emit.apply(parent, [eventName].concat(params));
    },
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
});

/***/ })

/******/ });