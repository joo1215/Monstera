import { Link } from "./Link";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Example/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const HomeLink = {
  args: {
    label: "홈 페이지로 돌아가기",
  },
};
