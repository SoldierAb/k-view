<template>
  <div class="el-cell-box">
    <slot />
  </div>
</template>

<style lang="less">
.el-cell-box{
    position: relative;
    word-wrap: normal;
    vertical-align: middle;
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: normal;
    word-break: break-all;
    line-height: 23px;
    padding:0 10px;
}
</style>


<script>
export default {
    name:'ElCell'
}
</script>


