import React from "react";
import style from "./docu-box.module.css";
import ExternalLink from "../../assets/images/external-link.svg";

const DocuBox = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.info__header}>
          <p className={style.info__title}>More Info</p>
          <a
            href="https://etherscan.io/token/0x89568569da9c83cb35e59f92f5df2f6ca829eeee"
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
              href="https://pyrodapp.com"
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
            <div className={style.apr}>20.0%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocuBox;
