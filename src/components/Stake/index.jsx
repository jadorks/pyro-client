import { utils } from "ethers";
import React from "react";
import { usePoolInfo } from "../../hooks/stake/usePoolInfo";
import { usePyroDapp } from "../../providers/PyroProvider/PyroDappProvider";
import DocuBox from "../DocuBox";
import StakeWidget from "../StakeWidget";
import TotalPyroBox from "../TotalPyroBox";
import style from "./stake.module.css";

const Stake = () => {

  const {userInfo, poolInfo} = usePyroDapp();

  const userStakedTokens = userInfo ? userInfo?.stakedAmount : 0 ;

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.content__left}>
          <StakeWidget stakedTokens={userStakedTokens} />
        </div>
        <div className={style.content__right}>
          <TotalPyroBox value={poolInfo?.poolStakedTokens ? utils.formatUnits(poolInfo?.poolStakedTokens,18) : 0}/>
          <DocuBox/>
        </div>
      </div>
    </div>
  );
};

export default Stake;
