import { ref, onMounted } from "vue";
import { useStore } from '../store/store';
import { group } from '../utils';
import { useStoredReservationData } from './useStoredReservationData';
import { useSpinner } from "./useSpinner";
import { useApiData } from './useApiData';
import { useExpandElement } from './useExpandElement'

import type { Router } from "vue-router";
import type { FormsCustomer } from "./types/UsePageFillForm";

interface UsePagePayment {
  router: Router;
}

export const usePagePayment = ({ router }: UsePagePayment) => {
  interface SelectedPayment {
    code: string;
    admin_fee: number;
  }

  /* Store */
  const store = useStore();
  
  /* API Fetch Composable */
  const { booking, detailBooking, calculatePrice } = useApiData();

  /* Spinner */
  const { showSpinner } = useSpinner();

  /* onChange Payment method handler */
  const selectedPayment = ref<SelectedPayment | null>(null);
  const onChangePaymentMethod = async (paymentCode: string) => {
    const price = await calculatePrice({
      idoutletdropoff: store.selectedSchedule.id_outlet_dropoff,
      idoutletpickup: store.selectedSchedule.id_outlet_pickup,
      idproduk: store.selectedSchedule.id_produk,
      tglberangkat: store.selectedSchedule.tgl_berangkat_induk,
      nomorkursi: store.selectedSeatsLayout.map((seat) => seat.label).join(','),
      paymentchannel: paymentCode,
      isasuransi: 1
    });

    store.calculatedPrice = price.tiketux.result;
  }

  /* Dynamic Height */
  const {
    dynamicHeight,
    onClickElHandler: onClickPaymentMethodHandler,
    elements: paymentMethodEl
  } = useExpandElement();


  /* Booking Handler */
  const listPayment = ref<any>([]);
  const { getListPayment } = useApiData();
  const bookingHandler = async () => {
    const {
      id_outlet_dropoff: idoutletdropoff,
      id_outlet_pickup: idoutletpickup,
      id_produk: idproduk,
      jam_berangkat: jamberangkat,
      tgl_berangkat_induk
    } = store.selectedSchedule;

    const { address, email, name, phoneNo } = store.customerData as FormsCustomer;
    const passengerNames = store.passengersData.map(passenger => passenger.value).join(',');
    const passengerSeats = store.passengersData.map(passenger => passenger.seat).join(',');


    const result = await booking({
      adminfee: selectedPayment.value?.admin_fee as number,
      alamatpemesan: address.value as string,
      emailpemesan: email.value as string,
      idoutletdropoff,
      idoutletpickup,
      idproduk,
      jamberangkat,
      keterangan: '',
      namapemesan: name.value as string,
      namapenumpang: passengerNames,
      nomorkursi: passengerSeats,
      payment: selectedPayment.value?.code as string,
      saleschannel: 'WHITELABEL_WEB',
      telppemesan: phoneNo.value as string,
      tglberangkat: tgl_berangkat_induk,
      tglberangkatinduk: tgl_berangkat_induk,
      isasuransi: 1,
    });

    const { kodeBooking: kodebooking } = result.tiketux.result;
    const detailBookingResult = await detailBooking({ kodebooking });
    store.detailBooking = detailBookingResult.tiketux.result;
    const { setStoredReservationData } = useStoredReservationData({ sessionId: store.sessionId });
    setStoredReservationData();
    router.push({ name: 'success', query: { session_id: store.sessionId } });  
  };

  onMounted(async () => {
    const payments = await getListPayment();
    const grouped = group(payments.tiketux.result, 'group');
    listPayment.value = grouped;
    showSpinner.value = false;
  });

  return {
    showSpinner,
    listPayment,
    selectedPayment,
    paymentMethodEl,
    onClickPaymentMethodHandler,
    dynamicHeight,
    onChangePaymentMethod,
    bookingHandler
  }
}