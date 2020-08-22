<template>
  <div class="demo">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-button>默认按钮</g-button>
        <g-button icon="shezhi">默认按钮</g-button>
        <g-button icon="shezhi" iconPosition="right">默认按钮</g-button>
        <g-button :loading="true">加载按钮</g-button>
        <g-button
          icon="shezhi"
          :loading="loading1"
          @click="loading1 = !loading1"
          >加载按钮</g-button
        >
        <g-button disabled>禁用按钮</g-button>
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

    <h2>按钮组</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-button-group>
          <g-button icon="wangzuo">
            上一页
          </g-button>
          <g-button>
            更多
          </g-button>
          <g-button icon="wangyou">
            下一页
          </g-button>
        </g-button-group>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr2}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)" ref="xxx">
        <g-icon
          class="icon-xia"
          :name="isShow[1] === false ? 'xia' : 'shang'"
        ></g-icon>
        <span class="lock-code-word">{{
          isShow[1] === false ? "显示代码" : "隐藏代码"
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import "../public/js/icon";
import "../public/css/icon.css";
import GButton from "../../../src/components/button";
import GButtonGroup from "../../../src/components/ButtonGroup";
import GIcon from "../../../src/components/icon";
import mixin from "../mixin";
export default {
  name: "demo",
  mixins: [mixin],
  components: {
    GButton,
    GIcon,
    GButtonGroup,
  },
  data() {
    return {
      loading1: true,
      codeStr: `
        <g-button>默认按钮</g-button>
        <g-button icon="shezhi">默认按钮</g-button>
        <g-button icon="shezhi" iconPosition="right">默认按钮</g-button>
        <g-button :loading="true">加载按钮</g-button>
        <g-button
          icon="shezhi"
          :loading="loading1"
          @click="loading1 = !loading1"
          >加载按钮</g-button
        >
        <g-button disabled>禁用按钮</g-button>
        `
        .replace(/^ {8}/gm, "")
        .trim(),

      codeStr2: `
        <g-button-group>
          <g-button icon="wangzuo">
            上一页
          </g-button>
          <g-button>
            更多
          </g-button>
          <g-button icon="wangyou">
            下一页
          </g-button>
        </g-button-group>
          `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>

<style lang="scss" scoped></style>
