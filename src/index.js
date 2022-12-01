import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal } from "@web3modal/react";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";

// const modalConfig={
//   theme: 'dark',
//   accentColor: 'default',
//   ethereum: {
//     appName: 'Web3Modal',
//     chains:[
//       chains.goerli,
//       chains.avalanche,
//       chains.polygon,
//       chains.binanceSmartChain,
//       chains.fantom,
//       chains.arbitrum,
//       chains.optimism

//     ],
//     providers:[
//       providers.walletConnectProvider({
//         projectId:'194fc8bc9f4606be8865a9803392cc10'
//       })
//     ],
//     autoConnect:true
//   },
//   projectId:'194fc8bc9f4606be8865a9803392cc10'

// }

const chains = [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "194fc8bc9f4606be8865a9803392cc10" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <WagmiConfig client={wagmiClient}>
      <App />
    </WagmiConfig>
    <Web3Modal projectId="194fc8bc9f4606be8865a9803392cc10" ethereumClient={ethereumClient} />
  </>
);
