<template>
  <div
    class="tree-container"
    :style="`width:${width}px;`"
  >
    <div class="tree-body">
      <tree-node
        v-for="(item ,index) in stateTree"
        :key="index"
        :img-source="imgSource"
        :node-data="item"
        :value-key="valueKey"
        :label-key="labelKey"
        :show-checkbox="showCheckbox"
        :show-tip="showTip"
        :position="position"
      >
        <slot
          v-slot:custom-node="{nodeData,children}"
          name="custom-node"
        > 
          <img
            v-if="imgSource.node&&imgSource.leaf"
            width="18"
            height="18"
            class="label-icon"
            :src="children&&children.length?imgSource.node:imgSource.leaf"
            alt
          >
          <icon
            v-else
            :type="`${children&&children.length?'file-b-':'file'}`"
          />
          <label>{{ nodeData[labelKey] }}</label>
        </slot>
      </tree-node>
    </div>
  </div>
</template>

<style lang="scss">
  .tree-container {
  $paddingLeft: 20px;
  $lineLeft: 30px;
  position: relative;
  color: $font-color;
  font-family: $font-family;
  position: relative;
  display: inline-block;
  background: $bg-base;
  text-align: left;
  height: 100%;

  .tip-box {
    vertical-align: bottom;
  }

  .tree-body {
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    height: 100%;
    padding: 6px $paddingLeft 10px 0;
    min-width: 180px;
  }

  .tree-node-container {
    position: relative;

    .node-label {
      border-radius: 4px;
      letter-spacing: 1px;
      padding: 2px;
      margin: 2px 0;
      // @include overflow-text(1)
    }

    .node-label-active {
      color: $border-color;
      background: $hover-bg;
    }

    .node-hover {
      &:hover {
        background: $hover-bg;
      }
    }

    .label-icon {
      vertical-align: text-bottom;
    }

    li,
    ul {
      list-style: none;
    }

    ul {
      padding-left: $paddingLeft;
      width: 100%;
      height: auto;

      li {
        line-height: 24px;
        font-size: 14px;

        span {
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }

  .tree-arrow {
    width: 16px;
    overflow: hidden;
    text-align: center;

    &:hover {
      transform: scale(1.2);
      -webkit-transform: scale(1.2);
    }

    img {
      vertical-align: text-bottom;
    }
  }

  .tree-checkbox {
    vertical-align: middle;
    display: inline-block;
    padding-left:6px;
  }

  .arrow-icon {
    display: inline-block;
    font-family: Ionicons;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    text-rendering: auto;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    vertical-align: text-top;
    transition: all 0.2s ease-in-out;
    content: "\F11F";
  }

  .arrow-down {
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
  }

  .point-cursor {
    cursor: pointer;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-corner {
    background-color: $bg-grey;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px $scroll-track;
    background: $scroll-track;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    box-shadow: inset 0 0 6px $bg-grey;
    background: $bg-grey !important;
  }
}
</style>

<script>
import TreeNode from "./TreeNode.vue"
import Emitter from "../../../utils/emitter"
import getType from "./util/type"

export default {
  name: "KTree",

  components: { TreeNode },

  mixins: [Emitter],

  props: {
    defaultExpandAll:{
      type:Boolean,
      default(){
        return true;
      }
    },
    width:{
      type:Number,
      default(){
        return 260;
      },
    },
     position:{
      type:String,
      default(){
        return "right"
      }
    },
    value: {
      type:String,
      default(){
        return ``
      }
    },
    dataSource: {
      type: Array,
      default() {
        return [];
      }
    },
    showTip:{
      type:Boolean,
      default:true,
    },
    imgSource:{
      type:Object,
      default(){
        return {}
      },
    },
    onlyLeaf: {
      //是否只保留叶子节点数据
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "select"
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    labelKey: {
      type: String,
      default: "label"
    },
    valueKey: {
      type: String,
      default: "value"
    },
    childrenKey: {
      type: String,
      default: "children"
    }
  },

  data() {
    return {
      stateTree: this.dataSource,
      showTree: this.type !== "select",
      selectedNodes: [],
      checkedNodes: [],
    };
  },

  watch: {
    value:'setNodesPoperty',

    dataSource: {
      handler() {
        this.initDataSource();
      }
    },
  },

  created() {
    this.$on("on-select", this.handleSelect);
    this.$on("on-check", this.handleCheck);
    this.$on("toggle-expand", this.handleExpand);
    this.initDataSource();
  },

  methods: {
    /**
    * @description 数据初始化
    */
    initDataSource(){
      if (getType(this.dataSource, "Array") && this.dataSource.length) {
        this.stateTree = this.dataSource;
        this.setFlatState();
      }
    },

    /**
     * @description 缓存平行数据,建立父子关系
     */
    setFlatState() {
      let flatState = [],
        markKey = 0,
        { childrenKey,showCheckbox,multiple,defaultExpandAll } = this;

      const toFlateJson = (node, parentNode) => {

        node.nodeKey = markKey++;

        // if(getType(node.expand,'undefined')){
        //   }
          this.$set(node,'expand',defaultExpandAll?defaultExpandAll:Boolean(node.expand));

        flatState[node.nodeKey] = { node: node, nodeKey: node.nodeKey }; //nodeKey与索引对应

        node.hasParent = !getType(parentNode,'Undefined');

        if (parentNode) {

          flatState[node.nodeKey].parentKey = parentNode.nodeKey; //设置当前节点父节点标识
          flatState[parentNode.nodeKey][childrenKey].push(node.nodeKey); //父节点填充子节点
        }

        if (node[childrenKey] && node[childrenKey].length) {
          //当前节点子集操作
          flatState[node.nodeKey][childrenKey] = [];
          node[childrenKey].forEach(child => toFlateJson(child, node));
        } else {
          node[`isLeafNode`] = true; //叶子节点标记
        }
      };

      this.dataSource.forEach(rootNode => toFlateJson(rootNode));
      this.flatState = flatState;

      this.setNodesPoperty();

    },

    /**
    * @description 双向绑定设置节点对应属性状态
    */
    setNodesPoperty(){


      const {_value,_label} = this.getCurrentNodes();

      if(this.value===_value) return false;

      if(this.value&&this.value.length){

        this.clearAllNodes();

        if(!this.showCheckbox){

          this.value.split(',').forEach(valItem=>{
            this.setNodeBySearchValue(valItem, "selected", true);
          })
          this.selectedNodes = this.getSelectedNodes();

        }else{

          this.value.split(',').forEach(valItem=>{
            const findNode = this.setNodeBySearchValue(valItem, "checked", true);
            if(findNode){
              const checkChange = {
                checked:true,
                nodeKey:findNode.nodeKey
              };
              this.updateCheckedNodesPoperty(checkChange);
            }
          })

          this.checkedNodes = this.getCheckedNodes();

        }
        this.setModelValue();
      }

    },

    /**
    * @description 清除当前选中的所有数据
    */
    clearAllNodes(){
     const curStateKey = this.showCheckbox?'checked':'selected';
     this.setAllNodesState(curStateKey,false);
     this[`${curStateKey}Nodes`]=[];
    },

    /**
    * @description 清空所有选中状态
    */
    rebootTree(){
      this.clearAllNodes();
      this.setModelValue();
    },

    /**
    * @description 查找节点
    */
    findNodeByKeyValue(key,value){
      const { flatState } = this;
      if(flatState){
        const findNode = flatState.find(flatNode => {
          return flatNode.node[key]===value
        });
        return findNode;
      }
    },

    /**
    * @description 设置节点属性值
    */
    setNodeBySearchValue(searchValue, setKey, setVal) {
      const findNode = this.findNodeByKeyValue(this.valueKey,searchValue);
      if (findNode){
        this.$set(findNode.node, setKey, setVal);
        return findNode;
      }
    },

    /**
     * @description 获取当前选择的节点数据
     */
    getCurrentNodes() {
      const {
          selectedNodes,
          showCheckbox,
          onlyLeaf,
          checkedNodes,
          valueKey,
          labelKey,
          value,
          flatState
        } = this,
        leafNodes = checkedNodes.filter(item => item.isLeafNode),
        _curNodes = showCheckbox
          ? onlyLeaf
            ? leafNodes
            : checkedNodes
          : selectedNodes,
        _label = _curNodes.map(node => node[labelKey]).join(","),
        _value = valueKey
          ? _curNodes.map(node => node[valueKey]).join(",")
          : _curNodes;


      return { _value, _label , _curNodes };
    },


    /**
     * @description 当前点击的节点
     */
    handleExpand(nodeItem) {
      // this.$set(node,'expand',!Boolean(node[`expand`]));
      this.$emit("on-toggle-expand", nodeItem);
    },

    /**
     * @description 复选框事件
     */
    handleCheck(checkItem) {

      this.updateCheckedNodesPoperty(checkItem);

      this.setModelValue();

    },

    /**
    * @description 更新选中后的节点状态
    */
    updateCheckedNodesPoperty({ checked, nodeKey }){
      const { node } = this.flatState[nodeKey];

      this.$set(node, "checked", checked);

      this.updateParentNodes(nodeKey);

      this.updateChildrenNodes(node, this.childrenKey, checked);

      this.checkedNodes = this.getCheckedNodes();

    },


    /**
     * @description 更新父节点
     */
    updateParentNodes(nodeKey) {
      const { parentKey, node } = this.flatState[nodeKey];

      if (getType(parentKey, "Number")) {
        const parentNode = this.flatState[parentKey].node,
          { childrenKey } = this;

        const allAdjacentNodesChecked = parentNode[childrenKey].every(
          item => item.checked
        );

        this.$set(parentNode, "checked", allAdjacentNodesChecked);

        this.updateParentNodes(parentKey);
      }
    },

    /**
     * @description 更新子节点
     */
    updateChildrenNodes(node, childrenKey, checked) {
      if (node[childrenKey] && node[childrenKey].length)
        node[childrenKey].forEach(child => {
          this.$set(child, "checked", checked);
          this.updateChildrenNodes(child, childrenKey, checked);
        });
    },

    /**
     * @description 节点选择
     */
    handleSelect({ nodeKey }) {

      const { node,parentKey } = this.flatState[nodeKey];

      //如果是单选
      if (!this.multiple) {
        this.setAllNodesState('selected',false);
      }

      this.$set(node, "selected", !node["selected"]);

      this.selectedNodes = this.getSelectedNodes();

      this.setModelValue();

    },


    /**
    * @description 触发v-model绑定值变化
    */
    setModelValue(){

      const {_value,_label,_curNodes} =this.getCurrentNodes(),
       {showCheckbox} = this;

      if(this.flatState){
        this.$emit("input", _value);       //当前选择触发双向绑定数据变化
        // this.$emit("input", _curNodes);       //当前选择触发双向绑定数据变化
        showCheckbox ? this.$emit("on-check-change",this.getCheckedNodes()) : this.$emit("on-select-change", this.getSelectedNodes());
      }
    },

    /**
     * @description 更新节点属性
    */
    setAllNodesState(key,value){
        this.flatState.filter(item => item.node[key]).map(item => item.node).forEach(leaf => {
            this.$set(leaf, key, value);
        });
    },

    /**
     * @description 获取当前选中的所有节点
     */
    getSelectedNodes() {
      return this.flatState.filter(item => item.node.selected).map(item => item.node);
    },

    /**
     * @description 获取当前选中的节点
     */
    getCheckedNodes() {
      return this.flatState.filter(item => item.node.checked).map(item => item.node);
    },

  }
};
</script>
