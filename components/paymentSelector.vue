<script setup lang="ts">
const emit = defineEmits<{
  (e: 'onSubmit', step: number, data: object): void;
}>();
const router = useRouter();
  

const onHandleSubmit = (data: { payment: string; notes: string }) => {
  emit('onSubmit', 3, data);
  router.push({ path: `/bookings` });
};
</script>

<template>
  <div class="container mx-auto">
    <FormKit
      type="form"
      :classes="{
        messages: '!text-center mb-4',
        actions: 'flex justify-center userSubmit',
      }" 
      @submit="onHandleSubmit"
    >
      <div class="grid grid-cols-1">
        <div class="col1 flex flex-col items-center">
          <FormKit
            id="payment"
            type="select"
            label="Enter your payment method"
            name="payment"
            validation="required"
            help="Select your payment method"
            :options="['Credit transfer', 'Paypal', 'Revolut']"
            outer-class=" w-80 !min-h-[95px]"
          />
          
          
          
          <FormKit
            type="textarea"
            auto-height
            name="notes"
            label="Notes"
            help="Write here some notes"
            placeholder="If you want write here some notes"
            validation="length:0,600"
            validation-visibility="live"
            :validation-messages="{
              length: 'Description cannot be more than 600 characters.',
            }"
            outer-class="w-80"
          />
        </div>
      </div>
    </FormKit>
  </div>
</template>

<style scoped></style>
