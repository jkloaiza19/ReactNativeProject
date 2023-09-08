import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'

export enum employmentStatus {
  unemployed,
  employed,
  entreprenour,
  selfEmployed,
}

export type featureFlags = Record<string, string>

export type Payload = Record<string, unknown>

export type FetchUser = ActionCreatorWithPayload<{ id: number }, string>

export interface IUser {
  id?: number | string | null
  firstName: string
  lastName: string
  email: string
  createdAt?: Date | null
  updatedAt?: Date | null
  password?: string | null
}

export interface IUserState extends IUser{
  loading: boolean
  loaded: boolean
  error: string
}

export interface IGenericState<T> {
  data: T
  errors?: Array<string>
}

export interface IMappedState {
  [key: string]: string | number | object
}