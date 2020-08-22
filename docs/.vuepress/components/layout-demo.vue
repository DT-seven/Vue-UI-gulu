<template>
  <div class="demo">
    <h2>圣杯布局</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-layout style="color: white; margin-bottom:50px;">
          <g-header
            style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
          >
            header
          </g-header>
          <g-content
            style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;"
          >
            content
          </g-content>
          <g-footer
            style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
          >
            footer
          </g-footer>
        </g-layout>
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

    <h2>多栏布局 1</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
          <g-header
            style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
          >
            header
          </g-header>
          <g-layout>
            <g-sider
              style="display:flex;justify-content: center;align-items: center;height: 100px; background:#03a9f4d9; width:200px; color: white;"
            >
              sider
            </g-sider>
            <g-content
              style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;"
            >
              content
            </g-content>
          </g-layout>
          <g-footer
            style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
          >
            footer
          </g-footer>
        </g-layout>
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

    <h2>多栏布局 2</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
          <g-sider
            style=" display:flex;justify-content: center;align-items: center;background:#03a9f4d9; width:200px; color: white;"
          >
            sider
          </g-sider>
          <g-layout>
            <g-header
              style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
            >
              header
            </g-header>
            <g-content
              style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;"
            >
              content
            </g-content>
            <g-footer
              style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
            >
              footer
            </g-footer>
          </g-layout>
        </g-layout>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr3}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)" ref="xxx">
        <g-icon
          class="icon-xia"
          :name="isShow[2] === false ? 'xia' : 'shang'"
        ></g-icon>
        <span class="lock-code-word">{{
          isShow[2] === false ? "显示代码" : "隐藏代码"
        }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
* {
  box-sizing: border-box;
}
</style>
<script>
import "../public/js/icon";
import GLayout from "../../../src/components/layout";
import GHeader from "../../../src/components/header";
import GFooter from "../../../src/components/footer";
import GContent from "../../../src/components/content";
import GSider from "../../../src/components/sider";
import GIcon from "../../../src/components/icon";
import mixin from "../mixin";

export default {
  components: { GLayout, GHeader, GFooter, GContent, GSider, GIcon },
  mixins: [mixin],
  data() {
    return {
      codeStr: `
          <g-layout style="color: white; margin-bottom:50px;">
          <g-header
            style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
          >
            header
          </g-header>
          <g-content
            style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;"
          >
            content
          </g-content>
          <g-footer
            style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
          >
            footer
          </g-footer>
        </g-layout>
        `
        .replace(/^ {8}/gm, "")
        .trim(),
      codeStr2: `
             <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
          <g-header
            style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
          >
            header
          </g-header>
          <g-layout>
            <g-sider
              style="display:flex;justify-content: center;align-items: center;height: 100px; background:#03a9f4d9; width:200px; color: white;"
            >
              sider
            </g-sider>
            <g-content
              style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;"
            >
              content
            </g-content>
          </g-layout>
          <g-footer
            style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
          >
            footer
          </g-footer>
        </g-layout>
        `
        .replace(/^ {8}/gm, "")
        .trim(),
      codeStr3: `
      <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
          <g-sider
            style=" display:flex;justify-content: center;align-items: center;background:#03a9f4d9; width:200px; color: white;"
          >
            sider
          </g-sider>
          <g-layout>
            <g-header
              style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
            >
              header
            </g-header>
            <g-content
              style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;"
            >
              content
            </g-content>
            <g-footer
              style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;"
            >
              footer
            </g-footer>
          </g-layout>
        </g-layout>
        `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>
