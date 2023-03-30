<template>
	<form @submit.prevent>
		<my-input placeholder="Введите количество картинок"></my-input>
		<my-button>Search</my-button>
	</form>
</template>

<script>
import MyButton from "@/MyButton/MyButton";
import MyInput from "@/MyInput/MyInput";

export default {
	components: {
		MyButton,
		MyInput,
	},
};
</script>

<style scoped>
@import "./Header.css";
</style>
