<template>
    <div class="child">
        我是child组件
        {{sum}}
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name:'child',
    async setup () {
        let sum = ref(0)
        let p = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                  resolve({sum})  //返回的是一个被对象包裹的sum
            },1000)
          
        })

        return await p
    }
}
</script>

<style lang="scss" scoped>
.child{
    background: blue;
    height: 100px;
}
</style>