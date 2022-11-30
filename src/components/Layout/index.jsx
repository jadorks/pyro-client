import Head from "next/head";
import React from "react";

import Footer from "../Footer";
import Navbar from "../Navbar";

import style from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pyro</title>
        <meta
          key="description"
          name="description"
          content="$PYRO is a fast-burning hyper-deflationary token that gains value with every buy and sell transaction. The burns will be a true burn (and not a fake dead wallet burn) and actually remove the tokens from the total supply with every buy/sell transaction."
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f92032" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content="Pyromatic | Bringing a Whole New Meaning to HYPER Deflationary Tokens" />
        <meta
          key="twitter:url"
          name="twitter:url"
          content="https://pyrodapp.com"
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content="$PYRO is a fast-burning hyper-deflationary token that gains value with every buy and sell transaction. The burns will be a true burn (and not a fake dead wallet burn) and actually remove the tokens from the total supply with every buy/sell transaction."
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content="https://pyrodapp.com/banner.png"
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:site_name" property="og:site_name" content="Pyromatic" />
        <meta key="og:title" property="og:title" content="Pyromatic - Bringing a Whole New Meaning to HYPER Deflationary Tokens" />
        <meta
          key="og:url"
          property="og:url"
          content="https://pyrodapp.com"
        />
        <meta
          key="og:image"
          property="og:image"
          content="https://pyrodapp.com/banner.jpg"
        />
        <meta
          key="og:description"
          property="og:description"
          content="$PYRO is a fast-burning hyper-deflationary token that gains value with every buy and sell transaction. The burns will be a true burn (and not a fake dead wallet burn) and actually remove the tokens from the total supply with every buy/sell transaction."
        />
      </Head>
      <div className={style.Layout}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
