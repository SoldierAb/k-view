const {vizier,...comps} = require('../../components.json')

export const createRoutes =  (lang = 'zh-CN')=>{

    let routes = Object.keys(comps).map(key=>{
        return {
            path:`/${key}`,
            name:key,
            value:key,
            meta:{
                title:key
            },
            component:()=>import(`../../docs/${lang}/${key}.md`)
        }
    })

    routes = routes.concat({
        path:"/",
        name:"quick-start",
        meta:{
            title:"quick-start",
        },
        component:()=>import(`../../README.md`)
    })

    return routes
};


export let routes = createRoutes()

export const setLangRoutes = lang =>{
    routes = createRoutes(lang)
}