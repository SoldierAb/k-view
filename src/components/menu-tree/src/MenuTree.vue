<template>
  <nav :class="`k-menu-tree-container`">
    <el-submenu
      v-if="dataSource[childrenKey] && dataSource[childrenKey].length"
      :index="dataSource[valueKey]"
    >
      <template slot="title">
        <div
          v-if="dataSource.icon"
          :class="`menu-icon`"
        >
          <span v-bind="dataSource.props">{{ dataSource[labelKey] }}</span>
        </div>
        <span
          v-else
          v-bind="dataSource.props"
        >{{ dataSource[labelKey] }}</span>
      </template>
      <el-menu-item-group>
        <k-menu-tree
          v-for="child in dataSource[childrenKey]"
          :key="child[valueKey]"
          :label-key="labelKey"
          :value-key="valueKey"
          :data-source="child"
        />
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item
      v-show="showLink"
      v-else
      :class="`${navActive ? 'nav-active' : ''}`"
      :index="dataSource[valueKey]"
    >
      <router-link
        slot="title"
        :class="`${navActive ? 'nav-link-active' : ''}`"
        :to="`/${dataSource[valueKey]}`"
      >
        <div
          v-if="dataSource.icon"
          :class="`
          menu-icon 
          `"
        >
          <span v-bind="dataSource.props">{{ dataSource[labelKey] }}</span>
        </div>
        <span
          v-else
          v-bind="dataSource.props"
        >{{ dataSource[labelKey] }}</span>
      </router-link>
    </el-menu-item>
  </nav>
</template>

<style lang="scss">
.k-menu-tree-container {
  .el-submenu__title {
    color: $font-color-white;
  }
  .nav-active {
    background: $bg-menu-light !important;
  }
  .nav-link-active {
    color: $font-color-white;
  }
  .menu-icon {
    background-repeat: no-repeat;
    background-position-y: center;
    padding-left: 30px;
    height: 100%;
  }
}
</style>

<script>
export default {
  name: "KMenuTree",
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
    },
    childrenKey: {
      type: String,
      default() {
        return "children";
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    navActive() {
      const menuItemValue = this.dataSource[this.valueKey],
        currentRoute = this.$route.path;
      return currentRoute && currentRoute.includes(menuItemValue);
    },
    showLink() {
      return this.dataSource.show === false ? false : true;
    }
  }
};
</script>
