<template>
  <div class="topBar">
    <div class="flexBox">
      <div class="left">
        <el-icon><ChromeFilled /></el-icon>
      </div>
      <div class="middle">
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="关注" name="care"></el-tab-pane>
          <el-tab-pane label="发现" name="find"></el-tab-pane>
          <el-tab-pane label="深圳" name="location"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="right">
        <el-icon><Search /></el-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref, watch } from "vue";
import type { TabsPaneContext } from "element-plus";
import { useRouter, onBeforeRouteUpdate } from "vue-router";
export default {
  name: "topBar",
  setup(props,context) {
    // console.log('11111',context)
    // console.log('2222',props)
    const router = useRouter();
    let activeName = ref("find");
    // onBeforeRouteUpdate((to) => {
    //   console.log("onBeforeRouteUpdate", to.path);
    // });
    // watch(
    //   () => router.currentRoute.value.path,
    //   (newValue, oldValue) => {
    //     console.log("watch", newValue);
    //     switch (newValue) {
    //       case "/smallbook":
    //         activeName.value = "find";
    //         break;
    //       case "/care":
    //         activeName.value = "care";
    //         break;
    //       case "/location":
    //         activeName.value = "location";
    //         break;
    //     }
    //   },
    //   { immediate: true }
    // );
    const handleClick = (tab: TabsPaneContext, event: Event) => {
      // console.log(tab, event);
      // console.log("切换之后的", activeName.value);
      switch (activeName.value) {
        case "find":
        context.emit('on-change',1)
          break;
        case "care":
        context.emit('on-change',2)
          break;
        case "location":
        context.emit('on-change',3)
          break;
      }
    };
    return {
      activeName,
      handleClick,
    };
  },
};
</script>
<style scoped lang="scss">
.topBar {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: #ccc;
  .flexBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      margin-left: 20px;
    }
    .middle {
    }
    .right {
      margin-right: 20px;
    }
  }
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
}
</style>
