<template>
  <transition
    tag="div"
    name="vue-fade-pop"
  >
    <div class="vue-fade-pop-container triangle-up">
      <div class="vue-fade-pop-box">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
$bgColor: white;
$bgGrey: #dcdcdc;
$borderColor:#409eff;
$triangleSize:6px;
.vue-fade-pop-container {
  position: fixed;
  z-index: 9999;
  margin-top: #{$triangleSize + 2px} !important;
  border-radius: 4px;
  background: $bgColor;
  .vue-fade-pop-box{
    border: 1px solid $borderColor;
    position:relative;
    overflow: hidden;
    border-radius: 4px;
  }
}
.vue-fade-pop-enter-active,
.vue-fade-pop-leave-active {
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  opacity: 1;
}
.vue-fade-pop-enter,
.vue-fade-pop-leave-to {
  transform: translate3d(0, 10px, 0);
  opacity: 0;
}

.triangle-up:before,
.triangle-up:after {
  content: " ";
  border-bottom: $triangleSize solid $borderColor;
  border-left: $triangleSize solid transparent;
  border-right: $triangleSize solid transparent;
  position: absolute;
  top: -$triangleSize;
  left: 20px;
}
.triangle-up:after {
  border-bottom: $triangleSize solid $bgColor;
  top:#{1-$triangleSize };
}

</style>


<script>
export default {
  name: "FadePop",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
