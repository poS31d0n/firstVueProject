<template>
	<div class="display__switch">
    <my-button class="btn-display">flex</my-button>
    <my-button class="btn-display">grid</my-button>
  </div>
</template>

<script>
import MyButton from '@/MyButton/MyButton';

export default {
  components: { 
    MyButton 
  }
}
</script>

<style scoped>
	@import "./MyDisplay.css";
</style>