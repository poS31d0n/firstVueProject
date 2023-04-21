import { defineStore } from "pinia";
import { apiNames } from "../types";
import getPokemonCharacters from "@/helpers/getPokemonCharacters";
import getPicsumPhotos from "@/helpers/getPicsumPhotos";
import getRickAndMortyCharacters from "@/helpers/getRickAndMortyCharacters";

export const useApiImagesStore = defineStore("apiImages", {
  state: () => ({
    data: [],
  }),
  actions: {
    async getNewCharacters(apiName, elements = 12) {
      const check = this.data.find(
        (obj) => obj.name === apiName && obj.images.length === Number(elements)
      );
      if (check) return check.images;
      else {
        let response = [];
        console.log(apiName)
        switch (apiName) {
          case apiNames.picsum:
            response = await getPicsumPhotos(elements);
            this.data.push({ name: apiName, images: response });
            return response;
          case apiNames.rick:
            response = await getRickAndMortyCharacters(elements);
            this.data.push({ name: apiName, images: response });
            return response;
          case apiNames.pokemon:
            response = await getPokemonCharacters(elements);
            this.data.push({ name: apiName, images: response });
            return response;
        }
      }
    },
  },
});