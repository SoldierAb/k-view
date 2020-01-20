import Table from "./src/Table";

Table.install = Vue => {
  Vue.component(Table.name, Table);
};

export default Table;
