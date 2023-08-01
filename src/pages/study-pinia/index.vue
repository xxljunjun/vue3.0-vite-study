<template>
<div>
  <el-button @click="openLoginDialog">登录</el-button>
  <el-button @click="changeNum">改变仓库里面的值</el-button>
  <div>{{useStore.todos}}</div>
  <loginDialog ref="dialogRef"/>
</div>
</template>
  
  <script setup lang="ts">
  import {ref} from 'vue'
  import loginDialog from '@/components/login/login-dialog.vue'
  import {todos} from '@/store/index'
  const useStore = todos()
  console.log('useStore',useStore)
  
  /**
   * 打开弹窗
   */
  const dialogRef = ref<InstanceType<typeof loginDialog> | null>(null);
  const openLoginDialog = ()=>{
    console.log('点击了登录弹窗',dialogRef)
    const params = {}
    dialogRef.value?.acceptParams(params)
  }
  /**
   * 改变值
   */
  const changeNum = ()=>{
    useStore.addTodo("我是好人")
  }

  </script>
  <style lang="scss" scoped>

  </style>