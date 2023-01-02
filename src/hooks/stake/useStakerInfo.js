import { Localhost, Mainnet, useCall } from "@usedapp/core";
import { useStakeUpgraderContract } from "../useContract";

export const useStakerInfo = (userAddress) => {
  const stakeUpgraderContract = useStakeUpgraderContract();

  const { value, error } =
    useCall(
      userAddress && {
        contract: stakeUpgraderContract,
        method: "getStake",
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
