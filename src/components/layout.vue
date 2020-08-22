<template>
  <div class="layout" :class="{ gsider: siderClass }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluLayout",
  data() {
    return {
      siderClass: false,
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "GuluSider") {
        this.siderClass = true;
      }
    });
  },
};
</script>
<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.gsider {
  flex-direction: row;
}
</style>
