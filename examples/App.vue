<template>
  <div class="container">
    <section class="section-nav">
      <k-side-nav
        :data-source="menuData"
        label-key="name"
        value-key="value"
        router
        :default-active="$route.path"
      >
        <!-- <template v-slot:leaf="{data}">
            <span v-bind="data.props"> {{ data[`name`] }}</span>
        </template> -->
      </k-side-nav>
    </section>
    <section class="section-box">
      <router-view>未挂载任何组件</router-view>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import routes from "./routes";
import SideNav from '../src/components/side-nav'

Vue.use(SideNav);

export default {

  data() {
    return {
      menuData: [
        {
          name:"quick-start",
          value:"",
        },
        {
          name:'components',
          children:routes,
        }
      ],
      currentValue:''
    };
  },
  watch:{
    currentValue(val){
      this.$router.push(`/${val}`);
    }
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
};
</script>

<style lang="scss">


body{
  margin:0;
  padding:0;
}
.container {
  width: 100%;
  height: 100%;
  background: $bg-base;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .fl {
    float: left;
  }
  .clearfix {
    content: "";
    display: block;
    overflow: hidden;
    clear: both;
  }
  .clearfix:after {
    zoom: 1;
  }
  ul,
  li {
    list-style: none;
  }
  .router-tag {
    margin: 10px;
    border-radius: 10px;
  }
  .section-nav{
    @include demo-box;
    width:300px;
    position: fixed;
    left:0;
    top:0;
    height: 100%;
    background: white;
  }
  .section-box {
    padding: 20px 20px 20px 330px;
    border: 1px solid $border-color-light;
    .content {
      h1,
      h2,
      h3,
      h4 {
        font-weight: 300;
        font-family: $font-family;
      }
    }
  }

  .pre-code {
    font-family: "Lucida Console", Consolas, Monaco, "Andale Mono",
      "Ubuntu Mono", monospace;
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

  .section-box {
    color: #0d1a26;
    @mixin md-h {
      font-family: Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI",
        "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue",
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
      font-variant: tabular-nums;
      margin: 1.6em 0 0.6em;
      font-weight: 500;
      clear: both;
    }
    h1 {
      @include md-h;
      font-size: $font-size-h1;
    }
    h2 {
      @include md-h;
      font-size: $font-size-h2;
    }
    h3 {
      @include md-h;
      font-size: $font-size-h3;
    }
    .markdown-table table{
      border-collapse: collapse;
      border-spacing: 0;
      empty-cells: show;
      border: 1px solid #ebedf0;
      width: 100%;
      margin: 8px 0 16px;
      th {
        border: 1px solid #ebedf0;
        padding: 14px 16px;
        text-align: left;
        white-space: nowrap;
        color: #5c6b77;
        font-weight: 500;
        background: rgba(0, 0, 0, 0.02);
      }
      tr {
        border-bottom: 1px solid #e8e8e8;
      }
      td {
        padding: 14px 16px;
        border-width: 1px 0;
        border-color: #e8e8e8;
      }
      td:first-child {
        font-weight: 500;
        width: 20%;
        color: #003a8c;
      }
    }
    .hljs {
      background: white;
    }
  }
}
</style>


