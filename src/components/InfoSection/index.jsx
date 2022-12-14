import React from "react";
import { formatUnits } from "ethers/lib/utils";
import InfoBox from "../InfoBox";
import TimeBox from "../TimeBox";
import style from "./info-section.module.css";
import Info2 from "../../assets/images/info_two.svg";

const InfoSection = ({ userInfo, pendingRewards }) => {

  return (
    <div className={style.container}>
      <div className={style.content}>
        <InfoBox title={"Holder Amount Staked"} value={userInfo ? formatUnits(userInfo?.stakedAmount, 18) : 0} decimalPlaces = {5} />
        <InfoBox title={"Holder Amount Earned"} value={pendingRewards ? formatUnits(pendingRewards, 18) : 0} decimalPlaces = {10} image={Info2.src} showClaim={true} />
        <TimeBox />
      </div>
    </div>
  );
};

export default InfoSection;
