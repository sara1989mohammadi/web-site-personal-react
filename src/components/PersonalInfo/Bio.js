import React, { Fragment } from "react";
import image from "../../assets/images/04.png";
const Bio = () => {
  return (
    <Fragment>
      <div className="main__bio" data-aos="fade-right" data-aos-duration="2400">
        <div className="container">
          <img src={image} className="main__bio--img" alt="" />
          <div className="main__bio--description">
            <div className="main__bio--description__title">
              <h5>زندگی نامه</h5>
              <h1>محمد احسني فروز</h1>
            </div>
            <p data-aos="fade-up-left" data-aos-duration="2400">
              محمد احسني فروز فرزند علي در نخستين روز از بهمن ماه سال 1348 در
              محله ی دستگرد خيار اصفهان، در خانوادهاي مذهبي ديده به جهان گشود.
              پدر وي به شغل كشاورزي و مادر او به خانه داري مشغول بود. او كه در
              كار كشاورزي به پدر و خانواده خود كمك ميكرد همزمان دوران تحصيل خود
              تا دیپلم را نيز در همان محله ی دستگرد خيار گذراند و در خرداد ماه
              سال 1357 خورشيدي موفق شد در رشته علوم تجربي از دبيرستان وحيد
              دستگردي، ديپلم خود را دريافت نمايد. او در آن سال بخاطر فراهم نبودن
              برخی شرایط، نتوانست به تحصیلات خود در دانشگاه ادامه دهد. از این
              رو، در تير ماه همان سال براي اعزام به خدمت سربازي، ثبت نام نمود و
              دفترچه آماده به خدمت خود را با تاريخ اعزام براي مردادماه، دريافت
              كرد. ولي چون در اين روزها مبارزات انقلابي مردم با نظام حاكم علني
              شده بود از رفتن به سربازي هم خودداري نمود و به جمع مردم و همراهی
              با آنها در تظاهرات و راهپيمايي ها پیوست. پس از انقلاب، وي از
              نخستين جواناني بود كه عضو نيروهاي مردمي انتظامات.....
            </p>
            <button
              type="button"
              className="btn btn--info
                                btn--fill"
              data-aos="fade-left"
              data-aos-duration="3000">
              ادامه زندگی نامه{" "}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Bio;
