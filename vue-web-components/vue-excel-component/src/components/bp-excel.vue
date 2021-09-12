<template>
    <div class="excel_container">
        <ag-grid-vue
            style="height: 24px"
            class="ag-theme-alpine ag-theme-balham table"
            :columnDefs="columnDefs"
            :rowData="rowData"
            :grid-options="gridOptions"
            @grid-ready="onGridReady"
        >
        </ag-grid-vue>
    </div>
</template>
<script>
import { AgGridVue } from "ag-grid-vue";
export default {
    name: "App",
    data() {
        return {
            columnDefs: null,
            rowData: null,
            gridApi: null,
            gridColumnApi: null,
            gridOptions: null
        }
    },
    components: {
        AgGridVue
    },
    props: {
        schemas: Object
    },
    beforeMount() {
        this.columnDefs = [
            { field: 'athlete' },
            { field: 'age' },
            { field: 'country' },
            { field: 'sport' },
            { field: 'year' },
            { field: 'date' },
            { field: 'gold' },
            { field: 'silver' },
            { field: 'bronze' },
            { field: 'total' },
            { field: 'year1' },
            { field: 'date1' },
            { field: 'gold1' },
            { field: 'silver1' },
            { field: 'bronze1' },
            { field: 'total1' }
        ]
        this.gridOptions = {
            defaultColDef: {
                sortable: true,
                resizable: true,
                width: 150,
                enableRowGroup: true,
                enablePivot: true,
                enableValue: true
            },
            sideBar: {
                toolPanels: ['columns']
            },
            rowGroupPanelShow: 'always',
            pivotPanelShow: 'always',
            debug: true,
            columnDefs: this.columnDefs,
            rowData: null
        }
        // this.rowData = []
        // this.rowData = [
        //     { make: "Toyota", model: "Celica", price: 35000 },
        //     { make: "Ford", model: "Mondeo", price: 32000 },
        //     { make: "Porsche", model: "Boxter", price: 72000 }
        // ]
    },
    methods: {
        onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
            if(this.gridApi) {
                this.gridApi.hideOverlay();
            }
        }
    },
    watch: {
        schemas: function (data) {
            let headers = [];
            if (data.headers && data.headers.length > 0) {
                data.headers.forEach((item, index) => {
                    if (item) {
                        headers.push({ headerName: item }); //表头数据
                    }
                });
            }
            this.columnDefs = headers;
            if(this.gridApi) {
                this.gridApi.hideOverlay()
            }
        }
    }
};
</script>
<style lang="scss">
* {
    box-sizing: border-box;
}
.ag-header-row-column,.ag-theme-alpine {
    height: 24px !important;
}
.ag-header-viewport {
    overflow: auto; 
}
@import "../../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css";
@import "../../node_modules/ag-grid-community/dist/styles/ag-grid.css";
</style>