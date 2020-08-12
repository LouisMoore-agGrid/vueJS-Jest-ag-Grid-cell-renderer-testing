import { mount } from "@vue/test-utils";
import App from "../../src/App.vue";

describe("APP.vue", () => {
  it("Test cell renderers", async (done) => {
    let wrapper = mount(App);

    wrapper.vm.$data.gridOptions.onFirstDataRendered = () => {
      runTest();
    };

    function runTest() {
        expect(wrapper.find(".ag-header-cell").exists()).toBeTruthy();
        const cells = wrapper.findAll(".ag-cell-value");
        const firstCell = cells.at(1);
        expect(firstCell.text()).toEqual("1");
        done();
    }
  });
});

// const ensureFirstCellRendered = (wrapper) => {
//   return new Promise(function (resolve, reject) {
//     (function waitForGridReady() {
//       if (wrapper.instance().gridApi) {
//         resolve(wrapper);
//         return;
//       }
//       setTimeout(waitForGridReady, 100);
//     })();
//   });
// };
