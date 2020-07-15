import Provider from './src/Provider';

Provider.install = Vue =>{
    Vue.component(Provider.name,Provider);
};

export default Provider;