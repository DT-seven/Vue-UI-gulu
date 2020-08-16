<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
  </div>
</template>
<script>
export default {
  name: "GuluTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (item, vm) => {
      let { width, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left}px`;
    });
  },
};
</script>
<style scoped lang="scss">
$tab-height: 40px;
.tabs-head {
  display: flex;
  height: $tab-height;
  border: 1px solid #999;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 3px solid blue;
    transition: all 250ms;
  }
}
</style>
