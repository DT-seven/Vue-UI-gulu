<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{ title }}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "GuluCollapseitem",
  data() {
    return {
      open: false,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: [String, Number],
    },
  },
  inject: ["eventBus"],

  methods: {
    close() {
      this.open = false;
    },
    DoOpen() {
      this.open = true;
    },
    toggle() {
      if (this.open) {
        this.close();
      } else {
        this.eventBus.$emit("update:selected", this.name);
      }
    },
  },
  mounted() {
    this.eventBus.$on("single", (e) => {
      if (e) {
        this.eventBus.$on("update:selected", (vm) => {
          if (vm !== this.name) {
            this.close();
          } else {
            this.DoOpen();
          }
        });
      }
    });
  },
};
</script>
<style scoped lang="scss">
$border-color: grey;
$border-radius: 4px;
.collapseItem {
  > .title {
    border: 1px solid $border-color;
    margin: -1px -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content {
    padding: 8px;
  }
}
</style>
