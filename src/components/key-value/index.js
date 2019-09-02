import KeyValue from './src/KeyValue'

KeyValue.install = Vue =>{
    Vue.component(KeyValue.name,KeyValue)
}

export default KeyValue