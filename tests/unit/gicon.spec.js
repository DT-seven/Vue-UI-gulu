import { expect } from "chai";
import GIcon from "@/components/icon.vue";
import { mount } from "@vue/test-utils";

describe("测试icon组件的存在", () => {
  it("测试icon", () => {
    expect(GIcon).to.exist;
  });
});
describe("测试icon组件中属性和方法", () => {
  const wrapper = mount(GIcon, {
    propsData: {
      name: "shezhi",
    },
  });
  afterEach(() => {
    wrapper.destroy();
  });
  it("测试icon组件中svg中是否包含icon属性", () => {
    const svgClass = wrapper.vm.$el.querySelector("svg").getAttribute("class");
    expect(svgClass).to.equal("icon");
  });
  it("测试icon中的props中的name", () => {
    const useElement = wrapper.vm.$el.querySelector("use");
    expect(useElement.getAttribute("xlink:href")).to.equal("#icon-shezhi");
  });
});
