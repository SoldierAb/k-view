/**
 * @author SoldierAb
 * @description 去除JSON对象数组中重复的对象
 * @param {Object} json object arr 
 * @param {String} key 标识
 * @returns {Object}  json object arr
 */

const duplicateJsonRemove=(data,key)=>{
    let hash={};
    data=data.reduce((pre,cur)=>{
        hash[cur[key]]?'':hash[cur[key]]=true&&pre.push(cur);
        return pre;
    },[]);
    return data;
}

export default duplicateJsonRemove;

