<template>
	<div class="menu">
		<div class="information">
			<p class="text text-uppercase text__info">Waiting</p>
		</div>
		<div class="flex_my">
			<MyRowFlex></MyRowFlex>
		</div>
		<div class="grid_my">
			<MyRowGrid></MyRowGrid>
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
	}
}
</script>

<style scoped>
	@import "./Gallery.css";
</style>