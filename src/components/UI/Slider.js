import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "./Slider.css";
import article1 from "../../assets/images/11.png";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div className="swiper-slide--content">
            <div
              className="swiper-slide__article--content__intro"
              data-aos="fade-down-left"
              data-aos-duration="2400">
              <div className="swiper-slide__article--title">
                <img
                  src={article1}
                  className="swiper-slide__article--img"
                  alt=""
                />
                <div>
                  <h5>تعهدات و الزامات طرفین در قرارداد</h5>
                  <h6>چاپ شده در فصلنامه شماره 73 علمی پژوهشیِ</h6>
                </div>
              </div>
              <p>
                چکیده: به دلیل ربط وثیق با هدف اصلی قرارداد انتقال فناوری، «تعهد
                به تحقق انتقال» یکی از مهم ترین تعهدات انتقال دهنده است. همچنین
                با بررسی قواعد عمومی قراردادها، تحلیل عرف معمول در بازار تجارت
                فناوری و برخی مقررات حقوق داخلی و چند کشور دیگر، چند نتیجه مهم
                دیگر آشکار شده است. نخست این که این تعهد محور تمام تعهدات انتقال
                دهنده در برابر انتقال گیرنده است.
              </p>
              <button
                type="button"
                className="btn
                                          btn--info
                                          btn--fill"
                data-aos="fade-left"
                data-aos-duration="3000">
                ادامه...{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide--content">
            <div
              className="swiper-slide__article--content__intro"
              data-aos="fade-down-left"
              data-aos-duration="2400">
              <div className="swiper-slide__article--title">
                <img
                  src={article1}
                  className="swiper-slide__article--img"
                  alt=""
                />
                <div>
                  <h5>تعهدات و الزامات طرفین در قرارداد</h5>
                  <h6>چاپ شده در فصلنامه شماره 73 علمی پژوهشیِ</h6>
                </div>
              </div>
              <p>
                چکیده: به دلیل ربط وثیق با هدف اصلی قرارداد انتقال فناوری، «تعهد
                به تحقق انتقال» یکی از مهم ترین تعهدات انتقال دهنده است. همچنین
                با بررسی قواعد عمومی قراردادها، تحلیل عرف معمول در بازار تجارت
                فناوری و برخی مقررات حقوق داخلی و چند کشور دیگر، چند نتیجه مهم
                دیگر آشکار شده است. نخست این که این تعهد محور تمام تعهدات انتقال
                دهنده در برابر انتقال گیرنده است.
              </p>
              <button
                type="button"
                className="btn
                                          btn--info
                                          btn--fill"
                data-aos="fade-left"
                data-aos-duration="3000">
                ادامه...{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide--content">
            <div
              className="swiper-slide__article--content__intro"
              data-aos="fade-down-left"
              data-aos-duration="2400">
              <div className="swiper-slide__article--title">
                <img
                  src={article1}
                  className="swiper-slide__article--img"
                  alt=""
                />
                <div>
                  <h5>تعهدات و الزامات طرفین در قرارداد</h5>
                  <h6>چاپ شده در فصلنامه شماره 73 علمی پژوهشیِ</h6>
                </div>
              </div>
              <p>
                چکیده: به دلیل ربط وثیق با هدف اصلی قرارداد انتقال فناوری، «تعهد
                به تحقق انتقال» یکی از مهم ترین تعهدات انتقال دهنده است. همچنین
                با بررسی قواعد عمومی قراردادها، تحلیل عرف معمول در بازار تجارت
                فناوری و برخی مقررات حقوق داخلی و چند کشور دیگر، چند نتیجه مهم
                دیگر آشکار شده است. نخست این که این تعهد محور تمام تعهدات انتقال
                دهنده در برابر انتقال گیرنده است.
              </p>
              <button
                type="button"
                className="btn
                                          btn--info
                                          btn--fill"
                data-aos="fade-left"
                data-aos-duration="3000">
                ادامه...{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide--content">
            <div
              className="swiper-slide__article--content__intro"
              data-aos="fade-down-left"
              data-aos-duration="2400">
              <div className="swiper-slide__article--title">
                <img
                  src={article1}
                  className="swiper-slide__article--img"
                  alt=""
                />
                <div>
                  <h5>تعهدات و الزامات طرفین در قرارداد</h5>
                  <h6>چاپ شده در فصلنامه شماره 73 علمی پژوهشیِ</h6>
                </div>
              </div>
              <p>
                چکیده: به دلیل ربط وثیق با هدف اصلی قرارداد انتقال فناوری، «تعهد
                به تحقق انتقال» یکی از مهم ترین تعهدات انتقال دهنده است. همچنین
                با بررسی قواعد عمومی قراردادها، تحلیل عرف معمول در بازار تجارت
                فناوری و برخی مقررات حقوق داخلی و چند کشور دیگر، چند نتیجه مهم
                دیگر آشکار شده است. نخست این که این تعهد محور تمام تعهدات انتقال
                دهنده در برابر انتقال گیرنده است.
              </p>
              <button
                type="button"
                className="btn
                                          btn--info
                                          btn--fill"
                data-aos="fade-left"
                data-aos-duration="3000">
                ادامه...{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide--content">
            <div
              className="swiper-slide__article--content__intro"
              data-aos="fade-down-left"
              data-aos-duration="2400">
              <div className="swiper-slide__article--title">
                <img
                  src={article1}
                  className="swiper-slide__article--img"
                  alt=""
                />
                <div>
                  <h5>تعهدات و الزامات طرفین در قرارداد</h5>
                  <h6>چاپ شده در فصلنامه شماره 73 علمی پژوهشیِ</h6>
                </div>
              </div>
              <p>
                چکیده: به دلیل ربط وثیق با هدف اصلی قرارداد انتقال فناوری، «تعهد
                به تحقق انتقال» یکی از مهم ترین تعهدات انتقال دهنده است. همچنین
                با بررسی قواعد عمومی قراردادها، تحلیل عرف معمول در بازار تجارت
                فناوری و برخی مقررات حقوق داخلی و چند کشور دیگر، چند نتیجه مهم
                دیگر آشکار شده است. نخست این که این تعهد محور تمام تعهدات انتقال
                دهنده در برابر انتقال گیرنده است.
              </p>
              <button
                type="button"
                className="btn
                                          btn--info
                                          btn--fill"
                data-aos="fade-left"
                data-aos-duration="3000">
                ادامه...{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide--content">
            <div
              className="swiper-slide__article--content__intro"
              data-aos="fade-down-left"
              data-aos-duration="2400">
              <div className="swiper-slide__article--title">
                <img
                  src={article1}
                  className="swiper-slide__article--img"
                  alt=""
                />
                <div>
                  <h5>تعهدات و الزامات طرفین در قرارداد</h5>
                  <h6>چاپ شده در فصلنامه شماره 73 علمی پژوهشیِ</h6>
                </div>
              </div>
              <p>
                چکیده: به دلیل ربط وثیق با هدف اصلی قرارداد انتقال فناوری، «تعهد
                به تحقق انتقال» یکی از مهم ترین تعهدات انتقال دهنده است. همچنین
                با بررسی قواعد عمومی قراردادها، تحلیل عرف معمول در بازار تجارت
                فناوری و برخی مقررات حقوق داخلی و چند کشور دیگر، چند نتیجه مهم
                دیگر آشکار شده است. نخست این که این تعهد محور تمام تعهدات انتقال
                دهنده در برابر انتقال گیرنده است.
              </p>
              <button
                type="button"
                className="btn
                                          btn--info
                                          btn--fill"
                data-aos="fade-left"
                data-aos-duration="3000">
                ادامه...{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide--content">
            <div
              className="swiper-slide__article--content__intro"
              data-aos="fade-down-left"
              data-aos-duration="2400">
              <div className="swiper-slide__article--title">
                <img
                  src={article1}
                  className="swiper-slide__article--img"
                  alt=""
                />
                <div>
                  <h5>تعهدات و الزامات طرفین در قرارداد</h5>
                  <h6>چاپ شده در فصلنامه شماره 73 علمی پژوهشیِ</h6>
                </div>
              </div>
              <p>
                چکیده: به دلیل ربط وثیق با هدف اصلی قرارداد انتقال فناوری، «تعهد
                به تحقق انتقال» یکی از مهم ترین تعهدات انتقال دهنده است. همچنین
                با بررسی قواعد عمومی قراردادها، تحلیل عرف معمول در بازار تجارت
                فناوری و برخی مقررات حقوق داخلی و چند کشور دیگر، چند نتیجه مهم
                دیگر آشکار شده است. نخست این که این تعهد محور تمام تعهدات انتقال
                دهنده در برابر انتقال گیرنده است.
              </p>
              <button
                type="button"
                className="btn
                                          btn--info
                                          btn--fill"
                data-aos="fade-left"
                data-aos-duration="3000">
                ادامه...{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide--content">
            <div
              className="swiper-slide__article--content__intro"
              data-aos="fade-down-left"
              data-aos-duration="2400">
              <div className="swiper-slide__article--title">
                <img
                  src={article1}
                  className="swiper-slide__article--img"
                  alt=""
                />
                <div>
                  <h5>تعهدات و الزامات طرفین در قرارداد</h5>
                  <h6>چاپ شده در فصلنامه شماره 73 علمی پژوهشیِ</h6>
                </div>
              </div>
              <p>
                چکیده: به دلیل ربط وثیق با هدف اصلی قرارداد انتقال فناوری، «تعهد
                به تحقق انتقال» یکی از مهم ترین تعهدات انتقال دهنده است. همچنین
                با بررسی قواعد عمومی قراردادها، تحلیل عرف معمول در بازار تجارت
                فناوری و برخی مقررات حقوق داخلی و چند کشور دیگر، چند نتیجه مهم
                دیگر آشکار شده است. نخست این که این تعهد محور تمام تعهدات انتقال
                دهنده در برابر انتقال گیرنده است.
              </p>
              <button
                type="button"
                className="btn
                                          btn--info
                                          btn--fill"
                data-aos="fade-left"
                data-aos-duration="3000">
                ادامه...{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
