import React from 'react';
import PropTypes from 'prop-types';
import { TableC } from '../../components/Table/Table';
import './productInfo.css';

export const ProductInfo = () => {
  return (
    <>
      <div>
        <p className="product-info_headline">상품 정보</p>
      </div>
      <TableC />
    </>
  );
};
