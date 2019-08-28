<template>
  <div class="k-tree-node-container">
    <!-- <ul :style="`padding-left:${showLine&&children&&children.length?20:8}px`"> -->
    <ul :style="`padding-left:${children&&children.length?20:40}px`">
      <li>
        <span
          class="tree-arrow point-cursor"
          v-if="children&&children.length"
          @click.stop="toggleExpand"
        >
          <img
            width="18"
            height="18"
            :src="imgSource[arrowType]"
            alt
            v-if="imgSource.right&&imgSource.down"
          />
          <icon :type="`caret-${arrowType}`" v-else></icon>
        </span>
        <span class="tree-arrow" v-else></span>
        <span v-if="showCheckbox">
          <input
            class="tree-checkbox"
            type="checkbox"
            :checked="nodeData.checked"
            @change.stop="handleCheck"
          />
        </span>

        <span
          :class="labelClasses"
          @click.stop="handleSelect"
          :style="`${showTip?'width:calc(100% - 40px)':''}`"
        >
          <img
            width="18"
            height="18"
            class="label-icon"
            :src="children&&children.length?imgSource.node:imgSource.leaf"
            alt
            v-if="imgSource.node&&imgSource.leaf"
          />
          <icon :type="`${children&&children.length?'file-b-':'file'}`" v-else></icon>
          <label>{{nodeData[labelKey]}}</label>
        </span>
        <!-- <checkbox v-if="showCheckbox"  @change="handleCheck"  :checked="checked">
          <span
            :class="labelClasses"
            @click.stop="handleSelect"
            :style="`${showTip?'width:calc(100% - 40px)':''}`"
          >
            <img
              width="18"
              height="18"
              class="label-icon"
              :src="children&&children.length?imgSource.node:imgSource.leaf"
              alt
              v-if="imgSource.node&&imgSource.leaf"
            />
            <icon :type="`${children&&children.length?'file-b-':'file'}`" v-else></icon>
            <label>{{nodeData[labelKey]}}</label>
          </span>
        </checkbox> -->
        <k-tree-node
          v-show="nodeData.expand"
          v-for="(item,index) in children"
          :show-tip="showTip"
          :img-source="imgSource"
          :key="index"
          :show-checkbox="showCheckbox"
          :node-data="item"
          :label-key="labelKey"
        ></k-tree-node>
      </li>
    </ul>
  </div>
</template>

<script>
import Emitter from "../../../utils/emitter";
import TipBox from "../../tip-box";
import Icon from "../../icon";
import { Checkbox } from "element-ui";

export default {
  name: "KTreeNode",
  mixins: [Emitter],
  components: { TipBox, Icon, Checkbox },
  props: {
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
