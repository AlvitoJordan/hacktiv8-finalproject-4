import React from "react";
import { Homepage } from "./pages";
import { Route, Routes } from "react-router-dom";
import Detailpage from "./pages/Detailpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/detail/:id" element={<Detailpage />} />
    </Routes>
  );
}

export default App;
