/**
 * @author SoldierAb
 * @description  浏览器类型获取
 * @return  {String} 
 */

export default ()=>{
    if(!!window.ActiveXObject || "ActiveXObject" in window){
       return "IE";
    }
    if(navigator.userAgent.indexOf("Firefox")!==-1){
       return "Firefox";
    }
    if(navigator.userAgent.indexOf("Chrome")!==-1){
       return "Chrome";
    }
    if(navigator.userAgent.indexOf("Safari")!==-1){
       return "Safari";
    }
 }
 