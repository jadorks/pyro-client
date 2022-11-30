import React from "react";
import style from "./total-box.module.css";
import PyroSymbol from "../../assets/images/pyro-symbol-lg.svg";

const TotalPyroBox = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.info__header}>
          <h2>Total Pyro Staked By All Holders</h2>
        </div>
        <div className={style.info__value}>
          <img src={PyroSymbol.src} alt="" />
          <p>$0,000,000.00</p>
        </div>
        <div className={style.usdt_value}>USDT Value: $0,000.00</div>
      </div>
    </div>
  );
};

export default TotalPyroBox;
