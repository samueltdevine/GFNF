import React from "react";
import ReactDOM from "react-dom";
import styles from "./NavBar.module.css";
import TextUnderline from "../TextUnderline";
import classNames from "classnames";

const navLinks = [
  {
    name: "Team",
  },
  {
    name: "Features",
  },
  {
    name: "Contact",
  },
];

const NavBar = () => {
  return (
    <div id="site-wrap" className={classNames("flex", "justify-between")}>
      <div
        id="logo-animated"
        className={classNames(
          styles.wordmarkAnim,
          "flex",
          "h-5",
          "self-center",
          "flex-shrink-0"
        )}
      >
        <img
          id="words"
          className={classNames("h-full")}
          src="/wordmark words.svg"
        ></img>
        <img
          id="bolt"
          className={classNames("h-full", styles.logoAnim)}
          src="/logo.svg"
        ></img>
      </div>
      <div id="navButtons" className={classNames("flex")}>
        <div
          id="navLinks"
          className={classNames("sm:flex", "hidden", "items-center", "px-4")}
        >
          <ul className={classNames("flex")}>
            {navLinks.map(({ name }) => {
              return (
                <div
                  className={classNames(
                    styles.dividerHider,
                    "flex",
                    "items-center"
                  )}
                >
                  <a href={`#` + name}>
                    <li className={"p-2"}>
                      <TextUnderline>{name}</TextUnderline>
                    </li>
                  </a>
                  <p> / </p>
                </div>
              );
            })}
          </ul>
        </div>
        <a href="/dashboard">
          <div className="buttonGreen">Dashboard</div>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
