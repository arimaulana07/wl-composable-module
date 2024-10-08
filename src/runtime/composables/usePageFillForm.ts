import { ref, onMounted, computed } from "vue";
import { useStore } from '../store/store';
import { useStoredReservationData } from "../composables/useStoredReservationData";
import { useSpinner } from './useSpinner';
import { useToast } from "./useToast";
import { useFormValidation } from "./useFormValidation";

import type { FormsCustomer, FormsPassenger } from "./types/UsePageFillForm";
import type { Router } from "vue-router";

interface Params {
  router: Router;
}


export const usePageFillForm = ({ router }: Params) => {
  const store = useStore();
  const { showSpinner } = useSpinner();
  const { toast } = useToast();
  const { setStoredReservationData } = useStoredReservationData({ sessionId: store.sessionId });

  /* Form Reactive */
  const formsCustomer = ref<FormsCustomer>({
    /* Customer Data */
    name: {
      value: '',
      isPassed: false,
      message: '',
      label: 'Nama Customer',
      validation: { required: false, minLength: 3, maxLength: 32 },
    },
    email: {
      value: '',
      isPassed: false,
      message: '',
      label: 'Email Pemesan',
      validation: { required: true, regex: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/ },
      validationResult: { isPassed: false, message: null }
    },
    phoneNo: {
      value: '',
      isPassed: false,
      message: '',
      label: 'Nomor Telepon',
      validation: { required: true, minLength: 3, maxLength: 12 },
      validationResult: { isPassed: false, message: null }
    },
    address: {
      value: '',
      isPassed: false,
      message: '',
      label: 'Alamat',
      validation: { required: true },
      validationResult: { isPassed: false, message: null }
    },
  });

  const formsPassenger = ref<FormsPassenger[]>([]);

  for (let i = 1; i <= store.totalPassenger; i++) {
    const data: FormsPassenger = {
      index: i - 1,
      value: '',
      isPassed: false,
      label: 'Nama Penumpang',
      no: i.toString(),
      message: '',
      isSelected: i === 1 ? true : false,
      indexSeat: null,
      seat: null,
      validation: { required: true, minLength: 3, maxLength: 32 },
      validationResult: { isPassed: true, message: null }
    }

    formsPassenger.value.push(data);
  }

  const customerFormValidation = ({ value, label, identifier, validation }: any) => {
    const result = useFormValidation({ label, value, validation });
    formsCustomer.value[identifier].validationResult = result;
  }

  const passengerFormValidation = ({ value, label, index, validation }: any) => {
    const result = useFormValidation({ label, validation, value });
    formsPassenger.value[index].validationResult = result;
  }

  const triggerValidation = () => {
    Object.entries(formsCustomer.value).forEach(([key, values]) => {
      const { label, value, validation } = values;
      customerFormValidation({ value, label, validation, identifier: key });
    }); 

    formsPassenger.value.forEach((item, index) => {
      const { value, label, validation } = item;
      passengerFormValidation({ value, label, validation, index });
    });
  }

  const isFormFullFilled = computed(() => {
    const customer = Object.entries(formsCustomer.value).every(([_, value]) => {
      return value.validationResult?.isPassed;
    });

    const passengers = formsPassenger.value.every(item => {
      return item.validationResult?.isPassed;
    })

    return customer && passengers;
  });

  const toSelectSeats = () => {
    if (!isFormFullFilled.value) {
      triggerValidation();
      (toast as any).warn('Harap Lengkapi Form!');
      return;
    }
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

    setStoredReservationData();

    showSpinner.value = false;
  });

  return  {
    formsCustomer,
    formsPassenger,
    showSpinner,
    isFormFullFilled,
    toSelectSeats,
    triggerValidation,
    customerFormValidation,
    passengerFormValidation
  }

};