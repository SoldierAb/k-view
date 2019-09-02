import DropBox from './src/DropBox'

DropBox.install = Vue =>{
    Vue.component(DropBox.name,DropBox)
}

export default DropBox