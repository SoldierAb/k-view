<template>
  <nav class="side-nav-container">
    <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" ref="sideNav">
      <menu-tree v-for="item in activeSideMenu" :key="item.name" :data-source="item"></menu-tree>
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
    background: $bg-nav-light-blue;
  }
  .el-menu-item:hover{
    background: $bg-base;
  }
  .el-menu-item,
  .el-submenu__title:hover {
    background: $bg-nav-light-blue;
  }
  a {
    color: $font-color-base;
    &:hover {
      color: $color-nav-active-left;
    }
  }
}
</style>


<script>
import MenuTree from "./MenuTree.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    MenuTree
  },
  name: "SideNav",
  props: {
    navData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      menuData: []
    };
  },
  computed: {
    // ...mapGetters(["activeSideMenu"])
    activeMenu() {
      return this.$store.state.activeMenu;
    },
    activeSideMenu() {
      return this.$store.getters.activeSideMenu;
    }
  },
  watch: {
    activeSideMenu(val) {
      if (val && val.length) this.initMenu();
    },
    activeMenu(val, oldVal) {
      if (oldVal && oldVal.length) {
        this.menuData = [];
        localStorage.removeItem("sideNav");
      }
    }
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
      // console.log(key, keyPath);
      this.pushMenu(key);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
      this.popMenu(key);
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

