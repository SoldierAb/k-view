/**
 * @description pubsub库
 * @author SoldierAb
 * @since 18-12-05
 */


class PubSub {
  constructor() {
    this.handlers = {};
  }

   on(type, listener) {    //添加事件
    if (!(type in this.handlers)) {
      this.handlers[type] = [];
    }
    this.handlers[type].push(listener);
  }

   off(type, listener) {   //解除事件
    let i,
      position = -1,
      list = this.handlers[type],
      length = this.handlers[type]?this.handlers[type].length:0;

    for (i = 0; i < length; i++) {
      if (list[i] === listener) {
        position = i;
        break;
      }
    }

    if (position === -1) {
      return;
    }

    if (length === 1) {
      delete this.handlers[type];
    } else {
      this.handlers[type].splice(position, 1);
    }
  }

   emit(type) {            //触发事件
    let args = Array.prototype.slice.call(arguments, 1),
      i,
      list = this.handlers[type],
      // length = this.handlers[type].length;
      length = this.handlers[type]?this.handlers[type].length:0;


    for (i = 0; i < length; i++) {
      list[i].apply(this, args);
    }
  }

}



export default PubSub;

