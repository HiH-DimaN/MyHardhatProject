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
import type { NonPayableOverrides } from "../../../../common";
import type {
  Practicum1Module2Intensiv,
  Practicum1Module2IntensivInterface,
} from "../../../../contracts/PracticeModule2/Module2PracticumIntensive1.sol/Practicum1Module2Intensiv";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "ValueChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value3",
        type: "uint256",
      },
    ],
    name: "addToFixedArray",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "addToFixedArrayAndEmit",
    outputs: [],
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
    name: "addressToUintMapping",
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
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "assWithArguvents",
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
    name: "boolVariable",
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
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "changeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decrementByConstant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "deleteFromFixedArray",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "deleteFrovDynamicArray",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "dynamicArray",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "fixedArray",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getArrayValue",
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
    name: "getDynamicArrayLength",
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
    name: "incrementUint",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "populateArray",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "resetMappingAndSetStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "revertOnMappingChange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_b",
        type: "uint256",
      },
    ],
    name: "safeAddition",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "setMappingValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "status",
    outputs: [
      {
        internalType: "enum Practicum1Module2Intensiv.Status",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stringVariablr",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "ternarnyCheck",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "uintVariable",
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
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b50600280546001600160a01b03191633179055610c408061002e5f395ff3fe608060405234801561000f575f80fd5b506004361061018f575f3560e01c80638da5cb5b116100dd578063adef6ca811610088578063d7e6b10011610063578063d7e6b100146103f0578063f519960d146103f8578063f98c893a1461040b575f80fd5b8063adef6ca814610349578063af1b73c21461037e578063d5d6393b146103dd575f80fd5b80639a5009ac116100b85780639a5009ac146103105780639a9bdca714610323578063a6f9dae114610336575f80fd5b80638da5cb5b1461029c578063905496f0146102e157806393a35560146102fd575f80fd5b8063359e1e941161013d5780635d1bd962116101185780635d1bd9621461025757806374fc41b71461026a578063750eaf991461027d575f80fd5b8063359e1e94146102295780634acee15c1461023c5780634f97c5291461024f575f80fd5b8063200d2ed21161016d578063200d2ed2146101f15780632653fa2d1461020b578063302c3cfa14610221575f80fd5b80630e3ccbe11461019357806314bf43bd146101cb57806316e6e3bf146101d3575b5f80fd5b6101c96101a1366004610a1f565b73ffffffffffffffffffffffffffffffffffffffff9091165f90815260066020526040902055565b005b6101c961041e565b6101db610433565b6040516101e89190610a47565b60405180910390f35b600b546101fe9060ff1681565b6040516101e89190610a9a565b6102135f5481565b6040519081526020016101e8565b600a54610213565b610213610237366004610ac0565b6104bf565b6101c961024a366004610ae0565b610532565b6101c961059c565b610213610265366004610ae0565b6105e5565b610213610278366004610ae0565b61065b565b61021361028b366004610af7565b60066020525f908152604090205481565b6002546102bc9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101e8565b6101c96102ef366004610b10565b600792909255600855600955565b6101c961030b366004610ae0565b61066f565b61021361031e366004610ae0565b6106aa565b610213610331366004610ae0565b6106c0565b6101c9610344366004610af7565b6106df565b60035461036e9074010000000000000000000000000000000000000000900460ff1681565b60405190151581526020016101e8565b6101c961038c366004610af7565b73ffffffffffffffffffffffffffffffffffffffff165f90815260066020526040812055600b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b6101c96103eb366004610ae0565b610824565b6101c9610901565b610213610406366004610ae0565b61096d565b6101c9610419366004610a1f565b610985565b5f8054908061042c83610b4d565b9190505550565b6004805461044090610b84565b80601f016020809104026020016040519081016040528092919081815260200182805461046c90610b84565b80156104b75780601f1061048e576101008083540402835291602001916104b7565b820191905f5260205f20905b81548152906001019060200180831161049a57829003601f168201915b505050505081565b5f600a6104cc8385610bbc565b101561051f5760405162461bcd60e51b815260206004820152601a60248201527f526573756c74206d757374206265206174206c6561737420313000000000000060448201526064015b60405180910390fd5b6105298284610bbc565b90505b92915050565b600381106105825760405162461bcd60e51b815260206004820152601360248201527f496e646578206f7574206f6620626f756e6473000000000000000000000000006044820152606401610516565b6007816003811061059557610595610bcf565b015f905550565b5f5b600a8110156105e257600a8054600181810183555f929092527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a8018290550161059e565b50565b600a545f9082106106385760405162461bcd60e51b815260206004820152601360248201527f496e646578206f7574206f6620626f756e6473000000000000000000000000006044820152606401610516565b600a828154811061064b5761064b610bcf565b905f5260205f2001549050919050565b5f600a821161066b57600a61052c565b5090565b60098190556040518181527f93fe6d397c74fdf1402a8b72e47b68512f0510d7b98a4bc4cbdf6ac7108b3c599060200160405180910390a150565b600781600381106106b9575f80fd5b0154905081565b600a81815481106106cf575f80fd5b5f91825260209091200154905081565b60025473ffffffffffffffffffffffffffffffffffffffff1633146107465760405162461bcd60e51b815260206004820152600d60248201527f4e6f7420746865206f776e6572000000000000000000000000000000000000006044820152606401610516565b8073ffffffffffffffffffffffffffffffffffffffff81166107aa5760405162461bcd60e51b815260206004820152600c60248201527f5a65726f206164647265737300000000000000000000000000000000000000006044820152606401610516565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84169081179091556040519081527fa2ea9883a321a3e97b8266c2b078bfeec6d50c711ed71f874a90d500ae2eaf369060200160405180910390a15050565b600a5481106108755760405162461bcd60e51b815260206004820152601360248201527f496e646578206f7574206f6620626f756e6473000000000000000000000000006044820152606401610516565b805b600a5461088690600190610be3565b8110156108d957600a61089a826001610bbc565b815481106108aa576108aa610bcf565b905f5260205f200154600a82815481106108c6576108c6610bcf565b5f91825260209091200155600101610877565b50600a8054806108eb576108eb610bf6565b600190038181905f5260205f20015f9055905550565b606460015411156109545760405162461bcd60e51b815260206004820152600e60248201527f556e646572666c6f77207269736b0000000000000000000000000000000000006044820152606401610516565b606460015f8282546109669190610be3565b9091555050565b5f805461097b606484610bbc565b61052c9190610bbc565b73ffffffffffffffffffffffffffffffffffffffff82165f90815260066020526040902054156101a15760405162461bcd60e51b815260206004820152601b60248201527f43616e6e6f74206368616e6765206d617070696e672076616c756500000000006044820152606401610516565b803573ffffffffffffffffffffffffffffffffffffffff81168114610a1a575f80fd5b919050565b5f8060408385031215610a30575f80fd5b610a39836109f7565b946020939093013593505050565b602081525f82518060208401528060208501604085015e5f6040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011684010191505092915050565b6020810160038310610aba57634e487b7160e01b5f52602160045260245ffd5b91905290565b5f8060408385031215610ad1575f80fd5b50508035926020909101359150565b5f60208284031215610af0575f80fd5b5035919050565b5f60208284031215610b07575f80fd5b610529826109f7565b5f805f60608486031215610b22575f80fd5b505081359360208301359350604090920135919050565b634e487b7160e01b5f52601160045260245ffd5b5f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610b7d57610b7d610b39565b5060010190565b600181811c90821680610b9857607f821691505b602082108103610bb657634e487b7160e01b5f52602260045260245ffd5b50919050565b8082018082111561052c5761052c610b39565b634e487b7160e01b5f52603260045260245ffd5b8181038181111561052c5761052c610b39565b634e487b7160e01b5f52603160045260245ffdfea2646970667358221220fc740511687c335e550813995e743d38e2090f0ae82f6fc55bb2d114633b5b4d64736f6c634300081a0033";

type Practicum1Module2IntensivConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Practicum1Module2IntensivConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Practicum1Module2Intensiv__factory extends ContractFactory {
  constructor(...args: Practicum1Module2IntensivConstructorParams) {
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
      Practicum1Module2Intensiv & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): Practicum1Module2Intensiv__factory {
    return super.connect(runner) as Practicum1Module2Intensiv__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Practicum1Module2IntensivInterface {
    return new Interface(_abi) as Practicum1Module2IntensivInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Practicum1Module2Intensiv {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as Practicum1Module2Intensiv;
  }
}
