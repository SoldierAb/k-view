<template>
  <div class="container">
    <nav>
      <ul class="clearfix">
        <li class="router-tag fl">
          <router-link to="/tree">
            Tree
          </router-link>
        </li>
        <li class="router-tag fl">
          <router-link to="/tip">
            Tip
          </router-link>
        </li>
      </ul>
    </nav>
    <section class="section-box">
      <router-view>未挂载任何组件</router-view>
    </section>
    <k-button type="primary">
      按钮
    </k-button>
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  background: $bg-base;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .fl{
    float: left;
  }
  .clearfix{
    content: "";
    display: block;
    overflow: hidden;
    clear: both;
  }
  .clearfix:after{
    zoom:1;
  }
  ul,
  li {
    list-style: none;
  }
  .router-tag{
    margin:10px;
    border-radius:10px;
    background: $bg-gray;
  }
  .section-box{
    padding:20px;
    border:1px solid $border-color-light;
  }
}
</style>


<script>
import {Button} from 'element-ui'
export default {
  components:{
    KButton:Button
  },
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
};
</script>
