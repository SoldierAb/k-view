// import draggable from "../../utils/draggable";
import drag  from '../../utils/drag'
import FadePop from "./src/FadePop";

FadePop.install = Vue => {
  Vue.directive("draggable", {
    inserted: function(el, binding) {
      if (binding.value) {
        drag(el.parentNode);
      }
    },
  });
  Vue.component(FadePop.name, FadePop);
};

export default FadePop;
