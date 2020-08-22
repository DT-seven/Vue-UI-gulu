<template>
  <div class="demo">
    <h2>支持 HTML</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-popover trigger="click" position="top">
          <g-button>上方弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="bottom" trigger="click">
          <g-button>下方弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="left" trigger="click">
          <g-button>左边弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="right" trigger="click">
          <g-button>右边弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
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

    <h2>将触发方式改为 hover</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <g-popover trigger="hover">
          <g-button>上方弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="bottom" trigger="hover">
          <g-button>下方弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="left" trigger="hover">
          <g-button>左边弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="right" trigger="hover">
          <g-button>右边弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
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
import GButton from "../../../src/components/button";
import GPopover from "../../../src/components/popover";
import GIcon from "../../../src/components/icon";
import mixin from "../mixin";

export default {
  components: { GButton, GPopover, GIcon },
  mixins: [mixin],
  data() {
    return {
      codeStr: `
          <g-popover>
          <g-button>上方弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="bottom">
          <g-button>下方弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="left">
          <g-button>左边弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="right">
          <g-button>右边弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      codeStr2: `
           <g-popover trigger="hover">
          <g-button>上方弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="bottom" trigger="hover">
          <g-button>下方弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="left" trigger="hover">
          <g-button>左边弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
        <g-popover position="right" trigger="hover">
          <g-button>右边弹出</g-button>
          <template slot="content">
            弹出内容
          </template>
        </g-popover>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  },
};
</script>
