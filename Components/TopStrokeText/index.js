  
import React from "react";
import styles from "./TopStrokeText.module.css";

const TopStrokeText = ({children}) => {
  return (
      <div className={styles.topStroke}>
          {children}
      </div>
  );
};

export default TopStrokeText;