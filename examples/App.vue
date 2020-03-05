<template>
  <div class="container">
    <nav>
      <ul class="clearfix">
        <li class="router-tag fl">
          <router-link to="/tree">
            KTree
          </router-link>
        </li>
        <li class="router-tag fl">
          <router-link to="/tip">
            KTip
          </router-link>
        </li>
      </ul>
    </nav>
    <section class="section-box">
      <router-view>未挂载任何组件</router-view>
    </section>
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
    .content{
      h1,h2,h3,h4{
        font-weight: 300;
        font-family: $font-family;
      }
    }
  }

  .pre-code{
    font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
}
</style>


<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
};
</script>
