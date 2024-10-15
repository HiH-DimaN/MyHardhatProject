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
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  StringRecordFactory,
  StringRecordFactoryInterface,
} from "../../../../contracts/PracticeGuideDAO/RecordFactoryENS.sol/StringRecordFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_recordsStorage",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_record",
        type: "string",
      },
    ],
    name: "addStringRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "recordsStorage",
    outputs: [
      {
        internalType: "contract IRecordStorage",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b50604051610996380380610996833981016040819052602b91604e565b5f80546001600160a01b0319166001600160a01b03929092169190911790556079565b5f60208284031215605d575f80fd5b81516001600160a01b03811681146072575f80fd5b9392505050565b610910806100865f395ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c80631a4cdda314610038578063acd1a33e1461004d575b5f80fd5b61004b610046366004610192565b610095565b005b5f5461006c9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b5f816040516100a390610158565b6100ad9190610246565b604051809103905ff0801580156100c6573d5f803e3d5ffd5b5090506100d2816100d6565b5050565b5f546040517f99b5346300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152909116906399b53463906024015f604051808303815f87803b15801561013f575f80fd5b505af1158015610151573d5f803e3d5ffd5b5050505050565b61065f8061027c83390190565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f602082840312156101a2575f80fd5b813567ffffffffffffffff8111156101b8575f80fd5b8201601f810184136101c8575f80fd5b803567ffffffffffffffff8111156101e2576101e2610165565b604051601f19603f601f19601f8501160116810181811067ffffffffffffffff8211171561021257610212610165565b604052818152828201602001861015610229575f80fd5b816020840160208301375f91810160200191909152949350505050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f8301168401019150509291505056fe608060405234801561000f575f80fd5b5060405161065f38038061065f83398101604081905261002e91610058565b425f55600161003d828261018c565b5050610246565b634e487b7160e01b5f52604160045260245ffd5b5f60208284031215610068575f80fd5b81516001600160401b0381111561007d575f80fd5b8201601f8101841361008d575f80fd5b80516001600160401b038111156100a6576100a6610044565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d4576100d4610044565b6040528181528282016020018610156100eb575f80fd5b8160208401602083015e5f91810160200191909152949350505050565b600181811c9082168061011c57607f821691505b60208210810361013a57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561018757805f5260205f20601f840160051c810160208510156101655750805b601f840160051c820191505b81811015610184575f8155600101610171565b50505b505050565b81516001600160401b038111156101a5576101a5610044565b6101b9816101b38454610108565b84610140565b6020601f8211600181146101eb575f83156101d45750848201515b5f19600385901b1c1916600184901b178455610184565b5f84815260208120601f198516915b8281101561021a57878501518255602094850194600190920191016101fa565b508482101561023757868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b61040c806102535f395ff3fe608060405234801561000f575f80fd5b506004361061004a575f3560e01c80630781f5c91461004e5780631dcd69ec14610099578063266cf109146100af5780633e0a0099146100b7575b5f80fd5b60408051808201909152600681527f737472696e67000000000000000000000000000000000000000000000000000060208201525b6040516100909190610168565b60405180910390f35b6100a15f5481565b604051908152602001610090565b6100836100cc565b6100ca6100c53660046101ca565b610158565b005b600180546100d99061027e565b80601f01602080910402602001604051908101604052809291908181526020018280546101059061027e565b80156101505780601f1061012757610100808354040283529160200191610150565b820191905f5260205f20905b81548152906001019060200180831161013357829003601f168201915b505050505081565b6001610164828261031b565b5050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f602082840312156101da575f80fd5b813567ffffffffffffffff8111156101f0575f80fd5b8201601f81018413610200575f80fd5b803567ffffffffffffffff81111561021a5761021a61019d565b604051601f19603f601f19601f8501160116810181811067ffffffffffffffff8211171561024a5761024a61019d565b604052818152828201602001861015610261575f80fd5b816020840160208301375f91810160200191909152949350505050565b600181811c9082168061029257607f821691505b6020821081036102c9577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b50919050565b601f82111561031657805f5260205f20601f840160051c810160208510156102f45750805b601f840160051c820191505b81811015610313575f8155600101610300565b50505b505050565b815167ffffffffffffffff8111156103355761033561019d565b61034981610343845461027e565b846102cf565b6020601f82116001811461037b575f83156103645750848201515b5f19600385901b1c1916600184901b178455610313565b5f84815260208120601f198516915b828110156103aa578785015182556020948501946001909201910161038a565b50848210156103c757868401515f19600387901b60f8161c191681555b50505050600190811b0190555056fea264697066735822122020b87faa749d8fc3e299b76be8f9e57d1bb9465ffafbf380e6689a3de2f5c76264736f6c634300081a0033a26469706673582212205a98f9fab637e76157650b43814c9f760c01c4c2df40c12734c2b9fd9ba0602364736f6c634300081a0033";

type StringRecordFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StringRecordFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StringRecordFactory__factory extends ContractFactory {
  constructor(...args: StringRecordFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _recordsStorage: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_recordsStorage, overrides || {});
  }
  override deploy(
    _recordsStorage: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_recordsStorage, overrides || {}) as Promise<
      StringRecordFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): StringRecordFactory__factory {
    return super.connect(runner) as StringRecordFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StringRecordFactoryInterface {
    return new Interface(_abi) as StringRecordFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): StringRecordFactory {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as StringRecordFactory;
  }
}
