<template>
  <div class="son">
    我是son
    <Teleport to="body">
      <div class="mask" v-if="isShow">
        <div class="dialog">
          是否删除数据
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </Teleport>

    <button @click="isShow = true">点我打开弹窗</button>
  </div>
</template>

<script>
/*
    利用Teleport组件传出
        <Teleport>
            弹窗内容
        </Teleport>
*/
import { ref } from "vue";
export default {
  setup() {
    let isShow = ref(false);

    return {
      isShow,
    };
  },
};
</script>

<style lang="scss" scoped>
.son {
  background: green;
}
.dialog {
  background: pink;
  position: absolute;
  width: 200px;
  height: 200px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mask {
  background: rgba($color: #000000, $alpha: 0.5);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>