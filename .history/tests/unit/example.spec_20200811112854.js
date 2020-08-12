import { mount } from "@vue/test-utils";
import App from "../../src/App.vue";

describe('APP.vue', () => {
  it('Test cell renderers', async () => {
    let wrapper = mount(App);
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".ag-header-cell").exists()).toBeTruthy();
    await wrapper.vm.$nextTick();
    const cells = wrapper.findAll('.ag-cell-value');
    await cells.at(1).vm.$nextTick();
    expect(cells.at(1).text()).toEqual("1");
  })
})
