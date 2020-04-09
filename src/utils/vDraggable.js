import Vue from "vue";
import draggable from "./draggable";

Vue.directive('draggable', {
  inserted: function (el, binding) {
    //console.log('directive', el, el.parentNode, binding)
    if (binding.value !== false) {
      draggable(el.parentNode, el);
    }
  }
})


