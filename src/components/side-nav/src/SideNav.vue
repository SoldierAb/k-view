<template>
  <nav class="side-nav-container">
    <el-menu
      ref="sideNav"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <menu-tree
        v-for="item in dataSource"
        :key="item.name"
        :data-source="item"
        :label-key="labelKey"
        :value-key="valueKey"
      />
    </el-menu>
  </nav>
</template>

<style lang="less">
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
  }
}
</style>

<style lang="scss">
.side-nav-container {
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
</style>

<script>
import MenuTree from "./MenuTree.vue";

export default {
  name: "KSideNav",
  components: {
    MenuTree,
  },
  props: {
    valueKey: {
      type: String,
      default() {
        return "value";
      },
    },
    labelKey: {
      type: String,
      default() {
        return "label";
      },
    },
    dataSource: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      menuData: [],
    };
  },
  mounted() {
    let { dataSource } = this;
    if (Array.isArray(dataSource)) this.initMenu();
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
      this.pushMenu(key);
      this.$emit("open", key, keyPath);
    },
    handleClose(key, keyPath) {
      this.popMenu(key);
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
    },
  },
};
</script>
