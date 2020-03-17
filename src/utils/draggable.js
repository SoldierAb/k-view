// !(function(moduleName, definition) {
//   // Whether to expose Draggable as an AMD module or to the global object.
//   // eslint-disable-next-line
//   if (typeof define === 'function' && typeof define.amd === 'object') define(definition);
//   else if (typeof module === "object") module.exports = definition();
//   else this[moduleName] = definition();
// })("draggable", function definition() {
//   let addEventListener = (function(w) {
//       if (w.addEventListener) {
//         return function(element, eventName, handler) {
//           element.addEventListener(eventName, handler, false);
//         };
//       } else if (w.attachEvent) {
//         return function(element, eventName, handler) {
//           element.attachEvent("on" + eventName, handler);
//         };
//       } else {
//         return function(element, eventName, handler) {
//           element["on" + eventName] = handler;
//         };
//       }
//     })(window),
//     removeEventListener = (function(w) {
//       if (w.removeEventListener) {
//         return function(element, eventName, handler) {
//           element.removeEventListener(eventName, handler, false);
//         };
//       } else if (w.detachEvent) {
//         return function(element, eventName, handler) {
//           element.detachEvent("on" + eventName, handler);
//         };
//       } else {
//         return function(element, eventName) {
//           element["on" + eventName] = null;
//         };
//       }
//     })(window),
//     toCamelCase = function(s) {
//       return s.replace(/([a-z])/g, function($1) {
//         return $1.toUpperCase().replace("-", "");
//       });
//     },
//     getStyle = function(el, styleProp) {
//       if (typeof el["currentStyle"] === "object") {
//         getStyle = function(el, styleProp) {
//           let s = "";
//           s = el.currentStyle[toCamelCase(styleProp)];
//           return s;
//         };
//       } else if (window.getComputedStyle) {
//         getStyle = function(el, styleProp) {
//           let s = "";
//           s = document.defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
//           return s;
//         };
//       }
//       return getStyle(el, styleProp);
//     },
//     currentElement,
//     fairlyHighZIndex = "999",
//     whichButton = function(event) {
//       if (event.which == null) {
//         whichButton = function(event) {
//           let button = event.button < 2 ? "LEFT" : event.button === 4 ? "MIDDLE" : "RIGHT";
//           return button;
//         };
//       } else {
//         whichButton = function(event) {
//           let button = event.which < 2 ? "LEFT" : event.which === 2 ? "MIDDLE" : "RIGHT";
//           return button;
//         };
//       }
//       return whichButton(event);
//     };

//   function draggable(element, handle) {
//     handle = handle || element;
//     let index = parseInt(getStyle(element, "z-index"));
//     fairlyHighZIndex = isNaN(index) ? "999" : index;
//     setPositionType(element);
//     setDraggableListeners(element);
//     addEventListener(handle, "mousedown", function(event) {
//       whichButton(event) === "LEFT" && startDragging(event, element);
//     });
//   }

//   function setPositionType(element) {
//     element.style.position = "absolute";
//   }

//   function setDraggableListeners(element) {
//     element.draggableListeners = {
//       start: [],
//       drag: [],
//       stop: [],
//     };
//     element.whenDragStarts = addListener(element, "start");
//     element.whenDragging = addListener(element, "drag");
//     element.whenDragStops = addListener(element, "stop");
//   }

//   function setStyle(el, strCss) {
//     function endsWith(str, suffix) {
//       let l = str.length - suffix.length;
//       return l >= 0 && str.indexOf(suffix, l) === l;
//     }
//     let sty = el.style,
//       cssText = sty.cssText;
//     if (!endsWith(cssText, ";")) {
//       cssText += ";";
//     }
//     sty.cssText = cssText + strCss;
//   }

//   function startDragging(event, element) {
//     currentElement && sendToBack(currentElement);
//     currentElement = bringToFront(element);
//     let initialPosition = getInitialPosition(currentElement);
//     let css =
//       "position:absolute;margin-left:0;margin-top:0;left:" +
//       inPixels(initialPosition.left) +
//       ";top:" +
//       inPixels(initialPosition.top) +
//       ";";
//     setStyle(currentElement, css);
//     currentElement.lastXPosition = event.clientX;
//     currentElement.lastYPosition = event.clientY;

//     let okToGoOn = triggerEvent("start", {
//       x: initialPosition.left,
//       y: initialPosition.top,
//       mouseEvent: event,
//     });
//     if (!okToGoOn) return;

//     addDocumentListeners();
//   }

//   function addListener(element, type) {
//     return function(listener) {
//       element.draggableListeners[type].push(listener);
//     };
//   }

//   function triggerEvent(type, args) {
//     let result = true;
//     let listeners = currentElement.draggableListeners[type];
//     for (let i = listeners.length - 1; i >= 0; i--) {
//       if (listeners[i](args) === false) result = false;
//     }
//     return result;
//   }

//   function sendToBack(element) {
//     let decreasedZIndex = fairlyHighZIndex - 1;
//     element.style["z-index"] = decreasedZIndex;
//     element.style["zIndex"] = decreasedZIndex;
//   }

//   function bringToFront(element) {
//     element.style["z-index"] = fairlyHighZIndex;
//     element.style["zIndex"] = fairlyHighZIndex;
//     return element;
//   }

//   function addDocumentListeners() {
//     addEventListener(document, "selectstart", cancelDocumentSelection);
//     addEventListener(document, "mousemove", repositionElement);
//     addEventListener(document, "mouseup", removeDocumentListeners);
//   }

//   function getInitialPosition(element) {
//     let rect = {};
//     if (getStyle(element, "position") === "absolute") {
//       rect = { top: element.offsetTop, left: element.offsetLeft };
//     } else {
//       rect = element.getBoundingClientRect();
//     }
//     return {
//       top: rect.top,
//       left: rect.left,
//     };
//   }

//   function inPixels(value) {
//     return value + "px";
//   }

//   function cancelDocumentSelection(event) {
//     event.preventDefault && event.preventDefault();
//     event.stopPropagation && event.stopPropagation();
//     event.returnValue = false;
//     return false;
//   }

//   function repositionElement(event) {
//     event.preventDefault && event.preventDefault();
//     event.returnValue = false;
//     let style = currentElement.style;
//     let elementXPosition = parseInt(style.left, 10);
//     let elementYPosition = parseInt(style.top, 10);
//     let offsetX = event.clientX - currentElement.lastXPosition;
//     let offsetY = event.clientY - currentElement.lastYPosition;

//     let elementNewXPosition = elementXPosition + (event.clientX - currentElement.lastXPosition);
//     let elementNewYPosition = elementYPosition + (event.clientY - currentElement.lastYPosition);

//     style.left = inPixels(elementNewXPosition);
//     style.top = inPixels(elementNewYPosition);

//     currentElement.lastXPosition = event.clientX;
//     currentElement.lastYPosition = event.clientY;

//     triggerEvent("drag", {
//       x: elementNewXPosition,
//       y: elementNewYPosition,
//       mouseEvent: event,
//       offsetX: offsetX,
//       offsetY: offsetY,
//     });
//   }

//   function removeDocumentListeners(event) {
//     removeEventListener(document, "selectstart", cancelDocumentSelection);
//     removeEventListener(document, "mousemove", repositionElement);
//     removeEventListener(document, "mouseup", removeDocumentListeners);

//     let left = parseInt(currentElement.style.left, 10);
//     let top = parseInt(currentElement.style.top, 10);
//     triggerEvent("stop", { x: left, y: top, mouseEvent: event });
//   }

//   return draggable;
// });


export default  function definition() {
  let addEventListener = (function(w) {
      if (w.addEventListener) {
        return function(element, eventName, handler) {
          element.addEventListener(eventName, handler, false);
        };
      } else if (w.attachEvent) {
        return function(element, eventName, handler) {
          element.attachEvent("on" + eventName, handler);
        };
      } else {
        return function(element, eventName, handler) {
          element["on" + eventName] = handler;
        };
      }
    })(window),
    removeEventListener = (function(w) {
      if (w.removeEventListener) {
        return function(element, eventName, handler) {
          element.removeEventListener(eventName, handler, false);
        };
      } else if (w.detachEvent) {
        return function(element, eventName, handler) {
          element.detachEvent("on" + eventName, handler);
        };
      } else {
        return function(element, eventName) {
          element["on" + eventName] = null;
        };
      }
    })(window),
    toCamelCase = function(s) {
      return s.replace(/([a-z])/g, function($1) {
        return $1.toUpperCase().replace("-", "");
      });
    },
    getStyle = function(el, styleProp) {
      if (typeof el["currentStyle"] === "object") {
        getStyle = function(el, styleProp) {
          let s = "";
          s = el.currentStyle[toCamelCase(styleProp)];
          return s;
        };
      } else if (window.getComputedStyle) {
        getStyle = function(el, styleProp) {
          let s = "";
          s = document.defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
          return s;
        };
      }
      return getStyle(el, styleProp);
    },
    currentElement,
    fairlyHighZIndex = "999",
    whichButton = function(event) {
      if (event.which == null) {
        whichButton = function(event) {
          let button = event.button < 2 ? "LEFT" : event.button === 4 ? "MIDDLE" : "RIGHT";
          return button;
        };
      } else {
        whichButton = function(event) {
          let button = event.which < 2 ? "LEFT" : event.which === 2 ? "MIDDLE" : "RIGHT";
          return button;
        };
      }
      return whichButton(event);
    };

  function draggable(element, handle) {
    handle = handle || element;
    let index = parseInt(getStyle(element, "z-index"));
    fairlyHighZIndex = isNaN(index) ? "999" : index;
    setPositionType(element);
    setDraggableListeners(element);
    addEventListener(handle, "mousedown", function(event) {
      whichButton(event) === "LEFT" && startDragging(event, element);
    });
  }

  function setPositionType(element) {
    element.style.position = "absolute";
  }

  function setDraggableListeners(element) {
    element.draggableListeners = {
      start: [],
      drag: [],
      stop: [],
    };
    element.whenDragStarts = addListener(element, "start");
    element.whenDragging = addListener(element, "drag");
    element.whenDragStops = addListener(element, "stop");
  }

  function setStyle(el, strCss) {
    function endsWith(str, suffix) {
      let l = str.length - suffix.length;
      return l >= 0 && str.indexOf(suffix, l) === l;
    }
    let sty = el.style,
      cssText = sty.cssText;
    if (!endsWith(cssText, ";")) {
      cssText += ";";
    }
    sty.cssText = cssText + strCss;
  }

  function startDragging(event, element) {
    currentElement && sendToBack(currentElement);
    currentElement = bringToFront(element);
    let initialPosition = getInitialPosition(currentElement);
    let css =
      "position:absolute;margin-left:0;margin-top:0;left:" +
      inPixels(initialPosition.left) +
      ";top:" +
      inPixels(initialPosition.top) +
      ";";
    setStyle(currentElement, css);
    currentElement.lastXPosition = event.clientX;
    currentElement.lastYPosition = event.clientY;

    let okToGoOn = triggerEvent("start", {
      x: initialPosition.left,
      y: initialPosition.top,
      mouseEvent: event,
    });
    if (!okToGoOn) return;

    addDocumentListeners();
  }

  function addListener(element, type) {
    return function(listener) {
      element.draggableListeners[type].push(listener);
    };
  }

  function triggerEvent(type, args) {
    let result = true;
    let listeners = currentElement.draggableListeners[type];
    for (let i = listeners.length - 1; i >= 0; i--) {
      if (listeners[i](args) === false) result = false;
    }
    return result;
  }

  function sendToBack(element) {
    let decreasedZIndex = fairlyHighZIndex - 1;
    element.style["z-index"] = decreasedZIndex;
    element.style["zIndex"] = decreasedZIndex;
  }

  function bringToFront(element) {
    element.style["z-index"] = fairlyHighZIndex;
    element.style["zIndex"] = fairlyHighZIndex;
    return element;
  }

  function addDocumentListeners() {
    addEventListener(document, "selectstart", cancelDocumentSelection);
    addEventListener(document, "mousemove", repositionElement);
    addEventListener(document, "mouseup", removeDocumentListeners);
  }

  function getInitialPosition(element) {
    let rect = {};
    if (getStyle(element, "position") === "absolute") {
      rect = { top: element.offsetTop, left: element.offsetLeft };
    } else {
      rect = element.getBoundingClientRect();
    }
    return {
      top: rect.top,
      left: rect.left,
    };
  }

  function inPixels(value) {
    return value + "px";
  }

  function cancelDocumentSelection(event) {
    event.preventDefault && event.preventDefault();
    event.stopPropagation && event.stopPropagation();
    event.returnValue = false;
    return false;
  }

  function repositionElement(event) {
    event.preventDefault && event.preventDefault();
    event.returnValue = false;
    let style = currentElement.style;
    let elementXPosition = parseInt(style.left, 10);
    let elementYPosition = parseInt(style.top, 10);
    let offsetX = event.clientX - currentElement.lastXPosition;
    let offsetY = event.clientY - currentElement.lastYPosition;

    let elementNewXPosition = elementXPosition + (event.clientX - currentElement.lastXPosition);
    let elementNewYPosition = elementYPosition + (event.clientY - currentElement.lastYPosition);

    style.left = inPixels(elementNewXPosition);
    style.top = inPixels(elementNewYPosition);

    currentElement.lastXPosition = event.clientX;
    currentElement.lastYPosition = event.clientY;

    triggerEvent("drag", {
      x: elementNewXPosition,
      y: elementNewYPosition,
      mouseEvent: event,
      offsetX: offsetX,
      offsetY: offsetY,
    });
  }

  function removeDocumentListeners(event) {
    removeEventListener(document, "selectstart", cancelDocumentSelection);
    removeEventListener(document, "mousemove", repositionElement);
    removeEventListener(document, "mouseup", removeDocumentListeners);

    let left = parseInt(currentElement.style.left, 10);
    let top = parseInt(currentElement.style.top, 10);
    triggerEvent("stop", { x: left, y: top, mouseEvent: event });
  }

  return draggable;
}
