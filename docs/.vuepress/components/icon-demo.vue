<template>
  <div class="demo">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-icon name="shezhi"></g-icon>
        <g-icon name="dianzan"></g-icon>
        <g-icon name="jiazai"></g-icon>
        <g-button icon="xiazai">下载</g-button>
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
import GIcon from "../../../src/components/icon";
import mixin from "../mixin";
import GButton from "../../../src/components/button";
export default {
  name: "GuluGIcon",
  mixins: [mixin],
  components: {
    GIcon,
    GButton,
  },
  data() {
    return {
      codeStr: `
        <g-icon name="shezhi"></g-icon>
        <g-icon name="dianzan"></g-icon>
        <g-icon name="jiazai"></g-icon>
        <g-button icon="xiazai">下载</g-button>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>

<style lang="scss" scoped></style>
