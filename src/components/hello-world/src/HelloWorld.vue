<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<style lang="less">
  .hello{
    color:@font-color;   /** 默认皮肤  src\theme\default.less */ 
    font-size: @font-size-base;  /** 通用基础字体  src\theme\common.less */
  }
</style>

<script>
export default {
  name: 'HelloWorld',  // 需要加上 V 前缀，统一使用大写驼峰形式
  data() {
    return {
      msg: 'Hello World',
    };
  },
};
</script>

