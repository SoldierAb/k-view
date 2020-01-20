/**
 * @author SoldierAb
 */

import LoadingComp from "./src/Loading.vue";

let LoadingInstance = null;

const Loading = (Vue, opts) => {
  if (!opts) opts = { background: "rgba(0,0,0,0.6)", color: "#4b9cdb" };
  let { background, color } = opts;
  if (!background) background = "rgba(0,0,0,0.6)";
  if (!color) color = "#4b9cdb";
  Vue.prototype.$loading = (showLoading, callback) => {
    if (!LoadingInstance) {
      const LoadingTpl = Vue.extend(LoadingComp);
      LoadingInstance = new LoadingTpl();
      LoadingInstance.background = background;
      LoadingInstance.color = color;
      const tpl = LoadingInstance.$mount().$el;
      document.body.appendChild(tpl);
    }
    LoadingInstance.show = showLoading;
    if (!callback) callback = new Function();
    callback();
  };
  ["show", "hide"].forEach(item => {
    return (Vue.prototype.$loading[`${item}`] = callback =>
      Vue.prototype.$loading(item === "show", callback));
  });
};

export default Loading;
