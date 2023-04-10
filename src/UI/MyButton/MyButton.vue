<template>
  <button v-bind="$attrs" class="btn">
    {{ name }}
  </button>
</template>
<script>
export default {
  name: "MyButton",
  props: {
    name: {
      default: "",
      type: String,
    },
  },
};
</script>
<style scoped>
@import "./MyButton.css";
</style>
