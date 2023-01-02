import { Localhost, Mainnet, useCall } from "@usedapp/core";
import { useStakeUpgraderContract } from "../useContract";

export const usePendingRewards = (userAddress) => {
  const stakeContract = useStakeUpgraderContract();

  const { value, error } =
    useCall(
      userAddress && {
        contract: stakeContract,
        method: "pendingReward",
        args: [userAddress],
      },
      { chainId: Mainnet.chainId }
    ) ?? {};

  if (error) {
    console.error(error.message);
    return undefined;
  }

  return value?.[0];
};
