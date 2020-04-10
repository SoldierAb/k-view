export default class Event{

    static add(t,eventName,cb){
        if(window.addEventListener){
            t.addEventListener(eventName,cb,false)
        }else if(window.attachEvent){
            t.attachEvent(`on${eventName}`,cb)
        }else{
            t[`on${eventName}`] = cb;
        }
    }

    static del(t,eventName,cb){
        if(window.removeEventListener){
            t.removeEventListener(eventName,cb,false)
        }else if(window.detachEvent){
            t.detachEvent(`on${eventName}`,cb)
        }else{
            t[`on${eventName}`] = null;
        }
    }

}