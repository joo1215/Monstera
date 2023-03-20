import { Checkbox } from './Checkbox';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const AgreeInput = {
  args: {
    type: 'text',
    id: 'agreeInput',
    label: '전체동의',
  },
};

export const TofAgreeInput = {
  args: {
    type: 'text',
    id: 'tofagreeInput',
    label: '이용약관 동의',
  },
};

export const PrivacyAgreeInput = {
  args: {
    type: 'text',
    id: 'privacyagreeInput',
    label: '개인정보 수집 및 이용동의',
  },
};

export const AgeAgreeInput = {
  args: {
    type: 'text',
    id: 'ageagreeInput',
    label: '본인은 만14세 이상입니다',
  },
};
