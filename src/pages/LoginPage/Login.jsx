import React from 'react';
import PropTypes from 'prop-types';
import {Input} from '../../components/Input/Input';
import {Title} from '../../components/Title/Title';
import {Logo} from '../../components/Logo/Logo';
import './Login.css';

/**
 * Primary UI component for user interaction
 */
export const LoginPage = () => {
  return (
    <section>
      <Logo width={80} height={80}/>
      <Title type={1} label="로그인"/>
      <Title type={3} label="회원가입"/>
      <Input     
        id="id"
        label="아이디"
        minLength={2}
        maxLength={10}/>
    </section>
  );
};
