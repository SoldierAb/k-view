<template lang="html">
  <span class="k-icon">
    <svg
      class="icon"
      aria-hidden="true"
    >
      <use :xlink:href="`#icon-${type}`" />
    </svg>
  </span>
</template>

<style lang="scss">
.k-icon {
  padding: 2px 4px !important;
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
  // eslint-disable-next-line vue/require-prop-types
  props:["type","color","size"],
}
</script>
