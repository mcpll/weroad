<script setup lang="ts">
import travelImage from '../public/travel.jpeg';
import bookingImage from '../public/booking.jpg';
const router = useRouter();
</script>

<template>
  <div
    class="flex flex-col md:flex-row container mx-auto justify-center items-center h-screen gap-4"
  >
    <div class="card w-80 bg-base-100 shadow-xl image-full">
      <figure>
        <img :src="travelImage" alt="travel" >
      </figure>
      <div class="card-body max-h-[204px]">
        <h2 class="card-title">Travels</h2>
        <p>
          Explore new horizons: create, edit and delete your journey towards
          boundless adventures!
        </p>
        <div class="card-actions justify-end">
          <button
            class="btn btn-secondary"
            @click="router.push({ path: '/travels' })"
          >
            Manage your travel!
          </button>
        </div>
      </div>
    </div>
    <div class="card w-80 bg-base-100 shadow-xl image-full">
      <figure>
        <img :src="bookingImage" alt="bookings" >
      </figure>
      <div class="card-body">
        <h2 class="card-title">Booking Travel</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button
            class="btn btn-secondary"
            @click="router.push({ path: '/bookings' })"
          >
            Booking now!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
