import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import Info from "./components/PersonalInfo/Info";
import Bio from "./components/PersonalInfo/Bio";
import Cv from "./components/PersonalInfo/Cv";

function App() {
  return (
    <Fragment>
      <Header />
      <main className="main">
        <Info />
        <Bio />
        <Cv />
      </main>
    </Fragment>
  );
}

export default App;
