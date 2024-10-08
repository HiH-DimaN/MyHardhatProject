/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface LessonErrorsAndConditionsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "compareAddresses"
      | "comparisonResult"
      | "incrementNumber"
      | "initialize"
      | "myAddress"
      | "myNumber"
      | "ternaryOperation"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "compareAddresses",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "comparisonResult",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "incrementNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "myAddress", values?: undefined): string;
  encodeFunctionData(functionFragment: "myNumber", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ternaryOperation",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "compareAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "comparisonResult",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "incrementNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "myAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "myNumber", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ternaryOperation",
    data: BytesLike
  ): Result;
}

export interface LessonErrorsAndConditions extends BaseContract {
  connect(runner?: ContractRunner | null): LessonErrorsAndConditions;
  waitForDeployment(): Promise<this>;

  interface: LessonErrorsAndConditionsInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  compareAddresses: TypedContractMethod<
    [_addressToCompare: AddressLike],
    [void],
    "nonpayable"
  >;

  comparisonResult: TypedContractMethod<[], [boolean], "view">;

  incrementNumber: TypedContractMethod<[], [void], "nonpayable">;

  initialize: TypedContractMethod<
    [_number: BigNumberish, _address: AddressLike],
    [void],
    "nonpayable"
  >;

  myAddress: TypedContractMethod<[], [string], "view">;

  myNumber: TypedContractMethod<[], [bigint], "view">;

  ternaryOperation: TypedContractMethod<
    [_inputNumber: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "compareAddresses"
  ): TypedContractMethod<
    [_addressToCompare: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "comparisonResult"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "incrementNumber"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [_number: BigNumberish, _address: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "myAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "myNumber"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ternaryOperation"
  ): TypedContractMethod<[_inputNumber: BigNumberish], [void], "nonpayable">;

  filters: {};
}
