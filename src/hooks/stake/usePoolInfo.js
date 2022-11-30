import { Localhost, useCall } from "@usedapp/core";
import { useStakeContract } from "../useContract";

export const usePoolInfo = () => {
    const stakeContract = useStakeContract();

    const {value, error} = 
        useCall(
            stakeContract && {
                contract: stakeContract,
                method: "viewPoolDetails",
                args: []
            }, {chainId: Localhost.chainId}
        ) ?? {};

    if (error) {
        console.error(error.message);
        return undefined;
    }

    return value?.[0];
}