import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import KVIEW from '../src';

Vue.use(KVIEW);
Vue.use(Router);

const myRouter = new Router({
    mode: 'hash',
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
            path: '/treeselect',
            name: 'treeselect',
            meta: {
                title: '下拉树'
            },
            component: (resolve) => require(['./routers/TreeSelect.vue'], resolve)
        },
        {
            path: '/button',
            name: 'button',
            meta: {
                title: '按钮'
            },
            component: (resolve) => require(['./routers/Button.vue'], resolve)
        }
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