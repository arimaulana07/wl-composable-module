<script setup lang="ts">
import 'primevue/resources/themes/lara-light-green/theme.css'
import FormReservation from './components/ThemeA/FormReservation/FormReservation.vue';

const { getDeparture, getDestination } = useApiData()

const fetchDepartures = await getDeparture()
const fetchDestinations = await getDestination({ outletasal: '1' })

const {
  departures,
  destinations,
  setSelectedDeparture,
  setSelectedDestination,
  selectedDeparture,
  selectedDestination
} = useFormReservation({ fetchDepartures, fetchDestinations })

const selectedDate = ref<Date>(new Date())

const setSelectedDate = (date: Date) => {
  selectedDate.value = date
}

</script>

<template>
  <div class="fixed bottom-0 right-0 border-fuchsia-700 border-[2px] p-[15px] bg-white w-[400px] h-[200px]">
    <div class=" font-semibold">
      Selected Departure: <span class=" text-fuchsia-700"> {{ selectedDeparture }} </span>
    </div>
    <div class=" font-semibold">
      Selected Destination: <span class="text-fuchsia-700"> {{ selectedDestination }} </span>
    </div>
    <div class=" font-semibold">
      Selected Date: <span class="text-fuchsia-700"> {{ selectedDate }} </span>
    </div>
  </div>
  <FormReservation
    :departures="departures"
    :destinations="destinations"
    :selected-departure="selectedDeparture"
    :selected-destination="selectedDestination"
    @on-change:selected-departure="setSelectedDeparture($event)"
    @on-change:selected-destination="setSelectedDestination($event)"
    @on-change:selected-date="setSelectedDate($event)"
  />
</template>

