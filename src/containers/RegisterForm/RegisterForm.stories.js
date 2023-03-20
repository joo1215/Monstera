import { RegisterForm } from './RegisterForm';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Container/RegisterForm',
  component: RegisterForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const RegisterFormTemplate = {
  args: {},
};
