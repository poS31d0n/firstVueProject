import { defineStore } from "pinia";

export const useApiStore = defineStore("apiStore", {
  state: () => {
    return {
      images: [
        {name: 'piscum', number: 0 },
        {name: 'rick', number: 0},
        {name: 'pokemon', number: 0},
      ],
      maxNumber: 0,
    }
  },
  actions: {
    getImages(radioName, number) {
      for(let item of this.images) {
        if (item.name == radioName)
          return item.arr.slice(0, number);
      };
    },
    searchImages(radioName, number) {
      for(let item of this.images) {
        if (item.name === radioName) {
          return (item.number < number)
        }
      }
      return true
    },
    setImages(radioName, number, arr) {
      var index = this.images.map(function(o) { return o.name; }).indexOf(radioName);
      if (index >= 0) {
        this.images[index].name = radioName;
        this.images[index].number = number;
        this.images[index].arr = arr;
      }
      else {
        this.images[this.maxNumber].name = radioName;
        this.images[this.maxNumber].number = number;
        this.images[this.maxNumber].arr = arr;
        this.maxNumber++;
      }
    } 
  },
});