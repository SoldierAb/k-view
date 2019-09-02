<template>
  <el-radio-group v-model="currentCondition">
    <el-radio-button
      v-for="item in conditions"
      :label="item.label"
      :key="item.label"
      @click="updateCondition(item)"
    ></el-radio-button>
  </el-radio-group>
</template>

<style lang="less">
  .el-radio-button__inner{
    padding:8px 20px;
  }
</style>

<script>
export default {
  name: "radio-search",
  components: {},
  model: {
    prop: "modelObj",
    event: "radioChange"
  },
  props: {
    modelObj: {
      type: Object
    }
  },
  data() {
    const {uid:username} = this.$store.state.userInfo;
    return {
      currentCondition: "全部",
      conditions: [
        {
          label: "全部",
          key: "all",
          value: ""
        },
        {
          label: "指派给我",
          key: "to",
          value: username
        },
        {
          label: "有我参与",
          key: "relation",
          value: username
        },
        {
          label: "已确认",
          key: "status",
          value: 2
        },
        {
          label: "已解决",
          key: "status",
          value: 3
        },
        {
          label: "已延期",
          key: "status",
          value: 4
        },
        {
          label: "已关闭",
          key: "status",
          value: 5
        }
      ]
    };
  },
  computed: {},
  created() {
  },
  mounted() {

  },
  watch: {
    currentCondition: "updateCondition"
  },
  methods: {
    updateCondition(label) {
      const { modelObj, conditions } = this,
        item = conditions.find(it => it.label === label);
      conditions.forEach(con => {
        if (con.key && con.key !== "all") {
          modelObj[con.key] = "";
        }
      });
      if (item.key && item.key !== "all") modelObj[item.key] = item.value;
      console.log(modelObj);
      this.$emit("radioChange", modelObj);
    }
  }
};
</script>