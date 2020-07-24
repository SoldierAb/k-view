<template>
  <div class="tree-node-container">
    <ul :style="`padding-left:${children&&children.length?20:40}px`">
      <li>
        <span
          v-if="children&&children.length"
          class="tree-arrow point-cursor"
          @click.stop="toggleExpand"
        >
          <img
            v-if="imgSource.right&&imgSource.down"
            width="18"
            height="18"
            :src="imgSource[arrowType]"
            alt
          >
          <icon
            v-else
            :type="`caret-${arrowType}`"
          />
        </span>
        <span
          v-else
          class="tree-arrow"
        />
        <div class="tree-checkbox">
          <checkbox 
            v-if="showCheckbox"
            :value="nodeData.checked"
            @change="handleCheck"
          />
        </div>
        <span
          :class="labelClasses"
          :style="`${showTip?'width:calc(100% - 40px)':''}`"
          @click.stop="handleSelect"
        >
          <slot
            name="tree-node"
            v-bind="{nodeData,children}"
          />
        </span>
     
        <k-tree-node
          v-for="(item,index) in children"
          v-show="nodeData.expand"
          :key="index"
          :show-tip="showTip"
          :img-source="imgSource"
          :show-checkbox="showCheckbox"
          :node-data="item"
          :label-key="labelKey"
          :position="position"
        >
          <template v-slot:tree-node="{nodeData:node,children:childs}">
            <slot 
              name="tree-node"
              v-bind="{nodeData:node,children:childs}"
            />
          </template>
        </k-tree-node>
      </li>
    </ul>
  </div>
</template>

<script>
import Emitter from "../../../utils/emitter";
import getType from "./util/type";
import {Checkbox} from "element-ui";
import Icon from "../../icon";


export default {
  name: "KTreeNode",
  components: { Checkbox ,Icon},
  mixins: [Emitter],
  props: {
    position:{
      type:String,
      default(){
        return "right"
      }
    },
    showTip: {
      type: Boolean
    },
    showLine: {
      type: Boolean,
      default: false
    },
    nodeData: {
      type: Object,
      default() {
        return {};
      }
    },
    imgSource: {
      type: Object,
      default() {
        return {};
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    labelKey: {
      type: String,
      default: "label"
    },
    childrenKey: {
      type: String,
      default: "children"
    }
  },
  data() {
    return {
      checked: getType(this.nodeData[`checked`], "Boolean") //初始化默认选中设置
        ? this.nodeData[`checked`]
        : false
    };
  },
  computed: {
    children() {
      return this.nodeData[this.childrenKey];
    },
    arrowType() {
      return this.nodeData.expand ? "down" : "right";
    },
    labelClasses() {
      return `node-label node-hover point-cursor  ${
        this.nodeData.selected && !this.showCheckbox ? "node-label-active" : ""
      }`;
    }
  },

  methods: {
    /**
     * @description 复选框事件
     */
    handleCheck() {
      const changes = {
        checked: !this.nodeData.checked,
        nodeKey: this.nodeData.nodeKey
      };
      this.dispatch("KTree", "on-check", changes);
    },

    /**
     * @description  单选
     */
    handleSelect() {
      if (!this.showCheckbox)
        this.dispatch("KTree", "on-select", this.nodeData);
    },

    /**
     * @description 展开收缩
     */
    toggleExpand(_e) {
      if (
        this.nodeData[this.childrenKey] &&
        this.nodeData[this.childrenKey].length
      ) {
        this.$set(this.nodeData, "expand", !this.nodeData["expand"]);
        this.dispatch("KTree", "toggle-expand", this.nodeData);
      }
    }
  }
};
</script>
