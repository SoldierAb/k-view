<template>
  <nav :class="`k-menu-tree-container`">
    <submenu
      v-if="dataSource[childrenKey] && dataSource[childrenKey].length"
      :index="dataSource[valueKey]"
    >
      <template slot="title">
        <slot
          name="node"
          v-bind="{data:dataSource}"
        >
          <span v-bind="dataSource.props">{{ dataSource[labelKey] }}</span>
        </slot>
      </template>
      <menu-item-group>
        <k-menu-tree
          v-for="child in dataSource[childrenKey]"
          :key="child[valueKey]"
          :label-key="labelKey"
          :value-key="valueKey"
          :data-source="child"
        >
          <template v-slot:node="{data}">
            <slot
              name="node"
              v-bind="{data:data}"
            >
              <span v-bind="data.props">{{ data[labelKey] }}</span>
            </slot>
          </template>
          <template v-slot:leaf="{data}">
            <slot
              name="leaf"
              v-bind="{data:data}"
            >
              <span v-bind="data.props">{{ data[labelKey] }}</span>
            </slot>
          </template>
        </k-menu-tree>
      </menu-item-group>
    </submenu>
    <menu-item
      v-show="showLink"
      v-else
      :class="`${navActive ? 'nav-active' : ''}`"
      :index="router?`/${dataSource[valueKey]}`:`${dataSource[valueKey]}`"
    >
      <template slot="title">
        <slot
          name="leaf"
          v-bind="{data:dataSource}"
        >
          <span v-bind="dataSource.props">{{ dataSource[labelKey] }}</span>
        </slot>
      </template>
    </menu-item>
  </nav>
</template>

<style lang="scss">
.k-menu-tree-container {
  .el-submenu__title {
    color: $font-color-base;
  }
  .nav-active {
    background: $bg-menu-light !important;
  }
  .nav-link-active {
    color: $font-color-base;
  }
}
</style>


<script>
import { Submenu, MenuItemGroup, MenuItem } from "element-ui";
export default {
  name: "KMenuTree",
  components: { Submenu, MenuItemGroup, MenuItem },
  props: {
    router:{
      type:Boolean,
      default(){
        return false;
      },
    },
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
      return currentRoute && currentRoute === menuItemValue;
    },
    showLink() {
      return this.dataSource.show === false ? false : true;
    }
  }
};
</script>
