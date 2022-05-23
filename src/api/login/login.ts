import yyRequest from '@/service'
import type { IAccount, IDataType, ILoginRes } from './type'
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}
export function accountLogin(account: IAccount) {
  return yyRequest.post<IDataType<ILoginRes>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
export function userInfoById(id: number) {
  return yyRequest.get<IDataType<any>>({
    url: LoginAPI.LoginUserInfo + id
  })
}
export function userMenusById(id: number) {
  return yyRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  })
}
