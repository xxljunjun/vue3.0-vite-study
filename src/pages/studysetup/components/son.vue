<template>
    <div>
     <h3>{{str}}</h3>
     <h3 @click="emitFather">点我触发emit</h3>
     <h3>{{person}}</h3>
     <!-- <slot></slot>
      <slot name='xxl'></slot> -->
    </div>
</template>

<script>
/*
    新增的组合api
        + emits：@click.native的取消了用emits代替了
*/
import {ref} from "vue"
export default {
    props:['person'],
    emits:['changePerson'],
    setup (props,context) {
        //属性
        let str= ref('我是studysetup的子组件')
        console.log("son组件的props",props)
        console.log("son组件的context",context)

        //方法
        function emitFather(){
            context.emit("changePerson")
        }
        return {
            str,
           emitFather
        }
    }
}
</script>

<style lang="scss" scoped>

</style>