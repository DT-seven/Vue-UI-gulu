<template>
  <div class="tabspane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluTabsPane",
  inject: ["eventBus"],
  data() {
    return {
      active: false,
    };
  },
  computed: {
    classes() {
      return {
        active: this.active,
      };
    },
  },
  props: {
    name: {
      type: [String, Number],
    },
  },
  created() {
    this.eventBus.$on("update:selected", (name) => {
      if (name === this.name) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  },
};
</script>
<style scoped lang="scss">
.tabspane {
  border: 1px solid #999;
  &.active {
    background: chocolate;
  }
}
</style>
