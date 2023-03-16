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
          <span>Reviews</span>
        </div>
        <span className="newItem">{props.newItem}</span>
        <div className="price">
          <span className="prevPrice">{props.prevPrice}원 /</span>
          <span className="currentPrice">{props.currentPrice}원</span>
        </div>
        <Button label={'장바구니'}></Button>
      </div>
    </div>
  );
};

// Card.propTypes = {
//   className: PropTypes.string.isRequired,
// };
