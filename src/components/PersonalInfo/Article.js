import React, { Fragment } from "react";
import Slider from "../UI/Slider";

const Article = () => {
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
            <Slider />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Article;
