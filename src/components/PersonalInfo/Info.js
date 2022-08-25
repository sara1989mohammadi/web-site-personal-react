import React, { Fragment } from "react";
import image from "../../assets/images/Image.png";
import icon from "../../assets/icons/sprite.svg";
const Info = () => {
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
              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1600">
                <svg className="icon--bio">
                  <use href={`${icon}#star-svgrepo-com`}></use>
                </svg>
                دکترای تخصصی (Ph.D) حقوق خصوصی از دانشگاه تربیت مدرس
              </p>
              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1700">
                <svg className="icon--bio">
                  <use href={`${icon}#star-svgrepo-com`}></use>
                </svg>
                عضو هیات علمی دپارتمان آموزش موسسه خدمات بین المللی مالکیت فکری
                مدرس
              </p>

              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1800">
                <svg className="icon--bio">
                  <use href={`${icon}#star-svgrepo-com`}></use>
                </svg>
                عضو کمیته علمی دومین اجلاس مدیران تحقیق، توسعه و فناوری کشور در
                سال 1392
              </p>

              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1900">
                <svg className="icon--bio">
                  <use href={`${icon}#star-svgrepo-com`}></use>
                </svg>
                عضو کمیته علمی سومین اجلاس مدیران تحقیق، توسعه و فناوری كشور در
                سال 1393
              </p>

              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000">
                <svg className="icon--bio">
                  <use href={`${icon}#star-svgrepo-com`}></use>
                </svg>
                عضو کمیته علمی نخستین اجلاس ملی اقتصاد زیستی و زیست بازار ایران
                در سال 1394
              </p>
              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2100">
                <svg className="icon--bio">
                  <use href={`${icon}#star-svgrepo-com`}></use>
                </svg>
                نماینده کانون وکلای دادگستری اصفهان در کمیته حقوقی جذب سرمایه
                گذاری خارجی در اصفهان، سال 1395
              </p>
              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2200">
                <svg className="icon--bio">
                  <use href={`${icon}#star-svgrepo-com`}></use>
                </svg>
                داور مقاله ارسالی برای فصلنامه علمی پژوهشی مدرس (پژوهشهای حقوق
                تطبیقی) متعلق به دانشکده حقوق دانشگاه تربیت مدرس و همچنین
                فصلنامه‌ی سیاست علم و فناوری مرکز تحقیقات سیاست علمی کشور
              </p>
              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2300">
                <svg className="icon--bio">
                  <use href={`${icon}#star-svgrepo-com`}></use>
                </svg>
                مدرس کارگاههای آموزشی حقوق انتقال فناوری و حقوق قراردادهای تحقیق
                و توسعه، ویژه متخصصان صنعتی کشور و حقوق دانان فعال در اين حوزه
              </p>
              <p
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2400">
                <svg className="icon--bio">
                  <use href={`${icon}#star-svgrepo-com`}></use>
                </svg>
                دارای پروانه وکالت پایه یکم دادگستری از کانون وکلای اصفهان
              </p>
            </div>
          </div>
          <img src={image} className="main__info--img" alt="" />
        </div>
      </div>
    </Fragment>
  );
};
export default Info;
