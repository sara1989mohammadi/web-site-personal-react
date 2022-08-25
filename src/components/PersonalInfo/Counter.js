import React, { Fragment } from "react";
import icon from "../../assets/icons/sprite.svg";
const Counter = () => {
  return (
    <Fragment>
      <div className="main__counter">
        <div className="container">
          <div
            className="main__counter--description"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="circle">
              <svg className="icon">
                <use href={`${icon}#book-svgrepo-com`}></use>
              </svg>
            </div>
            <h2>کتاب</h2>
            <h2>4</h2>
          </div>

          <div
            className="main__counter--description"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="circle">
              <svg className="icon">
                <use href={`${icon}#book-svgrepo-com`}></use>
              </svg>
            </div>
            <h2>مقاله علمی پژوهشی</h2>
            <h2>10</h2>
          </div>

          <div
            className="main__counter--description"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="circle">
              <svg className="icon">
                <use href={`${icon}#book-svgrepo-com`}></use>
              </svg>
            </div>
            <h2>مقاله کوتاه</h2>
            <h2>3</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Counter;
