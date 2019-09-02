import DataTable from './src/DataTable'

DataTable.install = Vue =>{
    Vue.component(DataTable.name,DataTable);
}

export default DataTable