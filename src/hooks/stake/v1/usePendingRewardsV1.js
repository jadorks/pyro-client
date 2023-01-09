import { Localhost, Mainnet, useCall } from "@usedapp/core";
import { useStakeV1Contract } from "../../useContract";

export const usePendingRewardsV1 = (userAddress) => {
  const stakeContract = useStakeV1Contract();

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
