<template>
  <div class="tabsitem" :class="classes" @click="changeTabs">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluTabsItem",
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
  inject: ["eventBus"],
  props: {
    name: {
      type: [String, Number],
    },
  },
  methods: {
    changeTabs() {
      this.eventBus.$emit("update:selected", this.name, this);
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
.tabsitem {
  display: flex;
  align-items: center;
  height: 100%;
  flex-shrink: 0;
  padding: 0 2em;
  cursor: pointer;

  &.active {
    background-color: #ccc;
    color: blue;
    font-weight: bold;
  }
}
</style>
