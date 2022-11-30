import React from "react";
import style from "./total-box.module.css";
import PyroSymbol from "../../assets/images/pyro-symbol-lg.svg";
import { parseDecimals } from "../../utils/utils";
import { usePyroDapp } from "../../providers/PyroProvider/PyroDappProvider";

const TotalPyroBox = ({ value }) => {
  const { prices } = usePyroDapp();

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.info__header}>
          <h2>Total Pyro Staked By All Holders</h2>
        </div>
        <div className={style.info__value}>
          <img src={PyroSymbol.src} alt="" />
          <p>{value ? parseDecimals(value) : "-"}</p>
        </div>
        <div className={style.usdt_value}>
          USDT Value:{" $"}
          {prices?.ethValue
            ? (
                (value * prices?.ethValue * prices?.usdtValue) /
                10 ** 18
              ).toFixed(2)
            : "0.00"}
        </div>
      </div>
    </div>
  );
};

export default TotalPyroBox;
