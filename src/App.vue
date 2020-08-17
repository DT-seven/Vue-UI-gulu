<template>
  <div id="app">
    <div style="height:200px"></div>
    <g-popover position="top">
      <template slot="content">
        <div>
          weererewrerwrdsfsfsfsfsweererewrerwrdsfsfsfsfsweererewrerwrdsfsfsfsfsweererewrerwrdsfsfsfsfsweererewrerwrdsfsfsfsfsweererewrerwrdsfsfsfsfs
        </div>
      </template>
      <g-button>点击</g-button>
    </g-popover>
    <g-popover position="bottom">
      <template slot="content">
        <div>
          popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容
        </div>
      </template>
      <g-button>点击</g-button>
    </g-popover>
    <g-popover position="left">
      <template slot="content">
        <div>
          popover的内容
          popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容popover的内容
        </div>
      </template>
      <g-button>点击</g-button>
    </g-popover>
    <g-popover position="right">
      <template slot="content">
        <div>
          popover的内容
        </div>
      </template>
      <g-button>点击</g-button>
    </g-popover>
    <!-- <g-tabs :selected.sync="selectedTab">
      <g-tabs-head>
        <g-tabs-item name="girls">
          <g-icon name="shezhi"></g-icon>
          美女
        </g-tabs-item>
        <g-tabs-item name="sport">体育</g-tabs-item>
        <g-tabs-item name="finace">财经</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="girls">美女图片</g-tabs-pane>
        <g-tabs-pane name="sport">体育图片</g-tabs-pane>
        <g-tabs-pane name="finace">财经新闻</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>-->
    <!-- <div id="toast">
      <button @click="showToast">点我</button>
    </div>
    <div id="grid">
      <g-row>
        <g-col span="6"></g-col>
        <g-col span="14" offset="4"></g-col>
      </g-row>
    </div>
    <div id="layout">
      <g-layout>
        <g-header>header</g-header>
        <g-content>content</g-content>
        <g-footer>footer</g-footer>
      </g-layout>
      <g-layout>
        <g-header>header</g-header>
        <g-layout>
          <g-sider>sider</g-sider>
          <g-content>content</g-content>
        </g-layout>
        <g-footer>footer</g-footer>
      </g-layout>
    </div>
    <div id="gulu-input">
      <g-input value="zhangsan" disabled></g-input>
      <g-input value="zhangsan" readOnly></g-input>
      <g-input v-model="message" @change="inputChange"></g-input>
      <g-input value="zhangsan" :error="errorMessage"></g-input>
    </div>
    <div id="gulu-button" style="margin: 20px;">
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
    </div>-->
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
      errorMessage: "姓名不得少于2个字",
      message: "",
      selectedTab: "girls",
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
