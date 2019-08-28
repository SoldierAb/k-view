<template>
<div class="treeselect-container" v-click-outside="onClickOutside">
  <Input read-only clearable :up="showTree" :value="labelValue" @focus="showTree = true" @clear="rebootTree" />
  <fade-pop v-show="showTree">
    <div class="treeselect-body" :style="`height:${popHeight}px`">
      <tree v-model="modelValue" :show-tip="false" :only-leaf="onlyLeaf" :img-source="imgSource" :multiple="multiple" :show-checkbox="showCheckbox" :value-key="valueKey" :label-key="labelKey" :data-source="dataSource" @on-toggle-expand="handleExpand"></tree>
    </div>
  </fade-pop>
</div>
</template>

<style lang="scss">
.treeselect-container {
    position: relative;
    display: inline-block;
}
</style>

<script>
import Tree from '../../tree'
import FadePop from '../../fade-pop'
import Input from '../../input'
import clickOutside from '../../../utils/clickOutside'

export default {

  mixins: [Tree],

  name: "TreeSelect",

  props: {
    popHeight: {
      type: Number,
      default: 240,
    }
  },

  components: {
    Tree,
    Input,
    FadePop
  },

  directives: {
    clickOutside
  },

  data() {
    return {
      modelValue: this.value,
    };
  },
  computed: {
    labelValue() {
      const {
        _label
      } = this.getCurrentNodes();
      return _label;
    }
  },

  watch: {
    modelValue(val) {
      this.$emit('input', val);
    },
    value() {
      this.modelValue = this.value;
    },

  },

  methods: {
    onClickOutside() {
      this.showTree = false;
    },
  },

};
</script>
