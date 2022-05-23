<template>
  <div>
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="phoneRules"
      label-width="80px"
      class="demo-ruleForm"
    >
      <el-form-item label="手机号" prop="num">
        <el-input v-model="loginForm.num" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="loginForm.code" />
          <el-button class="get-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { reactive, ref, defineExpose } from 'vue'
import type { FormInstance } from 'element-plus'
import { phoneRules } from '../config/phone-config'
const store = useStore()
const loginForm = reactive({
  num: '',
  code: ''
})
const loginFormRef = ref<FormInstance>()
const loginPhone = () => {
  store.dispatch('login/phoneLoginAction', { ...loginForm })
}
defineExpose({
  loginPhone
})
</script>
<style lang="less" scoped>
.get-code {
  display: flex;
  .get-btn {
    margin-left: 8px;
  }
}
</style>
