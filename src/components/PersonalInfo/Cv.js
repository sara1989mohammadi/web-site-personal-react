import React, { Fragment } from "react";
import image from "../../assets/images/01.png";
import icon from "../../assets/icons/sprite.svg#star-svgrepo-com";

const Cv = () => {
  return (
    <Fragment>
      <div className="main__cv">
        <div className="container">
          <div className="main__cv--description">
            <div
              className="main__cv--description__title"
              data-aos="zoom-out-up"
              data-aos-duration="2400">
              <h5> علمی</h5>
              <h1>رزومه علمی</h1>
            </div>
            <div
              className="main__cv--description__intro "
              data-aos="zoom-in-left">
              <div>
                <h5>مدرک تحصیلی:</h5>
                <p>
                  <svg className="icon--bio">
                    <use href={`${icon}#check-svgrepo-com`}></use>
                  </svg>
                  دکترای تخصصی (Ph.D)
                </p>
                <p>
                  <svg className="icon--bio">
                    <use href={`${icon}#check-svgrepo-com`}></use>
                  </svg>
                  حقوق خصوصی از دانشگاه تربیت مدرس با معدل کل 17/26
                </p>
                <p>
                  <svg className="icon--bio">
                    <use href={`${icon}#check-svgrepo-com`}></use>
                  </svg>
                  شاگرد اول دانشگاه مزبور با احراز هر سه شرط تعیین شده از سوی
                  دانشگاه برای انتخاب شاگرد اولی .
                </p>
              </div>
            </div>
            <div
              className="main__cv--description__intro "
              data-aos="zoom-in-right">
              <div>
                <h5>کتابهای به چاپ رسیده</h5>

                <p>
                  <svg className="icon--bio">
                    <use href={`${icon}#check-svgrepo-com`}></use>
                  </svg>
                  قرارداد انتقال تکنولوژی، ماهیت حقوقی، شرایط تشکیل و آثار
                </p>
                <p>
                  <svg className="icon--bio">
                    <use href={`${icon}#check-svgrepo-com`}></use>
                  </svg>
                  حقوق ورزشی
                </p>
                <p>
                  <svg className="icon--bio">
                    <use href={`${icon}#check-svgrepo-com`}></use>
                  </svg>
                  حقوق انتقال فنآوری، شرح و تفسیر ساختار و شروط و تعهدات قرارداد
                  انتقال فنآوری
                </p>
                <p>
                  <svg className="icon--bio">
                    <use href={`${icon}#check-svgrepo-com`}></use>
                  </svg>
                  حقوق قراردادهای تحقیق و توسعه (R&amp;D)
                </p>
              </div>
            </div>
          </div>
          <img
            src={image}
            className="main__cv--img"
            data-aos="zoom-in"
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Cv;
