import { Image } from './Image';
import logo from '../../assets/images/LOGO.svg';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Example/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const ImageLogo = {
  args: {
    src: logo,
  },
};
