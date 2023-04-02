
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
	let masObj

	console.log('download pokemon')
	// if (i > data.maxPokemon) {

	// 	elem = document.querySelector(".information");
	// 	backDisp = document.querySelector(`.${data.displayButton}_my`);

	// 	backDisp.style.display = 'none';
	// 	elem.style.display = 'flex';

	// 	elem.firstElementChild.innerHTML = "Waiting Pokemon";

		masObj = await initAPIpokemon(i);
		
	// 	backDisp.style.display = `${data.displayButton}`;
	// 	elem.style.display = 'none';
	// }

	return masObj;
}