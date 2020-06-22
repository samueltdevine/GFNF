  
import React from "react";
import styles from "./TextUnderline.module.css";
import classNames from 'classnames'

const TextUnderline = ({children}) => {
  return (
    <div className={classNames(styles.underlinedWrap, "relative")}>
            <span>{children}</span>
            <div></div>
    </div>
  );
};

export default TextUnderline;