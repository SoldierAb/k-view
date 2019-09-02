import UeditorComp from './src/UeditorComp'

UeditorComp.install = Vue =>{
    Vue.component(UeditorComp.name,UeditorComp)
}

export default UeditorComp