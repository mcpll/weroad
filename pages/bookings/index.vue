<script setup lang="ts">
const { bookingsList, isReady } = useBookings();
const router = useRouter();
</script>

<template>
  <div class="container mx-auto">
    <div class="flex justify-center my-10">
      <h1 class="text-6xl">Bookings</h1>
    </div>
    <div class="flex justify-between my-8 mx-8 md:mx-4">
      <div class="text-sm breadcrumbs">
        <ul>
          <li><a href="/">Home</a></li>
          <li>Bookings</li>
        </ul>
      </div>
      <button
        class="btn btn-secondary"
        @click="router.push({ path: `/bookings/add` })"
      >
        Add Booking
      </button>
    </div>
    <div v-if="isReady" class="mainGrid">
      <div
        v-for="booking in bookingsList"
        :key="booking.id"
        class="card card-side w-80 md:w-full shadow-xl mb-8 !bg-white"
      >
        <div class="card-body">
          <h2 class="card-title">
            New Bookings for {{ booking.travel ? booking.travel.name : '' }}
          </h2>
          <p>
            <b>Traveler name:</b>
            {{ booking.user_info ? booking.user_info.name : '' }}
            {{ booking.user_info ? booking.user_info.surname : '' }}
          </p>
          <p>
            <b>Age:</b> {{ booking.user_info ? booking.user_info.age : '' }}
          </p>
          <p><b>Payment methods:</b> {{ booking.payment_type }}</p>
          <p><b>Notes:</b> {{ booking.notes }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainGrid {
  @apply flex flex-col;
  @apply justify-center items-center; 
}
</style>
