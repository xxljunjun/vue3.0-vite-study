<template>
  <div class="studyotherapi">
    <h3>{{ sum }}</h3>
    <button @click="sum++">点我改变sum</button>
    <h3>{{ name }}</h3>
    <h3>{{ job.j1.salary }}</h3>
    <h3>{{ person.car }}</h3>
    <button @click="name += '!'">点我改变name</button>
    <button @click="job.j1.salary += '!'">点我改变salary</button>
    <button @click="addCar">添加一辆车</button>
      <button @click="person.car.name='奔驰'">修改车名</button>
        <button @click="person.car.price='11w'">修改价格</button>
  </div>
</template>

<script>
/*
    + shallowReactive与reactive的区别
        ==>只考虑对象的最外层数据的响应式（浅响应式）
    + shallowRef与ref的区别
        ==>只处理基本数据类型的响应式，不进行对象类型的响应式处理
*/
/*
    + readonly
        ==>保护数据不被修改
    + shallowReadonly
        ==>只保护第一层不被修改
    + 应用：不希望数据别修改时；别人组件传过来的，保护起来不被修改
*/
/*
    + toRaw
        ==>作用：将一个由  reactive生成的响应式对象  转为  普通对象
        ==>使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新
    + markRaw
        ==>作用：标记一个对象，使其永远不会再成为响应式数据
        ==>应用场景：1、有些值不应该被设置成响应式；例如第三方类库。2、当渲染具有不可变数据源的大列表时，跳过响应式可以提高性能。
        
*/
/*
  isRef：检查一个值是否为一个ref对象
  isReactive：检查一个对象是否是由reactive创建的响应式代理
  isReadonly：检查一个对象是否是由readonly创建的只读代理
  isProxy：检查一个对象是否是由reactive或者readonly方法创建的代理
*/
/*
  Fragment：碎片
    <Fragment></Fragment>
*/
import { reactive, toRefs, ref,markRaw } from "vue";
export default {
  name: "studyotherapi",
  setup() {
    let person = reactive({
      name: "小溪流",
      age: 18,
      job: {
        j1: {
          salary: "18k",
        },
      },
    });
    let sum = ref(0);

    function addCar(){
        let car =  {name:"宝马",price:"40w"}
        person.car = markRaw(car)  //标记一个对象，使其永远不会再成为响应式数据
    }

    return {
        addCar,
        person,
      sum,
      ...toRefs(person),
      
    };
  },
};
</script>

<style lang="scss" scoped>
.studyotherapi {
}
</style>