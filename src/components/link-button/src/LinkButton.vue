<template>
  <div class="link-button-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        v-for="item in dataSource"
        :key="item.path"
        :to="{path:item.path}"
      >
        {{ item.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang='less'>
.link-button-container {
  height: 40px;
}
</style>

<script>
export default {
  name: "LinkButton",
  components: {},
  props: {
    dataSource: {
      type: Array,
      default() {
        return [];
      }
    }
  },
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