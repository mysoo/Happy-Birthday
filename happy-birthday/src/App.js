import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Homepage from "./components/home/Homepage";
import Cakepage from "./components/cake/Cakepage";

const GlobalStyle = createGlobalStyle`
  body {
    background: #E5CCFF;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/cake" element={<Cakepage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
