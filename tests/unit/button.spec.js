import { expect } from "chai";
import GButton from "@/components/button";
import { mount, createLocalVue } from "@vue/test-utils";
import GIcon from "@/components/icon";

describe("测试button组件", () => {
  it("button", () => {
    expect(GButton).to.exist;
  });
  it("测试Prop的icon", () => {
    const wrapper = mount(GButton, {
      propsData: {
        icon: "shezhi",
      },
    });
    const useElement = wrapper.find("use");
    expect(useElement.attributes("href")).to.equal("#icon-shezhi");
    wrapper.destroy();
  });
  it("测试loading", () => {
    const wrapper = mount(GButton, {
      propsData: {
        loading: true,
      },
    });
    const lodingElement = wrapper.find("use");
    expect(lodingElement.attributes()["href"]).to.eq("#icon-jiazai");
    wrapper.destroy();
  });
  it("测试iconPosition传值", () => {
    const wrapper = mount(GButton, {
      propsData: {
        icon: "shezhi",
        iconPosition: "right",
      },
    });
    const lodingElement = wrapper.find("button");
    expect(lodingElement.attributes()["class"]).to.eq("g-button icon-right");
    wrapper.destroy();
  });
  it("查看slot插槽中内容", () => {
    const localVue = createLocalVue();
    localVue.use(GIcon);
    const wrapper = mount(GButton, {
      localVue,
      slots: {
        default: "按钮",
      },
      propsData: {
        icon: "shezhi",
        iconPosition: "right",
      },
    });
    const icon = wrapper.find(".content");
    expect(icon.text()).to.eq("按钮");
    wrapper.destroy();
  });
  it("测试emit事件是否触发", () => {
    const wrapper = mount(GButton, {
      propsData: {
        icon: "shehzi",
      },
    });
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted("click").length).to.eq(1);
  });
});
