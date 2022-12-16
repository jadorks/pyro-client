import React from "react";
import style from "./footer.module.css";
import Dextools from "../../assets/images/pyro-dextools.svg";
import Linktree from "../../assets/images/pyro-linktree.svg";
import Telegram from "../../assets/images/pyro-tg.svg";
import Twitter from "../../assets/images/pyro-twitter.svg";
import PyroSwap from "../../assets/images/pyro-swap.png";

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
              href="https://swap.pyrodapp.com/?spending_token=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&spending_chain_id=1&receiving_token=0x1e2d230c7a7f4c679fb1378f1f51dedeae85cd72&receiving_chain_id=1"
              target="_blank"
              rel="noreferrer"
            >
              <img src={PyroSwap.src} alt="" />
            </a>
            <a
              href="https://www.dextools.io/app/en/ether/pair-explorer/0x11dc5efa7a52742529df17bf6f179543e306ac07"
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
