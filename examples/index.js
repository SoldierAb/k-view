import hljs from 'highlight.js';
require('highlight.js/styles/default.css')
import Vue from 'vue';
import DemoBox from "./views/DemoBox"
import Router from 'vue-router';
import App from './App.vue';
import KVIEW from '../src';
import routes from './routes'

Vue.component(DemoBox.name, DemoBox)
Vue.use(KVIEW);
Vue.use(Router);

// 开启debug模式
Vue.config.debug = true;

const myRouter = new Router({
    mode: 'hash',
    routes,
});

myRouter.beforeEach((to, from, next) => {
    document.title = to.meta.title || '';
    next();
})

myRouter.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
    Vue.nextTick(() => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    });
});

new Vue({
    el: '#root',
    router: myRouter,
    render: r => r(App)
})