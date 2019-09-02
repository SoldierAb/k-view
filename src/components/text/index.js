import ElText from './src/ElText'

ElText.install = Vue =>{
    Vue.component(ElText.name,ElText)
}

export default ElText