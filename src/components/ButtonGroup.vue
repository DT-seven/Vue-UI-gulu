<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "buttongroup",
};
</script>
<style scoped lang="scss">
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  margin-left: 0.4em;
  > .g-button {
    margin-left: -1px;
    border-radius: 0;
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &:hover {
      border: 1px solid yellowgreen;
      z-index: 1;
    }
  }
}
</style>
