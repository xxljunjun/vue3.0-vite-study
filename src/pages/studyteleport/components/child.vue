<template>
    <div class="son">
        我是child
        <Son/>
    </div>
</template>

<script>
import Son from './son.vue'
export default {
    components:{
        Son
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.son{
    background: blue;
    padding: 10px;
}
</style>