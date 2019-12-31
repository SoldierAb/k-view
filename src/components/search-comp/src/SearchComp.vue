<template>
  <div
    v-if="comps&&comps.length"
    class="search-comp-container"
  >
    <span
      v-for="(item,index) in comps"
      :key="item+index"
      class="span-box"
    >
      <component
        :is="`El${item.comp}`"
        v-if="item.bind"
        v-model="searchObj[item.bind]"
        v-bind="item.props"
        @click="clickAct(item)"
      >
        <async-options
          v-if="item.comp==='Select'"
          :url="item.url"
        />
      </component>
      <component
        :is="`El${item.comp}`"
        v-else
        v-bind="item.props"
        @click="clickAct(item)"
      >
        <el-text v-if="item.label">{{ item.label }}</el-text>
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
