export function getListeners(context) {
    return (context.$vnode ? context.$vnode.componentOptions.listeners : context.$listeners) || {};
}