import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <h1
        className="header__title"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
        دکتر محمد احسنی فروز
      </h1>
      <button type="button" className="toggle-btn">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className="navbar">
        <ul className="menu">
          <li
            className="menu__item"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <a href="/">صفحه اصلی</a>
          </li>
          <li
            className="menu__item"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <a href="/">زندگی نامه</a>
          </li>
          <li
            className="menu__item"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <a href="/">رزومه</a>
          </li>
          <li
            className="menu__item"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <a href="/">کتاب ها </a>
          </li>
          <li
            className="menu__item"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <a href="/">مقاله های علمی پژوهشی</a>
          </li>
          <li
            className="menu__item"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <a href="/">مقاله های علمی (کوتاه)</a>
          </li>
          <li
            className="menu__item"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <a href="/">تازه های تکنولوژی و تحقیق و توسعه</a>
          </li>
        </ul>
        <button
          type="button"
          className="btn btn--contact"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
          ارتباط با ما
        </button>
      </nav>
    </header>
  );
};
export default Header;
