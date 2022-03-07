<template>
    <div class="studysetup">
        <Son :person="person" @changePerson="changePerson">
            <!-- <template v-slot:default>111</template>
             <template v-slot:xxl>222</template> -->
        </Son>
    </div>
</template>

<script lang="ts">
/*
    setup是vue3中的一个新的配置项，值是一个函数；
    setup函数接收两个参数props和context
        + props
            ==>在setup中拿到父组件传递过来的值
        + context
            ==>emit:用于触发自定义事件
            ==>slots:父组件中的插槽在子组件中没有使用的时候。slots就是一个兜底的。
            ==>attrs:如果父组件传递的参数没有被子组件props接受。attrs就是一个兜底的。
        + 返回值
            ==>可以返回一个对象；也可以返回一个函数
            return ()=>h('h1','小溪流')
        + setup不能访问到vue2.x的配置；如果重名setup优先
        + setup不能是一个async函数
*/ 

/*
    ref和reactive
        + ref
            ==>ref经过加工得到的是refimpl对象reference和implement引用实现对象
            ==>refimpl:引用对象
            ==>在模板中不需要.value;在函数中需要.value
            ==>ref可以对基本数据类型Object.defineProperty()的get和set实现响应式的，也可以对复杂数据类型;底层也是通过proxy对象实现响应的。
        + reactive
            ==>定义一个对象类型的响应式数据；是深层次的
            ==>原理是基于ES6的proxy实现的，通过代理对象操作源对象内部数据实现响应式的。
            ==>解决vue2.0响应式存在的问题
				新增对象属性、删除属性，界面不会更新
					this.$set()
					Vue.set()
				直接通过下标修改数据，界面不会自动更新
					this.$set()
					push、pop、unshilft、shift

*/ 
import Son from './components/son.vue'
import {reactive,h,ref} from "vue"
export default {
    components:{
        Son
    },
    setup (props,context) {
        //属性
        console.log(props)
        console.log(context)
        let person = ref({
            name:"小溪流",
            age:16
        })
        let sex = ref("男")
        console.log(sex)

        //方法
        function changePerson(){
            console.log("我被子组件触发了！")
        }


        return {
            person,
            changePerson
        }
        // return ()=>h('h1','小溪流')
    }
}
</script>

<style lang="scss" scoped>
.studysetup{
    color: #000;
}
</style>