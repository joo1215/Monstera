import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */

export const Button = ({ option, label, width, onClick }) => {
  // 옵션이 1일경우 "storybook-button—primary" 옵션이 2일경우 "storybook-button—secondary" 2가 아닐경우에는 "storybook-button—third"
  const mode =
    option === 1
      ? 'storybook-button—primary'
      : option === 2
      ? 'storybook-button—secondary'
      : 'storybook-button—third';

  return (
    <button
      type="button"
      className={['storybook-button', mode].join(' ')}
      style={{ width: width }}
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  option: PropTypes.number,

  label: PropTypes.string,

  width: PropTypes.number,

  onClick: PropTypes.func,
};

Button.defaultProps = {
  option: 1,
  label: '로그인',
  width: 400,
  onClick: undefined,
};
