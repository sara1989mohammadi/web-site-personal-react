import { NavLink, Link } from 'react-router-dom';
import classes from "./Header.module.css";
const Header = () => {
  return (
    <header className={classes.header}>
      <h1
        className={classes["header__title"]}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
        دکتر محمد احسنی فروز
      </h1>
      <button type="button" className={classes["toggle-btn"]}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={classes["navbar"]}>
        <ul className={classes["menu"]}>
          <li
            className={classes["menu__item"]}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li
            className={classes["menu__item"]}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <Link to='/biography'>
              زندگی نامه
            </Link>

          </li>
          <li
            className={classes["menu__item"]}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <NavLink to="/resume">رزومه</NavLink>
          </li>
          <li
            className={classes["menu__item"]}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <NavLink to="/books">کتاب ها </NavLink>
          </li>
          <li
            className={classes["menu__item"]}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <NavLink to="/article">مقاله های علمی پژوهشی</NavLink>
          </li>
          <li
            className={classes["menu__item"]}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <NavLink to="/">مقاله های علمی (کوتاه)</NavLink>
          </li>
          <li
            className={classes["menu__item"]}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <NavLink to="/">تازه های تکنولوژی و تحقیق و توسعه</NavLink>
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
