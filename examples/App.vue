<template>
  <div class="container">
    <nav>
      <ul>
        <li>
          <router-link to="/tree">
            Tree
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view>未挂载任何组件</router-view>
    <k-button type="primary">
      按钮
    </k-button>
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
  ul,
  li {
    list-style: none;
  }
}
</style>


<script>
import {Button} from 'element-ui'
export default {
  components:{
    KButton:Button
  },
  data() {
    return {};
  },
  mounted() {},
  beforeDestroy() {},
  methods: {}
};
</script>
