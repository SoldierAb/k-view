<template>
  <div class="drop-actions-container">
    <drop-box v-model="showDrop" :position="position">
      <span slot="text">
        <slot name="text">
          <el-button :size="size" :type="type" plain>{{title}}</el-button>
        </slot>
      </span>
      <template slot="drop">
        <slot name="drop">
          <ul class="actions-box">
            <li class="action-item" v-for="item in actions" :key="item.label" @click="handleSelect(item.value)">
              <slot :name="item.value" v-bind="item">
                <el-button type="text" >{{item.label}}</el-button>
              </slot>
            </li>
          </ul>
        </slot>
      </template>
    </drop-box>
  </div>
</template>

<style lang="less">
.drop-actions-container {
  @drop-height: 42px;
  @drop-width: 90px;
  display: inline-block;
  height: @drop-height;
  border-radius: 4px;
  .drop-container .drop-content {
    width: @drop-width;
    top: 45px;
  }
  .actions-box {
    min-width: @drop-width;
    text-align: center;
    border-radius: 10px;
  }
  .el-menu {
    height: 100%;
    border: none;
  }
  .el-menu--horizontal > .el-submenu .el-submenu__title {
    height: @drop-height;
    line-height: @drop-height;
    color: #909399;
    border: none;
  }
}
</style>

<style lang="scss">
.drop-actions-container {
  .actions-box {
    background: $bg-base;
    box-shadow: 0 5px 20px $box-shadow-dark;
  }
}
</style>


<script>
import { getDropActions } from "@a";

export default {
  name: "DropActions",
  props: {
    position: {
      type: String,
      default() {
        return "left";
      }
    },
    type: {
      type: String,
      default() {
        return "primary";
      }
    },
    size: {
      type: String,
      default() {
        return "small";
      }
    },
    title: {
      type: String,
      default() {
        return "操作";
      }
    },
    url: {
      type: String
    }
  },
  data() {
    return {
      actions: [],
      showDrop: false
    };
  },
  created() {
    this.init();
  },
  watch: {
    url(val) {
      this.init();
    }
  },
  methods: {
    async init() {
      const { url } = this;
      if(!url) return;
      const res = await getDropActions(url);
      this.actions = res;
    },
    handleSelect(key, keyPath) {
      this.$emit("change", key);
    }
  }
};
</script>