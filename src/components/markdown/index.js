import Markdown from "./src/Markdown.vue";

Markdown.install = Vue => {
  Vue.component(Markdown.name, Markdown);
};

export default Markdown;
