import { Localhost, Mainnet, useCall } from "@usedapp/core";
import { useStakeUpgraderContract } from "../useContract";

export const useTotalStakedTokens = () => {
  const stakeUpgraderContract = useStakeUpgraderContract();

    const { value, error } =
      useCall(
        stakeUpgraderContract && {
          contract: stakeUpgraderContract,
          method: "totalStakedTokens",
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
