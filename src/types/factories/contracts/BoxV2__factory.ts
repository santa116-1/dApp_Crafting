/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { BoxV2, BoxV2Interface } from "../../contracts/BoxV2";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "ValueChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610268806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632e64cec1146100465780636057361d14610064578063d09de08a14610080575b600080fd5b61004e61008a565b60405161005b9190610171565b60405180910390f35b61007e60048036038101906100799190610139565b610093565b005b6100886100d4565b005b60008054905090565b806000819055507f93fe6d397c74fdf1402a8b72e47b68512f0510d7b98a4bc4cbdf6ac7108b3c59816040516100c99190610171565b60405180910390a150565b60016000546100e3919061018c565b6000819055507f93fe6d397c74fdf1402a8b72e47b68512f0510d7b98a4bc4cbdf6ac7108b3c5960005460405161011a9190610171565b60405180910390a1565b6000813590506101338161021b565b92915050565b60006020828403121561014b57600080fd5b600061015984828501610124565b91505092915050565b61016b816101e2565b82525050565b60006020820190506101866000830184610162565b92915050565b6000610197826101e2565b91506101a2836101e2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156101d7576101d66101ec565b5b828201905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b610224816101e2565b811461022f57600080fd5b5056fea2646970667358221220a4ec1d28c5386fe1c47b61d0d1945101753d694d0a17d484ea67d7dd80a2405f64736f6c63430008040033";

type BoxV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoxV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BoxV2__factory extends ContractFactory {
  constructor(...args: BoxV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<BoxV2> {
    return super.deploy(overrides || {}) as Promise<BoxV2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BoxV2 {
    return super.attach(address) as BoxV2;
  }
  override connect(signer: Signer): BoxV2__factory {
    return super.connect(signer) as BoxV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoxV2Interface {
    return new utils.Interface(_abi) as BoxV2Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): BoxV2 {
    return new Contract(address, _abi, signerOrProvider) as BoxV2;
  }
}
