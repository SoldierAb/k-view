
import Tree from './components/tree';

    
const components={
    Tree,
};

const install=(Vue)=>{

    if (install.installed) return;

    Object.keys(components).forEach(key=>{
        Vue.component(key,components[key]);
    })

}


if (typeof window !== 'undefined'&&window.Vue){
    install(window.Vue)
}

const KVIEW = {
    install,
    Tree,
}

export default KVIEW;
