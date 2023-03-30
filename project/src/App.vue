<template>
	<header>
		<Header></Header>
	</header>
	<main>
		<section class="main__top">
			<MyRadio></MyRadio>
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
export default {
	components: {
    Header,
		MyRadio,
    MyDisplay,
		Gallery
}

}
</script>

<style>
	@import "./App.css";
</style>
