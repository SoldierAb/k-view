/**
 * @description 防抖  [一段时间内，若干个函数调用合成一次，并在给定时间过去之后只执行一次]
 * @author SoldierAb
 * @param {Function} func  
 * @param {Number || Boolean} duration  单位：ms
 * @param {Boolean} immediate 
 */


export default (fn,duration,immediately)=>{
    let timer=null;
    if(!fn) return;
    if(!getType(fn,'Function')){
        throw new Error(`the 1st param must be a Function at debounceUtil`);
    }
    if(!duration){
        duration=300;                       //默认时间间隔300毫秒
        immediately=true;                   //默认触发之后立即执行一次
    }
    if(!immediately){
        if(!getType(fn,'Function')){
            throw new Error(`the 1st param must be a Function at debounceUtil`);
        }
        if(getType(duration,'Boolean')){
            immediately=duration;    
            duration=300;          //默认时间间隔300毫秒
        }else if(getType(duration,'Number')){
            immediately=true;
        }else{
            throw new Error(`the 2nd param must be a Number or Boolean at debounceUtil`);
        }
    } 
    return ()=>{
        let ctx=this,args=arguments;
        if(timer) clearTimeout(timer);
        if(immediately){
            let doImmediately=!timer;
            timer=setTimeout(()=>{
                fn.apply(ctx,args);
            },duration);
            if(doImmediately){
                fn.apply(ctx,args);
            } 
        }else{
            timer=setTimeout(()=>{
                console.log('run after');
                fn.apply(ctx,args);
            },duration)
        }
    }
    
}


const getType = (obj,_type) =>{
    if( Object.prototype.toString.call(_type)!==`[object String]`){
        throw new Error(' _type must be String at getType');
    }
    return Object.prototype.toString.call(obj)===`[object ${_type.substr(0,1).toUpperCase()}${_type.substr(1).toLowerCase()}]`;
} 