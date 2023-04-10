<template>
  <figure v-for="image in images" :key="image.id" :class="`image-${styleType}`">
    <img v-if="image.url" :src="image.url" :alt="image.name" class="image" />
    <figcaption v-if="image.name">{{ image.name }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: "MyImage",
  props: {
    images: {
      default: () => [],
      type: Array,
    },
    styleType: {
      default: "",
      type: String,
    },
  },
};
</script>

<style scoped>
@import "./MyImage.css";
</style>
