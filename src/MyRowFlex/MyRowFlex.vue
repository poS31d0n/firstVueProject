<template>
	<div class="row_element_flex" >
		<div class="row_content_flex" v-for="cont in data.masObj">
			<MyImage v-if="cont.url" :src="cont.url" class="image-flex" alt=""/>
			<MyImage v-else class="image-flex" alt=""/>
			<p class="text">{{ cont.name }}</p>
			<p class="text">{{ cont.id }}</p>
		</div>
	</div>
</template>
<script>
import MyImage from '@/MyImage/MyImage';

export default {
	components: { 
		MyImage
	},
	props: {
		data: {
			type: Object,
			required: true
		}
	}
}
</script>
<style scoped>
	@import "./MyRowFlex.css";
</style>