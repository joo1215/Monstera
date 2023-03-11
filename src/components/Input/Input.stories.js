import { Input } from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const IdInput = {
  args: {
    id:"id",
    label: "아이디",
    minLength: 2,
    maxLength: 10
  },
};

export const PasswordInput = {
  args: {
    type: "password",
    id:"password",
    label: "비밀번호",
    maxLength: 20
  },
};
