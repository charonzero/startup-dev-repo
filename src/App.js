import React from "react";
import "./index.css";
import ClientLoader from "./ClientLoader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import Aboutus from "./About";

function  App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientLoader />}>
          <Route index element={<HomePage />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="pricing" element={<HomePage />} />
          <Route path="projects" element={<HomePage />} />
          <Route path="partners" element={<HomePage />} />
        </Route>
        <Route path="/dashboard" element={<ClientLoader />}>
          <Route index element={<HomePage />} />
          <Route path="aboutus" element={<HomePage />} />
          <Route path="pricing" element={<HomePage />} />
          <Route path="projects" element={<HomePage />} />
          <Route path="partners" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
