import React, { useState, useEffect } from "react";
import style from "./info-box.module.css";
import Info1 from "../../assets/images/info_one.svg";
import PyroSymbol from "../../assets/images/pyro-symbol.svg";
import { parseDecimals } from "../../utils/utils";

import { usePyroDapp } from "../../providers/PyroProvider/PyroDappProvider";
import { useClaimRewards } from "../../hooks/stake/useClaimRewards";
import { useRouter } from "next/router";
import Uniswap from "../../assets/images/pyro-uniswap.svg";
import SpinnerAlt from "../../assets/images/spinner-alt.svg";

const InfoBox = ({
  title,
  value = 0,
  decimalPlaces,
  image = Uniswap.src,
  showClaim = false,
}) => {
  const { prices, userInfo, userRewards } = usePyroDapp();
  const { send: claim, state: claimState } = useClaimRewards();
  const [isClaiming, setIsClaiming] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isClaiming && claimState.status == "Success") {
      alert("Rewards claimed successfully");
      setIsClaiming(false);
      router.reload();
    } else if (
      isClaiming &&
      (claimState.status == "Fail" || claimState.status == "Exception")
    ) {
      alert(
        claimState.errorMessage.charAt(0).toUpperCase() +
          claimState.errorMessage.slice(1)
      );
      setIsClaiming(false);
    }
  }, [claimState]);

  const isLocked = () => {
    return new Date().valueOf < userInfo?.lockEndTime * 1000;
  };

  const handleClaim = () => {
    try {
      setIsClaiming(true);
      void claim();
    } catch (e) {
      setIsClaiming(false);
      console.error(e);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.info__header}>
          <p>{title}</p>
          {image == Uniswap.src ? (
            <a
              href="https://app.uniswap.org/#/swap?outputCurrency=0x1e2d230c7a7f4c679fb1378f1f51dedeae85cd72"
              target="_blank"
              rel="noreferrer"
            >
              <img src={image} alt="" />
            </a>
          ) : (
            <img src={image} alt="" />
          )}
        </div>
        <div className={style.info__value}>
          <img src={PyroSymbol.src} alt="" />
          <p>{parseDecimals(value, decimalPlaces)}</p>
        </div>
        <div className={style.usdt_value}>
          <div>
            USDT Value:{" $"}
            {prices?.ethValue
              ? (
                  (value * prices?.ethValue * prices?.usdtValue) /
                  10 ** 18
                ).toFixed(2)
              : "0.00"}
          </div>
          {showClaim && (
            <div>
              <button
                disabled={userRewards <= 0 || !isLocked() || isClaiming}
                onClick={handleClaim}
              >
                {isClaiming ? "Claiming..." : "Claim Rewards"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
