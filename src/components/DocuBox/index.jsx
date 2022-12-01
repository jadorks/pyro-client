import React from "react";
import style from "./docu-box.module.css";
import ExternalLink from "../../assets/images/external-link.svg";
import { usePyroDapp } from "../../providers/PyroProvider/PyroDappProvider";
import { utils } from "ethers";

const DocuBox = () => {

  const {poolInfo} = usePyroDapp();
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.info__header}>
          <p className={style.info__title}>More Info</p>
          <a
            href="https://etherscan.io/token/0x1e2d230c7a7f4c679fb1378f1f51dedeae85cd72"
            target="_blank"
            rel="noreferrer"
            className={style.info__link}
          >
            View Pyro on Etherscan
            <img src={ExternalLink.src} alt="" />
          </a>
        </div>
        <div className={style.info__body}>
          <div className={style.body__content}>
            <p>Pyro Staking Instructions</p>
            <a
              href="https://pyrotokenerc.com"
              target="_blank"
              rel="noreferrer"
              className={style.info__link}
            >
              View Instructions
              <img className="w-4" src={ExternalLink.src} alt="" />
            </a>
          </div>
          <div className={style.body__content}>
            <p>Pyro APR</p>
            <div className={style.apr}>{poolInfo ? `${utils.formatUnits(poolInfo?.apr, 2)}%` : "-"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocuBox;
