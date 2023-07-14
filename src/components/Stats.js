import React from "react";
import { stats } from "../assets/data";
import classes from "./stats.module.css";
import parse from 'html-react-parser';

const Stats = () => {
  return (
    <>
      {stats.map(({ no, title }, index) => {
        return <div className={classes["stats__box"]} key={index}>
          <h3 className={classes['stats__no']}>{no}</h3>
          <p className={classes['stats__title']}>{parse(title)}</p>
        </div>;
      })}
    </>
  );
};

export default Stats;
