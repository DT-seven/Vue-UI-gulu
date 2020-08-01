<template>
  <div id="app">
    <g-button :loading="loading1" @click="loading1 = !loading1">
      按钮
    </g-button>
    <g-button icon="shezhi" :loading="loading2" @click="loading2 = !loading2">
      按钮
    </g-button>
    <g-button
      icon="shezhi"
      iconPosition="right"
      :loading="loading3"
      @click="loading3 = !loading3"
    >
      按钮
    </g-button>
    <button-group>
      <g-button>上一页</g-button>
      <g-button>更多</g-button>
      <g-button>下一页</g-button>
    </button-group>
    <div id="test"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
    };
  },
};
</script>
<style lang="scss" scoped>
#app {
  margin: 20px;
}
</style>
