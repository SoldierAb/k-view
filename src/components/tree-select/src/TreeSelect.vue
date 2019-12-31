<template>
  <span class="tree-select-container">
    <drop-box
      v-model="show"
      :show-count="false"
      position="left"
    >
      <el-input
        slot="text"
        v-model="selectKeys"
        clearable
        readonly
        :style="`width:${width}px`"
      />
      <div
        slot="drop"
        class="select-body"
      >
        <el-tree
          ref="tree"
          :data="data"
          :node-key="defaultProps.nodeKey"
          :props="defaultProps"
          default-expand-all
          show-checkbox
          highlight-current
          @check="checkNodes"
        />
      </div>
    </drop-box>
  </span>
</template>


<style lang="scss">
.tree-select-container {
  .drop-box {
    border: 1px solid #dcdfe6;
    background: $bg-base;
  }
}
</style>

<style lang="less">
.tree-select-container {
  .select-body {
    max-height: 300px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .drop-content {
    max-height: 300px;
  }
  .drop-box {
    border-radius: 10px;
    padding: 6px;
  }
}
</style>


<script>
import DropBox from "./DropBox.vue";

export default {
  components: { DropBox },
  model: {
    prop: "modelKeys",
    event: "changeKeys"
  },
  props: {
    modelKeys: {
      type: String,
      default() {
        return "";
      }
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    defaultProps: {
      type: Object,
      default() {
        return {
          label: "label",
          children: "children",
          nodeKey: "id"
        };
      }
    },
    width: {
      type: Number,
      default() {
        return 300;
      }
    }
  },
  data() {
    return {
      show: false,
      selectKeys: this.modelKeys
    };
  },
  watch: {
    selectKeys: "changeInput"
  },
  methods: {
    changeInput(val) {
      this.$emit("changeKeys", val);
    },
    checkNodes(node, checkedTree) {
      const { checkedNodes } = checkedTree,
        selectNodes = checkedNodes.filter(item => !item.children),
        selectKeys = selectNodes.map(item => item[this.defaultProps.label]);
      this.$set(this, "selectKeys", selectKeys.join("、"));
    }
  }
};
</script>