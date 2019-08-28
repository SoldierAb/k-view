/**
 * @author SoldierAb
 * @description  绘制光标箭头
 */



import getAngle from './getAngle';

export default ({ cxt, x1, y1, x2, y2, color }) => {
    console.log(x1, y1, x2, y2);
    if (!x1) x1 = 0;
    if (!x2) x2 = 0;
    if (!color) color = 'red';
    //角度获取
    let { angle, xdis, ydis } = getAngle(x1, y1, x2, y2);
    // let { angle, xdis, ydis } = getAngle(0,0, x2, y2);
    // console.log('-------------------',angle,xdis,ydis);
    //旋转角度计算
    // if (xdis < 0 && ydis < 0) {
    //     if(angle) cxt.rotate(((angle) / 360) * Math.PI * 2);
    // } else if (xdis < 0 && ydis > 0) {
    //     if(angle) cxt.rotate(((angle + 180) / 360) * Math.PI * 2);
    // } else if (xdis > 0 && ydis > 0) {
    //     if(angle) cxt.rotate(((270 - angle) / 360) * Math.PI * 2);
    // } else if (xdis > 0 && ydis < 0) {
    //     if(angle) cxt.rotate(((angle + 90) / 360) * Math.PI * 2);
    // }

    //渐变色设置
    // let grd = cxt.createLinearGradient(x2, y2, x2+20, y2);
    let grd = cxt.createLinearGradient(0, 0, 20, 0);
    grd.addColorStop(0, 'white');
    grd.addColorStop(1, "white");
    cxt.fillStyle = grd;

    //绘制图例样式
    cxt.beginPath();
    cxt.arc(x2, y2, 10, Math.PI * 0.5, Math.PI * 1.5);
    cxt.lineTo(x2, y2-10);
    cxt.lineTo(x2+20, y2-4); //尾巴，坐标同渐变结束点
    cxt.lineTo(x2+20, y2+4); //尾巴，坐标同渐变结束点
    cxt.lineTo(x2, y2+10);
    cxt.fill();
    cxt.closePath();
}