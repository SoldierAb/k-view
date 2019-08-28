/**
 * @author SoldierAb
 */

import './loading.scss';

let LoadingContainer=null;

const Loading=(Vue,{background,color})=>{
    if(!background) background='rgba(0,0,0,0.6)';
    if(!color) color='#4b9cdb';
    Vue.prototype.$loading=(showLoading,callback)=>{
        if(!LoadingContainer){
            const LoadingTpl=Vue.extend({
                template:'<div class="loading-gui-box" v-show="show">\
                    <div class="containerBox backgroundTM">\
                        <div class="loading-container">\
                            <div class="loading-box">\
                                <div class="k-line k-line-1" :style="`background:${color}`"></div>\
                                <div class="k-line k-line-2" :style="`background:${color}`"></div>\
                                <div class="k-line k-line-3" :style="`background:${color}`"></div>\
                                <div class="k-line k-line-4" :style="`background:${color}`"></div>\
                                <div class="k-line k-line-5" :style="`background:${color}`"></div>\
                            </div>\
                        </div>\
                    </div>\
                </div>',
                data(){
                    return{
                        show:false,
                        background:background,
                        color:color
                    }
                },
            })
            LoadingContainer=new LoadingTpl();
            const tpl=LoadingContainer.$mount().$el;
            document.body.appendChild(tpl);
        }
        LoadingContainer.show=showLoading;
        if(!callback) callback=new Function();
        callback();
    }
    ['show','hide'].forEach((item)=>{
        return Vue.prototype.$loading[`${item}`]= (callback) => Vue.prototype.$loading(item==='show',callback);
    })
}


export default Loading;