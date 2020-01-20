<template>
  <div
    class="drop-container hover-pointer"
    @mouseover="$emit('toggleDrop',true)"
    @mouseleave="$emit('toggleDrop',false)"
  >
    <slot name="text">
      文本
    </slot>
    <transition name="fade-drop">
      <div
        v-show="show"
        :class="`drop-content drop-${position}`"
      >
        <div class="drop-box">
          <slot name="drop" />
        </div>
      </div>
    </transition>
    <slot
      v-show="showCount"
      name="count"
    >
      <span class="drop-count" />
    </slot>
  </div>
</template>


<style lang="scss">
.fade-drop-enter,
.fade-drop-leave-to {
  opacity: 0;
  transform: translate3d(0, 20px, 0);
}
.fade-drop-enter-active,
.fade-drop-leave-active {
  transition: all 0.3s ease;
}
.drop-container {
  position: relative;
  display: inline-block;
  margin-right: 10px;
  line-height: 1;
  .drop-content {
    position: absolute;
    z-index: 999;
    top: 24px;
    width: 370px;
  }
  .drop-left{
    left:0;
  }
  .drop-right{
    right:0;
  }
  .drop-center{
    transform: translate3d(-50%,0,0);
  }
  .drop-count {
    padding: 0 10px;
    border-radius: 10px;
    margin-left: 4px;
  }
}
</style>


<script>
export default {
  name: "DropBox",
  model: {
    prop: "show",
    event: "toggleDrop"
  },
  props: {
    showCount: {
      type: Boolean,
      default() {
        return true;
      }
    },
    show: {
      type: Boolean,
      default() {
        return false;
      }
    },
    position: {
      type: String,
      default() {
        return "right";
      }
    }
  },
};
</script>

