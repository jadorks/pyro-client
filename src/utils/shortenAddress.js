function shortedAddress(address, startLimit = 4, endLimit = 4) {
  if (address) {
    const newString = `${address.substr(2, startLimit)}...${address.substr(
      -endLimit
    )}`;
    return `0x${newString.toUpperCase()}`;
  }
  return "";
}
export default shortedAddress;
