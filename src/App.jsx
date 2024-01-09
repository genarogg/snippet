import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Page404 from "./components/view/page404/Page404";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Page404 />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
