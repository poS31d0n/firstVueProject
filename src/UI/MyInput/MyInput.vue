<template>
  <div class="input">
    <input class="input__search" v-bind="$attrs" :value="modelValue" @input="getInput" />
  </div>
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    label: {
      default: "",
      type: String,
    },
    modelValue: {
      default: "",
      type: String,
    },
  },
  methods: {
    getInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
@import "./MyInput.css";
</style>
