<script setup lang="ts">
import 'primevue/resources/themes/lara-light-green/theme.css'
import FormReservation from './components/ThemeA/FormReservation/FormReservation.vue';

const { calculatePrice, booking, detailBooking } = useApiData();


onMounted(async() => {
  const result = await detailBooking({ kodebooking: 'BDTR2407291D45' });

  console.log({ result });
})

</script>

<template>
  <NuxtPage/>

</template>

