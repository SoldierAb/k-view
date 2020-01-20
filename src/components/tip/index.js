import Tip from "./src/Tip";

Tip.install = Vue => {
  Vue.component(Tip.name, Tip);
};

export default Tip;
