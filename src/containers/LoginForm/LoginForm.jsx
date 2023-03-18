import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../components/Input/Input';
import { Link } from '../../components/Link/Link';
import { Button } from '../../components/Button/Button';
import './loginForm.css';

/**
 * Primary UI component for user interaction
 */

export const LoginForm = ({}) => {
  return (
    <form>
      <fieldset className="fieldset_login_form">
        <legend className="a11y-hidden">로그인</legend>
        <Input
          type="text"
          id="idInput"
          option={true}
          label="아이디"
          width={372}
          height={40}
          islabel={false}
        />
        <Input
          type="password"
          id="passwordInput"
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          width={372}
          height={40}
          islabel={false}
        />
        <div className="link_container">
          <Link to="/findId" label="아이디찾기" />
          <span className="divider">/</span>
          <Link to="/findPw" label="비밀번호찾기" />
        </div>
        <Button option={1} label="로그인" width={400} />
        <Link path="/register" option={2} label="회원가입" width={400} />
      </fieldset>
    </form>
  );
};

LoginForm.propTypes = {};

LoginForm.defaultProps = {};
