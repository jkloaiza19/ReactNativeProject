import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'
// types
export type Func = (param: string | number | boolean) => void
export type Id = { id: number }
export type Obj = Record<string, any>
export type Params = Obj
export type Navigation = Record<string, Func>
export type Payload<T> = ActionCreatorWithPayload<T, string> | undefined

