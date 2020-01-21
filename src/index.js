
import Tree from './components/tree';
import Tip from './components/tip'
    
const components=[
    Tree,
    Tip
];

const install=(Vue)=>{

    if (install.installed) return;

    components.forEach(item=>{
        Vue.component(item.name,item);
    })

}


if (typeof window !== 'undefined'&&window.Vue){
    install(window.Vue)
}

const KVIEW = {
    install,
    ...components,
}

export default KVIEW;
