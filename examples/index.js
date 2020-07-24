import Vue from 'vue';
import DemoBox from "./views/DemoBox"
import Router from 'vue-router';
import App from './App.vue';
import KView from '../src';
import { routes } from './router'
import { Select,Option } from 'element-ui'
Vue.use(Select)
Vue.use(Option)

import {Icon} from 'ant-design-vue'

Vue.use(Icon)

Vue.component(DemoBox.name, DemoBox)
Vue.use(KView);
Vue.use(Router);

// 开启debug模式
Vue.config.debug = true;

const myRouter = new Router({
    routes
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