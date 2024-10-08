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

export interface RecordFactoryInterface extends Interface {
  getFunction(
    nameOrSignature: "addRecord(address)" | "addRecord(string)" | "records"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addRecord(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addRecord(string)",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "records",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addRecord(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addRecord(string)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "records", data: BytesLike): Result;
}

export interface RecordFactory extends BaseContract {
  connect(runner?: ContractRunner | null): RecordFactory;
  waitForDeployment(): Promise<this>;

  interface: RecordFactoryInterface;

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

  "addRecord(address)": TypedContractMethod<
    [_record: AddressLike],
    [void],
    "nonpayable"
  >;

  "addRecord(string)": TypedContractMethod<
    [_record: string],
    [void],
    "nonpayable"
  >;

  records: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addRecord(address)"
  ): TypedContractMethod<[_record: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addRecord(string)"
  ): TypedContractMethod<[_record: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "records"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  filters: {};
}
