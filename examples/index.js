// import '@babel/polyfill';
import Vue from 'vue';
import DemoBox from "./views/DemoBox"
import Router from 'vue-router';
import App from './App.vue';
import KVIEW from '../src';
import routes from './routes'
import formatTime from '../src/utils/format-time'

Vue.component(DemoBox.name, DemoBox)
Vue.use(KVIEW);
Vue.use(Router);

// 开启debug模式
Vue.config.debug = true;

Vue.filter("filterAct", (val, type, property) => {
    if (!type) return val;
    if (!val) return "-";
  
    const filterMap = new Map()
      .set("time", val => {
        return formatTime(val, "Y-M-D h:m:s");
      })
      .set("verify_result", item => {
        const verifyResult = {
          true: {
            type: "success",
            text: "一致",
          },
          false: {
            type: "danger",
            text: "不一致",
          },
        };
        const { result } = item;
        return verifyResult[result][property];
      })
      .set("score", item => {
        return item.toFixed(2);
      })
      .set("duration", item => {
        return (item / 1000).toFixed(3);
      })
      .set("voice_type", item => {
        return {
          1: "文本无关",
          2: "文本相关",
          3: "动态口令",
        }[item];
      });
  
    return filterMap.get(type)(val);
  });

const myRouter = new Router({
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