<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "gulu-row",
  props: {
    gutter: {
      type: [Number, String],
    },
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -this.gutter / 2 + "px",
        marginRight: -this.gutter / 2 + "px",
      };
    },
  },
  mounted() {
    // console.log(this.$children);
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
};
</script>
<style scoped lang="scss">
.row {
  display: flex;
}
</style>
