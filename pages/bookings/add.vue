<script setup lang="ts">
import type { Travel } from '~/types/Travel';
import type { User } from '~/types/User';
import type { PaymentData } from '~/types/PaymentData';

const travelSelect: Ref<Travel | undefined> = ref();
const userSelect: Ref<User | undefined> = ref(undefined);
const payment: Ref<string> = ref('');
const notes: Ref<string> = ref('');
const currentStep = ref(1);
const { addBooking } = useBookings();

const handleSubmitStep = (step: number, data: Travel | User | PaymentData) => {
  switch (step) {
    case 1:
      travelSelect.value = data as Travel;
      break;
    case 2:
      userSelect.value = data as User;
      break;
    case 3:
      const paymentData = data as PaymentData;
      payment.value = paymentData.payment;
      notes.value = paymentData.notes;
      submitBookings();
      break;
  }
};

const submitBookings = (): void => {
  const booking = normalizeBooking(
    travelSelect.value,
    userSelect.value,
    payment.value,
    notes.value,
  );
  addBooking(booking);
};

const handleSetCurrentStep = (step: number) => {
  currentStep.value = step;
};
</script>

<template>
  <div class="container mx-auto">
    <div class="flex justify-center my-10">
      <h1 class="text-center md:text-left text-6xl">Booking Now!</h1>
    </div>
    <div class="flex justify-center md:justify-between my-8">
      <div class="text-sm breadcrumbs">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/bookings">Bookings</a></li>
          <li>Add Booking</li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center my-10">
      <ul class="steps">
        <li class="step text-sm" :class="{ 'step-primary': currentStep }">
          Choose Travel
        </li>
        <li
          class="step text-sm"
          :class="{ 'step-primary': currentStep == 2 || currentStep == 3 }"
        >
          Customer Info
        </li>
        <li class="step text-sm" :class="{ 'step-primary': currentStep == 3 }">
          Choose Payment
        </li>
      </ul>
    </div>
    <div class="multistepContainer">
      <div v-if="currentStep === 1" class="firstStep">
        <travel-selector
          @onSubmit="handleSubmitStep"
          @onSetStep="handleSetCurrentStep"
        />
      </div>
      <div v-if="currentStep === 2" class="secondStep">
        <user-selector
          @onSubmit="handleSubmitStep"
          @onSetStep="handleSetCurrentStep"
        />
      </div>
      <div v-if="currentStep === 3">
        <payment-selector @onSubmit="handleSubmitStep" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
