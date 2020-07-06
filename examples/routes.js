const lang = 'zh-CN';
const components = require('../components.json')
const routes = Object.keys(components).map(key=>{
    return {
        path:`/${key}`,
        name:key,
        value:key,
        meta:{
            title:key
        },
        // component:()=>import(`../docs/${lang}/${key}.md`)
        component:resolve => require([`../docs/${lang}/${key}.md`], resolve)
    }
})
export default routes;