import { mount } from "@vue/test-utils";
import App from "../../src/App.vue";
let firstDataRendered = false;

describe('APP.vue', () => {
  it('Test cell renderers', async (done) => {
    let wrapper = mount(App);

    // console.log(wrapper.vm.$data.gridOptions.onFirstDataRendered = ()=>{firstDataRendered = true})


    // setTimeout(() => {
    //   expect(wrapper.find(".ag-header-cell").exists()).toBeTruthy();
    // const cells = wrapper.findAll('.ag-cell-value');
    // const firstCell = cells.at(1)
    // expect(firstCell.text()).toEqual("1");
    //   done()
    // }, 3000)
  

  })





})



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