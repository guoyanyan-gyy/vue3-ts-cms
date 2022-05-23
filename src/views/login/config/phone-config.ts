import { reactive } from 'vue'
import type { FormRules } from 'element-plus'
export const phoneRules = reactive<FormRules>({
  num: [{ required: true, message: '请输入您的手机号', trigger: 'blur' }],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    }
  ]
})
