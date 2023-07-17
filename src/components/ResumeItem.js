import React from "react";
import classes from "./resumeItem.module.css";
import parse from 'html-react-parser';

const ResumeItem = ({ icon, year, title, desc }) => {
  return (
    <div className={classes["resume__item"]}>
      <div className={classes["resume__icon"]}>{icon}</div>
      <span className={classes["resume__date"]}>{year}</span>
      <h3 className={classes["resume__subtitle"]}>{parse(title)}</h3>
      <p className={classes["resume__description"]}>{desc}</p>
    </div>
  );
};

export default ResumeItem;
