import { SimpleAccordion } from "./Accordion";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: "Example/Accordion",
  component: SimpleAccordion,
  tags: ["autodocs"],
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default = {
  args: {
    disabled: false,
    square: false,
    expanded: true,
  },
};

export const Disabled = {
  args: {
    defaultExpanded: false,
    disabled: true,
  },
};

export const Unfolded = {
  args: {
    square: true,
    expanded: true
  },
};