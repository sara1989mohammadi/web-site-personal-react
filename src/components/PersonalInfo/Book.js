import React, { Fragment, useState, useEffect } from "react";
import BookList from "./BookList";
const Book = () => {
  const [book, setBook] = useState([]);
  useEffect(() => { fetchBookHandler() }, ([]));
  const fetchBookHandler = () => {
    fetch("https://localhost:44322/Book").then((Response) => {
      return Response.json();
    }).then((data) => {
      const items = data.map(item => {
        return {
          id: item.id,
          name: item.name,
          shortDescription: item.shortDescription,
          description: item.description,
        };
      })
      setBook(items);
    });
  }
  return (
    <Fragment>
      <div className="main__book">
        <div className="container">
          <div className="main__book--description">
            <div
              className="main__book--description__title"
              data-aos="zoom-out-up">
              <h5>کتاب</h5>
              <h1>کتاب های چاپ شده</h1>
            </div>
            <div className="main__book--content">
              <BookList book={book} />
              {/* book3 */}
              {/* <div
                className="main__book--content__intro"
                data-aos="fade-down"
                data-aos-duration="3000">
                <img src={book3} className="main__book--img" alt="" />
                <h5>کتاب حقوق انتقال فناوری</h5>
                <p>
                  در منظر نهادهای بین‌المللی، بویژه سازمان ملل، یکی از عوامل
                  اصلی توسعه یافتگی کشورها، میزان استیلای آنها بر فنآوري‌هاي روز
                  است. بر پايه این دیدگاه، راه توسعه یافتن کشورهای توسعـه
                  نایافته و در حال توسعه را ناگزیر، انتقال يافتن فنآوری از
                  کشورهای توسعه یافتـه به
                </p>
                <button
                  type="button"
                  className="btn btn--info
                      btn--fill"
                  data-aos="fade-left"
                  data-aos-duration="3000">
                  اطلاعات بیشتر
                </button>
              </div> */}
              {/* book1 */}

              {/* <div
                className="main__book--content__intro"
                data-aos="fade-up"
                data-aos-duration="3000">
                <img src={book1} className="main__book--img" alt="" />
                <h5>کتاب قرارداد انتقال تکنولوژی</h5>
                <p>
                  در منظر نهادهای بین‌المللی، بویژه سازمان ملل، یکی از عوامل
                  اصلی توسعه یافتگی کشورها، میزان استیلای آنها بر فنآوري‌هاي روز
                  است. بر پايه این دیدگاه، راه توسعه یافتن کشورهای توسعـه
                  نایافته و در حال توسعه را ناگزیر، انتقال يافتن فنآوری از
                  کشورهای توسعه یافتـه به
                </p>
                <button
                  type="button"
                  className="btn btn--info
                      btn--fill"
                  data-aos="fade-left"
                  data-aos-duration="3000">
                  اطلاعات بیشتر{" "}
                </button>
              </div> */}
              {/* book2 */}
              {/* <div
                className="main__book--content__intro"
                data-aos="fade-down"
                data-aos-duration="3000">
                <img src={book2} className="main__book--img" alt="" />
                <h5>کتاب قرارداد انتقال تکنولوژی</h5>
                <p>
                  در منظر نهادهای بین‌المللی، بویژه سازمان ملل، یکی از عوامل
                  اصلی توسعه یافتگی کشورها، میزان استیلای آنها بر فنآوري‌هاي روز
                  است. بر پايه این دیدگاه، راه توسعه یافتن کشورهای توسعـه
                  نایافته و در حال توسعه را ناگزیر، انتقال يافتن فنآوری از
                  کشورهای توسعه یافتـه به
                </p>
                <button
                  type="button"
                  className="btn btn--info
                      btn--fill"
                  data-aos="fade-left"
                  data-aos-duration="3000">
                  اطلاعات بیشتر
                </button>
              </div> */}
              {/* book4 */}

              {/* <div
                className="main__book--content__intro"
                data-aos="fade-up"
                data-aos-duration="3000">
                <img src={book4} className="main__book--img" alt="" />
                <h5>کتاب حقوق ورزشی</h5>
                <p>
                  در منظر نهادهای بین‌المللی، بویژه سازمان ملل، یکی از عوامل
                  اصلی توسعه یافتگی کشورها، میزان استیلای آنها بر فنآوري‌هاي روز
                  است. بر پايه این دیدگاه، راه توسعه یافتن کشورهای توسعـه
                  نایافته و در حال توسعه را ناگزیر، انتقال يافتن فنآوری از
                  کشورهای توسعه یافتـه به
                </p>
                <button
                  type="button"
                  className="btn btn--info
                      btn--fill"
                  data-aos="fade-left"
                  data-aos-duration="3000">
                  اطلاعات بیشتر
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Book;
