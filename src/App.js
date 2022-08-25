import React from "react";
import Header from "./components/Layout/Header";
import Info from "./components/PersonalInfo/Info";
import Bio from "./components/PersonalInfo/Bio";
import Cv from "./components/PersonalInfo/Cv";
import Book from "./components/PersonalInfo/Book";
import Article from "./components/PersonalInfo/Article";
import ShortArticle from "./components/PersonalInfo/ShortArticle";
import Contact from "./components/PersonalInfo/Contact";
import Slider from "./components/UI/Slider";
import Counter from "./components/PersonalInfo/Counter";
import Card from "./components/UI/Card";

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
    </Card>
  );
}

export default App;
