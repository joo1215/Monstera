import { Link, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/Login';
import React from 'react';
import { useEffect } from 'react';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{' '}
        <Link to="/sign_up">회원가입</Link> |{' '}
        <Link to="/planet_hospital">식물병원</Link> |{' '}
        <Link to="/planet_market">식물마켓</Link> |{' '}
        <Link to="/cart">장바구니</Link> |{' '}
      </nav>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        {/* <Route path="/sign_up" element={<Sign_up />}></Route>
        <Route path="/planet_hospital" element={<Planet_hospital />}></Route>
        <Route path="/Planet_market" element={<Planet_market />}></Route>
        <Route path="/cart" element={<Cart />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
