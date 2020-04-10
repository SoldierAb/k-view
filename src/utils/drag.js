import Event from './eventHandler' 

const drag = (el,downEl)=>{
    let {innerHeight:height,innerWidth:width} = window;
    const {clientHeight,clientWidth} = el;
    const maxLeft = width -clientWidth;
    const maxTop = height - clientHeight;
    
    el.style.position = "fixed";
    downEl.style.cursor = "move";

    const _el_cb = (ev)=>{
        const e = ev||window.event;
        const posLeft = e.clientX - el.offsetLeft;
        const posTop  =e.clientY - el.offsetTop;    
        
        const _move_cb = (event)=>{
            const _e  = event||window.event;
            let curX = _e.clientX - posLeft;
            let curY = _e.clientY - posTop;
            curX = curX<=0?0:(curX>=maxLeft?maxLeft:curX);
            curY = curY<=0?0:(curY>=maxTop?maxTop:curY);
            el.style.margin = 0;
            el.style.left = `${curX}px`;
            el.style.top = `${curY}px`;
        }

        const _del_move = ()=>{
            Event.del(document,"mousemove",_move_cb)
            Event.del(document,"mouseup",_del_move)
            downEl.style.cursor = "normal";
        }

        Event.add(document,"mousemove",_move_cb)

        Event.add(document,"mouseup",_del_move)

        return false;
    }

    Event.add(downEl,"mousedown",_el_cb)
    
}


export default drag;