import React from "react";
import { Route, Routes } from "react-router-dom";
import Detailpage from "./pages/Detailpage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/detail/:id" element={<Detailpage />} />
    </Routes>
  );
}

export default App;
