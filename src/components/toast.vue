<template>
  <div class="toast" ref="reftoast" :class="toastPosition">
    <slot></slot>
    <div class="line" ref="line"></div>
    <span @click="onClose">{{ closeButton.text }}</span>
  </div>
</template>
<script>
export default {
  name: "GuluToast",
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    closeTime: {
      type: Number,
      default: 20,
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "充值",
          callback: () => {
            console.log("zhidao le");
          },
        };
      },
    },
    position: {
      type: String,
      default: "middle",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value);
      },
    },
  },
  computed: {
    toastPosition() {
      return [`position-${this.position}`];
    },
  },
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClose() {
      this.close();
      this.closeButton.callback();
    },
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.closeTime * 1000);
    }
    this.$nextTick(() => {
      this.$refs.line.style.height = `${
        this.$refs.reftoast.getBoundingClientRect().height
      }px`;
    });
  },
};
</script>
<style scoped lang="scss">
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  min-height: $toast-min-height;
  line-height: 1.8;
  font-size: $font-size;
  position: fixed;
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: #fff;
  border-radius: 4px;
  background: $toast-bg;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding-left: 8px;
  & span {
    padding: 0 8px;
    cursor: pointer;
    flex-shrink: 0;
  }
  &.position-top {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  &.position-bottom {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  &.position-middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.line {
  border: 1px solid #666;
  height: 100%;
  margin-left: 8px;
}
</style>
