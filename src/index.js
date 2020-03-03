
import Tree from './components/tree';
import SideNav from './components/side-nav'
import Loading from './components/loading'
import Tip from './components/tip'
import {Button} from "element-ui";
    
const components=[
    SideNav,
    Tree,
    Tip,
    Button,
];

const install=(Vue)=>{

    if (install.installed) return;
    
    Vue.use(Loading)
    
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
