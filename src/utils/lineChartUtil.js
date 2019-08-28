/**
* @description 折线图绘制
* @author SoldierAb
* @param {Object}   cx 画布实例
* @param {Array} renderData  绘制数据
* @param {Number} cxH   画布高度
* @param {Number} cxW   画布宽度
* @param {Number} lineWidth  线条宽度 
* @param {String} strokeStyle 线条颜色
* @param {String} backgroundStyle 背景颜色
* @param {String} fillStyle 填充颜色
* @param {Number} splitLen 分割份数
* @example   
*   const lineInstance=new lineChartUtil(ParamObj);
*   lineInstance.render();
*/


class lineChartUtil{
  constructor({cx,renderData,cxH,cxW,lineWidth,strokeStyle,backgroundStyle,fillStyle,splitLen}){
    this.cx=cx;
    this.cxH=cxH;
    this.cxW=cxW;
    this.splitLen=splitLen;
    this.lineWidth=lineWidth;
    this.fillStyle=fillStyle;
    this.strokeStyle=strokeStyle;
    this.backgroundStyle=backgroundStyle;
    this.renderData=renderData;
    // console.log(this.renderData);
  }

  render(){
    let {cx,lineWidth,strokeStyle,renderData,cxH,cxW,backgroundStyle,splitLen,fillStyle}=this;
    this.clear();
    if(!renderData) throw new Error('renderData is required!');
    //面板背景绘制
    if(backgroundStyle) this.drawBg(cx,[0,0],cxW,cxH,backgroundStyle);

    //坐标轴绘制
    if(splitLen){
      for(let i=1;i<splitLen;i++){
        this.drawLine(cx,[0,i*cxH/splitLen],[cxW,i*cxH/splitLen - 2],0.2,strokeStyle);
      }
    } 

    //过程线绘制
    for(let i=0;i<renderData.length-1;i++){
      this.drawLine(cx,renderData[i],renderData[i+1],lineWidth,strokeStyle);
    }

    //折线填充颜色
    if(fillStyle) this.fillBg(cx,[0,cxH],[cxW,cxH],renderData,fillStyle,strokeStyle,lineWidth);
  }

  clear(){
    let {cx,cxW,cxH}=this;
    cx&&cx.clearRect(0,0,cxW,cxH);
  }

  fillBg(cx,startPos,endPos,renderData,fillStyle){
    cx.fillStyle=fillStyle;
    cx.beginPath();
    cx.moveTo(...startPos);
    for(let i=0;i<renderData.length;i++){
        cx.lineTo(...renderData[i]);
    }
    cx.lineTo(...endPos);
    cx.closePath();
    cx.fill();
    cx.save();
  }

  drawLine(cx,startPos,endPos,lineWidth,strokeStyle){
    cx.lineWidth=lineWidth;
    cx.strokeStyle=strokeStyle;
    cx.beginPath();
    cx.moveTo(...startPos);
    cx.lineTo(...endPos);
    cx.stroke();
    cx.closePath();
    cx.save();
  }

  drawBg(cx,startPos,cxW,cxH,fillStyle){
    cx.fillStyle=fillStyle;
    cx.beginPath();
    cx.moveTo(...startPos);
    cx.rect(...startPos,cxW,cxH);
    cx.fill();
    cx.closePath();
    cx.save();
  }

  resize(){
    let {cx,cxH,cxW}=this;
    cx.clearRect(0,0,cxW,cxH);
    this.render();
  }
}

export default lineChartUtil;
