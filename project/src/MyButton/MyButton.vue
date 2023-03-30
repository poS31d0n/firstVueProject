<template>
  <button type="button" class="btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "my-button"
}
</script>

<style scoped>
	@import "./MyButton.css";
</style>
