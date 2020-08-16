<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentwrapper" class="contentwrapper" v-show="visiable">
      <slot name="content"></slot>
    </div>
    <span ref="button">
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
      let {left, top} = this.$refs.button.getBoundingClientRect();
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
      console.log("关闭");
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
  border: 1px solid red;
}
.contentwrapper {
  position: absolute;
  border: 1px solid red;
  transform: translateY(-100%);
}
</style>