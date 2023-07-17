import React from "react";
import classes from "./themeItem.module.css";

const ThemeItem = ({ img, color, changeColor }) => {
  return (
    <img
      src={img}
      alt=""
      className={classes["theme__img"]}
      onClick={() => {
        changeColor(color);
      }}
    />
  );
};

export default ThemeItem;
