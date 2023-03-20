import { Header } from './Header';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Container/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const HeaderTemplate = {
  args: {},
};
