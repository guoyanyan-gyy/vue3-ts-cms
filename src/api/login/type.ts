export interface IAccount {
  name: string
  password: number
}
export interface ILoginRes {
  id: number
  name: string
  token: string
}
export interface IDataType<T = any> {
  code: number
  data: T
}
