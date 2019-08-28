<template>
  <div class="tree-test-container">
    <div>{{list}}</div>
    <tree
      multiple
      :value-key="valueKey"
      v-model="selectValue"
      :label-key="labelKey"
      :data-source="list"
      @on-toggle-expand="toggleExpand"
      @on-select-change="selectChange"
      @on-check-change="checkChange"
    ></tree>
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
      showCheckBox: false,
      labelKey: "name",
      valueKey: "id",
      selectValue: "341525100000000",
    };
  },
  watch: {
    selectValue() {
      console.log("--------selectValue", this.selectValue);
    },
  },
  mounted(){
    setTimeout(()=>{
      // this.list=[hs];
      // this.valueKey='id';
      // this.labelKey='name';
    },3000)
  },

  methods: {
    toggleExpand(node){
      console.log('toggleExpand',node);
    },
    selectChange(node){
      console.log('selectChange',node);
    },
    checkChange(nodes){
      console.log('checkChange',nodes);
    },
  }
};
</script>
