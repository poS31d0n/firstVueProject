import axios from "axios";

const getRickAndMortyCharacters = async (i) => {
	let dataRick = [];
	let str = '';

	for(let j = 1; j <= i; j++)
		str +=`${j},`;
	str = str.slice(0, -1); 

	const response = await axios.get(`https://rickandmortyapi.com/api/character/${str}`);

	const init = response.data;

	for(let item of init) {
		const elem = {
			id: item.id,
			name: item.name,
			url: item.image
		}
		dataRick.push(elem);
	}
	return dataRick
}

export default getRickAndMortyCharacters;