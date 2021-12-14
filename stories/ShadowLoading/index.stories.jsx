import React from 'react';
import ShadowLoading from './index'

export default {
  title: 'ShadowLoading',
  component: ShadowLoading,
  argTypes: {

  },
}

const Template = (args) => <ShadowLoading {...args} />

export const Example = Template.bind({});

Example.args = {
  text: '0%',
}

