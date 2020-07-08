<template>
  <div class="k-view-container">
    <header class="k-view-header">
      <span class="k-view-title">K-View</span>
      <span class="lang-bar">
        <el-select
          v-model="tab"
          size="mini"
          style="width:100px;"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </span>
    </header>
    <section class="k-view-content">
      <section class="section-nav">
        <k-side-nav
          :data-source="menuData"
          label-key="name"
          value-key="pathKey"
          router
          :default-active="$route.path"
          :default-openeds="['components']"
        />
      </section>
      <section class="section-box">
        <router-view v-if="isRouteAlive">
          未挂载任何组件
        </router-view>
      </section>
    </section>
    <footer class="k-view-footer">
      @copyright 2020
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import en from "../src/locale/lang/en";
import zhCN from "../src/locale/lang/zh-CN";
import { use } from "../src/locale";
import { langRouteMap as menuDataMap } from "./router"
const {vizier,...comps} = require('../components.json')
const [,curlang] = location.hash.split('/')
const langPkg = {
  en,
  "zh-CN": zhCN
};
use(langPkg[curlang]);

export default {
  data() {
    const menuData = menuDataMap["zh-CN"];
    let markKey = 0;
    return {
      markKey,
      menuData,
      currentValue: "",
      options: [
        {
          label: "中文",
          value: "zh-CN"
        },
        {
          label: "En",
          value: "en"
        }
      ],
      tab: curlang,
      isRouteAlive: true
    };
  },
  watch: {
    currentValue(path) {
      this.$router.push(`${path}`);
    },
    tab(val) {
      this.toggleLang(val);
    }
  },
  methods: {
    toggleExpand(node) {
      console.log("toggleExpand", node);
    },
    selectChange(node) {
      console.log("selectChange", node);
    },
    toggleLang(lang) {
      use(langPkg[lang]);
      this.menuData = menuDataMap[lang];
      const [,,compPath] = this.$route.path.split('/')
      this.$router.push(`/${lang}/${compPath||''}`)
    },
    reloadView(){
      this.$set(this, "isRouteAlive", false);
      this.$nextTick(() => {
        this.$set(this, "isRouteAlive", true);
      });
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.k-view-container {
  $k-view-header-footer-height: 60px;
  height: 100%;
  background: $bg-base;
  @mixin k-view-box {
    height: $k-view-header-footer-height;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #f5f5f5;
    position: fixed;
    left: 0;
    z-index: 900;
    background: $bg-base;
  }
  .k-view-header {
    @include k-view-box;
    top: 0;
    .k-view-title {
      font-size: 24px;
    }
    .lang-bar {
      position: absolute;
      right: 20px;
    }
  }
  .k-view-footer {
    @include k-view-box;
    bottom: 0;
  }
  .k-view-content {
    padding: $k-view-header-footer-height 10px;
    position: relative;
    height: calc(100% - #{2 * $k-view-header-footer-height});
    max-width: 1400px;
    width: 75%;
    margin: 0 auto;
    .section-nav {
      width: 300px;
      position: fixed;
      height: 100%;
      background: white;
    }
    .section-box {
      padding: 20px 20px 20px 330px;
      border: 1px solid $border-color-light;
      height: 100%;
      overflow: auto;
      .content {
        h1,
        h2,
        h3,
        h4 {
          font-weight: 300;
          font-family: $font-family;
        }
      }
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
      .markdown-table table {
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

  .router-tag {
    margin: 10px;
    border-radius: 10px;
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
}
</style>


