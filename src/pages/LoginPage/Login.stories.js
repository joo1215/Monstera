import { within, userEvent } from '@storybook/testing-library';

import { LoginPage } from './Login';

export default {
  title: 'Page/LoginPage',
  component: LoginPage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};
// More on interaction testing: https://storybook.js.org/docs/7.0/react/writing-tests/interaction-testing
export const LoginPageTemplate = {};
