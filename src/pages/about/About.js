import React from "react";
import classes from "./About.module.css";
import Info from "../../components/Info.js";
import Stats from "../../components/Stats.js";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/Hassane al Hassane.pdf";
import Skills from "../../components/Skills";
import { resume } from "../../assets/data";
import ResumeItem from "../../components/ResumeItem";

const About = () => {
  return (
    <main className={`${classes.section} ${classes.container}`}>
      <section className={classes.about}>
        <h2 className={classes["section__title"]}>
          About <span>Me</span>
        </h2>
        <div className={`${classes["about__container"]} ${classes.grid}`}>
          <div className={classes["about__info"]}>
            <h3 className={classes["section__subtitle"]}>Personal Infos</h3>
            <ul className={`${classes["info__list"]} ${classes.grid}`}>
              <Info />
            </ul>
            <a href={CV} download="" className={classes.button}>
              Download Cv
              <span className={classes["button__icon"]}>
                <FaDownload />
              </span>
            </a>
          </div>

          <div className={`${classes.grid} ${classes.stats}`}>
            <Stats />
          </div>
        </div>
      </section>
      <div className={classes.separator}></div>
      <section className={classes.skills}>
        <h3
          className={`${classes["section__subtitle"]} ${classes["subtitle__center"]}`}
        >
          My Skills
        </h3>
        <div className={`${classes["skills__container"]} ${classes.grid}`}>
          <Skills />
        </div>
      </section>
      <div className={classes.separator}></div>
      <section className={classes.resume}>
        <h3
          className={`${classes["section__subtitle"]} ${classes["subtitle__center"]}`}
        >
          Experience & Education
        </h3>
        <div className={`${classes["resume__container"]} ${classes.grid}`}>
          <div className={classes["resume__data"]}>
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem key={val.id} {...val} />;
              } else {
                return null;
              }
            })}
          </div>
          <div className={classes["resume__data"]}>
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem key={val.id} {...val} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
