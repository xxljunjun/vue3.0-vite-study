<template>
  <el-dialog v-model="dialogVisible" title="登录" :before-close="handleClose">
    <div class="login-dialog">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        class="demo-ruleForm"
      >
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone" />
        </el-form-item>
     
        <el-form-item label="验证码" prop="code">
          <el-row :gutter="10">
            <el-col :span="17">
              <el-input v-model.number="ruleForm.code"
            /></el-col>
            <el-col :span="2">
              <el-button v-if="numBtnStatus" :disabled="codeStatus" type="primary" @click="getCode"
                >获取验证码</el-button>
                <el-button v-else :disabled="true" type="primary"
                >{{time}}s</el-button
              ></el-col
            >
          </el-row>
        </el-form-item>
    
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <template #footer> </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref,watch } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { checkPhoneNumber,checkPhone } from "@/utils/eleValidate";

let dialogVisible = ref(false);
let codeStatus = ref(false);
let numBtnStatus = ref(true);
let time = ref(5)
let timer = reactive(null)
const ruleFormRef = ref<FormInstance>();
  const ruleForm = reactive({
  phone: "13680086357",
  code: "",
});

/**
 * 手机号码的校验
 */
const validatePhone = (rule: any, value: any, callback: any) => {
  checkPhoneNumber(rule, value, callback);
};
/**
 * 验证码的校验
 */
const validateCode = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入验证码'))
  } else if (value.toString().length !=6) {
    callback(new Error("请输入正确的验证码"))
  } else {
    callback()
  }
};
const rules = reactive<FormRules<typeof ruleForm>>({
  phone: [{ validator: validatePhone, trigger: "blur" }],
  code: [{ validator: validateCode, trigger: "blur" }],
});
/**
 * 获取验证码
 */
const getCode = ()=>{
  console.log('获取验证码')
  numBtnStatus.value = false
  timer= setInterval(()=>{
    time.value -=1
    console.log('定时器哒哒哒')
    if(time.value<=0){
      initTimer()
    }
  },1000)
}
/**
 * 初始化定时器
 */
const initTimer = ()=>{
  clearInterval(timer)
      numBtnStatus.value = true
      time.value = 5
}
/**
 * 点击登录按钮
 */
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
/**
 * 点击重置按钮
 */
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
/**
 * 弹窗关闭前触发
 */
const handleClose = () => {
  console.log("弹窗关闭前触发");
  dialogVisible.value = false;
};

/**
 * 接受父组件的值
 */
const acceptParams = (params) => {
  console.log("父组件通过ref触发", params);
  dialogVisible.value = true;
};
/**
 * 监听手机号的变化
 */
watch(
  () => ruleForm.phone,
  value => {
   console.log("监听手机号的变化",value)
   codeStatus.value = !checkPhone(ruleForm.phone)
  },
  { immediate: true }
);
/**
 * 监听手机号的变化
 */
 watch(
  () => dialogVisible.value,
  value => {
   console.log("监听弹窗显示",value)
   if(!value){
    initTimer()
   }
  },
);
defineExpose({
  acceptParams,
});
</script>
<style scoped lang="scss"></style>
