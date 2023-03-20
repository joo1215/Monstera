import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './viewterms.css';

/**
 * Primary UI component for user interaction
 */

export const Viewterms = ({ label, width, onClick }) => {
  return (
    <button
      type="button"
      className="storybook-viewterms"
      style={{ width: width }}
      onClick={() => onClick()}
    >
      {label}
      <KeyboardArrowRightIcon />
    </button>
  );
};

Viewterms.propTypes = {
  option: PropTypes.number,

  label: PropTypes.string,

  width: PropTypes.number,

  onClick: PropTypes.func,
};

Viewterms.defaultProps = {
  option: 1,
  label: '로그인',
  width: 400,
  onClick: undefined,
};
