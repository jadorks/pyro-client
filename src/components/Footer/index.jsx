import React from "react";
import style from "./footer.module.css";
import Dextools from "../../assets/images/pyro-dextools.svg";
import Linktree from "../../assets/images/pyro-linktree.svg";
import Telegram from "../../assets/images/pyro-tg.svg";
import Twitter from "../../assets/images/pyro-twitter.svg";
import Uniswap from "../../assets/images/pyro-uniswap.svg";

const Footer = () => {
  console.log(`Built by Embrace Tech
  (https://t.me/whokilledthedeadsea)
 `);
  return (
    <div className={style.footer__container}>
      <div className={style.footer__content}>
        <div className={style.footer__left}>
          <h3>Pyro Matic 2022 All rights reserved.</h3>
          <p>Powered by Pyro</p>
        </div>
        <div className={style.footer__right}>
          <div className={style.socials}>
            <a
              href="https://app.uniswap.org/#/swap?inputCurrency=0x89568569DA9C83CB35E59F92f5Df2F6CA829EEeE&outputCurrency=ETH&chain=mainnet"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Uniswap.src} alt="" />
            </a>
            <a
              href="https://www.dextools.io/app/ether/pair-explorer/0xb38cb6d6e5b413beef2140f335048e436a0f10fb"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Dextools.src} alt="" />
            </a>
            <a
              href="https://linktr.ee/pyromatic"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linktree.src} alt="" />
            </a>
            <a href="https://t.me/PyroToken" target="_blank" rel="noreferrer">
              <img src={Telegram.src} alt="" />
            </a>
            <a
              href="https://twitter.com/PyroTokenErc"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Twitter.src} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
