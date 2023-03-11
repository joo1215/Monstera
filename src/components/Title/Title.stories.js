import { Title } from "./Title";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Example/Title",
  component: Title,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const TitleH1 = {
  args: {
    type: 1,
    label: "로그인",
  },
};

export const TitleH2 = {
  args: {
    type: 2,
    label: "회원가입",
  },
};

export const TitleH3 = {
  args: {
    type: 3,
    label: "로그인",
  },
};
export const TitleH4 = {
  args: {
    type: 4,
    label: "로그인",
  },
};
export const TitleH5 = {
  args: {
    type: 5,
    label: "로그인",
  },
};
export const TitleH6 = {
  args: {
    type: 6,
    label: "로그인",
  },
};