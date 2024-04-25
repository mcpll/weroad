<script setup lang="ts">
import type { TravelData } from '~/types/TravelData';

const route = useRoute();
const {
  singleTravel,
  editTravel,
  isReady,
} = useTravel(route.params.id.toString());


const { uploadImage } = useImgbb();

const onHandleSubmit = async (tmpTravel: TravelData) => {
  if (tmpTravel.image === tmpTravel.travelImage[0].name) {
    await editTravel(route.params.id.toString(), normalizeTravel(tmpTravel));
  } else {
    const body = new FormData();
    body.append('image', tmpTravel.travelImage[0].file);
    tmpTravel.image = await uploadImage(body);
    await editTravel(route.params.id.toString(), normalizeTravel(tmpTravel));
  }
};
</script>

<template>
  <div v-if="isReady" class="container mx-auto">
    <div class="flex justify-center my-10">
      <h1 class="text-6xl">Edit your travel</h1>
    </div>
    <div class="flex justify-between my-8 mx-8 md:mx-4">
      <div class="text-sm breadcrumbs">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/travels">Travels</a></li>
          <li>Edit travel</li>
        </ul>
      </div>
    </div>
    <FormKit
      type="form"
      submit-label="Edit your travel"
      :submit-attrs="{
        inputClass: 'bg-[#a6cbb5] border-none',
        wrapperClass: '',
        outerClass:
          'flex justify-center max-w-full md:max-w-[20em] md:justify-start mt-8',
      }"
      @submit="onHandleSubmit"
    >
      <div
        class="grid grid-cols-1 justify-items-center md:justify-items-stretch md:grid-cols-2 gap-4"
      >
        <div>
          <FormKit
            id="name"
            v-model="singleTravel.name"
            help="Write here the destination"
            label="Destination"
            name="name"
            type="text"
            placeholder="Destination"
            outer-class="max-w-full"
          />
          <FormKit
            type="textarea"
            auto-height
            name="description"
            label="Travel description"
            help="Write here your travel description"
            placeholder="Remember to write in complete sentences."
            validation="required|length:0,600"
            validation-visibility="live"
            :value="singleTravel.description"
            :validation-messages="{
              length: 'Description cannot be more than 300 characters.',
            }"
            outer-class="w-96 md:max-w-full md:w-full"
          />
        </div>
        <div class="flex items-center flex-col">
          <FormKit id="date" type="group" name="date">
            <FormKit
              id="departure"
              help="Select your travel departure date"
              label="Travel Departure"
              name="departure"
              type="date"
              :value="singleTravel.date?.departure"
              outer-class="w-96 grow-0"
            />
            <FormKit
              id="return"
              help="Select your travel return date"
              label="Travel Return"
              name="return"
              :value="singleTravel.date?.return"
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
          id="price"
          type="number"
          name="price"
          label="Travel price"
          :value="singleTravel.price.toString()"
          outer-class="max-w-full w-80 md:max-w-[20em] md:w-full"
        />
      </div>
      <div
        class="grid justify-items-center md:justify-items-stretch grid-cols-1 gap-4"
      >
        <FormKit
          id="rating"
          name="rating"
          :value="singleTravel.rating.toString()"
          type="range"
          label="Travel rating"
          min="0"
          max="100"
          help="Dai un voto a questo viaggio"
          outer-class="max-w-full w-80 md:max-w-[20em]"
        />
      </div>
      <div
        class="grid justify-items-center md:justify-items-stretch grid-cols-1 gap-4"
      >
        <FormKit
          id="travelImage"
          name="travelImage"
          type="file"
          label="Travel image"
          accept=".jpg,.png"
          help="Inserisci qui un'immagine del tuo viaggio"
          outer-class="max-w-full w-80 md:max-w-[20em]"
          :value="[{name: singleTravel.image}]"
        />
      </div>
    </FormKit>
  </div>
</template>

<style scoped></style>
