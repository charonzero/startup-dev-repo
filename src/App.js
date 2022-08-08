import React from "react";
import "./index.css";
import ClientLoader from "./ClientLoader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home";
import Aboutus from "./About";
import Pricing from "./Pricing";
import Projects from "./Projects";
import Partners from "./Partners";
import PageNotFound from "./404";
function  App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientLoader />}>
          <Route index element={<HomePage />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="projects" element={<Projects/>} />
          <Route path="partners" element={<Partners />} />
          <Route path="*" element={<PageNotFound/>} />
        </Route>
        <Route path="/dashboard" element={<ClientLoader />}>
          <Route index element={<HomePage />} />
          <Route path="aboutus" element={<HomePage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="projects" element={<Projects/>} />
          <Route path="partners" element={<Partners />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
