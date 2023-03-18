import { Viewterms } from './Viewterms';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Example/Viewterms',
  component: Viewterms,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const ViewtermsButton = {
  args: {
    label: '약관동의',
    width: 100,
  },
};
