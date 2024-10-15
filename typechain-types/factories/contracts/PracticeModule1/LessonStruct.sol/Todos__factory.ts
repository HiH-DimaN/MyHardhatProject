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
import type { NonPayableOverrides } from "../../../../common";
import type {
  Todos,
  TodosInterface,
} from "../../../../contracts/PracticeModule1/LessonStruct.sol/Todos";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_text",
        type: "string",
      },
    ],
    name: "create",
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
    name: "todos",
    outputs: [
      {
        internalType: "string",
        name: "text",
        type: "string",
      },
      {
        internalType: "bool",
        name: "completed",
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
        name: "_index",
        type: "uint256",
      },
    ],
    name: "toggleCompleted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_text",
        type: "string",
      },
    ],
    name: "updateText",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b506106f78061001c5f395ff3fe608060405234801561000f575f80fd5b506004361061004a575f3560e01c8063455f50241461004e578063b6a46b3b14610063578063bc8bc2b414610076578063cd111614146100a0575b5f80fd5b61006161005c366004610382565b6100b3565b005b6100616100713660046103de565b6100ec565b610089610084366004610382565b610294565b60405161009792919061041d565b60405180910390f35b6100616100ae36600461045b565b61034b565b5f8082815481106100c6576100c66104a3565b5f9182526020909120600160029092020101805460ff19811660ff909116151790555050565b6040805160606020601f8501819004028201810183529181018381525f9282919086908690819085018382808284375f92018290525093855250505060209182018190528354600181018555938152208151919260020201908190610151908261054c565b506020918201516001909101805491151560ff19909216919091179055604080516060601f85018490049093028101830182529081018381525f9282919086908690819085018382808284375f920182905250938552505050602091820181905283546001810185559381522081519192600202019081906101d3908261054c565b50602091820151600191909101805460ff1916911515919091179055604080518082018252606081525f818401528151601f85018490048402810184019092528382529184908490819084018382808284375f9201829052509385525050815460018101835591805250815182916002027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56301908190610273908261054c565b50602091909101516001909101805460ff1916911515919091179055505050565b5f81815481106102a2575f80fd5b905f5260205f2090600202015f91509050805f0180546102c1906104cb565b80601f01602080910402602001604051908101604052809291908181526020018280546102ed906104cb565b80156103385780601f1061030f57610100808354040283529160200191610338565b820191905f5260205f20905b81548152906001019060200180831161031b57829003601f168201915b5050506001909301549192505060ff1682565b5f80848154811061035e5761035e6104a3565b5f918252602090912060029091020190508061037b838583610607565b5050505050565b5f60208284031215610392575f80fd5b5035919050565b5f8083601f8401126103a9575f80fd5b50813567ffffffffffffffff8111156103c0575f80fd5b6020830191508360208285010111156103d7575f80fd5b9250929050565b5f80602083850312156103ef575f80fd5b823567ffffffffffffffff811115610405575f80fd5b61041185828601610399565b90969095509350505050565b604081525f83518060408401528060208601606085015e5f606082850101526060601f19601f83011684010191505082151560208301529392505050565b5f805f6040848603121561046d575f80fd5b83359250602084013567ffffffffffffffff81111561048a575f80fd5b61049686828701610399565b9497909650939450505050565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806104df57607f821691505b6020821081036104fd57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561054757805f5260205f20601f840160051c810160208510156105285750805b601f840160051c820191505b8181101561037b575f8155600101610534565b505050565b815167ffffffffffffffff811115610566576105666104b7565b61057a8161057484546104cb565b84610503565b6020601f8211600181146105ac575f83156105955750848201515b5f19600385901b1c1916600184901b17845561037b565b5f84815260208120601f198516915b828110156105db57878501518255602094850194600190920191016105bb565b50848210156105f857868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b67ffffffffffffffff83111561061f5761061f6104b7565b6106338361062d83546104cb565b83610503565b5f601f841160018114610664575f851561064d5750838201355b5f19600387901b1c1916600186901b17835561037b565b5f83815260208120601f198716915b828110156106935786850135825560209485019460019092019101610673565b50868210156106af575f1960f88860031b161c19848701351681555b505060018560011b018355505050505056fea26469706673582212205221b916fbef16113265fc4a66c48230c71b920b728b1be3702e4e2f4983f70a64736f6c634300081a0033";

type TodosConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TodosConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Todos__factory extends ContractFactory {
  constructor(...args: TodosConstructorParams) {
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
      Todos & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Todos__factory {
    return super.connect(runner) as Todos__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TodosInterface {
    return new Interface(_abi) as TodosInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Todos {
    return new Contract(address, _abi, runner) as unknown as Todos;
  }
}
