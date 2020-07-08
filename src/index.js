
import FadePop from './components/fade-pop'    
import Loading from './components/loading'
import SideNav from './components/side-nav'
import Tab from './components/tab'
import Table from './components/table'
import ColTable from './components/col-table'
import Tip from './components/tip'
import Tree from './components/tree'
import UploadBtn from './components/upload-btn'
import Markdown from './components/markdown'
import SelectSearch from './components/select-search'
import locale from './locale'
import drag from "./utils/drag";

const components=[
    FadePop,
    SideNav,
    Tree,
    Tip,
    Tab,
    Table,
    ColTable,
    UploadBtn,
    Markdown,
    SelectSearch,
];

const install=(Vue, opts = {})=>{
    locale.use(opts.lang);
    locale.i18n(opts.i18n);
    
    if (install.installed) return;

    Vue.use(Loading)

    Vue.directive("draggable", {
        inserted: function(el, binding) {
          if (binding.value !== false) {
            drag(el.parentNode.parentNode, el);
          }
        },
      });

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
