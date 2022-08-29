<template>
  <router-view></router-view>
  <div id="app">
    <TabBar />
  </div>
</template>

<script lang="ts">
import TabBar from "./components/TabBar.vue";
import { reactive } from "vue";
export default {
  components: {
    TabBar,
  },
  setup() {
    return {};
  },
};
</script>
<style scoped lang="scss">
#app {
}
</style>
