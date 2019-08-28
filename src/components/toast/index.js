/**
 * @author SoldierAb
 * @param {string} type    eg:'info','success','warning','error'
 * @param {string} message   eg: '提示信息'
 * @param {number} duration    eg: 3000 
 * @param {function} callback   
 * 
 *  how to use:
 * 
 *   import toast from './vue-toast-v.1.0/index.js'
 *   
 *   Vue.use(toast);
 * 
 *   Vue.use(toast,{
 *         color:'red',
 *          background:'lightblue'
 *   });
 * 
 *   this.$toast.center('error','提示信息');  
 * 
 *   this.$toast.top('info','提示信息',1500);
 * 
 *   this.$toast.bottom('success','提示信息',()=>{              //默认为 3000 = 2秒
 *       //do something
 *   })  
 * 
 *   this.$toast.left('warning','提示信息',1500,()=>{           //设置1.5秒后消失
 *       //do something
 *   });
 *   
 */
import './toast.scss';
import './icons/iconfont';
let Toast={};
let toastContainer = null;
let showToast = false;

Toast.installed=false;

Toast.install = (Vue,toastStyle) => {
    if(Toast.installed) return;     //已经挂载
    if(!toastStyle) toastStyle={};
    let numberHeight,{height}=toastStyle;
    if(height){
        numberHeight=height.replace(/[A-Za-z]/g,'');
        if(numberHeight>40) toastStyle.height=height='40px';
        if(numberHeight<30) toastStyle.height=height='30px';
    } 
    toastStyle.width='';
    Vue.prototype.$toast = (position, type, message, duration, callback) => {
        if(!position)  throw new Error('position is necessary!');
        if(!type){
            type='info';
            message='message';
            duration=3000;
            callback=new Function();
        }
        if (showToast) return;
        if (!duration) {
            duration = 3000;
            callback = new Function();
        } else if (getType(duration,'function')) {
            callback = duration;
            duration = 3000;
        } else if (getType(duration,'number')) {
            if(!callback) callback = new Function();
        }
        if (!toastContainer) {
            const ToastTpl = Vue.extend({
                template: '<transition name="bounce">\
                <div :class="`toast clearfix pos_${showPosition} icon${showType}`" :style="style"  v-show="show">\
                    <div class="iconBox fl">\
                         <svg class="icon" aria-hidden="true" style="width:24px;">\
                             <use :xlink:href="`#icon-${showType}`"></use>\
                         </svg>\
                    </div>\
                    <div class="iconContent fr" style="line-height:'+height+'">{{msg}}</div>\
                 </div>\
                </transition>',
                data() {
                    return {
                        show: showToast,
                        style:toastStyle,
                        msg: '提示信息',
                        showType:'info',
                        showPosition:'top'
                    }
                }
            });

            toastContainer = new ToastTpl();
            const tpl = toastContainer.$mount().$el;
            document.body.appendChild(tpl);
        }
        toastContainer.msg = message;
        toastContainer.showType = type;
        toastContainer.showPosition = position;
        toastContainer.show = showToast = true;

        setTimeout(() => {
            toastContainer.show = showToast = false;
            callback();
        }, duration);

        Toast.installed=true;

    }

    ['top', 'left', 'center', 'right', 'bottom'].forEach((position) => {
        return Vue.prototype.$toast[position] = (type, message, duration, callback) => Vue.prototype.$toast(position, type, message, duration, callback);
    })
}


const getType=(obj,_type)=>{
    if( Object.prototype.toString.call(_type)!==`[object String]`){
        throw new Error('_type must be String');
    }
    return Object.prototype.toString.call(obj)===`[object ${_type.substr(0,1).toUpperCase()}${_type.substr(1).toLowerCase()}]`;
}

export default Toast;
