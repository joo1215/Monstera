import { Link } from './Link';

export default {
  title: 'Example/Link',
  component: Link,
  tags: ['autodocs'],
};

export const HomeLink = {
  args: {
    to: '/',
    label: '홈 페이지로 돌아가기',
  },
};