import React from "react";
import classes from "./Home.module.css";
import profile from "../../assets/hassane.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <section className={`${classes.home} ${classes.section}`}>
      <img src={profile} alt="" className={classes["home__img"]} />

      <div className={classes["home__content"]}>
        <div className={classes["home__data"]}>
          <h1 className={classes["home__title"]}>
            <span>I'm Hassane Hassane.</span> Web Developper
          </h1>
          <p className={classes["home__description"]}>
            I'm a web developper, Front-end & Back-end and I am passionate about
            building excellent software thate improves the lives of those
            arround me.
          </p>
          <Link to="/about" className={classes.button}>
            More About Me{" "}
            <span className={classes["button__icon"]}>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className={classes['color__block']}>

      </div>
    </section>
  );
};

export default Home;
