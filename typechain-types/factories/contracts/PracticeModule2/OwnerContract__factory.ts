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
} from "../../../contracts/PracticeModule2/OwnerContract";

const _abi = [
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
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b506101468061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c806313af4035146100385780638da5cb5b1461008e575b5f80fd5b61008c6100463660046100d6565b5f80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b005b5f546100ad9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b5f602082840312156100e6575f80fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610109575f80fd5b939250505056fea2646970667358221220ebfd3443e5d5a8a9f9c4fa290eba12b6e5dafbbf306e2b7e26a1f72cd577c06b64736f6c634300081a0033";

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
