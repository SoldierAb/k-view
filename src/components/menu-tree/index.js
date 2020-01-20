import MenuTree from './src/MenuTree'

MenuTree.install = Vue => {
    Vue.component(MenuTree.name, MenuTree);
}

export default MenuTree;