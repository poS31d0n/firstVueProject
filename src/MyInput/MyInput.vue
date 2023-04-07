<template>
	<input
		:value="modelValue"
    @input="updateValue"
    class="input"
    :type="type"
    min="1"
	/>
</template>

<script>
export default {
	name: "my-input",
	props: {
    modelValue: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'text'
		},
  },
  methods: {
    updateValue(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
}
</script>

<style scoped>
	@import "./MyInput.css";
</style>