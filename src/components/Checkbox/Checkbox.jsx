import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckIcon from '@mui/icons-material/Check';
import './checkbox.css';

export const Checkbox = ({ id, label, width, onClick }) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <label className="storybook-input-checkbox-container" htmlFor={id}>
      <CheckIcon
        className={[
          'storybook-input-checkbox-checkicon',
          isToggle && 'isActive',
        ].join(' ')}
      />
      <input
        type="checkbox"
        id={id}
        name={id}
        className="storybook-input-checkbox"
        style={{ width: width }}
        onClick={() => {
          onClick();

          setIsToggle(!isToggle);
        }}
      />
      <span
        className={[
          'storybook-input-checkbox-span',
          isToggle && 'isActive',
        ].join(' ')}
      >
        {label}
      </span>
    </label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  width: PropTypes.number,
  onClick: PropTypes.func,
};

Checkbox.defaultProps = {
  id: 'allAgreed',
  label: '전체동의',
  width: null,
  onClick: function () {},
};
