import { fn } from '@storybook/test';
import { BoxSelectorItem } from './BoxSelectorItem';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/BoxSelectorItem',
  component: BoxSelectorItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: 'BoxSelectorItem',
    onClick: fn(),
  },
};
