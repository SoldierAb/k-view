const langs = ['en-US','zh-CN']
const comps = require('../../components.json')

export const createRoutes =  (lang = 'zh-CN')=>{

    let routes = Object.keys(comps).map(key=>{
        return {
            path:`/${lang}/${key}`,
            pathKey:`${lang}/${key}`,
            name:key,
            meta:{
                title:key
            },
            component:()=>import(`../../docs/${lang}/${key}.md`)
        }
    })

    routes.unshift({
        path:`/${lang}`,
        pathKey:`${lang}`,
        name:"quick-start",
        meta:{
            title:"quick-start",
        },
        component:()=>import(`../../README${lang === langs[0] ? '':`-${lang}`}.md`)
    })

    return routes
};

export const routes = langs.reduce((prev,lang)=>{
    const langRoutes = createRoutes(lang)
    prev.push(...langRoutes)
    return prev
},[{
    path:'/',
    pathKey:'/',
    name:"quick-start",
    meta:{
        title:"quick-start",
    },
    redirect:'/en-US'
}])

export const langRouteMap = langs.reduce((prev,lang)=>{
    const langRoutes = createRoutes(lang)
    prev[lang]=langRoutes
    return prev
},{})
