<script setup lang="ts">
import type { Travel } from "~/types/Travel";

const route = useRoute();
const { travelsList, addTravel } = useTravel();

const onHandleSubmit = async (tmpTravel: Travel) => {
  tmpTravel.id = generateUniqueIds(travelsList).toString();
  addTravel(tmpTravel);
};
</script>

<template>
  <div class="container mx-auto">
    <FormKit
      type="form"
      @submit="onHandleSubmit"
      submit-label="Edit your travel"
    >
      <div class="grid grid-cols-2 gap-4">
        <div>
          <FormKit
            help="Write here the new travel name"
            label="Travel name"
            name="name"
            id="name"
            type="text"
            placeholder="Travel name"
          />
        </div>
        <div>
          <FormKit type="group" name="date" id="date">
            <FormKit
              help="Inserisci qui la data di inizio del tuo viaggio"
              label="Travel Departure"
              name="departure"
              id="departure"
              type="date"
            />
            <FormKit
              help="Inserisci qui la data di fine del tuo viaggio"
              label="Travel Return"
              name="return"
              id="return"
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
          validation="length:0,600"
          validation-visibility="live"
          placeholder="Write here the travel description"
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
          placeholder="500"
        />
      </div>
      <div class="grid grid-cols-1">
        <FormKit
          name="rating"
          id="rating"
          value="50"
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
