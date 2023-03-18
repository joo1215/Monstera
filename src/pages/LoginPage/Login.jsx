import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../../components/Title/Title';
import { LoginForm } from '../../containers/LoginForm/LoginForm';
import './login.css';

/**
 * Primary UI component for user interaction
 */
export const LoginPage = () => {
  return (
    <section className="login_container">
      <Title type={1} label="로그인" />
      <LoginForm />
    </section>
  );
};
