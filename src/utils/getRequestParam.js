/**
 * @author SoldierAb
 * @description  获取地址栏参数
 * @param {String} str 字符串
 */

export default (str) => {
  let urlParamStr = str || window.location.href.split('?')[1]; //获取url中"?"符后的字串
  if(!urlParamStr) return 'urlParamStr param is null';
  let theRequest = {},strs = urlParamStr.split("&");
  for (let i = 0; i < strs.length; i++) {
    let splitObj=strs[i].split("=");
    theRequest[splitObj[0]] = decodeURI(splitObj[1]);
  }
  return theRequest;
}
