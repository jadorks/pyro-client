import { utils } from "ethers";
import React from "react";
import { usePoolInfo } from "../../hooks/stake/usePoolInfo";
import DocuBox from "../DocuBox";
import StakeWidget from "../StakeWidget";
import TotalPyroBox from "../TotalPyroBox";
import style from "./stake.module.css";

const Stake = ({userInfo, pendingRewards}) => {

  const poolInfo = usePoolInfo();

  const userStakedTokens = userInfo ? userInfo?.stakedAmount : 0 ;
  const rewards = pendingRewards ? pendingRewards : 0;

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.content__left}>
          <StakeWidget stakedTokens={userStakedTokens} rewards={rewards} />
        </div>
        <div className={style.content__right}>
          <TotalPyroBox value={poolInfo ? utils.formatUnits(poolInfo?.poolStakedTokens,18) : 0}/>
          <DocuBox/>
        </div>
      </div>
    </div>
  );
};

export default Stake;
