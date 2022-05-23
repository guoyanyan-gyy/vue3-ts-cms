<template>
  <div>
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="accountRules"
      label-width="80px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="loginForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="loginForm.password"
          show-password
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup name="loginAccount">
import { reactive, ref, defineExpose } from 'vue'
import type { FormInstance } from 'element-plus'
import { accountRules } from '../config/account-config'
import cache from '@/util/cache'
import { useStore } from 'vuex'
const store = useStore()
const loginForm = reactive({
  name: cache.getCache('name') ?? '',
  password: cache.getCache('password') ?? ''
})
const loginFormRef = ref<FormInstance>()
const loginAction = (isKeepPassword: boolean) => {
  loginFormRef.value?.validate((valid) => {
    if (valid) {
      if (isKeepPassword) {
        cache.setCache('name', loginForm.name)
        cache.setCache('password', loginForm.password)
      } else {
        cache.deleteCache('name')
        cache.deleteCache('password')
      }
      store.dispatch('login/accountLoginAction', { ...loginForm })
    }
  })
}
defineExpose({
  loginAction
})
</script>
<style scoped></style>
