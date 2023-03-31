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
			<Gallery></Gallery>
		</section>
	</main>
	
</template>

<script>

import Header from './Header/Header';
import MyRadio from './MyRadio/MyRadio';
import MyDisplay from './MyDisplay/MyDisplay';
import Gallery from './Gallery/Gallery';
import getNewCharacters from './helpers/getNewCharacters'

export default {
	components: {
    	Header,
		MyRadio,
    	MyDisplay,
		Gallery,
		// getNewCharacters
	},
	data() {
		return {
			num: '',
			radio: 'picsum',
			masObj: [{}]
		}
	},
	methods: {
		giveRadio(typeRadio) {
			this.radio = typeRadio;
		},
		getNum(scoreImages) {
			this.num = Number(scoreImages);	
			console.log(this.num);
			console.log(this.radio);
			this.masObj = getNewCharacters(this.radio, this.num);
			console.log(this.masObj);
    }
	},

}
</script>

<style>
	@import "./App.css";
</style>
