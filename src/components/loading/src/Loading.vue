<template>
  <div
    v-show="show"
    class="loading-gui-box"
    :style="`background:${background}`"
  >
    <div class="loading-box">
      <div
        class="k-line k-line-1"
        :style="`background:${color}`"
      />
      <div
        class="k-line k-line-2"
        :style="`background:${color}`"
      />
      <div
        class="k-line k-line-3"
        :style="`background:${color}`"
      />
      <div
        class="k-line k-line-4"
        :style="`background:${color}`"
      />
      <div
        class="k-line k-line-5"
        :style="`background:${color}`"
      />
    </div>
  </div>
</template>

<style lang="scss">
.loading-gui-box {
  $dot-size: 16px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  .loading-box {
    padding: 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: $dot-size;
    text-align: center;
  }
  .k-line {
    display: inline-block;
    width: $dot-size;
    height: $dot-size;
    border-radius: $dot-size;
    margin: 2px;
  }
  .k-line-1 {
    animation: k-loadingP 1s infinite;
  }
  .k-line-2 {
    animation: k-loadingP 1s infinite;
    animation-delay: 0.1s;
  }
  .k-line-3 {
    animation: k-loadingP 1s infinite;
    animation-delay: 0.2s;
  }
  .k-line-4 {
    animation: k-loadingP 1s infinite;
    animation-delay: 0.3s;
  }
  .k-line-5 {
    animation: k-loadingP 1s infinite;
    animation-delay: 0.4s;
  }
  @keyframes k-loadingP {
    0% {
      transform: translateY(0);
    }
    35% {
      transform: translateY(0);
      opacity: 0.3;
    }
    50% {
      transform: translateY(-10px);
      opacity: 0.8;
    }
    70% {
      transform: translateY(3px);
      opacity: 0.8;
    }
    85% {
      transform: translateY(-3px);
    }
  }
}
</style>

<script>
export default {
  name: "KLoading",
  components: {},
  props: {},
  data() {
    return {
      show: false,
      background: "rgba(0,0,0,0.6)",
      color: "#4b9cdb",
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
