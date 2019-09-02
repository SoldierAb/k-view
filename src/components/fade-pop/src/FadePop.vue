<template>
  <div class="fade-pop-container" v-show="show">
    <transition name="fade-modal">
      <div class="fade-modal" v-show="modalShow" @click="modalClick"></div>
    </transition>
    <transition name="fade-animate" @after-leave="afterLeave" @before-enter="modalShow=true">
      <div :style="[fadeBoxStyle]" class="fade-box" v-if="show">
        <div class="fade-head clearfix">
          <span class="fade-head-content">{{title}}</span>
          <span class="fade-head-close">
            <img @click="closePop" src="../assets/common/x.png" width="32" />
          </span>
        </div>
        <div class="fade-body">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.fade-pop-container {
  .fade-modal {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: $z-index;
  }
  .fade-box {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    background-size: 100% 100%;
    height: 80%;
    width: 60%;
    max-height: 736px;
    max-width: 1140px;
    z-index: $z-index;
    background: $bg-base;
    .fade-head-content {
      padding-left: 10px;
    }
    .fade-head-close {
      float: right;
      padding: 0 10px;
      img {
        vertical-align: middle;
        width: 32px;
      }
    }
    .fade-head {
      font-weight: bold;
      height: 48px;
      line-height: 48px;
      font-size: 14px;
      padding-left: 4px;
      font-size: 18px;
      font-family: MicrosoftYaHei-Bold;
      background: $bg-gray;
      color: $font-color-base;

      .fade-head-close:active {
        transform: translate3d(0, -2px, 0);
        -webkit-transform: translate3d(0, -2px, 0);
      }
    }
    .fade-body {
      background-size: 100% 100%;
      height: calc(100% - 60px);
      padding: 10px;
    }
  }
}
.fade-animate-enter,
.fade-animate-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.fade-animate-enter-to,
.fade-animate-leave-active {
  transition: all 0.2s ease;
}

.fade-modal-enter,
.fade-modal-leave-to {
  opacity: 0;
}

.fade-modal-enter-to,
.fade-modal-leave-active {
  transition: all 0.4s ease;
}
</style>

<script>
export default {
  name: "FadePop",
  model: {
    prop: "show",
    event: "change"
  },
  props: {
    show: Boolean,
    modalHidden: {
      type: Boolean,
      default() {
        return true;
      }
    },
    title: {
      type: String,
      default: ""
    },
    beforeClose: {
      type: Function
    },
    width: {
      default: "60%"
    },
    height: {
      default: "80%"
    }
  },
  data() {
    return {
      modalShow: this.show,
      fadeBoxStyle: {
        width: this.formate(this.width),
        height: this.formate(this.height)
      }
    };
  },
  methods: {
    closePop() {
      if (this.beforeClose) this.beforeClose();
      this.$emit("change", false);
    },
    afterLeave() {
      this.modalShow = false;
      // if (this.beforeClose) this.beforeClose();
    },
    formate(value) {
      if (isNaN(Number(value))) {
        return value;
      } else {
        return value + "px";
      }
    },
    modalClick() {
      if (this.modalHidden) this.closePop();
    }
  }
};
</script>

