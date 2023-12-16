import React from "react";
import { Route, Routes } from "react-router-dom";
import Detailpage from "./pages/Detailpage";
import Homepage from "./pages/Homepage";
import { SearchProvider } from "./hooks/searchContext";

function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail/:id" element={<Detailpage />} />
      </Routes>
    </SearchProvider>
  );
}

export default App;
