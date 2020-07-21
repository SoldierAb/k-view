import { shallowMount } from '@vue/test-utils';
import HelloWorld from '../index';

describe('<v-hello-world/>', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(HelloWorld);
    // expect(wrapper.find('.hello h1').text())
    //   .toEqual('Hello Jest');
      expect(wrapper.find('.hello h1').text())
      .toMatchSnapshot();
  });
});