import React, { useEffect, useState } from "react";
import { ChainId, Localhost, Mainnet, useEthers, useUpdateConfig } from "@usedapp/core";
import PyroDappContext from "./context";
import { useEthUSDTContract, usePyroEthContract } from "../../hooks/useContract";
import { usePrice } from "../../hooks/usePrice";

function PyroDappProvider({ children }) {
  const { account, chainId, library } = useEthers();
  const updateConfig = useUpdateConfig();
  const [isChainError, setIsChainError] = useState(false);
  const [prices, setPrices] = useState({});

  const pyroEthContract = usePyroEthContract();
  const ethUSDTContract = useEthUSDTContract();
  const ethValue = usePrice(pyroEthContract, true, 18);
  const usdtValue = usePrice(ethUSDTContract, true, 12);

  useEffect(() => {
    setPrices({
      ethValue: ethValue,
      usdtValue: usdtValue,
    });
  }, [usdtValue]);

  useEffect(() => {
    try {
      if (account != undefined && library != undefined) {
        updateConfig({ readOnlyUrls: { [ChainId.Mainnet]: library } });
      } else {
        updateConfig({
          readOnlyUrls: {
            [ChainId.Mainnet]: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
          },
        });
      }
    } catch (e) {
      console.error("Provider switch failed. Going back to alchemy: ", e);
      updateConfig({
        readOnlyUrls: {
          [ChainId.Mainnet]: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
        },
      });
    }
  }, [account]);

  useEffect(() => {
    if (account != undefined && chainId != undefined) {
      if (chainId != Mainnet.chainId) {
        setIsChainError(true);
        updateConfig({
          readOnlyUrls: {
            [ChainId.Mainnet]: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
          },
        });
      } else {
        setIsChainError(false);
        updateConfig({
          readOnlyUrls: {
            [ChainId.Mainnet]: library,
          },
        });
      }
    }
  }, [account, chainId]);

  useEffect(() => {
    if (isChainError && account === undefined) {
      setIsChainError(false);
    }
  }, [isChainError, account]);

  return (
    <PyroDappContext.Provider value={{ isChainError, prices }}>
      {children}
    </PyroDappContext.Provider>
  );
}

function usePyroDapp(){
    const context = React.useContext(PyroDappContext);
    if (context === undefined) {
      throw new Error("usePyroDapp must be used within a YantraDappProvider");
    }
    return context;
}

export {PyroDappProvider, usePyroDapp}
