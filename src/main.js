import Vue from "vue";
import App from "./App.vue";
import "./assets/css/icon.css";
import GIcon from "./components/icon.vue";
import GButton from "./components/button.vue";
import ButtonGroup from "./components/ButtonGroup.vue";
import GInput from "./components/input.vue";
import GCol from "./components/col.vue";
import GRow from "./components/row.vue";
import GLayout from "./components/layout.vue";
import GHeader from "./components/header.vue";
import GFooter from "./components/footer.vue";
import GSider from "./components/sider.vue";
import GContent from "./components/content.vue";
import plug from "./components/plugin";
import "../src/assets/js/icon";
import "./assets/css/reset.css";
import GTabs from "./components/tabs.vue";
import GTabsHead from "./components/tabs-head.vue";
import GTabsItem from "./components/tabs-item.vue";
import GTabsBody from "./components/tabs-body.vue";
import GTabsPane from "./components/tabs-pane.vue";
import GPopover from "./components/popover.vue";
import GCollapse from "./components/collapse.vue";
import GCollapseItem from "./components/collapse-item.vue";
Vue.config.productionTip = false;
Vue.use(plug);
Vue.component("g-collapse-item", GCollapseItem);
Vue.component("g-collapse", GCollapse);
Vue.component("g-popover", GPopover);
Vue.component("g-icon", GIcon);
Vue.component("g-button", GButton);
Vue.component("button-group", ButtonGroup);
Vue.component("g-input", GInput);
Vue.component("g-col", GCol);
Vue.component("g-row", GRow);
Vue.component("g-layout", GLayout);
Vue.component("g-header", GHeader);
Vue.component("g-footer", GFooter);
Vue.component("g-sider", GSider);
Vue.component("g-content", GContent);
Vue.component("g-tabs", GTabs);
Vue.component("g-tabs-head", GTabsHead);
Vue.component("g-tabs-item", GTabsItem);
Vue.component("g-tabs-body", GTabsBody);
Vue.component("g-tabs-pane", GTabsPane);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
