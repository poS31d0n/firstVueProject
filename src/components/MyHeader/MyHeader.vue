<template>
  <header>
    <form @submit.prevent>
      <MyInput
        v-model="countElements"
        type="number"
        placeholder="Введите количество картинок"
      />
      <MyButton @click="buttonClick" name="Search" />
    </form>
  </header>
</template>

<script>
import { MyInput, MyButton } from "@/UI";

export default {
  name: "MyHeader",
  components: { MyInput, MyButton },
  date() {
    return {
      countElements: null,
    };
  },
  methods: {
    buttonClick() {
      this.$emit("getElement", this.countElements);
      this.countElements = null;
    },
  },
};
</script>

<style scoped>
@import "./MyHeader.css";
</style>
