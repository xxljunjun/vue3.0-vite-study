<template>
    <div class="studycustomref">
        <input type="text" v-model="keyword">
        <input type="text" v-model="keyword_1">
    </div>
</template>

<script>
/*
    + customRef
        ==>创建一个自定义的ref,并对其依赖项跟踪和更新触发进行显式控制
*/
import {ref} from 'vue'
export default {
    name:'studycustomref',
    setup () {
        // let keyword = ref('hello')  //使用vue提供的ref
        let keyword = myRef("hello")  //使用程序员自定义的ref
        return {
            keyword
        }
    }
}
</script>

<style lang="scss" scoped>
.studycustomref{

}
</style>