<template>
  <nav
    class="side-nav-container"
    :style="`width:${width}px`"
  >
    <el-menu
      ref="sideNav"
      class="el-menu-vertical-demo"
      :default-active="defaultActive"
      :default-openeds="defaultOpeneds"
      :router="router"
      @open="handleOpen"
      @close="handleClose"
    >
      <menu-tree
        v-for="item in dataSource"
        :key="item.name"
        :data-source="item"
        :label-key="labelKey"
        :value-key="valueKey"
        :router="router"
      >
        <template v-slot:node="{data}">
          <slot
            name="node"
            v-bind="{data:data}"
          >
            <span v-bind="data.props"> {{ data[labelKey] }}</span>
          </slot>
        </template>
        <template v-slot:leaf="{data}">
          <slot
            name="leaf"
            v-bind="{data:data}"
          >
            <span v-bind="data.props"> {{ data[labelKey] }}</span>
          </slot>
        </template>
      </menu-tree>
    </el-menu>
  </nav>
</template>


<style lang="scss">
.side-nav-container {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  .el-submenu .el-menu-item,
  .el-menu-item,
  .el-submenu__title {
    height: 40px;
    line-height: 40px;
  }
  .el-menu-item-group__title {
    padding: 0;
  }
  .el-menu {
    border: none;
  }
  a {
    text-decoration: none;
    display: block;
    height: 100%;
    width: 100%;
    .el-menu {
      background: $bg-menu-dark;
    }
    .el-menu-item:hover {
      background: $bg-menu-light;
    }
    .el-menu-item,
    .el-submenu__title:hover {
      background: $bg-menu-dark;
    }
    a {
      color: $font-color-white;
      &:hover {
        color: $font-color-white;
      }
    }
  }
}
</style>

<script>
import { Menu } from "element-ui";
import MenuTree from "../../menu-tree";

export default {
  name: "KSideNav",
  components: {
    ElMenu:Menu,
    MenuTree
  },
  props: {
    router:{
      type:Boolean,
      default(){
        return false;
      }
    },
    defaultActive:{
      type:String,
      default(){
        return ""
      }
    },
    defaultOpeneds: {
      type:Array,
      default(){
        return []
      }
    },
    valueKey: {
      type: String,
      default() {
        return "value";
      }
    },
    labelKey: {
      type: String,
      default() {
        return "label";
      }
    },
    dataSource: {
      type: Array,
      default() {
        return [];
      }
    },
    width:{
      type:Number,
      default(){
        return 200;
      }
    },
  },
  data() {
    return {
      menuData: []
    };
  },
  mounted() {
    // let { dataSource } = this;
    // if (Array.isArray(dataSource)) this.initMenu();
  },
  methods: {
    initMenu() {
      this.$nextTick(() => {
        let sideNav = localStorage.getItem("sideNav");
        sideNav = JSON.parse(sideNav);
        if (Array.isArray(sideNav) && sideNav.length) {
          sideNav.forEach((item, index) => {
            ((item, index) => {
              setTimeout(() => {
                this.$refs.sideNav.open(item);
              }, index * 300);
            })(item, index);
          });
        }
      });
    },
    handleOpen(key, keyPath) {
      // this.pushMenu(key);
      this.$emit("open", key, keyPath);
    },
    handleClose(key, keyPath) {
      // this.popMenu(key);
      this.$emit("close", key, keyPath);
    },

    pushMenu(name) {
      this.menuData.push(name);
      let sideNav = localStorage.getItem("sideNav");
      sideNav = JSON.parse(sideNav);
      sideNav = Array.isArray(sideNav) && sideNav.length ? sideNav : [];
      this.menuData = Array.from(new Set([...this.menuData, ...sideNav]));
      localStorage.setItem("sideNav", JSON.stringify(this.menuData));
    },

    popMenu(name) {
      let sideNav = localStorage.getItem("sideNav");
      sideNav = JSON.parse(sideNav);
      sideNav = Array.isArray(sideNav) && sideNav.length ? sideNav : [];
      this.menuData = Array.from(new Set([...this.menuData, ...sideNav]));
      let index = this.menuData.findIndex(item => item === name);
      if (index !== -1) {
        this.menuData.splice(index, 1);
      }
      localStorage.setItem("sideNav", JSON.stringify(this.menuData));
    }
  }
};
</script>
