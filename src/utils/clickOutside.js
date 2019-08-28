/**
 * @description 外部点击自定义指令
 * @author SoldierAb
 * @since 19-01-11
 * @example 
 * 
 *  <template>
 *      <div v-click-outside="func"></div>
 *  </template>
 * 
 *  <script>
 *  import clickOutside from '../utils/clickOutside';
 * 
 *  //全局注册 
 *  Vue.directive('clickOutside',clickOutside);  
 *    
 *   or ---
 * 
 *  //局部注册
 * 
 *  export default{
 *    directives:{clickOutside},
 *  }
 *    
 * </script>
 *   
 * 
 */


const func=(el, binding, vnode)=>{
    // console.log('el--',el);
    // console.log('binding--',binding);
    // console.log('vnode--',vnode);
    const documentHandler =  (e) => {
        // console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!! e ',el,e);
        if (el.contains(e.target)) return false;     
        if (binding.expression) binding.value(e);     
    }
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener('click', documentHandler);
}

export default {
    bind (el, binding, vnode) {
        // return func(el, binding, vnode);
    },
    update (el, binding, vnode) {
        return func(el, binding, vnode);
    },
    unbind (el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
};

