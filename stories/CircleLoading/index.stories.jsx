import React from 'react';
import CircleLoading from './index'

export default {
  title: 'CircleLoading',
  component: CircleLoading,
  argTypes: {

  },
}

const Template = (args) => <CircleLoading {...args} />

export const Example = Template.bind({});

Example.args = {
  text: '0%',
}

