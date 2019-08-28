
/**
 * @description 返回当前两点连成的线与Y轴的夹角
 * @author SoldierAb
 * @param {Number} 起始坐标x1,y1     当前坐标x2,y2
 * @returns {Object} 
 * @example                  
 *                           ·
 *                            ·         ^ y
 *                     (x1,y1) *        |
 *                              ·       |
 *                               ·      |
 *                                ·     |
 *                                 ·    |
 *                          (x2,y2) *   |
 *                                   ·  |
 *             -----------------------·-------------------------->
 *                                     ·| O                       x
 *                                      |
 *                                      |·
 *                                      |
 *                                      |
 *                                      |
 *                                      |
 *                                      |
 *                                      |
 * 
 * 
 * 
 * 
 */

export default (x1, y1, x2, y2) => {
    // 直角的边长
    let x = Math.abs(x1 - x2);
    let y = Math.abs(y1 - y2);
    // 斜边长
    let z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    // 余弦
    let cos = y / z;
    // 弧度
    let radina = Math.acos(cos);
    // 角度
    let angle = 180 / (Math.PI / radina);
    return {
        angle: angle,
        xdis: x2 - x1,
        ydis: y2 - y1
    };
}