import SearchComp from './src/SearchComp'

SearchComp.install = Vue =>{
    Vue.component(SearchComp.name,SearchComp)
}

export default SearchComp