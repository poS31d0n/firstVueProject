
async function initAPIpokemon(i){
	let dataPokemon= [];
	let init;
	let j;

	init = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${i}&offset=0`);	

	for(j = 0; j < i; j++) {
		dataPokemon[j] = {
			id: '',
			name: init.data.results[j].name,
			url: "@/background.webp"
		};
	}
	return dataPokemon;
}

getPokemonCharacters = async (i) => {
	return await initAPIpokemon(i);
}