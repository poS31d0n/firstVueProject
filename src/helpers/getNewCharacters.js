import { apiNames } from '@/types';
import getPicsumPhotos from './getPicsumPhotos';
import getRickAndMortyCharacters from './getRickAndMortyCharacters';
import getPokemonCharacters from './getPokemonCharacters';


const getNewCharacters = async (radioName, number = 12) => {
	console.log('AD');
	switch (radioName) {
		case apiNames.picsum:
			return await getPicsumPhotos(number);
		case apiNames.rick:
			return await getRickAndMortyCharacters(number);
		case apiNames.pokemon:
			return await getPokemonCharacters(number);
	}
}
export default getNewCharacters;