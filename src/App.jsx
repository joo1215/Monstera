import { Link, Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/Login';

import { useEffect } from 'react';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
