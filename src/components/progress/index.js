import './progress.scss';
import Vue from 'vue';

const StrongProgress=Vue.component('StrongProgress',{
    template:'<div class="strong-progress-container">\
        <div class="progress-role" :style="`border-radius:${radius}px;background:${color};width:calc(${start}% - 2px);height:${height-2}px`">\
            <div class="progress-number-container" :style="`line-height:${height}px;bottom:${bottom}px`" v-show="progressPosition===\'follow\'">\
                <div class="progress-number" :style="`color:${fontColor}`">{{start}}%</div>\
            </div>\
        </div>\
        <div class="progress-role-container"  :style="`border:1px solid ${borderColor};border-radius:${radius}px;background:${background};height:${height}px`">\
            <div class="progress-number-container" :style="`line-height:${height}px;bottom:${bottom}px`" v-show="progressPosition!==\'follow\'">\
                <div class="progress-number" :style="`width: 100%;color:${fontColor};text-align:${progressPosition}`">{{start}}%</div>\
            </div>\
        </div>\
    </div>',
    props:{
        start:{
            type:Number,
            default:0,
        },
        end:{
            type:Number,
            default:100
        },
        height:{
            type:Number,
            default:10
        },
        color:{
            type:String,
            default:'#1586ff',
        },
        borderColor:{
            type:'String',
            default:'white'
        },
        bottom:{
            type:Number,
            default:0
        },
        background:{
            type:String,
            default:'#f0f0f0'
        },
        fontColor:{
            type:String,
            default:'white'
        },
        radius:{},
       progressPosition:{
           default:'follow'
       }
    },
    data(){
        return {
            text:'progress',
        }
    },
})

export default StrongProgress;

