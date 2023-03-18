import { Link } from './Link';

export default {
  title: 'Example/Link',
  component: Link,
  tags: ['autodocs'],
};

export const FindIdLink = {
  args: {
    path: '/',
    option: 1,
    label: '아이디 찾기',
  },
};
export const FindPwLink = {
  args: {
    path: '/',
    option: 1,
    label: '비밀번호 찾기',
  },
};
export const RegisterLink = {
  args: {
    path: '/register',
    option: 2,
    label: '회원가입',
    width: 400,
  },
};
