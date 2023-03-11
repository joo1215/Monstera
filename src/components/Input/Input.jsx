import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ type,id, label,minLength,maxLength }) => {

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} minLength={minLength} maxLength={maxLength}/>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  minLength: PropTypes.number,
  maxLength: PropTypes.number
};

Input.defaultProps = {
  type: "text",
  id: "",
  label: "",
  minLength: null,
  maxLength: null
};
