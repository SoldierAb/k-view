import drag from "../../utils/drag";
import FadePop from "./src/FadePop";

FadePop.install = Vue => {
  Vue.directive("draggable", {
    inserted: function(el, binding) {
      if (binding.value !== false) {
        drag(el.parentNode.parentNode, el);
      }
    },
  });
  Vue.component(FadePop.name, FadePop);
};

export default FadePop;
