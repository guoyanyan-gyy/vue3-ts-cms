import type { ILoginState } from './login/type'

export interface IRootState {
  name: string
  age: number
}

export interface IModule {
  login: ILoginState
}

export type IStoreType = IRootState & IModule
