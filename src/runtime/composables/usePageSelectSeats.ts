import { onMounted } from "vue";
import { useStore } from "../store/store";
import { useSpinner } from "./useSpinner";
import {useStoredReservationData} from './useStoredReservationData';
import { useApiData } from './useApiData';
import { formatDateReadable } from '../utils';

import type { Router } from "vue-router";

interface UsePageSelectSeats {
  router: Router;
}

export const usePageSelectSeats = ({ router }: UsePageSelectSeats) => {
  const store = useStore();

  /* Composable API */
  const { calculatePrice } = useApiData();

  /* spinner */
  const { showSpinner } = useSpinner();

  const seatsNo: string[] = [];
  for (let i = 1; i <= 200; i++) {
    seatsNo.push(i.toString());
  }

  const selectSeatHandler = (index: number) => {
    const selectedSeat = store.seats.petalayoutRemodel[index];
    const currenSelectedSeatIndex = store.selectedPassengerData?.indexSeat ?? null;

    const setSeatNumInPassenger = (value: number | string | null) => {
      if (store.selectedPassengerData) {
        store.passengersData[store?.selectedPassengerData?.index].seat = value;
      }
    }

    const setIndexSeatInPassenger = (value: number | null) => {
      if (store.selectedPassengerData) {
        store.passengersData[store?.selectedPassengerData?.index].indexSeat = value;
      }
    }

    const moveSelectedPassenger = () => {
      /* Early return if total passenger just one */
      if (store.passengersData && store.passengersData.length <= 1) return;

      const currentSelectedIndex = store.selectedPassengerData?.index;

      /* Set current selected to false */
      store.passengersData[currentSelectedIndex as number].isSelected = false;

      /* Conditionally Move Selected Passenger */
      currentSelectedIndex == store.passengersData.length - 1 ?
        store.passengersData[0].isSelected = true : 
        store.passengersData[currentSelectedIndex as number + 1].isSelected = true
    }

    /* Early return if user click on selected seat with other selected passenger */
    if (
        selectedSeat.isSelected &&
        (store.selectedPassengerData?.seat === null || currenSelectedSeatIndex !== index)
      ) return;

    /* Early return if user click the same seat (unselect seat) */
    if (currenSelectedSeatIndex === index) {
      store.seats.petalayoutRemodel[index].isSelected = false;
      setSeatNumInPassenger(null);
      setIndexSeatInPassenger(null);
      return; 
    }
    
    if (store.selectedPassengerData && store.selectedPassengerData.seat) {

      /* Unselect currect selected seat and set a new selected seat */
      store.seats.petalayoutRemodel[currenSelectedSeatIndex as number].isSelected = false;
      store.seats.petalayoutRemodel[index].isSelected = true;
      setSeatNumInPassenger(selectedSeat.label);
      setIndexSeatInPassenger(index);
    } else {
      /* Set selected in layout seats */
      store.seats.petalayoutRemodel[index].isSelected = !selectedSeat.isSelected;

      if (currenSelectedSeatIndex !== index) {
        setSeatNumInPassenger(selectedSeat.label);
        setIndexSeatInPassenger(index);
      }
    }
    moveSelectedPassenger();

  }

  const setSelectedPassenger = (selectedIndex: number) => {
    /* Unselect passenger */
    if (store.selectedPassengerData) {
      const currentSelectedIndex = store.selectedPassengerData.index;
      store.passengersData[currentSelectedIndex].isSelected = false;
    }

    /* Set selected passenger */
    store.passengersData[selectedIndex].isSelected = true;
  }

  const dynamicClass = (isSelected: boolean) => {
    return {
      seat : isSelected ? 'text-white bg-primary' : 'text-font-black bg-white',
      passenger: isSelected ? 'border-primary' : 'border-soft-gray'
    }
  }

  const formattedDate = formatDateReadable(store.selectedDate)
  

  const toPayment = async () => {
    const price = await calculatePrice({
      idoutletdropoff: store.selectedSchedule.id_outlet_dropoff,
      idoutletpickup: store.selectedSchedule.id_outlet_pickup,
      idproduk: store.selectedSchedule.id_produk,
      tglberangkat: store.selectedSchedule.tgl_berangkat_induk,
      nomorkursi: store.selectedSeatsLayout.map((seat) => seat.label).join(','),
      paymentchannel: '',
      isasuransi: 1
    });

    store.calculatedPrice = price.tiketux.result;
    const { setStoredReservationData } = useStoredReservationData({ sessionId: store.sessionId });
    setStoredReservationData();
    router.push({ name: 'payment', query: { session_id: store.sessionId } });
  }

  onMounted(() => {
    showSpinner.value = false;
  });

  return {
    showSpinner,
    formattedDate,
    selectSeatHandler,
    dynamicClass,
    setSelectedPassenger,
    toPayment
  }
}