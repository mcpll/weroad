<script setup lang="ts">
const { travelsList, deleteTravel, setFilter, isReady, filterValues } = useTravel();
const router = useRouter();
const selected = ref('');
</script>
<template>
  <div v-if="isReady" class="container mx-auto">
    <div class="flex justify-center my-10">
      <h1 class="text-6xl">Travels</h1>
    </div>
    <div class="flex justify-between my-8 mx-8 md:mx-4">
      <div class="text-sm breadcrumbs">
        <ul>
          <li><a href="/">Home</a></li>
          <li>Travels</li>
        </ul>
      </div>
      <button
        class="btn btn-secondary"
        @click="router.push({ path: `/travels/add` })"
      >
        Add travel
      </button>
    </div>
    <div class="filter flex w-full my-4">
      <div>
        <p class="my-2">Choose you destination:</p>
        <select
          id="nation"
          v-model="selected"
          class="select select-bordered select-sm w-full max-w-xs"
          name="nation"
          @change="setFilter(selected)"
        >
          <option value="" selected="true"/>
          <option
            v-for="filtervalue in filterValues"
            :key="filtervalue?.id"
            :value="filtervalue?.name"
          >
            {{ filtervalue?.name }}
          </option>
        </select>
      </div>
    </div>

    <div v-if="travelsList" class="mainGrid">
      <div
        v-for="travel in travelsList"
        :key="travel.id"
        class="card w-80 md:w-full bg-base-100 shadow-xl"
      >
        <figure>
          <img :src="travel.image" :alt="travel.name" >
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ travel.name }}</h2>
          <p class="text-sm">{{ travel.description }}</p>
          <div class="card-actions mt-3 justify-end">
            <button class="btn btn-primary" @click="deleteTravel(travel)">
              Delete
            </button>
            <button
              class="btn btn-secondary"
              @click="router.push({ path: `/travels/${travel.id}` })"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainGrid {
  @apply grid justify-items-center grid-cols-1 justify-center gap-6;
  @apply md:grid-cols-2 md:justify-between gap-6;
  @apply lg:grid-cols-3;
  @apply xl:grid-cols-4;
}
</style>
