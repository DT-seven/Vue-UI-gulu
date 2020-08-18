<template>
  <div class="popover" ref="popover">
    <div
      ref="contentwrapper"
      class="contentwrapper"
      v-show="visiable"
      :class="{ [`position-${position}`]: true }"
    >
      <slot name="content"></slot>
    </div>
    <span ref="button" style="display:inline-block">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "GuluPopover",
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      },
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "mouse"].indexOf(value) >= 0;
      },
    },
  },
  mounted() {
    if (this.trigger === "click") {
      //   this.onClick();
      this.$refs.popover.addEventListener("click", this.onClick);
    } else {
      this.$refs.popover.addEventListener("mouseenter", this.open);
      this.$refs.popover.addEventListener("mouseleave", this.close);
    }
  },
  destroyed() {
    if (this.trigger === "click") {
      //   this.onClick();
      this.$refs.popover.removeEventListener("click", this.onClick);
    } else {
      this.$refs.popover.removeEventListener("mouseenter", this.open);
      this.$refs.popover.removeEventListener("mouseleave", this.close);
    }
  },
  data() {
    return {
      visiable: false,
    };
  },
  methods: {
    positionContent() {
      const { contentwrapper } = this.$refs;
      document.body.appendChild(contentwrapper);
      const {
        left,
        top,
        height,
        width,
      } = this.$refs.button.getBoundingClientRect();
      let contentPosition = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX,
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX,
        },
        left: {
          top: top + window.scrollY,
          left: left + window.scrollX,
        },
        right: {
          top: top + window.scrollY,
          left: left + width + window.scrollX,
        },
      };
      contentwrapper.style.left = contentPosition[this.position].left + "px";
      contentwrapper.style.top = contentPosition[this.position].top + "px";
    },
    eventHandle(e) {
      if (!this.$refs.contentwrapper.contains(e.target)) {
        this.close();
      }
    },
    addListenr() {
      setTimeout(() => {
        document.addEventListener("click", this.eventHandle);
      }, 10);
    },
    close() {
      this.visiable = false;
      document.removeEventListener("click", this.eventHandle);
    },
    open() {
      this.visiable = true;
      this.$nextTick(() => {
        this.positionContent();
        this.addListenr();
      });
    },
    onClick(event) {
      if (this.$refs.button.contains(event.target)) {
        if (this.visiable === true) {
          this.close();
        } else {
          this.open();
        }
      }
    },
  },
};
</script>
<style scoped lang="scss">
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.contentwrapper {
  position: absolute;
  border: 1px solid #333;
  padding: 0.5em 1em;
  border-radius: 4px;
  max-width: 20em;
  background-color: #fff;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  word-break: break-all;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 10px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
    left: 10px;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before {
      border-bottom: none;
      border-top-color: black;
      top: 100%;
    }
    &::after {
      border-bottom: none;
      border-top-color: #fff;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before {
      border-top: none;
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-top: none;
      border-bottom-color: #fff;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before {
      border-right: none;
      border-left-color: black;
      left: 100%;
    }
    &::after {
      border-right: none;
      border-left-color: #fff;
      top: 8px;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before {
      border-left: none;
      border-right-color: black;
      left: -10px;
    }
    &::after {
      border-left: none;
      border-right-color: #fff;
      top: 8px;
      left: -9px;
    }
  }
}
</style>
