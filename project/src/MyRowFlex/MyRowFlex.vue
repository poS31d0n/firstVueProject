<template>
	<div class="row_element_flex" >
		<div class="row_content_flex" v-for="cont in data.masObj">
			<MyImage :id="cont.id" src="https://picsum.photos/id/0/5000/3333" class="img-thumbnail image" alt=""/>
			<p id="text_name_flex_0" class="text">{{cont.name}}</p><p id="text_data_flex_0" class="text">{{ cont.id }}</p>
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