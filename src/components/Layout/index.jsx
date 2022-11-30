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
          content="$YANTRA - Wealth, Peace, Strength and Success."
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta key="twitter:card" name="twitter:card" content="app" />
        <meta
          key="twitter:title"
          name="twitter:title"
          content="$YANTRA"
        />
        <meta
          key="twitter:url"
          name="twitter:url"
          content="https://yantra-dapp.netlify.app"
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content="$YANTRA - Wealth, Peace, Strength and Success."
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content="https://yantra-dapp.netlify.app/icon.png"
        />
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content="@YANTRA999"
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:site_name"
          property="og:site_name"
          content="$YANTRA"
        />
        <meta key="og:url" property="og:url" content="https://yantra-dapp.netlify.app" />
        <meta
          key="og:image"
          property="og:image"
          content="https://yantra-dapp.netlify.app/icon.png"
        />
        <meta
          key="og:description"
          property="og:description"
          content="$YANTRA - Wealth, Peace, Strength and Success."
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
