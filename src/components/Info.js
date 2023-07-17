import React from "react";
import { personalInfo } from "../assets/data";
import classes from './info.module.css';

const Info = () => {
  return <>
  {personalInfo.map(({title, description}, index) => 
    <li className={classes['info__item']} key={index}>
      <span className={classes['info__title']}>{title}</span>
      <span className={classes['info__description']}>{description}</span>
    </li>
  )}
  </>;
};

export default Info;