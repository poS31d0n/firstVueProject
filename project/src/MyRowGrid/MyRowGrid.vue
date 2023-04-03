<template>
	<div class="row_element_grid">
		<div class="row_content_grid" v-for="cont in data.masObj">
			<MyImage v-if="cont.url" :src="cont.url" class="image-grid" alt=""/>
			<MyImage v-else class="image-grid" alt=""/>
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
	@import "./MyRowGrid.css";
</style>