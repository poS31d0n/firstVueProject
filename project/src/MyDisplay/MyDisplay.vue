<template>
	<div class="display__switch">
    <my-button @click="() => switchDisplay('flex', 'grid')" class="btn-display" id="flex">flex</my-button>
    <my-button @click="() => switchDisplay('grid', 'flex')" class="btn-display" id="grid">grid</my-button>
  </div>
</template>

<script>
import MyButton from '@/MyButton/MyButton';

export default {
  components: { 
    MyButton 
  },
  methods: {
    switchDisplay(first, second) {
			let button_1 = document.querySelector(`#${first}`)
			let button_2 = document.querySelector(`#${second}`)
			button_1.style.backgroundColor = "#7F7D9C";
			document.querySelector(`.${first}_my`).style.display = `${first}`;
			button_2.style.backgroundColor = "#0d6efd";
			document.querySelector(`.${second}_my`).style.display = `none`;
		}
  }
}
</script>

<style scoped>
	@import "./MyDisplay.css";
</style>