
async function initAPIrick(i){
	let dataRick = [];
	let str = '';
	let j;

	for(j = 1; j <= i; j++)
		str +=`${j},`;
	str = str.slice(0, -1); 

    let init = await axios.get(`https://rickandmortyapi.com/api/character/${str}`);

	for(j = 0; j < i; j++) {
		dataRick[j] = {
			id: init.data[j].id,
			name: init.data[j].name,
			url: init.data[j].image
		}
	}
	return dataRick
}

getRickAndMortyCharacters = async (i) => {
	let masObj

	console.log('download rick')
	// if (i > data.maxRick) {

	// 	elem = document.querySelector(".information");
	// 	backDisp = document.querySelector(`.${data.displayButton}_my`);

	// 	backDisp.style.display = 'none';
	// 	elem.style.display = 'flex';

	// 	elem.firstElementChild.innerHTML = "Waiting Rick and Morty";

		masObj = await initAPIrick(i);

	// 	backDisp.style.display = `${data.displayButton}`;
	// 	elem.style.display = 'none';
	// }

	return masObj;
}