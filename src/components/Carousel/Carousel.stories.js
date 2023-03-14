import { Carousel } from './Carousel';

export default {
  title: 'Example/Carousel',
  component: Carousel,
  tags: ['autodocs'],
};

export const mainSwiper = {
  args: {
    className: 'mainSwiper',
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    loop: true,
    src: '/',
  },
};
