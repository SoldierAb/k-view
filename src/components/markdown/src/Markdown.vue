<template>
  <div class="k-markdown-container">
    <mavon-editor
      ref="mavoneditor"
      v-model="content"
      :style="
        `height:1000px;z-index:888;${
          mode === 'editor' ? '' : 'width: 200%;transform: translate3d(-50%,0,0);'
        }`
      "
      :toolbars="markdownOption"
      @imgAdd="imgAdd"
      @save="saveMd"
    />
  </div>
</template>

<style lang="scss">
.k-markdown-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  .v-note-wrapper .v-note-op.shadow {
    box-shadow: none !important;
    background: #f5f5f5;
  }
}
</style>

<script>
import Vue from "vue";
import MavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

Vue.use(MavonEditor);

export default {
  name: "KMarkdown",
  model: {
    prop: "value",
    event: "markdown",
  },
  props: {
    mode: {
      type: String,
      default() {
        return "editor";
      },
    },
    value: {
      type: String,
      default() {
        return "";
      },
    },
    markdownOption: {
      type: Object,
      default() {
        return {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          mark: true, // 标记
          superscript: true, // 上角标
          quote: true, // 引用
          ol: true, // 有序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          help: true, // 帮助
          code: true, // code
          subfield: true, // 是否需要分栏
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          undo: true, // 上一步
          trash: true, // 清空
          save: true, // 保存（触发events中的save事件）
          navigation: true,
          boxShadow: false,
          editable: false,
          toolbarsFlag: false,
          defaultOpen: "preview",
          toolbars: {
            navigation: true, // 导航目录
          },
        };
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    content: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("markdown", val);
      },
    },
  },
  methods: {
    imgAdd(filename, file) {
      this.$emit("img-add", filename, file);
    },
    saveMd(str, renderStr) {
      if (this.mode === "editor") this.$emit("onsave", str, renderStr);
    },
  },
};
</script>
