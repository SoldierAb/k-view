const drag = (el)=>{
    let {innerHeight:height,innerWidth:width} = window;
    const {clientHeight,clientWidth} = el;
    const maxLeft = width -clientWidth;
    const maxTop = height - clientHeight;
    
    el.style.position = "fixed";
    
    el.onmousedown = (ev)=>{
        const e = ev||window.event;
        const posLeft = e.clientX - el.offsetLeft;
        const posTop  =e.clientY - el.offsetTop;

        document.onmousemove = (event)=>{
            const _e  = event||window.event;
            let curX = _e.clientX - posLeft;
            let curY = _e.clientY - posTop;
            curX = curX<=0?0:(curX>=maxLeft?maxLeft:curX);
            curY = curY<=0?0:(curY>=maxTop?maxTop:curY);
            el.style.margin = 0;
            el.style.left = `${curX}px`;
            el.style.top = `${curY}px`;
        }

        document.onmouseup = ()=>{
            document.onmousemove  = document.onmouseup = null;
        }
        return false;
    }
}


export default drag;