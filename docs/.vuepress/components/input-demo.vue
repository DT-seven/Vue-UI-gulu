<template>
  <div class="demo">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-input value="请输入内容"></g-input>
        <g-input value="请输入内容" disabled></g-input>
        <g-input value="请输入内容" readOnly></g-input>
        <g-input value="请输入内容" :error="errorMessage"></g-input>
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

    <h2>双向绑定</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-input v-model="message"></g-input>
        <div style="margin-top: 20px">message: {{ message }}</div>
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
import GInput from "../../../src/components/input";
import GIcon from "../../../src/components/icon";
import mixin from "../mixin";

export default {
  components: { GInput, GIcon },
  mixins: [mixin],
  data() {
    return {
      errorMessage: "姓名不得少于2个字",
      message: "请输入内容",
      codeStr: `
        <g-input value="请输入内容"></g-input>
        <g-input value="请输入内容" disabled></g-input>
        <g-input value="请输入内容" readOnly></g-input>
        <g-input value="请输入内容" :error="errorMessage"></g-input>
        `
        .replace(/^ {8}/gm, "")
        .trim(),
      codeStr2: `
          data:{
             message: "请输入内容",
          }

        <g-input v-model="message"></g-input>
        <div style="margin-top: 20px">message: {{ message }}</div>
        `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>
