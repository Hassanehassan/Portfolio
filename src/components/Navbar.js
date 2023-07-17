import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { links } from "../assets/data";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className={classes.nav}>
      <div
        className={
          showMenu
            ? `${classes["nav__menu"]} ${classes["show-menu"]}`
            : classes["nav__menu"]
        }
      >
        <ul className={classes["nav__list"]}>
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className={classes["nav__item"]} key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? `${classes["nav__link"]} ${classes["active-nav"]}`
                      : classes["nav__link"]
                  }
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <span className={classes["nav__icon"]}>{icon}</span>
                  <h3 className={classes["nav__name"]}>{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={
          showMenu
            ? `${classes["nav__toggle"]} ${classes["animate-toggle"]}`
            : classes["nav__toggle"]
        }
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
