
async function initAPIpicsum(i){
	let dataPicsum = [];
	let init;
	let j;

	init = await axios.get(`https://picsum.photos/v2/list?page=0&limit=${i}`);

	for(j = 0; j < i; j++) {
		dataPicsum[j] = {
			id: init.data[j].id,
			name: init.data[j].author,
			url: init.data[j].download_url
		};
	}
	return dataPicsum;
}

getPicsumPhotos = async (i) => {
	return await initAPIpicsum(i);
}