import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
import './reset.css';

import { Button } from '../Button/Button';
import { Title } from '../Title/Title';

export const Card = (props) => {
  return (
    <div
      className="card__container"
      style={{
        width: props.containerWidth,
        height: props.containerHeight,
        gap: props.componentGap,
      }}
    >
      <img
        className="product__image"
        src={props.src}
        alt={props.alt}
        width={props.imageWidth}
        height={props.imageHeight}
      />
      <div
        className="content"
        style={{ width: props.contentWidth, height: props.contentHeight }}
      >
        <p className="category__title">{props.categoryTitle}</p>
        <h3 className="product__title">{props.productTitle}</h3>
        <div className="review">
          <span>{props.score}/5</span>
          <span> | </span>
          <span>{props.reviewsNumber}</span>
          <span className="reviews"> Reviews</span>
        </div>
        <span className="newItem">{props.newItem}</span>
        <div className="price">
          <span className="prevPrice">{props.prevPrice}원 / </span>
          <span className="currentPrice">{props.currentPrice}원</span>
        </div>
        <Button option={1} label={'장바구니 담기'} width={130}></Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  containerWidth: PropTypes.string.isRequired,
  containerHeight: PropTypes.string.isRequired,
  componentGap: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  imageWidth: PropTypes.string.isRequired,
  imageHeight: PropTypes.string.isRequired,
  contentWidth: PropTypes.string.isRequired,
  contentHeight: PropTypes.string.isRequired,
  categoryTitle: PropTypes.string.isRequired,
  productTitle: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  reviewsNumber: PropTypes.number.isRequired,
  newItem: PropTypes.string.isRequired,
  prevPrice: PropTypes.number.isRequired,
  currentPrice: PropTypes.number.isRequired,
};
