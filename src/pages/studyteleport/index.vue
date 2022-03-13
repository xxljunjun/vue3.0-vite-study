<template>
    <div class="grandfather">
        我是爷爷
        <Child/>
    </div>
</template>

<script>
import Child from './components/child.vue'
export default {
    components:{
        Child
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.grandfather{
    width: 400px;
    background: red;
    padding:10px;
}
</style>