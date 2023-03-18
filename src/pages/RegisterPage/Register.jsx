import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../../components/Title/Title';
import { RegisterForm } from '../../containers/RegisterForm/RegisterForm';
import './register.css';

/**
 * Primary UI component for user interaction
 */
export const RegisterPage = () => {
  return (
    <section className="register_container">
      <Title type={1} label="회원가입" />
      <RegisterForm />
    </section>
  );
};
