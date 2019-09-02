import Terminal from './src/Terminal'

Terminal.install = Vue =>{
    Vue.component(Terminal.name,Terminal)
}

export default Terminal