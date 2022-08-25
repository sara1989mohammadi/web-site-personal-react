import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import Info from "./components/PersonalInfo/Info";
import Bio from "./components/PersonalInfo/Bio";
import Cv from "./components/PersonalInfo/Cv";
import Book from "./components/PersonalInfo/Book";
import Article from "./components/PersonalInfo/Article";
import ShortArticle from "./components/PersonalInfo/ShortArticle";
import Contact from "./components/PersonalInfo/Contact";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <Info />
        <Bio />
        <Cv />
        <Book />
        <Article />
        <ShortArticle />
        <Contact />
      </main>
    </Fragment>
  );
}

export default App;
