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
  Destroy,
  DestroyInterface,
} from "../../../contracts/PracticeGuideDAO/Destroy";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address[100]",
        name: "_array",
        type: "address[100]",
      },
    ],
    name: "checkBalance",
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
    name: "myAddr",
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
        internalType: "address payable",
        name: "newRecipient",
        type: "address",
      },
    ],
    name: "setRecipient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040526003805460ff19166001179055348015601b575f80fd5b505f8054336001600160a01b031991821681178355600180549092161790556105e590819061004990395ff3fe608060405260043610610036575f3560e01c8063113cb1f114610041578063321bfa43146100625780633bbed4a0146100aa575f80fd5b3661003d57005b5f80fd5b34801561004c575f80fd5b5061006061005b3660046104c5565b6100c9565b005b34801561006d575f80fd5b5061008161007c366004610549565b6101f2565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100b5575f80fd5b506100606100c4366004610560565b610227565b60035460ff166101205760405162461bcd60e51b815260206004820152601660248201527f436f6e7472616374206973206e6f74206163746976650000000000000000000060448201526064015b60405180910390fd5b5f5b60648110156101e657600382826064811061013f5761013f610582565b602002015173ffffffffffffffffffffffffffffffffffffffff163111156101d357600282826064811061017557610175610582565b6020908102919091015182546001810184555f938452919092200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9092169190911790555b600254601e10156101ea576101e66102d4565b5050565b600101610122565b60028181548110610201575f80fd5b5f9182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461028d5760405162461bcd60e51b815260206004820152601160248201527f4973206e6f7420746865206f776e65722e0000000000000000000000000000006044820152606401610117565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461033a5760405162461bcd60e51b815260206004820152601160248201527f4973206e6f7420746865206f776e65722e0000000000000000000000000000006044820152606401610117565b60035460ff1661038c5760405162461bcd60e51b815260206004820152601f60248201527f436f6e747261637420697320616c7265616479206465616374697661746564006044820152606401610117565b6001546040515f9173ffffffffffffffffffffffffffffffffffffffff169047908381818185875af1925050503d805f81146103e3576040519150601f19603f3d011682016040523d82523d5f602084013e6103e8565b606091505b50509050806104395760405162461bcd60e51b815260206004820152600f60248201527f5472616e73666572206661696c656400000000000000000000000000000000006044820152606401610117565b50600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff811681146104b2575f80fd5b50565b80356104c081610491565b919050565b5f610c8082840312156104d6575f80fd5b82601f8301126104e4575f80fd5b604051610c80810181811067ffffffffffffffff8211171561050857610508610464565b60405280610c8084018581111561051d575f80fd5b845b8181101561053e57610530816104b5565b83526020928301920161051f565b509195945050505050565b5f60208284031215610559575f80fd5b5035919050565b5f60208284031215610570575f80fd5b813561057b81610491565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffdfea264697066735822122027264e56ca233b54baa144ca7340d809592616a4f9fee80c4878472a1ca8a73464736f6c634300081a0033";

type DestroyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DestroyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Destroy__factory extends ContractFactory {
  constructor(...args: DestroyConstructorParams) {
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
      Destroy & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Destroy__factory {
    return super.connect(runner) as Destroy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DestroyInterface {
    return new Interface(_abi) as DestroyInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Destroy {
    return new Contract(address, _abi, runner) as unknown as Destroy;
  }
}
