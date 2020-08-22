<template>
  <div id="app"></div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      errorMessage: "姓名不得少于2个字",
      message: "",
      selectedTab: "2",
    };
  },
  methods: {
    yyy() {
      console.log("yyy");
    },
    inputChange(e) {
      console.log(e.target.value);
    },
    showToast() {
      this.$toast(`您的银行卡已经欠费，请充值`);
    },
  },
};
</script>
<style lang="scss" scoped>
#app {
  padding: 200px;
}
</style>
