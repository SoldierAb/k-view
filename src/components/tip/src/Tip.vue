<template>
  <span
    class="k-tip-box"
    :style="`width:${textWidth}px`"
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
        class="k-tip-text-box"
      >
        <slot>{{ text }}</slot>
      </p>
    </tooltip>
  </span>
</template>
<style lang="scss">
.k-tip-box {
  display: inline-block;
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
import Tooltip from 'element-ui/lib/tooltip';
require('element-ui/lib/theme-chalk/tooltip.css');

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
        return 120;
      },
    },
    trigger:{
      type:String,
      default(){
        return "overflow";  // "hover"
      },
    },

  },
  data() {
    return {
      textOverFlow: this.trigger==='always',
    };
  },
  methods: {
    showTip(_e) {
      const showMap  = new Map()
        .set("overflow",()=>{
          let { scrollHeight, scrollWidth, clientHeight, clientWidth } = _e.target;
          //如果文本溢出
          if (scrollHeight > clientHeight || scrollWidth > clientWidth) {
    
            this.textOverFlow = true;
          } else {
            this.textOverFlow = false;
          }
        })
        .set("hover",()=>{
          this.textOverFlow = true;
        });
      showMap.get(this.trigger)();
    },
    hideTip() {
      this.textOverFlow = false;
    },
  },
};
</script>
