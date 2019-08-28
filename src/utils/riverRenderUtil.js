/** 
 * @description 河流动画
 * @author SoldierAb
 * @since 18-12-25
 * 
 *  正弦曲线公式：y = A sin(Bx + C) + D
 *
 *  振幅是 A，A 值越大，曲线更陡峭：
 *
 *  周期是 2π/B，B 值大于 1 时，B 值越大，周期越短，B 值小于 1 大于 0 时，周期变长：
 *
 *  相移是 −C/B，在 B 不变的情况，C 为正值时，曲线向左移动，C 为负值时，曲线向右移动：
 *
 *  垂直位移是 D，控制曲线上下移动：
 * 
 */

class riverRenderUtil {

  constructor({
    speed,
    heave,
    cx,
    strokeStyle,
    cxW,
    cxH,
    lineWidth
  }) {
    this.heave = heave || 5;
    this.speed = speed || 200;
    this.cxW = cxW;
    this.cxH=cxH;
    this.cx = cx;
    this.timer = null;
    this.lineWidth = lineWidth;
    this.strokeStyle = strokeStyle;
  }

  flow = () => {
    let {
      speed
    } = this;
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      this.drawWave();
    }, speed)
  }

  stop = () => {
    clearInterval(this.timer);
  }


 
  clear(){
    let {cx,cxW,cxH}=this;
    cx&&cx.clearRect(0,0,cxW,cxH);
  }


  drawWave = () => {
    this.clear();
    const {
      cx,
      strokeStyle,
      lineWidth,
      cxW,
      cxH,
      heave
    } = this;
    cx.strokeStyle = strokeStyle;
    cx.lineWidth = lineWidth;
    cx.beginPath();
    cx.moveTo(0, 150);
    console.log('render');
    for (let i = 1; i < cxW; i += 0.1) {
      let x = i * heave;
      let y = Math.sin(i) * 10 + 170;
      cx.lineTo(x, y);
    }
    cx.stroke();
    cx.closePath();
  }

}


export default riverRenderUtil;
