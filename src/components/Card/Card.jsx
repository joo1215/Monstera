import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

export const Card = ({ className }) => {
  return (
    <>
      <Swiper
        className={className}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        centeredSlides={centeredSlides}
        autoplay={autoplay}
        pagination={pagination}
        loop={loop}
        modules={[Autoplay, Pagination, Navigation]}
        navigation
      >
        <SwiperSlide>
          {context}
          <img src={src} alt={alt} />
        </SwiperSlide>
        <SwiperSlide>
          {context}
          <img src={src} alt={alt} />
        </SwiperSlide>
        <SwiperSlide>
          {context}
          <img src={src} alt={alt} />
        </SwiperSlide>
        <SwiperSlide>
          {context}
          <img src={src} alt={alt} />
        </SwiperSlide>
        <SwiperSlide>
          {context}
          <img src={src} alt={alt} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

Carousel.propTypes = {
  className: PropTypes.string.isRequired,
  slidesPerView: PropTypes.number.isRequired,
  spaceBetween: PropTypes.number,
  pagination: PropTypes.object,
  centeredSlides: PropTypes.bool,
  autoplay: PropTypes.object,
  loop: PropTypes.bool,
  src: PropTypes.string.isRequired,
};
