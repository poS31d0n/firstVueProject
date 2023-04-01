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

// import setPicsumPhoto from './setPicsumPhotos'

import asd from './helpers/asd'

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
				masObj: [
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
	},
	methods: {
		giveRadio(typeRadio) {
			this.data.radio = typeRadio;
		},
		async getNum(scoreImages) {
			this.data.num = Number(scoreImages);	
			// console.log(this.data.num);
			// console.log(this.data.radio);
			// this.data.masObj = await getNewCharacters(this.data.radio, this.data.num);
			await getRickAndMortyCharacters()
			console.log(this.masObj);
			sayHi();
		}
	},
	created() {
		console.log('www');
	}
}
</script>

<style>
	@import "./App.css";
</style>
