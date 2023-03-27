import React from 'react';
import { ProductInfo } from '../../containers/ProductInfo/ProductInfo';
import { InspectionGuide } from './../../containers/InspectionGuide/InspectionGuide';
import { PurchaseGuide } from './../../containers/PurchaseGuide/PurchaseGuide';
import './productGuide.css';

export const ProductGuide = () => {
  return (
    <section className="guide_container">
      <ProductInfo />
      <InspectionGuide />
      <PurchaseGuide />
    </section>
  );
};
