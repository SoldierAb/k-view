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
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
var _broadcast = function _broadcast(componentName, eventName, params) {
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

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadBtn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadBtn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadBtn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_1_0_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ref_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadBtn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/upload-btn/src/UploadBtn.vue?vue&type=template&id=d9d1a33e&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "upload-btn-container" },
    [
      _c("div", { staticClass: "upload-btn-box" }, [
        _c("label", [_vm._v("上传文件")]),
        _vm._v(" "),
        _c("input", {
          ref: "inputUpload",
          staticClass: "upload-btn",
          attrs: { type: "file", multiple: _vm.multiple },
          on: { change: _vm.handleChange }
        })
      ]),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/upload-btn/src/UploadBtn.vue?vue&type=template&id=d9d1a33e&

// CONCATENATED MODULE: ./src/utils/upload.js
/**
 * @author SoldierAb
 * @description 文件上传
 * @param {any} option
 * @since 18-12-29
 * @example
 *
 * upload({
 *   headers:headers,                                           //响应头
 *   withCredentials: withCredentials,                          //是否包含cookie
 *   file: file,                                                //文件
 *   data: data,                                                //数据
 *   filename: name,                                            //文件名
 *   action: action,                                            //接口
 *   onProgress: e => {                                         //当前进度回调
 *       this.handleProgress(e, file);
 *   },
 *   onSuccess: res => {                                        //上传成功回调
 *       this.handleSuccess(res, file);
 *   },
 *   onError: (err, response) => {                              //上传出错回调
 *       this.handleError(err, response, file);
 *   }
 * });
 *
 * @returns
 *
 */
var upload = function upload(option) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "post";

  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }

  var xhr = new XMLHttpRequest();
  var action = option.action; //请求url

  if (xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }

      option.onProgress(e);
    };
  } //文件formData


  var formData = new FormData();

  if (option.data) {
    Object.keys(option.data).map(function (key) {
      formData.append(key, option.data[key]);
    });
  }

  if (option.filename && option.file) formData.append(option.filename, option.file);

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr, type), getBody(xhr));
    }

    option.onSuccess(getBody(xhr));
  };

  xhr.open(type, action, true); //是否cookie

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  var headers = option.headers || {}; // if (headers['X-Requested-With'] !== null) {
  //   xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  // }

  for (var item in headers) {
    if (headers.hasOwnProperty(item) && headers[item] !== null) {
      xhr.setRequestHeader(item, headers[item]);
    }
  }

  xhr.send(formData);
};
/**
 *
 * @description 错误获取
 * @param {any} action
 * @param {any} option
 * @param {any} xhr
 * @returns
 */


var getError = function getError(action, option, xhr, type) {
  var msg = "fail to ".concat(type, " ").concat(action, " ").concat(xhr.status);
  var err = new Error(msg);
  err.status = xhr.status;
  err.method = type;
  err.url = action;
  return err;
};
/**
 *
 * @description 返回内容获取
 * @param {any} xhr
 * @returns
 */


var getBody = function getBody(xhr) {
  var text = xhr.responseText || xhr.response;

  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
};

/* harmony default export */ var utils_upload = (upload);
// EXTERNAL MODULE: ./src/utils/emitter.js
var emitter = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/upload-btn/src/UploadBtn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var UploadBtnvue_type_script_lang_js_ = ({
  name: "KUploadBtn",
  mixins: [emitter["a" /* default */]],
  props: {
    multiple: {
      //是否多选
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    headers: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    fileName: {
      //文件上传key
      type: String,
      default: "file"
    },
    data: {
      //额外数据
      type: Object,
      default: function _default() {
        return {};
      }
    },
    url: {
      type: String,
      require: true,
      default: function _default() {
        return "";
      }
    },
    withCredentials: {
      //是否支持cookie验证
      type: Boolean,
      default: false
    },
    beforeUpload: {
      //上传之前验证函数
      type: Function,
      default: function _default() {
        return {};
      }
    },
    onProgress: {
      type: Function,
      default: function _default() {
        return {};
      }
    },
    onSuccess: {
      type: Function,
      default: function _default() {
        return {};
      }
    },
    onError: {
      type: Function,
      default: function _default() {
        return {};
      }
    },
    onRemove: {
      type: Function,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      fileList: [],
      markId: 0 //文件标识

    };
  },
  methods: {
    /**
     * @description 文件数据变化
     */
    handleChange: function handleChange(e) {
      var files = e.target.files;
      if (!files) return;
      this.setFiles(files);
      this.$refs.inputUpload.value = null;
    },

    /**
     * @description  文件数据设置
     */
    setFiles: function setFiles(files) {
      var _this = this;

      var postFiles = Array.prototype.slice.call(files);
      if (!this.multiple) postFiles = postFiles.slice(0, 1);
      if (postFiles.length === 0) return;

      if (!this.url) {
        //不传自动上传api则设置文件
        this.$emit('get-file', this.fileName, this.multiple ? postFiles : postFiles[0]); // return;
      }

      postFiles.forEach(function (file) {
        //文件逐一上传
        _this.upload(file);
      });
    },

    /**
     * @description 文件上传
     */
    upload: function upload(file) {
      var _this2 = this;

      if (!this.beforeUpload) {
        //如果没有校验规则直接开始上传
        return this.post(file);
      }

      var before = this.beforeUpload(this.fileName, file);

      if (before && before.then) {
        before.then(function (processedFile) {
          if (Object.prototype.toString.call(processedFile) === "[object File]") {
            _this2.post(processedFile);
          } else {
            _this2.post(file);
          }
        }, function () {// this.$emit('cancel', file);
        });
      } else if (before !== false) {
        this.post(file);
      } else {// this.$emit('cancel', file);
      }
    },

    /**
     * @description 存储文件数据
     */
    setFilelist: function setFilelist(file) {
      file.markId = this.markId++;
      file.status = "uploading";
      this.fileList.push(file);
    },

    /**
     * @description 上传文件项
     */
    post: function post(file) {
      var _this3 = this;

      this.setFilelist(file);
      if (!this.url) return;
      utils_upload({
        headers: this.headers,
        withCredentials: this.withCredentials,
        file: file,
        data: this.data,
        filename: this.fileName,
        action: this.url,
        onProgress: function onProgress(e) {
          _this3.handleProgress(e, file);
        },
        onSuccess: function onSuccess(res) {
          _this3.handleSuccess(res, file);
        },
        onError: function onError(err, response) {
          _this3.handleError(err, response, file);
        }
      });
    },

    /**
     * @description 上传进度
     */
    handleProgress: function handleProgress(e, file) {
      var percent = e.percent;
      this.onProgress(e, file, this.fileList);
    },

    /**
     * @description 上传成功
     */
    handleSuccess: function handleSuccess(res, file) {
      var markId = file.markId;
      if (!this.fileList[markId]) return;
      this.fileList[markId].status = file.status = "success";
      this.onSuccess(res, file, this.fileList);
    },

    /**
     * @description 上传出错
     */
    handleError: function handleError(err, res, file) {
      this.onError(err, res, file, this.fileList);
    }
  }
});
// CONCATENATED MODULE: ./src/components/upload-btn/src/UploadBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_UploadBtnvue_type_script_lang_js_ = (UploadBtnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/upload-btn/src/UploadBtn.vue?vue&type=style&index=0&lang=scss&
var UploadBtnvue_type_style_index_0_lang_scss_ = __webpack_require__(92);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/upload-btn/src/UploadBtn.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_UploadBtnvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/upload-btn/src/UploadBtn.vue"
/* harmony default export */ var UploadBtn = (component.exports);
// CONCATENATED MODULE: ./src/components/upload-btn/index.js


UploadBtn.install = function (Vue) {
  Vue.component(UploadBtn.name, UploadBtn);
};

/* harmony default export */ var upload_btn = __webpack_exports__["default"] = (UploadBtn);

/***/ })

/******/ });