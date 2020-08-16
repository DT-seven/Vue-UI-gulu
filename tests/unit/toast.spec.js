import { mount } from "@vue/test-utils";
import { expect } from "chai";
import Toast from "../../src/components/toast.vue";
import Vue from "vue";
let chai = require("chai");
let sinon = require("sinon");
let sinonChai = require("sinon-chai");
chai.use(sinonChai);

describe("Toast组件", () => {
  it("测试Toast的存在", () => {
    expect(Toast).to.exist;
  });
});
describe("测试Toast组件的功能", () => {
  const factory = (p) => {
    return mount(Toast, {
      propsData: {
        ...p,
      },
    });
  };
  it("测试autoClose和closeTime", (done) => {
    let div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Toast);
    const vm = new Constructor({
      propsData: {
        autoClose: true,
        closeTime: 1,
      },
    }).$mount(div);
    setTimeout(() => {
      expect(document.body.contains(vm.$el)).to.eq(false);
      done();
    }, 2000);
  }).timeout(6000);
  it("测试closeButton", (done) => {
    const callback = sinon.fake();
    const wrapper = factory({
      autoClose: true,
      closeButton: {
        text: "g",
        callback,
      },
    });
    let closeButton = wrapper.find(".close");
    console.log(wrapper.find(".toastContent").html());
    expect(closeButton.text()).to.eq("g");
    setTimeout(() => {
      closeButton.trigger("click");
      expect(callback).to.have.been.called;
      done();
    }, 200);
  });
});
