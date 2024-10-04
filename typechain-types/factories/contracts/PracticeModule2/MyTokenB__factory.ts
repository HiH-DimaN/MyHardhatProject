/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MyTokenB,
  MyTokenBInterface,
} from "../../../contracts/PracticeModule2/MyTokenB";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isBlacklisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561000f575f80fd5b50604080518082018252600881526726bcaa37b5b2b72160c11b6020808301919091528251808401909352600383526226aa2160e91b90830152906012338061007257604051631e4fbdf760e01b81525f60048201526024015b60405180910390fd5b61007b816100d3565b506001610088848261037b565b506002610095838261037b565b506003805460ff191660ff9290921691821790556100ce92503391506100bc90600a61052e565b6100c990620f4240610543565b610122565b61056d565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0382166101785760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610069565b6101835f8383610214565b8060045f828254610194919061055a565b90915550506001600160a01b0382165f90815260056020526040812080548392906101c090849061055a565b90915550506040518181526001600160a01b038316905f907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36102105f8383610292565b5050565b6001600160a01b0383165f9081526007602052604090205460ff161561028d5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e736665722066726f6d20626c61636b6c6973746564604482015267206164647265737360c01b6064820152608401610069565b505050565b816001600160a01b0316836001600160a01b03167f9c8515990fd8c61431c4ac8db9b81475f90c292a1dda77731e56c22e64fc7643836040516102d791815260200190565b60405180910390a3505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c9082168061030c57607f821691505b60208210810361032a57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561028d57805f5260205f20601f840160051c810160208510156103555750805b601f840160051c820191505b81811015610374575f8155600101610361565b5050505050565b81516001600160401b03811115610394576103946102e4565b6103a8816103a284546102f8565b84610330565b6020601f8211600181146103da575f83156103c35750848201515b5f19600385901b1c1916600184901b178455610374565b5f84815260208120601f198516915b8281101561040957878501518255602094850194600190920191016103e9565b508482101561042657868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b634e487b7160e01b5f52601160045260245ffd5b6001815b60018411156104845780850481111561046857610468610435565b600184161561047657908102905b60019390931c92800261044d565b935093915050565b5f8261049a57506001610528565b816104a657505f610528565b81600181146104bc57600281146104c6576104e2565b6001915050610528565b60ff8411156104d7576104d7610435565b50506001821b610528565b5060208310610133831016604e8410600b8410161715610505575081810a610528565b6105115f198484610449565b805f190482111561052457610524610435565b0290505b92915050565b5f61053c60ff84168361048c565b9392505050565b808202811582820484141761052857610528610435565b8082018082111561052857610528610435565b610b418061057a5f395ff3fe608060405234801561000f575f80fd5b50600436106100e5575f3560e01c8063715018a611610088578063a9059cbb11610063578063a9059cbb146101cb578063dd62ed3e146101de578063f2fde38b14610216578063fe575a8714610229575f80fd5b8063715018a61461019f5780638da5cb5b146101a957806395d89b41146101c3575f80fd5b806323b872dd116100c357806323b872dd1461013c578063313ce5671461014f578063395093511461016457806370a0823114610177575f80fd5b806306fdde03146100e9578063095ea7b31461010757806318160ddd1461012a575b5f80fd5b6100f161024b565b6040516100fe9190610961565b60405180910390f35b61011a6101153660046109cf565b6102db565b60405190151581526020016100fe565b6004545b6040519081526020016100fe565b61011a61014a3660046109f7565b6102f1565b60035460405160ff90911681526020016100fe565b61011a6101723660046109cf565b610312565b61012e610185366004610a31565b6001600160a01b03165f9081526005602052604090205490565b6101a761034d565b005b5f546040516001600160a01b0390911681526020016100fe565b6100f1610360565b61011a6101d93660046109cf565b61036f565b61012e6101ec366004610a51565b6001600160a01b039182165f90815260066020908152604080832093909416825291909152205490565b6101a7610224366004610a31565b61037c565b61011a610237366004610a31565b60076020525f908152604090205460ff1681565b60606001805461025a90610a82565b80601f016020809104026020016040519081016040528092919081815260200182805461028690610a82565b80156102d15780601f106102a8576101008083540402835291602001916102d1565b820191905f5260205f20905b8154815290600101906020018083116102b457829003601f168201915b5050505050905090565b5f6102e73384846103d7565b5060015b92915050565b5f6102fd84338461052f565b6103088484846105b7565b5060019392505050565b335f8181526006602090815260408083206001600160a01b038716845290915281205490916102e7918590610348908690610ad3565b6103d7565b6103556107dd565b61035e5f610822565b565b60606002805461025a90610a82565b5f336103088185856105b7565b6103846107dd565b6001600160a01b0381166103cb576040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081525f60048201526024015b60405180910390fd5b6103d481610822565b50565b6001600160a01b0383166104525760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016103c2565b6001600160a01b0382166104ce5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016103c2565b6001600160a01b038381165f8181526006602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038381165f90815260066020908152604080832093861683529290522054818110156105a45760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103c2565b6105b184848484036103d7565b50505050565b6001600160a01b0383166106335760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103c2565b6001600160a01b0382166106af5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016103c2565b6106ba838383610889565b6001600160a01b0383165f90815260056020526040902054818110156107485760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016103c2565b6001600160a01b038085165f9081526005602052604080822085850390559185168152908120805484929061077e908490610ad3565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107ca91815260200190565b60405180910390a36105b184848461091c565b5f546001600160a01b0316331461035e576040517f118cdaa70000000000000000000000000000000000000000000000000000000081523360048201526024016103c2565b5f80546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0383165f9081526007602052604090205460ff16156109175760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e736665722066726f6d20626c61636b6c697374656460448201527f206164647265737300000000000000000000000000000000000000000000000060648201526084016103c2565b505050565b816001600160a01b0316836001600160a01b03167f9c8515990fd8c61431c4ac8db9b81475f90c292a1dda77731e56c22e64fc76438360405161052291815260200190565b602081525f82518060208401528060208501604085015e5f6040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011684010191505092915050565b80356001600160a01b03811681146109ca575f80fd5b919050565b5f80604083850312156109e0575f80fd5b6109e9836109b4565b946020939093013593505050565b5f805f60608486031215610a09575f80fd5b610a12846109b4565b9250610a20602085016109b4565b929592945050506040919091013590565b5f60208284031215610a41575f80fd5b610a4a826109b4565b9392505050565b5f8060408385031215610a62575f80fd5b610a6b836109b4565b9150610a79602084016109b4565b90509250929050565b600181811c90821680610a9657607f821691505b602082108103610acd577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b50919050565b808201808211156102eb577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffdfea26469706673582212203a2113ffc0a902a59803c073dd0cf81515a893b2290004b0b0ff283de89a34c064736f6c634300081a0033";

type MyTokenBConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyTokenBConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyTokenB__factory extends ContractFactory {
  constructor(...args: MyTokenBConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MyTokenB & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MyTokenB__factory {
    return super.connect(runner) as MyTokenB__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyTokenBInterface {
    return new Interface(_abi) as MyTokenBInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MyTokenB {
    return new Contract(address, _abi, runner) as unknown as MyTokenB;
  }
}
