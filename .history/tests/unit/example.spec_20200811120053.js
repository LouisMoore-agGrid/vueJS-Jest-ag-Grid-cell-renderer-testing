import { mount } from "@vue/test-utils";
import App from "../../src/App.vue";

describe('APP.vue', () => {
  it('Test cell renderers', async () => {
    let wrapper = mount(App);
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".ag-header-cell").exists()).toBeTruthy();
    await wrapper.vm.$forceUpdate();
    const cells = wrapper.findAll('.test');
    const firstCell = cells.at(1)
    expect(firstCell.text()).toEqual("1");
  })
})
