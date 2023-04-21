import { apiNames } from '@/types';
import { useApiStore } from '@/store/store';

import getPicsumPhotos from './getPicsumPhotos';
import getRickAndMortyCharacters from './getRickAndMortyCharacters';
import getPokemonCharacters from './getPokemonCharacters';

const getNewCharacters = async (radioName, number = 12) => {

	const apiStore = useApiStore();
	let check =	apiStore.searchImages(radioName, number)
	if (check) {
		switch (radioName) {
			case apiNames.picsum:
				let resultPicsum = await getPicsumPhotos(number);
				apiStore.setImages(radioName, number, resultPicsum);
				return resultPicsum;
			case apiNames.rick:
				let resultRick = await getRickAndMortyCharacters(number);
				apiStore.setImages(radioName, number, resultRick);
				return resultRick;
			case apiNames.pokemon:
				let resultPokemon = await getPokemonCharacters(number);
				apiStore.setImages(radioName, number, resultPokemon);
				return resultPokemon;
		}
	}
	else {
		return apiStore.getImages(radioName, number);
	}
}
export default getNewCharacters;