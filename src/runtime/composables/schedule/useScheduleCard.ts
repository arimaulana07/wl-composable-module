import { useStore } from '../../store/store';
import { useSpinner } from '../useSpinner';
import { useApiData } from '../useApiData';
import { seatsLayoutRemodel } from '../../utils';

import type { UsePageSchedule } from "../types/UsePageSchedule";

export const useScheduleCard = ({ router, props, emits }: UsePageSchedule) => {
  const store = useStore();
  const { getSeats } = useApiData();
  const { showSpinner } = useSpinner();
  const onClickDetailTripHandler = () => emits('onClickDetailTripHandler', props.indexParent);
  const toFillForm = async () => {
    store.selectedSchedule = props.data;
    const { id_produk, id_outlet_pickup, id_outlet_dropoff, tgl_berangkat_induk } = props.data;
    const seatFetch = await getSeats({
      idproduk: id_produk,
      outletasal: id_outlet_pickup,
      outlettujuan: id_outlet_dropoff,
      tglberangkat: tgl_berangkat_induk
    });

    const petalayoutRemodel = seatsLayoutRemodel(seatFetch.tiketux.result.petalayout);
    
    const seats = { ...seatFetch.tiketux.result, petalayoutRemodel };
    store.seats = seats;
  
    router.push({ name: 'fillform', query: { session_id: store.sessionId } });
  }

  return  { showSpinner, onClickDetailTripHandler, toFillForm }
}