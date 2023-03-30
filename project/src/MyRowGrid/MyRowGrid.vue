<template>
	<div class="row_element_grid">
		<div class="row_content_grid">
			<MyImage id="img_grid_0" src="https://picsum.photos/id/0/5000/3333" class="img-thumbnail image__grid" alt=""/>
			<p id="text_name_grid_0" class="text text__grid">Alejandro Escamilla</p>
			<p id="text_data_grid_0" class="text text__grid">0</p>
		</div>
	</div>

</template>
<script>
import MyImage from '@/MyImage/MyImage';

export default {
	components: { 
		MyImage
	}
}
</script>
<style scoped>
	@import "./MyRowGrid.css";
</style>