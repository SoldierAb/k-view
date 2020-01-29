import Tip from "./src/Tip";
require('element-ui/lib/theme-chalk/tooltip.css')

Tip.install = Vue => {
  Vue.component(Tip.name, Tip);
};

export default Tip;
