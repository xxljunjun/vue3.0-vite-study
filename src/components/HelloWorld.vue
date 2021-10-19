<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    modelValue: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  computed: {},
};
</script>
