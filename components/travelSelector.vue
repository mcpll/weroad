<script setup lang="ts">
import { computedAsync } from '@vueuse/core';
import type { Travel } from '~/types/Travel';

const emit = defineEmits<{
  (e: 'onSubmit', step: number, data: Travel): void;
  (e: 'onSetStep', step: number): void;
}>();

const { searchTravel } = useTravel();
const searchString = ref('');

const searchResult = computedAsync(async () => {
  return searchString.value != '' ? await searchTravel(searchString.value) : [];
}, []);

const handleChoseTravel = (travel: Travel) => {
  emit('onSubmit', 1, travel);
  emit('onSetStep', 2);
};
</script>

<template>
  <div class="travelSelector">
    <div class="searchBox flex justify-center">
      <FormKit
        type="search"
        placeholder="Search..."
        label="Where do you want to go?"
        v-model="searchString"
      />
    </div>
    <div class="searchResult">
      <div v-for="travel in searchResult" :key="travel.id">
        <div
          class="card w-80 md:w-full card-side bg-base-100 shadow-xl max-h-[240px]"
        >
          <figure>
            <img :src="travel.image" :alt="travel.name" />
          </figure>
          <div class="card-body p-4 md:p-8">
            <h2 class="card-title">{{ travel.name }}</h2>
            <p class="hidden md:inline md:text-sm">
              Click the button to select this travel
            </p>
            <div class="card-actions justify-end">
              <button
                @click="handleChoseTravel(travel)"
                class="btn btn-primary"
              >
                Choose
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.searchResult {
  @apply grid justify-items-center grid-cols-1 justify-center gap-6;
  @apply md:grid-cols-2 md:justify-between gap-6;
}
</style>
