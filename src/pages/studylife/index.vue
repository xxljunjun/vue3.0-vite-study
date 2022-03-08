<template>
  <div class="studylife">
    <h3>生命周期钩子函数</h3>
    <button @click="status = !status">点我！</button>
    <son v-if="status" />
  </div>
</template>

<script lang="ts">
import son from "./components/son.vue";
import { ref } from "vue";
export default {
  name: "studylife",
  components: {
    son,
  },
  setup() {
    let status = ref(true);
    return {
      status,
    };
  },
};
</script>

<style lang="scss" scoped>
.studylife {
}
</style>
