import {shallowMount} from '@vue/test-utils'
import Tip from '../../lib/tip'
import Tooltip from 'element-ui/lib/tooltip'

describe('tip',()=>{
    let wrapper,TooltipComp;
    beforeEach(()=>{
        wrapper  =  shallowMount(Tip,{
            attachToDocument:true
        })
        TooltipComp = wrapper.find(Tooltip)
    })
    
    it('render tip show',async done =>{
        wrapper.setData({textOverFlow:true});
        await wrapper.vm.$nextTick();
        expect(TooltipComp.props().disabled).toBe(false)
        done()
    })

    it('render tip hide',async done =>{
        wrapper.setData({textOverFlow:false});
        await wrapper.vm.$nextTick();
        expect(TooltipComp.props().disabled).toBe(true)
        done()
    })

    afterEach(()=>{
        wrapper.destroy();
    })
})