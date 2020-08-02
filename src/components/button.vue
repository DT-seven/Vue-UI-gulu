<template>
  <button
    :class="{ [`icon-${iconPosition}`]: true }"
    @click="$emit('click')"
    class="g-button"
  >
    <g-icon name="jiazai" class="icon loading" v-if="loading"></g-icon>
    <g-icon :name="icon" v-if="icon && !loading" class="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import GIcon from "./icon";
export default {
  components: {
    GIcon,
  },
  props: {
    icon: String,
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator: function(value) {
        return value !== "right" || value !== "left";
      },
    },
  },
  name: "gulu-gbutton",
};
</script>
<style scoped lang="scss">
$border-color-hover: #666;
$border-color: #999;
$border-color-light: lighten($border-color, 30%);
$border-radius: 4px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$button-active-bg: #eee;
$button-bg: white;
$button-height: 32px;
$color: #333;
$light-color: #666;
$font-size: 14px;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  font-size: $font-size;
  height: $button-height;
  border-radius: $border-radius;
  padding: 0 0.8em;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  margin-left: 0.1em;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin: 0 0.1em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin: 0 0.1em;
    }
    > .content {
      order: 1;
    }
  }
}
.loading {
  animation: spin 1s infinite linear;
}
</style>
