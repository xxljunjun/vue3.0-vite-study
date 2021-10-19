<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>{{ searchText }}</div>
  <HelloWorld v-model="searchText" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      searchText: "Hello Vue 3.0 + Vite",
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
<style lang="css">
.home {
  color: red;
}
</style>
