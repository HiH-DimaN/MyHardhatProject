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
} from "../../common";

export interface ProductStoreInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addProduct"
      | "getProductInfo"
      | "nextProductID"
      | "products"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "ProductAdded"): EventFragment;

  encodeFunctionData(
    functionFragment: "addProduct",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProductInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nextProductID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "products",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addProduct", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProductInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nextProductID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "products", data: BytesLike): Result;
}

export namespace ProductAddedEvent {
  export type InputTuple = [productID: BigNumberish, name: string];
  export type OutputTuple = [productID: bigint, name: string];
  export interface OutputObject {
    productID: bigint;
    name: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ProductStore extends BaseContract {
  connect(runner?: ContractRunner | null): ProductStore;
  waitForDeployment(): Promise<this>;

  interface: ProductStoreInterface;

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

  addProduct: TypedContractMethod<
    [_name: string, _price: BigNumberish, _quantity: BigNumberish],
    [void],
    "nonpayable"
  >;

  getProductInfo: TypedContractMethod<
    [_productID: BigNumberish],
    [
      [string, bigint, bigint] & {
        name: string;
        price: bigint;
        quantity: bigint;
      }
    ],
    "view"
  >;

  nextProductID: TypedContractMethod<[], [bigint], "view">;

  products: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint] & {
        name: string;
        price: bigint;
        quantity: bigint;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addProduct"
  ): TypedContractMethod<
    [_name: string, _price: BigNumberish, _quantity: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getProductInfo"
  ): TypedContractMethod<
    [_productID: BigNumberish],
    [
      [string, bigint, bigint] & {
        name: string;
        price: bigint;
        quantity: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "nextProductID"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "products"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint] & {
        name: string;
        price: bigint;
        quantity: bigint;
      }
    ],
    "view"
  >;

  getEvent(
    key: "ProductAdded"
  ): TypedContractEvent<
    ProductAddedEvent.InputTuple,
    ProductAddedEvent.OutputTuple,
    ProductAddedEvent.OutputObject
  >;

  filters: {
    "ProductAdded(uint256,string)": TypedContractEvent<
      ProductAddedEvent.InputTuple,
      ProductAddedEvent.OutputTuple,
      ProductAddedEvent.OutputObject
    >;
    ProductAdded: TypedContractEvent<
      ProductAddedEvent.InputTuple,
      ProductAddedEvent.OutputTuple,
      ProductAddedEvent.OutputObject
    >;
  };
}
