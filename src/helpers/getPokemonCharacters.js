import axios from "axios";

const getPokemonCharacters = async (i) => {
	let dataPokemon= [];
  let id = 0;

	const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${i}&offset=0`);

	const init = response.data.results;

	for(let item of init) {
    id += 1;
		const elem = {
      id,
      name: item.name,
      url: ''
    }
    dataPokemon.push(elem);
	}
	return dataPokemon;
}

export default getPokemonCharacters;