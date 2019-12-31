<template>
  <div class="ueditor-comp-container">
    <script
      id="ueditor-comp"
      name="content"
      style="width:1024px;height:500px;"
      type="text/plain"
    >
      {{ initContent }}
    </script>
  </div>
</template>

<style lang='less'>
.ueditor-comp-container {
  height: 100%;
}
</style>

<script>
export default {
  name: "UeditorComp",
  components: {},
  props: {
    config: {},
    initContent: {
      type: String,
      default() {
        return "初始化内容";
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  methods: {
    init() {
      const ue = UE.getEditor("ueditor-comp");
      ue.ready(()=>{
          //设置初始化文本
          const { initContent} = this;
          ue.setContent(initContent);
          this.$emit("init", ue);
      })
    }
  }
};
</script>