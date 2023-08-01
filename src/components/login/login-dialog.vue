<template>
  <el-dialog v-model="dialogVisible" title="登录" :before-close="handleClose">
    <div class="login-dialog">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone" />
        </el-form-item>
     
        <el-form-item label="验证码" prop="code">
          <el-row :gutter="10">
            <el-col :span="16">
              <el-input v-model.number="ruleForm.code"
            /></el-col>
            <el-col :span="2">
              <el-button type="primary" @click="getCode"
                >获取验证码</el-button
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
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { checkPhoneNumber } from "@/utils/eleValidate";

let dialogVisible = ref(false);
const ruleFormRef = ref<FormInstance>();
  const ruleForm = reactive({
  phone: "",
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
  // return true
  dialogVisible.value = false;
};

/**
 * 接受父组件的值
 */
const acceptParams = (params) => {
  console.log("父组件通过ref触发", params);
  dialogVisible.value = true;
};
defineExpose({
  acceptParams,
});
</script>
<style scoped lang="scss"></style>
