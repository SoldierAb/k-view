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
.demo-box-container {
    height: auto;
    .demo-instance{
        
    }
    .demo-content{

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
  methods: {}
};
</script>