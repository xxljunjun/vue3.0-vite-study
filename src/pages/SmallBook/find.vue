<template>
  <div class="find">
    <div class="content">
      <div class="topSearch">
        <span
          :class="[{ isChoose: item.isChoose }]"
          class="item"
          v-for="item in searchArr"
          :key="item.id"
          @click="clickTxt(item.id)"
          >{{ item.txt }}</span
        >
      </div>
      <div class="arrow">
        <el-icon @click="drawer = true"><ArrowDownBold /></el-icon>
        <el-drawer
          v-model="drawer"
          title="I am the title"
          :with-header="false"
          direction="ttb"
        >
          <channel />
        </el-drawer>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, markRaw } from "vue";
import channel from "./components/channel.vue";
export default {
  name: "find",
  components: {
    channel,
  },
  setup() {
    let drawer = ref(false)
    let searchArr = reactive([
    { id: 1, txt: "推荐", isChoose: true },
        { id: 2, txt: "直播", isChoose: false },
        { id: 3, txt: "男士理容", isChoose: false },
        { id: 4, txt: "穿搭", isChoose: false },
        { id: 5, txt: "护肤", isChoose: false },
        { id: 6, txt: "好物", isChoose: false },
        { id: 7, txt: "情感", isChoose: false },
        { id: 8, txt: "推荐", isChoose: false },
        { id: 9, txt: "直播", isChoose: false },
        { id: 10, txt: "男士理容", isChoose: false },
        { id: 11, txt: "穿搭", isChoose: false },
        { id: 12, txt: "护肤", isChoose: false },
        { id: 13, txt: "好物", isChoose: false },
        { id: 14, txt: "情感", isChoose: false },
    ])
    //点击频道
    const clickTxt = (id) => {
      searchArr.forEach((val) => {
        if (val.id == id) {
          val.isChoose = true;
        } else {
          val.isChoose = false;
        }
      });
    };
    return {
      drawer,
      searchArr,
      clickTxt,
    };
  },
};
</script>

<style lang="scss" scoped>
.find {
  :deep(.el-overlay) {
    margin-top: 50px;
  }
  .content {
    padding-left: 20px;
    position: relative;
    padding-right: 40px;
    .topSearch {
      display: flex;
      flex-wrap: nowrap;
      overflow: auto;
      width: 100%;
      white-space: nowrap;
      height: 40px;
      line-height: 40px;

      .item {
        display: inline-block;
        margin-right: 40px;
        color: rgb(105, 105, 105);
      }
      .isChoose {
        color: #000;
      }
    }
    .arrow {
      position: absolute;
      right: 0;
      top: 0;
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
