<template>
  <div class="son">
    <h3>{{ sum }}</h3>
    <button @click="sum++">点我加1</button>
    <h3>son</h3>
  </div>
</template>

<script lang="ts">
/*
  beforeCreate  -> setup()
  created       -> setup()
        + vue3的组合式生命周期优先执行
*/
import {
  onBeforeMount, // 在组件挂载之前执行的函数
  onMounted,
  onBeforeUpdate, // 在组件修改之前执行的函数
  onUpdated,
  onBeforeUnmount, // 在组件卸载之前执行的函数
  onUnmounted,
  ref,
} from "vue";
export default {
  name: "son",
  beforeCreate() {
    console.log("+++beforeCreate+++");
  },
  created() {
    console.log("+++created+++");
  },
  beforeMount() {
    console.log("+++beforeMount+++");
  },
  mounted() {
    console.log("+++mounted+++");
  },
  beforeUpdate() {
    console.log("+++beforeUpdate+++");
  },
  updated() {
    console.log("+++updated+++");
  },
  beforeDestroy() {
    console.log("+++beforeDestroy+++");
  },
  destroyed() {
    console.log("+++destroyed+++");
  },
  activated() {
    console.log("+++activated+++");
    //进入页面后触发
  },
  deactivated() {
    //离开页面后触发
    console.log("+++deactivated+++");
  },
  errorCaptured() {
    //错误调用
    console.log("+++errorCaptured+++");
  },
  setup() {
    console.log("----setup----");
    onBeforeMount(() => {
      console.log("---onBeforeMount---");
    });
    onMounted(() => {
      console.log("---onMounted---");
    });
    onBeforeUpdate(() => {
      console.log("---onBeforeUpdate---");
    });
    onUpdated(() => {
      console.log("---onUpdated---");
    });
    onBeforeUnmount(() => {
      console.log("---onBeforeUnmount---");
    });
    onUnmounted(() => {
      console.log("---onUnmounted---");
    });

    let sum = ref(0);
    return {
      sum,
    };
  },
};
</script>

<style lang="scss" scoped>
.son {
}
</style>
