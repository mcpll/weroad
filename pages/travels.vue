<script setup lang="ts">
import type { Travel } from "~/types/Travel";

const url = "http://localhost:4000/travels";
const travels = ref<Array<Travel>>([]);

const { travelsList, deleteTravel } = useTravel();
</script>

<template>
  <div class="container mx-auto">
    <h1>Travels</h1>
    <div v-if="travels">
      <table class="table mx-auto">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="travel in travelsList" :key="travel.id">
            <td>
              <img :src="travel.image" class="img-fluid" style="width: 100px" />
            </td>
            <td>{{ travel.name }}</td>
            <td>{{ travel.description }}</td>
            <td>{{ travel.rating }}</td>
            <td>
              <button
                @click="deleteTravel(travel.id)"
                class="btn btn-square btn-xs"
              >
                X
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <div class="flex flex-col gap-4 w-52">
        <div class="skeleton h-32 w-full"></div>
        <div class="skeleton h-4 w-28"></div>
        <div class="skeleton h-4 w-full"></div>
        <div class="skeleton h-4 w-full"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
