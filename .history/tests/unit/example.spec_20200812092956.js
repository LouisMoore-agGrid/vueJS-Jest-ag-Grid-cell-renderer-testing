import { mount } from "@vue/test-utils";
import App from "../../src/App.vue";

describe("APP.vue", () => {

  it('Test cell renderers', async (done) => {
    let wrapper = mount(App);
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".ag-header-cell").exists()).toBeTruthy();
    setTimeout(() => {
    const cells = wrapper.findAll('.ag-cell-value');
    const firstCell = cells.at(1)
    expect(firstCell.text()).toEqual("1");
      done()
    }, 10)
  

  })

})

