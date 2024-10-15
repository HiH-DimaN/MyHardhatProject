/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../../../common";
import type {
  CallLimiter,
  CallLimiterInterface,
} from "../../../contracts/PracticeJunior/CallLimiter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxCalls",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rewardAmount",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "callNumber",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "FunctionCalled",
    type: "event",
  },
  {
    inputs: [],
    name: "callCount",
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
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "limitedFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "maxCalls",
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
    name: "resetCounter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardAmount",
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
        name: "_maxCalls",
        type: "uint256",
      },
    ],
    name: "updateMaxCalls",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardAmount",
        type: "uint256",
      },
    ],
    name: "updateRewardAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052604051610782380380610782833981016040819052610022916100a1565b61002c81836100c3565b34101561007f5760405162461bcd60e51b815260206004820152601560248201527f4e6f7420656e6f7567682065746865722073656e740000000000000000000000604482015260640160405180910390fd5b5f80546001600160a01b031916331781556001929092556003556002556100ec565b5f80604083850312156100b2575f80fd5b505080516020909101519092909150565b80820281158282048414176100e657634e487b7160e01b5f52601160045260245ffd5b92915050565b610689806100f95f395ff3fe6080604052600436106100ad575f3560e01c8063ce80958711610066578063dbdf7fce1161004c578063dbdf7fce1461018d578063df8d05d7146101a1578063f7b2a7be146101b6575f80fd5b8063ce80958714610166578063d0e30db014610185575f80fd5b80634b28f9a2116100965780634b28f9a2146100da578063838c0eb6146101025780638da5cb5b14610116575f80fd5b806315c2ba14146100b15780633ccfd60b146100d2575b5f80fd5b3480156100bc575f80fd5b506100d06100cb3660046105bb565b6101cb565b005b6100d0610297565b3480156100e5575f80fd5b506100ef60025481565b6040519081526020015b60405180910390f35b34801561010d575f80fd5b506100d0610344565b348015610121575f80fd5b505f546101419073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100f9565b348015610171575f80fd5b506100d06101803660046105bb565b610420565b6100d06104e7565b348015610198575f80fd5b506100d061054f565b3480156101ac575f80fd5b506100ef60015481565b3480156101c1575f80fd5b506100ef60035481565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146102365760405162461bcd60e51b815260206004820152601660248201527f4e6f742074686520636f6e7472616374206f776e65720000000000000000000060448201526064015b60405180910390fd5b60015461024390826105ff565b4710156102925760405162461bcd60e51b815260206004820152601c60248201527f4e6f7420656e6f75676820657468657220696e20636f6e747261637400000000604482015260640161022d565b600355565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146102fd5760405162461bcd60e51b815260206004820152601660248201527f4e6f742074686520636f6e7472616374206f776e657200000000000000000000604482015260640161022d565b5f805460405173ffffffffffffffffffffffffffffffffffffffff909116914780156108fc02929091818181858888f19350505050158015610341573d5f803e3d5ffd5b50565b600154600254106103975760405162461bcd60e51b815260206004820152601360248201527f43616c6c206c696d697420657863656564656400000000000000000000000000604482015260640161022d565b60028054905f6103a68361061c565b9091555050600354604051339180156108fc02915f818181858888f193505050501580156103d6573d5f803e3d5ffd5b5060025460035460405133927f4f5f2eb1d2a2542d1a60e6cae01db7a7687e4ff1933126391eab1f6cdd3037c79261041692918252602082015260400190565b60405180910390a2565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146104865760405162461bcd60e51b815260206004820152601660248201527f4e6f742074686520636f6e7472616374206f776e657200000000000000000000604482015260640161022d565b60035461049390826105ff565b4710156104e25760405162461bcd60e51b815260206004820152601c60248201527f4e6f7420656e6f75676820657468657220696e20636f6e747261637400000000604482015260640161022d565b600155565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461054d5760405162461bcd60e51b815260206004820152601660248201527f4e6f742074686520636f6e7472616374206f776e657200000000000000000000604482015260640161022d565b565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146105b55760405162461bcd60e51b815260206004820152601660248201527f4e6f742074686520636f6e7472616374206f776e657200000000000000000000604482015260640161022d565b5f600255565b5f602082840312156105cb575f80fd5b5035919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b8082028115828204841417610616576106166105d2565b92915050565b5f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361064c5761064c6105d2565b506001019056fea2646970667358221220ca7389e14fd2a5756b1e763d83673a99ec3f25405aafe82a6aae647f4a666cac64736f6c634300081a0033";

type CallLimiterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CallLimiterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CallLimiter__factory extends ContractFactory {
  constructor(...args: CallLimiterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _maxCalls: BigNumberish,
    _rewardAmount: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _maxCalls,
      _rewardAmount,
      overrides || {}
    );
  }
  override deploy(
    _maxCalls: BigNumberish,
    _rewardAmount: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_maxCalls, _rewardAmount, overrides || {}) as Promise<
      CallLimiter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CallLimiter__factory {
    return super.connect(runner) as CallLimiter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CallLimiterInterface {
    return new Interface(_abi) as CallLimiterInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): CallLimiter {
    return new Contract(address, _abi, runner) as unknown as CallLimiter;
  }
}
