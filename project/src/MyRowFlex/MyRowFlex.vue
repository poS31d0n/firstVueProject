<template>
	<div class="row_element_flex" >
		<div class="row_content_flex" v-for="cont in contents">
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
	data() {
		return {
      contents: [
        { id: 1, name: 'AAA'},
        { id: 2, name: 'AAA'},
        { id: 3, name: 'AAA'},
        { id: 4, name: 'AAA'},
        { id: 5, name: 'AAA'},
        { id: 6, name: 'AAA'},
        { id: 7, name: 'AAA'},
        { id: 8, name: 'AAA'},
        { id: 9, name: 'AAA'},
        { id: 10, name: 'AAA'},
        { id: 11, name: 'AAA'},
        { id: 12, name: 'AAA'}
      ]
    }
	}
}
</script>
<style scoped>
	@import "./MyRowFlex.css";
</style>