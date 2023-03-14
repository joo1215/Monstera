import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './link.css';




export const Link = ({path, label}) => {

  return (
    <Link to={path}>{label}</Link>
  );
};

Link.propTypes = {
  path: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

Link.defaultProps = {
  path:"/",
  label:"홈 페이지로 돌아가기"

};


