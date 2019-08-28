import Vue from 'vue';

/** 
 * 
 * bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
 * inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
 * update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
 * componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
 * unbind：只调用一次，指令与元素解绑时调用。
 * 
*/


Vue.directive('tip',{
    bind:(el,binding,vNode,oldVNode)=>{
        // console.log(
        //     'bind:  ',el,binding,vNode,oldVNode
        // );
    },
    inserted:(el,binding,vNode,oldVNode)=>{
        // console.log(
        //     'inserted:  ',el,binding,vNode,oldVNode
        // );
    },
    update:(el,binding,vNode,oldVNode)=>{
        // console.log(
        //     'update:  ',el,binding,vNode,oldVNode
        // );
    },
    componentUpdated:(el,binding,vNode,oldVNode)=>{
        // console.log(
        //     'componentUpdated:  ',el,binding,vNode,oldVNode
        // );
    },
    unbind:(el,binding,vNode,oldVNode)=>{
        // console.log(
        //     'unbind:  ',el,binding,vNode,oldVNode
        // );
    }
})
