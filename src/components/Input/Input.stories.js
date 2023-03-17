import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const IdInput = {
  args: {
    type: 'text',
    id: 'idInput',
    option: true,
    label: '아이디',
  },
};

export const PasswordInput = {
  args: {
    type: 'password',
    id: 'passwordInput',
    label: '비밀번호',
    placeholder: '비밀번호를 입력하세요',
  },
};

export const ConfirmPasswordInput = {
  args: {
    type: 'password',
    id: 'confirmPasswordInput',
    label: '비밀번호 확인',
    placeholder: '비밀번호를 다시 입력하세요',
  },
};

export const NameInput = {
  args: {
    type: 'text',
    id: 'nameInput',
    label: '이름',
    placeholder: '이름을 입력하세요',
  },
};

export const EmailInput = {
  args: {
    type: 'email',
    id: 'emailInput',
    label: '이메일',
    placeholder: '이메일을 입력하세요',
  },
};

export const TelInput = {
  args: {
    type: 'tel',
    id: 'telInput',
    label: '휴대폰',
    placeholder: '휴대폰을 입력하세요',
  },
};

export const AddressInput = {
  args: {
    type: 'text',
    id: 'addressInput',
    label: '주소',
    placeholder: '주소를 입력하세요',
  },
};

export const SearchInput = {
  args: {
    type: 'search',
    id: 'searchInput',
    label: '서치폼',
    islabel: false,
    placeholder: '필요한 상품을 입력해주세요',
    width: 400,
  },
};

export const CouponInput = {
  args: {
    type: 'text',
    id: 'textInput',
    label: '쿠폰',
    islabel: false,
    placeholder: '쿠폰코드를 입력해주세요',
    width: 268,
    option: false,
  },
};
