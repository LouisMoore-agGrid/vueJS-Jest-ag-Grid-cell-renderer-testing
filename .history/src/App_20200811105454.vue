<template>
  <div>
    <ag-grid-vue
      style="width: 100%; height: 400px;"
      class="ag-theme-balham"
      id="myGrid"
      :gridOptions="gridOptions"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :context="context"
      :frameworkComponents="frameworkComponents"
      :defaultColDef="defaultColDef"
    ></ag-grid-vue>
  </div>
</template>

<script>
import Vue from "vue";
import { AgGridVue } from "ag-grid-vue";
import SquareRenderer from "./SquareRenderer";

export default {
  name: "App",
  data() {
    return {
      gridOptions: null,
      gridApi: null,
      columnApi: null,
      columnDefs: null,
      rowData: null,
      context: null,
      frameworkComponents: null,
      defaultColDef: null,
    };
  },
  components: { AgGridVue },
  beforeMount() {
    this.gridOptions = {};
    this.columnDefs = [
      {
        headerName: "Square",
        field: "value",
        cellRenderer: "squareRenderer",
        editable: true,
        colId: "square",
        width: 150,
      },
    ];
    this.rowData = (() => {
      var rowData = [];
      for (var i = 0; i < 5; i++) {
        rowData.push({
          row: "Row " + i,
          value: i,
          currency: i + Number(Math.random().toFixed(2)),
        });
      }
      return rowData;
    })();
    this.context = { componentParent: this };
    this.frameworkComponents = {
      squareRenderer: Vue.extend(SquareRenderer),
    };

    this.defaultColDef = {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
    };
  },
  mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  },
  methods: {},
};
</script>

<style lang="scss">
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
</style>
