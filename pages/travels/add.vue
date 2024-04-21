<script setup lang="ts">
import { v4 as uuid } from 'uuid';
import useImgbb from '~/composables/useImgbb';
import type { TravelData } from '~/types/TravelData';
import normalizeTravel from '~/utils/normalizeTravel';

const route = useRoute();
const { travelsList, addTravel, isReady } = useTravel();
const { uploadImage } = useImgbb();

const onHandleSubmit = async (tmpTravel: TravelData) => {
  const body = new FormData();
  body.append('image', tmpTravel.travelImage[0].file);
  tmpTravel.image = await uploadImage(body);
  await addTravel(normalizeTravel(tmpTravel));
};
</script>

<template>
  <div v-if="isReady" class="container mx-auto">
    <div class="flex justify-center my-10">
      <h1 class="text-center md:text-left text-6xl">Create your travel</h1>
    </div>
    <div class="flex justify-between my-8 mx-8 md:mx-4">
      <div class="text-sm breadcrumbs">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/travels">Travels</a></li>
          <li>Add travel</li>
        </ul>
      </div>
    </div>
    <FormKit
      type="form"
      @submit="onHandleSubmit"
      submit-label="Add your travel"
      :submit-attrs="{
        wrapperClass: '',
        outerClass:
          'flex justify-center max-w-full md:max-w-[20em] md:justify-start mt-8',
      }"
    >
      <div
        class="grid grid-cols-1 justify-items-center md:justify-items-stretch md:grid-cols-2 gap-4"
      >
        <div>
          <FormKit
            help="Write here the new travel name"
            label="Travel name"
            name="name"
            id="name"
            type="text"
            placeholder="Travel name"
            outer-class="max-w-full"
          />
          <FormKit
            type="textarea"
            auto-height
            name="description"
            label="Travel description"
            validation="length:0,600"
            validation-visibility="live"
            placeholder="Write here the travel description"
            :validation-messages="{
              length: 'Description cannot be more than 300 characters.',
            }"
            outer-class="w-96 md:max-w-full md:w-full"
          />
        </div>
        <div class="flex items-center flex-col">
          <FormKit type="group" name="date" id="date">
            <FormKit
              help="Select your travel departure date"
              label="Travel Departure"
              name="departure"
              id="departure"
              type="date"
              outer-class="w-96 grow-0"
            />
            <FormKit
              help="Select your travel return date"
              label="Travel Return"
              name="return"
              id="return"
              type="date"
              outer-class="w-96 grow-0"
            />
          </FormKit>
        </div>
      </div>
      <div
        class="grid justify-items-center md:justify-items-stretch grid-cols-1 gap-4"
      >
        <FormKit
          type="number"
          name="price"
          id="price"
          label="Travel price"
          placeholder="500"
          outer-class="max-w-full w-80 md:max-w-[20em] md:w-full"
        />
      </div>
      <div
        class="grid justify-items-center md:justify-items-stretch grid-cols-1 gap-4"
      >
        <FormKit
          name="rating"
          id="rating"
          value="50"
          type="range"
          label="Travel rating"
          min="0"
          max="100"
          step="10"
          help="Rating your travel here"
          outer-class="max-w-full w-80 md:max-w-[20em]"
        />
      </div>
      <div
        class="grid justify-items-center md:justify-items-stretch grid-cols-1 gap-4"
      >
        <FormKit
          name="travelImage"
          id="travelImage"
          type="file"
          label="Travel image"
          accept=".jpg,.png"
          help="Inserisci qui un'immagine del tuo viaggio"
          outer-class="max-w-full w-80 md:max-w-[20em]"
        />
      </div>
    </FormKit>
  </div>
</template>

<style scoped></style>
