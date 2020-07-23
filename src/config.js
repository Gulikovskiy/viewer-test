export const GLOBAL_ADDRESS = "0xAf6190572f99Ba4c8272FcEF26C331100Adf0979";

export const GLOBAL_ABI = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    constant: true,
    inputs: [],
    name: "getGroupIds",
    outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "_groupId", type: "uint256" }],
    name: "getGroup",
    outputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "uint256[]", name: "indexes", type: "uint256[]" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "uint256", name: "_indexId", type: "uint256" }],
    name: "getIndex",
    outputs: [
      { internalType: "uint256", name: "id", type: "uint256" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "uint256", name: "ethPriceInWei", type: "uint256" },
      { internalType: "uint256", name: "usdPriceInCents", type: "uint256" },
      { internalType: "uint256", name: "usdCapitalization", type: "uint256" },
      { internalType: "uint256", name: "percentageChange", type: "uint256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
