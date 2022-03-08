<template>
    <div class="studywatch">
        <h3>当前求和为：{{sum}}</h3>
        <button @click="sum++">点我+1</button>
        <h3>{{msg}}</h3>
        <button @click="msg+='!'">点我+!</button>
        <h3>姓名：{{person.name}}</h3>
        <h3>年龄：{{person.age}}</h3>
        <h3>薪资：{{person.job.j1.salary}}k</h3>
        <button @click="person.name+='~'">点我+!</button>
        <button @click="person.age++">点我+!</button>
        <button @click="person.job.j1.salary++">涨薪</button>
    </div>
</template>

<script>
/*
    vue3的watch属性
        ==>监听reactive所定义的响应式数据是：oalVal无法正确获取，强制开启了深度监听（deep配置失效）
        ==>监听reactvie定义的响应式数据中的某个属性时：deep配置有效
    + watchEffect
        ==>不说是监听谁

*/
import {ref,reactive,watch,watchEffect } from "vue";
export default {
    setup () {
        //属性
        let sum = ref(0)
        let msg = ref('你好啊')
        let person = reactive({
            name:"小溪流",
            age:18,
            job:{
                j1:{
                    salary:20
                }
            }
        })

        //情况一：监视ref所定义的响应式数据
        /* watch(sum,(newVal,oldVal)=>{
            console.log(newVal)
              console.log(oldVal)
        },{immediate:true}) */
        
        //情况二:监视ref多定义的多个响应式数据
       /*  watch([sum,msg],(newVal,oldVal)=>{
            console.log(newVal)
              console.log(oldVal)
        },{immediate:true}) */

        //情况三：reactive定义的一个响应式数据。注意：此处无法正确的获取oldVal;强制开启了深度监听deep:true
        // watch(person,(newVal,oldVal)=>{
        //     console.log(newVal)
        //     console.log(oldVal)
        // })

        //情况四：监听reactive所定义的一个响应式数据中的某个属性
        // watch(()=>person.age,(newVal,oldVal)=>{
        //     console.log(newVal)
        //     console.log(oldVal)
        // })

        //情况五：监听reactive所定义的一个响应式数据中的某些属性
        // watch([()=>person.age,()=>person.name],(newVal,oldVal)=>{
        //     console.log(newVal)
        //     console.log(oldVal)
        // })

        //特殊情况
        /* watch(()=>person.job,(newVal,oldVal)=>{
            console.log(newVal)
            console.log(oldVal)
        },{deep:true})  //此处由于监听的是reactive所定义的对象中的某个属性，所以deep生效。 */



        //两种解决办法
        //用ref定义的复杂数据类型
            //{deep：true}
            //person.value
        // watch(person,(newVal,oldVal)=>{
        //     console.log(newVal)
        //     console.log(oldVal)
        // })


        watchEffect(()=>{
            const x1 = sum.value  //所依赖的数据发生变化  过程
            console.log("watchEffect所指定的回调执行了！")
        })



        return{
           sum,
           msg,
           person
        }
    }
}
</script>

<style lang="scss" scoped>
.studywatch{

}
</style>