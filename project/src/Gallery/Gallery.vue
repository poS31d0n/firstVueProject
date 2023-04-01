<template>
	<div class="menu">
		<div class="information">
			<p class="text text-uppercase text__info">Waiting</p>
		</div>
		<div class="flex_my">
			<MyRowFlex :data="data"></MyRowFlex>
		</div>
		<div class="grid_my">
			<MyRowGrid :data="data"></MyRowGrid>
		</div>
	</div>
</template>

<script>
import MyRowFlex from '@/MyRowFlex/MyRowFlex'
import MyRowGrid from '@/MyRowGrid/MyRowGrid'

export default {
  components: { 
		MyRowFlex,
		MyRowGrid
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
	@import "./Gallery.css";
</style>