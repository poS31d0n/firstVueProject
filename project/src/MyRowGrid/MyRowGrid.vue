<template>
	<div class="row_element_grid">
		<div class="row_content_grid" v-for="cont in data.masObj">
			<MyImage id="img_grid_0" src="https://picsum.photos/id/0/5000/3333" alt=""/>
			<p id="text_name_grid_0" class="text">{{ cont.name }}</p>
			<p id="text_data_grid_0" class="text">{{ cont.id }}</p>
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