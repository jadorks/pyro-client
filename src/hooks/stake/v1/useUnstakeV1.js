import { useContractFunction } from "@usedapp/core";
import { useStakeV1Contract } from "../../useContract";

export const useUnstakeTokensV1 = () => {
  const contract = useStakeV1Contract();

  const { state, send } = useContractFunction(contract, "unstake", {
    transactionName: "Unstake V1 Tokens",
  });

  return { state, send };
};