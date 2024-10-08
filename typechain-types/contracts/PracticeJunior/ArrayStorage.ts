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
} from "../../common";

export interface ArrayStorageInterface extends Interface {
  getFunction(
    nameOrSignature: "addNumber" | "getNumber" | "numbers"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addNumber",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumber",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "numbers",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addNumber", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getNumber", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "numbers", data: BytesLike): Result;
}

export interface ArrayStorage extends BaseContract {
  connect(runner?: ContractRunner | null): ArrayStorage;
  waitForDeployment(): Promise<this>;

  interface: ArrayStorageInterface;

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

  addNumber: TypedContractMethod<[number: BigNumberish], [void], "nonpayable">;

  getNumber: TypedContractMethod<[index: BigNumberish], [bigint], "view">;

  numbers: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addNumber"
  ): TypedContractMethod<[number: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getNumber"
  ): TypedContractMethod<[index: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "numbers"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  filters: {};
}
