/**
 * @description 节流  [delay 时间内只执行一次]
 * @author SoldierAb
 * @param {Function} func  
 * @param {Number} delay  单位：ms
 */

export default (func,delay)=>{
    let timer = null;
    if(!func) return;
    if(!getType(func,'Function')){
        throw new Error(`the 1st param must be a Function at throttleUtil`);
    }
    if(!delay)  delay=300;                       //默认时间间隔300毫秒
    let startTime = Date.now();
    return ()=>{
        let ctx=this,args=arguments;
        let curTime = Date.now();
        let remaining = delay-(curTime-startTime);
        clearTimeout(timer);
        if(remaining<=0){
            func.apply(ctx,args);
            startTime = Date.now();
        }else{
            timer = setTimeout(()=>{
                func.apply(ctx,args);
            },remaining);
        }
    }
}



const getType = (obj,_type) =>{
    if( Object.prototype.toString.call(_type)!==`[object String]`){
        throw new Error(' _type must be String at getType');
    }
    return Object.prototype.toString.call(obj)===`[object ${_type.substr(0,1).toUpperCase()}${_type.substr(1).toLowerCase()}]`;
} 