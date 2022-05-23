import { createStore, Store, useStore as useVuexStore } from 'vuex'
import type { IRootState, IStoreType } from './type'
import login from './login/login'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'huahua',
      age: 12,
      height: 12
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})
export function setupStore() {
  store.dispatch('login/loginLocalLogin')
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
