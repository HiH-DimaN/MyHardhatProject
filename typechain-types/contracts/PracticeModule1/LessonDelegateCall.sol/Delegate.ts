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
} from "../../../common";

export interface DelegateInterface extends Interface {
  getFunction(
    nameOrSignature: "delegate" | "num" | "seneder" | "setVars"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "delegate", values?: undefined): string;
  encodeFunctionData(functionFragment: "num", values?: undefined): string;
  encodeFunctionData(functionFragment: "seneder", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setVars",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "num", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "seneder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setVars", data: BytesLike): Result;
}

export interface Delegate extends BaseContract {
  connect(runner?: ContractRunner | null): Delegate;
  waitForDeployment(): Promise<this>;

  interface: DelegateInterface;

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

  delegate: TypedContractMethod<[], [string], "view">;

  num: TypedContractMethod<[], [bigint], "view">;

  seneder: TypedContractMethod<[], [string], "view">;

  setVars: TypedContractMethod<[_num: BigNumberish], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "delegate"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "num"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "seneder"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setVars"
  ): TypedContractMethod<[_num: BigNumberish], [void], "nonpayable">;

  filters: {};
}
