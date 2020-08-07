import Toast from "./toast.vue";
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message) {
      let Constructor = Vue.extend(Toast);
      let toast = new Constructor();
      toast.$slots.default = [message];
      toast.$mount();
      let toastElement = document.body.querySelector("#toast");
      toastElement.appendChild(toast.$el);
      if (toastElement.children.length >= 3) {
        toastElement.removeChild(toastElement.children[1]);
      }
    };
  },
};
