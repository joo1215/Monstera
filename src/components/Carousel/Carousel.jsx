import React from 'react';
import PropTypes from 'prop-types';
import './carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Carousel = ({
  className,
  slidesPerView,
  spaceBetween,
  centeredSlides,
  autoplay,
  pagination,
  loop,
  src,
  alt,
  context,
}) => {
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
