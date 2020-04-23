import Text from './src/Text'

Text.install = Vue=>{
    Vue.component(Text.name,Text);
}

export default Text