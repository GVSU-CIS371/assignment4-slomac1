<template>
  <div>
    <Beverage 
    :isIced="beverageStore.currentTemp === 'Cold'" 
    :creamerSelected="beverageStore.currentCreamer?.name !== 'No Cream'"
    :syrupSelected="beverageStore.currentSyrup?.name !== 'No Syrup'" />
    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="base in beverageStore.bases" :key="base.name">
          <label>
            <input
              type="radio"
              name="base"
              :id="`r${base}`"
              :value="base"
              v-model="beverageStore.currentBase"
            />
            {{ base.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="creamer in beverageStore.creamers" :key="creamer.name">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="`r${creamer}`"
              :value="creamer"
              v-model="beverageStore.currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
      <li>
        <template v-for="syrup in beverageStore.syrups" :key="syrup.name">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="`r${syrup}`"
              :value="syrup"
              v-model="beverageStore.currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
    <div class="beverage-maker">
      <input type="text" placeholder="Beverage Name" v-model="beverageStore.beverageName" />
      <button @click="beverageStore.makeBeverage(beverageStore.beverageName)">🍺 Make Beverage</button>
    </div>
  </div>
  <div class="beverage-container" style="margin-top: 20px">
    <template v-for="beverage in beverageStore.beverages" :key="beverage.name">
      <ul>
        <button @click="beverageStore.showBeverage(beverage)"> {{ beverage.name }}</button>
        <button @click="beverageStore.deleteBeverage(beverage.name)"> Delete </button>
      </ul>
    </template>

  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";
const beverageStore = useBeverageStore();
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;

    li {
      display: flex;
      padding: 10px;
      justify-content: center;

      label {
        font-size: 1.2em;
        margin: 10px;
        color: #ffffff;
      }
    }
}
.beverage-maker {
  display: flex;
  justify-content: center;
  input {
    margin-right: 10px;
  }
}
.beverage-container {
  ul {
    display: flex;
    justify-content: center;
    button {
      margin: 0 5px;
      padding: 5px 10px;
      font-size: 1em;
    }
  }
}
</style>
