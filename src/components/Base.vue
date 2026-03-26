<template>
  <div class="baseBeverage"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useBeverageStore } from "../stores/beverageStore";
const beverageStore = useBeverageStore();
const bgColor = computed(() => beverageStore.currentBase?.color || "#8B4513");
</script>

<style scoped>
.baseBeverage {
  background-color: v-bind(bgColor);
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  /* // border-radius: 0.05em 0.05em 2.2em 2.2em; */
}
</style>
