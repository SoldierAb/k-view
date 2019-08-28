import './tip.scss'
import debounceUtil from '../../utils/debounceUtil'

let tipContainer = null

const Tip = (Vue) => {
  Vue.prototype.$tip = (showTip, x, y, txt, callback) => {
      if (!tipContainer) {
        const tipTpl = Vue.extend({
          template: '<div class="vue-tip-container" v-show="show" :style="`left:${left}px;top:${top}px`">\
                        <p>{{text}}</p>\
                </div>',
          data() {
            return {
              text: txt,
              show: false,
              left: 0,
              top: 0,
            }
          }
        })
        tipContainer = new tipTpl();
        const tpl = tipContainer.$mount().$el;
        document.body.appendChild(tpl);
      }
      if (showTip) {
        debounceUtil(setPosition(tipContainer, x, y))
        tipContainer.text = txt;
      }
      tipContainer.show = showTip;
      if (!callback) callback = new Function();
      callback();
    }
    ['show', 'hide'].forEach((item) => {
      return Vue.prototype.$tip[`${item}`] = (x, y, txt, callback) => Vue.prototype.$tip(item === 'show', x, y, txt, callback);
    })
}


const setPosition = (tipContainer, x, y) => {
  if (Math.abs(x - tipContainer.left) >= 10) tipContainer.left = x + 20;
  if (Math.abs(y - tipContainer.top) >= 10) tipContainer.top = y + 20;
}


export default Tip;
