/**
 * @author SoldierAb
 * @description Vue跨组件通信库
 * @example
 *       import Bus from '@/utils/vueBus';
 *       Vue.use(Bus);
 * 
 *       this.$bus.emit('refresh', ...args);
 * 
 *       created() {
 *           this.$bus.on("refresh", fn);
 *       },
 *
 *       beforeDestroy() {                                       // ~ attention ~  一定要记得解绑事件，不然会造成内存泄漏哦
 *           this.$bus.off("refresh");
 *       },
 *          
 */

const install  = (Vue)=>{
    const Bus = new Vue({
        methods:{
            emit(event,...args){
                this.$emit(event,...args);
            },
            on(event,callback){
                this.$on(event,callback);
            },
            off(event,callback){
                this.$off(event,callback);
            }
        }
    })

    Vue.prototype.$bus=Bus
}


export default install;