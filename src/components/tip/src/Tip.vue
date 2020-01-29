<template>
  <span
    class="k-tip-box"
    @mouseover="showTip($event)"
    @mousemove="showTip($event)"
    @mouseout="hideTip"
  >
    <tooltip
      :content="content"
      :placement="position"
      :disabled="!textOverFlow"
      :popper-class="popperClass"
    >
      <p
        :style="`max-width:${textWidth}px`"
        class="k-tip-text-box"
      >
        <slot>{{ text }}</slot>
      </p>
    </tooltip>
  </span>
</template>
<style lang="scss">
.k-tip-box {
  height: 100%;
  width: 100%;
  &:hover{
    cursor: pointer;
  }
  .k-tip-text-box {
    @include overflow-text(1);
  }
}
</style>
<script>
// import { Tooltip } from "element-ui";
import Tooltip from 'element-ui/lib/tooltip'
// require('element-ui/lib/theme-chalk/tooltip.css')

export default {
  name: "KTip",
  components: {
    Tooltip,
  },
  props: {
    popperClass:{
      type:String,
      default(){
        return "";
      },
    },
    text: {
      type: String,
      default() {
        return "文本";
      },
    },
    content: {
      type: String,
      default() {
        return "提示内容";
      },
    },
    position: {
      type: String,
      default() {
        return "top";
      },
    },
    textWidth: {
      type: Number,
      default() {
        return 110;
      },
    },
  },
  data() {
    return {
      textOverFlow: false,
    };
  },
  methods: {
    showTip(_e) {
      let { scrollHeight, scrollWidth, clientHeight, clientWidth } = _e.target;
      //如果文本溢出
      if (scrollHeight > clientHeight || scrollWidth > clientWidth) {

        this.textOverFlow = true;
      } else {
        this.textOverFlow = false;
      }
    },
    hideTip() {
      this.textOverFlow = false;
    },
  },
};
</script>
