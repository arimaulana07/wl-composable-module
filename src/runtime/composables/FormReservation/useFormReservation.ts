import { storeToRefs } from 'pinia'
import { useStore } from '../../store/store';
import { useSelectOutlet } from "./useSelectOutlet";
import { nanoid } from 'nanoid';
import { useStorage } from '@vueuse/core';
import { useSetOutlets } from './useSetOutlets';
import { useApiData } from '../useApiData';
import { dateToYMD } from '../../utils';

export const useFormReservation = ({ modalDeparture, modalDestination, router }: any)  => {
  const store = useStore();
  const { selectedDeparture, selectedDestination, destinations } = storeToRefs(useStore());
  const { getDestination, getSchedule } = useApiData();


  const setSelectedDeparture = async ({ label, value, showModal }: any) => {
    
    console.log({ value, label, showModal });
    modalDeparture.value = false
    /* Set Departure Outlet */
    useSelectOutlet({
      currentSelectedOutlet: selectedDeparture,
      newSelectedOutlet: { editableLabel: label, value, label }
    });


    /* Set Destination Outlet */
    const fetchDestination = await getDestination({ outletasal: selectedDeparture?.value.value }); 
    useSetOutlets({
      outlets: destinations, 
      newOutlets: fetchDestination
    });

    useSelectOutlet({
      currentSelectedOutlet: selectedDestination,
      newSelectedOutlet: { editableLabel: null, label: null, value: null }
    });
  }

  const setSelectedDestination = ({ label, value }: any) => {
    modalDestination.value = false;
    useSelectOutlet({
      currentSelectedOutlet: selectedDestination,
      newSelectedOutlet: { editableLabel: label, value, label }
    });
  }

  /* Find Schedule Handler */
  const findSchedule = async () => {
    const sessionId = nanoid(16);
    const storedData = useStorage<any>(sessionId, null);
    const fetchSchedule = await getSchedule({
      outletasal: store.selectedDeparture?.value as string,
      outlettujuan: store.selectedDestination?.value as string,
      tglberangkat: dateToYMD(store.selectedDate)
    });
    console.log('fetchSchedule', fetchSchedule);
    store.schedules = fetchSchedule;
    store.sessionId = sessionId;
    store.sessionTimeStamp = new Date().getTime();
    storedData.value = JSON.stringify(store.$state);
    router.push({ name: 'reservation-schedule', query: { session_id: sessionId } });
  }

  return {
    setSelectedDeparture,
    setSelectedDestination,
    findSchedule
  }
}