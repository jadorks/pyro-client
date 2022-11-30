import { Localhost, useCall } from "@usedapp/core";
import { useStakeContract } from "../useContract";

export const useStakerInfo = (userAddress) => {
  const stakeContract = useStakeContract();

  const { value, error } =
    useCall(
      userAddress && {
        contract: stakeContract,
        method: "viewStake",
        args: [userAddress],
      },
      { chainId: Localhost.chainId }
    ) ?? {};

  if (error) {
    console.error(error.message);
    return undefined;
  }

  return value?.[0];
};
