<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "GuluCollapse",
  props: {
    single: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: [String, Number],
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return { eventBus: this.eventBus };
  },
  mounted() {
    this.eventBus.$emit("single", this.single);
    this.eventBus.$emit("update:selected", this.selected);
    this.eventBus.$on("update:selected", (name) => {
      this.$emit("update:selected", name);
    });
  },
};
</script>
<style scoped lang="scss">
$border-color: grey;
$border-radius: 4px;
.collapse {
  border: 1px solid $border-color;
  border-radius: $border-radius;
}
</style>
