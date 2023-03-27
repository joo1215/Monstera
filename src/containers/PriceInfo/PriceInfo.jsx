import React from 'react';
import { Button } from '../../components/Button/Button';
import Detail from '../../assets/images/detail_img.png';
import './priceInfo.css';

export const PriceInfo = ({}) => {
  return (
    <div className="product-container">
      <section className="product">
        <h2 className="a11y-hidden">상품 가격 안내</h2>
        <div className="product__image">
          <img src={Detail} alt="" />
        </div>
        <div className="product__details">
          <section className="product__info">
            <h3 className="product__name">몬스테라</h3>
            <p className="product__description">
              북유럽 인테리어 열풍을 타고 온 인기있는 식물, 몬스테라
            </p>
          </section>
          <div className="product__price">
            <del className="product__original-price">200,000원</del>
            <span className="product__sale-price">80,000원</span>
          </div>
          <div className="product__cost-details">
            <div className="product__cost-type">
              <span className="product__cost-type-name">검수비</span>
              <span className="product__cost-amount">10,000원</span>
            </div>
            <div className="product__cost-type">
              <span className="product__cost-type-name">수수료</span>
              <span className="product__cost-amount">8,000원</span>
            </div>
            <div className="product__cost-type">
              <span className="product__cost-type-name">배송비</span>
              <span className="product__cost-amount">3,500원</span>
            </div>
            <div className="product__cost-type">
              <span className="product__cost-type-name">총결제</span>
              <span className="product__total-price">101,500원</span>
            </div>
          </div>
          <Button option={1} label="구매하기" width={310}></Button>
        </div>
      </section>
    </div>
  );
};

PriceInfo.propTypes = {};
PriceInfo.defaultProps = {};
