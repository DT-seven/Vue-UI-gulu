import Vue from "vue";
import App from "./App.vue";
import "./assets/css/icon.css";
import GButton from "./components/button.vue";
import ButtonGroup from "./components/ButtonGroup.vue";
import "../src/assets/js/icon";
import "./assets/css/reset.css";
Vue.config.productionTip = false;

Vue.component("g-button", GButton);
Vue.component("button-group", ButtonGroup);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
