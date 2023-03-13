// 애드온 패키지로부터 withRouter 고차 함수를 추출해 글로벌 decorators, parameters를 설정
// import { withRouter } from 'storybook-addon-react-router-v6';
// export const decorators = [withRouter];

// export const parameters = {
//   reactRouter: {
//     routePath: '/',
//   },
// };

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
