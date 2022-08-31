import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Info from "./components/PersonalInfo/Info";
import Bio from "./components/PersonalInfo/Bio";
import Cv from "./components/PersonalInfo/Cv";
import Book from "./components/PersonalInfo/Book";
import Article from "./components/PersonalInfo/Article";
import ShortArticle from "./components/PersonalInfo/ShortArticle";
import Contact from "./components/PersonalInfo/Contact";
import Counter from "./components/PersonalInfo/Counter";
import Card from "./components/UI/Card";
import Biography from "./pages/Biography";
import Resume from "./pages/Resume";
import MainArticle from "./pages/MainArticle";


function App() {
  return (
    <Card>
      <Header />
      <main className="main">
        <Info />
        <Bio />
        <Cv />
        <Book />
        <Article />
        <Counter />
        <ShortArticle />
        <Contact />
      </main>
      <div>
        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route path="/article" element={<MainArticle />} />
          <Route path='/biography' element={<Biography />} />
        </Routes>
      </div>
    </Card >
  );
}

export default App;
