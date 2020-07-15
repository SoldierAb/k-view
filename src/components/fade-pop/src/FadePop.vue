<template>
  <div class="fade-pop-container">
    <transition name="fade-modal">
      <div
        v-show="modalShow"
        class="fade-modal"
        @click="modalClick"
      />
    </transition>
    <transition
      v-draggable="true"
      name="fade-animate"
      @after-leave="afterLeave"
      @before-enter="modalShow = true"
    >
      <div
        v-if="show"
        :style="[fadeBoxStyle]"
        class="fade-box"
      >
        <fade-body>
          <div
            v-draggable="draggable"
            class="fade-head clearfix"
          >
            <span class="fade-head-content">{{ title }}</span>
            <span
              class="fade-head-close"
              @click="closePop"
            >
              <i class="el-icon-close" />
            </span>
          </div>
          <div
            class="fade-body"
            :style="`height:calc(100% - ${(footer?2:1)*48}px)`"
          >
            <slot />
          </div>
          <div
            v-if="footer"
            class="fade-footer"
            :style="`justify-content:${typeof footer === 'string'?footer:'flex-end'}`"
          >
            <slot name="footer">
              <k-button
                size="small"
                @click="closePop"
              >
                <!-- {{ k('k.fadePop.cancel') }} -->
                {{ kviewConfig.locale.k.fadePop.cancel }}
              </k-button>
              <k-button
                size="small"
                type="primary"
                @click="$emit('submit')"
              >
                <!-- {{ k('k.fadePop.confirm') }} -->
                {{ kviewConfig.locale.k.fadePop.confirm }}
              </k-button>
            </slot>
          </div>
        </fade-body>
      </div>
    </transition>
  </div>
</template>

<script>
import FadeBody from "./FadeBody";
import {Button} from "element-ui";
// import Locale from "../.././../mixins/locale"
import Inject from "../.././../mixins/inject"

export default {
  name: "KFadePop",
  components: { FadeBody ,KButton:Button},
  mixins: [Inject],
  model: {
    prop: "show",
    event: "change",
  },
  props: {
    footer:{
      type: Boolean,
      default() {
        return false;
      },
    },
    draggable: {
      type: Boolean,
      default() {
        return false;
      },
    },
    show: {
      type: Boolean,
      default() {
        return false;
      },
    },
    modalHidden: {
      type: Boolean,
      default() {
        return true;
      },
    },
    title: {
      type: String,
      default: "",
    },
    // eslint-disable-next-line vue/require-default-prop
    beforeClose: {
      type: Function,
    },
    // eslint-disable-next-line vue/require-prop-types
    width: {
      default: "60%",
    },
    // eslint-disable-next-line vue/require-prop-types
    height: {
      default: "80%",
    },
  },
  data() {
    return {
      modalShow: this.show,
    };
  },
  computed: {
    fadeBoxStyle() {
      return {
        width: this.formate(this.width),
        maxWidth: this.formate(this.width),
        height: this.formate(this.height),
        maxHeight: this.formate(this.height),
      };
    },
  },
  methods: {
    closePop() {
      if (
        !Object.prototype.toString.call(this.beforeClose).includes("unction")
      ) {
        this.$emit("change", false);
        return;
      }
      const before = this.beforeClose();
      if (before && before.then) {
        before.then(isShow => {
          this.$emit("change", isShow);
        });
      } else {
        this.$emit("change", false);
      }
    },
    afterLeave() {
      this.modalShow = false;
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
    },
  },
};
</script>

<style lang="scss">
.fade-pop-container {
  $header-height:48px;
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
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    .fade-head-content {
      padding-left: 10px;
    }
    .fade-head-close {
      float: right;
      padding: 0 10px;
      &:hover{
        cursor: pointer;
      }
      img {
        vertical-align: middle;
        width: 32px;
      }
    }
    .fade-head {
      // font-weight: bold;
      height: $header-height;
      line-height: $header-height;
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
      height: calc(100% - #{$header-height});
    }
    .fade-footer{
      height:48px;
      padding: 0 20px;
      border-top:1px solid $bg-gray;
      display: flex;
      justify-content: flex-end;
      align-items: center;
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
