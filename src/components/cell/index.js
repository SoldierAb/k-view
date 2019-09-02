import ElCell from './src/ElCell'

ElCell.install = Vue =>{
    Vue.component(ElCell.name,ElCell)
}

export default ElCell