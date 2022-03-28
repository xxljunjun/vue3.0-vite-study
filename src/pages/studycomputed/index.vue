<template>
  <h3>一个人的信息</h3>
  <input type="text" v-model="person.firstName" />
  <input type="text" v-model="person.lastNmae" />
  <br />
  <input type="text" v-model="person.allName" />
</template>

<script>
/*
  vue3的computed组合api
    + vue3的计算属性可以考虑读和写；可以接受一个对象或者一个函数作为参数
    + computed(()=>{})
    + computed({get(){},set(val){}})
*/
import { computed, reactive } from "vue";
export default {
  name: "studycomputed",
  data(){
    return{
      myname:"小溪流",
    }
  },
  setup() {
    //属性
    let person = reactive({
      firstName: "张",
      lastNmae: "三",
    });


    //计算属性简写（没有考虑计算属性被修改的情况）
    // person.allName = computed(()=>{
    //   return person.firstName + "-" + person.lastNmae;
    // });


    //计算属性完整写法（考虑读和写）
    person.allName = computed({
      get() {
        return person.firstName + "-" + person.lastNmae;
      },
      set(val) {
        const nameArr = val.split("-");
        person.firstName = nameArr[0];
        person.lastNmae = nameArr[1];
      },
    });


    return {
      person,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>