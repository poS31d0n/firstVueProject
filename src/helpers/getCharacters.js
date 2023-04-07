
getNewCharacters = async (radio, number = 12) => {
	const checks = document.querySelectorAll('.form-check-input');
	checks.forEach(function(ch) {
	  ch.addEventListener('click', function() {
		let that = this;
		checks.forEach(function(ch2) {
		  if (ch2 != that)
			ch2.checked = false;
		});
	  });
	});

	if (!radio)
		for(let item of checks)
			if (item.checked === true)
				radio = item.id;

	if (number === "")
		number = 12;
	if (number <= 0)
		return;


	switch (radio) {
		case 'picsum':
			return await getPicsumPhotos(number);
		case 'rick':
			return await getRickAndMortyCharacters(number);
		case 'pokemon':
			return await getPokemonCharacters(number);
	}
}