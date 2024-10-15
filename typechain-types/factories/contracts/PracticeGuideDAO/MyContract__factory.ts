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
  MyContract,
  MyContractInterface,
} from "../../../contracts/PracticeGuideDAO/MyContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "guestList",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "bool",
        name: "invited",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
    name: "listOfFriends",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "bool",
        name: "invited",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_invited",
        type: "bool",
      },
    ],
    name: "newFriends",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b506104d98061001c5f395ff3fe608060405234801561000f575f80fd5b506004361061003f575f3560e01c80638803303d146100435780639b45fc3214610058578063f5fccd8f14610082575b5f80fd5b610056610051366004610231565b610095565b005b61006b6100663660046102f6565b61012a565b60405161007992919061030d565b60405180910390f35b61006b6100903660046102f6565b6101e1565b6040805180820190915282815281151560208201525f8054600181018255908052815160029091027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563019081906100ec90826103e8565b5060209190910151600190910180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790555050565b5f8181548110610138575f80fd5b905f5260205f2090600202015f91509050805f0180546101579061034b565b80601f01602080910402602001604051908101604052809291908181526020018280546101839061034b565b80156101ce5780601f106101a5576101008083540402835291602001916101ce565b820191905f5260205f20905b8154815290600101906020018083116101b157829003601f168201915b5050506001909301549192505060ff1682565b60018181548110610138575f80fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b8035801515811461022c575f80fd5b919050565b5f8060408385031215610242575f80fd5b823567ffffffffffffffff811115610258575f80fd5b8301601f81018513610268575f80fd5b803567ffffffffffffffff811115610282576102826101f0565b604051601f19603f601f19601f8501160116810181811067ffffffffffffffff821117156102b2576102b26101f0565b6040528181528282016020018710156102c9575f80fd5b816020840160208301375f602083830101528094505050506102ed6020840161021d565b90509250929050565b5f60208284031215610306575f80fd5b5035919050565b604081525f83518060408401528060208601606085015e5f606082850101526060601f19601f83011684010191505082151560208301529392505050565b600181811c9082168061035f57607f821691505b602082108103610396577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b50919050565b601f8211156103e357805f5260205f20601f840160051c810160208510156103c15750805b601f840160051c820191505b818110156103e0575f81556001016103cd565b50505b505050565b815167ffffffffffffffff811115610402576104026101f0565b61041681610410845461034b565b8461039c565b6020601f821160018114610448575f83156104315750848201515b5f19600385901b1c1916600184901b1784556103e0565b5f84815260208120601f198516915b828110156104775787850151825560209485019460019092019101610457565b508482101561049457868401515f19600387901b60f8161c191681555b50505050600190811b0190555056fea2646970667358221220816e8d8dec3fe6c66935732ea77d6828f8fa4bfb63b0dd07d9e1cf0a648058b364736f6c634300081a0033";

type MyContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyContract__factory extends ContractFactory {
  constructor(...args: MyContractConstructorParams) {
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
      MyContract & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MyContract__factory {
    return super.connect(runner) as MyContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyContractInterface {
    return new Interface(_abi) as MyContractInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MyContract {
    return new Contract(address, _abi, runner) as unknown as MyContract;
  }
}
