/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface ContractOneInterface extends Interface {
  getFunction(nameOrSignature: "contractThree" | "result"): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "DelegatecallResult" | "FallbackCalled"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "contractThree",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "result", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "contractThree",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "result", data: BytesLike): Result;
}

export namespace DelegatecallResultEvent {
  export type InputTuple = [success: boolean, data: BytesLike];
  export type OutputTuple = [success: boolean, data: string];
  export interface OutputObject {
    success: boolean;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FallbackCalledEvent {
  export type InputTuple = [data: BytesLike];
  export type OutputTuple = [data: string];
  export interface OutputObject {
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ContractOne extends BaseContract {
  connect(runner?: ContractRunner | null): ContractOne;
  waitForDeployment(): Promise<this>;

  interface: ContractOneInterface;

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

  contractThree: TypedContractMethod<[], [string], "view">;

  result: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "contractThree"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "result"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "DelegatecallResult"
  ): TypedContractEvent<
    DelegatecallResultEvent.InputTuple,
    DelegatecallResultEvent.OutputTuple,
    DelegatecallResultEvent.OutputObject
  >;
  getEvent(
    key: "FallbackCalled"
  ): TypedContractEvent<
    FallbackCalledEvent.InputTuple,
    FallbackCalledEvent.OutputTuple,
    FallbackCalledEvent.OutputObject
  >;

  filters: {
    "DelegatecallResult(bool,bytes)": TypedContractEvent<
      DelegatecallResultEvent.InputTuple,
      DelegatecallResultEvent.OutputTuple,
      DelegatecallResultEvent.OutputObject
    >;
    DelegatecallResult: TypedContractEvent<
      DelegatecallResultEvent.InputTuple,
      DelegatecallResultEvent.OutputTuple,
      DelegatecallResultEvent.OutputObject
    >;

    "FallbackCalled(bytes)": TypedContractEvent<
      FallbackCalledEvent.InputTuple,
      FallbackCalledEvent.OutputTuple,
      FallbackCalledEvent.OutputObject
    >;
    FallbackCalled: TypedContractEvent<
      FallbackCalledEvent.InputTuple,
      FallbackCalledEvent.OutputTuple,
      FallbackCalledEvent.OutputObject
    >;
  };
}
