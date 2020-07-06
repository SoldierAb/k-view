<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<style lang="less">
  .hello{
    color:red;
  }
</style>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Hello Jest',
    };
  },
};
</script>

