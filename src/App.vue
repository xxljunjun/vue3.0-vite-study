<template>
  <router-view></router-view>
    <TabBar />
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
<style lang="scss">
body,html{
  margin: 0;
  padding: 0;
}
</style>
