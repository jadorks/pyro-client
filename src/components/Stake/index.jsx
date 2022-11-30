import React from "react";
import DocuBox from "../DocuBox";
import StakeWidget from "../StakeWidget";
import TotalPyroBox from "../TotalPyroBox";
import style from "./stake.module.css";

const Stake = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.content__left}>
          <StakeWidget />
        </div>
        <div className={style.content__right}>
          <TotalPyroBox/>
          <DocuBox/>
        </div>
      </div>
    </div>
  );
};

export default Stake;
