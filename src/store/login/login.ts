import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../type'
import { accountLogin, userInfoById, userMenusById } from '@/api/login/login'
import localCache from '@/util/cache'
import router from '@/router'
import { mapMenusToRoutes } from '@/util/map-menus'
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: '',
      userMenus: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => router.addRoute('main', route))
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: any) {
      /** 获取token */
      const loginRes = await accountLogin(payload)
      const { id, token } = loginRes.data
      commit('changeToken', token)
      localCache.setCache('token', token)
      /** 获取用户信息 */
      const userInfoRes = await userInfoById(id)
      const userInfo = userInfoRes.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)
      /** 获取menus信息 */
      const userMenusRes = await userMenusById(userInfo.role.id)
      const userMenus = userMenusRes.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)
      router.push('/main')
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('我是手机号登录')
    },
    loginLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}
export default loginModule
