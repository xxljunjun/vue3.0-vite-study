<template>
  <div class="tabBar">
    <div v-for="(item,index) in 4" :key='index' class="item" @click="goToPage(index)">点击跳转</div>
  </div>
</template>

<script lang='ts'>
export default {
  name: "App",
  data() {
    return {
      
    };
  },
  components: {
    
  },
  methods:{
    goToPage(id){
      console.log(id)//01234
    }
  }
};
</script>
<style lang="css">
.tabBar{
  height: 100px;
  width: 100%;
  background: #f5f5f5;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
}
.item{
  width: 100px;
}
</style>
