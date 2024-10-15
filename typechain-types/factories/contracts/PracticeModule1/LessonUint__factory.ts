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
  LessonUint,
  LessonUintInterface,
} from "../../../contracts/PracticeModule1/LessonUint";

const _abi = [
  {
    inputs: [],
    name: "cast",
    outputs: [
      {
        internalType: "uint112",
        name: "",
        type: "uint112",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dec",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "firstBool",
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
    name: "inc",
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
    name: "maxVal",
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
    inputs: [],
    name: "myEther",
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
    name: "myNum",
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
    name: "notOverFlow",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "overFlow",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040525f805461ff00191661ff0017905568056bc75e2d631000006002553480156029575f80fd5b506102f5806100375f395ff3fe608060405234801561000f575f80fd5b506004361061009f575f3560e01c806396d373e511610072578063c1ab444311610058578063c1ab44431461010f578063d4da005a14610154578063d62a12091461015d575f80fd5b806396d373e5146100eb578063b3bcfa8214610107575f80fd5b8063169b32c3146100a3578063371303c0146100c4578063836dea0b146100da57806388fc1738146100e3575b5f80fd5b5f546100af9060ff1681565b60405190151581526020015b60405180910390f35b6100cc610180565b6040519081526020016100bb565b6100cc60025481565b6100cc6101a1565b60025460405167ffffffffffffffff90911681526020016100bb565b6100cc6101d7565b5f80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff811660016101009283900460ff9081169190910116918202179091556100cc565b6100cc60015481565b5f5461016e90610100900460ff1681565b60405160ff90911681526020016100bb565b6001545f906101919060209061023c565b61019c90600a610255565b905090565b5f80546101b790610100900460ff16600161026c565b5f60016101000a81548160ff021916908360ff160217905560ff16905090565b5f805481906001906101f090610100900460ff16610285565b91906101000a81548160ff021916908360ff160217905560ff16905090565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b8082018082111561024f5761024f61020f565b92915050565b808202811582820484141761024f5761024f61020f565b60ff818116838216019081111561024f5761024f61020f565b5f60ff8216806102975761029761020f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019291505056fea26469706673582212200579b1c5c8beef0e4d5a646c3850bebe5ca07fba4e7ec3ce013a09f5f8dc4cd764736f6c634300081a0033";

type LessonUintConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LessonUintConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LessonUint__factory extends ContractFactory {
  constructor(...args: LessonUintConstructorParams) {
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
      LessonUint & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): LessonUint__factory {
    return super.connect(runner) as LessonUint__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LessonUintInterface {
    return new Interface(_abi) as LessonUintInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): LessonUint {
    return new Contract(address, _abi, runner) as unknown as LessonUint;
  }
}
