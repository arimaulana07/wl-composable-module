<script setup lang="ts">
import type { OutletDeparture, FormReservationProps } from '../../../interface';
import InputContainer from './InputContainer.vue';
import { groupBy } from '~/utils';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';

const props = defineProps<FormReservationProps>();

const selectedDeparture = ref<string>('')
const selectedDestination = ref<string>('')
const selectedDate = ref()

const outletDepartureGrouped = ref(groupBy(props.departures.outlet as OutletDeparture[]));
const outletDestinationGrouped = toRef(() => groupBy(props.destinations.outlet as OutletDeparture[]));

watch(outletDestinationGrouped, () => {
  if (outletDestinationGrouped.value[0].items) {
    selectedDestination.value = outletDestinationGrouped.value[0].items[0].id
  }
});

const emit = defineEmits<{
  'onChange:selectedDeparture': [id: string]
  'onChange:selectedDestination': [id: string]
  'onChange:selectedDate': [date: Date]
}>()

const onChangeSelectedDeparture = () => {
  emit('onChange:selectedDeparture', selectedDeparture.value)
}

const onchangeSelectedDestination = () => {
  emit('onChange:selectedDestination', selectedDestination.value)
}

const dateChanged = () => {
  emit('onChange:selectedDate', selectedDate.value)
}

</script>

<template>
  <div class="w-full py-[50px] px-[30px] grid grid-cols-3 bg-primary">
    <InputContainer title="Mau Berangkat Dari Mana?">
      <Dropdown
        v-model="selectedDeparture"
        filter
        class="w-[300px]"
        :options="outletDepartureGrouped"
        option-label="nama"
        option-value="id"
        option-group-label="kota"
        option-group-children="items"
        @change="onChangeSelectedDeparture"
      >
        <template #optiongroup="slotProps">
          <div class="flex align-items-center max-w-[250px]">
            <div>{{ slotProps.option.kota }}</div>
          </div>
        </template>
      </Dropdown>
    </InputContainer>
    
    <InputContainer title="Tentukan Tujuan">
      <Dropdown
        v-model="selectedDestination"
        filter
        class=" w-[300px]"
        :options="outletDestinationGrouped"
        option-label="nama"
        option-value="id"
        option-group-label="kota"
        option-group-children="items"
        @change="onchangeSelectedDestination"
      >
        <template #optiongroup="slotProps">
          <div class="flex align-items-center">
            <div>{{ slotProps.option.kota }}</div>
          </div>
        </template>
      </Dropdown>
    </InputContainer>

    <InputContainer title="Tentukan Tanggal">
      <Calendar
        v-model="selectedDate"
        class="text-center w-[250px]"
        date-format="d M yy"
        :manual-input="false"
        @date-select="dateChanged"
      />
    </InputContainer>
  </div>
</template>

<style>
.p-calendar {
  height: 48px;
}

.p-dropdown-panel {
  width: 300px;
}

.p-dropdown-filter {
  padding: 12px;
  border: 1px solid #d1d5db;
}

.p-dropdown-item {
  text-wrap: wrap;
}

.p-inputtext {
  padding-left: 10px;
}

</style>