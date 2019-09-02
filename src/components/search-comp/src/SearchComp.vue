<template>
  <div class="search-comp-container" v-if="comps&&comps.length">
    <span v-for="(item,index) in comps" :key="item+index" class="span-box">
      <component
        v-if="item.bind"
        :is="`El${item.comp}`"
        v-model="searchObj[item.bind]"
        v-bind="item.props"
        @click="clickAct(item)"
      >
        <async-options v-if="item.comp==='Select'" :url="item.url"></async-options>
      </component>
      <component v-else :is="`El${item.comp}`" v-bind="item.props" @click="clickAct(item)">
        <el-text v-if="item.label">{{item.label}}</el-text>
      </component>
    </span>
  </div>
</template>

<style lang="less">
.search-comp-container {
  display:inline-block;
}
</style>


<script>
export default {
  name: "SearchComp",
  model: {
    prop: "searchObj",
    event: "search"
  },
  props: {
    comps: {
      type: Array,
      default() {
        return [];
      }
    },
    searchObj: {
      type: Object
    }
  },
  data() {
    return {};
  },
  methods: {
    clickAct({ event }) {
      if (event) {
        this.$emit("click-act", event);
      }
    }
    // clickSearch() {
    //   this.$emit("search", this.searchObj);
    // }
  }
};
</script>
