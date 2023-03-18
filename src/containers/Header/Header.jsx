import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from '../../components/Logo/Logo';
import { Input } from '../../components/Input/Input';
import { Link } from '../../components/Link/Link';
import { Button } from '../../components/Button/Button';
import Search_Button from '../../assets/images/Search_Button.svg';
import cart_icon from '../../assets/images/cart_icon.svg';
import './header.css';

export const Header = () => {
  return (
    <div>
      <div className="Notification">
        <p>식집사님들 지금 가입하시고 반려식물 데려가세요~</p>
      </div>
      <div className="search_form_background">
        <div className="search_form">
          <Logo />
          <div class="search_bar">
            <Input
              type="search"
              id="searchInput"
              label="searchForm"
              islabel={false}
              placeholder="필요한 상품을 입력해주세요"
              width={400}
              height={48}
            />
            <button className="search_button">
              <img src={Search_Button} alt="검색버튼" />
            </button>
          </div>
          <div class="menu_bar">
            <Link label="로그인" />
            <span class="gap">|</span>
            <Link label="회원가입" />
            <span class="gap">|</span>
            <Link label="식물병원" />
            <span class="gap">|</span>
            <Link label="{장바구니}" />
          </div>
        </div>
      </div>
    </div>
  );
};
