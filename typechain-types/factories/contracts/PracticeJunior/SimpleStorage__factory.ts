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
  SimpleStorage,
  SimpleStorageInterface,
} from "../../../contracts/PracticeJunior/SimpleStorage";

const _abi = [
  {
    inputs: [],
    name: "get",
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
        name: "x",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "storedData",
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
  "0x6080604052348015600e575f80fd5b5060ba80601a5f395ff3fe6080604052348015600e575f80fd5b5060043610603a575f3560e01c80632a1afcd914603e57806360fe47b11460575780636d4ce63c146068575b5f80fd5b60455f5481565b60405190815260200160405180910390f35b60666062366004606e565b5f55565b005b5f546045565b5f60208284031215607d575f80fd5b503591905056fea264697066735822122018d35195680ca665dee5b7dd0211c7664c4ec432406c1d4f6d276c83b589d96d64736f6c634300081a0033";

type SimpleStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleStorage__factory extends ContractFactory {
  constructor(...args: SimpleStorageConstructorParams) {
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
      SimpleStorage & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SimpleStorage__factory {
    return super.connect(runner) as SimpleStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleStorageInterface {
    return new Interface(_abi) as SimpleStorageInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SimpleStorage {
    return new Contract(address, _abi, runner) as unknown as SimpleStorage;
  }
}
