import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Homepage from "./components/home/Homepage";
import Cakepage from "./components/cake/Cakepage";
import Giftpage from "./components/gift/Giftpage";
import Letterpage from "./components/letter/LetterPage";
import "./index.css";
const GlobalStyle = createGlobalStyle`
  body {
    background: #E5CCFF;
    font-family : "kopub";
  }
  *{
    font-family : "kopub";
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Happy-Birthday/" element={<Homepage />}></Route>
          <Route path="/cake" element={<Cakepage />}></Route>
          <Route path="/gift" element={<Giftpage />}></Route>
          <Route path="/letter" element={<Letterpage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
