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
  MyShop,
  MyShopInterface,
} from "../../../contracts/PracticeGuideDAO/MyShop";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "payForItem",
    outputs: [],
    stateMutability: "payable",
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
    name: "payments",
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
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b505f80546001600160a01b031916331790556101ba8061002d5f395ff3fe60806040526004361061003e575f3560e01c806313bea46014610042578063853828b61461005a5780638da5cb5b1461006e578063e2982c21146100c3575b5f80fd5b610058335f908152600160205260409020349055565b005b348015610065575f80fd5b506100586100fc565b348015610079575f80fd5b505f546100999073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100ce575f80fd5b506100ee6100dd36600461014a565b60016020525f908152604090205481565b6040519081526020016100ba565b5f805460405173ffffffffffffffffffffffffffffffffffffffff9091169130918391833180156108fc02929091818181858888f19350505050158015610145573d5f803e3d5ffd5b505050565b5f6020828403121561015a575f80fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461017d575f80fd5b939250505056fea26469706673582212209349ca7529d00b58edbd3fddb1532470a4ae416b126ac76b737c59fd4dea7b6664736f6c634300081a0033";

type MyShopConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyShopConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyShop__factory extends ContractFactory {
  constructor(...args: MyShopConstructorParams) {
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
      MyShop & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MyShop__factory {
    return super.connect(runner) as MyShop__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyShopInterface {
    return new Interface(_abi) as MyShopInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MyShop {
    return new Contract(address, _abi, runner) as unknown as MyShop;
  }
}
