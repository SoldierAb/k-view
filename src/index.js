// import locale from './locale';
import drag from "./utils/drag";

import FadePop from './components/fade-pop';    
import Loading from './components/loading';
import SideNav from './components/side-nav';
import Table from './components/table';
import ColTable from './components/col-table';
import Tip from './components/tip';
import Tab from './components/tab';
import Tree from './components/tree';
import UploadBtn from './components/upload-btn';
import Markdown from './components/markdown';
import SelectSearch from './components/select-search';
import SearchBar from './components/search-bar';
import Provider from './components/provider';

const components=[
  Provider,
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
  SearchBar,
];

const install=(Vue,
    // opts = {}
  )=>{
    // locale.use(opts.lang);
    // locale.i18n(opts.i18n);
    
    if (install.installed) return;

    Vue.use(Loading);
    Vue.directive("draggable", {
        inserted(el, binding) {
          if (binding.value !== false) {
            drag(el.parentNode.parentNode, el);
          }
        },
      });

    components.forEach(item=>{
        Vue.component(item.name,item);
    });

    install.installed= true;
};


if (typeof window !== 'undefined'&&window.Vue){
    install(window.Vue);
}

const VizierUI = {
    // i18n: locale.i18n,
    // locale,
    install,
    ...components,
};

export default VizierUI;
