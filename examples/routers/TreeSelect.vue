<template>
  <div class="tree-test-container">
    <div>{{list}}</div>
    <tree-select
    multiple
      v-model="testValue"
      :value-key="valueKey"
      :label-key="labelKey"
      :data-source="list"
      @on-toggle-expand="toggleExpand"
      @on-select-change="selectChange"
      @on-check-change="checkChange"
    ></tree-select>
  </div>
</template>

<style lang="scss">
.tree-test-container {
  height: 100%;
  overflow: auto;
}
</style>

<script>
import {hs} from "../data/tree";

export default {
  data() {
    return {
      list:[hs],
      labelKey: "name",
      valueKey: "id",
      testValue: "341525100000000",
    };
  },
  watch: {
    testValue() {
      console.log("treeselect testValue", this.testValue);
    },
  },

  mounted() {
    setTimeout(()=>{
      // this.testValue = "341525104000000,341525100000000";
    },2000)
  },

  methods: {
    toggleExpand(node){
      console.log('toggleExpand',node);
    },
    selectChange(node){
      console.log('selectChange-',node);
    },
    checkChange(nodes){
      console.log('checkChange',nodes);
    },
  }
};
</script>
