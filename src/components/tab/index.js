import Tab from "./src/Tab";

Tab.install = Vue => {
  Vue.component(Tab.name, Tab);
};

export default Tab;
