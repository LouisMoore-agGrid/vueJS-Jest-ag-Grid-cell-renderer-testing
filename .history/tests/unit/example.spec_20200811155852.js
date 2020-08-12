import { mount } from "@vue/test-utils";
import App from "../../src/App.vue";

describe("APP.vue", () => {
  // workaround, is this ok to do?
  // it("Test cell renderers", async (done) => {
  //   let wrapper = mount(App);
  //   wrapper.vm.$data.gridOptions.suppressAnimationFrame=true
  //       expect(wrapper.find(".ag-header-cell").exists()).toBeTruthy();
  //       const cells = wrapper.findAll(".ag-cell-value");
  //       const firstCell = cells.at(1);
  //       expect(firstCell.text()).toEqual("1");
  //       done();
  // });

  it('Test cell renderers', async (done) => {
    let wrapper = mount(App);
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".ag-header-cell").exists()).toBeTruthy();
    setTimeout(() => {
      const cells = wrapper.findAll('.ag-cell-value');
      expect(cells.at(0).text()).toEqual("0");
      done();
    })
  }, 20)

// Used to work in v20.2.0 but breaks in newest, is this a regression?
  // it("Test cell renderers", async (done) => {
  //   let wrapper = mount(App);
  //       expect(wrapper.find(".ag-header-cell").exists()).toBeTruthy();
  //       const cells = wrapper.findAll(".ag-cell-value");
  //       const firstCell = cells.at(1);
  //       expect(firstCell.text()).toEqual("1");
  //       done();
  //   })
  








})

