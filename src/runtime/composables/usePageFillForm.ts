import { ref, onMounted } from "vue";
import { useStore } from '../store/store';
import { useStoredReservationData } from "../composables/useStoredReservationData";
import { useSpinner } from './useSpinner';

import type { FormsCustomer, FormsPassenger } from "./types/UsePageFillForm";
import type { Router } from "vue-router";

interface Params {
  router: Router;
}


export const usePageFillForm = ({ router }: Params) => {
  const store = useStore();
  const { showSpinner } = useSpinner();

  /* Form Reactive */
  const formsCustomer = ref<FormsCustomer>({
    /* Customer Data */
    name: {
      value: null,
      isPassed: false,
      message: ''
    },
    email: {
      value: null,
      isPassed: false,
      message: '',
    },
    phoneNo: {
      value: null,
      isPassed: false,
      message: ''
    },
    address: {
      value: null,
      isPassed: false,
      message: ''
    },
  });

  const formsPassenger = ref<FormsPassenger[]>([]);

  for (let i = 1; i <= store.totalPassenger; i++) {
    const data: FormsPassenger = {
      index: i - 1,
      value: null,
      isPassed: false,
      label: i,
      message: '',
      isSelected: i === 1 ? true : false,
      indexSeat: null,
      seat: null,
    }

    formsPassenger.value.push(data);
  }

  const toSelectSeats = () => {
    store.customerData = formsCustomer.value;
    store.passengersData = formsPassenger.value;
    const { setStoredReservationData } = useStoredReservationData({ sessionId: store.sessionId });
    setStoredReservationData();
    router.push({ name: 'selectSeats', query: { session_id: store.sessionId } });
  }

  onMounted(() => {
    if (store.customerData) {
      formsCustomer.value = { ...store.customerData }
    }

    if (store.passengersData && store.passengersData.length > 0) {
      formsPassenger.value = [ ...store.passengersData ]
    }

    showSpinner.value = false;
  });

  return  { formsCustomer, formsPassenger, showSpinner, toSelectSeats }

};