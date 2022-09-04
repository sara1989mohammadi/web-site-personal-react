import React, { Fragment, useEffect, useState } from "react";
import classes from './Bio.module.css'
import image from "../../assets/images/04.png";
const Bio = () => {
  const [bio, setBio] = useState([]);
  useEffect(() => { fetchBioHandler() }, []);
  const fetchBioHandler = () => {
    fetch("https://localhost:44322/Biography").then((Response) => {
      return Response.json();
    }).then((data) => {
      const items = data.map(item => {
        return {
          id: item.id,
          shortDescription: item.shortDescription,
          description: item.description,
        };
      })
      setBio(items);
    });
  }
  return (
    <Fragment>
      <div className={classes["main__bio"]} data-aos="fade-right" data-aos-duration="2400">
        <div className="container">
          <img src={image} className={classes["main__bio--img"]} alt="" />
          <div className={classes["main__bio--description"]}>
            <div className={classes["main__bio--description__title"]}>
              <h5>زندگی نامه</h5>
              <h1>محمد احسني فروز</h1>
            </div>
            {bio.map(item => {
              return <div key={item.id}>
                <p data-aos="fade-up-left" data-aos-duration="2400">
                  {item.shortDescription}</p>
              </div>
            })}
            <button
              type="button"
              className="btn btn--info btn--fill"
              data-aos="fade-left"
              data-aos-duration="3000">
              ادامه زندگی نامه
            </button>
          </div>
        </div>
      </div>
    </Fragment >
  );
};
export default Bio;
