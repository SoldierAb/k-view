<template>
  <span class="select-search-container">
    <k-input
      v-model="value"
      class="input-with-select"
      :size="size"
      clearable
    >
      <k-select
        slot="prepend"
        v-model="key"
        placeholder="请选择"
        :style="`width:${preWidth}px`"
      >
        <k-option
          v-for="item in options"
          :key="item.key"
          :label="item.label"
          :value="item.key"
        />
      </k-select>
    </k-input>
  </span>
</template>

<style lang="scss">
.select-search-container {
  .el-input-group__prepend {
    width: 100px;
  }
}
</style>

<script>
import { Select, Option, Input } from "element-ui";

export default {
  name: "KSelectSearch",
  components: {
    KSelect: Select,
    KOption: Option,
    KInput: Input,
  },
  model: {
    prop: "searchObj",
    event: "change",
  },
  props: {
    size:{
      type:String,
      default(){
        return ""
      }
    },
    preWidth:{
      type:Number,
      default(){
        return 120
      }
    },
    searchObj: {
      type: Object,
      default() {
        return {};
      },
    },
    options: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      value: "",
      key: "",
    };
  },
  computed: {},
  watch: {
    key: "emitChange",
    value: "emitChange",
  },
  created() {},
  mounted() {},
  methods: {
    emitChange() {
      let { key, value } = this,
        obj = {};
      if (key) {
        obj[key] = value;
      }else{
        obj=value;
      }
      this.$emit("change", obj);
    },
  },
};
</script>
