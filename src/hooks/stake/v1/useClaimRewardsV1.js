import { useContractFunction } from "@usedapp/core";
import { useStakeV1Contract } from "../../useContract";

export const useClaimRewardsV1 = () => {
  const contract = useStakeV1Contract();

  const { state, send } = useContractFunction(contract, "claim", {
    transactionName: "Claim Rewards",
  });

  return { state, send };
};
