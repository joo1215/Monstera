import { Link, Routes, Route } from "react-router-dom";
import { Page } from "./pages/Home/Page";

import { useEffect } from "react";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page />}></Route>
      </Routes>
    </div>
  );
}

export default App;
