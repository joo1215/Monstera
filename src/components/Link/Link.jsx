import React from 'react';
import PropTypes from 'prop-types';
import './link.css';
import { Link } from 'react-router-dom';

/**
 * Primary UI component for user interaction
 */

export const LinkC = ({ path, label }) => {
  return <Link to={path}>{label}</Link>;
};

LinkC.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

LinkC.defaultProps = {
  path: '/',
  label: '메인페이지로 가기',
};
