import Tree from './src/Tree.vue';

Tree.install=(Vue)=>{
    Vue.component(Tree.name,Tree);
}

export default Tree;