<template>
  <div class="studycustomref">
    <input type="text" v-model="keyword" />
    {{keyword}}
  </div>
</template>

<script>
/*
    + customRef
        ==>创建一个自定义的ref,并对其依赖项跟踪和更新触发进行显式控制
*/
import { ref,customRef } from "vue";
export default {
  name: "studycustomref",
  setup() {
    // let keyword = ref("hello"); //使用vue提供的ref
    let keyword = myRef("hello")  //使用程序员自定义的ref

    function myRef(value, delay = 500) {
      let timeout;
      return customRef((track, trigger) => {
        return {
          get() {
            track();
            console.log("有人读取了")
            return value;
          },
          set(newValue) {
            console.log("有人修改了",newValue)
            clearTimeout(timeout);
            timeout = setTimeout(() => {
              value = newValue;
              trigger();
            }, delay);
          },
        };
      });
    }
    return {
      keyword:myRef('hello')
    };
  },
};
</script>

<style lang="scss" scoped>
.studycustomref {
}
</style>
