<template>
  <div class="col" :class="colClass" :style="colStyle">
    <div class="colContent">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "gulu-col",
  data() {
    return {
      gutter: "",
    };
  },
  computed: {
    colClass() {
      let { span, offset, phone } = this;
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        phone && [`col-phone-${phone.span}`, `offset-phone-${phone.offset}`],
      ];
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    },
  },
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    phone: {
      type: [Object],
      validator(value) {
        let keys = Object.keys(value);
        let valat = true;
        keys.forEach((key) => {
          if (!["span", "offset"].includes(key)) {
            valat = false;
          }
        });
        return valat;
      },
    },
  },
};
</script>
<style scoped lang="scss">
.col {
  height: 100px;
  width: 50%;
  & > .colContent {
    border: 1px solid blue;
    height: 100px;
  }
  @for $n from 1 through 24 {
    &.col-#{$n} {
      width: ($n/24) * 100%;
    }
  }
  @for $n from 1 through 24 {
    &.offset-#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
  @media (max-width: 768px) {
    @for $n from 1 through 24 {
      &.col-phone-#{$n} {
        width: ($n/24) * 100%;
      }
    }
    @for $n from 1 through 24 {
      &.offset-phone-#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
}
</style>
