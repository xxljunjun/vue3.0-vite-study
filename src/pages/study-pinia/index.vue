<template>
<div>
  <el-button @click="openLoginDialog">登录</el-button>
  <loginDialog ref="dialogRef"/>
</div>
</template>
  
  <script setup lang="ts">
  import {ref} from 'vue'
  import loginDialog from '@/components/login/login-dialog.vue'
  
  /**
   * 打开弹窗
   */
  const dialogRef = ref<InstanceType<typeof loginDialog> | null>(null);
  const openLoginDialog = ()=>{
    console.log('点击了登录弹窗',dialogRef)
    const params = {

    }
    dialogRef.value?.acceptParams(params)
  }

  </script>
  <style lang="scss" scoped>

  </style>