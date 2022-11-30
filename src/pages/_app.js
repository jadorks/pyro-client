import "../styles/globals.css";
import Layout from "../components/Layout";
import {
  Mainnet,
  DAppProvider,
  MetamaskConnector,
  CoinbaseWalletConnector,
  Localhost,
} from "@usedapp/core";
import { WalletConnectConnector } from "@usedapp/wallet-connect-connector";
import { PyroDappProvider } from "../providers/PyroProvider/PyroDappProvider";

const config = {
  readOnlyChainId: Localhost.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
    [Localhost.chainId]: "http://127.0.0.1:7545",
  },
  connectors: {
    metamask: new MetamaskConnector(),
    coinbase: new CoinbaseWalletConnector(),
    walletConnect: new WalletConnectConnector({
      chainId: Mainnet.chainId,
      rpc: {
        [Mainnet.chainId]: process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
      },
    }),
  },
  // multicallVersion: 2,
  // multicallAddresses: {
  //   [Mainnet.chainId]: "0x5ba1e12693dc8f9c48aad8770482f4739beed696",
  // },
  gasLimitBufferPercentage: 20,
  autoConnect: true,
  // networks: [Mainnet],
  noMetamaskDeactivate: true,
};

function MyApp({ Component, pageProps }) {
  return (
    <DAppProvider config={config}>
      <PyroDappProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PyroDappProvider>
    </DAppProvider>
  );
}

export default MyApp;
