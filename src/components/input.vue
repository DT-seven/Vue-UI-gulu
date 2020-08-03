<template>
  <div class="wrapper" :class="{ error: error }">
    <input
      :value="value"
      :disabled="disabled"
      :readOnly="readOnly"
      :error="error"
      type="text"
      @change="$emit('change', $event)"
      @input="$emit('input', $event.target.value)"
    />
    <template v-if="error">
      <g-icon name="test"></g-icon>
      <span v-text="error"></span>
    </template>
  </div>
</template>
<script>
import GIcon from "./icon";
export default {
  name: "gulu-input",
  components: {
    GIcon,
  },
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
};
</script>
<style scoped lang="scss">
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$font-size: 12px;
$box-shadow-color: rgb(0, 0, 0, 0.5);
.wrapper {
  font-size: $font-size;
  display: inline-block;
  margin-left: 0.5em;
  > input {
    height: $height;
    border: 1px solid $border-color;
    padding: 0 8px;
    border-radius: 4px;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readOnly] {
      border-color: #ccc;
      color: #ccc;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: red;
    }
  }
}
</style>
