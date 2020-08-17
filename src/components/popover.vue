<template>
  <div class="popover" @click="onClick" ref="popover">
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
      defalut: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      },
    },
  },
  data() {
    return {
      visiable: false,
    };
  },
  methods: {
    positionContent() {
      let { contentwrapper } = this.$refs;
      document.body.appendChild(contentwrapper);
      let {
        left,
        top,
        height,
        width,
      } = this.$refs.button.getBoundingClientRect();
      if (this.position === "top") {
        contentwrapper.style.left = left + window.scrollX + "px";
        contentwrapper.style.top = top + window.scrollY + "px";
      } else if (this.position === "bottom") {
        contentwrapper.style.left = left + window.scrollX + "px";
        contentwrapper.style.top = top + height + window.scrollY + "px";
      } else if (this.position === "left") {
        contentwrapper.style.left = left + window.scrollX + "px";
        contentwrapper.style.top = top + window.scrollY + "px";
      } else if (this.position === "right") {
        contentwrapper.style.left = left + width + window.scrollX + "px";
        contentwrapper.style.top = top + window.scrollY + "px";
      }
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
    showPop() {
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
          this.showPop();
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
      border-top-color: black;
      top: 100%;
    }
    &::after {
      border-top-color: #fff;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before {
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: #fff;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before {
      border-left-color: black;
      left: 100%;
    }
    &::after {
      border-left-color: #fff;
      top: 8px;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before {
      border-right-color: black;
      left: -20px;
    }
    &::after {
      border-right-color: #fff;
      top: 8px;
      left: -19px;
    }
  }
}
</style>
