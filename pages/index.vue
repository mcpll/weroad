<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <div
    class="flex container mx-auto justify-center items-center h-screen gap-4"
  >
    <div class="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Travels</h2>
        <p>
          Explore new horizons: create, edit and delete your journey towards
          boundless adventures!
        </p>
        <div class="card-actions justify-end">
          <button
            @click="router.push({ path: '/travels' })"
            class="btn btn-secondary"
          >
            Manage your travel!
          </button>
        </div>
      </div>
    </div>
    <div class="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-secondary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
