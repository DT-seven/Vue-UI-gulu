<template>
  <div class="base">
    <section>
      <h2>g-icon/Attributes</h2>
      <p class="des">
        组件将被渲染为
        <span class="code">input</span>标签，因此你可以使用所有的
        <span class="code">input</span>原生属性。
      </p>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th class="des">说明</th>
              <th class="type">类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>placeholder</td>
              <td class="des">原生属性</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>type</td>
              <td class="des">原生属性(当type为textarea时渲染为文本输入框)</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>icon</td>
              <td class="des">icon 图标名</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td class="des">disabled 状态</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
            <tr>
              <td>error</td>
              <td class="des">error 状态</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style>
.code {
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  padding: 0.2em 0.4em;
}
</style>
