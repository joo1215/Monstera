import { Card } from './Card';

export default {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
};

export const mainCard = {
  args: {
    // 컨테이너
    className: 'mainCard',
    containerWidth: '276px',
    containerHeight: '489px',
    componentGap: '24px',
    // 이미지
    src: 'src/assets/images/card_image.png',
    alt: 'test',
    imageWidth: '276px',
    imageHeight: '240px',
    // 내용
    contentWidth: '276px',
    contentHeight: '225px',
    categoryTitle: '관엽식물',
    productTitle: '몬스테라',
    score: '4.6',
    reviewsNumber: 135,
    newItem: '신상품',
    prevPrice: 200000,
    currentPrice: 80000,
  },
};
