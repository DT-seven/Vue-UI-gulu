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
  name: "GIcon",
};
</script>
<style scoped></style>
