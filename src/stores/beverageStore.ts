import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

interface Beverage {
  name: string;
  temp: string;
  base: {
    id: string,
    name: string,
    color: string
  }
  creamer: {
    id: string,
    name: string,
    color: string
  };
  syrup: {
    id: string,
    name: string,
    color: string
  };
};

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCreamer: creamers[0],
    syrups: syrups,
    currentSyrup: syrups[0],
    beverageName: "",
    beverages: [] as Beverage[],
  }),

  actions: {
    makeBeverage(beverageName: string) {
      const newBeverage: Beverage = {
        name: beverageName,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      };
      this.beverages.push(newBeverage);
    },

    showBeverage(selectedBeverage: Beverage) {
      this.currentTemp = selectedBeverage.temp;
      this.currentBase = selectedBeverage.base;
      this.currentCreamer = selectedBeverage.creamer;
      this.currentSyrup = selectedBeverage.syrup;
    },

    deleteBeverage(beverageName: string) {
      this.beverages = this.beverages.filter(bev => bev.name !== beverageName);
    },

  },
  persist: true,
});

