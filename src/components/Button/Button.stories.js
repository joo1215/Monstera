import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const LoginButton = {
  args: {
    option: 1,
    label: '로그인',
    width: 400,
  },
};

export const RegisterButton = {
  args: {
    option: 2,
    label: '회원가입',
    width: 400,
  },
};

export const CartButton = {
  args: {
    option: 1,
    label: '장바구니 담기',
    width: 130,
  },
};
export const CartDisabledButton = {
  args: {
    option: 3,
    label: '장바구니 담기',
    width: 130,
  },
};

export const CheckIdButton = {
  args: {
    option: 1,
    label: '중복확인',
    width: 115,
  },
};

export const PurchaseButton = {
  args: {
    option: 1,
    label: '구매하기',
    width: 310,
  },
};

export const RegisterCompletedButton = {
  args: {
    option: 2,
    label: '가입 완료',
    width: 400,
  },
};

export const RegisterUncompletedButton = {
  args: {
    option: 2,
    label: '가입 취소',
    width: 400,
  },
};
