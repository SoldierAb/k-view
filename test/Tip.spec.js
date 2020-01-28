import {shallowMount} from '@vue/test-utils'
import Tip from '../src/components/tip'
import Tooltip from 'element-ui/lib/tooltip'

describe('tip',()=>{
    it('render tip show',()=>{
        const wrapper  =  shallowMount(Tip)
        const TooltipComp = wrapper.find(Tooltip)
        const showEvt = {scrollHeight:100, scrollWidth:100, clientHeight:50, clientWidth:50}
        wrapper.trigger('mouseover',showEvt)
        wrapper.trigger('mousemove',showEvt)
        console.log('tooltip ',TooltipComp.props())
        expect(TooltipComp.props().disabled).toEqual(false)
    })
})