import React, { useEffect, useState } from "react";
import { ChainId, Mainnet, useEthers, useUpdateConfig } from "@usedapp/core";
import PyroDappContext from "./context";

function PyroDappProvider({ children }) {
  const { account, chainId, library } = useEthers();
  const updateConfig = useUpdateConfig();
  const [isChainError, setIsChainError] = useState(false);

//   useEffect(() => {
//     try {
//       if (account != undefined && library != undefined) {
//         updateConfig({ readOnlyUrls: { [ChainId.Mainnet]: library } });
//       } else {
//         updateConfig({
//           readOnlyUrls: {
//             [ChainId.Mainnet]: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
//           },
//         });
//       }
//     } catch (e) {
//       console.error("Provider switch failed. Going back to alchemy: ", e);
//       updateConfig({
//         readOnlyUrls: {
//           [ChainId.Mainnet]: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
//         },
//       });
//     }
//   }, [account]);

//   useEffect(() => {
//     if (account != undefined && chainId != undefined) {
//       if (chainId != Mainnet.chainId) {
//         setIsChainError(true);
//         updateConfig({
//           readOnlyUrls: {
//             [ChainId.Mainnet]: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
//           },
//         });
//       } else {
//         setIsChainError(false);
//         updateConfig({
//           readOnlyUrls: {
//             [ChainId.Mainnet]: library,
//           },
//         });
//       }
//     }
//   }, [account, chainId]);

  useEffect(() => {
    if (isChainError && account === undefined) {
      setIsChainError(false);
    }
  }, [isChainError, account]);

  return (
    <PyroDappContext.Provider value={{ isChainError }}>
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
