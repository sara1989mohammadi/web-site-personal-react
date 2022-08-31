import React from 'react'
import Info from "./Info";
import Bio from "./Bio";
import Cv from "./Cv";
import Book from "./Book";
import Article from "./Article";
import ShortArticle from "./ShortArticle";
import Contact from "./Contact";
import Counter from "./Counter";

const Welcome = () => {
    return (
        <div>
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
        </div>
    )
}
export default Welcome
