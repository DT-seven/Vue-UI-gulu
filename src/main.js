import Vue from "vue";
import App from "./App.vue";
import "./assets/css/icon.css";
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
import "../src/assets/js/icon";
import "./assets/css/reset.css";
Vue.config.productionTip = false;

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

new Vue({
  render: (h) => h(App),
}).$mount("#app");
