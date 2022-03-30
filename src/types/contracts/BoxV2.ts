/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface BoxV2Interface extends utils.Interface {
  functions: {
    "increment()": FunctionFragment;
    "retrieve()": FunctionFragment;
    "store(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "increment" | "retrieve" | "store"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "increment", values?: undefined): string;
  encodeFunctionData(functionFragment: "retrieve", values?: undefined): string;
  encodeFunctionData(functionFragment: "store", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "increment", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "retrieve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;

  events: {
    "ValueChanged(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ValueChanged"): EventFragment;
}

export interface ValueChangedEventObject {
  value: BigNumber;
}
export type ValueChangedEvent = TypedEvent<
  [BigNumber],
  ValueChangedEventObject
>;

export type ValueChangedEventFilter = TypedEventFilter<ValueChangedEvent>;

export interface BoxV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BoxV2Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    increment(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    retrieve(overrides?: CallOverrides): Promise<[BigNumber]>;

    store(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  increment(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  retrieve(overrides?: CallOverrides): Promise<BigNumber>;

  store(
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    increment(overrides?: CallOverrides): Promise<void>;

    retrieve(overrides?: CallOverrides): Promise<BigNumber>;

    store(value: BigNumberish, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ValueChanged(uint256)"(value?: null): ValueChangedEventFilter;
    ValueChanged(value?: null): ValueChangedEventFilter;
  };

  estimateGas: {
    increment(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    retrieve(overrides?: CallOverrides): Promise<BigNumber>;

    store(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    increment(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    retrieve(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    store(
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
