<template>
  <div class="home">
    <h3>vue3.0的新属性</h3>
    <button @click="toPage(item.id)" v-for="item in obj" :key="item.id">
      {{ item.txt }}
    </button>
    <p>-----------------------------------------------------</p>
    <h3>vue2.0</h3>
    <button @click="toPage_1(item.id)" v-for="item in obj_1" :key="item.id">
      {{ item.txt }}
    </button>

    <el-button @click="goToLogin">登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const obj = reactive([
  { id: 1, txt: "学习setup" },
  { id: 2, txt: "学习vue3的computed" },
  { id: 3, txt: "学习vue3的watch" },
  { id: 4, txt: "学习vue3的生命周期" },
  { id: 5, txt: "学习vue3的HOOK" },
  { id: 6, txt: "学习vue3的toref" },
  { id: 7, txt: "学习vue3的不常用的组合api" },
  { id: 8, txt: "学习vue3的customRef" },
  { id: 9, txt: "学习vue3的teleport" },
  { id: 10, txt: "学习vue3的suspense" },
  { id: 11, txt: "pinia" },
]);
const obj_1 = reactive([{ id: 1, txt: "学习vuex" }]);
const toPage = (val) => {
  switch (val) {
    case 1:
      router.push({ path: "/studysetup" });
      break;
    case 2:
      router.push({ path: "/studycomputed" });
      break;
    case 3:
      router.push({ path: "/studywatch" });
      break;
    case 4:
      router.push({ path: "/studylife" });
      break;
    case 5:
      router.push({ path: "/studyhook" });
      break;
    case 6:
      router.push({ path: "/studytoref" });
      break;
    case 7:
      router.push({ path: "/studyotherapi" });
      break;
    case 8:
      router.push({ path: "/studycustomref" });
      break;
    case 9:
      router.push({ path: "/studyteleport" });
      break;
    case 10:
      router.push({ path: "/studysuspense" });
      break;
      case 11:
    router.push({ path: "/pinia" });
      break;
  }
}
const toPage_1 = (val)=> {
  switch (val) {
    case 1:
      router.push({ path: "/studyvuex" });
      break;
  }
}
const goToLogin = ()=>{
  console.log('goToLogin')
}
</script>

<style lang="scss" scoped>
.home {
  color: #000;
  button {
    margin-right: 20px;
  }
}
</style>
