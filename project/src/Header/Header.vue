<template>
	<form @submit.prevent>
		<my-input v-model="num" type="number" placeholder="Введите количество картинок"></my-input>
		<my-button @click="buttonClick">Search</my-button>
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
	data() {
		return {
			num: '',
		}
	},
	methods: {
		getNum(score) {
			this.num = score;
		},
		buttonClick() {
			if (this.num >= 0)
				this.$emit('addNum', this.num);
			this.num = '';
		}
	}
};
</script>

<style scoped>
@import "./Header.css";
</style>
