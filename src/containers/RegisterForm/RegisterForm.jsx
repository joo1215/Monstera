import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../components/Input/Input';
import { Link } from '../../components/Link/Link';
import { Button } from '../../components/Button/Button';
import './registerForm.css';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { Viewterms } from '../../components/Viewterms/Viewterms';
/**
 * Primary UI component for user interaction
 */

export const RegisterForm = ({}) => {
  return (
    <form>
      <fieldset className="fieldset_register_form">
        <legend className="a11y-hidden">회원가입</legend>
        <div className="id_container">
          <Input type="text" id="idInput" option={true} label="아이디" />
          <Button option={1} label="중복확인" width={115} />
        </div>

        <Input
          type="password"
          id="passwordInput"
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
        />
        <Input
          type="password"
          id="confirmPasswordInput"
          label="비밀번호 확인"
          placeholder="비밀번호를 입력하세요"
        />
        <Input
          type="text"
          id="nameInput"
          label="이름"
          placeholder="이름을 입력하세요"
        />
        <Input
          type="email"
          id="emailInput"
          label="이메일"
          placeholder="이메일을 입력하세요"
        />
        <Input
          type="tel"
          id="telInput"
          label="전화번호"
          placeholder="전화번호를 입력하세요"
        />
        <Input
          type="text"
          id="addressInput"
          label="주소"
          placeholder="주소를 입력하세요"
        />
        <ul className="viewTerms_container">
          <li>
            <Checkbox type="text" id="agreeInput" label="전체동의" />
          </li>
          <li>
            <Checkbox type="text" id="tofagreeInput" label="이용약관 동의" />
            <Viewterms label="약관동의" width={100} />
          </li>
          <li>
            <Checkbox
              type="text"
              id="privacyagreeInput"
              label="개인정보 수집 및 이용동의"
            />
            <Viewterms label="약관동의" width={100} />
          </li>
          <li>
            <Checkbox
              type="text"
              id="ageagreeInput"
              label="본인은 만14세 이상입니다"
            />
            <Viewterms label="약관동의" width={100} />
          </li>
        </ul>
        <Button option={1} label="가입완료" width={280} />
        <Link path="/register" option={2} label="가입취소" width={280} />
      </fieldset>
    </form>
  );
};

RegisterForm.propTypes = {};

RegisterForm.defaultProps = {};
