
async function initAPIpokemon(i){
	let init;
	let j;


	
	init = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${i}&offset=0`);
	

	for(j = 0; j < i; j++) {
		dataPokemon[j] = {
			id: '',
			name: init.data.results[j].name,
			url: "./photo/images.png"
		};
	}
	return dataPokemon;
}

async function getPokemonCharacters (i) {


	if (i > data.maxPokemon) {

		elem = document.querySelector(".information");
		backDisp = document.querySelector(`.${data.displayButton}_my`);

		backDisp.style.display = 'none';
		elem.style.display = 'flex';

		elem.firstElementChild.innerHTML = "Waiting Pokemon";

		await initAPIpokemon(i);
		
		backDisp.style.display = `${data.displayButton}`;
		elem.style.display = 'none';
	}

	let doc = document.querySelectorAll(".row_element_flex");
	for (let item of doc)
		item.remove();
	doc = document.querySelectorAll(".row_element_grid");
	for (let item of doc)
		item.remove();

	undateContent(dataPokemon, i);
}