<template>
	<div class="radios" v-for="radio in radios">
		<MyInput class="form-check-input" @click="() => typeRadio(radio.id)" :id="radio.id" :checked="radio.check" type="checkbox"></MyInput>
		<label class="form-check-label text" for="flexCheckDisabled">{{ radio.name }}</label>
	</div>
</template>

<script>
import MyInput from '@/MyInput/MyInput';

export default {
	components: {
		MyInput
	},
	data() {
			return {
					radios: [
							{ id: "picsum", name: "Picsum", check: "checked" },
							{ id: "rick", name: "Rick" },
							{ id: "pokemon", name: "Pokemon" },
					]
			};
	},
	methods: {
		typeRadio(name) {
			const checks = document.querySelectorAll(".form-check-input");
				checks.forEach(function (ch) {
					ch.addEventListener("click", function () {
						let that = this;
						checks.forEach(function (ch2) {
						if (ch2 != that)
							ch2.checked = false;
						});
					});
				});
			this.$emit("giveRadio", name);
		}
	},
  // updated() {
  //   console.log('1');
    // const checks = document.querySelectorAll(".form-check-input");
		// 		checks.forEach(function (ch) {
		// 			ch.addEventListener("click", function () {
		// 				let that = this;
		// 				checks.forEach(function (ch2) {
		// 				if (ch2 != that)
		// 					ch2.checked = false;
		// 				});
		// 			});
		// 		});
		// 	this.$emit("giveRadio", name);
  // }
}
</script>

<style scoped>
	@import "./MyRadio.css";
</style>