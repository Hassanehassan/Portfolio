import React from "react";
import classes from './Portfolio.module.css';
import { portfolio } from "../../assets/data";
import PortfolioItem from "../../components/PortfolioItem";

const Portfolio = () => {
  return <section className={`${classes.portfolio} ${classes.section}`}>
    <h2 className={classes['section__title']}>My <span>Portfolio</span></h2>

    <div className={`${classes['portfolio__container']} ${classes.container} ${classes.grid}`}>
      {portfolio.map((item) => {
        return <PortfolioItem key={item.id} {...item} />
      })}
    </div>
  </section>;
};

export default Portfolio;
