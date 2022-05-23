<template>
  <div class="panel-content">
    <h2 class="title">用户后台管理系统</h2>
    <el-tabs v-model="activeName" type="border-card" stretch class="demo-tabs">
      <el-tab-pane name="first">
        <template #label>
          <span class="custom-tabs-label">
            <Iphone style="width: 1em; height: 1em; margin-right: 8px" />
            <UserFilled style="width: 1em; height: 1em; margin-right: 8px" />
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="second">
        <template #label>
          <span class="custom-tabs-label">
            <Iphone style="width: 1em; height: 1em; margin-right: 8px" />
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import {InstanceType}
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'
let isKeepPassword = ref(false)
const activeName = ref('first')
const accountRef = ref<InstanceType<typeof loginAccount>>()
const phoneRef = ref<InstanceType<typeof loginPhone>>()
const handleLoginClick = () => {
  if (activeName.value === 'first') {
    accountRef.value?.loginAction(isKeepPassword.value)
  } else {
    phoneRef.value?.loginPhone()
  }
}
</script>
<style scoped lang="less">
.panel-content {
  margin-bottom: 120px;
  width: 360px;
  height: 200px;
  .title {
    text-align: center;
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 5px;
  }
}
</style>
