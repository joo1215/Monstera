import React from 'react';
import PropTypes from 'prop-types';
import './image.css';
import logo from '../../assets/monstera.svg';

/**
 * Primary UI component for user interaction
 */
export const Image = ({ src, alt, width, height }) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

Image.defaultProps = {
  src: logo,
  alt: 'website logo',
  width: 50,
  height: 50,
};
