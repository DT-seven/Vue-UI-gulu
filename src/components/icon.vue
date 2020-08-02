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
</style>
