import { reactive } from 'vue'
import type { FormRules } from 'element-plus'
export const accountRules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入您的用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '范围在3到5之前', trigger: 'blur' }
  ],
  password: [
    {
      required: true,
      message: '请输入您的密码',
      trigger: 'blur'
    }
  ]
})
