<template>
    <div class="studyhook">
        <h3>{{sum}}</h3>
        <h3>打点的坐标：{{point.x}}---{{point.y}}</h3>
    </div>
</template>

<script>
/*
    自定义的hook函数
        + 本质是一个函数，把setup函数使用的Composition Api进行了封装
        + 类似于vue2中的mixin
        + 自定义hook的优势：复用代码，让setup中的逻辑更清晰易懂
*/
import {ref} from "vue"
import usepoint from '../../hook/usepoint.js'
export default {
    setup () {
    //利用hook分离功能逻辑
      let point = usepoint()

      let sum = ref(0)
        return {
           point,
           sum
        }
    }
}
</script>

<style lang="scss" scoped>
.studyhook{

}
</style>