import { Localhost, Mainnet, useCall } from "@usedapp/core";
import { useStakeContract } from "../useContract";

export const useDepositFee = () => {
  const stakeContract = useStakeContract();

  const { value, error } =
    useCall(
      stakeContract && {
        contract: stakeContract,
        method: "depositFee",
        args: [],
      },
      { refresh: 10, chainId: Mainnet.chainId }
    ) ?? {};
  if (error) {
    console.error(error.message);
    return undefined;
  }

  return value?.[0];
};
