<template>
  <div>
    <h1>Hello from Vue!</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloVue",
  props: {
    msg: {
      type: String,
      default: "Welcome to Your Vue.js App",
    },
  },
};
</script>
