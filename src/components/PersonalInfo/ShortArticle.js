import React, { Fragment } from "react";
import shortArticle1 from "../../assets/images/11.png";

const ShortArticle = () => {
  return (
    <Fragment>
      <div className="main__article">
        <div className="container">
          <div
            className="main__article--description"
            data-aos="fade-left"
            data-aos-duration="2400">
            <div className="main__article--description__title">
              <h5 data-aos="fade-down-right" data-aos-duration="2400">
                مقاله
              </h5>
              <h1 data-aos="fade-down-right" data-aos-duration="3400">
                مقاله های علمی (کوتاه)
              </h1>
            </div>
            <div className="main__article--content">
              <div className="main__article--content__intro">
                <div className="main__article--title">
                  <img src={shortArticle1} className="main__article--img" />
                  <div>
                    <h5>تعهدات و الزامات طرفین در قرارداد</h5>
                    <h6>چاپ شده در فصلنامه شماره 73 علمی پژوهشیِ</h6>
                  </div>
                </div>
                <p>
                  چکیده: به دلیل ربط وثیق با هدف اصلی قرارداد انتقال فناوری،
                  «تعهد به تحقق انتقال» یکی از مهم ترین تعهدات انتقال دهنده است.
                  همچنین با بررسی قواعد عمومی قراردادها، تحلیل عرف معمول در
                  بازار تجارت فناوری و برخی مقررات حقوق داخلی و چند کشور دیگر،
                  چند نتیجه مهم دیگر آشکار شده است. نخست این که این تعهد محور
                  تمام تعهدات انتقال دهنده در برابر انتقال گیرنده است.
                </p>
                <button
                  type="button"
                  className="btn btn--info
                                    btn--fill"
                  data-aos="fade-left"
                  data-aos-duration="3000">
                  ادامه...
                </button>
              </div>

              <div className="main__article--content__intro">
                <div className="main__article--title">
                  <img src={shortArticle1} className="main__article--img" />
                  <div>
                    <h5>ملاکها و ضوابط ارزیابی</h5>
                    <h6>چاپ شده در وي‍ژه نامه مالكيت فكري</h6>
                  </div>
                </div>
                <p>
                  در بحث ملاک‌ها و ضوابط ارزیابی خسارات ناشی از نقض حقوق مالکیت
                  فکری، هرچند نوع خسارت از این جهت که قابل مطالبه باشد یا خیر به
                  عنوان ضابطه تقویم، نقش دارد، نوع خسارت به خودی خود می‌تواند
                  ملاک و ضابطه ارزیابی هم به شمار آید. با وجود این، در نظام
                  حقوقی کشورمان، برای ارزیابی خسارات ناشی از نقض حقوق مزبور،
                  ملاک خاصی پیش‌بینی نشده است. در حالی که در
                </p>
                <button
                  type="button"
                  className="btn btn--info btn--fill"
                  data-aos="fade-left"
                  data-aos-duration="3000">
                  ادامه...
                </button>
              </div>

              <div className="main__article--content__intro">
                <div className="main__article--title">
                  <img src={shortArticle1} className="main__article--img" />
                  <div>
                    <h5>آثار انتقال حقوق و تكاليف قراردادي به ثالث</h5>
                    <h6>چاپ شده در نشريه علمي پ‍ژوهشي و فنآوري</h6>
                  </div>
                </div>

                <p>
                  در منظر نهادهای بین‌المللی، بویژه سازمان ملل، یکی از عوامل
                  اصلی توسعه یافتگی کشورها، میزان استیلای آنها بر فنآوري‌هاي روز
                  است. بر پايه این دیدگاه، راه توسعه یافتن کشورهای توسعـه
                  نایافته و در حال توسعه را ناگزیر، انتقال يافتن فنآوری از
                  کشورهای توسعه یافتـه به
                </p>
                <button
                  type="button"
                  className="btn btn--info btn--fill"
                  data-aos="fade-left"
                  data-aos-duration="3000">
                  ادامه...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ShortArticle;
