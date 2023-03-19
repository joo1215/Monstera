import React from 'react';
import { Link } from './../../components/Link/Link';
import Contact_Icon from '../../assets/images/Contact_Icon.svg';
import Bussiness_Icon from '../../assets/images/Bussiness_Icon.svg';
import Sitemap_Icon from '../../assets/images/Sitemap_Icon.svg';
import Blog from '../../assets/images/Blog.svg';
import FaceBook from '../../assets/images/FaceBook.png';
import Instagram from '../../assets/images/Instagram.png';
import NaverPost from '../../assets/images/NaverPost.png';
import Youtube from '../../assets/images/Youtube.png';

import './footer.css';
const InfoBlock = ({ src, title, desc, descType, children }) => {
  return (
    <div className="business_info">
      <img className="business_icon" src={src} />
      <div>
        <h3>{title}</h3>
        <div class="desc_container">
          {['link', 'Link', 'Link'].includes(descType)
            ? desc.map((d) => <Link label={d} />)
            : desc.map((d) => <div>{d}</div>)}
        </div>

        <div className="additional_info">{children}</div>
      </div>
    </div>
  );
};
export const Footer = () => {
  return (
    <>
      <div class="info_background">
        <InfoBlock
          src={Contact_Icon}
          title="Contact Form"
          desc={[
            '법인명 (상호) : 주식회사 몬스테라 | 사업자 등록번호 2453-54-6345',
            '통신판매업 : 제2023- 서울강남-5638호',
            '주소 : 서울 특별시 강남구 테헤란로 3884 20층(역삼동)',
          ]}
        />
        <InfoBlock
          InfoBlock
          src={Bussiness_Icon}
          title="Bussiness Contact Info"
          desc={[
            '입점문의 : 입점문의하기 | 제휴문의 :  business@monstera.com',
            '채용문의 :  recruit@monstera.com : 제2023- 서울강남-5638호',
            '팩스 :  070 - 7500 - 6098',
          ]}
        >
          <a>
            <img className="sns_icon" src={Blog} />
          </a>
          <a>
            <img className="sns_icon" src={FaceBook} />
          </a>
          <a>
            <img className="sns_icon" src={Instagram} />
          </a>
          <a>
            <img className="sns_icon" src={NaverPost} />
          </a>
          <a>
            <img className="sns_icon" src={Youtube} />
          </a>
        </InfoBlock>
        <InfoBlock
          InfoBlock
          src={Sitemap_Icon}
          title="Sitemap"
          desc={[
            '몬스테라 HOME',
            '반려식물 리스트',
            '식물병원',
            '장바구니',
            '로그인 | 회원가입',
          ]}
          // descType="link"
        />
      </div>
      <div class="right_info">
        <p>
          몬스테라에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가
          몬스테라(오픈마켓) 상품이 포함되어 있습니다. <br />
          몬스테라 상품의 경우 몬스테라는 통신판매중개자로 통신판매의 당사자가
          아닙니다.
        </p>
        <p>ⓒMONSTERA CORP.ALL RIGHTS RESERVED</p>
      </div>
    </>
  );
};
