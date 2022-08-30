<template>
  <div class="tabBar">
    <div class="ulbox">
      <div v-for="item in menuArr" :key="item.id" class="item">
        <router-link :to="item.path">
            {{ item.txt }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
export default {
  name: "App",
  setup() {
    const menuArr = reactive([
      { id: 1, txt: "vue3学习",path:'/' },
      { id: 2, txt: "小红书首页",path:'/smallbook' },
      { id: 3, txt: "暂无" ,path:'/studycomputed'},
      { id: 4, txt: "暂无" ,path:'/studywatch'},
    ]);
    return {
      menuArr,
    };
  },
};
</script>
<style scoped lang="scss">
.tabBar {
  background: #ccc;
  height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
    //路由激活时添加的css属性
//   .router-link-active {
//     background: red;
//     color: #fff;
//   }
  .router-link-exact-active{
    background: green;
    color: #fff;
  }
  .ulbox {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    .item {
      list-style: none;
      a{
        text-decoration: none;
        height: 100%;
      }
    }
  }
}
</style>
