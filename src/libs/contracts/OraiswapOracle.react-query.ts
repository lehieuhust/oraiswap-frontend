/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.22.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import {Addr, Decimal, Uint128, OracleTreasuryQuery, OracleExchangeQuery, OracleContractQuery, Coin} from "./types";
import { TreasuryResponse, ExchangeResponse, ContractResponse} from "./OraiswapOracle.types";
import { OraiswapOracleQueryClient, OraiswapOracleClient } from "./OraiswapOracle.client";
export interface OraiswapOracleReactQuery<TResponse, TData = TResponse> {
  client: OraiswapOracleQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData: undefined;
  };
}
export interface OraiswapOracleContractQuery<TData> extends OraiswapOracleReactQuery<ContractResponse, TData> {input: OracleContractQuery}
export function useOraiswapOracleContractQuery<TData = ContractResponse>({
  client,
  options,
	input
}: OraiswapOracleContractQuery<TData>) {
  return useQuery<ContractResponse, Error, TData>(["oraiswapOracleContract", client?.contractAddress], () => client ? client.contract(input) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface OraiswapOracleExchangeQuery<TData> extends OraiswapOracleReactQuery<ExchangeResponse, TData> {input: OracleExchangeQuery}
export function useOraiswapOracleExchangeQuery<TData = ExchangeResponse>({
  client,
  options,
	input
}: OraiswapOracleExchangeQuery<TData>) {
  return useQuery<ExchangeResponse, Error, TData>(["oraiswapOracleExchange", client?.contractAddress], () => client ? client.exchange(input) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface OraiswapOracleTreasuryQuery<TData> extends OraiswapOracleReactQuery<TreasuryResponse, TData> {input: OracleTreasuryQuery}
export function useOraiswapOracleTreasuryQuery<TData = TreasuryResponse>({
  client,
  options,
	input
}: OraiswapOracleTreasuryQuery<TData>) {
  return useQuery<TreasuryResponse, Error, TData>(["oraiswapOracleTreasury", client?.contractAddress], () => client ? client.treasury(input) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface OraiswapOracleUpdateTaxRateMutation {
  client: OraiswapOracleClient;
  msg: {
    rate: Decimal;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useOraiswapOracleUpdateTaxRateMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, OraiswapOracleUpdateTaxRateMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, OraiswapOracleUpdateTaxRateMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateTaxRate(msg, fee, memo, funds), options);
}
export interface OraiswapOracleUpdateTaxCapMutation {
  client: OraiswapOracleClient;
  msg: {
    cap: Uint128;
    denom: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useOraiswapOracleUpdateTaxCapMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, OraiswapOracleUpdateTaxCapMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, OraiswapOracleUpdateTaxCapMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateTaxCap(msg, fee, memo, funds), options);
}
export interface OraiswapOracleDeleteExchangeRateMutation {
  client: OraiswapOracleClient;
  msg: {
    denom: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useOraiswapOracleDeleteExchangeRateMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, OraiswapOracleDeleteExchangeRateMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, OraiswapOracleDeleteExchangeRateMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.deleteExchangeRate(msg, fee, memo, funds), options);
}
export interface OraiswapOracleUpdateExchangeRateMutation {
  client: OraiswapOracleClient;
  msg: {
    denom: string;
    exchangeRate: Decimal;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useOraiswapOracleUpdateExchangeRateMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, OraiswapOracleUpdateExchangeRateMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, OraiswapOracleUpdateExchangeRateMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateExchangeRate(msg, fee, memo, funds), options);
}
export interface OraiswapOracleUpdateAdminMutation {
  client: OraiswapOracleClient;
  msg: {
    admin: Addr;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useOraiswapOracleUpdateAdminMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, OraiswapOracleUpdateAdminMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, OraiswapOracleUpdateAdminMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateAdmin(msg, fee, memo, funds), options);
}