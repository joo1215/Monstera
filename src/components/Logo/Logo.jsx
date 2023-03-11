import React from 'react';
import PropTypes from 'prop-types';
import {Image} from '../ImageC/Image';
import './logo.css';

/**
 * Primary UI component for user interaction
 */

export const Logo = ({width, height}) => {

  return (
    <Image width={width} height={height}/>
  );
};

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number

};

Logo.defaultProps = {
  width: 50,
  height: 50
};
