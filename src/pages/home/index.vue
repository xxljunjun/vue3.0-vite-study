<template>
  <div class="home">
     <button @click="toPage(item.id)" v-for="item in obj" :key="item.id">{{item.txt}}</button>
  </div>
</template>

<script lang='ts'>
import {reactive } from "vue";
import {useRouter} from 'vue-router';
export default {
  name: "home",
  setup() {
    //属性
    const obj = reactive([
      {id:1,txt:"学习setup"},
      {id:2,txt:"学习vue3的computed"},
      {id:3,txt:"学习vue3的watch"},
    ])
    const router = useRouter()

    //方法
    function toPage(val) {
      switch (val) {
        case 1:
          router.push({path:'/studysetup'})
          break;
        case 2:
          router.push({path:'/studycomputed'})
          break;
        case 3:
          router.push({path:'/studywatch'})
          break;
      }
    }
    return {
      obj,
      toPage
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  color: #000;
  button{
    margin-right: 20px;
  }
}
</style>