<template lang="html">
  <span class="k-icon">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="`#icon-${type}`"></use>
    </svg>
  </span>
</template>

<style lang="scss">
.k-icon{
  padding:2px 4px;
  .icon {
    width: 15px;
    height: 15px;
    vertical-align: -2px;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>

<script>
import './iconfont';

export default {
  props:{
    type:{
      type:String,
    },
    color:{
      type:String,
    },
    size:{
      type:String,
    },
  },
}
</script>
