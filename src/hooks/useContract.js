import { utils } from 'ethers';
import { Contract } from "@ethersproject/contracts";
import { Mainnet, Localhost,  useEthers } from '@usedapp/core';
import STAKE_ABI from "../contracts/PyroStaking.json";
import ERC20ABI from "../contracts/ERC20ABI.json"
import { STAKE_ADDRESS, TOKEN_ADDRESS } from '../constants/address';

export function useTokenContract(){
    return new Contract(TOKEN_ADDRESS[Localhost.chainId], new utils.Interface(ERC20ABI));
}

export function useStakeContract(){
    return new Contract(STAKE_ADDRESS[Localhost.chainId], new utils.Interface(STAKE_ABI));
}

