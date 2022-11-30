import { Mainnet, useCall } from "@usedapp/core";

export const usePrice = (pairContract, invert, pairDecimals) => {
  const { value, error } =
    useCall(
      pairContract && {
        contract: pairContract,
        method: "getReserves",
        args: [],
      },
      { refresh: 10, chainId: Mainnet.chainId }
    ) ?? {};

  if (error) {
    console.log(error);
    return 0;
  }
  const _reserve0 = invert ? value?._reserve1 : value?._reserve0;
  const _reserve1 = invert ? value?._reserve0 : value?._reserve1;

  const price = _reserve1
    ? (Number(_reserve0) / Number(_reserve1)) * 10 ** pairDecimals
    : 0;

  return price;
};
