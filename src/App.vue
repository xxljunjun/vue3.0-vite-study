<template>
   <div class="App">
    <router-view></router-view>
    <TabBar :msg='"dark"'/>
    <el-alert title="success alert" type="success" @close='close'/>
   </div>
  
</template>

<script lang="ts" setup>
import TabBar from "./components/TabBar.vue";
import { reactive,shallowRef,computed } from "vue";
import type { CSSProperties } from 'vue'
const close = (val)=>{
  console.log('val',val)
}
</script>
<style lang="scss">
body,html{
  margin: 0;
  padding: 0;
}
.App{
  height: 1000px;
}
</style>
