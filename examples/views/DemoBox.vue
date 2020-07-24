<template>
  <div class="demo-box-container">
    <div class="demo-instance">
      <slot name="instance" />
    </div>
    <div class="demo-content">
      <slot name="code-box" />
    </div>
  </div>
</template>

<style lang='scss'>
@mixin demo-box-hover {
  &:hover {
    box-shadow: 0 0 10px #ccc;
  }
}

@mixin demo-box {
  @include demo-box-hover;
  padding: 14px 20px;
  border: 1px solid #ebedf0;
  border-radius: 2px;
  width: 100%;
  position: relative;
  margin: 0 0 16px;
  transition: all 0.2s;
}
.demo-box-container {
  height: auto;
  .clipboard-btn {
    font-size: 20px;
    position: absolute;
    right: 20px;
    @include hover-pointer;
  }
  .demo-box-hover {
    &:hover {
      box-shadow: 0 0 10px #ccc;
    }
  }
  .demo-instance {
    @include demo-box;
  }
  .demo-content {
    @include demo-box;
  }
}
</style>

<script>
export default {
  name: "DemoBox",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>