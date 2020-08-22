module.exports = {
  base: "/Vue-UI-gulu/",
  title: "MyComponents",
  description: "📦 🎨 A api-friendly theme for VuePress.",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "GitHub", link: "https://github.com/DT-seven" },
      { text: "谷歌", link: "https://google.com" },
    ],
    sidebar: [
      {
        title: "入门",
        collapsable: false,
        children: ["/install/", "/get-started/"],
      },
      {
        title: "组件",
        collapsable: false,
        children: [
          "/components/icon",
          "/components/button",
          "/components/tabs",
          "/components/input",
          "/components/grid",
          "/components/layout",
          "/components/toast",
          "/components/popover",
          "/components/collapse",
          // "/components/slides",
          // "/components/cascader",
          // "/components/date-picker",
          // "/components/sticky",
          // "/components/pager",
          // "/components/nav",
          // "/components/uploader",
          // "/components/validate",
          // "/components/scroll",
          // "/components/table",
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true,
  },
};
