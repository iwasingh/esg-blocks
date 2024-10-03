import { mount } from '@vue/test-utils';
import Sidebar from './sidebar.vue';

describe('Sidebar', () => {
  it('renders properly', () => {
    const wrapper = mount(Sidebar, {});
    expect(wrapper.text()).toContain('Welcome to Sidebar');
  });
});
