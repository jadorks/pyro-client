import { utils } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { Mainnet, Localhost, useEthers } from "@usedapp/core";
import STAKE_ABI from "../contracts/PyroStaking.json";
import UniswapV2 from "../contracts/UniswapV2.json";
import ERC20ABI from "../contracts/ERC20ABI.json";
import {
  STAKE_ADDRESS,
  TOKEN_ADDRESS,
  PYRO_ETH_PAIR,
  ETH_USDT_PAIR,
} from "../constants/address";

export function useTokenContract() {
  return new Contract(
    TOKEN_ADDRESS[Mainnet.chainId],
    new utils.Interface(ERC20ABI)
  );
}

export function useStakeContract() {
  return new Contract(
    STAKE_ADDRESS[Mainnet.chainId],
    new utils.Interface(STAKE_ABI)
  );
}

export function usePyroEthContract() {
  return new Contract(PYRO_ETH_PAIR, new utils.Interface(UniswapV2));
}

export function useEthUSDTContract() {
  return new Contract(ETH_USDT_PAIR, new utils.Interface(UniswapV2));
}
