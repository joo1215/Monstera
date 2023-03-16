import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

export const Input = ({
  type,
  id,
  option,
  label,
  width,
  height,
  placeholder,
  islabel,
}) => {
  // 옵션이 1일경우 "storybook-button—primary" 옵션이 2일경우 "storybook-button—secondary" 2가 아닐경우에는 "storybook-button—third"
  const mode = option ? 'storybook-input—primary' : 'storybook-input—secondary';
  const a11yHidden = islabel ? '' : 'a11y-hidden';

  return (
    <div>
      <label
        htmlFor={id}
        className={['storybook-input-label', a11yHidden].join(' ')}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className={['storybook-input', mode].join(' ')}
        style={{ width: width, height: height }}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  option: PropTypes.bool,
  label: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  placeholder: PropTypes.string,
  islabel: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  id: 'idInput',
  option: true,
  label: '아이디',
  width: 285,
  height: 48,
  placeholder: '아이디를 입력하세요',
  islabel: true,
};
