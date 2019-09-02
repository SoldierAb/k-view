<template>
  <nav :class="`menu-tree-container`">
    <el-submenu
      :index="dataSource[valueKey]"
      v-if="dataSource.children&&dataSource.children.length"
    >
      <template slot="title">
        <span>{{dataSource[labelKey]}}</span>
      </template>
      <el-menu-item-group>
        <menu-tree v-for="child in dataSource.children" :data-source="child" :key="child.name"></menu-tree>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item
      :class="`${navActive?'nav-active':''}`"
      :index="dataSource[valueKey]"
      v-show="showLink"
      v-else
    >
      <router-link
        slot="title"
        :class="`${navActive?'nav-link-active':''}`"
        :to="`/${dataSource[valueKey]}`"
      >{{dataSource[labelKey]}}</router-link>
    </el-menu-item>
  </nav>
</template>

<style lang="scss">
.menu-tree-container {
  // padding-left: 10px;
  .nav-active {
    background: $bg-base !important;
  }
  .nav-link-active {
    color: $color-act;
  }
}
</style>


<script>
export default {
  name: "MenuTree",
  props: {
    dataSource: {
      type: Object,
      default() {
        return {};
      }
    },
    valueKey: {
      type: String,
      default() {
        return "name";
      }
    },
    labelKey: {
      type: String,
      default() {
        return "title";
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    navActive() {
      const menuItemValue = this.dataSource[this.valueKey],
            currentRoute = this.$route.name;
      return  currentRoute&&currentRoute.includes(menuItemValue);
    },
    showLink() {
      return this.dataSource.show===false ? false : true;
    }
  }
};
</script>

