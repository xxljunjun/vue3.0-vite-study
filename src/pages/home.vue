<template>
  <div class="home">
    <div>{{ mine }}</div>
    <div>{{ obj.name }}</div>
    <div>{{ store.state.nums }}</div>
  </div>
</template>

<script lang='ts'>
import { ref, reactive } from "vue";
import { useStore } from "vuex"; //页面上引入vuex
export default {
  name: "home",
  setup() {
    //获取store实例
    let store = useStore();
    //获取vuex state中的number
    console.log(store.state); //输出1
    //ref--用来标记简单类型数据
    //reactive—标记复杂类型数据(深度响应式)
    let mine = ref("xxl");
    let obj = reactive({
      name: "xxljunjun",
      age: 18,
    });
    return {
      mine,
      obj,
      store,
    };
  },
};
</script>

<style lang="css" scoped>
.home {
  color: #000;
}
</style>