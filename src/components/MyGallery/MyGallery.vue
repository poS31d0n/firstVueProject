<template>
  <main>
    <div class="display">
      <MyButton
        v-for="button in styleButtons"
        @click="handleClick(button.value)"
        :name="button.name"
        :key="button.value"
        :disabled="button.value === styleType"
        class="btn-display"
      />
    </div>
		<div :class="['gallery', styleType]">
			<MyImage :images="images" :styleType="styleType"/>
		</div>
  </main>
</template>

<script>
import { MyButton, MyImage } from "@/UI";
export default {
  name: "MyGallery",
  components: { MyButton, MyImage },
  props: {
    images: {
      default: () => [],
      type: Array,
    },
  },
  data() {
    return {
      styleType: "flex",
    };
  },
  methods: {
    handleClick(type) {
      this.styleType = type;
    },
  },
  computed: {
    styleButtons() {
      return [
        { name: "Флекс", value: "flex" },
        { name: "Гриды", value: "grid" },
      ];
    },
  },
};
</script>

<style scoped>
@import "./MyGallery.css";
</style>
