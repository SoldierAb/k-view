(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\nmodule.exports = function (METHOD_NAME) {\n  var regexp = /./;\n  try {\n    '/./'[METHOD_NAME](regexp);\n  } catch (e) {\n    try {\n      regexp[MATCH] = false;\n      return '/./'[METHOD_NAME](regexp);\n    } catch (f) { /* empty */ }\n  } return false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/correct-is-regexp-logic.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\n// `IsRegExp` abstract operation\n// https://tc39.github.io/ecma262/#sec-isregexp\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/core-js/internals/is-regexp.js\");\n\nmodule.exports = function (it) {\n  if (isRegExp(it)) {\n    throw TypeError(\"The method doesn't accept regular expressions\");\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/not-a-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $includes = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").includes;\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js/internals/array-method-uses-to-length.js\");\n\nvar USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });\n\n// `Array.prototype.includes` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.includes\n$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('includes');\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.array.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"./node_modules/core-js/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"./node_modules/core-js/internals/correct-is-regexp-logic.js\");\n\n// `String.prototype.includes` method\n// https://tc39.github.io/ecma262/#sec-string.prototype.includes\n$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~String(requireObjectCoercible(this))\n      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/es.string.includes.js?");

/***/ }),

/***/ "./node_modules/normalize-wheel/index.js":
/*!***********************************************!*\
  !*** ./node_modules/normalize-wheel/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/normalizeWheel.js */ \"./node_modules/normalize-wheel/src/normalizeWheel.js\");\n\n\n//# sourceURL=webpack:///./node_modules/normalize-wheel/index.js?");

/***/ }),

/***/ "./node_modules/normalize-wheel/src/ExecutionEnvironment.js":
/*!******************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/ExecutionEnvironment.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule ExecutionEnvironment\n */\n\n/*jslint evil: true */\n\n\n\nvar canUseDOM = !!(\n  typeof window !== 'undefined' &&\n  window.document &&\n  window.document.createElement\n);\n\n/**\n * Simple, lightweight module assisting with the detection and context of\n * Worker. Helps avoid circular dependencies and allows code to reason about\n * whether or not they are in a Worker, even if they never include the main\n * `ReactWorker` dependency.\n */\nvar ExecutionEnvironment = {\n\n  canUseDOM: canUseDOM,\n\n  canUseWorkers: typeof Worker !== 'undefined',\n\n  canUseEventListeners:\n    canUseDOM && !!(window.addEventListener || window.attachEvent),\n\n  canUseViewport: canUseDOM && !!window.screen,\n\n  isInWorker: !canUseDOM // For now, this is true - might change in the future.\n\n};\n\nmodule.exports = ExecutionEnvironment;\n\n\n//# sourceURL=webpack:///./node_modules/normalize-wheel/src/ExecutionEnvironment.js?");

/***/ }),

/***/ "./node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js":
/*!******************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Copyright 2004-present Facebook. All Rights Reserved.\n *\n * @providesModule UserAgent_DEPRECATED\n */\n\n/**\n *  Provides entirely client-side User Agent and OS detection. You should prefer\n *  the non-deprecated UserAgent module when possible, which exposes our\n *  authoritative server-side PHP-based detection to the client.\n *\n *  Usage is straightforward:\n *\n *    if (UserAgent_DEPRECATED.ie()) {\n *      //  IE\n *    }\n *\n *  You can also do version checks:\n *\n *    if (UserAgent_DEPRECATED.ie() >= 7) {\n *      //  IE7 or better\n *    }\n *\n *  The browser functions will return NaN if the browser does not match, so\n *  you can also do version compares the other way:\n *\n *    if (UserAgent_DEPRECATED.ie() < 7) {\n *      //  IE6 or worse\n *    }\n *\n *  Note that the version is a float and may include a minor version number,\n *  so you should always use range operators to perform comparisons, not\n *  strict equality.\n *\n *  **Note:** You should **strongly** prefer capability detection to browser\n *  version detection where it's reasonable:\n *\n *    http://www.quirksmode.org/js/support.html\n *\n *  Further, we have a large number of mature wrapper functions and classes\n *  which abstract away many browser irregularities. Check the documentation,\n *  grep for things, or ask on javascript@lists.facebook.com before writing yet\n *  another copy of \"event || window.event\".\n *\n */\n\nvar _populated = false;\n\n// Browsers\nvar _ie, _firefox, _opera, _webkit, _chrome;\n\n// Actual IE browser for compatibility mode\nvar _ie_real_version;\n\n// Platforms\nvar _osx, _windows, _linux, _android;\n\n// Architectures\nvar _win64;\n\n// Devices\nvar _iphone, _ipad, _native;\n\nvar _mobile;\n\nfunction _populate() {\n  if (_populated) {\n    return;\n  }\n\n  _populated = true;\n\n  // To work around buggy JS libraries that can't handle multi-digit\n  // version numbers, Opera 10's user agent string claims it's Opera\n  // 9, then later includes a Version/X.Y field:\n  //\n  // Opera/9.80 (foo) Presto/2.2.15 Version/10.10\n  var uas = navigator.userAgent;\n  var agent = /(?:MSIE.(\\d+\\.\\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\\d+\\.\\d+))|(?:Opera(?:.+Version.|.)(\\d+\\.\\d+))|(?:AppleWebKit.(\\d+(?:\\.\\d+)?))|(?:Trident\\/\\d+\\.\\d+.*rv:(\\d+\\.\\d+))/.exec(uas);\n  var os    = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);\n\n  _iphone = /\\b(iPhone|iP[ao]d)/.exec(uas);\n  _ipad = /\\b(iP[ao]d)/.exec(uas);\n  _android = /Android/i.exec(uas);\n  _native = /FBAN\\/\\w+;/i.exec(uas);\n  _mobile = /Mobile/i.exec(uas);\n\n  // Note that the IE team blog would have you believe you should be checking\n  // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming\n  // from either x64 or ia64;  so ultimately, you should just check for Win64\n  // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit\n  // Windows will send 'WOW64' instead.\n  _win64 = !!(/Win64/.exec(uas));\n\n  if (agent) {\n    _ie = agent[1] ? parseFloat(agent[1]) : (\n          agent[5] ? parseFloat(agent[5]) : NaN);\n    // IE compatibility mode\n    if (_ie && document && document.documentMode) {\n      _ie = document.documentMode;\n    }\n    // grab the \"true\" ie version from the trident token if available\n    var trident = /(?:Trident\\/(\\d+.\\d+))/.exec(uas);\n    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;\n\n    _firefox = agent[2] ? parseFloat(agent[2]) : NaN;\n    _opera   = agent[3] ? parseFloat(agent[3]) : NaN;\n    _webkit  = agent[4] ? parseFloat(agent[4]) : NaN;\n    if (_webkit) {\n      // We do not add the regexp to the above test, because it will always\n      // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in\n      // the userAgent string.\n      agent = /(?:Chrome\\/(\\d+\\.\\d+))/.exec(uas);\n      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;\n    } else {\n      _chrome = NaN;\n    }\n  } else {\n    _ie = _firefox = _opera = _chrome = _webkit = NaN;\n  }\n\n  if (os) {\n    if (os[1]) {\n      // Detect OS X version.  If no version number matches, set _osx to true.\n      // Version examples:  10, 10_6_1, 10.7\n      // Parses version number as a float, taking only first two sets of\n      // digits.  If only one set of digits is found, returns just the major\n      // version number.\n      var ver = /(?:Mac OS X (\\d+(?:[._]\\d+)?))/.exec(uas);\n\n      _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true;\n    } else {\n      _osx = false;\n    }\n    _windows = !!os[2];\n    _linux   = !!os[3];\n  } else {\n    _osx = _windows = _linux = false;\n  }\n}\n\nvar UserAgent_DEPRECATED = {\n\n  /**\n   *  Check if the UA is Internet Explorer.\n   *\n   *\n   *  @return float|NaN Version number (if match) or NaN.\n   */\n  ie: function() {\n    return _populate() || _ie;\n  },\n\n  /**\n   * Check if we're in Internet Explorer compatibility mode.\n   *\n   * @return bool true if in compatibility mode, false if\n   * not compatibility mode or not ie\n   */\n  ieCompatibilityMode: function() {\n    return _populate() || (_ie_real_version > _ie);\n  },\n\n\n  /**\n   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we\n   * only need this because Skype can't handle 64-bit IE yet.  We need to remove\n   * this when we don't need it -- tracked by #601957.\n   */\n  ie64: function() {\n    return UserAgent_DEPRECATED.ie() && _win64;\n  },\n\n  /**\n   *  Check if the UA is Firefox.\n   *\n   *\n   *  @return float|NaN Version number (if match) or NaN.\n   */\n  firefox: function() {\n    return _populate() || _firefox;\n  },\n\n\n  /**\n   *  Check if the UA is Opera.\n   *\n   *\n   *  @return float|NaN Version number (if match) or NaN.\n   */\n  opera: function() {\n    return _populate() || _opera;\n  },\n\n\n  /**\n   *  Check if the UA is WebKit.\n   *\n   *\n   *  @return float|NaN Version number (if match) or NaN.\n   */\n  webkit: function() {\n    return _populate() || _webkit;\n  },\n\n  /**\n   *  For Push\n   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit\n   */\n  safari: function() {\n    return UserAgent_DEPRECATED.webkit();\n  },\n\n  /**\n   *  Check if the UA is a Chrome browser.\n   *\n   *\n   *  @return float|NaN Version number (if match) or NaN.\n   */\n  chrome : function() {\n    return _populate() || _chrome;\n  },\n\n\n  /**\n   *  Check if the user is running Windows.\n   *\n   *  @return bool `true' if the user's OS is Windows.\n   */\n  windows: function() {\n    return _populate() || _windows;\n  },\n\n\n  /**\n   *  Check if the user is running Mac OS X.\n   *\n   *  @return float|bool   Returns a float if a version number is detected,\n   *                       otherwise true/false.\n   */\n  osx: function() {\n    return _populate() || _osx;\n  },\n\n  /**\n   * Check if the user is running Linux.\n   *\n   * @return bool `true' if the user's OS is some flavor of Linux.\n   */\n  linux: function() {\n    return _populate() || _linux;\n  },\n\n  /**\n   * Check if the user is running on an iPhone or iPod platform.\n   *\n   * @return bool `true' if the user is running some flavor of the\n   *    iPhone OS.\n   */\n  iphone: function() {\n    return _populate() || _iphone;\n  },\n\n  mobile: function() {\n    return _populate() || (_iphone || _ipad || _android || _mobile);\n  },\n\n  nativeApp: function() {\n    // webviews inside of the native apps\n    return _populate() || _native;\n  },\n\n  android: function() {\n    return _populate() || _android;\n  },\n\n  ipad: function() {\n    return _populate() || _ipad;\n  }\n};\n\nmodule.exports = UserAgent_DEPRECATED;\n\n\n//# sourceURL=webpack:///./node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js?");

/***/ }),

/***/ "./node_modules/normalize-wheel/src/isEventSupported.js":
/*!**************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/isEventSupported.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright 2013-2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule isEventSupported\n */\n\n\n\nvar ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ \"./node_modules/normalize-wheel/src/ExecutionEnvironment.js\");\n\nvar useHasFeature;\nif (ExecutionEnvironment.canUseDOM) {\n  useHasFeature =\n    document.implementation &&\n    document.implementation.hasFeature &&\n    // always returns true in newer browsers as per the standard.\n    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature\n    document.implementation.hasFeature('', '') !== true;\n}\n\n/**\n * Checks if an event is supported in the current execution environment.\n *\n * NOTE: This will not work correctly for non-generic events such as `change`,\n * `reset`, `load`, `error`, and `select`.\n *\n * Borrows from Modernizr.\n *\n * @param {string} eventNameSuffix Event name, e.g. \"click\".\n * @param {?boolean} capture Check if the capture phase is supported.\n * @return {boolean} True if the event is supported.\n * @internal\n * @license Modernizr 3.0.0pre (Custom Build) | MIT\n */\nfunction isEventSupported(eventNameSuffix, capture) {\n  if (!ExecutionEnvironment.canUseDOM ||\n      capture && !('addEventListener' in document)) {\n    return false;\n  }\n\n  var eventName = 'on' + eventNameSuffix;\n  var isSupported = eventName in document;\n\n  if (!isSupported) {\n    var element = document.createElement('div');\n    element.setAttribute(eventName, 'return;');\n    isSupported = typeof element[eventName] === 'function';\n  }\n\n  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {\n    // This is the only way to test support for the `wheel` event in IE9+.\n    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');\n  }\n\n  return isSupported;\n}\n\nmodule.exports = isEventSupported;\n\n\n//# sourceURL=webpack:///./node_modules/normalize-wheel/src/isEventSupported.js?");

/***/ }),

/***/ "./node_modules/normalize-wheel/src/normalizeWheel.js":
/*!************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/normalizeWheel.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * Copyright (c) 2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n *\n * @providesModule normalizeWheel\n * @typechecks\n */\n\n\n\nvar UserAgent_DEPRECATED = __webpack_require__(/*! ./UserAgent_DEPRECATED */ \"./node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js\");\n\nvar isEventSupported = __webpack_require__(/*! ./isEventSupported */ \"./node_modules/normalize-wheel/src/isEventSupported.js\");\n\n\n// Reasonable defaults\nvar PIXEL_STEP  = 10;\nvar LINE_HEIGHT = 40;\nvar PAGE_HEIGHT = 800;\n\n/**\n * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is\n * complicated, thus this doc is long and (hopefully) detailed enough to answer\n * your questions.\n *\n * If you need to react to the mouse wheel in a predictable way, this code is\n * like your bestest friend. * hugs *\n *\n * As of today, there are 4 DOM event types you can listen to:\n *\n *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)\n *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari\n *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!\n *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003\n *\n * So what to do?  The is the best:\n *\n *   normalizeWheel.getEventType();\n *\n * In your event callback, use this code to get sane interpretation of the\n * deltas.  This code will return an object with properties:\n *\n *   spinX   -- normalized spin speed (use for zoom) - x plane\n *   spinY   -- \" - y plane\n *   pixelX  -- normalized distance (to pixels) - x plane\n *   pixelY  -- \" - y plane\n *\n * Wheel values are provided by the browser assuming you are using the wheel to\n * scroll a web page by a number of lines or pixels (or pages).  Values can vary\n * significantly on different platforms and browsers, forgetting that you can\n * scroll at different speeds.  Some devices (like trackpads) emit more events\n * at smaller increments with fine granularity, and some emit massive jumps with\n * linear speed or acceleration.\n *\n * This code does its best to normalize the deltas for you:\n *\n *   - spin is trying to normalize how far the wheel was spun (or trackpad\n *     dragged).  This is super useful for zoom support where you want to\n *     throw away the chunky scroll steps on the PC and make those equal to\n *     the slow and smooth tiny steps on the Mac. Key data: This code tries to\n *     resolve a single slow step on a wheel to 1.\n *\n *   - pixel is normalizing the desired scroll delta in pixel units.  You'll\n *     get the crazy differences between browsers, but at least it'll be in\n *     pixels!\n *\n *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This\n *     should translate to positive value zooming IN, negative zooming OUT.\n *     This matches the newer 'wheel' event.\n *\n * Why are there spinX, spinY (or pixels)?\n *\n *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn\n *     with a mouse.  It results in side-scrolling in the browser by default.\n *\n *   - spinY is what you expect -- it's the classic axis of a mouse wheel.\n *\n *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and\n *     probably is by browsers in conjunction with fancy 3D controllers .. but\n *     you know.\n *\n * Implementation info:\n *\n * Examples of 'wheel' event if you scroll slowly (down) by one step with an\n * average mouse:\n *\n *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)\n *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)\n *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)\n *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)\n *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)\n *\n * On the trackpad:\n *\n *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)\n *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)\n *\n * On other/older browsers.. it's more complicated as there can be multiple and\n * also missing delta values.\n *\n * The 'wheel' event is more standard:\n *\n * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents\n *\n * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and\n * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain\n * backward compatibility with older events.  Those other values help us\n * better normalize spin speed.  Example of what the browsers provide:\n *\n *                          | event.wheelDelta | event.detail\n *        ------------------+------------------+--------------\n *          Safari v5/OS X  |       -120       |       0\n *          Safari v5/Win7  |       -120       |       0\n *         Chrome v17/OS X  |       -120       |       0\n *         Chrome v17/Win7  |       -120       |       0\n *                IE9/Win7  |       -120       |   undefined\n *         Firefox v4/OS X  |     undefined    |       1\n *         Firefox v4/Win7  |     undefined    |       3\n *\n */\nfunction normalizeWheel(/*object*/ event) /*object*/ {\n  var sX = 0, sY = 0,       // spinX, spinY\n      pX = 0, pY = 0;       // pixelX, pixelY\n\n  // Legacy\n  if ('detail'      in event) { sY = event.detail; }\n  if ('wheelDelta'  in event) { sY = -event.wheelDelta / 120; }\n  if ('wheelDeltaY' in event) { sY = -event.wheelDeltaY / 120; }\n  if ('wheelDeltaX' in event) { sX = -event.wheelDeltaX / 120; }\n\n  // side scrolling on FF with DOMMouseScroll\n  if ( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {\n    sX = sY;\n    sY = 0;\n  }\n\n  pX = sX * PIXEL_STEP;\n  pY = sY * PIXEL_STEP;\n\n  if ('deltaY' in event) { pY = event.deltaY; }\n  if ('deltaX' in event) { pX = event.deltaX; }\n\n  if ((pX || pY) && event.deltaMode) {\n    if (event.deltaMode == 1) {          // delta in LINE units\n      pX *= LINE_HEIGHT;\n      pY *= LINE_HEIGHT;\n    } else {                             // delta in PAGE units\n      pX *= PAGE_HEIGHT;\n      pY *= PAGE_HEIGHT;\n    }\n  }\n\n  // Fall-back if spin cannot be determined\n  if (pX && !sX) { sX = (pX < 1) ? -1 : 1; }\n  if (pY && !sY) { sY = (pY < 1) ? -1 : 1; }\n\n  return { spinX  : sX,\n           spinY  : sY,\n           pixelX : pX,\n           pixelY : pY };\n}\n\n\n/**\n * The best combination if you prefer spinX + spinY normalization.  It favors\n * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with\n * 'wheel' event, making spin speed determination impossible.\n */\nnormalizeWheel.getEventType = function() /*string*/ {\n  return (UserAgent_DEPRECATED.firefox())\n           ? 'DOMMouseScroll'\n           : (isEventSupported('wheel'))\n               ? 'wheel'\n               : 'mousewheel';\n};\n\nmodule.exports = normalizeWheel;\n\n\n//# sourceURL=webpack:///./node_modules/normalize-wheel/src/normalizeWheel.js?");

/***/ }),

/***/ "./node_modules/throttle-debounce/index.js":
/*!*************************************************!*\
  !*** ./node_modules/throttle-debounce/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var throttle = __webpack_require__(/*! ./throttle */ \"./node_modules/throttle-debounce/throttle.js\");\nvar debounce = __webpack_require__(/*! ./debounce */ \"./node_modules/throttle-debounce/debounce.js\");\n\nmodule.exports = {\n\tthrottle: throttle,\n\tdebounce: debounce\n};\n\n\n//# sourceURL=webpack:///./node_modules/throttle-debounce/index.js?");

/***/ })

}]);