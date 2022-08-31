import React, { Fragment, useEffect, useState } from "react";
import image from "../../assets/images/Image.png";
import InfoList from "./InfoList";
const Info = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetchInfoHandler();
  }, []);
  const fetchInfoHandler = () => {
    fetch("https://localhost:44322/Activity")
      .then((response) => {

        return response.json();
      })
      .then((data) => {
        console.log(data);
        const items = data.map(item => {
          return {
            id: item.id,
            title: item.title
          };
        })
        setInfo(items);
      });
  };
  return (
    <Fragment>
      <div className="main__info" data-aos="fade-in">
        <div className="container">
          <div className="main__info--description">
            <div className="main__info--description__title">
              <h2
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                محمد احسنی فروز
              </h2>
              <InfoList info={info} />
            </div>
          </div>
          <img src={image} className="main__info--img" alt="" />
        </div>
      </div>
    </Fragment>
  );
};
export default Info;
