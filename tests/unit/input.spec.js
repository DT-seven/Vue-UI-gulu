import { mount } from "@vue/test-utils";
import { expect } from "chai";
import Input from "../../src/components/input.vue";

describe("input组件", () => {
  it("测试input的存在", () => {
    expect(Input).to.exist;
  });
});
describe("input组件", () => {
  const factory = (p) => {
    return mount(Input, {
      propsData: {
        ...p,
      },
    });
  };
  it("测试value", () => {
    const wrapper = factory({ value: "123" });
    const valueElement = wrapper.vm.$el.querySelector("input");
    expect(valueElement.value).to.eq("123");
    wrapper.destroy();
  });
  it("测试disabled", () => {
    const wrapper = factory({ disabled: true });
    const valueElement = wrapper.vm.$el.querySelector("input");
    expect(valueElement.disabled).to.eq(true);
    wrapper.destroy();
  });
  it("测试readOnly", () => {
    const wrapper = factory({ readOnly: true });
    const valueElement = wrapper.vm.$el.querySelector("input");
    expect(valueElement.readOnly).to.eq(true);
    wrapper.destroy();
  });
  it("测试error", () => {
    const wrapper = factory({ error: "123" });
    const valueElement = wrapper.find("input");
    expect(valueElement.attributes()["error"]).to.eq("123");
    wrapper.destroy();
  });
  it("测试icon中的props中的name", () => {
    const wrapper = factory({ name: "test", error: "123" });
    const useElement = wrapper.find("use");
    expect(useElement.attributes()["href"]).to.eq("#icon-test");
    wrapper.destroy();
  });
  it("测试icon中的props中的name", () => {
    const wrapper = factory({ name: "test", error: "wrong" });
    const useElement = wrapper.find("span");
    expect(useElement.text()).to.eq("wrong");
    wrapper.destroy();
  });
});

describe("测试input事件", () => {
  it("测试change", () => {
    const wrapper = mount(Input);
    const inputElement = wrapper.find("input");
    inputElement.trigger("change");
    expect(wrapper.emitted("change").length).to.eq(1);
  });
});
