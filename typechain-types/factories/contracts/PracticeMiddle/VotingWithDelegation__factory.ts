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
  VotingWithDelegation,
  VotingWithDelegationInterface,
} from "../../../contracts/PracticeMiddle/VotingWithDelegation";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "voteCount",
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
        name: "",
        type: "address",
      },
    ],
    name: "voters",
    outputs: [
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "voted",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "delegate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "proposalVoted",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b506102a18061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c8063013cf08b14610038578063a3ec138d14610062575b5f80fd5b61004b61004636600461016f565b6100bb565b604051610059929190610186565b60405180910390f35b61009b6100703660046101e0565b600160208190525f9182526040909120805491810154600282015460039092015460ff909116919084565b604080519485529215156020850152918301526060820152608001610059565b5f81815481106100c9575f80fd5b905f5260205f2090600202015f91509050805f0180546100e89061021a565b80601f01602080910402602001604051908101604052809291908181526020018280546101149061021a565b801561015f5780601f106101365761010080835404028352916020019161015f565b820191905f5260205f20905b81548152906001019060200180831161014257829003601f168201915b5050505050908060010154905082565b5f6020828403121561017f575f80fd5b5035919050565b604081525f83518060408401528060208601606085015e5f6060828501015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150508260208301529392505050565b5f602082840312156101f0575f80fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610213575f80fd5b9392505050565b600181811c9082168061022e57607f821691505b602082108103610265577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5091905056fea2646970667358221220926370a943638e49f457b80ac28de0dd831b9bd5f8eeaec1d24cbe836d00359764736f6c634300081a0033";

type VotingWithDelegationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VotingWithDelegationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VotingWithDelegation__factory extends ContractFactory {
  constructor(...args: VotingWithDelegationConstructorParams) {
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
      VotingWithDelegation & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): VotingWithDelegation__factory {
    return super.connect(runner) as VotingWithDelegation__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VotingWithDelegationInterface {
    return new Interface(_abi) as VotingWithDelegationInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): VotingWithDelegation {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as VotingWithDelegation;
  }
}
