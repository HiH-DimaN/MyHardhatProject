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
  Multiplier,
  MultiplierInterface,
} from "../../../contracts/PracticeJunior/Multiplier";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "multiply",
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
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b5060ed8061001b5f395ff3fe6080604052348015600e575f80fd5b50600436106026575f3560e01c8063165c4a1614602a575b5f80fd5b60396035366004605d565b604b565b60405190815260200160405180910390f35b5f60548284607c565b90505b92915050565b5f8060408385031215606d575f80fd5b50508035926020909101359150565b80820281158282048414176057577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffdfea2646970667358221220985befc9d4d56ddc771eac245a7f0f75d0e04d75603c97807c59b69ff346e8c164736f6c634300081a0033";

type MultiplierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultiplierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Multiplier__factory extends ContractFactory {
  constructor(...args: MultiplierConstructorParams) {
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
      Multiplier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Multiplier__factory {
    return super.connect(runner) as Multiplier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiplierInterface {
    return new Interface(_abi) as MultiplierInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Multiplier {
    return new Contract(address, _abi, runner) as unknown as Multiplier;
  }
}
