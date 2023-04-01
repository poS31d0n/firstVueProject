
async function initAPIrick(i){
	let init;
	let j;


    init = await axios.get(`https://rickandmortyapi.com/api/character/${i}`);

	for(j = 0; j < i; j++) {
		dataRick[j] = {
			id: init.data[j].id,
			name: init.data[j].name,
			url: init.data[j].image
		}
	}

	return dataRick
}

async function getRickAndMortyCharacters (i) {


	if (i > data.maxRick) {

		elem = document.querySelector(".information");
		backDisp = document.querySelector(`.${data.displayButton}_my`);

		backDisp.style.display = 'none';
		elem.style.display = 'flex';

		elem.firstElementChild.innerHTML = "Waiting Rick and Morty";

		await initAPIrick(i);

		backDisp.style.display = `${data.displayButton}`;
		elem.style.display = 'none';
	}

	let doc = document.querySelectorAll(".row_element_flex");
	for (let item of doc)
		item.remove();
	doc = document.querySelectorAll(".row_element_grid");
	for (let item of doc)
		item.remove();

	undateContent(dataRick, i);
}