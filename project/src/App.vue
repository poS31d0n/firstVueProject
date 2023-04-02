<template>
	<header>
		<Header @addNum="getNum"></Header>
	</header>
	<main>
		<section class="main__top">
			<MyRadio @giveRadio="giveRadio"></MyRadio>
		</section>
		<section class="main__display">
			<MyDisplay></MyDisplay>
		</section>
		<section class="main__bottom">
			<Gallery :data="data"></Gallery>
		</section>
	</main>
	
</template>

<script>
import Header from './Header/Header';
import MyRadio from './MyRadio/MyRadio';
import MyDisplay from './MyDisplay/MyDisplay';
import Gallery from './Gallery/Gallery';

import getCharacters from './helpers/getCharacters';
import setPicsumPhotos from './helpers/setPicsumPhotos'
import setRickAndMortyCharacters from './helpers/setRickAndMortyCharacters'
import setPokemonCharacters from './helpers/setPokemonCharacters'

export default {
	components: {
			Header,
		MyRadio,
			MyDisplay,
		Gallery
	},
	data() {
		return {
			data: {
				num: '',
				radio: 'picsum',
				masObj: []
			}
		}
	},
	methods: {
		giveRadio(typeRadio, mas) {
			this.data.radio = typeRadio;
			this.data.masObj = mas;
		},
		async getNum(scoreImages) {
			this.data.num = Number(scoreImages);	
			// console.log(this.data.num);
			// console.log(this.data.radio);
			this.data.masObj = await getNewCharacters(this.data.radio, this.data.num);
			// getRickAndMortyCharacters()
			console.log(this.data.masObj);
			// sayHi();
		}
	},
	async created() {
		this.data.masObj = await getNewCharacters(this.data.radio);
	}
}
</script>

<style>
	@import "./App.css";
</style>
