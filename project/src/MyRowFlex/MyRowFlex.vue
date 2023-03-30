<template>
	<div class="row_element_flex">
		<div class="row_content_flex">
			<MyImage id="img_flex_0" src="https://picsum.photos/id/0/5000/3333" class="img-thumbnail image" alt=""/>
			<p id="text_name_flex_0" class="text">Alejandro Escamilla</p><p id="text_data_flex_0" class="text">0</p>
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
	@import "./MyRowFlex.css";
</style>