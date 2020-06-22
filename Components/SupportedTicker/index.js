import React from "react";
import Ticker from "react-ticker";
import styles from "./SupportedTicker.module.css"

import Image1 from '../../public/yeezy.svg'
import Image2 from '../../public/foot locker.svg'
import Image3 from '../../public/kith.svg'
import Image4 from '../../public/five.svg'
import Image5 from '../../public/we-support.svg'

const supImgs = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5
  ]



const SupportedTicker = () => {
  return (
    <Ticker>
      {({ index }) => (
        <div className={styles.tickerContainer}>
          {supImgs.map((imgSrc) => {
            return (
              <div className={styles.tickImg}>
                <img className="px-10" alt="image" src={imgSrc} height="100px" width="300px"></img>
              </div>
            );
          })}
        </div>
      )}
    </Ticker>
  );
};

export default SupportedTicker;
