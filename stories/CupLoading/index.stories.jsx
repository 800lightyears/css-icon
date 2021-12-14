import React from 'react';
import CupLoading from './index'

export default {
  title: 'CupLoading',
  component: CupLoading,
  argTypes: {

  },
}

const Template = (args) => <CupLoading {...args} />

export const Example = Template.bind({});

Example.args = {
  text: '0%',
}

