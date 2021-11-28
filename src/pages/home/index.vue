<template>
  <div class="home">
    <img src="../../assets/logo.png" />
    <el-button type="primary">el-button</el-button>
    <el-button type="success" round>Success</el-button>
    <div>{{ mine }}</div>
    <div>{{ obj.name }}</div>
    <div>{{ store.state.nums }}</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive } from "vue";
import { useStore } from "vuex"; //页面上引入vuex
import { ElButton } from "element-plus";
export default defineComponent({
  name: "home",
  components: { ElButton },
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
});
</script>

<style lang="css" scoped>
.home {
  color: #000;
}
</style>