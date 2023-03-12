import { Link, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/Login";
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";


function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{" "}
        <Link to="/sign_up">회원가입</Link> | <Link to="/planet_hospital">식물병원</Link> |{" "}
        <Link to="/planet_market">식물마켓</Link> | <Link to="/cart">장바구니</Link> |{" "}
      </nav>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>

      </Routes>
    </div>
  );
}

export default App;




function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> |{" "}
        <Link to="/input2">Input2</Link> | <Link to="/list">List</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/input2" element={<Input2 />} />
        <Route path="/list" element={<List />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}