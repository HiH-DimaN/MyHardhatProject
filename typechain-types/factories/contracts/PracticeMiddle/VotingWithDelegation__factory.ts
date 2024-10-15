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
        internalType: "string[]",
        name: "_proposalDescriptions",
        type: "string[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
    ],
    name: "VoteDelegated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalIndex",
        type: "uint256",
      },
    ],
    name: "VoterCast",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "delegate",
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
        name: "_voterAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_initialWeight",
        type: "uint256",
      },
    ],
    name: "registerVoter",
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
  "0x608060405234801561000f575f80fd5b506040516108fa3803806108fa83398101604081905261002e91610149565b5f5b815181116100fe575f60405180604001604052808484815181106100565761005661026d565b60209081029190910181015182525f91810182905283546001810185559382529020815191926002020190819061008d9082610305565b506020820151816001015550507f9c770c289ab5bf7e57cb1d23c8ceae993aea46eb64847072fd3d78ca60d3e432818383815181106100ce576100ce61026d565b60200260200101516040516100e49291906103bf565b60405180910390a1806100f6816103fb565b915050610030565b505061041f565b634e487b7160e01b5f52604160045260245ffd5b604051601f8201601f191681016001600160401b038111828210171561014157610141610105565b604052919050565b5f60208284031215610159575f80fd5b81516001600160401b0381111561016e575f80fd5b8201601f8101841361017e575f80fd5b80516001600160401b0381111561019757610197610105565b8060051b6101a760208201610119565b918252602081840181019290810190878411156101c2575f80fd5b6020850192505b838310156102625782516001600160401b038111156101e6575f80fd5b8501603f810189136101f6575f80fd5b60208101516001600160401b0381111561021257610212610105565b610225601f8201601f1916602001610119565b8181526040838301018b1015610239575f80fd5b8160408401602083015e5f602083830101528085525050506020820191506020830192506101c9565b979650505050505050565b634e487b7160e01b5f52603260045260245ffd5b600181811c9082168061029557607f821691505b6020821081036102b357634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561030057805f5260205f20601f840160051c810160208510156102de5750805b601f840160051c820191505b818110156102fd575f81556001016102ea565b50505b505050565b81516001600160401b0381111561031e5761031e610105565b6103328161032c8454610281565b846102b9565b6020601f821160018114610364575f831561034d5750848201515b5f19600385901b1c1916600184901b1784556102fd565b5f84815260208120601f198516915b828110156103935787850151825560209485019460019092019101610373565b50848210156103b057868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b828152604060208201525f82518060408401528060208501606085015e5f606082850101526060601f19601f8301168401019150509392505050565b5f6001820161041857634e487b7160e01b5f52601160045260245ffd5b5060010190565b6104ce8061042c5f395ff3fe608060405234801561000f575f80fd5b506004361061004a575f3560e01c8063013cf08b1461004e5780635c19a95c14610078578063a3ec138d1461008d578063cbea81ef146100e6575b5f80fd5b61006161005c366004610366565b6100f9565b60405161006f92919061037d565b60405180910390f35b61008b6100863660046103ff565b6101ad565b005b6100c661009b3660046103ff565b600160208190525f9182526040909120805491810154600282015460039092015460ff909116919084565b60408051948552921515602085015291830152606082015260800161006f565b61008b6100f436600461041f565b6102cc565b5f8181548110610107575f80fd5b905f5260205f2090600202015f91509050805f01805461012690610447565b80601f016020809104026020016040519081016040528092919081815260200182805461015290610447565b801561019d5780601f106101745761010080835404028352916020019161019d565b820191905f5260205f20905b81548152906001019060200180831161018057829003601f168201915b5050505050908060010154905082565b3373ffffffffffffffffffffffffffffffffffffffff8216036102175760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f742064656c656761746520746f2073656c6600000000000000000060448201526064015b60405180910390fd5b335f90815260016020526040902080546102735760405162461bcd60e51b815260206004820152601460248201527f566f746572206e6f742072656769737465726564000000000000000000000000604482015260640161020e565b600181015460ff16156102c85760405162461bcd60e51b815260206004820152601360248201527f566f74657220616c726561647920766f74656400000000000000000000000000604482015260640161020e565b5050565b73ffffffffffffffffffffffffffffffffffffffff82165f908152600160205260409020541561033e5760405162461bcd60e51b815260206004820152601860248201527f566f74657220616c726561647920726567697374657265640000000000000000604482015260640161020e565b73ffffffffffffffffffffffffffffffffffffffff9091165f90815260016020526040902055565b5f60208284031215610376575f80fd5b5035919050565b604081525f83518060408401528060208601606085015e5f6060828501015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150508260208301529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146103fa575f80fd5b919050565b5f6020828403121561040f575f80fd5b610418826103d7565b9392505050565b5f8060408385031215610430575f80fd5b610439836103d7565b946020939093013593505050565b600181811c9082168061045b57607f821691505b602082108103610492577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5091905056fea2646970667358221220ce7c5ac9902caf775ce1ce714667aec3e856fd21d9723e19de0bed5b1b14948864736f6c634300081a0033";

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
    _proposalDescriptions: string[],
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_proposalDescriptions, overrides || {});
  }
  override deploy(
    _proposalDescriptions: string[],
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_proposalDescriptions, overrides || {}) as Promise<
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
