import axios from "axios";

const getPicsumPhotos = async (i) => {
  let dataPicsum = [];

	const response = await axios.get(`https://picsum.photos/v2/list?page=0&limit=${i}`);

	const init = response.data;

	for(let item of init) {
		const elem = {
      id: item.id,
      name: item.author,
      url: item.download_url
    }
    dataPicsum.push(elem);
	}
	return dataPicsum;
}

export default getPicsumPhotos;