<template>
  <div class="studysuspense">
    我是suspense组件
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback> loadiing....... </template>
    </Suspense>
  </div>
</template>

<script>
/*
    异步组件结合Suspense
    + Suspense
        ==>底层是用插槽实现的
        ==>Suspense结合异步组件,setup可以返回一个promise对象,可以使用async
*/
// import Child from './components/child.vue'
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./components/child.vue")); //异步引入
export default {
  components: {
    Child,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.studysuspense {
  width: 400px;
  padding: 10px;
  background: red;
}
</style>