/**
 * @author SoldierAb
 *
 *  how to use:
 *
 *  import TipBox from '../../components/vue-tip-box';
 *
 *  export default {
 *    component: {TipBox},
 *  }
 *
 */

import Vue from 'vue'
import './tipBox.scss'
import Tip from '../tip'

Vue.use(Tip)

export default Vue.component('tipBox', {
  template: '<div class="tip-box" @mouseover="showTip($event)" @mousemove="showTip($event)" @mouseout="hideTip">\
        <p>{{txt}}</p>\
    </div>',
  props: {
    txt: {
      type: String,
      default: '提示内容'
    },
  },
  methods: {
    showTip(_e) {
      let {
        pageX,
        pageY
      } = _e;
      let {
        innerText,
        scrollHeight,
        scrollWidth,
        clientHeight,
        clientWidth
      } = _e.target;
      //如果文本溢出
      if (scrollHeight > clientHeight || scrollWidth > clientWidth) {
        this.$tip.show(pageX, pageY, innerText, () => {});
      }
    },
    hideTip() {
      this.$tip.hide();
    },
  }
})
