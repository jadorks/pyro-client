import { useContractFunction } from "@usedapp/core";
import { useStakeUpgraderContract } from "../useContract";

export const useUnstakeTokens = () => {
  const contract = useStakeUpgraderContract();

  const { state, send } = useContractFunction(contract, "unstake", {
    transactionName: "Unstake Tokens",
  });

  return { state, send };
};