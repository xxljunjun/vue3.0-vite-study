<template>
    <div class="studytoref">
        <h3>{{person}}</h3>
        <h3>{{name}}</h3>
        <h3>{{job.j1.salary}}</h3>
        <button @click="name+='!'">点我改变name</button>
         <button @click="job.j1.salary+='!'">点我改变salary</button>
        <button @click="person.name+='!'">点我改变person</button>
    </div>
</template>

<script>
/*
    toref
        + 作用：创建一个ref对象，其value值指向另一个对象中的某个属性
        + 语法：const name = toref(person,name) 
        + 应用：将响应式对象中的某个属性单独提供给外部使用
*/
import {reactive,toRef,toRefs} from "vue"
export default {
    name:'studytoref',
    setup () {
        let person = reactive({
            name:"小溪流",
            age:18,
            job:{
                j1:{
                    salary:'18k'
                }
            }
        })
        // let name = toRef(person,'name')
        // let salary = toRef(person.job.j1,'salary')
        // console.log(">>>",name)  //ObjectRefImpl对象 
        const x = toRefs(person)
        console.log(x)  //批量处理多个ref对象

        return {
            person,
            ...toRefs(person)
            // name,
            // salary
        }
    }
}
</script>

<style lang="scss" scoped>
.studytoref{

}
</style>