<script setup lang="ts">
const { travelsList, deleteTravel } = useTravel();
const router = useRouter();
</script>
<template>
  <div class="container mx-auto">
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
        @click="router.push({ path: `/travels/add` })"
        class="btn btn-secondary"
      >
        Add travel
      </button>
    </div>

    <div class="mainGrid" v-if="travelsList" c>
      <div
        v-for="travel in travelsList"
        :key="travel.id"
        class="card w-80 md:w-full bg-base-100 shadow-xl"
      >
        <figure>
          <img :src="travel.image" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ travel.name }}</h2>
          <p class="text-sm">{{ travel.description }}</p>
          <div class="card-actions mt-3 justify-end">
            <button @click="deleteTravel(travel)" class="btn btn-primary">
              Delete
            </button>
            <button
              @click="router.push({ path: `/travels/${travel.id}` })"
              class="btn btn-secondary"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pt-2 p-4"></div>
</template>

<style scoped>
.mainGrid {
  @apply grid justify-items-center grid-cols-1 justify-center gap-6;
  @apply md:grid-cols-2 md:justify-between gap-6;
  @apply lg:grid-cols-3;
  @apply xl:grid-cols-4;
}
</style>
