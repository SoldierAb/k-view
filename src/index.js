
import KTree from './components/tree';

    
const components={
    KTree,
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
    KTree,
}

export default KVIEW;
