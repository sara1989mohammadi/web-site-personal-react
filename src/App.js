import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";

import Card from "./components/UI/Card";
import Biography from "./pages/Biography";
import Resume from "./pages/Resume";
import MainArticle from "./pages/MainArticle";
import Welcome from "./components/PersonalInfo/Welcom";
import Books from "./pages/Books";


function App() {
  return (
    <Card>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path='/biography' element={<Biography />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/article" element={<MainArticle />} />
          <Route path='/books' element={<Books />} />
        </Routes>
      </div>
    </Card >
  );
}

export default App;
