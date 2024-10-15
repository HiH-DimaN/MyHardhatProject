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
  OwnerContract,
  OwnerContractInterface,
} from "../../../contracts/PracticeJunior/OwnerContract";

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
        name: "newOwner",
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
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b505f80546001600160a01b031916331790556101cf8061002d5f395ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c80638da5cb5b14610038578063a6f9dae114610080575b5f80fd5b5f546100579073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61009361008e36600461015f565b610095565b005b5f5473ffffffffffffffffffffffffffffffffffffffff163314610119576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f7420746865206f776e657200000000000000000000000000000000000000604482015260640160405180910390fd5b5f80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b5f6020828403121561016f575f80fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610192575f80fd5b939250505056fea264697066735822122046aacc8f524f716cfbbedb75072f1933691320a1d7100c6078d937a364a44d3764736f6c634300081a0033";

type OwnerContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnerContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnerContract__factory extends ContractFactory {
  constructor(...args: OwnerContractConstructorParams) {
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
      OwnerContract & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): OwnerContract__factory {
    return super.connect(runner) as OwnerContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnerContractInterface {
    return new Interface(_abi) as OwnerContractInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): OwnerContract {
    return new Contract(address, _abi, runner) as unknown as OwnerContract;
  }
}
