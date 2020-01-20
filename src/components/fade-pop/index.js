import draggable from "../../utils/draggable";

import FadePop from "./src/FadePop";

FadePop.install = Vue => {
  Vue.directive("draggable", {
    inserted: function(el, binding) {
      if (binding.value !== false) {
        draggable(el.parentNode, el);
      }
    },
  });
  Vue.component(FadePop.name, FadePop);
};

export default FadePop;
