<template>
  <h1>proxy</h1>
  <Son msg="小溪流" :age="18" @sayHello="sayHello">
    <template v-slot:txt_1>插槽1</template>
    <template v-slot:txt_2>插槽2</template>
  </Son>
</template>

<script>
import { h, ref, reactive } from "vue";
import Son from "./son.vue";
export default {
  name: "proxy",
  components: { Son },
 
  setup() {
    let person = reactive({
      name: "张三",
      age: 18,
    });
    function sayHello(val) {
      console.log(`子组件对父组件说了句${val}`);
    }

    return {
      person,
      sayHello,
    };
  },
};
</script>
<style lang="css">
</style>
