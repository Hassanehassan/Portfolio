import React, { useState } from "react";
import classes from "./portfolioItem.module.css";
import Close from "../assets/close.svg";

const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className={classes["portfolio__item"]}>
      <img src={img} alt="" className={classes["portfolio__img"]} />

      <div className={classes["portfolio__hover"]} onClick={toggleModal}>
        <h3 className={classes["portfolio__title"]}>{title}</h3>
      </div>

      {modal && (
        <div className={classes["portfolio__modal"]}>
          <div className={classes["portfolio__modal-content"]}>
            <img src={Close} alt="" className={classes["modal--close"]} onClick={toggleModal} />

            <h3 className={classes["modal__title"]}>{title}</h3>

            <ul className={`${classes["modal__list"]} ${classes.grid}`}>
              {details.map(({ icon, title, desc }, index) => {
                return (
                  <li className={classes["modal__item"]} key={index}>
                    <span className={classes["item__icon"]}>{icon}</span>

                    <div>
                      <span className={classes["item__title"]}>{title}</span>
                      <span className={classes["item__details"]}>{desc}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <img src={img} alt="" className={classes["modal__img"]} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
