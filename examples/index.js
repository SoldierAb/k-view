import '@babel/polyfill';
import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import KVIEW from '../src';

Vue.use(KVIEW);
Vue.use(Router);

// 开启debug模式
Vue.config.debug = true;

const myRouter = new Router({
    mode: 'hash',
    esModule: false,
    routes: [
        {
            path: '/tree',
            name: 'tree',
            meta: {
                title: '树'
            },
            component: (resolve) => require(['./routers/Tree.vue'], resolve)
        },
        {
            path: '/tip',
            name: 'tip',
            meta: {
                title: 'tip'
            },
            component: (resolve) => require(['./routers/Tip.vue'], resolve)
        },
    ]
});

myRouter.beforeEach((to,from,next)=>{
    document.title=to.meta.title||'';
    next();
})

myRouter.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});

new Vue({
    el: '#root',
    router: myRouter,
    render: r => r(App)
})