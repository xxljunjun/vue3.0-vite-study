<template>
  <h3>{{ msg }}</h3>
  <h3>{{ age }}</h3>
  <slot name="txt_1"></slot>
  <slot name="txt_2"></slot>
  <button @click="clickThing">点我触发父组件的自定义事件</button>
</template>

<script>
/*
    vue3.0的setup
        + props
        + context
            ==>emit:触发父组件的自定义事件
            ==>slots：
            ==>attrs：父组件传递的参数子组件未接收父子组件传值
*/
export default {
  name: "son",
  props: ["msg", "age"],
  emits: ["sayHello"],
  setup(props, context) {
    console.log("son组件的props", props);
    console.log("son组件的context---slots", context.slots);
    function clickThing() {
      context.emit("sayHello", "你好！");
    }
    return {
      clickThing,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>