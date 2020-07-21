import HelloWorld from './src/HelloWorld';

HelloWorld.install = Vue =>{
    Vue.component(HelloWorld.name,HelloWorld);
};

export default HelloWorld;