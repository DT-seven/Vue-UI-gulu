<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  name: "GuluTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },

  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "GuluTabsHead") {
        vm.$children.forEach((item) => {
          if (
            item.$options.name === "GuluTabsItem" &&
            item.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, item);
          }
        });
      }
    });
    // this.$emit("update:seleted",'xxx');
  },
};
</script>
<style scoped></style>
