import React from "react";
import style from "./info-box.module.css";
import Info1 from "../../assets/images/info_one.svg";
import PyroSymbol from "../../assets/images/pyro-symbol.svg";
import {parseDecimals} from "../../utils/utils"

const InfoBox = ({title, value = 0, decimalPlaces }) => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.info__header}>
          <p>{title}</p>
          <img src={Info1.src} alt="" />
        </div>
        <div className={style.info__value}>
          <img src={PyroSymbol.src} alt="" />
          <p>{parseDecimals(value, decimalPlaces)}</p>
        </div>
        <div className={style.usdt_value}>USDT Value: $0,000.00</div>
      </div>
    </div>
  );
};

export default InfoBox;
