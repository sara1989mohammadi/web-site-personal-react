import React, { Fragment } from "react";

const Contact = () => {
  return (
    <Fragment>
      <div className="main__contact">
        <div className="container">
          <div className="main__contact--description">
            <div className="main__contact--description__title">
              <h5>ارتباط با ما</h5>
              <h1>ارتباط با ما</h1>
            </div>
            <div className="main__contact--content">
              <form className="form--field">
                {/* username */}
                <div className="form--field__item">
                  <label for="username">نام و نام خانوادگی</label>
                  <input
                    id="username"
                    type="text"
                    placeholder=" نام و نام خانوادگی"
                  />
                </div>
                {/* email  */}
                <div className="form--field__item">
                  <label for="email">ایمیل</label>
                  <input id="email" type="email" placeholder="ایمیل" />
                </div>
                {/* description */}
                <div className="form--field__item">
                  <label for="description">توضیحات</label>
                  <textarea
                    id="description"
                    rows="20"
                    cols="100"
                    placeholder="توضیحات"></textarea>
                </div>
                <button type="submit" className="btn btn--contact">
                  ارسال
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Contact;
