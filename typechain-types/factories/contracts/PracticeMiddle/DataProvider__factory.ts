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
import type { NonPayableOverrides } from "../../../common";
import type {
  DataProvider,
  DataProviderInterface,
} from "../../../contracts/PracticeMiddle/DataProvider";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getData",
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
        name: "_newData",
        type: "uint256",
      },
    ],
    name: "setData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b506040516100f83803806100f8833981016040819052602b916031565b5f556047565b5f602082840312156040575f80fd5b5051919050565b60a5806100535f395ff3fe6080604052348015600e575f80fd5b50600436106030575f3560e01c80633bc5de301460345780635b4b73a9146048575b5f80fd5b5f5460405190815260200160405180910390f35b605760533660046059565b5f55565b005b5f602082840312156068575f80fd5b503591905056fea2646970667358221220a7d71adeb7afa5517858cf9804d46368cbfb915b13ee97ced9e47dd944c6835964736f6c634300081a0033";

type DataProviderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DataProviderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DataProvider__factory extends ContractFactory {
  constructor(...args: DataProviderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _initialData: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_initialData, overrides || {});
  }
  override deploy(
    _initialData: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_initialData, overrides || {}) as Promise<
      DataProvider & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DataProvider__factory {
    return super.connect(runner) as DataProvider__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DataProviderInterface {
    return new Interface(_abi) as DataProviderInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DataProvider {
    return new Contract(address, _abi, runner) as unknown as DataProvider;
  }
}
