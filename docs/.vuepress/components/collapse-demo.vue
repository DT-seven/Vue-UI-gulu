<template>
  <div class="demo">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-collapse :selected.sync="slectedTabs">
          <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
          <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
          <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
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
    <h2>手风琴效果</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-collapse :selected.sync="slectedTabs2" single>
          <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
          <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
          <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
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
import GCollapse from "../../../src/components/collapse";
import GCollapseItem from "../../../src/components/collapse-item";
import GIcon from "../../../src/components/icon";
import mixin from "../mixin";
export default {
  components: {
    GIcon,
    GCollapse,
    GCollapseItem,
  },
  mixins: [mixin],
  data() {
    return {
      codeStr: `
          <g-collapse :selected.sync="slectedTabs">
          <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
          <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
          <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      slectedTabs: [],
      codeStr2: `
          <g-collapse :selected.sync="slectedTabs2" single>
          <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
          <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
          <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      slectedTabs2: [],
    };
  },
};
</script>
