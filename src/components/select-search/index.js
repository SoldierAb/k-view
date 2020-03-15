import SelectSearch from "./src/SelectSearch";

SelectSearch.install = Vue => {
  Vue.component(SelectSearch.name, SelectSearch);
};

export default SelectSearch;
