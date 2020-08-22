<template>
  <div>
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="`#icon-${name}`" />
    </svg>
  </div>
</template>
<script>
export default {
  props: ["name"],
  name: "gulu-gicon",
};
</script>
<style scoped>
div {
  display: inline-block;
  margin: 0 2px;
}
.icon {
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
