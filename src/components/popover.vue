<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentwrapper" class="contentwrapper" v-show="visiable">
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
  data() {
    return {
      visiable: false,
    };
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentwrapper);
      let { left, top } = this.$refs.button.getBoundingClientRect();
      this.$refs.contentwrapper.style.left = left + window.scrollX + "px";
      this.$refs.contentwrapper.style.top = top + window.scrollY + "px";
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
  transform: translateY(-100%);
  border: 1px solid #333;
  padding: 0.5em 1em;
  border-radius: 4px;
  margin-top: -10px;
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
  &::before {
    border-top-color: black;
    top: 100%;
  }
  &::after {
    border-top-color: #fff;
    top: calc(100% - 1px);
  }
}
</style>
