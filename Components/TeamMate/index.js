import React from "react";
import styles from "./TeamMate.module.css";
import TopStrokeText from "../TopStrokeText";
import twitter from "./twitter.svg";
import bolt from "./bolt.svg";
import classNames from "classnames";

const TeamMate = ({ img, name, bio, handle, counter }) => {
  return (
    <div className={classNames( "flex", "per30", "border-b-2", "md:border-none", "border-black", "pb-6", "mb-6", "flex-grow-1", styles.gap)}>
      <div
        className={classNames("flex", styles.max, "flex-col")}
        >
        <div className={styles.imgHolder}>
          <img className={classNames(styles.teamImg, "pb-4")} src={img} />
        </div>
        <div className={classNames(styles.counter, "pb-8")}>
          <h3>{counter}</h3>
          <img src={bolt}></img>
        </div>
        <TopStrokeText>
          <h5  className={"py-8 font-bold"}>{name}</h5>
        </TopStrokeText>
        <p className={"pb-8"}>{bio}</p>
        <a className={classNames("md:absolute",styles.handle)} href={`/twitter` + handle}>
          <img src={twitter} />
          <p className={styles.handleText}>{handle}</p>
        </a>
      </div>
      <div className={styles.spacer}>

      </div>
        </div>
  );
};

export default TeamMate;
