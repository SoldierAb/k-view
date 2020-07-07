
import FadePop from './components/fade-pop'    
import Loading from './components/loading'
import SideNav from './components/side-nav'
import Table from './components/table'
import Tip from './components/tip'
import Tree from './components/tree'
import UploadBtn from './components/upload-btn'
import Markdown from './components/markdown'
import SelectSearch from './components/select-search'
import locale from './locale'

const components=[
    FadePop,
    SideNav,
    Tree,
    Tip,
    Table,
    UploadBtn,
    Markdown,
    SelectSearch,
];

const install=(Vue, opts = {})=>{
    locale.use(opts.lang);
    locale.i18n(opts.i18n);
    
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
    locale: locale.use,
    i18n: locale.i18n,
    install,
    ...components,
}

export default KVIEW;
