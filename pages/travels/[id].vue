<script setup lang="ts">
import type { Travel } from "~/types/Travel";

const route = useRoute();
const { travelsList: travel, editTravel } = await useTravel(
  Number(route.params.id),
);

console.log("travel", travel);

const onHandleSubmit = async (tmpTravel: Travel) => {
  await editTravel(Number(route.params.id), tmpTravel);
};
</script>

<template>
  <div class="container mx-auto">
    <FormKit
      type="form"
      @submit="onHandleSubmit"
      submit-label="Edit your travel"
      :value="travel"
    >
      <div class="grid grid-cols-2 gap-4">
        <div>
          <FormKit
            help="Inserisci qua il nome del tuo viaggio"
            label="Travel name"
            name="name"
            id="name"
            type="text"
          />
        </div>
        <div>
          <FormKit type="group" name="date" id="date">
            <FormKit
              help="Inserisci qui la data di inizio del tuo viaggio"
              label="Travel Departure"
              name="departure"
              id="departure"
              :value="travel.date?.departure"
              type="date"
            />
            <FormKit
              help="Inserisci qui la data di fine del tuo viaggio"
              label="Travel Return"
              name="return"
              id="return"
              :value="travel.date?.return"
              type="date"
            />
          </FormKit>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <FormKit
          type="textarea"
          name="description"
          label="Travel description"
          placeholder="Remember to write in complete sentences."
          validation="length:0,600"
          validation-visibility="live"
          :value="travel.description"
          :validation-messages="{
            length: 'Description cannot be more than 300 characters.',
          }"
        />
      </div>
      <div class="grid grid-cols-1">
        <FormKit
          type="number"
          name="price"
          id="price"
          label="Travel price"
          :value="travel.price"
        />
      </div>
      <div class="grid grid-cols-1">
        <FormKit
          name="rating"
          id="rating"
          :value="travel.rating"
          type="range"
          label="Travel rating"
          min="0"
          max="100"
          help="Dai un voto a questo viaggio"
        />
      </div>
    </FormKit>
  </div>
</template>

<style scoped></style>
