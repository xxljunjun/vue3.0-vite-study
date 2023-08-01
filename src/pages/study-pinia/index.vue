<template>
<div>
  <el-button @click="openLoginDialog">登录</el-button>
  <el-button @click="changeNum">改变仓库里面的值</el-button>
  <div>{{useStore.todos}}</div>
 
</div>
</template>
  
  <script setup lang="ts">
  import {todos} from '@/store/index'
  import {userStore} from '@/store/modules/user'
  const useStore = todos()
  const useUserStore = userStore()
  /**
   * 打开弹窗
   */
  const openLoginDialog = ()=>{
    useUserStore.setDialogStatus(true);
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