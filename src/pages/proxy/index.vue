<template>
  <h1>proxy</h1>

</template>

<script>
import {h,ref,reactive} from 'vue'
export default {
  name: "proxy",
  setup(){
    //数据
    let person = reactive({
      name:"张三",
      age:18,
      obj:{
        type:"前端工程师",
        salary:"30k"
      }
    })

    //方法
    function  change() {
      //引用对象
      console.log(name)
      person.name = "李四"
      person.age = 20
      person.obj.salary="40k"
    }

    //返回一个对象
    return {
      person,
      change
    }

    //返回一个渲染函数
    // return ()=>h('h1',"小溪流")
  }
};
</script>
<style lang="css">

</style>
