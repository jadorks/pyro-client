import React, { useEffect, useState } from "react";
import {
  ChainId,
  Localhost,
  Mainnet,
  useEthers,
  useUpdateConfig,
} from "@usedapp/core";
import PyroDappContext from "./context";
import {
  useEthUSDTContract,
  usePyroEthContract,
} from "../../hooks/useContract";
import { usePrice } from "../../hooks/usePrice";
import { useStakerInfo } from "../../hooks/stake/useStakerInfo";
import { usePendingRewards } from "../../hooks/stake/usePendingRewards";
import {
  useEarlyWithdrawFee,
  usePoolInfo,
} from "../../hooks/stake/usePoolInfo";
import { useAPR } from "../../hooks/stake/useAPR";
import { useDepositFee } from "../../hooks/stake/useDepositFee";
import { useTotalStakedTokens } from "../../hooks/stake/useTotalStakedTokens";

function PyroDappProvider({ children }) {
  const { account, chainId, library } = useEthers();
  const updateConfig = useUpdateConfig();
  const [isChainError, setIsChainError] = useState(false);
  const [prices, setPrices] = useState({});
  const pyroEthContract = usePyroEthContract();
  const ethUSDTContract = useEthUSDTContract();
  const ethValue = usePrice(pyroEthContract, true, 18);
  const usdtValue = usePrice(ethUSDTContract, true, 12);

  const userInfo = useStakerInfo(account);
  const userRewards = usePendingRewards(account);
  // const poolInfo = usePoolInfo();

  const apr = useAPR();
  const depositFee = useDepositFee();
  const earlyWithdrawFee = useEarlyWithdrawFee();
  const poolStakedTokens = useTotalStakedTokens();

  const poolInfo = { apr, depositFee, earlyWithdrawFee, poolStakedTokens };

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
    <PyroDappContext.Provider
      value={{ isChainError, prices, userInfo, userRewards, poolInfo }}
    >
      {children}
    </PyroDappContext.Provider>
  );
}

function usePyroDapp() {
  const context = React.useContext(PyroDappContext);
  if (context === undefined) {
    throw new Error("usePyroDapp must be used within a YantraDappProvider");
  }
  return context;
}

export { PyroDappProvider, usePyroDapp };
