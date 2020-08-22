<template>
  <div class="demo">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-tabs :selected.sync="selectedTab">
          <g-tabs-head>
            <g-tabs-item name="1">
              <g-icon name="shezhi"></g-icon>
              1
            </g-tabs-item>
            <g-tabs-item name="2">2</g-tabs-item>
            <g-tabs-item name="3">3</g-tabs-item>
          </g-tabs-head>
          <g-tabs-body>
            <g-tabs-pane name="1">content1</g-tabs-pane>
            <g-tabs-pane name="2">content2</g-tabs-pane>
            <g-tabs-pane name="3">content3</g-tabs-pane>
          </g-tabs-body>
        </g-tabs>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <g-icon
          class="icon-xia"
          :name="isShow[0] === false ? 'xia' : 'shang'"
        ></g-icon>
        <span class="lock-code-word">{{
          isShow[0] === false ? "显示代码" : "隐藏代码"
        }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import "../public/js/icon";
import GTabs from "../../../src/components/tabs";
import GTabsBody from "../../../src/components/tabs-body";
import GTabsHead from "../../../src/components/tabs-head";
import GTabsItem from "../../../src/components/tabs-item";
import GTabsPane from "../../../src/components/tabs-pane";
import GIcon from "../../../src/components/icon";
import mixin from "../mixin";

export default {
  components: { GTabs, GTabsBody, GTabsHead, GTabsItem, GTabsPane, GIcon },
  mixins: [mixin],
  data() {
    return {
      selectedTab: "1",
      codeStr: `
          data:{
            selectedTab: '1'
          }

         g-tabs :selected.sync="selectedTab">
          <g-tabs-head>
            <g-tabs-item name="1">
              <g-icon name="shezhi"></g-icon>
              1
            </g-tabs-item>
            <g-tabs-item name="2">2</g-tabs-item>
            <g-tabs-item name="3">3</g-tabs-item>
          </g-tabs-head>
          <g-tabs-body>
            <g-tabs-pane name="1">content1</g-tabs-pane>
            <g-tabs-pane name="2">content2</g-tabs-pane>
            <g-tabs-pane name="3">content3</g-tabs-pane>
          </g-tabs-body>
        </g-tabs>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>
