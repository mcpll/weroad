<script setup lang="ts">
import type { User } from '~/types/User';

const emit = defineEmits<{
  (e: 'onSubmit', step: number, data: User): void;
  (e: 'onSetStep', step: number): void;
}>();

const onHandleSubmit = (user: User) => {
  emit('onSubmit', 2, user);
  emit('onSetStep', 3);
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
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="col1 flex flex-col items-center md:items-end">
          <FormKit
            id="name"
            type="text"
            name="name"
            label="Enter your name"
            validation="required"
            outer-class="w-80 !min-h-[95px]"
          />
          <FormKit
            id="surname"
            type="text"
            name="surname"
            validation="required"
            label="Enter your surname"
            outer-class="w-80 !min-h-[95px]"
          />
          <FormKit
            id="email"
            type="email"
            name="email"
            validation="required"
            label="Enter your email here"
            outer-class="w-80 !min-h-[95px]"
          />
        </div>
        <div class="col2 flex flex-col items-center md:items-baseline">
          <FormKit
            id="age"
            type="number"
            name="age"
            validation="required"
            label="Enter here your age"
            outer-class=" w-80 !min-h-[95px]"
          />
          <FormKit
            type="tel"
            label="Phone number"
            name="phone"
            validation="required"
            placeholder="xxx-xxx-xxxxxx"
            validation-visibility="dirty"
            outer-class="w-80 !min-h-[95px]"
          />
          <FormKit
            id="gender"
            type="select"
            label="Enter here you gender"
            name="gender"
            validation="required"
            :options="['Male', 'Famale', 'Other']"
            outer-class="w-80 !min-h-[95px]"
          />
        </div>
      </div>
    </FormKit>
  </div>
</template>

<style>
.userSubmit div {
  display: flex !important;
  justify-content: center !important;
}
</style>
