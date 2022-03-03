<template>
  <h3>一个人的信息</h3>
  <input type="text" v-model="person.firstName" />
  <input type="text" v-model="person.lastNmae" />
  <br />
  <input type="text" v-model="person.allName" />
</template>

<script>
import { computed, reactive } from "vue";
export default {
  name: "computed",
  // computed: {
  //   allName() {
  //     return this.person.firstName + this.person.lastNmae;
  //   },
  // },
  setup(props, context) {
    let person = reactive({
      firstName: "张",
      lastNmae: "三",
    });
    person.allName = computed({
      get() {
        return person.firstName + "-" + person.lastNmae;
      },
      set(val) {
        const nameArr = val.split("-");
        person.firstName = nameArr[0];
        person.lastNmae = nameArr[1];
      },
    });
    return {
      person,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>