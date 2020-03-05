const lang = 'zh-CN';
const components = require('../components.json')

const routes = Object.keys(components).map(key=>{
    return {
        path:`/${key}`,
        name:key,
        meta:{
            title:key
        },
        component:()=>import(`../docs/${lang}/${key}.md`)
    }
})
export default routes;