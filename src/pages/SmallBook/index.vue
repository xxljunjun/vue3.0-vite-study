<template>
  <div class="SmallBook">
    <TopBar @on-change="changTab"/>
    <div class="content" v-show="currentIdx ==1">
     <find/>
    </div>
    <div class="content" v-show="currentIdx ==2">
     <care/>
    </div>
    <div class="content" v-show="currentIdx ==3">
     <location/>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref,markRaw } from "vue";
import TopBar from "./components/topBar.vue"
import find from "./find.vue"
import care from "./care.vue"
import location from "./location.vue"
export default {
  name: "SmallBook",
  components:{
    TopBar,
    find,
    care,
    location
  },
  setup() {
    let currentIdx = ref(1)
    const changTab = (val)=>{
      currentIdx.value = val
    }
    return {
      currentIdx,
      changTab
    };
  },
};
</script>

<style lang="scss" scoped>
.SmallBook {
  .content{

  }
}
</style>