import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

interface Beverage {
  name: string;
  temp: string;
  base: string;
  creamer: string;
  syrup: string;
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
        base: this.currentBase.name,
        creamer: this.currentCreamer.name,
        syrup: this.currentSyrup.name,
      };
      console.log("Making beverage:", newBeverage);
      this.beverages.push(newBeverage);

    },
    showBeverage(selectedBeverage: Beverage) {
      this.currentTemp = selectedBeverage.temp;
      this.currentBase = this.bases.find(a => a.name === selectedBeverage.base) || this.bases[0];
      this.currentCreamer = this.creamers.find(a => a.name === selectedBeverage.creamer) || this.creamers[0];
      this.currentSyrup = this.syrups.find(a => a.name === selectedBeverage.syrup) || this.syrups[0];
      console.log("Showing beverage:", selectedBeverage);
    },
  },
  persist: true,
});

