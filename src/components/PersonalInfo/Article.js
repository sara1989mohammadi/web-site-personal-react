import React, { Fragment, useState, useEffect } from "react";
import Slider from "../UI/Slider";

const Article = () => {
  const [article, setArticle] = useState([]);
  useEffect(() => { fetchArticleHandler() }, ([]));

  const fetchArticleHandler = () => {
    fetch("https://localhost:44322/Article").then((Response) => {
      return Response.json();
    }).then((data) => {
      const items = data.map(item => {
        return {
          id: item.id,
          title: item.title,
          shortDescription: item.shortDescription,
          description: item.description,
        };
      })
      setArticle(items);
      console.log(article);
    });
  }

  return (
    <Fragment>
      <div className="main__slide">
        <div className="container">
          <div className="main__slide--description">
            <div className="main__slide--description__title">
              <h5 data-aos="fade-down-right" data-aos-duration="2400">
                مقاله
              </h5>
              <h1 data-aos="fade-down-right" data-aos-duration="3400">
                مقاله های علمی (کوتاه)
              </h1>
            </div>
            <Slider article={article} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Article;
