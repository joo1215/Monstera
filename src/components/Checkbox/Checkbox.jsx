import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckIcon from '@mui/icons-material/Check';
import './checkbox.css';

export const Checkbox = ({ id, label, width, onClick }) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <label className="storybook-input-container" htmlFor={id}>
      <CheckIcon
        className={['storybook-input-checkicon', isToggle && 'isActive'].join(
          ' ',
        )}
      />
      <input
        type="checkbox"
        id={id}
        name={id}
        className="storybook-input"
        style={{ width: width }}
        onClick={() => {
          onClick();

          setIsToggle(!isToggle);
          console.log(isToggle);
        }}
      />
      <span className="storybook-input-span">{label}</span>
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
  onClick: undefined,
};
